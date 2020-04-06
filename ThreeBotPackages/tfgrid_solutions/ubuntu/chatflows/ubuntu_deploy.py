from Jumpscale import j


def chat(bot):
    """
    """
    user_form_data = {}
    user_info = bot.user_info()
    name = user_info["username"]
    email = user_info["email"]
    ips = ["IPv6", "IPv4"]
    HUB_URL = "https://hub.grid.tf/tf-bootable"
    IMAGES = ["ubuntu:16.04", "ubuntu:18.04"]
    explorer = j.clients.explorer.default
    model = j.threebot.packages.tfgrid_solutions.ubuntu.bcdb_model_get("tfgrid.solutions.ubuntu.instance.1")

    identity = j.sal.reservation_chatflow.validate_user(user_info)
    network = j.sal.reservation_chatflow.network_select(bot, identity.id)
    user_form_data["Solution name"] = j.sal.reservation_chatflow.add_solution_name(bot, model)

    user_form_data["Version"] = bot.single_choice(
        "This wizard will help you deploy an ubuntu container, please choose ubuntu version", IMAGES
    )
    user_form_data["Solution name"] = j.sal.reservation_chatflow.solution_name_add(bot, model)
    while not user_form_data.get("Public key"):
        user_form_data["Public key"] = bot.string_ask(
            "Please add your public ssh key, this will allow you to access the deployed container using ssh. Just copy your key from ~/.ssh/id_rsa.pub"
        )

    user_form_data["Env variables"] = bot.string_ask(
        """To set environment variables on your deployed container, enter comma-separated variable=value
        For example: var1=value1, var2=value2.
        Leave empty if not needed"""
    )
    user_form_data["CPU"] = bot.int_ask("Please add the how much cpu is needed", default=1)
    user_form_data["Memory"] = bot.int_ask("Please add the size you need for the memory in MB", default=1024)

    expirationdelta = int(bot.time_delta_ask("Please enter solution expiration time.", default="1d"))
    user_form_data["Solution expiration"] = j.data.time.secondsToHRDelta(expirationdelta)
    expiration = j.data.time.epoch + expirationdelta

    var_list = user_form_data["Env variables"].split(",")
    var_dict = {}
    for item in var_list:
        splitted_item = item.split("=")
        if len(splitted_item) == 2:
            var_dict[splitted_item[0]] = splitted_item[1]

    var_dict.update({"pub_key": user_form_data["Public key"]})
    # create new reservation
    reservation = j.sal.zosv2.reservation_create()
    identity = explorer.users.get(name=name, email=email)

    node_selected = j.sal.reservation_chatflow.nodes_get(1)[0]
    network_reservation, node_ip_range = j.sal.reservation_chatflow.add_node_to_network(node_selected, network)
    if network_reservation:
        j.sal.reservation_chatflow.reservation_register(network_reservation, network.expiration, identity.id)
    ip_address = bot.drop_down_choice(
        f"Please choose IP Address for your solution", j.sal.reservation_chatflow.get_all_ips(node_ip_range)
    )
    user_form_data["IP Address"] = ip_address
    bot.md_show_confirm(user_form_data)

    container_flist = f"{HUB_URL}/{user_form_data['Version']}-r1.flist"
    storage_url = "zdb://hub.grid.tf:9900"
    entry_point = "/bin/bash /start.sh"

    # create container
    cont = j.sal.zosv2.container.create(
        reservation=reservation,
        node_id=node_selected.node_id,
        network_name=network.name,
        ip_address=ip_address,
        flist=container_flist,
        storage_url=storage_url,
        env=var_dict,
        interactive=False,
        entrypoint=entry_point,
        cpu=user_form_data["CPU"],
        memory=user_form_data["Memory"],
    )

    resv_id = j.sal.reservation_chatflow.reservation_register(reservation, expiration, customer_tid=identity.id)

    if j.sal.reservation_chatflow.reservation_failed(bot=bot, category="CONTAINER", resv_id=resv_id):
        return

    else:
        j.sal.reservation_chatflow.reservation_save(
            resv_id, user_form_data["Solution name"], "tfgrid.solutions.ubuntu.instance.1"
        )
        res = f"# Ubuntu has been deployed successfully: your reservation id is: {resv_id} "

        bot.md_show(res)

        res = "# To connect ```ssh {}``` It may take a few minutes.".format(ip_address)
        res = j.tools.jinja2.template_render(text=res, **locals())
        bot.md_show(res)

from Jumpscale import j


def chat(bot):
    """
    """
    user_form_data = {}
    user_info = bot.user_info()

    identity = j.sal.reservation_chatflow.validate_user(user_info)
    network_name = bot.string_ask(
        "Please enter a network name"
    )
    expirationdelta = int(bot.time_delta_ask("Please enter network expiration time.", default="1d"))
    user_form_data["Solution expiration"] = j.data.time.secondsToHRDelta(expirationdelta)
    expiration = j.data.time.epoch + expirationdelta
    ips = ["IPv6", "IPv4"]
    ipversion = bot.single_choice("How would you like to connect to your network? IPv4 or IPv6? If unsure, choose IPv4", ips)

    # create new reservation
    extargs = {"name": network_name}
    reservation = j.sal.zosv2.reservation_create()
    ip_range = j.sal.reservation_chatflow.ip_range_get(bot)
    config = j.sal.reservation_chatflow.network_create(
        network_name, reservation, ip_range, identity.id, ipversion, expiration=expiration
    )

    # inform user howto connect
    res = """
            # Use the following template to configure your wireguard connection. This will give you access to your network.
            ## Make sure you have <a href="https://www.wireguard.com/install/">wireguard</a> installed
            Click next
            to download your configuration
            """
    res = j.tools.jinja2.template_render(text=j.core.text.strip(res), **locals())
    bot.md_show(res)

    res = j.tools.jinja2.template_render(text=config["wg"], **locals())
    filename = "{}_{}.conf".format(identity.name.split(".3bot")[0], config["rid"])
    bot.download_file(res, filename)

    res = """
            # In order to have the network active and accessible from your local machine. To do this, execute this command:
            ## ```wg-quick up /etc/wireguard/{}```
            Click next
            """.format(
        filename
    )

    res = j.tools.jinja2.template_render(text=j.core.text.strip(res), **locals())
    bot.md_show(res)

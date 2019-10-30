# Dynamic content

This macro is used to generate [inline html](../html.md) by fetching/rendering the content from an actor dynamically.


### Syntax:

```
!!!dynamic_content("actor", "method", arg1=...)
```

or using toml (inside a code block)

````
```
!!!dynamic_content
actor = "actor"
method = "method"
arg1 = ...
```
````


### Examples


Given an actor that with `hello` method:

```python
from Jumpscale import j


class html_test(j.baseclasses.threebot_actor):
    def hello(self, name, user_session, schema_out=None):
        """
        :param name: name to say hello to

        ```in
        name = (S)
        ```

        ```out
        content = (S)
        ```
        """
        out = schema_out.new()
        out.content = f"Hello <h3>{name}</h3>"
        return out
```

We can call hello every time the page/document gets loaded as follows:


````
```
!!!dynamic_content
actor = "html_test"
method = "hello"
name = "John doe"
```
````

The output will be as follows inside the document:

```html
Hello <h3>John doe</h3>
```
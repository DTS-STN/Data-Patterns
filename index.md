---
layout: default
lang-link: index-fr.html
lang: en
---

## Patterns

{% for pattern in site.patterns %}
    {% if pattern.lang == 'en' %}

* [{{ pattern.name }} - {{ pattern.short-description }}]({{ pattern.url | relative_url }})

    {% endif %}
{% endfor %}

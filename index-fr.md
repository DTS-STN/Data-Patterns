---
layout: default
lang-link: index.html
lang: fr
date-modified: 2021-07-07
---

## Patterns

{% for pattern in site.patterns %}
    {% if pattern.lang == 'fr' %}

* [{{ pattern.name }} - {{ pattern.short-description }}]({{ pattern.url | relative_url }})

    {% endif %}
{% endfor %}

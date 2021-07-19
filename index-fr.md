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

## About Data Patterns

What are they?
How can you use them?
[Get to know them and this project.](about.html)

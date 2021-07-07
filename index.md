---
layout: default
name: Home
lang-link: index-fr.html
lang: en
---

This site is currently a WIP.

## Patterns

<section class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title" id="patterns">patterns</h3>
    </div>
    <div class="panel-body">
        <ul class="colcount-md-3">
            {% for pattern in site.patterns %}
            {% if pattern.lang == 'en' %}
            <li><a href="{{ pattern.url | relative_url }}">{{ pattern.name }} - {{ pattern.short-description }}</a></li>
            {% endif %}
            {% endfor %}
        </ul>
    </div>
</section>

## Get More Involved

Feel free to fork and submit a PR to any of our repos.

See [CONTRIBUTING.md](https://github.com/esdc-devcop/esdc-devcop.github.io/blob/master/CONTRIBUTING.md)

---
layout: default
title: Data Patterns (FR)
lang-link: index.html
lang: fr
---

This site is currently a WIP.

## Patterns

<section class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title" id="patterns">patterns</h3>
    </div>
    <div class="panel-body">
        <ul class="colcount-md-3">
            {% for reference in site.references %}
            <li><a href="{{ reference.url | relative_url }}">{{ reference.title }}</a></li>
            {% endfor %}
        </ul>
        <details>
            <summary>More</summary>
            <ul class="colcount-md-2">
                {% for link in site.data.referenceLinks.links %}
                <li><a href="{{ link.url | relative_url }}">{{ link.name }}</a></li>
                {% endfor %}
            </ul>
        </details>
    </div>
</section>

## Get More Involved

Feel free to fork and submit a PR to any of our repos.

See [CONTRIBUTING.md](https://github.com/esdc-devcop/esdc-devcop.github.io/blob/master/CONTRIBUTING.md)

---
layout: default
title: Bibliothèque de modèles de données
lang-link: index.html
lang: fr
date-modified: 2021-07-07
---

## Les modèles

{% for pattern in site.patterns %}
    {% if pattern.lang == 'fr' %}

* [{{ pattern.name }} - {{ pattern.short-description }}]({{ pattern.url | relative_url }})

    {% endif %}
{% endfor %}

## À propos des modèles de données

Qu'est-ce qu'ils sont ?
Comment les utiliser ?
[Apprenez à les connaître et à connaître ce projet.](about-fr.html)

---
layout: default
name: Opter pour donner son consentement
short-description: Informer l'utilisateur de la collecte de données et lui demander de donner son consentement.
lang-link: opt-in.html
lang: fr
status: en développement
date-modified: 2021-07-22
---

## {{ page.name }}

<section class="alert alert-info">
    <p>Ce modèle est actuellement <strong>{{ page.status }}</strong>.</p>
</section>

{{ page.short-description }}

Nous avons la responsabilité de demander le consentement des utilisateurs lorsque nous voulons collecter, stocker ou utiliser leurs données notamment des informations personnelles.

Ce modèle demande à l'utilisateur de :

* Lire un résumé de l'avis de confidentialité
* Confirmer qu'il comprend clairement et accepte librement la manière dont ses données seront collectées et utilisées.

### Quand utiliser ce modèle

Utilisez ce modèle lorsque :

* Les avis de confidentialité (déclarations, conditions d'utilisation, etc.) sont nécessaires. Par exemple, l'inscription à un nouveau service ou le stockage de données dans des cookies.
* Vous êtes tenu par la loi d'enregistrer quand et comment le consentement est donné. Cela inclut la version d'un avis de confidentialité que l'utilisateur a accepté.
* L'utilisateur comprend quelles données sont collectées, où elles sont stockées, à quelles fins elles sont utilisées et pendant combien de temps.
* L'utilisateur est en mesure de refuser, de corriger ou de supprimer ses données à tout moment.

### Quand ne pas utiliser ce modèle

N'utilisez pas ce modèle lorsque :

* Le type de données collectées, l'endroit où elles sont stockées, l'usage qui en est fait et la durée de leur utilisation ne sont pas précisés ou changera souvent.
* L'utilisateur n'est pas en mesure de voir ou d'accéder aux autres données que l'organisation collecte et à leurs finalités ou utilisations.
* Il n'existe pas de procédure claire permettant à l'utilisateur de refuser, de corriger ou de supprimer ses données à tout moment.

### Comment ça fonctionne?

Lorsque vous collectez les données d'un utilisateur, assurez-vous que les éléments suivants sont **présents, faciles à trouver, à lire et à utiliser**.

* Une déclaration de confidentialité résumée mettant en évidence le(s) types de collecte, de stockage et d'utilisation des données, avec des liens vers la déclaration complète.
* Une brève description de la manière de se désinscrire, de corriger ou de supprimer leurs données ultérieurement.
* Une action positive que l'utilisateur peut prendre pour accepter la déclaration de confidentialité (c'est-à-dire une case à cocher qui n'est pas présélectionnée).

### Recherche et impacts

Bientôt disponible

### Exemples

#### Collecte des données démographiques des utilisateurs pour la recherche sur Canada.ca

<!-- IMPORTANT - Ajoutez des liens vers le SCL et inscrivez-vous une fois en ligne ! -->

Service Canada Labs - un site d’essai pour les idées expérimentales et les travaux en cours - invite les utilisateurs à s'inscrire pour aider à améliorer ce travail en participant à des activités de recherche.

Le formulaire d'inscription demande aux utilisateurs de partager certaines informations de contact obligatoires et certaines informations démographiques facultatives.

Lors de la collecte des données démographiques des utilisateurs à des fins de recherche sur Canada.ca (et sur des sites connexes comme Service Canada Labs), les éléments suivants doivent être inclus sur la même page que le formulaire de collecte des données.

> **Politique en matière de protection des renseignements personnels**
>
> Vos renseignements personnels ne seront pas utilisés dans le cadre d'un processus décisionnel qui vous touche directement ou qui vous donne accès aux services du gouvernement du Canada.
> Vos renseignements ne seront pas utilisés à des fins administratives.
>
> Votre participation est volontaire.
> Vous pouvez retirer votre participation et vos renseignements personnels de notre liste à tout moment, sans aucune conséquence sur votre accès aux services ou prestations du gouvernement.
>
> Vos renseignements personnels et vos commentaires sont confidentiels.
>
> Vos renseignements seront utilisés par Emploi et Développement social Canada à des fins d'analyse des politiques, de recherche et d'évaluation.
>
> **Ce que nous allons recueillir**
>
> Nous avons besoin des renseignements suivants pour pouvoir communiquer avec vous :
>
> * Adresse de courrier électronique
> * Année de naissance
> * Langue de votre choix
>
> Vous pouvez également choisir d’échanger plus de renseignements avec nous afin que nous puissions vous inviter à participer à des recherches en fonction de vos expériences de vie :
>
> * Province ou territoire
> * Identité de genre
> * Identité autochtone
> * Situation de handicap
> * Groupe de minorité visible
> * Niveau de revenus
>
> Nous recueillons ces informations pour nous assurer que nos groupes de recherche sont diversifiés et pour identifier les tendances dans les commentaires de groupes spécifiques.
>
> [Lire la politique en matière de protection des renseignements personnels dans son intégralité.](https://www.canada.ca/fr/transparence/confidentialite.html)
>
> **Comment se désinscrire des invitations à participer aux recherches**
>
> Si vous vous êtes déjà inscrit pour participer et que vous ne souhaitez plus être contacté pour de futures recherches, vous pouvez vous [désinscrire](#desinscrire) et nous supprimerons vos renseignements personnels.
>
> _Mettez votre formulaire ici._
>
> <div class="checkbox">
> <input type="checkbox" id="consent" name="consent" value="consent">
> <label for="consent" class="required"><strong>J’ai lu, compris et accepté ce qui précède. J’affirme que j’ai 18 ans ou plus. Je comprends que je peux me retirer de ce groupe de participants ou de toute étude de recherche à tout moment, sans conséquence.</strong></label>
> </div>

Une fois que l'utilisateur accepte que ses données soient collectées et soumet le formulaire, le formulaire transmet ces informations à une base de données où elles sont stockées.

Pour en savoir plus sur les éléments techniques qui composent le formulaire d'inscription de Service Canada Labs, lisez cette [documentation de conception](https://github.com/DTS-STN/Alpha-Site/wiki/Design-Doc-004-Screener-Intake-Process).

### Modèles et composants connexes

* [Déclaration de confidentialité (système de conception Canada.ca)](https://design.canada.ca/common-design-patterns/privacy-disclaimer.html)
* [Générateur de déclarations de confidentialité (Service numérique canadien)](https://privacy-statements.cds.alpha.canada.ca/en/)

### Changements récents

* 2021-07-13 - Début du développement
* 2021-07-22 - Première version publiée

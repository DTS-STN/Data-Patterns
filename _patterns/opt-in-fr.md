---
layout: default
name: Opter pour donner son consentement
short-description: Informer l'utilisateur de la collecte de données et lui demander de donner son consentement.
feature-img-path: assets/images/opt-in-fr.png
permalink: /modeles/opter.html
lang-link: ../patterns/optin.html
lang: fr
status: en cours de développement
date-modified: 2021-07-22
---

{% include pattern-summary.html %}

Nous avons la responsabilité de demander le consentement des utilisateurs lorsque nous voulons collecter, stocker ou utiliser leurs données notamment des renseignements personnels.

Ce modèle demande à l'utilisateur de :

* lire un résumé de l'avis de confidentialité;
* confirmer qu'il comprend clairement et accepte librement la manière dont ses données seront collectées et utilisées.

## Quand utiliser ce modèle

Utiliser ce modèle lorsque :

* les avis de confidentialité (déclarations, conditions d'utilisation, etc.) sont nécessaires. Par exemple, l'inscription à un nouveau service ou le stockage de données dans des témoins;
* vous êtes tenu par la loi d'enregistrer quand et comment le consentement est donné. Cela inclut la version d'un avis de confidentialité que l'utilisateur a accepté;
* l'utilisateur comprend quelles données sont collectées, où elles sont stockées, à quelles fins elles sont utilisées et pendant combien de temps;
* l'utilisateur est en mesure de refuser, de corriger ou de supprimer ses données à tout moment.

## Quand ne pas utiliser ce modèle

Ne pas utiliser pas ce modèle lorsque :

* le type de données collectées, l'endroit où elles sont stockées, l'usage qui en est fait et la durée de leur utilisation ne sont pas précisés ou changera souvent;
* l'utilisateur n'est pas en mesure de voir ou d'accéder aux autres données que l'organisation collecte et à leurs finalités ou utilisations;
* il n'existe pas de procédure claire permettant à l'utilisateur de refuser, de corriger ou de supprimer ses données à tout moment.

## Comment ce modèle fonctionne

Lorsque vous collectez les données d'un utilisateur, assurez-vous que les éléments suivants sont **présents, faciles à trouver, à lire et à utiliser**.

### Déclaration de confidentialité

Une déclaration de confidentialité résumée mettant en évidence le(s) type(s) de collecte, de stockage et d'utilisation des données, avec des liens vers la déclaration complète.
Veillez à utiliser les niveaux de titre appropriés, généralement un `h2` est utilisé.

<section>
    <h4>Exemple de déclaration de confidentialité</h4>
    <div class="panel panel-default pattern-demo">
        <div class="panel-body">
            <p class="h2 mrgn-tp-sm">Politique en matière de protection des renseignements personnels<span class="sr-only"> [H2]</span></p>
            <p><em>[Vous pouvez ajouter ici une déclaration de confidentialité personnalisée qui respecte la politique de confidentialité du gouvernement du Canada. Elle doit indiquer clairement comment les enseignements personnels de l'utilisateur <strong>seront ou ne seront pas</strong> utilisées. Des exemples suivent.]</em></p>
            <p>Vos renseignements personnels <strong>ne seront pas</strong> utilisées dans le cadre d'un processus décisionnelqui vous touche directement ou qui vous donne aux services du gouvernement du Canada. Vos renseignements <strong>ne seront pas</strong> utilisés à des fins administratives.</p>
            <p>Vos renseignements personnels et vos commentaires sont confidentiels.</p>
            <p>Vos renseignements <strong>seront</strong> utilisés par Emploi et Développement Social Canada pour <em>[expliquez brièvement à quoi serviront les renseignements]</em>.</p>
            <p class="h3">Ce que nous allons recueillir<span class="sr-only"> [H3]</span></p>
            <p>Nous avons besoin des renseignements suivants pour <em>[expliquer brièvement pourquoi vous avez besoin des données suivantes] </em>:</p>
            <ul>
                <li>Adresse de courrier électroniquel</li>
                <li><em>[Indiquez d'autres données d'identification personnelle obligatoires]</em></li>
            </ul>
            <p>Vous pouvez également choisir d’échanger plus de renseignements avec nous pour que nous puissions <em>[expliquez brièvement comment le fait de fournir les données suivantes permettra de fournir des services à l'utilisateur] </em>:</p>
            <ul>
                <li>Province ou territoire</li>
                <li><em>[Indiquez d'autres données d'identification personnelle facultatives]</em></li>
            </ul>
            <p>Nous recueillons ces renseignements pour nous assurer que nos groupes de recherche sont diversifiés et pour reconnaître les tendances en matière de rétroaction provenant de groupes précis.</p>
            <p><a href="https://www.canada.ca/fr/transparence/confidentialite.html">Lisez la politique en matière de protection des renseignements personnels dans son intégralité.</a></p>
        </div>
    </div>
    {% capture privacyPolicyCode %}&lt;h2>Politique de confidentialité&lt;/h2>
&lt;p>Vos informations &lt;strong>ne seront pas&lt;/strong> utilisées dans le cadre d'un processus décisionnelqui affecte votre accès aux services du Gouvernement du Canada. Vos renseignements personnels &lt;strong>ne seront pas&lt;/strong> utilisés à des fins administratives.&lt;/p>
&lt;p>Vos renseignements personnels et vos commentaires sont confidentiels.&lt;/p>
&lt;p>Vos renseignements &lt;strong>seront&lt;/strong> utilisés par Emploi et Développement Social Canada pour ...&lt;/p>
&lt;h3>Ce que nous allons recueillir&lt;/h3>
&lt;p>Nous avons besoin des renseignements suivants pour ...:</p>
&lt;ul>
    &lt;li>Adresse de courriel&lt;/li>
    &lt;li>...&lt;/li>
&lt;/ul>
&lt;p>Vous pouvez également choisir de nous communiquer d'autres renseignements pour que nous puissions ...:&lt;/p>
&lt;ul>
    &lt;li>Province ou territoire&lt;/li>
    &lt;li>...&lt;/li>
&lt;/ul>
&lt;p>Nous recueillons ces renseignements pour nous assurer que nos groupes de recherche sont diversifiés et pour déterminer les tendances en matière de rétroaction pour des groupes particuliers.&lt;/p>
&lt;p>&lt;a href="https://www.canada.ca/fr/transparence/confidentialite.html">Lisez la politique de confidentialité complète.&lt;/a>&lt;/p>{% endcapture %}
    {% include codeBlock.html content=privacyPolicyCode %}
</section>

### Description de l'option de refus

Une brève description de la manière de refuser, de corriger ou de supprimer ses données ultérieurement.
La section doit commencer par un titre de même niveau que la déclaration de confidentialité, généralement un `h2`.

<section>
    <h4>Exemple de description de désabonnement</h4>
    <div class="panel panel-default pattern-demo">
        <div class="panel-body">
            <p class="h2 mrgn-tp-sm">Comment se désabonner de <em>[identifier de quoi l'utilisateur se désabonne]</em><span class="sr-only"> [H2]</span></p>
            <p>Si vous vous êtes déjà inscrit pour participer et que vous ne souhaitez plus être contacté <em>expliquez en détail ce dont l'utilisateur se désabonne]</em>, vous pouvez vous <a href="#desabonner">désabonner</a> et nous supprimerons vos renseignements personnels.</p>
        </div>
    </div>
    {% capture unsubscribeCode %}&lt;h2>Comment se désabonner de ...&lt;/h2>
&lt;p>Si vous vous êtes précédemment inscrit pour devenir un participant et que vous ne souhaitez plus être contacté à l'avenir ..., vous pouvez vous &lt;a href="#desabonner">désabonner&lt;/a> de la liste des participants et nous supprimerons vos informations personnelles.&lt;/p>{% endcapture %}
    {% include codeBlock.html content=unsubscribeCode %}
</section>

### Action affirmative

Action affirmative que l'utilisateur peut entreprendre pour accepter la déclaration de confidentialité (par exemple, une case à cocher qui n'est pas présélectionnée).

<section>
    <h4>Exemple d'action affirmative</h4>
    <div class="panel panel-default pattern-demo">
        <div class="panel-body">
            <div class="checkbox-inline">
                <label for="consent" class="required">
                    <input type="checkbox" id="consent" name="consent" value="consent">
                    <strong>J’ai lu, compris et accepté de qui précède. J'affirme que j'ai 18 ans ou plus. Je comprends que je peux me retirer de ce <em>[nom duservice]</em> à tout moment sans conséquence.</strong>
                </label>
            </div>
        </div>
    </div>
    {% capture affirmativeActionCode %}&lt;div class="checkbox-inline">
    &lt;label for="consent" class="required">
        &lt;input type="checkbox" id="consent" name="consent" value="consent">
        &lt;strong>J'affirme que j'ai 18 ans ou plus. Je comprends que je peux me retirer de ce ... à tout moment sans conséquence.&lt;/strong>
    &lt;/label>
&lt;/div>{% endcapture %}
    {% include codeBlock.html content=affirmativeActionCode %}
</section>

# Recherche et impactes

## Bientôt disponible

## Modèles et composants connexes

* [Déclaration de confidentialité (système de conception Canada.ca)](https://design.canada.ca/common-design-patterns/privacy-disclaimer.html)
* [Générateur de déclarations de confidentialité (Service numérique canadien)](https://privacy-statements.cds.alpha.canada.ca/en/)

## Récents changements

* 2021-07-13 - Début du développement
* 2021-07-22 - Première version publiée

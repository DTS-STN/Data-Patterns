---
layout: default
title: À propos des modèles de données
permalink: /a-propos.html
lang-link: about.html
lang: fr
date-modified: 2021-07-16
---

## Que sont les modèles de données ?

Les modèles sont comme des blocs de construction pour la conception de services.
En créant des modèles, nous créons une façon répétitive de faire quelque chose.
Nous pouvons nous assurer que l'apparence, la sensation et le fonctionnement de quelque chose sont identiques, de sorte que nous comprenons clairement ce que nous faisons, quel que soit le moment ou l'endroit où nous le faisons.

Les modèles de données se concentrent sur les interactions répétitives impliquant des flux de données, comme le fait de donner ou de retirer son consentement, d'accéder à des données ou de comprendre une décision automatisée.
Les modèles de données rassemblent des éléments de conception, de technique et de politique afin de donner une vue d'ensemble de ce qui se passe avec les données des personnes, du système frontal _(front-end)_ au système en arrière-plan _(back-end)_, et inversement.

## Pourquoi les modèles de données sont-ils importants?

Les modèles de données peuvent nous aider à renforcer la confiance avec les utilisateurs en garantissant que nos services numériques sont privés, sûrs et équitables par conception.

Pour les **utilisateurs** (les personnes qui utilisent nos services), il est essentiel de pouvoir comprendre comment nos services fonctionnent et utilisent les données pour prendre des décisions éclairées pour eux-mêmes ou pour les personnes dont ils s'occupent.

Pour les **équipes** (les personnes qui créent nos services), la possibilité de réutiliser et d'adapter les composants de manière responsable facilite la création des meilleurs services possibles, c'est-à-dire des services qui suivent systématiquementles règles ou les meilleures pratiques et qui fonctionnent les uns avec les autres afinde répondre aux besoins des utilisateurs.

### Éviter les interfaces truquées _(dark patterns)_

Travailler avec les utilisateurs pour développer des modèles de données fiables peut également nous aider à éviter les interfaces truquées.

Les [interfaces truquées (dark patterns)](https://fr.wikipedia.org/wiki/Dark_pattern) sont des « astuces utilisées dans les sites web et les applications qui vous font faire des choses que vous n'aviez pas l'intention de faire, comme acheter ou vous inscrire à quelque chose ».
Ils utilisent le [pouvoir du design (en anglais seulement)](https://dapde.de/en/) pour que les propriétaires ou les créateurs d'un produit en profitent davantage que les personnes qui l'utilisent.

Les interfaces truquées peuvent y parvenir de nombreuses façons différentes, mais principalement en limitant :

* **le consentement** : la possibilité pour les personnes de choisir les données qu'ellesveulent ou ne veulent pas collectées, utilisées, stockées ou partagées.
* **l’ouverture** : la possibilité pour les personnes de voir, de comprendre et de participer à la conception et au fonctionnement d'un service.
* **la responsabilité** : la capacité de donner, de recevoir et de répondre aux commentaires.

#### Exemple : Fenêtre contextuelle à propos des témoins

Par exemple, nous sommes [tenus par la loi](https://laws-lois.justice.gc.ca/fra/lois/p-21/TexteComplet.html) de demander le consentement des personnes lorsque nous souhaitons collecter des données via des cookies.
Pour ce faire, nous demandons souvent aux gens de donner leur consentement par l'intermédiaire d'une fenêtre contextuelle sur les cookies.

Bien que la Loi sur la protection des renseignements personnels nous oblige uniquement à demander aux gens leurautorisation pour collecter eurs renseignements personnels, il est recommandé de leur demander s'ils sont d'accord avec d'autres types de collecte de données, y compris l'utilisation de témoins.
Pour ce faire, les sites Web demandent souvent aux gens de consentir à la collectede données par le biais d'une fenêtre contextuelle.

L’interface truquée pour d’une fenêtre contextuelle à propos des témoins peut vous amener à partager plus de données que vous ne le souhaitez en supposant que vous voulez consentir à tous les témoins, puis en rendant difficile la modification de vos préférences.

L'un des moyens d'y parvenir est de recourir à des designs trompeurs tels que la **fausse direction**, où un élément visuel tel qu'un bouton est utilisé pour détourner l'attention du contenu et amener l'utilisateur à effectuer une action qu'il n'aurait peut-être pas autrement.

<img class="img-responsive" src="assets/images/misdirection-fr.png" alt="Fenêtre contextuelle à propos des témoins comportant trois paramètres et des boutons coulissants à bascule pour chacun d'entre eux, réglés sur à la position désactivée. Il n'y a aucune information sur l'effet de chaque paramètre. Un bouton « Accepter tout » dans le coin inférieur droit distrait l'utilisateur et l'encourage à accepter tous les paramètres.">

Une autre façon de procéder consiste à combiner des modèles d'obstruction, notamment:

* **la présélection** : lorsque les options de paramètres sont sélectionnées par défaut.
* **la fatigue du clic** : lorsque l'utilisateur est amené à accepter un chemin par défaut ou facile en créant des chemins de clics de longueurs et d'efforts différents.
* **informations cachées** : lorsque des options ou des détails utiles sont cachés ou difficiles d'accès.

<img class="img-responsive" src="assets/images/preselection-fr.png" alt="Fenêtre contextuelle à propos des témoins comportant trois paramètres et des boutons coulissants à bascule pour chacun d'eux, activés. Étant donné que tous les paramètres sont présélectionnés et qu'il n'y a pas d'option pour tout effacer, l'utilisateur doit cliquer sur chaque bouton à bascule individuellement pour ajuster ses paramètres. Les informations relatives aux paramètres sont masquées par un lien « Paramètres avancés ». Un bouton « Soumettre » permet à l'utilisateur de confirmer ses choix.">

Nos modèles de données visent à contrer les interfaces truquées en soutenant et en élargissant le consentement, l'ouverture et la responsabilité plutôt que les restreindre.

Voici quelques moyens d'y parvenir:

* rendre les informations **accessibles**, avec **différents niveaux de détail**;
* **ne pas présélectionner les options** ou faire des hypothèses par défaut, à moins qu'elles ne soient validées par les besoins de l'utilisateur;
* proposer des options en un ou deux clics pour modifier les paramètres **enbloc** et des options pour modifier les paramètres **individuels**.

<img class="img-responsive" src="assets/images/options-fr.png" alt="Une fenêtre contextuelle de cookie comportant trois paramètres et desboutons coulissants à bascule pour chacun d'entre eux, désactivés. Chaque paramètre est accompagné d'une brève description qui peut être développée pour obtenir plus d'informations. Deux liens permettent à l'utilisateur de &quot;Sélectionner tout&quot; ou &quot;Effacer tout&quot;. Un bouton &quot;Soumettre&quot; permet à l'utilisateur de confirmer ses choix.">

Le plus important, c’est que nous pouvons éviter les interfaces truquées et créer des modèles plus éthiques et plus autonomes en concevant avec les utilisateurs.
Ainsi, notre seul défaut est de veiller à ce que leurs divers besoins soient exprimés et satisfaits tout au long du processus de développement, d'utilisation et d'amélioration de nos services.

## Comment puis-je utiliser un modèle ?

Les différents composants du modèle sont destinés à différents utilisateurs (concepteurs de services, développeurs, experts en politique, chercheurs, etc.), généralement au sein d'une équipe.

Consultez notre [gabarit (sur GitHub)](https://github.com/DTS-STN/Data-Patterns/blob/main/_patterns/_template-fr.md) pour obtenir des descriptions de ces composants ou des conseils pour commencer à développer votre propre modèle.

Avant d'utiliser un modèle, vous devriez également vérifier l'état du modèle via `{{ page.status }}` ou la bannière d'alerte sous le titre du modèle sur une page web.

Si un modèle est **en développement**, cela signifie qu'il s'agit d'une idée émergente et que nous sommes encore en train de réfléchir à la manière de l'implémenter.
Nous vous encourageons à le tester et à nous faire part de vos commentaires pour qu'il soit prêt à être utilisé.

Si le modèle est en **cours d'utilisation**, cela veut dire qu’il fait déjà partie de nos services et qu’il est prêt à être réutilisée dans d'autres contextes.
Nous vous encourageons à l'utiliser, à mesurer son fonctionnement et à partager vos commentaires pour l'améliorer.

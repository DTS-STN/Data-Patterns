# Data-Patterns

([Français](#Modèles-de-données))

Reusable design patterns and components that give people more power over their data and help teams build more trustworthy digital services.

Created for Service Canada and beyond!

## Share your feedback

We're in the early days of developing this approach and would love your help!

If you're interested in contributing to this work, please review our [CONTRIBUTING.md](CONTRIBUTING.md).

You can also send an email to sarah.ingle@servicecanada.gc.ca with feedback at anytime.

## Repo Notes

### Core technology used

* [CDTS](https://cenw-wscoe.github.io/sgdc-cdts/docs/index-en.html) - implementing [WET-BOEW](https://wet-boew.github.io/wet-boew-styleguide/index-en.html) - As the front end design framework (no install necessary)
* [Jekyll](https://jekyllrb.com/) - As the HTML compiler from MD (runs on ruby gems bundler)
* [markdownlint] - for markdown syntax check (runs with npm)

### Getting started locally

1. Ensure the core technologies are installed.
2. Install the dependancies

   ```bash
   bundle install
   ```

3. Run the compiler and local host provider

   ```bash
   npm start
   ```

   or
   
   ```bash
   bundle exec jekyll serve
   ```

Execute the markdown syntax check

```bash
npm test
```

## Acknowledgements

We're building on leading work from other governments, organizations, and communities to make the technologies we use everyday more private, safe, and equitable.

Some places, people, and practices we've looked to for inspiration include:

* Projects by IF's [Data Patterns Catalogue](https://catalogue.projectsbyif.com/)
* [Gov.uk Pattern Library](https://design-system.service.gov.uk/patterns/)
* UC Berkeley iSchool's [Privacy Patterns](https://www.privacypatterns.org/)
* [Privacy by Design Principles](https://www.ipc.on.ca/wp-content/uploads/resources/7foundationalprinciples.pdf), of course!

## License

Unless otherwise noted, the source code of this project is covered under Crown Copyright, Government of Canada [Copyright Canada](LICENSE).

The Canada wordmark and related graphics associated with this distribution are protected under trademark law and copyright law.
No permission is granted to use them outside the parameters of the Government of Canada's corporate identity program.
For more information, see [Federal identity requirements](https://www.canada.ca/en/treasury-board-secretariat/topics/government-communications/federal-identity-requirements.html).

------

## Modèles de données

Des modèles et des composants de conception réutilisables qui donnent aux gens plus de pouvoir sur leurs données et aident les équipes à créer des services numériques plus fiables.

Créé pour Service Canada et au-delà !

## Partagez vos commentaires

Nous en sommes aux premiers jours du développement de cette approche et nous aimerions que vous nous aidiez !

Si vous souhaitez contribuer à ce travail, veuillez consulter notre [CONTRIBUTING.md](CONTRIBUTING.md).

Vous pouvez également envoyer un courriel à sarah.ingle@servicecanada.gc.ca pour nous faire part de vos commentaires à tout moment.

## Remerciements

Nous nous appuyons sur le travail de pointe et l’expérience d'autres gouvernements, organisations et communautés pour rendre les technologies que nous utilisons quotidiennement plus privées, plus sûres et plus équitables.

Parmi les lieux, les personnes et les pratiques dont nous nous sommes inspirés, citons notamment :

* Projects by IF's [Data Patterns Catalogue](https://catalogue.projectsbyif.com/)
* [Gov.uk Pattern Library](https://design-system.service.gov.uk/patterns/)
* UC Berkeley iSchool's [Privacy Patterns](https://www.privacypatterns.org/)
* [Privacy by Design Principles](https://www.ipc.on.ca/wp-content/uploads/resources/7foundationalprinciples.pdf), bien sûr!

## Licence / License

Sauf indication contraire, le code source de ce projet est couvert par le droit d'auteur de la Couronne, Gouvernement du Canada [Copyright Canada](LICENSE)

Le mot-symbole Canada et les graphiques connexes associés à cette distribution sont protégés par le droit des marques et le droit d'auteur.
Aucune permission n'est accordée pour les utiliser en dehors des paramètres du programme d'image de marque du Gouvernement du Canada.
Pour plus d'information, voir [Exigences pour l'image de marque - Canada.ca](https://www.canada.ca/fr/secretariat-conseil-tresor/sujets/communications-gouvernementales/exigences-image-marque.html)

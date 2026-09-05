# ATYPIQUE. : instructions du projet

## Objectif du projet

- Créer le portfolio professionnel de **ATYPIQUE.**, un studio indépendant de développement web.
- Le site comporte deux univers complémentaires :
  - **Le Studio** : missions freelance en back-end et création complète de projets web.
  - **Le Lab** : projets expérimentaux, interactifs et qui sortent des sentiers battus.
- L'action principale attendue sur le site est toujours : **"Parlons de votre projet"**.
- Ne jamais inventer de projets, de clients, de résultats, de témoignages, de chiffres ou d'expériences techniques.

## Technologies du projet

- Utiliser **Next.js avec l'App Router**.
- Utiliser **JavaScript**, sans TypeScript.
- Utiliser React dans le cadre de Next.js et respecter les conventions de Next.js. Ne pas construire une application React séparée entièrement exécutée côté client.
- Utiliser les **CSS Modules** et les propriétés personnalisées natives de CSS.
- Ne pas ajouter Tailwind CSS ni de bibliothèque de composants visuels.
- Privilégier un site statique et les Server Components par défaut.
- Ajouter un Client Component uniquement lorsqu'une interaction dans le navigateur le nécessite.
- La cible de déploiement initiale est un **site statique sur Render**. Reconsidérer ce choix uniquement si une future fonctionnalité nécessite une logique côté serveur.

## Architecture CSS

- Conserver les styles globaux dans `app/globals.css` :
  - réinitialisation et styles par défaut du document ;
  - variables de design ;
  - bases typographiques ;
  - règles d'accessibilité partagées ;
  - classes utilitaires réellement globales.
- Définir les variables de design avec des propriétés personnalisées CSS pour les couleurs, la typographie, les espacements, la mise en page, les bordures, les animations et les niveaux de superposition.
- Associer chaque composant visuel significatif à son propre fichier CSS Module placé dans le même dossier, par exemple :

  ```text
  components/Hero/Hero.jsx
  components/Hero/Hero.module.css
  ```

- Ne pas créer de composant et de feuille de style pour de simples fragments de texte.
- Éviter les sélecteurs globaux propres aux composants et ne pas dupliquer les valeurs des variables de design dans les CSS Modules.

## Direction visuelle

- Conserver une identité éditoriale, minimaliste et très graphique.
- Créer de l'impact avec la typographie, les changements d'échelle, les recadrages, la composition et les espaces vides.
- Utiliser un fond grège chaud et subtil, un noir presque total avec une légère chaleur, ainsi qu'un portrait majoritairement monochrome.
- Éviter le sépia jaune, les dégradés, le glassmorphism, les boutons en forme de pilule, les cartes génériques de SaaS et les effets décoratifs sans fonction.
- Conserver des angles droits et utiliser les bordures avec parcimonie.
- Utiliser un seul traitement visuel, contrasté et cohérent pour l'appel à l'action principal sur l'ensemble du site.
- Ne pas effectuer de changement important dans la direction visuelle sans validation explicite.

## Composants et contenu

- Construire les sections avec des composants ciblés, par exemple `Header`, `Hero`, `ServiceSection`, `LabProjects`, `PrimaryCta` et `ContactSection`.
- Séparer le contenu de la présentation lorsque cela améliore la lisibilité ou évite les répétitions.
- Privilégier des structures de données simples et éviter les abstractions prématurées.
- Utiliser du HTML sémantique et conserver une hiérarchie logique des titres.

## Adaptation aux écrans et accessibilité

- Concevoir et vérifier les affichages sur mobile, tablette et ordinateur.
- Rendre les grandes tailles de texte fluides et éviter les coupures ou le défilement horizontal.
- Prévoir des états visibles au survol, au focus et lors de l'activation des éléments interactifs.
- Maintenir des contrastes accessibles et des zones interactives suffisamment grandes.
- Respecter `prefers-reduced-motion` pour chaque animation.
- Fournir un texte alternatif pertinent aux images informatives et un texte alternatif vide aux images décoratives.

## Méthode de travail de l'agent

- Examiner les fichiers et les conventions existantes avant toute modification.
- Effectuer des changements limités et précis, sans modifier le travail de l'utilisateur qui n'est pas concerné par la demande.
- Ne pas ajouter de dépendance sans besoin concret.
- Ne pas choisir de bibliothèque d'animation, de CMS, d'outil d'analyse d'audience ou de service de formulaire de contact avant qu'une décision explicite soit prise.
- Signaler les décisions manquantes concernant le produit ou le contenu au lieu de les deviner.
- Après chaque modification, exécuter les commandes pertinentes de vérification et de compilation définies dans `package.json`, puis signaler clairement les erreurs éventuelles.

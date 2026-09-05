# ATYPIQUE.

Portfolio professionnel d'ATYPIQUE., studio indépendant de développement web.
Le site a vocation à présenter deux univers complémentaires :

- **Le Studio** : missions freelance back-end et création complète de projets web.
- **Le Lab** : projets expérimentaux et interactifs.

L'appel à l'action principal est **« Parlons de votre projet »**.
La page actuelle est un spécimen typographique ; les sections du portfolio restent à construire.

## Technologies

- Next.js avec l'App Router et React, en JavaScript.
- CSS Modules et propriétés personnalisées CSS.
- Polices League Gothic et Geist Sans chargées avec `next/font`.
- Export statique destiné à Render.

## Installation et développement

Avec Node.js et npm installés, depuis la racine du projet :

```bash
npm ci
npm run dev
```

Ouvrir [localhost:3000](http://localhost:3000). Les modifications sont prises en compte
automatiquement pendant le développement.

Sous PowerShell, si l'exécution de `npm.ps1` est bloquée, utiliser `npm.cmd`
à la place de `npm` (par exemple `npm.cmd run dev`).

## Commandes

| Commande | Rôle |
| --- | --- |
| `npm ci` | Installer les dépendances à partir de `package-lock.json`. |
| `npm run dev` | Démarrer le serveur de développement local. |
| `npm run build` | Compiler le projet et générer le site statique dans `out/`. |

La compilation est la vérification disponible dans le projet. Aucun linter n'est configuré.

## Organisation

```text
app/
  layout.js         Structure du document, polices et métadonnées
  page.js           Page d'accueil actuelle
  globals.css       Bases globales et variables de design
  page.module.css   Styles propres à la page d'accueil
  favicon.ico       Icône du site
public/             Ressources statiques (dossier actuellement vide)
next.config.mjs     Configuration Next.js et export statique
render.yaml         Configuration du déploiement Render
AGENTS.md           Consignes de développement du projet
```

Consulter [AGENTS.md](./AGENTS.md) pour les conventions de code, de contenu,
de design et d'accessibilité.

## Déploiement statique sur Render

Le projet utilise l'export statique de Next.js. Pour générer les fichiers à publier :

```bash
npm ci
npm run build
```

Le résultat est généré dans `out/` (ignoré par Git). Les routes sont exportées
sous forme de dossiers contenant un `index.html`, grâce à `trailingSlash: true`.
Le développement local reste accessible avec `npm run dev`.
`next start` ne s'applique pas à cet export : en production, Render sert directement `out/`.

Le fichier `render.yaml` versionne la configuration du site statique :

- commande de compilation : `npm ci && npm run build` ;
- dossier publié : `./out`.

Pour le premier déploiement, pousser le projet dans son dépôt Git, puis créer un
**Blueprint** dans Render et sélectionner ce dépôt. Render lit le `render.yaml`
à la racine ; vérifier la configuration proposée puis lancer sa création.
Le fichier seul ne crée pas de service avant cette connexion dans Render.

Les polices Google utilisées par `next/font` sont téléchargées pendant la compilation :
l'environnement de build doit pouvoir y accéder.

Références : [export statique Next.js](https://nextjs.org/docs/app/guides/static-exports)
et [Blueprints Render](https://render.com/docs/infrastructure-as-code).

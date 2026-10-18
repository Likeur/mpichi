# Mpichi

**Mpichi** est un site éditorial dédié à la cuisine de la République démocratique du Congo. Il documente recettes, gestes, régions et traditions culinaires dans une expérience visuelle soignée, pensée comme un répertoire vivant plutôt qu’un simple catalogue.

> *Un répertoire vivant des recettes de la RDC, de leurs gestes et de leurs territoires.*

**Site en production :** [https://mpichi.likeur.xyz](https://mpichi.likeur.xyz)  
**Dépôt :** [github.com/Likeur/mpichi](https://github.com/Likeur/mpichi)

## Fonctionnalités

- **Bilingue FR / EN** — localisation UI + 51 recettes traduites, switch de langue dans la nav, `hreflang`
- **Accueil éditorial** avec carrousel héro, sections patrimoine et recettes mises en avant
- **Catalogue** avec recherche locale, filtres (catégorie, difficulté, région) et pagination
- **Favoris locaux** (localStorage, sans compte) — page `/favoris`
- **Pages taxonomiques** : index et fiches par `/regions` et `/categories` (FR/EN)
- **Guides éditoriaux** : `/guides` (pondu, moambe, marché) FR/EN
- **Fiches détail** : temps, portions ajustables (+/− personnes), partager, imprimer, recettes liées, note sources/transmission, crédit photo
- **SEO** : canonical, Open Graph / Twitter, sitemap XML, `robots.txt`, JSON-LD (`WebSite` + SearchAction, `Recipe`, FAQ), page 404 bilingue
- **Découverte IA / GEO** : `llms.txt`, `llms-full.txt`, `humans.txt`
- **Navigation flottante**, View Transitions Astro, Locomotive Scroll
- **Pages légales** : FAQ, mentions légales, confidentialité
- **Analytics** : Google Analytics (`G-WLFG0GGT90`)
- **Site statique** prêt à déployer

## Stack technique

| Technologie | Rôle |
| --- | --- |
| [Astro 5](https://astro.build) | SSG, content collections, i18n routing |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Sitemap multilingue |
| [Tailwind CSS 4](https://tailwindcss.com) | Styles (plugin Vite) |
| [Locomotive Scroll 5](https://scroll.locomotive.ca) | Smooth scroll et reveals |
| Markdown + Zod | Recettes typées / validées |
| TypeScript | Config, i18n, helpers SEO |

## Prérequis

- Node.js **18+** (recommandé : 20 LTS)
- npm

## Démarrage

```bash
git clone https://github.com/Likeur/mpichi.git
cd mpichi
npm install
npm run dev
```

Dev : [http://localhost:4321](http://localhost:4321)  
Version anglaise : [http://localhost:4321/en](http://localhost:4321/en)

### Scripts npm

| Commande | Description |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build statique dans `dist/` |
| `npm run preview` | Prévisualisation du build |
| `npm run check` | `astro check` (types / lint Astro) |
| `npm run ci` | `check` puis `build` (équivalent CI) |
| `npm run astro` | CLI Astro |

Variable d’environnement optionnelle :

```bash
SITE=https://mpichi.likeur.xyz npm run build
```

(`SITE` définit l’origine canonique pour le sitemap et les URLs absolues ; défaut dans `astro.config.mjs`.)

## Structure du projet

```
mpichi/
├── public/
│   ├── favicon.svg
│   ├── og-default.jpg
│   ├── robots.txt
│   ├── humans.txt
│   ├── site.webmanifest
│   └── images/recettes/          # Images locales
├── src/
│   ├── components/               # Hero, cartes, nav…
│   ├── content/
│   │   ├── recettes/             # Markdown FR (source)
│   │   └── guides/               # Guides éditoriaux FR
│   ├── i18n/
│   │   ├── config.ts
│   │   ├── ui.ts                 # Chaînes UI FR/EN
│   │   ├── recipes-en.ts         # Traductions recettes EN
│   │   └── utils.ts
│   ├── layouts/BaseLayout.astro  # Meta, GA, SEO, footer
│   ├── lib/
│   │   ├── seo.ts
│   │   ├── site.ts
│   │   ├── taxonomy.ts           # Régions / catégories
│   │   └── recipe-theme.ts
│   ├── pages/
│   │   ├── index.astro           # Accueil FR
│   │   ├── recettes/             # Catalogue + fiches FR
│   │   ├── regions/              # Index + pages par région
│   │   ├── categories/           # Index + pages par catégorie
│   │   ├── en/                   # Miroir EN
│   │   ├── llms.txt.ts
│   │   └── llms-full.txt.ts
│   ├── styles/global.css
│   └── content.config.ts
├── astro.config.mjs
├── LICENSE                       # MIT
└── README.md
```

## Internationalisation

- Locale par défaut : **`fr`** (sans préfixe d’URL)
- Locale secondaire : **`en`** sous `/en/...`
- UI : clés dans `src/i18n/ui.ts`
- Recettes : contenu source en FR (`src/content/recettes/*.md`) ; overlays EN dans `src/i18n/recipes-en.ts` via `localizeRecipe()`

## Contenu : ajouter une recette

1. Créer `src/content/recettes/ma-recette.md` (frontmatter FR)
2. Ajouter l’entrée correspondante dans `src/i18n/recipes-en.ts` (même slug)
3. Optionnel : image locale dans `public/images/recettes/`

### Schéma du frontmatter (FR)

| Champ | Type | Obligatoire | Description |
| --- | --- | --- | --- |
| `title` | string | oui | Nom du plat |
| `description` | string | oui | Résumé |
| `region` | string | non | Région / territoire |
| `image` | URL ou `/chemin` | oui | Photo |
| `imageAlt` | string | oui | Texte alternatif |
| `imagePosition` | string | non | `object-position` (défaut : `center`) |
| `imageCredit` | string | oui | Crédit |
| `imageCreditUrl` | URL | oui | Lien source |
| `category` | enum | oui | `plat` \| `accompagnement` \| `boisson` \| `dessert` |
| `prepTime` | string | oui | Ex. `25 min` |
| `cookTime` | string | oui | Ex. `1 h 30` |
| `servings` | number | oui | Portions |
| `difficulty` | enum | oui | `facile` \| `moyen` \| `avancé` |
| `ingredients` | string[] | oui | Ingrédients |
| `steps` | string[] | oui | Étapes |
| `tags` | string[] | non | Mots-clés |
| `featured` | boolean | non | Mise en avant accueil |

### Images

- Wikimedia Commons : URL `Special:Redirect/file/…` + crédit + lien fichier
- Local : `public/images/recettes/…` puis `image: /images/recettes/nom.png`
- Toujours renseigner `imageCredit` et `imageCreditUrl`

## SEO & crawl

- Origin canonique : `https://mpichi.likeur.xyz` (`src/lib/site.ts`)
- Sitemap : `/sitemap-index.xml`
- Robots : `public/robots.txt`
- Structured data : WebSite + SearchAction (layout) + Recipe / Breadcrumb (fiches) + FAQ
- Recherche catalogue partageable via `?q=`
- Page 404 bilingue (`src/pages/404.astro`, `noindex`)
- LLM : `/llms.txt` et `/llms-full.txt`

## Design

Typographie `Newsreader` + `DM Sans`, palette terre / crème / mousse, motion mesurée avec respect de `prefers-reduced-motion`. Tokens dans `src/styles/global.css`.

## Déploiement

```bash
npm run build
```

Servir le dossier `dist/` (Netlify, Vercel, Cloudflare Pages, nginx, etc.).

## Licence

[MIT](./LICENSE).

Les **photos** restent sous la licence de leurs auteurs. Voir le crédit de chaque fiche.

## Crédits

- Contenu et site : [Likeur](https://github.com/Likeur) · [likeur.xyz](https://likeur.xyz)
- Images : Wikimedia Commons et sources citées sur chaque recette

## CI

Chaque push / PR sur `main` exécute GitHub Actions (`.github/workflows/ci.yml`) : `npm ci`, `astro check`, `astro build`.

En local : `npm run ci`.

## Contribuer

1. Fork
2. Branche (`git checkout -b feature/ma-recette`)
3. `npm run ci`
4. Pull request

Issues bienvenues pour bugs, recettes ou idées produit.

# Contribuer à Mpichi

Merci de vouloir enrichir [Mpichi](https://mpichi.likeur.xyz) — un répertoire
vivant des recettes de la République démocratique du Congo.

En participant, vous acceptez de respecter le
[code de conduite](./CODE_OF_CONDUCT.md).

## Comment contribuer

Plusieurs façons d’aider, selon le temps et les compétences :

| Voie | Idéal pour |
| --- | --- |
| [Proposer une recette](https://mpichi.likeur.xyz/proposer) sur le site | Transmission familiale, sans Git |
| Issue GitHub | Bug, idée produit, correction de fiche |
| Pull request — contenu | Nouvelle recette / guide Markdown |
| Pull request — code | UI, i18n, SEO, perf, dataset |

Les contributions en **français** et en **anglais** sont les bienvenues.
Le contenu source des recettes est rédigé en FR ; l’EN est un overlay dans
`src/i18n/recipes-en.ts`.

## Prérequis (code & contenu Markdown)

- Node.js **18+** (recommandé : 20 LTS)
- npm
- Fork du dépôt [Likeur/mpichi](https://github.com/Likeur/mpichi)

```bash
git clone https://github.com/<votre-compte>/mpichi.git
cd mpichi
npm install
npm run dev
```

Dev : [http://localhost:4321](http://localhost:4321) · EN : `/en`

Avant d’ouvrir une PR :

```bash
npm run ci
```

(`astro check` + `astro build`, même pipeline que la CI GitHub Actions.)

## Ajouter une recette (PR)

1. Créer `src/content/recettes/<slug>.md` avec le frontmatter FR complet
   (voir le [README](./README.md#contenu--ajouter-une-recette)).
2. Ajouter l’entrée correspondante dans `src/i18n/recipes-en.ts` (même slug).
3. Images :
   - Wikimedia Commons : URL `Special:Redirect/file/…` + `imageCredit` +
     `imageCreditUrl`
   - ou fichier local dans `public/images/recettes/`
4. Vérifier que la fiche s’affiche en FR et EN, et que `npm run ci` passe.

### Principes éditoriaux

- Décrire le plat **tel qu’il se prépare** (gestes, proportions approximatives,
  noms locaux).
- Créditer correctement toute photo ; pas d’image sans droits clairs.
- Ne pas inventer une région ou une filiation culturelle ; en cas de doute,
  laisser `region` vide ou le signaler dans la PR.
- Les recettes déjà dans le catalogue peuvent être affinées (variantes, notes
  de transmission) plutôt que dupliquées.

Sans Git, utilisez plutôt
[mpichi.likeur.xyz/proposer](https://mpichi.likeur.xyz/proposer)
(relues avant publication). Pour envoyer une **photo fichier**, contactez la
rédaction par e-mail ou WhatsApp (liens sur la page Proposer).

## Ajouter un guide

1. Créer `src/content/guides/<slug>.md`
2. Suivre le schéma des guides existants (`pondu`, `moambe`, `marche`)
3. Vérifier les pages `/guides` et `/en/guides`

## Dataset open (`mpichi-dataset/`)

Le dataset bilingue (CC BY 4.0) est régénéré depuis les recettes :

```bash
npm run export-dataset
```

Si votre PR ajoute ou modifie des recettes, régénérez le dataset et incluez
les fichiers mis à jour dans `mpichi-dataset/data` lorsque c’est pertinent.
Détails : [`mpichi-dataset/README.md`](./mpichi-dataset/README.md).

## Processus de pull request

1. Fork → branche descriptive (`feature/recette-makemba`, `fix/nav-mobile`, …)
2. Commits clairs (impératif ou présent, focus sur le *pourquoi*)
3. `npm run ci` en local
4. Ouvrir une PR vers `main` avec :
   - résumé des changements
   - captures si UI
   - notes sur les crédits photo / sources si contenu
5. La CI (`.github/workflows/ci.yml`) doit être verte

Les relectures peuvent demander des ajustements de ton éditorial, de crédit
image ou de schéma Zod — c’est normal.

## Signaler un bug ou une idée

Ouvrez une [issue](https://github.com/Likeur/mpichi/issues) avec :

- URL / page concernée
- comportement attendu vs observé
- navigateur / appareil si pertinent
- pour une fiche : slug de la recette

## Licence

- Code du site : [MIT](./LICENSE)
- Dataset : [CC BY 4.0](./mpichi-dataset/LICENSE) (voir le README du dataset)
- Photos : licence de leurs auteurs, indiquée sur chaque fiche

En soumettant une contribution, vous acceptez qu’elle soit publiée sous ces
licences, et que le contenu éditorial puisse être adapté pour coller au ton
Mpichi.

## Contact

- Site : [mpichi.likeur.xyz](https://mpichi.likeur.xyz)
- Auteur : [Likeur](https://likeur.xyz) · [GitHub](https://github.com/Likeur)
- Modération / conduite : [jacksimba28@gmail.com](mailto:jacksimba28@gmail.com)

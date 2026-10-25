---
name: mpichi-change-checklist
description: >-
  Traces the full follow-through for every Mpichi modification (recipes, i18n,
  images, merges/aliases, dataset export, CHANGELOG, versioning, Hugging Face
  sync, git). Use when editing recettes, recipes-en.ts, aliases.json,
  mpichi-dataset, lots éditoriaux, or when shipping a dataset release.
---

# Mpichi — checklist par modification

Avant de dire « terminé », **classer le changement** puis exécuter la checklist
correspondante. Ne pas sauter l’export dataset si le contenu recettes a bougé.

## 1. Classer (obligatoire)

| Type | Exemples |
| --- | --- |
| A. Recette nouvelle | Nouveau `.md` + entrée EN |
| B. Recette éditée | Texte, steps, related, variants, SEO |
| C. Image / crédit | `image`, `imageAlt`, `imageCredit*` |
| D. Fusion / redirect | Deux fiches → une + aliases + redirect |
| E. Alias dataset seuls | `enrichment/aliases.json` |
| F. Site hors recettes | Nav, analytics, pages Astro |
| G. Release dataset | Bump version + tag + push |

Détail des cases → [checklists.md](checklists.md).

## 2. Toujours (toute modif site ou dataset)

1. Identifier les fichiers touchés (site vs `mpichi-dataset/` nested git).
2. `npm run check` si contenu Astro / collections / i18n.
3. Si recettes ou aliases changés → `npm run export-dataset` puis
   `npm --prefix mpichi-dataset run validate`.
4. **CHANGELOG + versioning (dataset)** — dès qu’une modif change les
   données exportées ou l’enrichissement (`recettes`, `recipes-en`,
   `aliases.json`, schema, scripts d’export) :
   - noter le changement dans `mpichi-dataset/CHANGELOG.md`
     (section `[Unreleased]` au fil de l’eau, ou section versionnée
     au moment du ship) ;
   - au ship / fin de lot : bump semver dans `package.json`,
     `CITATION.cff`, liens compare du CHANGELOG ; l’export régénère
     `data/meta.json` avec la même version ;
   - tag git `vX.Y.Z` + push **seulement si l’utilisateur le demande**.
5. **Hugging Face** — dès qu’il y a des **changements de données** shippés
   (recettes exportées, splits, aliases, meta, card) : **mettre à jour**
   le dataset public [`likeur17/mpichi-dataset`](https://huggingface.co/datasets/likeur17/mpichi-dataset)
   pour qu’il ne reste pas en retard sur GitHub.
   - Après export + validate + bump version (si release).
   - Fichiers typiques : `README.md` (card = `dataset_card.md` / `README.hf.md`),
     `data/**`, `schema/recipe.schema.json`, `enrichment/aliases.json`,
     `LICENSE-DATA`, `CITATION.cff`.
   - Procédure → [huggingface.md](huggingface.md).
   - Si auth HF impossible dans la session : le dire clairement et laisser
     les fichiers prêts ; ne pas marquer le lot « sync HF OK ».
6. Commit **seulement** si l’utilisateur le demande ; site et dataset sont
   deux repos (ne pas oublier le nested `mpichi-dataset`).
7. Dev local : `npm run dev` bind `127.0.0.1:4321` (pas IPv6-only).

## 3. Matrice rapide

| Changement | Export+validate | CHANGELOG + version | Hugging Face |
| --- | --- | --- | --- |
| A nouvelle | ✓ | ✓ (Unreleased → bump au ship) | ✓ au ship |
| B éditée (data) | ✓ | ✓ | ✓ au ship |
| C image | ✓ | ✓ | ✓ au ship |
| D fusion | ✓ | ✓ | ✓ au ship |
| E aliases | ✓ | ✓ | ✓ au ship |
| F site UI seul | — | — | — |
| G release | ✓ | **obligatoire** | **obligatoire** |

## 4. Règles contenu

- Photos Commons : crédit + URL fichier ; pas la même image pour deux gestes
  distincts (bouilli vs grillé, sauce vs saisi).
- Même plat, noms régionaux (bukari / bugali / bidia) → **une fiche** +
  `variants` + aliases + redirect ; pas deux cartes catalogue.
- YAML : quoter les `steps` / `ingredients` qui contiennent `:`.
- Aliases : pas d’invention « locale » fausse ; gloss FR/EN préférable.
  Voir `mpichi-dataset/enrichment/README.md`.

## 5. Fin de lot / release dataset

Quand l’utilisateur demande de shipper / lot / release :

1. Export + validate verts.
2. **Versioning synchrone** (ne jamais tagger sans les trois) :
   - `mpichi-dataset/package.json` → `version`
   - `mpichi-dataset/CITATION.cff` → `version` + `date-released`
   - `mpichi-dataset/CHANGELOG.md` → section `## [X.Y.Z] — YYYY-MM-DD`
     + déplacer / résumer `[Unreleased]` + liens `[X.Y.Z]` / `[Unreleased]`
3. Re-export pour que `data/meta.json` porte la même version.
4. Commit + tag `vX.Y.Z` dans **mpichi-dataset** puis push
   **seulement si demandé**.
5. **Sync Hugging Face** `likeur17/mpichi-dataset` avec la même révision
   (données + card) — **obligatoire s’il y a des changements de data** ;
   voir [huggingface.md](huggingface.md).

Semver : **patch** = docs/CI/fix mineur · **minor** = recettes/aliases/couverture ·
**major** = schema breaking.

## 6. Lots (ordre)

| Lot | Focus |
| --- | --- |
| 0 | CI, HF, fondations (fait) |
| 1 | Couverture éditoriale Est / Kasaï / Katanga |
| 2 | Aliases linguistiques |
| 3 | Régions normalisées + ingrédients structurés (fait v1.3.0) |
| 4 | Exemples ML / eval |
| 5 | Zenodo / distribution |

Ne pas démarrer le lot N+1 sans checklist du lot N (export + validate + docs).

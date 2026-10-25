# Checklists détaillées — Mpichi

Copier la checklist du type de modif et cocher avant de clôturer.

---

## A. Nouvelle recette

- [ ] `src/content/recettes/<slug>.md` (front matter complet + body)
- [ ] Image Commons ou locale + `imageAlt` + `imageCredit` + `imageCreditUrl`
- [ ] `relatedRecipes` vers des slugs existants
- [ ] Entrée `src/i18n/recipes-en.ts` (tous les champs utiles + `body` + `imageAlt`)
- [ ] Alias dans `mpichi-dataset/enrichment/aliases.json` (≥1 nom utile, `lang` renseigné)
- [ ] Steps/ingredients avec `:` → strings YAML quotées
- [ ] `npm run check`
- [ ] `npm run export-dataset` && `npm --prefix mpichi-dataset run validate`
- [ ] `mpichi-dataset/CHANGELOG.md` → entrée sous `[Unreleased]` (ou bump si ship)
- [ ] Au ship : sync Hugging Face `likeur17/mpichi-dataset` (voir [huggingface.md](huggingface.md))
- [ ] Optionnel : ligne dans `docs/seo-keyword-map.md` si vague SEO

### Front matter minimal

```yaml
title:
seoTitle:
description:
region:
image:
imageAlt:
imagePosition: center
imageCredit:
imageCreditUrl:
category: # plat | accompagnement | boisson | dessert
prepTime:
cookTime:
servings:
difficulty: # facile | moyen | avancé
tags: []
relatedRecipes: []
ingredients: []
steps: []
```

---

## B. Recette éditée (texte / steps / variants)

- [ ] Éditer le `.md` FR
- [ ] Miroir EN dans `recipes-en.ts` si title/description/ingredients/steps/body/variants changent
- [ ] Cohérence `variants[].id` FR ↔ EN
- [ ] Mettre à jour `aliases.json` si nouveaux noms cités
- [ ] Grep des anciens libellés / liens cassés
- [ ] `npm run check` + export + validate
- [ ] `CHANGELOG.md` `[Unreleased]` si le dataset change
- [ ] Au ship : sync Hugging Face

---

## C. Image / crédit

- [ ] Nouvelle URL Commons `Special:Redirect/file/...` ou asset `public/`
- [ ] `imageAlt` FR exact et honnête (pas « grillé » si photo non grillée)
- [ ] `imageCredit` + `imageCreditUrl` (auteur + licence)
- [ ] `imageAlt` EN dans `recipes-en.ts`
- [ ] Pas de réemploi de la même photo pour un geste différent
- [ ] Export + validate (crédits partent dans `sources`)
- [ ] `CHANGELOG.md` `[Unreleased]` si le dataset change
- [ ] Au ship : sync Hugging Face

---

## D. Fusion de fiches (ex. bugali → bukari)

- [ ] Choisir le **slug canon** (garder l’URL la plus établie si possible)
- [ ] Déplacer le contenu utile en `variants` sur le canon
- [ ] Tags + body du canon mentionnent les noms régionaux
- [ ] Supprimer le `.md` et l’entrée EN du slug mort
- [ ] `astro.config.mjs` → `redirects` ancien → canon (FR + `/en/...`)
- [ ] Grep global : `relatedRecipes`, liens markdown, `recipes-en.ts`, docs SEO
- [ ] `aliases.json` : aliases sur le **canon** ; retirer clé du slug mort
- [ ] `npm run check` (pas de collision redirect trailing slash)
- [ ] Export + validate
- [ ] `CHANGELOG.md` `[Unreleased]` (fusion = minor au prochain ship)
- [ ] Au ship : sync Hugging Face
- [ ] Vérifier redirect en local : `curl -sI http://127.0.0.1:4321/recettes/<ancien>`

---

## E. Aliases dataset seuls

- [ ] Éditer `mpichi-dataset/enrichment/aliases.json`
- [ ] Schéma : `name` + `lang` ; optionnel `note`, `region_hint`, `script`
- [ ] Pas d’alias inventé / trompeur
- [ ] `npm --prefix mpichi-dataset run export` (depuis site : `npm run export-dataset`)
- [ ] `npm --prefix mpichi-dataset run validate`
- [ ] `CHANGELOG.md` `[Unreleased]` **toujours**
- [ ] Si release / ship : checklist G (bump version + **HF**)

---

## F. Site hors recettes (UI, nav, analytics)

- [ ] Toucher uniquement les fichiers nécessaires
- [ ] `npm run check` (et build si risque routing/PWA)
- [ ] Pas d’export dataset sauf si la modif lit/écrit le catalogue
- [ ] Si impact data : `CHANGELOG` + versioning dataset (voir §2 du SKILL)
- [ ] Dev : confirmer `http://127.0.0.1:4321/`

---

## G. Release dataset (CHANGELOG + versioning — bloquant)

Ne jamais shipper sans cette section complète.

- [ ] Contenu site à jour + export + validate OK
- [ ] Décider semver (patch / minor / major) — voir tableau ci-dessous
- [ ] `mpichi-dataset/package.json` → `"version": "X.Y.Z"`
- [ ] `mpichi-dataset/CITATION.cff` → `version` + `date-released`
- [ ] `mpichi-dataset/CHANGELOG.md` :
  - [ ] section `## [X.Y.Z] — YYYY-MM-DD` avec Added/Changed/Fixed
  - [ ] vider ou reporter `[Unreleased]`
  - [ ] mettre à jour les liens footer `[Unreleased]` / `[X.Y.Z]` / précédent
- [ ] Re-`npm run export-dataset` pour aligner `data/meta.json` sur `X.Y.Z`
- [ ] Commit dans **mpichi-dataset** (nested repo)
- [ ] Tag annoté `vX.Y.Z` + push **si l’utilisateur demande**
- [ ] **Hugging Face `likeur17/mpichi-dataset` synchronisé** (données + card = version shippée)
  - [ ] Fichiers `data/**`, aliases, schema, LICENSE-DATA, CITATION.cff, README card
  - [ ] Vérifier `meta.json` version sur le Hub (voir [huggingface.md](huggingface.md))
  - [ ] Si auth HF KO : le signaler — lot non clos côté distribution

### Semver indicatif

| Bump | Cas |
| --- | --- |
| patch | docs, CI, corrections aliases mineures |
| minor | nouvelles recettes, vague aliases, couverture |
| major | breaking schema |

### Fichiers version à garder alignés

| Fichier | Champ |
| --- | --- |
| `mpichi-dataset/package.json` | `version` |
| `mpichi-dataset/CITATION.cff` | `version`, `date-released` |
| `mpichi-dataset/CHANGELOG.md` | titre de section + liens compare |
| `mpichi-dataset/data/meta.json` | `version` (via export, pas à la main) |

---

## Commandes de référence

```bash
# Site
npm run check
npm run dev          # → http://127.0.0.1:4321/

# Dataset (depuis la racine site)
npm run export-dataset
npm --prefix mpichi-dataset run validate

# Couverture aliases rapide
python3 - <<'PY'
import json
from pathlib import Path
a=json.loads(Path('mpichi-dataset/enrichment/aliases.json').read_text())
s={p.stem for p in Path('src/content/recettes').glob('*.md')}
print(f'{len(set(a)&s)}/{len(s)} slugs avec aliases')
PY
```

## Repos git

| Chemin | Remote typique |
| --- | --- |
| racine site | `Likeur/mpichi` |
| `mpichi-dataset/` | `Likeur/mpichi-dataset` (nested, souvent gitignored du parent) |

Toujours `git status` **dans les deux** avant un ship.

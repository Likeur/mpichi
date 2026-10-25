# Sync Hugging Face — `likeur17/mpichi-dataset`

URL : https://huggingface.co/datasets/likeur17/mpichi-dataset

Compte HF du projet : **`likeur17`** (pas `Likeur`).

## Quand sync

**Oui** — après tout ship / fin de lot qui change :
`data/recipes.*`, splits, instruction pairs, `meta.json`, `aliases.json`,
schema, ou la dataset card.

**Non** — pure UI site sans re-export dataset.

Ne pas laisser HF sur une vieille révision (ex. v1.0.x) alors que GitHub est en v1.2+.

## Prérequis

1. `npm run export-dataset` + `npm --prefix mpichi-dataset run validate` OK
2. Version alignée (`package.json` = `meta.json` = CHANGELOG section)
3. Auth HF disponible : token (`HF_TOKEN` / `huggingface-cli login`) **ou**
   session navigateur connectée `likeur17`

## Fichiers à pousser (minimum)

| Local (`mpichi-dataset/`) | Sur le Hub |
| --- | --- |
| `dataset_card.md` ou `README.hf.md` | `README.md` |
| `data/recipes.jsonl` | `data/recipes.jsonl` |
| `data/recipes.json` | `data/recipes.json` |
| `data/meta.json` | `data/meta.json` |
| `data/splits/train.jsonl` | `data/splits/train.jsonl` |
| `data/splits/valid.jsonl` | `data/splits/valid.jsonl` |
| `data/instruction/pairs.jsonl` | `data/instruction/pairs.jsonl` |
| `data/instruction/pairs.json` | `data/instruction/pairs.json` |
| `data/eval/qa.jsonl` | `data/eval/qa.jsonl` |
| `examples/rag_demo.py` | `examples/rag_demo.py` |
| `examples/BASELINE.md` | `examples/BASELINE.md` |
| `schema/recipe.schema.json` | `schema/recipe.schema.json` |
| `enrichment/aliases.json` | `enrichment/aliases.json` |
| `LICENSE-DATA` | `LICENSE-DATA` |
| `CITATION.cff` | `CITATION.cff` |

Message de commit HF : inclure la version, ex. `Release v1.2.0 — Lot 2 aliases`.

## Méthodes

### A. CLI (préféré si token)

```bash
# depuis mpichi-dataset, avec huggingface_hub installé + login
huggingface-cli upload likeur17/mpichi-dataset . \
  --repo-type=dataset \
  --commit-message "Release vX.Y.Z" \
  --exclude="node_modules/**" --exclude=".git/**" --exclude=".hf-*"
```

Ou script Python `HfApi().upload_folder(...)`.

### B. API commit NDJSON / UI

Si pas de CLI : commit via Hub UI ou API (fichiers listés ci-dessus).
Card README = contenu à jour de `dataset_card.md`.

## Vérification

```python
from datasets import load_dataset
ds = load_dataset("likeur17/mpichi-dataset", data_files="data/recipes.jsonl", split="train")
print(len(ds))  # doit matcher meta.recipe_count
```

Contrôler aussi sur la page Hub : `data/meta.json` → `"version"` attendue.

## Si sync impossible

Dans la réponse finale : indiquer **HF non synchronisé** + raison (auth, réseau).
Ne pas cocher la case HF de la checklist G.

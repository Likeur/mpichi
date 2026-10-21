# Candidats YouTube — plats Mpichi

Liste de travail pour brancher des tutoriels vidéo.  
**Statut** : vagues A + B + C **branchées** (oct. 2026) — miniature cliquable → YouTube + `VideoObject`. UI : pas d’iframe (anti-bot).

## Format frontmatter

```yaml
video:
  youtube: https://www.youtube.com/watch?v=XXXX
  title: Titre affiché sous l’embed
  credit: Nom de la chaîne
  creditUrl: https://www.youtube.com/@chaine  # optionnel
```

Règle : **1 vidéo principale YouTube** par fiche. TikTok = lien secondaire plus tard.

## Embarqué (30 fiches)

### Vagues A–B

| Slug | ID | Chaîne |
| --- | --- | --- |
| `pondu` | `F8FIY5xvJIU` | Ketsia TV |
| `moambe-poulet` | `me-evkb7Vhk` | Cooking with Belia |
| `liboke-poisson` | `gu9hWD_x1XA` | Noella Kasongo TV |
| `fumbwa-arachides` | `6Z0ZWvsMhCg` | letsCOOKwithELLE |
| `mikate` | `tdNfm_lZ2aM` | Cuisine Kamchef |
| `kamundele` | `dZ9_2GbYuU4` | ALPHA'S KITCHEN |
| `ntaba` | `M8QkmorG_cg` | shecooksitall |
| `poulet-mayo` | `BDqiBBBVNz0` | Noelia's Cooking |
| `saka-madesu` | `9W0kTyJsO84` | shecooksitall |
| `makayabu` | `6HYc2cOKt0Y` | Stories Supper |

### Vague C (recherche suite)

| Slug | ID | Chaîne | Note |
| --- | --- | --- | --- |
| `chikwangue` | `RY8R-3kdUPs` | Eureka Africanfood | bâton / kwanga |
| `bukari-katanga` | `pv5yJ1A6pzA` | Cook with Nahima | fufu congolais |
| `tangawisi` | `Pl2Sbd2CoV4` | CUISINE FACILE.M | gingembre + ananas |
| `matembele-katanga` | `TSUKXZ1puyY` | shecooksitall | |
| `makemba` | `xHaECoQ2_Mg` | letsCOOKwithELLE | |
| `lituma` | `e3XR71FdHMg` | Cooking With Pierrette | |
| `madesu` | `jV-tYOLILH0` | shecooksitall | |
| `biteku-teku-kasai` | `SAdbi6jks-E` | The Blue Fufu | lenga-lenga |
| `ngai-ngai` | `4Xf6Bp-5zRU` | letsCOOKwithELLE | |
| `pepe-soupe-ya-ngolo` | `zABZ3T4WJiQ` | Variety Cuisine | pepe soupu |
| `poisson-braise-kinkole` | `Zm0Dx2EZYA8` | Eureka Africanfood | pas « Kinkole » au titre |
| `porc-braise` | `7O4QoxSgMbc` | Yao Raissa | |
| `sauce-gombo` | `gRIy4k406wM` | Cleo Touch Gourmet | |
| `beignets-banane` | `21RnvnCHpb8` | letsCOOKwithELLE | mikate banane |
| `jus-bissap` | `2cUQilpkRBA` | Mounira recette | |
| `mbika` | `I4QVyzQgztQ` | ALPHA'S KITCHEN | |
| `mbinzo-tomates` | `IblVFJj828w` | Esther Mariam TV | + mayebo |
| `mayebo` | `IblVFJj828w` | Esther Mariam TV | même vidéo |
| `kapenta-tomates` | `SbBwQSLKl8c` | Infoods Specials | style zambien (proche) |
| `viande-ya-sauce` | `Gqx9-j7xEhI` | ALPHA'S KITCHEN | côtes en sauce |

## Sans vidéo fiable (21)

Peu ou pas de tutoriel YouTube clairement aligné :  
`bouillie-arachide`, `brochettes-grillons`, `croquettes-manioc`, `escargots-congolaise`, `foie-boeuf-saute`, `gateau-manioc`, `jus-passion`, `kossa-kossa`, `liboke-viande`, `loso-petits-pois`, `manioc-grille`, `mbisi-ya-kokalinga`, `mujibujibu`, `munkoyo`, `nsafu-grilles`, `ntaba-sauce`, `poisson-moambe`, `riz-moambe`, `salade-kisangani`, `soso-lumba-lumba`, `soso-ya-sauce`.

---

## Vague A — plats phares (priorité haute)

| Recette Mpichi | Mot-clé search | Candidat YouTube | Langue | Note |
| --- | --- | --- | --- | --- |
| `pondu` | pondu / saka-saka / cassava leaves | [Pondu \| Cook With Me \| Congolese Food](https://www.youtube.com/watch?v=F8FIY5xvJIU) | EN | Tutoriel pas à pas, feuilles congelées (diaspora) |
| `pondu` | pondu saka saka | [Healthy Recipe \| Cassava leaves \| Pondu saka saka](https://www.youtube.com/watch?v=FoWtmS6Kkx4) | EN | Court, focus plat Congo |
| `pondu` | pondu limbondo | [RECETTE CONGOLAISE \|\| PONDU YA LIMBONDO](https://www.youtube.com/watch?v=uEM3sU370yg) | FR | Variante bicarbonate — vérifier si alignée avec votre fiche |
| `pondu` | (alt EN) | [letsCOOKwithELLE — PONDU](https://www.youtube.com/watch?v=8uE1Pxs7AK0) | EN/Lingala | Chaîne spécialisée cuisine congolaise |
| `moambe-poulet` | poulet moambe / mosaka | [RECETTE DE POULET DUR A LA MOAMBE](https://www.youtube.com/watch?v=me-evkb7Vhk) | FR | Moambe en conserve (diaspora) — très courant |
| `moambe-poulet` | soso ya mwamba | [COMMENT PRÉPARE LE POULET AUX BEURRE D’ARACHIDE (SOSO YA MWAMBA)](https://www.youtube.com/watch?v=a17dBerE76s) | FR | ⚠️ souvent **arachide** vs moambe palme — bien distinguer |
| `liboke-poisson` | liboke recipe | [LIBOKE RECIPE, HOW IT'S MADE Congolese kitchen](https://www.youtube.com/watch?v=gu9hWD_x1XA) | EN | Papillote — valider durée / clarté |
| `fumbwa-arachides` | fumbwa | [How to Cook Congolese Fumbwa](https://www.youtube.com/watch?v=6Z0ZWvsMhCg) | EN | Tutoriel complet (letsCOOKwithELLE) |
| `fumbwa-arachides` | fumbwa poisson salé | [FUMBWA ET POISSON SALÉ \| Makusa Lingala](https://www.youtube.com/watch?v=Y0mEURiOzWg) | Lingala | Visuel utile même sans comprendre |
| `fumbwa-arachides` | fumbwa | [HOW TO MAKE FUMBWA (TASTE OF CONGO)](https://www.youtube.com/watch?v=pgAYrGF5vFU) | EN | À visionner |
| `mikate` | mikate congolais | [Comment faire les Mikate congolais](https://www.youtube.com/watch?v=tdNfm_lZ2aM) | FR | Gros volumes (farine) — bon pour texture pâte |
| `mikate` | mikate puff puff | [How To Make PUFF PUFF/Congolese MIKATE](https://www.youtube.com/watch?v=21RnvnCHpb8) | EN | Variante banane — noter l’écart vs fiche Mpichi |
| `mikate` | mikate beignets | [MIKATE / Beignets #cuisinecongolaise](https://www.youtube.com/watch?v=syp2GjXt-Lo) | FR | Short-form possible |

---

## Vague B — street food / table Kin (priorité moyenne)

| Recette Mpichi | Candidat YouTube | Langue | Note |
| --- | --- | --- | --- |
| `kamundele` | [Beef Kebab Skewers \| Kamundele \| Brochette](https://www.youtube.com/watch?v=dZ9_2GbYuU4) | EN | Titre explicite kamundele |
| `ntaba` | [Recette Ya NTABA ya Kotumba na four](https://www.youtube.com/watch?v=tCaHWELDy4E) (~85k vues) | Lingala | Four, pas braise — proche mais pas identique |
| `ntaba` | [How to bbq goat meat // Ntaba ya kotumba](https://www.youtube.com/watch?v=M8QkmorG_cg) | EN | Version BBQ |
| `poulet-mayo` | [Poulet Mayo \|\| Une Delicieuse Recette…](https://www.youtube.com/watch?v=BDqiBBBVNz0) | FR | À valider |
| `poulet-mayo` | [POULET MAYO / Recette facile… BBQ](https://www.youtube.com/watch?v=dEVQPJm4Lco) | FR | Version braise |
| `saka-madesu` | [Tchaka madesu / cassava leaves with beans](https://www.youtube.com/watch?v=9W0kTyJsO84) | EN | Aligné saka-madesu |
| `saka-madesu` | [PONDU YA MADESU](https://www.youtube.com/watch?v=iyEitoVyjlU) | FR | Feuilles + haricots |
| `makayabu` | [Makayabu (Saltfish) with Fumbwa](https://www.youtube.com/watch?v=6HYc2cOKt0Y) | EN | Makayabu + fumbwa ensemble |

---

## Vague C — accompagnements / boissons (plus rare sur YT)

| Recette Mpichi | Candidat / statut | Note |
| --- | --- | --- |
| `chikwangue` | Peu de tutoriels clairs « maison » (process long) | Chercher `kwanga` / `chikwanga how to` ; sinon lien article + pas d’embed |
| `bukari-katanga` | Chercher `bukari` / `fufu maize Congo` / `nshima` | Cousins proches — label honnête si on embarque |
| `tangawisi` | Chercher `jus de gingembre` / `ginger juice Africa` | Beaucoup de vidéos génériques, peu « tangawisi » nommé |
| `matembele-katanga` | Chercher `matembele` / `sweet potato leaves Congo` | Offre plus faible |
| `poisson-braise-kinkole` | Chercher `poisson braisé africain` / `grilled tilapia Congo` | Rarement « Kinkole » dans le titre |

---

## Proposition « première vague à brancher » (6 fiches)

Ordre recommandé pour un MVP vidéo :

1. **pondu** → `F8FIY5xvJIU` ou `8uE1Pxs7AK0`
2. **fumbwa-arachides** → `6Z0ZWvsMhCg`
3. **mikate** → `tdNfm_lZ2aM`
4. **moambe-poulet** → `me-evkb7Vhk` (après vérif moambe palme ≠ arachide)
5. **saka-madesu** → `9W0kTyJsO84`
6. **kamundele** → `dZ9_2GbYuU4`

---

## Checklist avant d’embarquer une vidéo

- [ ] Visionnage complet (pas de pub trompeuse, pas de contenu hors sujet)
- [ ] Alignement avec la fiche Mpichi (palme vs arachide, congelé vs frais…)
- [ ] Crédit clair de la chaîne sous l’embed
- [ ] Prefers FR/Lingala pour audience principale, EN OK pour diaspora
- [ ] Pas de Shorts ultra-courts seuls si on veut du « tutoriel »

---

## Suite technique

Quand tu valides 2–3 lignes de ce tableau, on branche :

1. champ `video` dans `content.config.ts`
2. embed YouTube sur `/recettes/[slug]`
3. `VideoObject` dans le JSON-LD Recipe
4. remplissage frontmatter des recettes choisies

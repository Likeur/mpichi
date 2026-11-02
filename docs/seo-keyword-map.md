# Mpichi — Carte mots-clés → pages

Feuille de route SEO / GEO.  
Règle : **1 cluster = 1 URL principale**. Les secondaires soutiennent ; elles ne créent pas une 2ᵉ page concurrente.

**Statuts**

| Code | Signification |
| --- | --- |
| `ok` | Déjà aligné (title/meta/intent) — maintenance |
| `renforcer` | Page existe — optimiser title, H1, intro, liens |
| `créer` | Pas de page dédiée — contenu à écrire |
| `soutien` | Pas de page cible : lien interne / mention seulement |

**Géos prioritaires** : FR, BE, puis CD (volume souvent faible mais intention locale).  
**Langues** : chaque cluster FR a un miroir EN sous `/en/…` (même rôle, mots-clés anglais).

---

## Vue d’ensemble des clusters

| # | Cluster | Intention | URL principale | Statut | Priorité |
| --- | --- | --- | --- | --- | --- |
| 1 | Catalogue / répertoire | Navigational + info | `/` + `/recettes/` | `ok` / `renforcer` | P0 |
| 2 | Plats phares | How-to + info | fiches recettes | `renforcer` | P0 |
| 3 | Guides how-to | How-to | `/guides/…` | `renforcer` | P1 |
| 4 | Accompagnements de base | How-to | fiches + évent. guide | `renforcer` | P1 |
| 5 | Street food Kinshasa | Info + how-to | fiches | `renforcer` | P1 |
| 6 | Boissons | How-to | fiches + `/categories/boisson/` | `renforcer` | P2 |
| 7 | Régions | Info | `/regions/…` | `renforcer` | P2 |
| 8 | Catégories | Navigational | `/categories/…` | `renforcer` | P2 |
| 9 | Diaspora / substitutions | How-to | `/guides/marche/` (+ pages à créer) | `renforcer` / `créer` | P1 |
| 10 | Patrimoine / « qu’est-ce que » | Info | `/faq/` + accueil | `ok` | P2 |
| 11 | Anglais (miroir) | Info + how-to | `/en/…` | `renforcer` | P1 |

---

## Cluster 1 — Catalogue / répertoire (P0)

| Mot-clé principal | Secondaires | URL | Statut |
| --- | --- | --- | --- |
| catalogue recettes congolaises | répertoire recettes RDC, site recettes congolaises | `/` | `ok` |
| recettes congolaises | cuisine congolaise, plats congolais | `/recettes/` | `renforcer` |
| cuisine de la RDC | cuisine République démocratique du Congo | `/` | `soutien` (meta + corps) |

**Liens internes** : Accueil → Catalogue → 3–5 plats phares → Guides.

**Notes** : Title/meta déjà orientés « catalogue / répertorie ». Sur `/recettes/`, renforcer H1/intro si besoin (éviter cannibalisation avec l’accueil : accueil = marque + catalogue ; `/recettes/` = liste searchable).

---

## Cluster 2 — Plats phares (P0)

Une fiche = un plat. Primaires = nom du plat + « recette ».

| Mot-clé principal | Secondaires | URL | Statut |
| --- | --- | --- | --- |
| recette pondu | saka-saka, feuilles de manioc recette, mpondu | `/recettes/pondu/` | `ok` (vague 1) |
| poulet moambe | poulet à la moambe, mwamba, sauce palme | `/recettes/moambe-poulet/` | `ok` (vague 1) |
| liboke de poisson | maboke poisson, liboke recette | `/recettes/liboke-poisson/` | `ok` (vague 1) |
| recette fumbwa | fumbwa arachides, koko / okazi | `/recettes/fumbwa-arachides/` | `ok` (vague 1) |
| recette mikate | beignets congolais, mikate kinshasa | `/recettes/mikate/` | `ok` (vague 1) |
| poisson braisé kinshasa | poisson braisé kinkole | `/recettes/poisson-braise-kinkole/` | `ok` (vague 1) |
| pepe soupe ya ngolo | soupe ngolo, soupe poisson-chat | `/recettes/pepe-soupe-ya-ngolo/` | `ok` (vague 1) |
| liboke de viande | maboke viande | `/recettes/liboke-viande/` | `renforcer` |
| poisson à la moambe | — | `/recettes/poisson-moambe/` | `renforcer` |
| madesu | haricots congolais, madesu recette | `/recettes/madesu/` | `ok` (vague 2) |
| saka-madesu | — | `/recettes/saka-madesu/` | `ok` (vague 2) |
| ngai-ngai | oseille congolaise | `/recettes/ngai-ngai/` | `ok` (vague 2) |
| matembele | feuilles de patate douce arachides | `/recettes/matembele-katanga/` | `ok` (vague 3) |
| biteku-teku | lenga-lenga, amarante congolaise | `/recettes/biteku-teku-kasai/` | `ok` (vague 3) |
| makayabu | poisson salé tomates | `/recettes/makayabu/` | `ok` (vague 2) |
| mbika | — | `/recettes/mbika/` | `renforcer` |
| mayebo | chenilles / mayebo tomates | `/recettes/mayebo/` | `renforcer` |
| mbinzo | chenilles tomates | `/recettes/mbinzo-tomates/` | `renforcer` |
| kapenta | kapenta tomates | `/recettes/kapenta-tomates/` | `ok` (vague 3) |
| ntaba | chèvre grillée congolaise | `/recettes/ntaba/` | `ok` (vague 2) |
| ntaba en sauce | — | `/recettes/ntaba-sauce/` | `renforcer` |
| kamundele | brochettes kinshasa | `/recettes/kamundele/` | `ok` (vague 2) |
| poulet mayo | soso mayo | `/recettes/poulet-mayo/` | `ok` (vague 2) |
| soso ya sauce | poulet sauce congolaise | `/recettes/soso-ya-sauce/` | `renforcer` |
| soso ya lumba-lumba | — | `/recettes/soso-lumba-lumba/` | `renforcer` |
| viande ya sauce | bœuf sauce congolaise | `/recettes/viande-ya-sauce/` | `renforcer` |
| porc braisé congolaise | — | `/recettes/porc-braise/` | `renforcer` |
| foie de bœuf sauté | foie oignon kinshasa | `/recettes/foie-boeuf-saute/` | `renforcer` |
| mbisi ya kokalinga | poisson frit congolaise | `/recettes/mbisi-ya-kokalinga/` | `renforcer` |
| kossa-kossa | — | `/recettes/kossa-kossa/` | `renforcer` |
| sauce gombo | gombo congolaise | `/recettes/sauce-gombo/` | `renforcer` |
| mujibujibu | — | `/recettes/mujibujibu/` | `renforcer` |
| escargots à la congolaise | — | `/recettes/escargots-congolaise/` | `renforcer` |
| brochettes de grillons | — | `/recettes/brochettes-grillons/` | `renforcer` |
| bœuf à la moambe | viande moambe, beef moambe | `/recettes/moambe-boeuf/` | `ok` (vague A) |
| pondu au poisson | pondu ya mbisi | `/recettes/pondu-poisson/` | `ok` (vague A) |
| loso na mbisi | riz au poisson | `/recettes/loso-na-mbisi/` | `ok` (vague A) |
| ngolo grillé | poisson-chat grillé | `/recettes/ngolo-grille/` | `ok` (vague A) |
| crevettes du fleuve | crevettes Congo | `/recettes/crevettes-fleuve/` | `ok` (vague A) |
| liboke de légumes | maboke légumes | `/recettes/liboke-legumes/` | `ok` (vague A) |
| brochettes de bœuf | brochettes bœuf Kinshasa | `/recettes/brochettes-boeuf/` | `ok` (vague B) |
| brochettes de poulet | — | `/recettes/brochettes-poulet/` | `ok` (vague B) |
| porc ya kotumba | porc grillé | `/recettes/porc-ya-kotumba/` | `ok` (vague B) |
| tripes mijotées | abats Kinshasa | `/recettes/tripes-mijotees/` | `ok` (vague B) |
| spaghetti Kinshasa | pâtes sauce congolaise | `/recettes/spaghetti-kinshasa/` | `ok` (vague B) |
| patate douce frite | mbala frit | `/recettes/patate-douce-frite/` | `ok` (vague C) |
| fufu de plantain | foutou banane | `/recettes/fufu-plantain/` | `ok` (vague C) |
| manioc frit bâtonnets | cassava fries | `/recettes/manioc-frites/` | `ok` (vague C) |
| maïs grillé | — | `/recettes/mais-grille/` | `ok` (vague C) |
| maïs bouilli | — | `/recettes/mais-bouilli/` | `ok` (vague C) |
| igname en sauce | — | `/recettes/igname-sauce/` | `ok` (vague C) |
| poisson Kisangani | poisson fleuve Kisangani | `/recettes/poisson-kisangani/` | `ok` (vague D) |
| mbisi na kwanga | poisson chikwangue Kongo | `/recettes/mbisi-na-kwanga/` | `ok` (vague D) |
| nsafu en sauce | safou sauce | `/recettes/nsafu-sauce/` | `ok` (vague D) |
| nyama bugali | viande bugali Kivu | `/recettes/nyama-bugali-kivu/` | `ok` (vague D) |
| liboke champignons | maboke champignons | `/recettes/liboke-champignons/` | `ok` (vague D) |
| taro sauce arachide | malanga arachide | `/recettes/taro-sauce/` | `ok` (vague D) |
| jus de tamarin | tamarinier boisson | `/recettes/jus-tamarin/` | `ok` (vague E) |
| malafu vin de palme | palm wine | `/recettes/malafu-vin-palme/` | `ok` (vague E, service) |
| gâteau arachide | cake nguba | `/recettes/gateau-arachide/` | `ok` (vague E) |
| bananes au caramel | bananes caramélisées | `/recettes/bananes-caramel/` | `ok` (vague E) |
| lait caillé | lait fermenté | `/recettes/lait-caille/` | `ok` (vague E) |
| bonbons arachide | caramel arachide | `/recettes/bonbons-arachide/` | `ok` (vague E) |
| crevettes grillées | crevettes braise | `/recettes/crevettes-grillees/` | `ok` (vague F) |
| côtes de porc | travers porc | `/recettes/cotes-porc/` | `ok` (vague F) |
| mikila arachide | queue bœuf arachide | `/recettes/mikila-arachide/` | `ok` (vague F) |
| chou Kinshasa | chou mijoté capital | `/recettes/chou-kinshasa/` | `ok` (vague F) |
| comment faire le fufu | fufu manioc bugali | `/guides/fufu/` | `ok` (vague F) |

**Vague 1 livrée** (2026-10-21) : pondu, moambe-poulet, liboke-poisson, fumbwa, mikate, poisson-braise-kinkole, pepe-soupe-ya-ngolo, chikwangue.

**Vague 2 livrée** (2026-10-21) : madesu, kamundele, saka-madesu, ngai-ngai, makayabu, ntaba, poulet-mayo, bukari.

**Vague 3 livrée** (2026-10-21) : guides pondu / moambe / marché + matembele, biteku-teku, kapenta, lituma, makemba, tangawisi.

**Vague 4 livrée** (2026-10-25) — Lot 1 couverture Est / Kasaï / Katanga : andazi-tanganyika, mukeke-grille, pilau-kivu, bugali-kivu, haricots-maharage, chou-mijote-est, sukuma-est, tilapia-bugali, mbinzo-grillees, mbala-grillee (+ variante bidia sur bukari).

**Vague 5 livrée** (2026-10-25) — Lot 1 Kasaï / Katanga / Est : makosso-pommes, ntaba-mijotee-kasai, haricots-nguba-kasai, poisson-fume-bidia, pommes-sautees-katanga, brochettes-lubumbashi, viande-sechee-tomates, loso-sauce-katanga, sambousa-pommes.

**Vague A / vague 1 livrée** (2026-11-02) — phares manquants : moambe-boeuf, pondu-poisson, loso-na-mbisi, ngolo-grille, crevettes-fleuve, liboke-legumes.

**Vague B / vague 2 livrée** (2026-11-02) — street Kinshasa : brochettes-boeuf, brochettes-poulet, porc-ya-kotumba, tripes-mijotees, spaghetti-kinshasa.

**Vague C / vague 3 livrée** (2026-11-02) — féculents : patate-douce-frite, fufu-plantain, manioc-frites, mais-grille, mais-bouilli, igname-sauce (patate douce bouillie = `mbala`).

**Vague D / vague 4 livrée** (2026-11-02) — régions sous-couvertes : poisson-kisangani, mbisi-na-kwanga, nsafu-sauce, nyama-bugali-kivu, liboke-champignons, taro-sauce.

**Vague E / vague 5 livrée** (2026-11-02) — boissons & desserts : jus-tamarin, malafu-vin-palme, gateau-arachide, bananes-caramel, lait-caille, bonbons-arachide (`beignets-haricot` omis).

**Vague F / vague 6 livrée** (2026-11-02) — renfort + polish : crevettes-grillees, cotes-porc, mikila-arachide, chou-kinshasa + guide `/guides/fufu/` + ship dataset v1.6.0.

**Suite** : hubs régions / catégories si besoin ; releases mineures suivantes.

---

## Cluster 3 — Guides how-to (P1)

| Mot-clé principal | Secondaires | URL | Statut |
| --- | --- | --- | --- |
| comment faire le pondu | préparer saka-saka, pondu étape par étape | `/guides/pondu/` | `ok` (vague 3) |
| sauce moambe | comment faire la moambe, mwamba | `/guides/moambe/` | `ok` (vague 3) |
| marché congolaise cuisine | ingrédients cuisine congolaise, substitutions | `/guides/marche/` | `ok` (vague 3) |
| comment faire le fufu | fufu manioc, bukari | `/guides/fufu/` | `ok` (vague F) |
| comment faire la chikwangue | kwanga | `/recettes/chikwangue/` (+ guide optionnel) | `renforcer` |

---

## Cluster 4 — Accompagnements de base (P1)

| Mot-clé principal | Secondaires | URL | Statut |
| --- | --- | --- | --- |
| chikwangue | kwanga, pain de manioc | `/recettes/chikwangue/` | `ok` (vague 1) |
| bukari | fufu maïs, bugali, bidia, ugali (alias) | `/recettes/bukari-katanga/` | `ok` (bugali fusionné, redirect) |
| lituma | purée plantain | `/recettes/lituma/` | `ok` (vague 3) |
| makemba | plantains frits | `/recettes/makemba/` | `ok` (vague 3) |
| riz à la moambe | — | `/recettes/riz-moambe/` | `renforcer` |
| loso na petits pois | riz petits pois kinshasa | `/recettes/loso-petits-pois/` | `renforcer` |
| manioc grillé | — | `/recettes/manioc-grille/` | `renforcer` |
| croquettes de manioc | — | `/recettes/croquettes-manioc/` | `renforcer` |
| nsafu grillés | — | `/recettes/nsafu-grilles/` | `renforcer` |
| salade chou carotte kisangani | — | `/recettes/salade-kisangani/` | `renforcer` |

---

## Cluster 5 — Street food / table Kinshasa (P1)

| Mot-clé principal | Secondaires | URL | Statut |
| --- | --- | --- | --- |
| street food kinshasa | cuisine de rue kinshasa | `/regions/kinshasa/` | `renforcer` |
| kamundele | (voir cluster 2) | `/recettes/kamundele/` | `renforcer` |
| mikate | (voir cluster 2) | `/recettes/mikate/` | `renforcer` |
| poisson kinkole | (voir cluster 2) | `/recettes/poisson-braise-kinkole/` | `renforcer` |

---

## Cluster 6 — Boissons & desserts (P2)

| Mot-clé principal | Secondaires | URL | Statut |
| --- | --- | --- | --- |
| tangawisi | jus gingembre congolaise | `/recettes/tangawisi/` | `ok` (vague 3) |
| jus de bissap | bissap congolaise | `/recettes/jus-bissap/` | `renforcer` |
| jus de tamarin | tamarinier | `/recettes/jus-tamarin/` | `ok` (vague E) |
| malafu / vin de palme | — | `/recettes/malafu-vin-palme/` | `ok` (vague E, service) |
| jus fruit de la passion | — | `/recettes/jus-passion/` | `renforcer` |
| munkoyo | — | `/recettes/munkoyo/` | `renforcer` |
| beignets de banane | — | `/recettes/beignets-banane/` | `renforcer` |
| gâteau au manioc | — | `/recettes/gateau-manioc/` | `renforcer` |
| gâteau arachide | cake nguba | `/recettes/gateau-arachide/` | `ok` (vague E) |
| bananes au caramel | — | `/recettes/bananes-caramel/` | `ok` (vague E) |
| lait caillé | — | `/recettes/lait-caille/` | `ok` (vague E) |
| bonbons arachide | — | `/recettes/bonbons-arachide/` | `ok` (vague E) |
| bouillie d’arachide | — | `/recettes/bouillie-arachide/` | `renforcer` |
| boissons congolaises | — | `/categories/boisson/` | `renforcer` |
| desserts congolais | — | `/categories/dessert/` | `renforcer` |

---

## Cluster 7 — Régions (P2)

Primaires = « recettes + région » ou « cuisine + région ».  
Pages déjà générées depuis le frontmatter `region` (slugs taxonomie).

| Mot-clé principal | URL indicative | Statut |
| --- | --- | --- |
| recettes kinshasa / cuisine kinshasa | `/regions/kinshasa/` | `renforcer` |
| cuisine kasaï / recettes kasaï | `/regions/grand-kasai/` (+ kasaï-central) | `renforcer` |
| cuisine katanga / bukari katanga | `/regions/grand-katanga/` | `renforcer` |
| cuisine kongo-central | `/regions/kongo-central/` | `renforcer` |
| cuisine bassin du congo | `/regions/bassin-du-congo/` | `renforcer` |
| index régions | `/regions/` | `renforcer` |

**Attention** : beaucoup de régions hybrides (« Kinshasa & … ») — ne pas créer 1 mot-clé Google par combinaison. Prioriser les hub : Kinshasa, Grand Kasaï, Grand Katanga, Kongo-Central, Bassin du Congo, Toute la RDC.

---

## Cluster 8 — Catégories (P2)

| Mot-clé principal | URL | Statut |
| --- | --- | --- |
| plats congolais | `/categories/plat/` | `renforcer` |
| accompagnements congolais | `/categories/accompagnement/` | `renforcer` |
| boissons congolaises | `/categories/boisson/` | `renforcer` |
| desserts congolais | `/categories/dessert/` | `renforcer` |
| index catégories | `/categories/` | `renforcer` |

---

## Cluster 9 — Diaspora / substitutions (P1)

| Mot-clé principal | Secondaires | URL | Statut |
| --- | --- | --- | --- |
| ingrédients cuisine congolaise europe | où acheter feuilles de manioc, pondu surgelé | `/guides/marche/` | `renforcer` |
| recette pondu belgique / france | substitutions diaspora | `/guides/pondu/` + `/guides/marche/` | `soutien` |
| épicerie africaine recettes congo | — | `créer` évent. `/guides/diaspora/` | `créer` |

---

## Cluster 10 — Patrimoine / marque (P2)

| Mot-clé principal | URL | Statut |
| --- | --- | --- |
| qu’est-ce que mpichi | `/faq/` | `ok` |
| mpichi recettes | `/` | `ok` |
| patrimoine culinaire congo | `/` + guides | `soutien` |

---

## Cluster 11 — Anglais (P1, miroir)

Même structure sous `/en/`. Primaires typiques :

| FR (réf.) | EN principal | URL EN |
| --- | --- | --- |
| catalogue… | Congolese recipe catalogue / Congolese recipes | `/en/`, `/en/recettes/` |
| recette pondu | pondu recipe, cassava leaves stew | `/en/recettes/pondu/` |
| poulet moambe | moambe chicken, poulet moambe | `/en/recettes/moambe-poulet/` |
| liboke | liboke fish recipe | `/en/recettes/liboke-poisson/` |
| fumbwa | fumbwa recipe, gnetum stew | `/en/recettes/fumbwa-arachides/` |

Optimiser EN **après** la vague 1 FR des plats phares (réutiliser le même pattern title/meta).

---

## Cannibalisation à éviter

| Conflit | Décision |
| --- | --- |
| Accueil vs `/recettes/` | Accueil = marque + promesse catalogue ; `/recettes/` = **liste** searchable |
| `/guides/pondu/` vs `/recettes/pondu/` | Guide = contexte / geste / variantes ; fiche = **recette exécutable** (quantités) |
| `/guides/moambe/` vs `/recettes/moambe-poulet/` | Guide = sauce ; fiche = plat poulet |
| Plusieurs régions « Kinshasa & X » | Hub SEO = `/regions/kinshasa/` ; les hybrides restent taxonomie, pas cibles ads |

---

## Plan d’exécution (ordre)

1. **P0 catalogue** — déjà fait en grande partie ; relecture GSC après crawl  
2. **P0 plats phares vague 1** (8 fiches) — title, description, 1er paragraphe, liens vers guide/région  
3. **P1 guides** — renfort pondu / moambe / marché + décider guide fufu  
4. **P1 diaspora** — enrichir marché ou créer `/guides/diaspora/`  
5. **P1 EN** — miroir vague 1  
6. **P2** — catégories, hubs régions, boissons/desserts  

---

## Checklist par page (quand on « renforce »)

- [ ] Title ≤ ~60 car. : `Mot-clé principal | Mpichi`  
- [ ] Meta : intention + 1 secondaire + RDC/Congo  
- [ ] H1 aligné (pas keyword stuffing)  
- [ ] Intro 2–3 phrases qui répondent à la requête  
- [ ] 2–4 liens internes (catalogue, guide, région, plat lié)  
- [ ] JSON-LD Recipe / CollectionPage cohérent (déjà en place)  
- [ ] Version EN si page FR prioritaire  

---

## Prochaine étape concrète

Valider cette carte, puis enchaîner sur **Cluster 2 vague 1** (optimisation on-page des 8 fiches phares).

Volumes exacts (Ahrefs/Semrush) à coller dans une colonne `volume` plus tard — la carte reste valable sans chiffres.

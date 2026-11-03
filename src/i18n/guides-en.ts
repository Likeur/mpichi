export type GuideTranslation = {
  title: string;
  seoTitle?: string;
  description: string;
  intro: string;
  imageAlt: string;
  body: string;
};

export const guideTranslationsEn: Record<string, GuideTranslation> = {
  pondu: {
    title: 'Pondu, a patient gesture',
    seoTitle: 'How to make pondu (saka-saka)',
    description:
      'Guide: how to make pondu (saka-saka) — cassava leaves from market to pot, gestures, cooking time and family variants in the DRC.',
    intro: 'An everyday dish that asks for time, attention, and a steady hand.',
    imageAlt: 'Cooked cassava leaves served with fufu',
    body: `Pondu — also called saka-saka — is more than a recipe. It is a rhythm: wash, blanch, chop, coat in palm oil, then let the fire work without rush. For quantities, see the pondu recipe page.

## What you choose at the market

Leaves may arrive fresh, already pounded, or frozen. Each form changes cooking time and final texture. Red palm oil brings depth; smoked fish, when present, gives the household its character. See also the market guide.

## Time, truly

Many gestures are judged by eye and nose. The sauce should become creamy — never dry, never too thin. You stir, wait, taste. That patience is often learned by watching someone else.

## One way among others

Across regions and families, pondu is made with or without fish, more or less spicy, served with fufu, chikwangue, or rice. With beans, it becomes saka-madesu. Mpichi documents one readable version without claiming it is the only right one.

Transmission stays alive: a quantity is corrected, a habit is added, a story explains why it is done this way on Fridays or feast days.`,
  },
  moambe: {
    title: 'Moambe, a feast sauce',
    seoTitle: 'Moambe sauce — guide and gestures',
    description:
      'Moambe (mwamba) sauce guide: palm-nut pulp, slow cooking, tin or fresh — for chicken moambe and variants in the DRC.',
    intro: 'Chicken simmered slowly, a deep sauce, a table that fills.',
    imageAlt: 'Chicken moambe served with rice and saka-saka',
    body: `Moambe (mwamba) is one of the most recognised sauces in Congolese cooking. You meet it in the DRC and in the diaspora: in tins, sachets, and sometimes still made from fresh palm nuts. Executable recipe: chicken moambe.

## What gives it roundness

Onions, tomatoes, garlic, and browned chicken prepare the ground. Palm pulp follows and needs a slow simmer so the sauce thickens without sticking. Chilli and stock adjust the taste of the day.

## Feast and weekday

A Sunday or ceremonial dish for many, moambe can also become a weekday meal when ingredients are close at hand. It is often served with rice and moambe, fufu, or pondu — the side tells as much about the household as the sauce.

## What Mpichi documents

We describe an accessible version, with clear quantities and ordered gestures. Families add their celery, Congolese basil, or chilli measure. These variants do not cancel each other: they show that one dish lives many lives.

If you cook outside Kinshasa, tinned moambe remains an honest starting point — provided you give it time to simmer. Fish variant: fish moambe.`,
  },
  marche: {
    title: 'The market before the pot',
    seoTitle: 'Congolese market and cooking ingredients',
    description:
      'Congolese market guide: season, availability, substitutions (leaves, fish, palm oil) — cooking in the DRC or in the diaspora.',
    intro: 'A recipe often begins before the fire: choosing a leaf, a fish, an oil.',
    imageAlt: 'An opened liboke in its leaves, ready to eat',
    body: `At a Congolese market, you do not read an ingredient list like a protocol. You look at what looks good, what smells right, what the season offers, what the budget allows. That is already a form of cooking.

## Reading the stall

Cassava leaves (pondu), amaranth (biteku-teku), matembele, smoked or fresh fish, palm oil, plantains: each display tells a region and a moment in the year. A missing item does not stop the meal — it opens a substitution the household already knows.

## Honest substitutions

No smoked fish? Some families switch to dried fish (makayabu), others go vegetarian. No fresh leaves? Frozen changes the timing, not necessarily the intention. Without banana leaves for liboke, baking paper plus foil remains honest in the diaspora. Mpichi notes these possibilities without dressing them up as an “official version”.

## From market to page

Documenting a recipe also means documenting that journey. Quantities help you start; gesture and market correct what follows. That is why our cards name a region when it is known, and why these guides insist on context rather than a single norm.

Cooking Congolese food elsewhere often means finding the African grocery that brings that market closer — then adapting, as people always have. Dedicated guide: [cooking in the diaspora](/en/guides/diaspora/).`,
  },
  fufu: {
    title: 'Fufu, the everyday paste',
    seoTitle: 'How to make fufu (cassava, maize, plantain)',
    description:
      'Guide: how to make fufu — cassava flour, maize bugali/bukari, plantain fufu — gestures, differences and pairings in the DRC.',
    intro: 'A paste you pinch, a sauce you scoop: the simplest table duo.',
    imageAlt: 'A ball of fufu (foufou) served as a side',
    body: `The word **fufu** often means **cassava** paste, but Congolese tables know several cousins: maize flour ([bukari / bugali](/en/recettes/bukari-katanga/)), plantain ([plantain fufu](/en/recettes/fufu-plantain/) or [lituma](/en/recettes/lituma/)), and the fermented stick ([chikwangue](/en/recettes/chikwangue/)), which is not a spatula-worked paste.

## The shared gesture

Hot water, a flour, a sturdy spatula. Start as a light porridge, then add flour while working against the pot walls until a smooth mass that pulls away. Too much water: soft paste. Too much flour at once: lumps. Quantities: [cassava fufu](/en/recettes/fufu-manioc/).

## Cassava, maize, plantain

- **Cassava**: neutral, elastic — Kinshasa, West, Cuvette.
- **Maize (bugali / bukari / bidia)**: East and Katanga / Kasai; same technique, different flour.
- **Plantain**: mashed fruit or flour by household; sweeter, often with fish or red sauce.

## What to serve it with

Fufu is almost never eaten alone: [pondu](/en/recettes/pondu/), [moambe](/en/recettes/moambe-poulet/), meat sauces, fish, vegetables. Pinch a ball, make a hollow, scoop the sauce.

## What Mpichi documents

Separate cards so distinct gestures are not merged (boiled ≠ fried, cassava ≠ maize). This guide orients; the recipes give proportions. See also the [market guide](/en/guides/marche/) for flours and diaspora substitutions.`,
  },
  diaspora: {
    title: 'Cooking Congolese food in the diaspora',
    seoTitle: 'African grocery stores and Congolese cooking substitutions (FR/BE)',
    description:
      'Where to buy cassava leaves, palm oil, and smoked fish in France and Belgium — honest substitutions for Congolese cooking outside the DRC.',
    intro:
      'Far from a Kinshasa market, the meal often starts in an African grocery — then in the gestures you adapt.',
    imageAlt: 'An opened liboke in its leaves, ready to eat',
    body: `Cooking **Congolese food in France or Belgium** is not copying Kinshasa: it is recovering the gestures with what African groceries, frozen aisles, and supermarkets allow. Mpichi documents those paths without presenting them as a “less authentic” version.

## Where to look

In larger cities (Paris, Brussels, Liège, Lyon…), **African and Afro-Caribbean groceries** remain the first stop: cassava leaves (pondu / saka-saka) fresh or frozen, red palm oil, cassava flour, stock cubes, chillies, smoked or salted fish ([makayabu](/en/recettes/makayabu/)). Supermarket “world food” aisles sometimes help (hibiscus, ginger, peanuts).

The [market guide](/en/guides/marche/) explains how to read a stall; here we start from what is **findable outside the DRC**.

## Substitutions that hold

| At a market in the DRC | In the diaspora (honest option) |
| --- | --- |
| Fresh cassava leaves | Frozen (thaw, squeeze) — longer cooking |
| Banana leaves (liboke) | Baking paper + foil |
| Artisanal smoked fish | Imported smoked/dried, or [makayabu](/en/recettes/makayabu/) |
| Fresh moambe | Tin or sachet — truly simmer |
| Cassava / maize flour | Same flour in Afro aisles; bugali/bukari gesture unchanged |

No greens? Some households switch to spinach or other leaves for a weekday meal — Mpichi notes that as an **adaptation**, not as an equivalent of [pondu](/en/recettes/pondu/).

## Two gestures to keep

Time and palm oil (when you have it) often matter more than the exact brand. A tinned [moambe](/en/guides/moambe/) that simmers for an hour is closer to the table than a rushed version. A well-worked [fufu](/en/guides/fufu/) still carries the sauce even if the flour came from a European pack.

## Go further

- [Recipe catalogue](/en/recettes/) — also search under local names (saka-saka, mwamba, kwanga…)
- [Pondu guide](/en/guides/pondu/) and [market guide](/en/guides/marche/) for gesture detail
- Suggest a diaspora variant via [Propose a recipe](/en/proposer/)`,
  },
};

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

Cooking Congolese food elsewhere often means finding the African grocery that brings that market closer — then adapting, as people always have.`,
  },
};

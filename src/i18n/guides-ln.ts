export type GuideTranslation = {
  title: string;
  seoTitle?: string;
  description: string;
  intro: string;
  imageAlt: string;
  body: string;
};

export const guideTranslationsLn: Record<string, GuideTranslation> = {
  pondu: {
    title: 'Pondu, mpiko ya libota',
    seoTitle: 'Ndenge ya kosala pondu (saka-saka)',
    description:
      'Guide : ndenge ya kosala pondu (saka-saka) — kobanda na zando tii na marmite, ba gestes, tango ya koteka mpe ba ndenge ya libota na RDC.',
    intro: 'Bilei ya mokolo na mokolo oyo esengaka tango, attention mpe loboko ya kotya.',
    imageAlt: 'Matabisi ya manioc ebilisami, esalemi elongo na fufu',
    body: `Pondu — babengami lisusu saka-saka — ezali koleka recette. Ezali rhythm : kosukola, kobiangá, kokata, kofataka na mafuta ya palmier, sima kotika moto esala mosala na mpiko. Mpo na mituya, tala lokasa ya recette ya pondu.

## Oyo oponi na zando

Matabisi ekoki koya ya sika, mikuatami, to ekomi congelé. Ndenge moko na moko ebongola tango ya koteka mpe elakisi ya nsuka. Mafuta ya palmier rouge epesi mozindo ; mbisi ya fumé, soki ezali, epesi ndenge ya libota. Tala lisusu guide ya zando.

## Tango, solo solo

Ba gestes mingi batáni na miso mpe zolo. Sauce esengeli kozala crémeuse — te seche, te mingi mai. Obalabala, ozela, ononola. Mpiko wana ebandi mbala mingi na kotala moto mosusu.

## Ndenge moko kati ya basusu

Na biteni mpe na mabota, bato basalaka pondu na mbisi to sans, pili-pili mingi to moke, na fufu, chikwangue, to loso. Na madesu, ekomaka saka-madesu. Mpichi etángi ndenge moko oyo etángamaka malamu, kozanga koloba ezali ndenge ya solo.

Bolakisi ezali na bomoi : moto moko abongisa motuya, ndenge mosusu ebakwami, lisolo elobisi mpo na nini basalaka bongo mikolo ya vendredi to mikolo ya fête.`,
  },
  moambe: {
    title: 'Moambe, sauce ya fête',
    seoTitle: 'Sauce moambe (mwamba) — guide mpe ba gestes',
    description:
      'Guide ya sauce moambe (mwamba) : pulpe ya noix de palme, kobilisa na moto ya moke, boîte to sika — mpo na soso ya mwambe mpe ba ndenge na RDC.',
    intro: 'Soso ebilisami na moto ya moke, sauce ya mozindo, mesa oyo ezali kotonda.',
    imageAlt: 'Soso ya mwambe esalemi elongo na loso mpe saka-saka',
    body: `Moambe (mwamba) ezali moko ya ba sauces oyo bato baya mingi na bilei ya Congo. Ozali kozwa yango na RDC mpe na diaspora : na boîte, na sachet, mpe mbala mosusu na noix de palme ya sika. Recette ya kosala : soso ya mwambe.

## Oyo epesi sauce nzoto

Aluboka, tomatisi, ail mpe soso ya ndombe basalaka liboso. Pulpe ya palmier elandaka mpe esengaka kobilisa na moto ya moke mpo sauce ekauka kozanga kokanga. Pili-pili mpe bouillon babongisaka monoko ya mokolo.

## Fête mpe mokolo ya semaine

Mpo na bato mingi, bilei ya dimanche to ya cérémonie, kasi moambe ekoki kozala bilei ya semaine soki biloko ezali pene. Batia yango mbala mingi na loso na moambe, fufu, to pondu — accompagnement elobaka libota lokola sauce.

## Oyo Mpichi etángi

Tolobeli ndenge oyo eponi, na mituya malamu mpe ba gestes na ordre. Mabota baká céleri, basilic congolais, to pili-pili na ndenge na bango. Ba ndenge oyo bazali kozanga kobebisa bana moko : balakisi ete bilei moko ezali na bamoi ebele.

Soki okobika libanda Kinshasa, moambe ya boîte ezali point ya kobanda ya solo — soki opesi tango ya kobobola. Variante na mbisi : mbisi na moambe.`,
  },
  marche: {
    title: 'Zando liboso ya marmite',
    seoTitle: 'Zando congolais mpe biloko ya koteka',
    description:
      'Guide ya zando congolais : eleko, biloko oyo ezali, ba remplacements (matabisi, mbisi, mafuta ya palmier) — koteka na RDC to na diaspora.',
    intro: 'Recette ebandi mbala mingi liboso ya moto : kopona ndunda, mbisi, mafuta.',
    imageAlt: 'Liboke efungwami na ndunda na yango, esengeli kolya',
    body: `Na zando congolais, olingi te kotánga liste ya biloko lokola protocole. Otolaka oyo ezali malamu, oyo ezali na nuka ya malamu, oyo eleko epesi, mpe oyo mbongo epesi. Yango moko ezali déjà ndenge moko ya koteka.

## Kotánga étal

Matabisi ya manioc (pondu), biteku-teku, matembele, mbisi ya fumé to ya sika, mafuta ya palmier, plantain : étal moko na moko elobaka biteni mpe eleko ya mobu. Biloko oyo ezali te ebandi te bilei — efungwaka remplacement oyo libota eye mpo na yango.

## Ba remplacements ya solo

Mbisi ya fumé ezali te ? Mabota mosusu bakweya na makayabu, basusu bakende na mboga. Matabisi ya sika ezali te ? Congelé ebongola tango, kasi ntina ekoki kozala moko. Soki ndunda ya banane mpo na liboke ezali te, papier cuisson mpe alu ezali solo na diaspora. Mpichi etángi makoki oyo kozanga koloba ezali « version officielle ».

## Euti na zando tii na lokasa

Kokoma recette elobaka lisusu mobembo wana. Mituya epesaka point ya kobanda ; geste mpe zando babongisaka oyo elandaka. Yango wana ba cartes na biso balobaka biteni soki eye, mpe yango wana ba guides oyo batia makambo na contexte na esika ya norme moko.

Kobika bilei congolais na esika mosusu elobaka mbala mingi kozwa magasin africain oyo azo pene na zando — sima kobongisa, lokola bato basalaka ntango nyonso.`,
  },
  fufu: {
    title: 'Fufu, pâte ya mokolo na mokolo',
    seoTitle: 'Ndenge ya kosala fufu (manioc, maïs, plantain)',
    description:
      'Guide : ndenge ya kosala fufu — farine ya manioc, bugali/bukari ya maïs, fufu ya plantain — ba gestes, bokeseni mpe ba pairings na RDC.',
    intro: 'Pâte oyo ozali kozaa, sauce oyo ozali kozaa : duo ya mesa ya simple.',
    imageAlt: 'Boule ya fufu esalemi lokola accompagnement',
    body: `Liloba **fufu** elobaka mbala mingi pâte ya **manioc**, kasi mesa congolaise eye ba ndeko ebele : farine ya maïs ([bukari / bugali](/ln/recettes/bukari-katanga/)), plantain ([fufu ya plantain](/ln/recettes/fufu-plantain/) to [lituma](/ln/recettes/lituma/)), mpe bâton ya fermenté ([chikwangue](/ln/recettes/chikwangue/)), oyo ezali pâte te oyo obalabala na spatule.

## Geste oyo ezali na bato nyonso

Mai ya moto, farine, spatule ya makasi. Obandi lokola bouillie ya pétrole, sima obakisa farine mpo ozala na masse ya pete oyo ekweyi na paroi ya marmite. Mai mingi : pâte ya mou. Farine mingi mbala moko : mbuma. Mituya : [fufu ya manioc](/ln/recettes/fufu-manioc/).

## Manioc, maïs, plantain

- **Manioc** : neutre, elastic — Kinshasa, Ouest, Cuvette.
- **Maïs (bugali / bukari / bidia)** : Est mpe Katanga / Kasaï ; technique moko, farine mosusu.
- **Plantain** : fruit écrasé to farine selon libota ; plus sucré, mbala mingi na mbisi to sauce rouge.

## Oyo osalela yango elongo

Fufu ekolyamaka mbala mingi te : [pondu](/ln/recettes/pondu/), [moambe](/ln/recettes/moambe-poulet/), ba sauces ya nyama, mbisi, mboga. Zaa boule, sala libota, zaa sauce.

## Oyo Mpichi etángi

Ba cartes etí kozanga kokanga ba gestes oyo ekeseni (bouilli ≠ frit, manioc ≠ maïs). Guide oyo ezali orientation ; recettes epesi ba proportions. Tala lisusu [guide ya zando](/ln/guides/marche/) mpo na ba farines mpe ba remplacements na diaspora.`,
  },
};

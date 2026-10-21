export type SceneId =
  | 'intro'
  | 'gestes'
  | 'catalogue'
  | 'explorer'
  | 'outro';

export type SceneDef = {
  id: SceneId;
  audio: string;
  eyebrow: string;
  title: string;
  lines: string[];
};

export const SCENES: SceneDef[] = [
  {
    id: 'intro',
    audio: 'voiceover/01-intro.wav',
    eyebrow: 'Présentation',
    title: 'Mpichi',
    lines: ['Un répertoire vivant', 'des cuisines de la RDC'],
  },
  {
    id: 'gestes',
    audio: 'voiceover/02-gestes.wav',
    eyebrow: 'Le projet',
    title: 'Gestes & territoires',
    lines: ['Recettes documentées', 'en français et en anglais'],
  },
  {
    id: 'catalogue',
    audio: 'voiceover/03-catalogue.wav',
    eyebrow: 'Le catalogue',
    title: '51 recettes',
    lines: ['Plats · goûters · boissons', 'De la moambe au tangawisi'],
  },
  {
    id: 'explorer',
    audio: 'voiceover/04-explorer.wav',
    eyebrow: 'L’expérience',
    title: 'Explorer',
    lines: ['Régions · catégories · favoris', 'Guides éditoriaux'],
  },
  {
    id: 'outro',
    audio: 'voiceover/05-outro.wav',
    eyebrow: 'RDC',
    title: 'Mpichi',
    lines: ['Conçu et réalisé en RDC', 'par Likeur'],
  },
];

export const locales = ['fr', 'en', 'ln'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const localeLabels: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
  ln: 'LN',
};

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  ln: 'Lingála',
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

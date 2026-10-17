import type { Locale } from '../i18n/config';
import { localePath, stripLocaleFromPath } from '../i18n/utils';
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  SITE_AUTHOR,
  SITE_AUTHOR_URL,
  SITE_NAME,
  SITE_URL,
} from './site';

export function resolveOrigin(site?: URL | undefined): string {
  return (site?.origin || SITE_URL).replace(/\/$/, '');
}

export function pageCanonical(pathname: string, origin: string): string {
  const path = pathname.endsWith('/') || pathname.includes('.') ? pathname : `${pathname}/`;
  return absoluteUrl(path === '//' ? '/' : path, origin);
}

export function hreflangUrls(pathname: string, origin: string) {
  const bare = stripLocaleFromPath(pathname);
  return {
    fr: absoluteUrl(localePath(bare, 'fr'), origin),
    en: absoluteUrl(localePath(bare, 'en'), origin),
  };
}

export function defaultOgImage(origin: string): string {
  return absoluteUrl(DEFAULT_OG_IMAGE, origin);
}

export function websiteJsonLd(locale: Locale, origin: string) {
  const homePath = locale === 'en' ? '/en/' : '/';
  const searchPath = localePath('/recettes/', locale);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: absoluteUrl(homePath, origin),
    inLanguage: locale === 'en' ? 'en' : 'fr-CD',
    description:
      locale === 'en'
        ? 'Congolese cuisine — recipes, regions and traditions from the DRC'
        : 'Cuisine congolaise — recettes, régions et traditions de la RDC',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: absoluteUrl('/', origin),
      founder: {
        '@type': 'Person',
        name: SITE_AUTHOR,
        url: SITE_AUTHOR_URL,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${absoluteUrl(searchPath, origin)}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

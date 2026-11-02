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
    ln: absoluteUrl(localePath(bare, 'ln'), origin),
  };
}

export function defaultOgImage(origin: string): string {
  return absoluteUrl(DEFAULT_OG_IMAGE, origin);
}

/** Absolute logo URL for Google Search / Knowledge Graph (min 112×112 PNG). */
export function siteLogoUrl(origin: string): string {
  return absoluteUrl('/icon-512.png', origin);
}

export function organizationJsonLd(origin: string) {
  return {
    '@type': 'Organization',
    '@id': `${origin}/#organization`,
    name: SITE_NAME,
    alternateName: [
      'Mpichi — Cuisine congolaise',
      'Mpichi — Catalogue de recettes congolaises',
      'Mpichi Congolese recipes',
    ],
    url: absoluteUrl('/', origin),
    logo: {
      '@type': 'ImageObject',
      url: siteLogoUrl(origin),
      width: 512,
      height: 512,
      caption: 'Mpichi',
    },
    image: siteLogoUrl(origin),
    founder: {
      '@type': 'Person',
      name: SITE_AUTHOR,
      url: SITE_AUTHOR_URL,
    },
    sameAs: [SITE_AUTHOR_URL],
    areaServed: {
      '@type': 'Country',
      name: 'Democratic Republic of the Congo',
    },
    knowsAbout: [
      'Cuisine congolaise',
      'Recettes congolaises',
      'Congolese cuisine',
      'Pondu',
      'Moambe',
      'Liboke',
      'République démocratique du Congo',
    ],
  };
}

export function websiteJsonLd(locale: Locale, origin: string) {
  const homePath = localePath('/', locale);
  const searchPath = localePath('/recettes/', locale);
  const siteNames = {
    fr: 'Mpichi — Catalogue de recettes congolaises',
    en: 'Mpichi — Catalogue of Congolese recipes',
    ln: 'Mpichi — Kataloge ya ba recettes ya Congo',
  } as const;
  const descriptions = {
    fr: 'Mpichi répertorie le catalogue des recettes congolaises de la RDC : plats, gestes, régions et traditions culinaires, en français, anglais et lingala.',
    en: 'Mpichi catalogues Congolese recipes from the DRC — dishes, gestures, regions and culinary traditions in French, English and Lingala.',
    ln: 'Mpichi ekómisi kataloge ya ba recettes ya Congo na RDC — bilei, ba gestes, biteni mpe milakisi, na lifalansé, anglais mpe lingála.',
  } as const;
  const cuisineNames = {
    fr: 'Cuisine congolaise',
    en: 'Congolese cuisine',
    ln: 'Bilei ya Congo',
  } as const;
  const inLanguage = { fr: 'fr-CD', en: 'en', ln: 'ln' } as const;

  return {
    '@type': 'WebSite',
    '@id': `${origin}/#website`,
    name: SITE_NAME,
    alternateName: siteNames[locale],
    url: absoluteUrl(homePath, origin),
    inLanguage: inLanguage[locale],
    description: descriptions[locale],
    publisher: { '@id': `${origin}/#organization` },
    about: {
      '@type': 'Thing',
      name: cuisineNames[locale],
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

/** Graph with Organization + WebSite for every page head. */
export function siteGraphJsonLd(locale: Locale, origin: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [organizationJsonLd(origin), websiteJsonLd(locale, origin)],
  };
}

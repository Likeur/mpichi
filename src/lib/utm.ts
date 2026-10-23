/** Build campaign URLs for social posts (LinkedIn, WhatsApp, Beacons). */

export type UtmParams = {
  source: string;
  medium: string;
  campaign: string;
  content?: string;
};

export const LINKEDIN_WEEKLY: UtmParams = {
  source: 'linkedin',
  medium: 'social',
  campaign: 'weekly',
};

export const WHATSAPP_LUBUM: UtmParams = {
  source: 'whatsapp',
  medium: 'social',
  campaign: 'lubumbashi',
};

export function withUtm(url: string, utm: UtmParams, base = 'https://mpichi.likeur.xyz'): string {
  const parsed = new URL(url, base);
  parsed.searchParams.set('utm_source', utm.source);
  parsed.searchParams.set('utm_medium', utm.medium);
  parsed.searchParams.set('utm_campaign', utm.campaign);
  if (utm.content) parsed.searchParams.set('utm_content', utm.content);
  return parsed.toString();
}

/** Client-side GA4 helpers. Key events must also be marked in the GA4 UI. */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ALLOWED_HOSTS = new Set(['mpichi.likeur.xyz', 'localhost', '127.0.0.1']);

const BOT_UA =
  /bot|crawler|spider|slurp|headless|lighthouse|pagespeed|pingdom|preview|facebookexternalhit|whatsapp|telegram/i;

export function analyticsEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  if (!ALLOWED_HOSTS.has(window.location.hostname)) return false;
  if (BOT_UA.test(navigator.userAgent || '')) return false;
  return true;
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean | undefined>,
): void {
  if (!analyticsEnabled()) return;
  if (typeof window.gtag !== 'function') return;

  const cleaned: Record<string, string | number | boolean> = {};
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) cleaned[key] = value;
    }
  }

  window.gtag('event', name, cleaned);
}

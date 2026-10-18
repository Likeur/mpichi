export const FAVORITES_STORAGE_KEY = 'mpichi:favorites';
export const FAVORITES_CHANGED_EVENT = 'mpichi:favorites-changed';

export type FavoritesWriteResult = {
  ok: boolean;
  favorites: string[];
};

export type FavoriteToggleResult = {
  ok: boolean;
  active: boolean;
};

function canUseStorage(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function getFavorites(): string[] {
  if (!canUseStorage()) return [];

  try {
    const raw = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === 'string' && item.length > 0);
  } catch {
    return [];
  }
}

export function setFavorites(slugs: string[]): FavoritesWriteResult {
  const unique = [...new Set(slugs)];
  if (!canUseStorage()) return { ok: false, favorites: unique };

  try {
    const payload = JSON.stringify(unique);
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, payload);
    const stored = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    return { ok: stored === payload, favorites: unique };
  } catch {
    return { ok: false, favorites: getFavorites() };
  }
}

export function isFavorite(slug: string): boolean {
  return getFavorites().includes(slug);
}

export function toggleFavorite(slug: string): FavoriteToggleResult {
  const current = getFavorites();
  const next = current.includes(slug)
    ? current.filter((item) => item !== slug)
    : [...current, slug];
  const { ok, favorites } = setFavorites(next);
  return { ok, active: favorites.includes(slug) };
}

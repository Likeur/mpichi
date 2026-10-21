/** Extract an 11-char YouTube video id from common URL shapes. */
export function youtubeVideoId(url: string): string | undefined {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      const id = parsed.pathname.split('/').filter(Boolean)[0];
      return isYoutubeId(id) ? id : undefined;
    }

    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
      const v = parsed.searchParams.get('v');
      if (isYoutubeId(v)) return v;

      const parts = parsed.pathname.split('/').filter(Boolean);
      if (parts[0] === 'embed' || parts[0] === 'shorts' || parts[0] === 'live') {
        const id = parts[1];
        return isYoutubeId(id) ? id : undefined;
      }
    }
  } catch {
    return undefined;
  }
  return undefined;
}

function isYoutubeId(value: string | null | undefined): value is string {
  return Boolean(value && /^[\w-]{11}$/.test(value));
}

export function youtubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function youtubeThumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}


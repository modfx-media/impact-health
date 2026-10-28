export function blogTitleKey(title: string): string {
  return title.replace(/\s+/g, " ").trim().toLowerCase();
}

function isCmsMediaUrl(url: string): boolean {
  return (
    /\/api\/media\/file\//i.test(url) ||
    /\.public\.blob\.vercel-storage\.com/i.test(url)
  );
}

function listingImage(url: string): string {
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("/api/media/")) return `https://impacthealthoh.com${url}`;
  return url;
}

function dateValue(value: string): number {
  const time = new Date(value).getTime();
  return Number.isNaN(time) ? 0 : time;
}

function dateStamp(value: string): string {
  const time = dateValue(value);
  if (!time) return value.slice(0, 10);
  return new Date(time).toISOString().slice(0, 10);
}

/**
 * Same article can exist as a Ranked/local post and a CMS post (different
 * slugs, dates, covers). Keep one card: later date, CMS image when present.
 */
export function dedupeBlogListItems<
  T extends {
    slug: string;
    title: string;
    image: string;
    imageAlt: string;
    date: string;
  },
>(posts: T[], preferSlug?: Set<string>): T[] {
  const byTitle = new Map<string, T>();

  for (const post of posts) {
    const key = blogTitleKey(post.title);
    const current = byTitle.get(key);
    if (!current) {
      byTitle.set(key, post);
      continue;
    }

    const later =
      dateValue(post.date) > dateValue(current.date) ? post.date : current.date;
    const image = listingImage(
      isCmsMediaUrl(post.image)
        ? post.image
        : isCmsMediaUrl(current.image)
          ? current.image
          : current.image,
    );
    const imageAlt = isCmsMediaUrl(post.image)
      ? post.imageAlt
      : current.imageAlt;

    const keepCurrent =
      !preferSlug ||
      preferSlug.has(current.slug) ||
      !preferSlug.has(post.slug);

    const keep = keepCurrent ? current : post;
    byTitle.set(key, {
      ...keep,
      date: dateStamp(later),
      image,
      imageAlt,
    });
  }

  return [...byTitle.values()];
}

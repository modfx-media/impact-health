import type { Metadata } from "next";

type PublishedMetaDoc = {
  title?: string;
  canonicalUrl?: string | null;
  noIndex?: boolean | null;
  noFollow?: boolean | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    canonicalUrl?: string | null;
    noIndex?: boolean | null;
    noFollow?: boolean | null;
    image?: unknown;
  } | null;
};

function metaText(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function mediaUrl(value: unknown): string | undefined {
  if (!value || typeof value !== "object") return undefined;
  if ("url" in value && typeof value.url === "string" && value.url) return value.url;
  return undefined;
}

/**
 * Published CMS `meta` wins field by field. `meta.title` is the document
 * title verbatim (`title.absolute`). Empty meta keeps the page's hardcoded
 * Metadata.
 */
export function applyPublishedMeta(
  doc: PublishedMetaDoc | null | undefined,
  fallback: Metadata,
): Metadata {
  if (!doc) return fallback;

  const meta = doc.meta;
  const metaTitle = metaText(meta?.title);
  const metaDescription = metaText(meta?.description);
  const canonical = metaText(meta?.canonicalUrl) || metaText(doc.canonicalUrl);
  const image = mediaUrl(meta?.image);
  const noIndex = Boolean(meta?.noIndex || doc.noIndex);
  const noFollow = Boolean(meta?.noFollow || doc.noFollow);

  const next: Metadata = { ...fallback };

  if (metaTitle) next.title = { absolute: metaTitle };
  if (metaDescription) next.description = metaDescription;
  if (canonical) {
    next.alternates = { ...fallback.alternates, canonical };
  }
  if (noIndex || noFollow) {
    next.robots = { index: !noIndex, follow: !noFollow };
  }

  if (metaTitle || metaDescription || image || canonical) {
    const openGraph =
      fallback.openGraph && typeof fallback.openGraph === "object" ? fallback.openGraph : {};
    const twitter =
      fallback.twitter && typeof fallback.twitter === "object" ? fallback.twitter : {};
    next.openGraph = {
      ...openGraph,
      ...(metaTitle ? { title: metaTitle } : {}),
      ...(metaDescription ? { description: metaDescription } : {}),
      ...(canonical ? { url: canonical } : {}),
      ...(image ? { images: [{ url: image }] } : {}),
    };
    next.twitter = {
      ...twitter,
      ...(metaTitle ? { title: metaTitle } : {}),
      ...(metaDescription ? { description: metaDescription } : {}),
      ...(image ? { images: [image] } : {}),
    };
  }

  return next;
}

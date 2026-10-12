import type { Metadata } from "next";
import { queryRoutedContentByPath } from "@/lib/cms/query";
import { publicPath } from "@/lib/cms/urls";
import { withCMS } from "@/lib/cms/safe";

export async function cmsMetadata(
  path: string,
  fallback: Metadata,
): Promise<Metadata> {
  return withCMS(async () => {
    const routed = await queryRoutedContentByPath(path);
    if (!routed) return fallback;

    const doc = routed.doc;
    const meta = doc.meta;
    const title = meta?.title || doc.title || doc.name || fallback.title;
    const description = meta?.description || fallback.description;
    const canonical =
      (typeof doc.canonicalUrl === "string" && doc.canonicalUrl) ||
      (typeof meta?.canonicalUrl === "string" && meta.canonicalUrl) ||
      publicPath(typeof doc.path === "string" ? doc.path : path);

    const next: Metadata = {
      ...fallback,
      title,
      description,
      alternates: {
        ...fallback.alternates,
        canonical,
      },
    };

    const noIndex = Boolean(doc.noIndex || meta?.noIndex);
    const noFollow = Boolean(doc.noFollow || meta?.noFollow);
    if (noIndex || noFollow) {
      next.robots = { index: !noIndex, follow: !noFollow };
    }

    return next;
  }, fallback);
}

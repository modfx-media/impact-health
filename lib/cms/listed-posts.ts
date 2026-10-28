import { getPayload } from "payload";
import config from "@payload-config";
import { cmsDatabaseUrl } from "@/lib/cms/env";
import { withCMS } from "@/lib/cms/safe";

export type CmsListedPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  path: string;
};

function mediaUrl(value: unknown): string {
  if (value && typeof value === "object" && "url" in value) {
    const url = (value as { url?: unknown }).url;
    return typeof url === "string" ? url : "";
  }
  return "";
}

/**
 * Posts published in the CMS (the future-date guard in scheduled-publish.ts
 * keeps not-yet-due posts out). Used to add CMS-authored posts to the blog
 * listing alongside the legacy and Ranked posts.
 */
export async function getCmsPublishedPosts(): Promise<CmsListedPost[]> {
  if (!process.env.PAYLOAD_SECRET || !cmsDatabaseUrl()) return [];
  return withCMS(async () => {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "posts",
      depth: 1,
      draft: false,
      overrideAccess: false,
      limit: 500,
      pagination: false,
      sort: "-publishDate",
      where: { _status: { equals: "published" } },
    });
    return result.docs.map((raw) => {
      const doc = raw as unknown as Record<string, any>;
      const slug = String(doc.slug ?? "").replace(/^\/+|\/+$/g, "");
      return {
        slug,
        title: String(doc.title ?? doc.h1 ?? slug),
        excerpt: String(doc.excerpt ?? doc.meta?.description ?? ""),
        image: String(doc.coverImageUrl || mediaUrl(doc.meta?.image) || ""),
        imageAlt: String(doc.coverImageAlt ?? doc.title ?? ""),
        date: String(doc.publishDate ?? doc.createdAt ?? ""),
        path: String(doc.path || `/blog/${slug}`),
      };
    }).filter((p) => p.slug);
  }, []);
}

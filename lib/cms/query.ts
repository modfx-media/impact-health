import { getPayload } from "payload";
import config from "@payload-config";
import { draftMode } from "next/headers";
import { normalizeCmsPath } from "@/lib/cms/urls";
import { withCMS } from "@/lib/cms/safe";

export type RoutedCollection = "pages" | "posts" | "staff" | "area-pages";

export type RoutedDoc = Record<string, unknown> & {
  id?: string | number;
  title?: string;
  name?: string;
  path?: string;
  slug?: string;
  canonicalUrl?: string | null;
  noIndex?: boolean | null;
  noFollow?: boolean | null;
  excludeFromSitemap?: boolean | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    canonicalUrl?: string | null;
    noIndex?: boolean | null;
    noFollow?: boolean | null;
    excludeFromSitemap?: boolean | null;
    image?: unknown;
  };
};

export type RoutedContent = {
  collection: RoutedCollection;
  doc: RoutedDoc;
};

const collections: RoutedCollection[] = [
  "pages",
  "posts",
  "staff",
  "area-pages",
];

export async function queryRoutedContentByPath(
  path: string,
): Promise<RoutedContent | null> {
  return withCMS(async () => {
    const cmsPath = normalizeCmsPath(path);
    if (!cmsPath) return null;
    if (!process.env.PAYLOAD_SECRET || !process.env.DATABASE_URL) return null;

    const payload = await getPayload({ config });
    const { isEnabled } = await draftMode();

    for (const collection of collections) {
      const result = await payload.find({
        collection,
        where: { path: { equals: cmsPath } },
        limit: 1,
        depth: 2,
        draft: isEnabled,
        overrideAccess: isEnabled,
      });
      const doc = result.docs[0] as unknown as RoutedDoc | undefined;
      if (doc) return { collection, doc };
    }
    return null;
  }, null);
}

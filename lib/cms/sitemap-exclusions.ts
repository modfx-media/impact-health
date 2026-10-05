import { getPayload } from "payload";
import config from "@payload-config";
import { withCMS } from "@/lib/cms/safe";
import type { RoutedCollection } from "@/lib/cms/query";
import { publicPath } from "@/lib/cms/urls";

const collections: RoutedCollection[] = [
  "pages",
  "posts",
  "staff",
  "area-pages",
];

export async function cmsSitemapExclusions(): Promise<Set<string>> {
  return withCMS(async () => {
    if (!process.env.PAYLOAD_SECRET || !process.env.DATABASE_URL) {
      return new Set<string>();
    }

    const payload = await getPayload({ config });
    const excluded = new Set<string>();

    for (const collection of collections) {
      const result = await payload.find({
        collection,
        where: {
          or: [
            { noIndex: { equals: true } },
            { excludeFromSitemap: { equals: true } },
          ],
        },
        limit: 1000,
        depth: 0,
        draft: false,
        pagination: false,
      });

      for (const doc of result.docs) {
        const pathValue =
          typeof doc.path === "string"
            ? doc.path
            : typeof doc.slug === "string"
              ? `/${doc.slug}`
              : null;
        if (pathValue) excluded.add(publicPath(pathValue));
      }
    }

    return excluded;
  }, new Set<string>());
}

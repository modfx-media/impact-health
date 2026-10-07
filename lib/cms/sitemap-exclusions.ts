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

function docPublicPath(doc: {
  path?: unknown;
  slug?: unknown;
}): string | null {
  const pathValue =
    typeof doc.path === "string"
      ? doc.path
      : typeof doc.slug === "string"
        ? `/${doc.slug}`
        : null;
  return pathValue ? publicPath(pathValue) : null;
}

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
        const pathValue = docPublicPath(doc);
        if (pathValue) excluded.add(pathValue);
      }
    }

    return excluded;
  }, new Set<string>());
}

/** Prefer CMS `sourceUpdatedAt` / `updatedAt` for sitemap lastModified. */
export async function cmsSitemapLastModified(): Promise<Map<string, Date>> {
  return withCMS(async () => {
    if (!process.env.PAYLOAD_SECRET || !process.env.DATABASE_URL) {
      return new Map<string, Date>();
    }

    const payload = await getPayload({ config });
    const dates = new Map<string, Date>();

    for (const collection of collections) {
      const result = await payload.find({
        collection,
        limit: 1000,
        depth: 0,
        draft: false,
        pagination: false,
      });

      for (const doc of result.docs) {
        const pathValue = docPublicPath(doc);
        if (!pathValue) continue;
        const source =
          typeof doc.sourceUpdatedAt === "string"
            ? doc.sourceUpdatedAt
            : typeof doc.updatedAt === "string"
              ? doc.updatedAt
              : null;
        if (source) dates.set(pathValue, new Date(source));
      }
    }

    return dates;
  }, new Map<string, Date>());
}

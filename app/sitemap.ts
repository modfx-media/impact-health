import type { MetadataRoute } from "next";
import { getPublishedBlogPosts } from "@/lib/ranked/posts";
import { staffMembers } from "@/lib/staff-data";
import { SITE_URL } from "@/lib/site";
import {
  AREAS_WE_SERVE_ENABLED,
  AREAS_WE_SERVE_PILOT_MODE,
  PILOT_COMBOS,
  PILOT_LOCATION_SLUGS,
  shouldNoindexArea,
} from "@/lib/areas-we-serve/config";
import { areaLocations } from "@/lib/areas-we-serve/locations";
import { areaTopics } from "@/lib/areas-we-serve/topics";
import { staticCmsPaths } from "@/lib/cms/url-manifest";
import { publicPath } from "@/lib/cms/urls";
import { cmsSitemapExclusions } from "@/lib/cms/sitemap-exclusions";

const BASE_URL = SITE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const excluded = await cmsSitemapExclusions();

  const staticEntries: MetadataRoute.Sitemap = staticCmsPaths
    .map((cmsPath) => publicPath(cmsPath))
    .filter((path) => !excluded.has(path))
    .map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
    }));

  const publishedPosts = await getPublishedBlogPosts().catch(() => []);
  const blogEntries: MetadataRoute.Sitemap = publishedPosts
    .filter((post) => !excluded.has(`/blog/${post.slug}/`))
    .map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}/`,
      lastModified: new Date(post.publishDate),
    }));

  const staffEntries: MetadataRoute.Sitemap = staffMembers
    .filter((member) => !excluded.has(`/staff/${member.slug}/`))
    .map((member) => ({
      url: `${BASE_URL}/staff/${member.slug}/`,
      lastModified: new Date(),
    }));

  const areasWeServeEntries: MetadataRoute.Sitemap = AREAS_WE_SERVE_ENABLED
    ? AREAS_WE_SERVE_PILOT_MODE
      ? [
          { url: `${BASE_URL}/areas-we-serve/`, lastModified: new Date() },
          ...PILOT_LOCATION_SLUGS.map((slug) => ({
            url: `${BASE_URL}/areas-we-serve/${slug}/`,
            lastModified: new Date(),
          })),
          ...PILOT_COMBOS.map(({ location, topic }) => ({
            url: `${BASE_URL}/areas-we-serve/${location}/${topic}/`,
            lastModified: new Date(),
          })),
        ].filter((entry) => {
          const path = entry.url.replace(BASE_URL, "");
          return !excluded.has(path);
        })
      : [
          { url: `${BASE_URL}/areas-we-serve/`, lastModified: new Date() },
          ...areaLocations.map((location) => ({
            url: `${BASE_URL}/areas-we-serve/${location.slug}/`,
            lastModified: new Date(),
          })),
          ...areaLocations.flatMap((location) =>
            areaTopics
              .filter(() => !shouldNoindexArea(location))
              .map((topic) => ({
                url: `${BASE_URL}/areas-we-serve/${location.slug}/${topic.slug}/`,
                lastModified: new Date(),
              })),
          ),
        ].filter((entry) => {
          const path = entry.url.replace(BASE_URL, "");
          return !excluded.has(path);
        })
    : [];

  return [...staticEntries, ...blogEntries, ...staffEntries, ...areasWeServeEntries];
}

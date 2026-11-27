import type { Metadata } from "next";
import { applyPublishedMeta } from "@/lib/cms/apply-published-meta";
import { queryRoutedContentByPath } from "@/lib/cms/query";
import { withCMS } from "@/lib/cms/safe";

export async function cmsMetadata(
  path: string,
  fallback: Metadata,
): Promise<Metadata> {
  return withCMS(async () => {
    const routed = await queryRoutedContentByPath(path);
    if (!routed) return fallback;
    return applyPublishedMeta(routed.doc, fallback);
  }, fallback);
}

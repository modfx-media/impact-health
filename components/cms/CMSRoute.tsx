import type { ReactNode } from "react";
import { draftMode } from "next/headers";
import {
  queryRoutedContentByPath,
  type RoutedContent,
} from "@/lib/cms/query";
import { LivePreviewListener } from "@/components/cms/LivePreviewListener";
import { RenderRoutedContent } from "@/components/cms/RenderRoutedContent";

/** Only overlay designed UI when CMS has real body content (or draft preview). */
function hasRenderableContent(routed: RoutedContent): boolean {
  const { collection, doc } = routed;

  if (collection === "posts") {
    return Boolean(doc.content || doc.bodyHtml);
  }

  if (collection === "staff") {
    return (
      Array.isArray(doc.bio) &&
      (doc.bio as { paragraph?: string }[]).some((row) => Boolean(row?.paragraph))
    );
  }

  const layout = Array.isArray(doc.layout) ? doc.layout : [];
  return layout.length > 0;
}

export async function CMSRoute({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  const [routed, draft] = await Promise.all([
    queryRoutedContentByPath(path),
    draftMode(),
  ]);

  if (!routed) return children;

  // Sparse published drafts must not blank the designed page. Live preview
  // still shows the CMS shell so editors can iterate.
  if (!hasRenderableContent(routed) && !draft.isEnabled) {
    return children;
  }

  return (
    <>
      {draft.isEnabled && <LivePreviewListener />}
      <RenderRoutedContent doc={routed.doc} collection={routed.collection} />
    </>
  );
}

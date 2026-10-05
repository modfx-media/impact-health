import type { ReactNode } from "react";
import { draftMode } from "next/headers";
import { queryRoutedContentByPath } from "@/lib/cms/query";
import { LivePreviewListener } from "@/components/cms/LivePreviewListener";
import { RenderRoutedContent } from "@/components/cms/RenderRoutedContent";

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

  return (
    <>
      {draft.isEnabled && <LivePreviewListener />}
      <RenderRoutedContent doc={routed.doc} collection={routed.collection} />
    </>
  );
}

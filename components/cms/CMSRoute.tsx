import type { ReactNode } from "react";
import { draftMode } from "next/headers";
import {
  queryRoutedContentByPath,
} from "@/lib/cms/query";
import {
  hasDesignedRoute,
  selectCmsRouteView,
} from "@/lib/cms/route-view";
import { LivePreviewListener } from "@/components/cms/LivePreviewListener";
import { RenderRoutedContent } from "@/components/cms/RenderRoutedContent";

/**
 * Designed UI stays as children. CMS supplies meta through generateMetadata
 * and does not replace a route that already has a designed component, even
 * when the published doc has a body. CMS blocks render only for a URL with
 * no designed component and a layout that actually has blocks.
 */
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

  const status = routed?.doc._status;
  const view = selectCmsRouteView({
    routed: routed
      ? {
          collection: routed.collection,
          doc: {
            _status: typeof status === "string" ? status : null,
            layout: routed.doc.layout,
          },
        }
      : null,
    draft: draft.isEnabled,
    hasDesignedComponent: hasDesignedRoute(children),
  });

  const body =
    view === "cms" && routed ? (
      <RenderRoutedContent doc={routed.doc} collection={routed.collection} />
    ) : (
      children
    );

  if (draft.isEnabled && routed) {
    return (
      <>
        <LivePreviewListener />
        {body}
      </>
    );
  }

  return body;
}

export type CmsRouteView = "designed" | "cms";

export type CmsRouteDoc = {
  _status?: string | null;
  layout?: unknown;
};

export type RoutedPageForView = {
  collection: string;
  doc: CmsRouteDoc;
} | null;

/** A route passed children when it already has a designed page. */
export function hasDesignedRoute(children: unknown): boolean {
  return children != null && children !== false;
}

/** Payload `layout` blocks. Missing or empty means there is nothing to render. */
export function hasCmsBlocks(layout: unknown): boolean {
  return Array.isArray(layout) && layout.length > 0;
}

/**
 * Designed UI stays. A published doc with a body does not replace a route
 * that already has a designed component. CMS blocks render only when the
 * layout has blocks and this URL has no designed component.
 */
export function selectCmsRouteView(input: {
  routed: RoutedPageForView;
  draft: boolean;
  hasDesignedComponent: boolean;
}): CmsRouteView {
  const { routed, draft, hasDesignedComponent } = input;
  if (!routed) return "designed";

  const status = routed.doc._status;
  if (status && status !== "published" && !draft) return "designed";
  if (hasDesignedComponent) return "designed";
  if (!hasCmsBlocks(routed.doc.layout)) return "designed";
  return "cms";
}

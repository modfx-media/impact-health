import assert from "node:assert/strict";
import test from "node:test";
import { hasCmsBlocks, selectCmsRouteView } from "./route-view";

const blocks = [{ blockType: "richText", html: "<p>Published body</p>" }];

test("a published doc with a body keeps the designed component", () => {
  assert.equal(
    selectCmsRouteView({
      routed: { collection: "pages", doc: { _status: "published", layout: blocks } },
      draft: false,
      hasDesignedComponent: true,
    }),
    "designed",
  );
  assert.equal(
    selectCmsRouteView({
      routed: {
        collection: "posts",
        doc: { _status: "published", layout: blocks },
      },
      draft: false,
      hasDesignedComponent: true,
    }),
    "designed",
  );
});

test("draft preview of a designed route still renders the designed component", () => {
  assert.equal(
    selectCmsRouteView({
      routed: { collection: "pages", doc: { _status: "draft", layout: blocks } },
      draft: true,
      hasDesignedComponent: true,
    }),
    "designed",
  );
});

test("CMS blocks render only when the route has no designed component", () => {
  assert.equal(
    selectCmsRouteView({
      routed: { collection: "pages", doc: { _status: "published", layout: blocks } },
      draft: false,
      hasDesignedComponent: false,
    }),
    "cms",
  );
  assert.equal(hasCmsBlocks([]), false);
  assert.equal(
    selectCmsRouteView({
      routed: { collection: "pages", doc: { _status: "published", layout: [] } },
      draft: false,
      hasDesignedComponent: false,
    }),
    "designed",
  );
});

test("no published doc keeps the designed page", () => {
  assert.equal(
    selectCmsRouteView({
      routed: null,
      draft: false,
      hasDesignedComponent: true,
    }),
    "designed",
  );
});

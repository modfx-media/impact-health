import type { CollectionConfig } from "payload";
import { authenticated, authenticatedOrPublished } from "@/lib/cms/access";
import { normalizeCmsPath } from "@/lib/cms/urls";
import {
  draftVersions,
  importFields,
  legacySeoFields,
  previewAdmin,
  uniqueNullableText,
} from "@/collections/shared";
import { layoutBlocks } from "@/collections/blocks";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "path", "_status", "updatedAt"],
    ...previewAdmin((data) =>
      typeof data.path === "string" ? data.path : null,
    ),
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  versions: draftVersions,
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (!data) return data;
        if (data.path === "") data.path = null;
        if (data.slug === "") data.slug = null;
        if (!data.path && data.slug) {
          data.path = data.slug === "home" ? "/" : `/${String(data.slug).replace(/^\/+/, "")}`;
        }
        if (typeof data.path === "string") {
          data.path = normalizeCmsPath(data.path);
        }
        return data;
      },
    ],
  },
  fields: [
    { name: "title", type: "text", required: true },
    uniqueNullableText("slug"),
    uniqueNullableText("path", {
      admin: { position: "sidebar" },
    }),
    { name: "eyebrow", type: "text" },
    { name: "intro", type: "textarea" },
    { name: "heroImageUrl", type: "text" },
    { name: "heroImageAlt", type: "text" },
    {
      name: "layout",
      type: "blocks",
      blocks: layoutBlocks,
    },
    ...legacySeoFields,
    ...importFields,
  ],
};

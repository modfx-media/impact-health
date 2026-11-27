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

export const AreaPages: CollectionConfig = {
  slug: "area-pages",
  labels: {
    singular: "Area page",
    plural: "Area pages",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "path", "_status"],
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
        if (data.slug === "") data.slug = null;
        if (data.path === "") data.path = null;
        if (typeof data.path === "string") data.path = normalizeCmsPath(data.path);
        return data;
      },
    ],
  },
  fields: [
    { name: "title", type: "text", required: true },
    uniqueNullableText("slug"),
    uniqueNullableText("path", { admin: { position: "sidebar" } }),
    { name: "locationSlug", type: "text" },
    { name: "topicSlug", type: "text" },
    {
      name: "kind",
      type: "select",
      options: [
        { label: "Hub", value: "hub" },
        { label: "Location", value: "location" },
        { label: "Combo", value: "combo" },
      ],
    },
    { name: "eyebrow", type: "text" },
    { name: "intro", type: "textarea" },
    {
      name: "layout",
      type: "blocks",
      blocks: layoutBlocks,
    },
    ...legacySeoFields,
    ...importFields,
  ],
};

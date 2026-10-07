import type { CollectionConfig } from "payload";
import { authenticated, authenticatedOrPublished } from "@/lib/cms/access";
import { normalizeCmsPath } from "@/lib/cms/urls";
import {
  draftVersions,
  importFields,
  previewAdmin,
  uniqueNullableText,
} from "@/collections/shared";

export const Staff: CollectionConfig = {
  slug: "staff",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug", "_status"],
    ...previewAdmin((data) =>
      typeof data.path === "string"
        ? data.path
        : typeof data.slug === "string"
          ? `/staff/${data.slug}`
          : null,
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
        if (!data.path && data.slug) data.path = `/staff/${data.slug}`;
        if (typeof data.path === "string") data.path = normalizeCmsPath(data.path);
        return data;
      },
    ],
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "title", type: "text" },
    uniqueNullableText("slug"),
    uniqueNullableText("path", { admin: { position: "sidebar" } }),
    { name: "role", type: "text" },
    { name: "blurb", type: "textarea" },
    { name: "imageUrl", type: "text" },
    {
      name: "bio",
      type: "array",
      fields: [{ name: "paragraph", type: "textarea" }],
    },
    { name: "canonicalUrl", type: "text" },
    { name: "noIndex", type: "checkbox", defaultValue: false },
    { name: "noFollow", type: "checkbox", defaultValue: false },
    { name: "excludeFromSitemap", type: "checkbox", defaultValue: false },
    ...importFields,
  ],
};

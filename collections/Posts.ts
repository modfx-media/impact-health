import type { CollectionConfig } from "payload";
import { authenticated, authenticatedOrPublished } from "@/lib/cms/access";
import { normalizeCmsPath } from "@/lib/cms/urls";
import {
  draftVersions,
  importFields,
  previewAdmin,
  uniqueNullableText,
} from "@/collections/shared";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "_status", "updatedAt"],
    ...previewAdmin((data) =>
      typeof data.path === "string"
        ? data.path
        : typeof data.slug === "string"
          ? `/blog/${data.slug}`
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
        if (!data.path && data.slug) data.path = `/blog/${data.slug}`;
        if (typeof data.path === "string") data.path = normalizeCmsPath(data.path);
        return data;
      },
    ],
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "h1", type: "text" },
    uniqueNullableText("slug"),
    uniqueNullableText("path", { admin: { position: "sidebar" } }),
    { name: "excerpt", type: "textarea" },
    { name: "category", type: "text" },
    { name: "coverImageUrl", type: "text" },
    { name: "coverImageAlt", type: "text" },
    { name: "publishDate", type: "date" },
    { name: "dateModified", type: "date" },
    { name: "content", type: "richText" },
    { name: "bodyHtml", type: "textarea" },
    { name: "canonicalUrl", type: "text" },
    { name: "noIndex", type: "checkbox", defaultValue: false },
    { name: "noFollow", type: "checkbox", defaultValue: false },
    { name: "excludeFromSitemap", type: "checkbox", defaultValue: false },
    ...importFields,
  ],
};

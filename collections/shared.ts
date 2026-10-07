import type { Field } from "payload";
import { emptyToNull } from "@/lib/cms/empty-to-null";
import { livePreviewUrl, previewFromPath } from "@/lib/cms/preview";

export const uniqueNullableText = (
  name: string,
  overrides: Partial<Field> = {},
): Field =>
  ({
    name,
    type: "text",
    unique: true,
    index: true,
    hooks: {
      beforeValidate: [emptyToNull],
    },
    ...overrides,
  }) as Field;

export const importFields: Field[] = [
  uniqueNullableText("legacyId", { admin: { position: "sidebar" } }),
  {
    name: "sourceUrl",
    type: "text",
    index: true,
    admin: { position: "sidebar" },
    hooks: { beforeValidate: [emptyToNull] },
  },
  {
    name: "sourceUpdatedAt",
    type: "date",
    admin: { position: "sidebar", date: { pickerAppearance: "dayAndTime" } },
  },
];

export function previewAdmin(
  getPath: (data: Record<string, unknown>) => string | null,
) {
  return {
    preview: (data: Record<string, unknown>) => previewFromPath(getPath(data)),
    livePreview: {
      url: ({ data }: { data: Record<string, unknown> }) =>
        livePreviewUrl(getPath(data)),
    },
  };
}

export const draftVersions = {
  drafts: {
    schedulePublish: true,
  },
  maxPerDoc: 50,
} as const;

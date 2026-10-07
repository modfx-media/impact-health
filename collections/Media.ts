import type { CollectionConfig } from "payload";
import { anyone, authenticated } from "@/lib/cms/access";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
  upload: {
    staticDir: "media",
    mimeTypes: ["image/*", "application/pdf"],
  },
};

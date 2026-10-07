import type { GlobalConfig } from "payload";
import { authenticated, anyone } from "@/lib/cms/access";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    { name: "logoUrl", type: "text" },
    { name: "tagline", type: "textarea" },
    {
      name: "columns",
      type: "array",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "links",
          type: "array",
          fields: [
            { name: "label", type: "text" },
            { name: "href", type: "text" },
          ],
        },
      ],
    },
  ],
};

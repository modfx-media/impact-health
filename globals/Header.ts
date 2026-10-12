import type { GlobalConfig } from "payload";
import { authenticated, anyone } from "@/lib/cms/access";

const navLinkFields = [
  { name: "label", type: "text" as const },
  { name: "href", type: "text" as const },
  { name: "external", type: "checkbox" as const },
];

export const Header: GlobalConfig = {
  slug: "header",
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    { name: "logoUrl", type: "text" },
    { name: "logoAlt", type: "text" },
    {
      name: "nav",
      type: "array",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
        {
          name: "columns",
          type: "array",
          fields: [
            { name: "heading", type: "text" },
            { name: "headingHref", type: "text" },
            { name: "links", type: "array", fields: navLinkFields },
          ],
        },
      ],
    },
  ],
};

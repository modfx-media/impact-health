import type { GlobalConfig } from "payload";
import { authenticated, anyone } from "@/lib/cms/access";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    { name: "siteName", type: "text" },
    { name: "defaultTitle", type: "text" },
    { name: "defaultDescription", type: "textarea" },
    { name: "phoneDisplay", type: "text" },
    { name: "phoneHref", type: "text" },
    { name: "email", type: "text" },
    { name: "address", type: "textarea" },
    { name: "mapsUrl", type: "text" },
    {
      name: "social",
      type: "array",
      fields: [
        { name: "label", type: "text" },
        { name: "href", type: "text" },
      ],
    },
  ],
};

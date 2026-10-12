import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  access: {
    admin: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};

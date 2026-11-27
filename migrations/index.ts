import * as migration_20261127_030000_seo_meta_fields from "./20261127_030000_seo_meta_fields";

export const migrations = [
  {
    up: migration_20261127_030000_seo_meta_fields.up,
    down: migration_20261127_030000_seo_meta_fields.down,
    name: "20261127_030000_seo_meta_fields",
  },
];

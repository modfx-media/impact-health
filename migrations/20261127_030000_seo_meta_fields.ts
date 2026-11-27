import { sql } from "@payloadcms/db-vercel-postgres";
import type { MigrateDownArgs, MigrateUpArgs } from "@payloadcms/db-vercel-postgres";

/**
 * Additive SEO columns for the plugin `meta` group.
 * Uses IF NOT EXISTS / existence checks. Does not drop legacy columns.
 * Applied on the production build via `prodMigrations` — do not run this
 * against a hosted database by hand.
 */

// Neon's HTTP driver rejects multiple statements in one query.
async function executeStatements(
  db: MigrateUpArgs["db"],
  statements: readonly string[],
): Promise<void> {
  for (const statement of statements) {
    await db.execute(sql.raw(statement) as never);
  }
}

const tables = [
  { name: "pages", versions: "_pages_v" },
  { name: "posts", versions: "_posts_v" },
  { name: "staff", versions: "_staff_v" },
  { name: "area_pages", versions: "_area_pages_v" },
] as const;

const metaColumns = [
  ["meta_title", "varchar"],
  ["meta_description", "varchar"],
  ["meta_image_id", "integer"],
  ["meta_canonical_url", "varchar"],
  ["meta_no_index", "boolean DEFAULT false"],
  ["meta_no_follow", "boolean DEFAULT false"],
  ["meta_exclude_from_sitemap", "boolean DEFAULT false"],
] as const;

const newFlagColumns = [
  "meta_canonical_url",
  "meta_no_index",
  "meta_no_follow",
  "meta_exclude_from_sitemap",
] as const;

function addColumns(table: string, version: boolean): string[] {
  const prefix = version ? "version_" : "";
  return metaColumns.map(
    ([name, type]) =>
      `ALTER TABLE "${table}" ADD COLUMN IF NOT EXISTS "${prefix}${name}" ${type}`,
  );
}

function copyFlags(table: string, version: boolean): string {
  const prefix = version ? "version_" : "";
  const textCopies = [
    ["canonical_url", "meta_canonical_url"],
  ] as const;
  const boolCopies = [
    ["no_index", "meta_no_index"],
    ["no_follow", "meta_no_follow"],
    ["exclude_from_sitemap", "meta_exclude_from_sitemap"],
  ] as const;

  const textSql = textCopies
    .map(
      ([from, to]) => `
      IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = '${table}' AND column_name = '${prefix}${from}'
      ) AND EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = '${table}' AND column_name = '${prefix}${to}'
      ) THEN
        UPDATE "${table}"
        SET "${prefix}${to}" = "${prefix}${from}"
        WHERE ("${prefix}${to}" IS NULL OR "${prefix}${to}" = '')
          AND "${prefix}${from}" IS NOT NULL
          AND "${prefix}${from}" <> '';
      END IF;`,
    )
    .join("\n");

  const boolSql = boolCopies
    .map(
      ([from, to]) => `
      IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = '${table}' AND column_name = '${prefix}${from}'
      ) AND EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = '${table}' AND column_name = '${prefix}${to}'
      ) THEN
        UPDATE "${table}"
        SET "${prefix}${to}" = "${prefix}${from}"
        WHERE "${prefix}${from}" IS TRUE
          AND "${prefix}${to}" IS DISTINCT FROM TRUE;
      END IF;`,
    )
    .join("\n");

  return `DO $$\nBEGIN\n${textSql}\n${boolSql}\nEND $$;`;
}

export const upStatements = tables.flatMap(({ name, versions }) => [
  ...addColumns(name, false),
  ...addColumns(versions, true),
  copyFlags(name, false),
  copyFlags(versions, true),
]);

export const downStatements = tables.flatMap(({ name, versions }) =>
  newFlagColumns.flatMap((column) => [
    `ALTER TABLE "${name}" DROP COLUMN IF EXISTS "${column}"`,
    `ALTER TABLE "${versions}" DROP COLUMN IF EXISTS "version_${column}"`,
  ]),
);

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await executeStatements(db, upStatements);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await executeStatements(db, downStatements);
}

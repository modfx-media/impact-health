import fs from "node:fs";
import path from "node:path";
import { config as loadEnv } from "dotenv";
import { getPayload } from "payload";
import config from "../../payload.config";

loadEnv({ path: ".env.local" });
loadEnv();

type ExportDoc = {
  version: number;
  records: { collection: string; data: Record<string, unknown> }[];
  globals: { slug: string; data: Record<string, unknown> }[];
};

function skipMissingRefs(data: unknown): unknown {
  if (Array.isArray(data)) {
    return data
      .map(skipMissingRefs)
      .filter((item) => !(item && typeof item === "object" && "$ref" in (item as object)));
  }
  if (data && typeof data === "object") {
    const obj = data as Record<string, unknown>;
    if ("$ref" in obj) return null;
    const next: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      const cleaned = skipMissingRefs(value);
      if (cleaned !== null) next[key] = cleaned;
    }
    return next;
  }
  return data;
}

async function findExisting(
  payload: Awaited<ReturnType<typeof getPayload>>,
  collection: string,
  data: Record<string, unknown>,
) {
  if (typeof data.legacyId === "string" && data.legacyId) {
    const byLegacy = await payload.find({
      collection: collection as never,
      where: { legacyId: { equals: data.legacyId } },
      limit: 1,
      draft: true,
      overrideAccess: true,
    });
    if (byLegacy.docs[0]) return byLegacy.docs[0];
  }
  if (typeof data.sourceUrl === "string" && data.sourceUrl) {
    const byUrl = await payload.find({
      collection: collection as never,
      where: { sourceUrl: { equals: data.sourceUrl } },
      limit: 1,
      draft: true,
      overrideAccess: true,
    });
    if (byUrl.docs[0]) return byUrl.docs[0];
  }
  return null;
}

async function main() {
  if (process.argv.includes("--publish")) {
    console.error("Refusing to bulk-publish. Import is draft-only.");
    process.exit(1);
  }

  const apply = process.argv.includes("--apply");
  if (apply && process.env.CMS_IMPORT_APPLY !== "1") {
    console.error("Set CMS_IMPORT_APPLY=1 with --apply to write drafts.");
    process.exit(1);
  }

  const file =
    process.argv.filter((arg) => arg.endsWith(".json")).at(-1) ||
    "data/content-export.json";
  const exportPath = path.resolve(file);
  if (!fs.existsSync(exportPath)) {
    throw new Error(`Missing export file: ${exportPath}`);
  }

  const doc = JSON.parse(fs.readFileSync(exportPath, "utf8")) as ExportDoc;
  if (doc.version !== 1) throw new Error("Unsupported export version");

  if (!apply) {
    console.log(
      `Dry run: ${doc.records.length} records, ${doc.globals.length} globals. Re-run with CMS_IMPORT_APPLY=1 --apply`,
    );
    return;
  }

  if (!process.env.DATABASE_URL || !process.env.PAYLOAD_SECRET) {
    throw new Error("DATABASE_URL and PAYLOAD_SECRET are required to import");
  }

  const payload = await getPayload({ config });

  // FAQs / related targets before documents that point at them.
  const faqFirst = [...doc.records].sort((a, b) => {
    const aFaq = a.collection === "pages" && a.data.path === "/faq" ? 0 : 1;
    const bFaq = b.collection === "pages" && b.data.path === "/faq" ? 0 : 1;
    return aFaq - bFaq;
  });

  for (const record of faqFirst) {
    try {
      const data = skipMissingRefs({
        ...record.data,
        _status: "draft",
      }) as Record<string, unknown>;

      const existing = (await findExisting(
        payload,
        record.collection,
        data,
      )) as { id: string | number } | null;
      if (existing) {
        await payload.update({
          collection: record.collection as never,
          id: existing.id as string | number,
          data: data as never,
          draft: true,
          overrideAccess: true,
        });
        console.log("updated", record.collection, data.path || data.slug);
      } else {
        await payload.create({
          collection: record.collection as never,
          data: data as never,
          draft: true,
          overrideAccess: true,
        });
        console.log("created", record.collection, data.path || data.slug);
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message.split("\n")[0] : String(error);
      console.error(
        `[cms:import] skipped ${record.collection} ${record.data.path || record.data.slug}: ${message}`,
      );
    }
  }

  for (const global of doc.globals) {
    try {
      await payload.updateGlobal({
        slug: global.slug as never,
        data: skipMissingRefs(global.data) as never,
        overrideAccess: true,
      });
      console.log("global", global.slug);
    } catch (error) {
      const message =
        error instanceof Error ? error.message.split("\n")[0] : String(error);
      console.error(`[cms:import] skipped global ${global.slug}: ${message}`);
    }
  }

  await payload.destroy();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

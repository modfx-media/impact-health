import fs from "node:fs";
import path from "node:path";
import { getPayload } from "payload";
import config from "../../payload.config";

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
  const apply =
    process.env.CMS_IMPORT_APPLY === "1" || process.argv.includes("--apply");
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
      `Dry run: ${doc.records.length} records, ${doc.globals.length} globals. Re-run with --apply and CMS_IMPORT_APPLY=1`,
    );
    return;
  }

  if (!process.env.DATABASE_URL || !process.env.PAYLOAD_SECRET) {
    throw new Error("DATABASE_URL and PAYLOAD_SECRET are required to import");
  }

  const payload = await getPayload({ config });

  const faqFirst = [...doc.records].sort((a, b) => {
    const aFaq = a.collection === "pages" && a.data.path === "/faq" ? 0 : 1;
    const bFaq = b.collection === "pages" && b.data.path === "/faq" ? 0 : 1;
    return aFaq - bFaq;
  });

  for (const record of faqFirst) {
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
  }

  for (const global of doc.globals) {
    await payload.updateGlobal({
      slug: global.slug as never,
      data: skipMissingRefs(global.data) as never,
      overrideAccess: true,
    });
    console.log("global", global.slug);
  }

  await payload.destroy();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

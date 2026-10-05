import fs from "node:fs";
import path from "node:path";
import { blogPosts } from "../../lib/blog-posts";
import { staffMembers } from "../../lib/staff-data";
import { staticCmsPaths } from "../../lib/cms/url-manifest";
import { areaLocations } from "../../lib/areas-we-serve/locations";
import { areaTopics } from "../../lib/areas-we-serve/topics";

type ExportDoc = {
  version: number;
  records: { collection: string; data: { path?: string; sourceUrl?: string } }[];
};

function expectedPaths(): string[] {
  return [
    ...staticCmsPaths,
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...staffMembers.map((member) => `/staff/${member.slug}`),
    "/areas-we-serve",
    ...areaLocations.map((location) => `/areas-we-serve/${location.slug}`),
    ...areaLocations.flatMap((location) =>
      areaTopics.map((topic) => `/areas-we-serve/${location.slug}/${topic.slug}`),
    ),
  ];
}

const file = path.resolve(
  process.argv.filter((arg) => arg.endsWith(".json")).at(-1) ||
    "data/content-export.json",
);

if (!fs.existsSync(file)) {
  console.error(`Missing ${file}`);
  process.exit(1);
}

const doc = JSON.parse(fs.readFileSync(file, "utf8")) as ExportDoc;
const exported = new Set(
  doc.records
    .map((record) => record.data.path)
    .filter((value): value is string => Boolean(value)),
);

const missing = expectedPaths().filter((cmsPath) => !exported.has(cmsPath));
if (missing.length) {
  console.error(`Export missing ${missing.length} paths:`);
  for (const cmsPath of missing.slice(0, 50)) console.error(" ", cmsPath);
  if (missing.length > 50) console.error(`  …and ${missing.length - 50} more`);
  process.exit(1);
}

console.log(`Export covers ${exported.size} paths (manifest complete)`);

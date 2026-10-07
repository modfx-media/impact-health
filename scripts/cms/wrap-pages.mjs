/**
 * Wrap designed (site) pages with CMSRoute + cmsMetadata.
 * Run after moving pages into app/(site).
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("app/(site)");

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name === "page.tsx") acc.push(full);
  }
  return acc;
}

function toCmsPath(file) {
  const rel = file.replace(/\\/g, "/").split("app/(site)/")[1];
  if (!rel) return null;
  const dir = path.posix.dirname(rel);
  if (dir.includes("[")) return null;
  if (dir === ".") return "/";
  return `/${dir}`;
}

const IMPORTS = `import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
`;

for (const file of walk(root)) {
  const cmsPath = toCmsPath(file);
  if (!cmsPath) continue;

  let src = fs.readFileSync(file, "utf8");
  if (src.includes("CmsWrappedPage")) continue;

  if (!src.includes('from "@/components/cms/CMSRoute"')) {
    src = IMPORTS + src;
  }

  const defaultMatch = src.match(
    /export default (async )?function ([A-Za-z0-9_]+)/,
  );
  if (!defaultMatch) {
    console.warn("skip no default", file);
    continue;
  }
  const inner = defaultMatch[2];
  src = src.replace(
    /export default (async )?function ([A-Za-z0-9_]+)/,
    "async function $2",
  );

  if (/export const metadata/.test(src) && !src.includes("fallbackMetadata")) {
    src = src.replace(
      /export const metadata(: Metadata)? =/,
      "const fallbackMetadata$1 =",
    );
    const metaFn = `
export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata(${JSON.stringify(cmsPath)}, fallbackMetadata);
}
`;
    src = src.replace(
      /const fallbackMetadata[\s\S]*?};\n/,
      (m) => `${m}${metaFn}`,
    );
  }

  src += `
export default async function CmsWrappedPage() {
  return (
    <CMSRoute path=${JSON.stringify(cmsPath)}>
      <${inner} />
    </CMSRoute>
  );
}
`;

  fs.writeFileSync(file, src);
  console.log("wrapped", cmsPath);
}

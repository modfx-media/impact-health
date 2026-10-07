import fs from "node:fs";
import path from "node:path";

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f, acc);
    else if (e.name === "page.tsx") acc.push(f);
  }
  return acc;
}

for (const file of walk("app/(site)")) {
  let src = fs.readFileSync(file, "utf8");
  if (!src.includes("fallbackMetadata")) continue;
  if (/export async function generateMetadata/.test(src)) continue;
  const m = src.match(/<CMSRoute path="([^"]+)">/);
  if (!m) {
    console.log("no path", file);
    continue;
  }
  const cmsPath = m[1];
  const next = src.replace(
    /(const fallbackMetadata[\s\S]*?\n};\r?\n)/,
    (block) =>
      `${block}\nexport async function generateMetadata(): Promise<Metadata> {\n  return cmsMetadata(${JSON.stringify(cmsPath)}, fallbackMetadata);\n}\n`,
  );
  if (next === src) {
    console.log("no replace", file);
    continue;
  }
  fs.writeFileSync(file, next);
  console.log("meta", cmsPath);
}

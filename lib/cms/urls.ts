import { SITE_URL } from "@/lib/site";

const LOCALHOST = /localhost|127\.0\.0\.1/i;

function stripSlash(value: string): string {
  return value.replace(/\/$/, "");
}

/** Public https origin on Vercel; localhost is never copied into production. */
export function getServerURL(): string {
  const server = process.env.NEXT_PUBLIC_SERVER_URL;
  if (server && !LOCALHOST.test(server)) return stripSlash(server);

  const site = process.env.NEXT_PUBLIC_SITE_URL;
  if (site && !LOCALHOST.test(site)) return stripSlash(site);

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  return stripSlash(SITE_URL);
}

export function corsOrigins(): string[] {
  const origins = new Set<string>();
  const add = (value?: string | null) => {
    if (!value) return;
    origins.add(stripSlash(value.startsWith("http") ? value : `https://${value}`));
  };

  add("https://impacthealthoh.com");
  add("https://www.impacthealthoh.com");
  add(getServerURL());
  add(process.env.NEXT_PUBLIC_SITE_URL);
  add(process.env.NEXT_PUBLIC_SERVER_URL);
  if (process.env.VERCEL_URL) add(`https://${process.env.VERCEL_URL}`);
  if (process.env.NODE_ENV !== "production") {
    add("http://localhost:3000");
  }
  return [...origins];
}

/** CMS unique `path`: starts with `/`, no trailing slash except home `/`. */
export function normalizeCmsPath(input: string | null | undefined): string | null {
  if (input == null) return null;
  const trimmed = String(input).trim();
  if (!trimmed || trimmed === "null" || trimmed === "undefined") return null;
  if (trimmed.includes("null") || trimmed.includes("undefined")) return null;

  const value = trimmed.split("?")[0]?.split("#")[0] ?? "";
  if (!value) return null;
  if (!value.startsWith("/")) return null;
  if (value === "/") return "/";
  return value.replace(/\/+$/, "");
}

/** Public URL path with trailing slash (site `trailingSlash: true`). */
export function publicPath(cmsPath: string): string {
  if (cmsPath === "/") return "/";
  return cmsPath.endsWith("/") ? cmsPath : `${cmsPath}/`;
}

export function absoluteUrl(cmsPath: string): string {
  return `${getServerURL()}${publicPath(cmsPath)}`;
}

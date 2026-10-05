import { SITE_URL } from "@/lib/site";

export function getServerURL(): string {
  const server = process.env.NEXT_PUBLIC_SERVER_URL?.replace(/\/$/, "");
  if (server && !/localhost|127\.0\.0\.1/i.test(server)) return server;
  return SITE_URL.replace(/\/$/, "");
}

export function corsOrigins(): string[] {
  const origins = new Set<string>([
    "https://impacthealthoh.com",
    "https://www.impacthealthoh.com",
    getServerURL(),
  ]);
  if (process.env.VERCEL_URL) {
    origins.add(`https://${process.env.VERCEL_URL}`);
  }
  if (process.env.NODE_ENV !== "production") {
    origins.add("http://localhost:3000");
  }
  return [...origins];
}

/** CMS unique `path`: starts with `/`, no trailing slash except home `/`. */
export function normalizeCmsPath(input: string | null | undefined): string | null {
  if (!input || input.includes("null") || input.includes("undefined")) return null;
  const trimmed = input.trim();
  if (!trimmed.startsWith("/")) return null;
  if (trimmed === "/") return "/";
  return trimmed.replace(/\/+$/, "");
}

/** Public URL path with trailing slash (site `trailingSlash: true`). */
export function publicPath(cmsPath: string): string {
  if (cmsPath === "/") return "/";
  return cmsPath.endsWith("/") ? cmsPath : `${cmsPath}/`;
}

export function absoluteUrl(cmsPath: string): string {
  return `${getServerURL()}${publicPath(cmsPath)}`;
}

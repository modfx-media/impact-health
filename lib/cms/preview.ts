import { getServerURL, normalizeCmsPath, publicPath } from "@/lib/cms/urls";

/**
 * Admin / live preview URL. Returns null when path is missing so Payload
 * never opens `/null` or `/blog/null`.
 */
export function previewFromPath(
  path: string | null | undefined,
): string | null {
  const cmsPath = normalizeCmsPath(path);
  if (!cmsPath) return null;
  const secret = process.env.PREVIEW_SECRET;
  if (!secret) return null;
  const dest = publicPath(cmsPath);
  const origin = getServerURL();
  return `${origin}/next/preview/?path=${encodeURIComponent(dest)}&secret=${encodeURIComponent(secret)}`;
}

export function livePreviewUrl(path: string | null | undefined): string | null {
  return previewFromPath(path);
}

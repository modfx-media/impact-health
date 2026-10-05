import { normalizeCmsPath, publicPath } from "@/lib/cms/urls";

export function previewFromPath(
  path: string | null | undefined,
): string | null {
  const cmsPath = normalizeCmsPath(path);
  if (!cmsPath) return null;
  const secret = process.env.PREVIEW_SECRET;
  if (!secret) return null;
  const dest = publicPath(cmsPath);
  return `/next/preview/?path=${encodeURIComponent(dest)}&secret=${encodeURIComponent(secret)}`;
}

export function livePreviewUrl(path: string | null | undefined): string | null {
  return previewFromPath(path);
}

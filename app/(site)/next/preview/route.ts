import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { normalizeCmsPath, publicPath } from "@/lib/cms/urls";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const rawPath = request.nextUrl.searchParams.get("path");

  if (!process.env.PREVIEW_SECRET || secret !== process.env.PREVIEW_SECRET) {
    return new Response("Invalid preview secret", { status: 401 });
  }

  const cmsPath = normalizeCmsPath(rawPath);
  if (!cmsPath) {
    return new Response("Invalid path", { status: 400 });
  }

  const draft = await draftMode();
  draft.enable();
  redirect(publicPath(cmsPath));
}

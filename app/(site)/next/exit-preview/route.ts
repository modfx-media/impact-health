import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { normalizeCmsPath, publicPath } from "@/lib/cms/urls";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const draft = await draftMode();
  draft.disable();

  const { searchParams } = new URL(request.url);
  const cmsPath = normalizeCmsPath(searchParams.get("path") || "/");
  redirect(cmsPath ? publicPath(cmsPath) : "/");
}

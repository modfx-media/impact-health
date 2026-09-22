import type { ReactNode } from "react";
import { getDisplayedGoogleReviews } from "@/lib/google-reviews";

/**
 * Async server boundary for the review payload. Motion and carousels stay in
 * the client children. Renders nothing when there are no 5-star reviews.
 */
export async function GoogleReviews({
  children,
}: {
  children: (
    payload: Awaited<ReturnType<typeof getDisplayedGoogleReviews>>,
  ) => ReactNode;
}) {
  const payload = await getDisplayedGoogleReviews();
  if (payload.reviews.length === 0) return null;
  return children(payload);
}

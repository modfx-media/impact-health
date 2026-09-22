import { cache } from "react";
import {
  fiveStarReviews,
  googleReviewsMeta,
  isFiveStarReview,
  type GoogleReview,
  type GoogleReviewsMeta,
} from "./reviews";

const REVIEWS_REVALIDATE_SECONDS = 60 * 60 * 24;
const PLACES_FIELD_MASK = "id,rating,userRatingCount,googleMapsUri,reviews";
const LEGACY_DETAILS_URL =
  "https://maps.googleapis.com/maps/api/place/details/json";

export type GoogleReviewsPayload = {
  reviews: GoogleReview[];
  meta: GoogleReviewsMeta;
};

type PlacesReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  publishTime?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string };
};

type PlacesDetailsResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
  error?: { message?: string; status?: string };
};

type LegacyReview = {
  rating?: number;
  text?: string;
  author_name?: string;
  relative_time_description?: string;
  /** Unix seconds. */
  time?: number;
};

type LegacyDetailsResponse = {
  status?: string;
  error_message?: string;
  result?: { reviews?: LegacyReview[] };
};

type ReviewSchemaFragment = {
  aggregateRating: {
    "@type": "AggregateRating";
    ratingValue: number;
    reviewCount: number;
    bestRating: string;
  };
  review?: Array<{
    "@type": "Review";
    author: { "@type": "Person"; name: string };
    reviewRating: {
      "@type": "Rating";
      ratingValue: string;
      bestRating: string;
    };
    reviewBody: string;
  }>;
};

/**
 * Schema.org fragment to merge into an Organization node. `review[]` carries
 * only the 5-star quotes actually rendered on the page, and is omitted when
 * there are none.
 */
export function googleReviewSchema({
  reviews,
  meta,
}: GoogleReviewsPayload): ReviewSchemaFragment {
  const visible = reviews.filter(isFiveStarReview);

  const fragment: ReviewSchemaFragment = {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: meta.rating,
      reviewCount: meta.reviewCount,
      bestRating: "5",
    },
  };

  if (visible.length > 0) {
    fragment.review = visible.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: review.quote,
    }));
  }

  return fragment;
}

function fallbackPayload(): GoogleReviewsPayload {
  return {
    reviews: fiveStarReviews,
    meta: { ...googleReviewsMeta },
  };
}

/** Places echoes a per-request `g_mp` tracking blob we should not link users to. */
function cleanMapsUrl(url: string | undefined): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    parsed.searchParams.delete("g_mp");
    return parsed.toString();
  } catch {
    return url;
  }
}

/** Same review can surface in both sorts — key on author plus the opening text. */
function reviewKey(review: GoogleReview): string {
  return `${review.name.toLowerCase()}::${review.quote.slice(0, 80).toLowerCase()}`;
}

/** Undated reviews sort last rather than jumping to the front as epoch 0. */
function publishedTime(review: GoogleReview): number {
  if (!review.publishedAt) return Number.NEGATIVE_INFINITY;
  const parsed = Date.parse(review.publishedAt);
  return Number.isNaN(parsed) ? Number.NEGATIVE_INFINITY : parsed;
}

function mergeReviews(...groups: GoogleReview[][]): GoogleReview[] {
  const seen = new Set<string>();
  const merged: GoogleReview[] = [];

  for (const group of groups) {
    for (const review of group) {
      const key = reviewKey(review);
      if (seen.has(key)) continue;
      seen.add(key);
      merged.push(review);
    }
  }

  return merged.sort((a, b) => publishedTime(b) - publishedTime(a));
}

/**
 * Place Details returns at most 5 reviews per ranking, so the legacy endpoint's
 * `reviews_sort=newest` is queried for a second, different set of 5. Same hard
 * filter applies; this is still not the full corpus of 5-star reviews.
 */
async function fetchNewestReviews(
  apiKey: string,
  placeId: string,
): Promise<GoogleReview[]> {
  try {
    const url = new URL(LEGACY_DETAILS_URL);
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "reviews");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("reviews_no_translations", "true");
    url.searchParams.set("key", apiKey);

    const response = await fetch(url, {
      next: {
        revalidate: REVIEWS_REVALIDATE_SECONDS,
        tags: ["google-reviews"],
      },
    });

    const data = (await response.json()) as LegacyDetailsResponse;

    if (!response.ok || data.status !== "OK") {
      console.error(
        "Google newest-reviews request failed:",
        data.error_message ?? data.status ?? response.statusText,
      );
      return [];
    }

    return (data.result?.reviews ?? [])
      .map((review): GoogleReview | null => {
        const quote = (review.text ?? "").trim();
        const name = review.author_name?.trim() ?? "";
        if (review.rating !== 5 || !quote || !name) return null;
        return {
          quote,
          name,
          rating: 5,
          relativeTime: review.relative_time_description,
          publishedAt: review.time
            ? new Date(review.time * 1000).toISOString()
            : undefined,
        };
      })
      .filter((review): review is GoogleReview => review !== null)
      .filter(isFiveStarReview);
  } catch (error) {
    console.error("Google newest-reviews fetch error:", error);
    return [];
  }
}

function mapPlaceReview(review: PlacesReview): GoogleReview | null {
  const quote = (review.text?.text ?? review.originalText?.text ?? "").trim();
  const name = review.authorAttribution?.displayName?.trim() ?? "";
  const rating = review.rating ?? 0;

  // Exact 5 only. Drop 4, 4.5, empty text, and nameless authors here.
  if (rating !== 5 || !quote || !name) return null;

  return {
    quote,
    name,
    rating: 5,
    relativeTime: review.relativePublishTimeDescription,
    publishedAt: review.publishTime,
  };
}

/**
 * Places API (New) for the most-relevant set and the listing's real totals,
 * merged with the legacy endpoint's newest set. Each ranking caps at 5, so
 * this yields up to 10 candidates before the 5-star-with-text filter. It is
 * still not every 5-star review — that needs the Business Profile API.
 */
export const getDisplayedGoogleReviews = cache(
  async (): Promise<GoogleReviewsPayload> => {
    const apiKey =
      process.env.GOOGLE_PLACES_API_KEY?.trim() ||
      process.env.GOOGLE_API_KEY?.trim();
    const placeId =
      process.env.GOOGLE_PLACE_ID?.trim() || googleReviewsMeta.placeId;

    if (!apiKey || placeId.startsWith("REPLACE_")) return fallbackPayload();

    try {
      const [response, newestReviews] = await Promise.all([
        fetch(
          `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
          {
            headers: {
              "X-Goog-Api-Key": apiKey,
              "X-Goog-FieldMask": PLACES_FIELD_MASK,
            },
            next: {
              revalidate: REVIEWS_REVALIDATE_SECONDS,
              tags: ["google-reviews"],
            },
          },
        ),
        fetchNewestReviews(apiKey, placeId),
      ]);

      const data = (await response.json()) as PlacesDetailsResponse;

      if (!response.ok || data.error) {
        console.error(
          "Google Places reviews request failed:",
          data.error?.message ?? response.statusText,
        );
        return fallbackPayload();
      }

      const relevantReviews = (data.reviews ?? [])
        .map(mapPlaceReview)
        .filter((review): review is GoogleReview => review !== null)
        .filter(isFiveStarReview);

      const liveReviews = mergeReviews(relevantReviews, newestReviews);

      if (liveReviews.length === 0) return fallbackPayload();

      return {
        reviews: liveReviews,
        meta: {
          rating: data.rating ?? googleReviewsMeta.rating,
          reviewCount: data.userRatingCount ?? googleReviewsMeta.reviewCount,
          fiveStarCount: liveReviews.length,
          placeId,
          reviewsUrl:
            cleanMapsUrl(data.googleMapsUri) ?? googleReviewsMeta.reviewsUrl,
        },
      };
    } catch (error) {
      console.error("Google Places reviews fetch error:", error);
      return fallbackPayload();
    }
  },
);

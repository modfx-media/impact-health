import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";
import { getDisplayedGoogleReviews } from "@/lib/google-reviews";
import type { GoogleReview, GoogleReviewsMeta } from "@/lib/reviews";

function GoogleG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function Stars({ label }: { label: string }) {
  return (
    <div className="flex gap-1 text-amber-400" aria-label={label}>
      {Array.from({ length: 5 }).map((_, s) => (
        <svg key={s} width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export interface TestimonialsViewProps {
  /** Already filtered to 5-star reviews with text and a name. */
  items: GoogleReview[];
  meta: GoogleReviewsMeta;
}

/**
 * Presentational half. `items` must already be 5-star only — this renders five
 * stars on every card and does not re-check the rating.
 */
export function TestimonialsView({ items, meta }: TestimonialsViewProps) {
  if (items.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[#f4f8fb] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Patient Stories"
              title="What patients share about Impact Health & Wellness"
              align="left"
            />
            <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-brand-navy/10 bg-white px-4 py-2 shadow-sm">
              <GoogleG className="h-5 w-5 shrink-0" />
              <Stars
                label={`Rated ${meta.rating} out of 5 on Google from ${meta.reviewCount} reviews`}
              />
              <span className="text-sm font-semibold text-brand-navy">
                {meta.rating} from {meta.reviewCount} Google reviews
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={meta.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal transition-colors hover:text-brand-navy"
            >
              View all Google reviews
              <span aria-hidden="true">&rarr;</span>
            </a>
          </Reveal>
        </div>

        <div className="no-scrollbar mt-10 -mx-6 flex snap-x snap-proximity gap-5 overflow-x-auto px-6 pb-4 sm:mx-0 sm:px-0">
          {items.map((review, i) => (
            <Reveal
              key={`${review.name}-${i}`}
              delay={(i + 1) * 0.06}
              className="w-[85%] shrink-0 snap-start sm:w-[320px]"
            >
              <figure className="flex h-full flex-col rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <Stars label="5 out of 5 stars" />
                  <GoogleG className="h-5 w-5 shrink-0" />
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">
                  <span className="line-clamp-[10]">{review.quote}</span>
                </blockquote>
                <figcaption className="mt-5 border-t border-zinc-100 pt-4">
                  <div className="text-sm font-semibold text-brand-navy">
                    {review.name}
                  </div>
                  <div className="text-xs text-zinc-400">
                    {review.relativeTime
                      ? `Google review · ${review.relativeTime}`
                      : "Google review"}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Self-fetching server wrapper so every existing `<Testimonials />` call site
 * gets live Google data. `cache()` dedupes this to one request per render.
 */
export async function Testimonials() {
  const { reviews, meta } = await getDisplayedGoogleReviews();
  return <TestimonialsView items={reviews} meta={meta} />;
}

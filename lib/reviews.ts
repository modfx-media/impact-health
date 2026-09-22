/**
 * Google review types + offline fallback for Impact Health & Wellness.
 *
 * Every quote below was copied verbatim from a real 5-star Google review on
 * this business's listing (Place ID ChIJ5-6sOzf1OIgRDhyieRQ1lEI). Never add a
 * quote that did not come from Google, and never edit the wording of one.
 */

export const googleReviewsMeta = {
  /** Google's overall rating across every star, not the card count. */
  rating: 4.9,
  /** Google's total number of ratings, all stars. */
  reviewCount: 140,
  fiveStarCount: 8,
  placeId: "ChIJ5-6sOzf1OIgRDhyieRQ1lEI",
  reviewsUrl: "https://maps.google.com/?cid=4797517865112706062",
} as const;

export type GoogleReview = {
  quote: string;
  name: string;
  rating: number;
  relativeTime?: string;
  /** ISO timestamp used to order newest first. */
  publishedAt?: string;
};

export type GoogleReviewsMeta = {
  rating: number;
  reviewCount: number;
  fiveStarCount: number;
  placeId: string;
  reviewsUrl: string;
};

/** Newest first, matching the order the live fetch renders in. */
export const googleReviews: GoogleReview[] = [
  {
    quote:
      "I have had a wild ride of medical issues the past two years and this place has helped me through it. They listen and find real solutions to manage pain and physical limitations. I have appreciated the time and effort they have put in to helping me improve my situation.",
    name: "Dawn Kelley",
    rating: 5,
    relativeTime: "a week ago",
    publishedAt: "2026-09-10T00:19:01Z",
  },
  {
    quote:
      "I have had neuropathy problems for the last two years.  My primary physician referred me to Impact Health and Wellness.  The Impact Crew started me on Laser Treatments.  They have helped with my sleep and skin discoloration.  They recommended compression socks and new shoe inserts.  The crew at Impact have helped me immensely.  Thank you Impact Health and Wellness.",
    name: "CHARLES STOUT",
    rating: 5,
    relativeTime: "3 weeks ago",
    publishedAt: "2026-08-26T16:04:16Z",
  },
  {
    quote: "Always exceptional service on each visit",
    name: "Anita Adams",
    rating: 5,
    relativeTime: "a month ago",
    publishedAt: "2026-07-29T15:32:12Z",
  },
  {
    quote:
      "I couldn’t be happier with Dr. Wilcox, Gerald and Caroline!   I had a total knee replacement on 6/3 and am already getting around like a champ.  Kind, professional and responsive!   10 stars!",
    name: "Janice Reid",
    rating: 5,
    relativeTime: "3 months ago",
    publishedAt: "2026-06-18T16:33:24Z",
  },
  {
    quote:
      "This place is so amazing!!! Nick really knows what he is doing. His memory is crazy, he remembers details about every patient like a super computer. I came in with knee and back pain and he was able to identify exactly what was wrong, and things I had no idea about like having and extra long spine and and extra rib bones. We have a plan on how to fix this, and I already feel so much better after a few sessions. Can’t recommend enough!",
    name: "Emelia Douglas",
    rating: 5,
    relativeTime: "5 months ago",
    publishedAt: "2026-04-08T15:21:29Z",
  },
  {
    quote:
      "Excellent staff, Excellent care!!! I have been seeing chiropractors for many years on and off, Dr. Nick is by far one of the best I have ever been too. After a few visits and getting to know the staff it's like a family atmosphere.  Highly recommend!",
    name: "Greg West",
    rating: 5,
    relativeTime: "7 months ago",
    publishedAt: "2026-02-05T22:49:20Z",
  },
  {
    quote:
      "Dr. Nick Southworth has provided exceptional medical care in addressing back issues including radicular pain, helping to increase range of motion and reduction of discomfort that affected quality of sleep. He is highly communicative and always upbeat in encouraging lifestyle changes to support the adjustment techniques he uses effectively to reduce pain. I recommend him unequivocally and also compliment Kim who is a blessing every time I enter the office. Efficient, personable and clearly cares about each patient!",
    name: "Fredric Brown",
    rating: 5,
    relativeTime: "7 months ago",
    publishedAt: "2026-02-04T18:57:47Z",
  },
  {
    quote:
      "I’ve been going to chiropractors on and off for years, so I understand how adjustments work. I felt the office was very nice, well organized and clean. Had top of the line equipment and treatment options. Everyone I came into contact with was friendly and helpful. Dr. Nick was very knowledgeable, efficient and truly cared about how I was feeling and how he could help. I noticed his interactions were the same across every patient he made contact with was treated the same. Very busy office, but well run practice and I never felt rushed or like a number. Based upon my visit and experience, I will be returning for more treatments and would recommend to family and friends! So glad I found this practice!",
    name: "Toni Durr",
    rating: 5,
    relativeTime: "a year ago",
    publishedAt: "2025-08-29T18:51:58Z",
  },
];

/** The only acceptance test for a card or a JSON-LD review. */
export function isFiveStarReview(review: GoogleReview): boolean {
  return (
    review.rating === 5 &&
    review.quote.trim().length > 0 &&
    review.name.trim().length > 0
  );
}

export const fiveStarReviews = googleReviews.filter(isFiveStarReview);

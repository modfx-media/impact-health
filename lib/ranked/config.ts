export const SITE_ORIGIN = (
  process.env.SITE_ORIGIN ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://impacthealthoh.com"
).replace(/\/$/, "");

export const DEFAULT_COVER = "/images/blog/default-cover.jpg";

export const DEFAULT_COVER_ALT = "Impact Health & Wellness blog article cover";

export const DEFAULT_CTA = {
  label: "Book an appointment",
  href: "/contact-us/",
};

/** Cover prompt for Impact Health & Wellness. No patient faces / medical gore. */
export function coverPrompt(title: string): string {
  return [
    "Editorial photograph, 16:9 landscape, premium wellness clinic photography.",
    `Theme inspired by: ${title.slice(0, 120)}.`,
    "Match the article subject: chiropractic, physical therapy, joint care, neuropathy, migraine, or regenerative wellness as implied by the title.",
    "Real clinic scene — treatment table, clinician hands, spine or joint model, stretching, or a calm exam room.",
    "Calm modern medical wellness setting, soft natural light, clean and reassuring.",
    "Cinematic lighting, sharp, no grain, no watermark.",
    "No text, no letters, no logos, no captions, no readable signage.",
    "No robots, no laptops as the subject, no futuristic AI imagery, no office meetings.",
    "No patient faces, no medical procedures, no gore.",
  ].join(" ");
}

/**
 * Slugs that already have a committed file at /images/blog/covers/{slug}.png
 * List only. Do not fs.stat public/ — that packs images into the cron bundle.
 */
export const COMMITTED_COVER_SLUGS: readonly string[] = [
  "regenerative-medicine-for-chronic-pain-in-westerville-candidates-and-timeline",
];

export function isRemoteImageSrc(src: string): boolean {
  return /^https?:\/\//i.test(src);
}

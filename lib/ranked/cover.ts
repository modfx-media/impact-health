import { BlobNotFoundError, head, put } from "@vercel/blob";
import { COMMITTED_COVER_SLUGS, coverPrompt } from "./config";

/** Clinic / wellness photography only. No robots, offices, laptops, or AI art. */
const CLINIC = [
  "photo-1576091160399-112ba8d25d1d",
  "photo-1576091160550-2173dba999ef",
  "photo-1559839734-2b71ea197ec2",
  "photo-1612349317150-e413f6a5b16d",
  "photo-1622253692010-333f2da6031d",
  "photo-1582750433449-648ed127bb54",
  "photo-1551076805-e1869033e561",
  "photo-1666214280557-f1b5022eb634",
  "photo-1519494026892-80bbd2d6fd0d",
  "photo-1538108149393-fbbd81895907",
  "photo-1584982751601-97dcc096659c",
  "photo-1559757148-5c350d0d3c56",
  "photo-1559757175-0eb30cd8c063",
  "photo-1579684453423-f84349ef60b0",
] as const;

const BACK_SPINE = [
  "photo-1519824145371-296894a0daa9",
  "photo-1544161515-4ab6ce6db874",
  "photo-1571019614242-c5c5dee9f50b",
  "photo-1599901860904-17e6ed7083a0",
  "photo-1612277795421-9bc7706a4a34",
] as const;

const NECK = [
  "photo-1515377905703-c4788e51af15",
  "photo-1540555700478-4be289fbecef",
  "photo-1544161515-4ab6ce6db874",
] as const;

const NERVE = [
  "photo-1576091160399-112ba8d25d1d",
  "photo-1584982751601-97dcc096659c",
  "photo-1576091160550-2173dba999ef",
  "photo-1559757148-5c350d0d3c56",
] as const;

const MIGRAINE = [
  "photo-1506126613408-eca07ce68773",
  "photo-1499209974431-9dddcece7f88",
  "photo-1544367567-0f2fcb009e0b",
  "photo-1515377905703-c4788e51af15",
  "photo-1540555700478-4be289fbecef",
] as const;

const JOINT = [
  "photo-1571019613454-1cb2f99b2d8b",
  "photo-1574680096145-d05b474e2155",
  "photo-1517836357463-d25dfeac3438",
  "photo-1534438327276-14e5300c3a48",
] as const;

const SPORTS = [
  "photo-1476480862126-209bfaa8edc8",
  "photo-1571019613454-1cb2f99b2d8b",
  "photo-1517836357463-d25dfeac3438",
  "photo-1534438327276-14e5300c3a48",
  "photo-1574680096145-d05b474e2155",
] as const;

const REGEN = [
  "photo-1576678927484-cc907957088c",
  "photo-1582719478250-c89cae4dc85b",
  "photo-1579684385127-1ef15d508118",
  "photo-1581595220892-b0739db3ba8c",
] as const;

const PHYSIO = [
  "photo-1571019614242-c5c5dee9f50b",
  "photo-1599901860904-17e6ed7083a0",
  "photo-1571019613454-1cb2f99b2d8b",
  "photo-1519824145371-296894a0daa9",
] as const;

const WELLNESS = [
  "photo-1544367567-0f2fcb009e0b",
  "photo-1506126613408-eca07ce68773",
  "photo-1540555700478-4be289fbecef",
  "photo-1570172619644-dfd03ed5d881",
  "photo-1552693673-1bf958298935",
  "photo-1515377905703-c4788e51af15",
] as const;

const TOPIC_POOLS: { test: RegExp; photos: readonly string[] }[] = [
  { test: /neuropath|tingl|numb|\bnerve\b/i, photos: NERVE },
  { test: /migraine|headache/i, photos: MIGRAINE },
  { test: /sciatica|spinal|decompression|back pain|\bspine\b/i, photos: BACK_SPINE },
  { test: /\bneck\b/i, photos: NECK },
  { test: /\bhip\b/i, photos: JOINT },
  { test: /\bknee\b/i, photos: JOINT },
  { test: /arthritis|joint pain|joint relief/i, photos: JOINT },
  { test: /sports injur|shockwave|comeback|summer sports/i, photos: SPORTS },
  { test: /regenerative|stem cell/i, photos: REGEN },
  { test: /physical therapy|physiotherap/i, photos: PHYSIO },
  { test: /chiropract/i, photos: BACK_SPINE },
];

const ALL_CLINIC_PHOTOS = [
  ...new Set([
    ...CLINIC,
    ...BACK_SPINE,
    ...NECK,
    ...NERVE,
    ...MIGRAINE,
    ...JOINT,
    ...SPORTS,
    ...REGEN,
    ...PHYSIO,
    ...WELLNESS,
  ]),
];

function topicPhotos(text: string): readonly string[] {
  for (const row of TOPIC_POOLS) {
    if (row.test.test(text)) return row.photos;
  }
  return WELLNESS;
}

function coverPngPath(contentId: string): string {
  return `blog-covers/${contentId}.png`;
}

function coverJpgPath(contentId: string): string {
  return `blog-covers/${contentId}.jpg`;
}

function committedCoverUrl(slug?: string): string | null {
  if (!slug) return null;
  return COMMITTED_COVER_SLUGS.includes(slug)
    ? `/images/blog/covers/${slug}.png`
    : null;
}

function hashSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  return hash;
}

function unsplashUrl(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?w=1200&q=80&fit=crop`;
}

function pickUnused(photos: readonly string[], reserved: Set<string>): string | null {
  for (const id of photos) {
    const url = unsplashUrl(id);
    if (!reserved.has(url)) return url;
  }
  return null;
}

function pickHashed(photos: readonly string[], slug: string, reserved: Set<string>): string | null {
  const start = hashSlug(slug) % photos.length;
  for (let i = 0; i < photos.length; i++) {
    const url = unsplashUrl(photos[(start + i) % photos.length]);
    if (!reserved.has(url)) return url;
  }
  return null;
}

export function uniqueWebCoverUrl(
  slug: string,
  reserved: Set<string> = new Set(),
  title = "",
): string {
  const text = `${title} ${slug}`;
  return (
    pickUnused(topicPhotos(text), reserved) ||
    pickHashed(ALL_CLINIC_PHOTOS, slug, reserved) ||
    unsplashUrl(ALL_CLINIC_PHOTOS[hashSlug(slug) % ALL_CLINIC_PHOTOS.length])
  );
}

function imageModels(): string[] {
  const preferred = process.env.OPENAI_IMAGE_MODEL?.trim();
  const models = [preferred, "gpt-image-2", "gpt-image-1"].filter(
    (m): m is string => Boolean(m),
  );
  return [...new Set(models)];
}

async function existingBlobUrl(contentId: string): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null;

  for (const pathname of [coverPngPath(contentId), coverJpgPath(contentId)]) {
    try {
      const meta = await head(pathname);
      if (meta.url) return meta.url;
    } catch (err) {
      if (!(err instanceof BlobNotFoundError)) return null;
    }
  }
  return null;
}

async function persistBuffer(
  pathname: string,
  bytes: Buffer,
  contentType: string,
): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL) return null;

  const blob = await put(pathname, bytes, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType,
  });
  return blob.url;
}

async function generatePng(title: string): Promise<Buffer | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const prompt = coverPrompt(title);
  let lastError = "";

  for (const model of imageModels()) {
    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        prompt,
        size: "1536x1024",
        quality: "medium",
        n: 1,
      }),
    });

    const text = await res.text();
    if (!res.ok) {
      lastError = `${model} ${res.status}: ${text.slice(0, 240)}`;
      continue;
    }

    const json = JSON.parse(text) as {
      data?: Array<{ url?: string; b64_json?: string }>;
    };
    const row = json.data?.[0];
    if (row?.b64_json) return Buffer.from(row.b64_json, "base64");
    if (row?.url) {
      const img = await fetch(row.url);
      if (img.ok) return Buffer.from(await img.arrayBuffer());
    }
  }

  console.error(`[ranked] OpenAI cover generation exhausted: ${lastError}`);
  return null;
}

export async function getRankedCoverImage(input: {
  contentId: string;
  title: string;
  generate: boolean;
  slug?: string;
  reservedUrls?: Set<string>;
}): Promise<string> {
  const slug = input.slug ?? input.contentId;
  const reserved = input.reservedUrls ?? new Set<string>();

  const committed = committedCoverUrl(input.slug);
  if (committed) {
    reserved.add(committed);
    return committed;
  }

  const cached = await existingBlobUrl(input.contentId);
  if (cached) {
    reserved.add(cached);
    return cached;
  }

  const webUrl = uniqueWebCoverUrl(slug, reserved, input.title);
  if (!input.generate) {
    reserved.add(webUrl);
    return webUrl;
  }

  try {
    const png = await generatePng(input.title);
    if (png) {
      const url = await persistBuffer(
        coverPngPath(input.contentId),
        png,
        "image/png",
      );
      if (url) {
        reserved.add(url);
        return url;
      }
    }

    const sourceUrl = uniqueWebCoverUrl(slug, reserved, input.title);
    const img = await fetch(sourceUrl);
    if (img.ok) {
      const bytes = Buffer.from(await img.arrayBuffer());
      const persisted = await persistBuffer(
        coverJpgPath(input.contentId),
        bytes,
        "image/jpeg",
      );
      const url = persisted || sourceUrl;
      reserved.add(url);
      return url;
    }
  } catch (err) {
    console.error(`[ranked] cover failed for ${input.contentId}`, err);
  }

  reserved.add(webUrl);
  return webUrl;
}

export function ensureUniqueCoverImages<
  T extends { slug: string; title?: string; coverImage: string },
>(posts: T[]): T[] {
  const used = new Set<string>();
  return posts.map((post) => {
    let cover = post.coverImage;
    const isLocalFile = cover.startsWith("/");
    if (!cover || (used.has(cover) && !isLocalFile)) {
      cover = uniqueWebCoverUrl(post.slug, used, post.title ?? "");
    }
    used.add(cover);
    return cover === post.coverImage ? post : { ...post, coverImage: cover };
  });
}

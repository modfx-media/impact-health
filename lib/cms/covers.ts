import pg from "pg";
import { cmsDatabaseUrl } from "@/lib/cms/env";
import type { BlogPostData } from "@/lib/ranked/types";

function normalizeTitle(title: string): string {
  return title.replace(/\s+/g, " ").trim().toLowerCase();
}

function publicCoverUrl(stored: string): string {
  if (/^https?:\/\//i.test(stored)) return stored;
  const path = stored.startsWith("/") ? stored : `/${stored}`;
  return `https://impacthealthoh.com${path}`;
}

async function loadCmsCoverMap(): Promise<Map<string, string>> {
  const connectionString = cmsDatabaseUrl();
  if (!connectionString) return new Map();

  const client = new pg.Client({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    const result = await client.query<{
      title: string | null;
      cover_image_url: string | null;
    }>(
      `SELECT title, cover_image_url
       FROM posts
       WHERE _status = 'published'
         AND cover_image_url IS NOT NULL
         AND cover_image_url <> ''`,
    );

    const map = new Map<string, string>();
    for (const row of result.rows) {
      const title = normalizeTitle(row.title || "");
      const stored = row.cover_image_url?.trim();
      if (!title || !stored) continue;
      map.set(title, publicCoverUrl(stored));
    }
    return map;
  } catch (err) {
    console.error("[cms] failed to load cover images", err);
    return new Map();
  } finally {
    await client.end().catch(() => undefined);
  }
}

export async function applyCmsCoverImages<T extends BlogPostData>(
  posts: T[],
): Promise<T[]> {
  const covers = await loadCmsCoverMap();
  if (covers.size === 0) return posts;

  return posts.map((post) => {
    const cover = covers.get(normalizeTitle(post.title));
    return cover && cover !== post.coverImage
      ? { ...post, coverImage: cover }
      : post;
  });
}

import pg from "pg";
import { blogTitleKey } from "@/lib/blog-list";
import { cmsDatabaseUrl } from "@/lib/cms/env";
import { slugFromTitle } from "@/lib/ranked/html-to-post";
import type { BlogPostData } from "@/lib/ranked/types";

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
      const title = blogTitleKey(row.title || "");
      const stored = row.cover_image_url?.trim();
      if (!title || !stored) continue;
      const url = publicCoverUrl(stored);
      map.set(title, url);
      map.set(slugFromTitle(row.title || ""), url);
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
    const cover =
      covers.get(blogTitleKey(post.title)) || covers.get(post.slug);
    return cover && cover !== post.coverImage
      ? { ...post, coverImage: cover }
      : post;
  });
}

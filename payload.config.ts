import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { searchPlugin } from "@payloadcms/plugin-search";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import sharp from "sharp";
import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";
import { Pages } from "@/collections/Pages";
import { Posts } from "@/collections/Posts";
import { Staff } from "@/collections/Staff";
import { AreaPages } from "@/collections/AreaPages";
import { Header } from "@/globals/Header";
import { Footer } from "@/globals/Footer";
import { SiteSettings } from "@/globals/SiteSettings";
import { corsOrigins, getServerURL, normalizeCmsPath, publicPath } from "@/lib/cms/urls";
import { cmsDatabaseUrl } from "@/lib/cms/env";

import { scheduledPublishPlugin } from "./scheduled-publish";
import { migrations } from "./migrations";
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const disablePush =
  Boolean(process.env.VERCEL) ||
  process.env.CMS_IMPORT_APPLY === "1" ||
  process.env.PAYLOAD_PUSH === "false";

const databaseUrl = cmsDatabaseUrl();
const localDatabase = /localhost|127\.0\.0\.1/.test(databaseUrl);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
      importMapFile: path.resolve(dirname, "app/(payload)/admin/importMap.js"),
    },
    livePreview: {
      breakpoints: [
        { label: "Mobile", name: "mobile", width: 375, height: 667 },
        { label: "Tablet", name: "tablet", width: 768, height: 1024 },
        { label: "Desktop", name: "desktop", width: 1440, height: 900 },
      ],
    },
  },
  collections: [Users, Media, Pages, Posts, Staff, AreaPages],
  globals: [Header, Footer, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  serverURL: getServerURL(),
  csrf: corsOrigins(),
  cors: corsOrigins(),
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: databaseUrl,
    },
    // Neon hosts need the websocket driver. A throwaway local Postgres does not.
    forceUseVercelPostgres: !localDatabase,
    push: !disablePush,
    migrationDir: path.resolve(dirname, "migrations"),
    // Preview builds also set NODE_ENV=production. Only the production
    // deployment applies migrations, via prodMigrations during that build.
    prodMigrations: process.env.VERCEL_ENV === "production" ? migrations : undefined,
  }),
  sharp,
  plugins: [
    scheduledPublishPlugin(),
    seoPlugin({
      collections: ["pages", "posts", "staff", "area-pages"],
      uploadsCollection: "media",
      tabbedUI: true,
      generateTitle: ({ doc }) =>
        typeof doc?.title === "string"
          ? doc.title
          : typeof doc?.name === "string"
            ? doc.name
            : "",
      generateDescription: ({ doc }) => {
        if (typeof doc?.excerpt === "string") return doc.excerpt;
        if (typeof doc?.intro === "string") return doc.intro;
        if (typeof doc?.blurb === "string") return doc.blurb;
        return "";
      },
      generateURL: ({ doc }) => {
        const raw =
          typeof doc?.path === "string"
            ? doc.path
            : typeof doc?.slug === "string"
              ? `/${doc.slug}`
              : null;
        const cmsPath = normalizeCmsPath(raw);
        if (!cmsPath) return "";
        return `${getServerURL()}${publicPath(cmsPath)}`;
      },
      fields: ({ defaultFields }) => [
        ...defaultFields,
        {
          name: "canonicalUrl",
          type: "text",
          admin: {
            description: "Absolute URL or public path. Leave empty to keep the page default.",
          },
        },
        {
          name: "noIndex",
          type: "checkbox",
          label: "No index",
          defaultValue: false,
        },
        {
          name: "noFollow",
          type: "checkbox",
          label: "No follow",
          defaultValue: false,
        },
        {
          name: "excludeFromSitemap",
          type: "checkbox",
          label: "Exclude from sitemap",
          defaultValue: false,
        },
      ],
    }),
    searchPlugin({
      collections: ["pages", "posts"],
    }),
    ...(process.env.BLOB_READ_WRITE_TOKEN
      ? [
          vercelBlobStorage({
            collections: {
              media: true,
            },
            token: process.env.BLOB_READ_WRITE_TOKEN,
          }),
        ]
      : []),
  ],
});

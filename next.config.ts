import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Live site (WordPress) serves every URL with a trailing slash, and all
  // page `canonical` metadata is authored to match that — without this,
  // Next's default routing 308-redirects the trailing-slash URL away from
  // itself, so every self-referencing canonical pointed at a redirecting URL.
  trailingSlash: true,
  serverExternalPackages: [
    "pg",
    "@payloadcms/db-vercel-postgres",
    "@neondatabase/serverless",
    "@vercel/postgres",
  ],
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
  },
  // Keep cron under the 250MB serverless limit — never trace public/ into
  // api/cron/publish-posts. Covers live in Vercel Blob, not fs.readFile.
  outputFileTracingExcludes: {
    "*": ["./public/images/**", "./public/**/*.mp4", "./public/**/*.webm"],
  },
  // These pages/profiles were removed from the site at the client's
  // request; permanently redirect their old URLs to the homepage.
  async redirects() {
    return [
      { source: "/wound-care/", destination: "/", permanent: true },
      { source: "/medical-infusion-therapy/", destination: "/", permanent: true },
      { source: "/staff/melinda-everman-moore/", destination: "/", permanent: true },
      { source: "/staff/tara-allen/", destination: "/", permanent: true },
    ];
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });

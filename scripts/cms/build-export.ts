import fs from "node:fs";
import path from "node:path";
import { blogPosts } from "../../lib/blog-posts";
import { staffMembers } from "../../lib/staff-data";
import { staticCmsPaths } from "../../lib/cms/url-manifest";
import { primaryNav, contactInfo, socialLinks } from "../../lib/nav-data";
import { areaLocations } from "../../lib/areas-we-serve/locations";
import { areaTopics } from "../../lib/areas-we-serve/topics";
import {
  getAreaIntro,
  getAreaMeta,
} from "../../lib/areas-we-serve/content";
import { shouldNoindexArea } from "../../lib/areas-we-serve/config";
import { publicPath } from "../../lib/cms/urls";

type RecordRow = {
  collection: string;
  data: Record<string, unknown>;
};

function pageFileForPath(cmsPath: string): string {
  if (cmsPath === "/") return path.join("app", "(site)", "page.tsx");
  return path.join("app", "(site)", ...cmsPath.slice(1).split("/"), "page.tsx");
}

function extractMeta(src: string): { title?: string; description?: string } {
  const title = src.match(/title:\s*"([^"]+)"/)?.[1];
  const description = src.match(/description:\s*\n?\s*"([^"]+)"/)?.[1];
  return { title, description };
}

function extractFaqs(src: string): { question: string; answer: string }[] {
  const items: { question: string; answer: string }[] = [];
  const re =
    /question:\s*"((?:\\.|[^"\\])*)"\s*,\s*answer:\s*"((?:\\.|[^"\\])*)"/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(src))) {
    items.push({
      question: match[1].replace(/\\"/g, '"'),
      answer: match[2].replace(/\\"/g, '"'),
    });
  }
  return items;
}

function pageRecord(cmsPath: string): RecordRow {
  const file = pageFileForPath(cmsPath);
  let title = cmsPath === "/" ? "Home" : cmsPath;
  let description = "";
  let layout: unknown[] = [];

  if (fs.existsSync(file)) {
    const src = fs.readFileSync(file, "utf8");
    const meta = extractMeta(src);
    if (meta.title) title = meta.title;
    if (meta.description) description = meta.description;
    if (cmsPath === "/faq") {
      const items = extractFaqs(src);
      if (items.length) {
        layout = [{ blockType: "faq", heading: "FAQs", items }];
      }
    }
  }

  const slug = cmsPath === "/" ? "home" : cmsPath.replace(/^\//, "").replace(/\//g, "-");
  const publicUrl = publicPath(cmsPath);

  return {
    collection: "pages",
    data: {
      title,
      slug,
      path: cmsPath,
      intro: description,
      layout,
      meta: { title, description },
      canonicalUrl: publicUrl,
      sourceUrl: `https://impacthealthoh.com${publicUrl}`,
      legacyId: `page:${cmsPath}`,
      _status: "draft",
    },
  };
}

function postRecords(): RecordRow[] {
  return blogPosts.map((post) => ({
    collection: "posts",
    data: {
      title: post.title,
      h1: post.h1 ?? post.title,
      slug: post.slug,
      path: `/blog/${post.slug}`,
      excerpt: post.description,
      category: post.category,
      coverImageUrl: post.image,
      coverImageAlt: post.imageAlt,
      publishDate: post.date,
      dateModified: post.dateModified,
      meta: { title: post.title, description: post.description },
      canonicalUrl: `/blog/${post.slug}/`,
      sourceUrl: `https://impacthealthoh.com/blog/${post.slug}/`,
      legacyId: `post:${post.slug}`,
      _status: "draft",
    },
  }));
}

function staffRecords(): RecordRow[] {
  return staffMembers.map((member) => ({
    collection: "staff",
    data: {
      name: member.name,
      title: member.pageTitle,
      slug: member.slug,
      path: `/staff/${member.slug}`,
      role: member.role,
      blurb: member.blurb,
      imageUrl: member.image,
      bio: member.bio.map((paragraph) => ({ paragraph })),
      meta: { title: member.pageTitle, description: member.metaDescription },
      canonicalUrl: `/staff/${member.slug}/`,
      sourceUrl: `https://impacthealthoh.com/staff/${member.slug}/`,
      legacyId: `staff:${member.slug}`,
      _status: "draft",
    },
  }));
}

function areaRecords(): RecordRow[] {
  const rows: RecordRow[] = [
    {
      collection: "area-pages",
      data: {
        title: "Areas We Serve | Impact Health & Wellness",
        slug: "areas-we-serve",
        path: "/areas-we-serve",
        kind: "hub",
        eyebrow: "Areas We Serve",
        intro:
          "Impact Health & Wellness in Westerville, OH welcomes patients from across Central Ohio. See drive times and care options for your area.",
        meta: {
          title: "Areas We Serve | Impact Health & Wellness",
          description:
            "Impact Health & Wellness in Westerville, OH welcomes patients from across Central Ohio. See drive times and care options for your area.",
        },
        canonicalUrl: "/areas-we-serve/",
        noIndex: true,
        excludeFromSitemap: true,
        sourceUrl: "https://impacthealthoh.com/areas-we-serve/",
        legacyId: "area:hub",
        _status: "draft",
      },
    },
  ];

  for (const location of areaLocations) {
    const locPath = `/areas-we-serve/${location.slug}`;
    rows.push({
      collection: "area-pages",
      data: {
        title: `Care for ${location.name}, OH Patients | Impact Health & Wellness`,
        slug: location.slug,
        path: locPath,
        kind: "location",
        locationSlug: location.slug,
        eyebrow: "Areas We Serve",
        intro: location.blurb,
        meta: {
          title: `Care for ${location.name}, OH Patients | Impact Health & Wellness`,
          description: location.blurb,
        },
        canonicalUrl: `${locPath}/`,
        noIndex: true,
        excludeFromSitemap: true,
        sourceUrl: `https://impacthealthoh.com${locPath}/`,
        legacyId: `area:location:${location.slug}`,
        _status: "draft",
      },
    });

    for (const topic of areaTopics) {
      const comboPath = `/areas-we-serve/${location.slug}/${topic.slug}`;
      const { title, description } = getAreaMeta(location, topic);
      const hide = shouldNoindexArea(location);
      rows.push({
        collection: "area-pages",
        data: {
          title,
          slug: `${location.slug}-${topic.slug}`,
          path: comboPath,
          kind: "combo",
          locationSlug: location.slug,
          topicSlug: topic.slug,
          eyebrow: "Areas We Serve",
          intro: getAreaIntro(location, topic),
          layout: [
            {
              blockType: "faq",
              heading: "FAQs",
              items: [topic.faq],
            },
          ],
          meta: { title, description },
          canonicalUrl: `${comboPath}/`,
          noIndex: true,
          excludeFromSitemap: hide || true,
          sourceUrl: `https://impacthealthoh.com${comboPath}/`,
          legacyId: `area:combo:${location.slug}:${topic.slug}`,
          _status: "draft",
        },
      });
    }
  }

  return rows;
}

function globals() {
  return [
    {
      slug: "header",
      data: {
        logoUrl: "/images/impact-logo.png",
        logoAlt: "Impact Health & Wellness",
        nav: primaryNav.map((item) => ({
          label: item.label,
          href: item.href,
          columns: item.columns?.map((column) => ({
            heading: column.heading,
            headingHref: column.headingHref,
            links: column.links.map((link) => ({
              label: link.label,
              href: link.href,
              external: Boolean(link.external),
            })),
          })),
        })),
      },
    },
    {
      slug: "footer",
      data: {
        logoUrl: "/images/impact-logo.png",
        tagline: contactInfo.address,
        columns: [],
      },
    },
    {
      slug: "site-settings",
      data: {
        siteName: "Impact Health & Wellness",
        defaultTitle:
          "Care Clinic | Health & Wellness Services in Westerville, OH",
        defaultDescription:
          "Experience full-spectrum pain management at our medically-integrated care facility. We provide treatments based on Physical, Traditional, & Functional Medicine.",
        phoneDisplay: contactInfo.phoneDisplay,
        phoneHref: contactInfo.phoneHref,
        email: contactInfo.email,
        address: contactInfo.address,
        mapsUrl: contactInfo.mapsUrl,
        social: socialLinks.map((item) => ({
          label: item.label,
          href: item.href,
        })),
      },
    },
  ];
}

const records: RecordRow[] = [
  ...staticCmsPaths.map(pageRecord),
  ...postRecords(),
  ...staffRecords(),
  ...areaRecords(),
];

const exportDoc = {
  version: 1,
  records,
  globals: globals(),
};

fs.mkdirSync("data", { recursive: true });
fs.writeFileSync("data/content-export.json", JSON.stringify(exportDoc, null, 2));
console.log(`Wrote data/content-export.json (${records.length} records)`);

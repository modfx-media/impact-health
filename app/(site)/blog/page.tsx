import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import {
  BLOG_CATEGORIES,
  blogPosts,
  categoryForTitle,
} from "@/lib/blog-posts";
import { getPublishedBlogPosts } from "@/lib/ranked/posts";
import { BlogCategoryFilter, type BlogListItem } from "@/components/blog/BlogCategoryFilter";
import { PageLayout } from "@/components/page/PageLayout";

export const revalidate = 3600;

const fallbackMetadata: Metadata = {
  title: "Blog | Health & Wellness Tips from Impact Health & Wellness",
  description:
    "Explore health, wellness, and pain-relief tips from Impact Health & Wellness in Westerville, OH, from hormone therapy to nutrition, recovery, and more.",
  alternates: { canonical: "/blog/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/blog", fallbackMetadata);
}

const schema = [
  {
    "@type": "CollectionPage",
    "@id": "https://impacthealthoh.com/blog/",
    url: "https://impacthealthoh.com/blog/",
    name: "Blog | Health & Wellness Tips from Impact Health & Wellness",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    description:
      "Explore health, wellness, and pain-relief tips from Impact Health & Wellness in Westerville, OH, from hormone therapy to nutrition, recovery, and more.",
    breadcrumb: { "@id": "https://impacthealthoh.com/blog/#breadcrumb" },
    inLanguage: "en-US",
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/blog/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Blog" },
    ],
  },
  {
    "@type": "WebSite",
    "@id": "https://impacthealthoh.com/#website",
    url: "https://impacthealthoh.com/",
    name: "Impact Health & Wellness",
    description: "",
    publisher: { "@id": "https://impacthealthoh.com/#organization" },
    alternateName: "Impact Health",
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
        },
        "query-input": {
          "@type": "PropertyValueSpecification",
          valueRequired: true,
          valueName: "search_term_string",
        },
      },
    ],
    inLanguage: "en-US",
  },
  {
    "@type": "Organization",
    "@id": "https://impacthealthoh.com/#organization",
    name: "Impact Health & Wellness",
    alternateName: "Impact Health",
    url: "https://impacthealthoh.com/",
    logo: {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
      contentUrl:
        "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
      width: 620,
      height: 199,
      caption: "Impact Health & Wellness",
    },
    image: { "@id": "https://impacthealthoh.com/#/schema/logo/image/" },
    sameAs: [
      "https://www.facebook.com/impacthealthandwellness/",
      "https://www.instagram.com/impacthealthandwellness/",
      "https://www.linkedin.com/company/impacthealthandwellness",
    ],
  },
];

async function BlogIndexPage() {
  const posts = await getPublishedBlogPosts();
  const categoryBySlug = new Map(blogPosts.map((p) => [p.slug, p.category]));

  const localAndRanked: BlogListItem[] = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.metaDescription,
    image: post.coverImage,
    imageAlt: post.coverAlt,
    date: post.publishDate,
    category: categoryBySlug.get(post.slug) ?? categoryForTitle(post.title),
    href: `/blog/${post.slug}/`,
  }));

  const sorted = [...localAndRanked].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <PageLayout
      title="Blog"
      eyebrow="Wellness Reads"
      intro="Practical, expert-backed health and wellness tips from the Impact Health & Wellness team in Westerville, OH."
      breadcrumbs={[{ label: "Blog" }]}
      schema={schema}
      afterContent={
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 pb-20">
            <BlogCategoryFilter posts={sorted} categories={[...BLOG_CATEGORIES]} />
          </div>
        </section>
      }
    />
  );
}


export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/blog">
      <BlogIndexPage />
    </CMSRoute>
  );
}

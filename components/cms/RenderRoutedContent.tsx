import { RichText } from "@payloadcms/richtext-lexical/react";
import { PageLayout } from "@/components/page/PageLayout";
import { Faq } from "@/components/page/Faq";
import { BookAppointmentCta } from "@/components/page/BookAppointmentCta";
import type { RoutedCollection, RoutedDoc } from "@/lib/cms/query";

type Block = {
  blockType?: string;
  heading?: string;
  intro?: string;
  eyebrow?: string;
  html?: string;
  content?: unknown;
  items?: { question: string; answer: string }[];
  label?: string;
  href?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageUrl?: string;
  imageAlt?: string;
};

function Html({ html }: { html?: string | null }) {
  if (!html) return null;
  return (
    <div
      className="cms-html space-y-4"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function Blocks({ blocks }: { blocks?: Block[] | null }) {
  if (!blocks?.length) return null;
  return (
    <>
      {blocks.map((block, index) => {
        const key = `${block.blockType ?? "block"}-${index}`;
        if (block.blockType === "faq" && block.items?.length) {
          return (
            <div key={key} className="space-y-4">
              {block.heading ? <h2>{block.heading}</h2> : null}
              <Faq items={block.items} />
            </div>
          );
        }
        if (block.blockType === "cta") {
          return (
            <div key={key} className="space-y-3">
              {block.heading ? <h2>{block.heading}</h2> : null}
              {block.body ? <p>{block.body}</p> : null}
              <BookAppointmentCta />
            </div>
          );
        }
        if (block.blockType === "richText") {
          return (
            <div key={key} className="space-y-4">
              {block.heading ? <h2>{block.heading}</h2> : null}
              {block.content ? (
                <RichText data={block.content as never} />
              ) : (
                <Html html={block.html} />
              )}
            </div>
          );
        }
        if (block.blockType === "hero") {
          return block.intro ? <p key={key}>{block.intro}</p> : null;
        }
        return null;
      })}
    </>
  );
}

function mediaUrl(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  if (value && typeof value === "object" && "url" in value) {
    const url = (value as { url?: string }).url;
    return url ?? undefined;
  }
  return undefined;
}

export function RenderRoutedContent({
  doc,
  collection,
}: {
  doc: RoutedDoc;
  collection: RoutedCollection;
}) {
  if (collection === "staff") {
    const bio = Array.isArray(doc.bio)
      ? (doc.bio as { paragraph?: string }[])
      : [];
    return (
      <PageLayout
        title={String(doc.name || doc.title || "")}
        eyebrow={typeof doc.role === "string" ? doc.role : "Our Team"}
        intro={typeof doc.blurb === "string" ? doc.blurb : undefined}
        image={
          typeof doc.imageUrl === "string"
            ? { src: doc.imageUrl, alt: String(doc.name || "") }
            : undefined
        }
        breadcrumbs={[
          { label: "About Us", href: "/about-us/" },
          { label: String(doc.name || "Staff") },
        ]}
      >
        {bio.map((row, i) =>
          row.paragraph ? <p key={i}>{row.paragraph}</p> : null,
        )}
      </PageLayout>
    );
  }

  if (collection === "posts") {
    const cover =
      (typeof doc.coverImageUrl === "string" && doc.coverImageUrl) ||
      mediaUrl(doc.meta && typeof doc.meta === "object" ? doc.meta.image : undefined);
    return (
      <PageLayout
        title={String(doc.h1 || doc.title || "")}
        eyebrow="Blog"
        intro={typeof doc.excerpt === "string" ? doc.excerpt : undefined}
        image={
          cover
            ? {
                src: cover,
                alt: String(doc.coverImageAlt || doc.title || ""),
              }
            : undefined
        }
        breadcrumbs={[
          { label: "Blog", href: "/blog/" },
          { label: String(doc.title || "Post") },
        ]}
      >
        {doc.content ? <RichText data={doc.content as never} /> : null}
        <Html html={typeof doc.bodyHtml === "string" ? doc.bodyHtml : null} />
      </PageLayout>
    );
  }

  const layout = Array.isArray(doc.layout) ? (doc.layout as Block[]) : [];
  const hero = layout.find((block) => block.blockType === "hero");
  const imageUrl =
    (typeof doc.heroImageUrl === "string" && doc.heroImageUrl) ||
    hero?.imageUrl;
  const title = String(hero?.heading || doc.title || "");

  return (
    <PageLayout
      title={title}
      eyebrow={
        (typeof doc.eyebrow === "string" && doc.eyebrow) || hero?.eyebrow
      }
      intro={(typeof doc.intro === "string" && doc.intro) || hero?.intro}
      image={
        imageUrl
          ? {
              src: imageUrl,
              alt: String(doc.heroImageAlt || hero?.imageAlt || title),
            }
          : undefined
      }
      breadcrumbs={[{ label: title }]}
    >
      <Blocks blocks={layout} />
    </PageLayout>
  );
}

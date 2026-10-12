import type { Block } from "payload";

export const HeroBlock: Block = {
  slug: "hero",
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "heading", type: "text" },
    { name: "intro", type: "textarea" },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "imageUrl", type: "text" },
    { name: "imageAlt", type: "text" },
    { name: "ctaLabel", type: "text" },
    { name: "ctaHref", type: "text" },
  ],
};

export const RichTextBlock: Block = {
  slug: "richText",
  fields: [
    { name: "heading", type: "text" },
    { name: "content", type: "richText" },
    { name: "html", type: "textarea" },
  ],
};

export const FaqBlock: Block = {
  slug: "faq",
  fields: [
    { name: "heading", type: "text" },
    {
      name: "items",
      type: "array",
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "textarea", required: true },
      ],
    },
  ],
};

export const CtaBlock: Block = {
  slug: "cta",
  fields: [
    { name: "heading", type: "text" },
    { name: "body", type: "textarea" },
    { name: "label", type: "text" },
    { name: "href", type: "text" },
  ],
};

export const layoutBlocks = [HeroBlock, RichTextBlock, FaqBlock, CtaBlock];

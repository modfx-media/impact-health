import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";

const fallbackMetadata: Metadata = {
  title: "Shoulder Pain Treatment in Westerville, OH",
  description:
    "Find non-surgical shoulder pain relief at Impact Health & Wellness in Westerville, OH. Restore mobility and ease discomfort. Schedule your exam today!",
  alternates: { canonical: "/conditions-we-treat/shoulder-pain/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/conditions-we-treat/shoulder-pain", fallbackMetadata);
}

const relatedTreatments = [
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Physical Therapy and Rehabilitation", href: "/chiropractic-care/physical-therapy/" },
  { label: "Regenerative Medicine", href: "/regenerative-medicine/" },
  { label: "Shockwave Therapy", href: "/shockwave/" },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/conditions-we-treat/shoulder-pain/",
    url: "https://impacthealthoh.com/conditions-we-treat/shoulder-pain/",
    name: "Shoulder Pain Treatment in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2026-09-04T00:00:00+00:00",
    dateModified: "2026-09-04T00:00:00+00:00",
    description:
      "Find non-surgical shoulder pain relief at Impact Health & Wellness in Westerville, OH. Restore mobility and ease discomfort. Schedule your exam today!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/conditions-we-treat/shoulder-pain/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/conditions-we-treat/shoulder-pain/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/conditions-we-treat/shoulder-pain/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://impacthealthoh.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conditions We Treat",
        item: "https://impacthealthoh.com/conditions-we-treat/",
      },
      { "@type": "ListItem", position: 3, name: "Shoulder Pain" },
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

async function ShoulderPainPage() {
  return (
    <PageLayout
      title="Shoulder Pain"
      intro="Understand the common causes of shoulder pain and explore non-surgical treatment options designed to restore movement and relieve discomfort."
      breadcrumbs={[
        { label: "Conditions We Treat", href: "/conditions-we-treat/" },
        { label: "Shoulder Pain" },
      ]}
      image={{ src: "/images/conditions/shoulder-pain.jpg", alt: "Provider examining a patient's shoulder for signs of pain or injury" }}
      schema={schema}
      showTestimonials
      afterContent={
        <>
          <RelatedServices items={relatedTreatments} heading="Related Treatments" />
          <ServicesOverview className="bg-[#f4f8fb]" />
        </>
      }
    >
      <p>
        Shoulder Pain can affect the joint itself, the surrounding muscles,
        or the tendons and ligaments that keep the shoulder stable. Because
        the shoulder has such a wide range of motion, it&apos;s especially
        vulnerable to overuse injuries, joint degeneration, and soft-tissue
        strain that can make everyday movements like reaching or lifting
        difficult and painful.
      </p>

      <h2>Common Causes of Shoulder Pain</h2>
      <ul>
        <li>Rotator cuff strain, tendinitis, or tears</li>
        <li>Frozen shoulder (adhesive capsulitis)</li>
        <li>Bursitis or impingement in the shoulder joint</li>
        <li>Osteoarthritis affecting the shoulder joint</li>
        <li>Overuse injuries from repetitive lifting, throwing, or reaching</li>
      </ul>

      <h2>When to Seek Treatment for Shoulder Pain</h2>
      <p>
        Shoulder pain that limits your range of motion, disrupts sleep, or
        persists for more than a few weeks is a sign your shoulder needs a
        proper evaluation. Catching the underlying cause early can help you
        avoid further joint damage and a longer recovery down the road.
      </p>

      <h2>Why Choose Impact for Shoulder Pain Relief</h2>
      <p>
        Our providers combine chiropractic care, physical therapy, and
        regenerative medicine to relieve pressure on the shoulder joint and
        rebuild strength and stability&mdash;helping you regain full
        movement without surgery.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/conditions-we-treat/shoulder-pain">
      <ShoulderPainPage />
    </CMSRoute>
  );
}

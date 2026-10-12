import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";

const fallbackMetadata: Metadata = {
  title: "Hip Pain Treatment in Westerville | Top Non-Surgical Care",
  description:
    "Find hip pain relief in Westerville with Impact Health & Wellness. We offer non-surgical treatments to improve your mobility and comfort. Schedule your visit!",
  alternates: { canonical: "/conditions-we-treat/hip-pain/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/conditions-we-treat/hip-pain", fallbackMetadata);
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
    "@id": "https://impacthealthoh.com/conditions-we-treat/hip-pain/",
    url: "https://impacthealthoh.com/conditions-we-treat/hip-pain/",
    name: "Hip Pain Treatment in Westerville | Top Non-Surgical Care",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T19:52:59+00:00",
    dateModified: "2026-04-10T11:09:02+00:00",
    description:
      "Find hip pain relief in Westerville with Impact Health & Wellness. We offer non-surgical treatments to improve your mobility and comfort. Schedule your visit!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/conditions-we-treat/hip-pain/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/conditions-we-treat/hip-pain/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/conditions-we-treat/hip-pain/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://impacthealthoh.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conditions We Treat",
        item: "https://impacthealthoh.com/conditions-we-treat/",
      },
      { "@type": "ListItem", position: 3, name: "Hip Pain" },
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

async function HipPainPage() {
  return (
    <PageLayout
      title="Hip Pain"
      intro="Discover insights into hip pain, including causes like arthritis. Find strategies for relief and improving hip health effectively."
      image={{ src: "/images/conditions/hip-pain.jpg", alt: "Provider examining a patient's hip for signs of pain or injury" }}
      breadcrumbs={[
        { label: "Conditions We Treat", href: "/conditions-we-treat/" },
        { label: "Hip Pain" },
      ]}
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
        Hip Pain is most often felt in the muscles or joints that make up the
        hip/pelvic region. Hip Pain is described as a shooting pain, weakness
        and/or stiffness in the hip. Hip Pain can be caused by any number of
        factors, most notably Rheumatoid Arthritis and Osteoarthritis.
      </p>

      <h2>Common Causes of Hip Pain</h2>
      <ul>
        <li>Osteoarthritis or rheumatoid arthritis in the hip joint</li>
        <li>Bursitis or tendinitis around the hip</li>
        <li>Muscle strain from overuse or sudden movement</li>
        <li>Hip labral tears affecting joint stability</li>
      </ul>

      <h2>When Hip Pain Needs Professional Care</h2>
      <p>
        Hip pain that limits walking, disrupts sleep, or doesn&apos;t improve with
        rest is a sign your hip needs a proper evaluation rather than
        continued home management.
      </p>

      <h2>Why Choose Impact for Hip Pain Treatment</h2>
      <p>
        Our providers combine chiropractic care, physical therapy, and
        regenerative medicine to relieve pressure on the hip joint and
        rebuild strength, so you can move without pain, without surgery.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/conditions-we-treat/hip-pain">
      <HipPainPage />
    </CMSRoute>
  );
}

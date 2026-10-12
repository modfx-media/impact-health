import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";

const fallbackMetadata: Metadata = {
  title: "Specialist Foot & Ankle Pain Relief & Care in Westerville",
  description:
    "Find foot and ankle pain relief at Impact Health & Wellness in Westerville. Our targeted therapies restore mobility so you can move without discomfort. Call us!",
  alternates: { canonical: "/conditions-we-treat/foot-ankle-pain/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/conditions-we-treat/foot-ankle-pain", fallbackMetadata);
}

const relatedTreatments = [
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Physical Therapy and Rehabilitation", href: "/chiropractic-care/physical-therapy/" },
  { label: "Laser Therapy", href: "/laser-therapy/" },
  { label: "Shockwave Therapy", href: "/shockwave/" },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/conditions-we-treat/foot-ankle-pain/",
    url: "https://impacthealthoh.com/conditions-we-treat/foot-ankle-pain/",
    name: "Specialist Foot & Ankle Pain Relief & Care in Westerville",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T19:29:59+00:00",
    dateModified: "2026-04-10T11:08:31+00:00",
    description:
      "Find foot and ankle pain relief at Impact Health & Wellness in Westerville. Our targeted therapies restore mobility so you can move without discomfort. Call us!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/conditions-we-treat/foot-ankle-pain/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/conditions-we-treat/foot-ankle-pain/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/conditions-we-treat/foot-ankle-pain/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://impacthealthoh.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conditions We Treat",
        item: "https://impacthealthoh.com/conditions-we-treat/",
      },
      { "@type": "ListItem", position: 3, name: "Foot & Ankle Pain" },
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

async function FootAnklePainPage() {
  return (
    <PageLayout
      title="Foot & Ankle Pain"
      intro="Understanding foot anatomy, pain types, and treatment options. Discover how to alleviate discomfort and when to seek professional help."
      image={{ src: "/images/conditions/foot-ankle-pain.jpg", alt: "Patient with foot and ankle pain" }}
      breadcrumbs={[
        { label: "Conditions We Treat", href: "/conditions-we-treat/" },
        { label: "Foot & Ankle Pain" },
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
        The human foot is a complex structure packed tightly with twenty-six
        bones and numerous joints, muscles, nerves, and ligaments. Feet are
        easily injured due to the cramped nature of everything within, as
        well as the relatively fragile bones. Foot pain, just like all pain,
        can be chronic or acute. Sometimes cases of acute foot pain can be
        treated with home care treatments. The chronic and extreme cases of
        foot pain almost always require medical attention. When left
        untreated, chronic, and sometimes acute, foot pain can lead to
        long-term issues such as numbness in the foot or a walking impairment.
      </p>

      <h2>Common Causes of Foot & Ankle Pain</h2>
      <ul>
        <li>Plantar fasciitis and heel pain</li>
        <li>Ankle sprains and ligament injuries</li>
        <li>Tendinitis from overuse or repetitive stress</li>
        <li>Arthritis affecting the foot or ankle joints</li>
        <li>Stress fractures from high-impact activity</li>
      </ul>

      <h2>When to Seek Treatment</h2>
      <p>
        If foot or ankle pain persists beyond a few days, limits your ability
        to bear weight, or is accompanied by swelling or bruising, it&apos;s time
        to have it evaluated before the issue becomes chronic.
      </p>

      <h2>Why Choose Impact for Foot & Ankle Pain</h2>
      <p>
        We combine chiropractic care, laser therapy, and shockwave therapy to
        reduce inflammation and support healing, helping you get back on your
        feet without surgery.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/conditions-we-treat/foot-ankle-pain">
      <FootAnklePainPage />
    </CMSRoute>
  );
}

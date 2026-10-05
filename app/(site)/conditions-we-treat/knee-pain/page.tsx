import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";

const fallbackMetadata: Metadata = {
  title: "Effective Knee Pain Relief Treatment in Westerville, OH",
  description:
    "Seeking knee pain relief in Westerville, OH? Impact Health & Wellness offers expert care to address joint issues & help you move freely again. Contact us today!",
  alternates: { canonical: "/conditions-we-treat/knee-pain/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/conditions-we-treat/knee-pain", fallbackMetadata);
}

const relatedTreatments = [
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Physical Therapy and Rehabilitation", href: "/chiropractic-care/physical-therapy/" },
  { label: "PRP Therapy", href: "/prp-therapy/" },
  { label: "Shockwave Therapy", href: "/shockwave/" },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/conditions-we-treat/knee-pain/",
    url: "https://impacthealthoh.com/conditions-we-treat/knee-pain/",
    name: "Effective Knee Pain Relief Treatment in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T20:33:42+00:00",
    dateModified: "2026-04-10T11:09:25+00:00",
    description:
      "Seeking knee pain relief in Westerville, OH? Impact Health & Wellness offers expert care to address joint issues & help you move freely again. Contact us today!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/conditions-we-treat/knee-pain/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/conditions-we-treat/knee-pain/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/conditions-we-treat/knee-pain/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://impacthealthoh.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conditions We Treat",
        item: "https://impacthealthoh.com/conditions-we-treat/",
      },
      { "@type": "ListItem", position: 3, name: "Knee Pain" },
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

async function KneePainPage() {
  return (
    <PageLayout
      title="Knee Pain"
      intro="Personalized treatment to relieve knee pain and get you moving freely again."
      breadcrumbs={[
        { label: "Conditions We Treat", href: "/conditions-we-treat/" },
        { label: "Knee Pain" },
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
        Knee Pain is most often felt in the muscles or joints that make up the
        knee and lower leg region. Knee Pain is described as a shooting pain,
        weakness and/or stiffness in the knee joint. Knee Pain can be caused
        by any number of factors, most notably Rheumatoid Arthritis and
        Osteoarthritis.
      </p>

      <h2>Common Knee Injuries and Conditions We Treat</h2>
      <ul>
        <li>Meniscus Tears</li>
        <li>ACL Tears</li>
        <li>PCL Tears</li>
      </ul>

      <h2>Why Choose Impact for Knee Pain Treatment</h2>
      <p>
        At Impact, our multidisciplinary team is dedicated to identifying and
        treating your knee condition at its source so that we can deliver
        healing that lasts – without surgical intervention. When you choose
        Impact, you’re partnering with extraordinary doctors and providers who
        put you and your health first.
      </p>

      <h2>Understanding Knee Pain</h2>
      <p>
        Knee pain is one of the most common things we see at Impact. Most
        often, people present with symptoms like:
      </p>
      <ul>
        <li>Swelling</li>
        <li>Stiffness</li>
        <li>Redness</li>
        <li>Weakness</li>
        <li>Popping and cracking noises</li>
        <li>Inability to straighten the knee</li>
      </ul>
      <p>
        There are many causes of knee injuries with arthritis, overuse, and
        injuries being the most common.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/conditions-we-treat/knee-pain">
      <KneePainPage />
    </CMSRoute>
  );
}

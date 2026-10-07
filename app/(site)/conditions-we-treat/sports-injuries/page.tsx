import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";

const fallbackMetadata: Metadata = {
  title: "Sports Injury Treatment & Rehab Recovery in Westerville",
  description:
    "Get back in the game with Impact Health & Wellness! We offer expert sports injury treatment and rehab in Westerville, OH. Recover faster with our expert team.",
  alternates: { canonical: "/conditions-we-treat/sports-injuries/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/conditions-we-treat/sports-injuries", fallbackMetadata);
}

const relatedTreatments = [
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Physical Therapy and Rehabilitation", href: "/chiropractic-care/physical-therapy/" },
  { label: "PRP Therapy", href: "/prp-therapy/" },
  { label: "Shockwave Therapy", href: "/shockwave/" },
  { label: "School Sports Physicals", href: "/school-sports-physicals/" },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/conditions-we-treat/sports-injuries/",
    url: "https://impacthealthoh.com/conditions-we-treat/sports-injuries/",
    name: "Sports Injury Treatment & Rehab Recovery in Westerville",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T20:08:48+00:00",
    dateModified: "2026-04-10T11:15:13+00:00",
    description:
      "Get back in the game with Impact Health & Wellness! We offer expert sports injury treatment and rehab in Westerville, OH. Recover faster with our expert team.",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/conditions-we-treat/sports-injuries/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/conditions-we-treat/sports-injuries/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/conditions-we-treat/sports-injuries/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://impacthealthoh.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conditions We Treat",
        item: "https://impacthealthoh.com/conditions-we-treat/",
      },
      { "@type": "ListItem", position: 3, name: "Sports Injuries" },
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

async function SportsInjuriesPage() {
  return (
    <PageLayout
      title="Sports Injuries"
      intro="Expert sports injury treatment and rehab to get you back in the game."
      breadcrumbs={[
        { label: "Conditions We Treat", href: "/conditions-we-treat/" },
        { label: "Sports Injuries" },
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
      <h2>Common Sports Injuries We Treat</h2>
      <ul>
        <li>Knee Injuries</li>
        <li>Anterior Cruciate Ligament (ACL) Tears</li>
        <li>Groin (Inner Thigh) Pulls</li>
        <li>Golf Elbow</li>
        <li>Hamstring Pulls</li>
        <li>Shoulder Injuries</li>
        <li>Shin Splints</li>
        <li>Tennis Elbow</li>
      </ul>

      <h2>Why Choose Impact for Sports Injuries</h2>
      <p>
        At Impact, our multidisciplinary team is dedicated to identifying and
        treating your injury at its source, helping you recover, and
        delivering healing that lasts – without surgical intervention. When
        you choose Impact, you’re partnering with extraordinary doctors and
        providers who put you and your health first.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/conditions-we-treat/sports-injuries">
      <SportsInjuriesPage />
    </CMSRoute>
  );
}

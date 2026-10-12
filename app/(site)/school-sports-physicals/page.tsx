import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { ProcessSteps } from "@/components/page/ProcessSteps";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";

const fallbackMetadata: Metadata = {
  title: "Sports Physicals in Westerville | Fast & Easy Appointments",
  description:
    "Get school sports physicals in Westerville, OH at Impact Health & Wellness. Ensure your child is ready for the season with a comprehensive exam. Schedule today!",
  alternates: { canonical: "/school-sports-physicals/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/school-sports-physicals", fallbackMetadata);
}

// Yoast schema graph captured from the live School & Sports Physicals page, preserved as-is.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/school-sports-physicals/",
    url: "https://impacthealthoh.com/school-sports-physicals/",
    name: "Sports Physicals in Westerville | Fast & Easy Appointments",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T22:51:15+00:00",
    dateModified: "2026-04-10T11:29:29+00:00",
    description:
      "Get school sports physicals in Westerville, OH at Impact Health & Wellness. Ensure your child is ready for the season with a comprehensive exam. Schedule today!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/school-sports-physicals/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/school-sports-physicals/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/school-sports-physicals/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "School & Sports Physicals" },
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

async function SchoolSportsPhysicalsPage() {
  return (
    <PageLayout
      title="School & Sports Physicals"
      eyebrow="School & Sports Physicals"
      intro="You can get your school and sports physicals done at Anodyne of Westerville. We can usually get you scheduled for a same-day or next-day appointment, unlike many primary care doctors."
      breadcrumbs={[{ label: "School & Sports Physicals" }]}
      schema={schema}
      showTestimonials
      afterContent={
        <>
          <RelatedServices
            items={getRelatedServices("/school-sports-physicals/")}
          />
          <ServicesOverview />
        </>
      }
    >
      <p>
        You can get your school and sports physicals done at Anodyne of
        Westerville. We can usually get you scheduled for a same-day or
        next-day appointment, unlike many primary care doctors. Also called
        pre-participation physicals, sport physicals are a great way to make
        sure an athlete can safely play. Even if the state or school
        doesn&rsquo;t require it, sports physicals provide an opportunity to
        discuss any concerns, perform injury prevention screenings, and
        complete a sport-specific physical risk assessment.
      </p>

      <ProcessSteps
        items={[
          {
            title: "1. Verify Insurance",
            description:
              "Insurance can be verified for coverage. If your physical is not covered by your insurance, our cash fee is only $35.",
          },
          {
            title: "2. Bring Forms",
            description:
              "Bring any required forms including a completed health history and immunization history.",
          },
          {
            title: "3. The Physical",
            description:
              "Our practitioner will review your medical history and immunizations and perform a physical exam, injury prevention screening and sport specific physical assessment to determine if you are able to safely participate in your chosen sport. Wear clothes that you can comfortably move in.",
          },
        ]}
      />
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/school-sports-physicals">
      <SchoolSportsPhysicalsPage />
    </CMSRoute>
  );
}

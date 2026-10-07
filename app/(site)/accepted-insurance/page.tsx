import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { ServicesOverview } from "@/components/home/ServicesOverview";

const fallbackMetadata: Metadata = {
  title: "Insurances | Medical & Chiropractic Services in Westerville",
  description:
    "Review accepted insurances for physical therapy, medical, & chiropractic services in Westerville, OH. Get coverage details and book your consultation now!",
  alternates: { canonical: "/accepted-insurance/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/accepted-insurance", fallbackMetadata);
}

// Yoast schema graph captured from the live Accepted Insurances page, preserved as-is.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/accepted-insurance/",
    url: "https://impacthealthoh.com/accepted-insurance/",
    name: "Insurances | Medical & Chiropractic Services in Westerville",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T00:45:58+00:00",
    dateModified: "2026-05-28T10:38:55+00:00",
    description:
      "Review accepted insurances for physical therapy, medical, & chiropractic services in Westerville, OH. Get coverage details and book your consultation now!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/accepted-insurance/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/accepted-insurance/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/accepted-insurance/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Accepted Insurances" },
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

async function AcceptedInsurancePage() {
  return (
    <PageLayout
      title="Accepted Insurances"
      intro="Maximize your healthcare experience with our wide range of accepted insurances. Ensuring quality care without the worry of coverage limitations."
      breadcrumbs={[{ label: "Accepted Insurances" }]}
      schema={schema}
      afterContent={<ServicesOverview />}
    >
      <p>
        Impact Health &amp; Wellness of Westerville is pleased to accept a
        wide range of insurance plans, and we&rsquo;re always working to
        negotiate new partnerships with additional insurances. Prior to your
        appointment, feel free to call Kim at 614-942-6986 to check to see if
        your insurance is accepted if you don&rsquo;t see it on the list
        below.
      </p>
      <h2 id="h-accepted-insurances-for-medical-services">
        Accepted Insurances for Medical Services
      </h2>
      <ul>
        <li>Aetna</li>
        <li>Anthem BCBS</li>
        <li>Humana</li>
        <li>Medicare</li>
        <li>Medical Mutual</li>
        <li>MediGold</li>
        <li>Ohio BWC</li>
        <li>Tricare</li>
        <li>United Healthcare</li>
      </ul>
      <h2 id="h-accepted-insurances-for-chiropractic-services">
        Accepted Insurances for Chiropractic Services
      </h2>
      <ul>
        <li>Aetna</li>
        <li>Anthem BCBS</li>
        <li>Humana</li>
        <li>Medicare</li>
        <li>Medical Mutual</li>
        <li>Ohio BWC</li>
        <li>United Healthcare</li>
      </ul>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/accepted-insurance">
      <AcceptedInsurancePage />
    </CMSRoute>
  );
}

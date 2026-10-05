import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";
import Link from "next/link";

const fallbackMetadata: Metadata = {
  title: "Advanced Diagnostics | Chiropractor Near Westerville, OH",
  description:
    "Pinpoint your core issues with precision diagnostics from a top chiropractor in Westerville, OH. Stop guessing and start healing. Schedule an appointment now!",
  alternates: { canonical: "/chiropractic-care/diagnostics/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/chiropractic-care/diagnostics", fallbackMetadata);
}

// Yoast schema graph captured from the live Diagnostics page, preserved as-is.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/chiropractic-care/diagnostics/",
    url: "https://impacthealthoh.com/chiropractic-care/diagnostics/",
    name: "Advanced Diagnostics | Chiropractor Near Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T18:16:54+00:00",
    dateModified: "2026-04-10T10:59:45+00:00",
    description:
      "Pinpoint your core issues with precision diagnostics from a top chiropractor in Westerville, OH. Stop guessing and start healing. Schedule an appointment now!",
    breadcrumb: {
      "@id":
        "https://impacthealthoh.com/chiropractic-care/diagnostics/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: [
          "https://impacthealthoh.com/chiropractic-care/diagnostics/",
        ],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id":
      "https://impacthealthoh.com/chiropractic-care/diagnostics/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Chiropractic Care",
        item: "https://impacthealthoh.com/chiropractic-care/",
      },
      { "@type": "ListItem", position: 3, name: "Diagnostics" },
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

async function ChiropracticDiagnosticsPage() {
  return (
    <PageLayout
      title="Diagnostics"
      eyebrow="Chiropractic Care"
      intro="Unlock your health's full picture with our Diagnostics testing at Impact Health & Wellness. Fast, reliable results for informed healthcare decisions."
      breadcrumbs={[
        { label: "Chiropractic Care", href: "/chiropractic-care/" },
        { label: "Diagnostics" },
      ]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/chiropractic-diagnostics.jpg",
        alt: "diagnostics at Impact Health & Wellness",
      }}
      afterContent={
        <>
          <RelatedServices
            items={getRelatedServices("/chiropractic-care/diagnostics/")}
          />
          <ServicesOverview />
        </>
      }
    >
      <p>
        Impact Health & Wellness realizes the importance of an accurate
        assessment and diagnosis of your pain and injuries. This frequently
        means that we utilize imaging techniques and other diagnostic
        tests, such as x-rays and blood tests. We utilize in-house, digital
        x-rays to optimize patient care. Digital x-rays are a great
        improvement over traditional x-rays because they quickly render an
        image, and provide several additional benefits including:
      </p>
      <ul>
        <li>High accuracy</li>
        <li>Easy to transfer</li>
        <li>High quality images</li>
        <li>
          The ability to visualize{" "}
          <Link href="/chiropractic-care/">
            skeletal issues and misalignments
          </Link>
        </li>
      </ul>
      <p>
        Our doctors will determine the necessity for diagnostic testing at
        your first visit.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/chiropractic-care/diagnostics">
      <ChiropracticDiagnosticsPage />
    </CMSRoute>
  );
}

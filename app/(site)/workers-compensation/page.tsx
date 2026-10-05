import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";

const fallbackMetadata: Metadata = {
  title: "Work Injury Care | Professional Recovery in Westerville",
  description:
    "Get expert work injury care at Impact Health & Wellness in Westerville. Personalized treatments for pain relief and recovery. We help you get back to work now!",
  alternates: { canonical: "/workers-compensation/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/workers-compensation", fallbackMetadata);
}

// Yoast schema graph captured from the live Workers Compensation page.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/workers-compensation/",
    url: "https://impacthealthoh.com/workers-compensation/",
    name: "Work Injury Care | Professional Recovery in Westerville",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T17:35:19+00:00",
    dateModified: "2026-04-10T11:31:31+00:00",
    description:
      "Get expert work injury care at Impact Health & Wellness in Westerville. Personalized treatments for pain relief and recovery. We help you get back to work now!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/workers-compensation/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/workers-compensation/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/workers-compensation/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Work Related Injuries" },
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

async function WorkersCompensationPage() {
  return (
    <PageLayout
      title="Workers Compensation"
      eyebrow="Work Related Injuries"
      intro="Secure your rights and benefits with our comprehensive Workers’ Compensation assistance. Dedicated support for your peace of mind and recovery."
      breadcrumbs={[{ label: "Workers Compensation" }]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/workers-compensation.jpg",
        alt: "workers comp",
      }}
      afterContent={
        <>
          <RelatedServices
            items={getRelatedServices("/workers-compensation/")}
          />
          <ServicesOverview />
        </>
      }
    >
      <p>
        Workers compensation is a form insurance that provides wage
        replacement and medical benefits to employees injured in the course
        of employment in exchange for mandatory relinquishment of the
        employee’s right to sue his or her employer for the tort of
        negligence. All proper and necessary treatment for conditions allowed
        under a workers compensation claim will be covered and you should not
        receive a bill for that treatment. If you have been injured at work,
        you have up to two years to file a claim with Ohio Bureau of Worker’s
        Compensation (BWC).
      </p>
      <p>
        BWC will process the application for benefits within 28 days and
        will send a letter of approval or denial for treatment. Although you
        have up to two years to file, it is significantly more beneficial to
        file within two weeks of the injury. Chiropractors study anatomy and
        physiology extensively and can treat musculoskeletal and radicular
        pain where other treatment has failed.
      </p>

      <h2>
        Our goal is to <em>INCREASE</em> range of motion, <em>IMPROVE</em>{" "}
        function, and <em>DECREASE</em> pain.
      </h2>
      <p>
        If you need to file a BWC Claim, we can help fill out any necessary
        forms related to your injury. We are happy to work with your
        employer and/or current doctors to make sure we provide the most
        appropriate care. Our goal is to successfully treat your injury and
        get you back to work as quickly and safely as possible. If there is
        no improvement recognized, a referral out to a specific specialist
        will be considered.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/workers-compensation">
      <WorkersCompensationPage />
    </CMSRoute>
  );
}

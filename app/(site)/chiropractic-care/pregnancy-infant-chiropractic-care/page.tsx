import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";
import Link from "next/link";

const fallbackMetadata: Metadata = {
  title: "Pregnancy & Infant Chiropractic Care in Westerville, OH",
  description:
    "Ensure a comfortable pregnancy with a trusted chiropractor in Westerville, OH. We provide safe and gentle adjustments for moms and babies. Book an exam now!",
  alternates: {
    canonical: "/chiropractic-care/pregnancy-infant-chiropractic-care/",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/chiropractic-care/pregnancy-infant-chiropractic-care", fallbackMetadata);
}

// Yoast schema graph captured from the live Pregnancy & Infant Chiropractic Care page, preserved as-is.
const schema = [
  {
    "@type": "WebPage",
    "@id":
      "https://impacthealthoh.com/chiropractic-care/pregnancy-infant-chiropractic-care/",
    url: "https://impacthealthoh.com/chiropractic-care/pregnancy-infant-chiropractic-care/",
    name: "Pregnancy & Infant Chiropractic Care in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T22:55:48+00:00",
    dateModified: "2026-04-10T11:00:27+00:00",
    description:
      "Ensure a comfortable pregnancy with a trusted chiropractor in Westerville, OH. We provide safe and gentle adjustments for moms and babies. Book an exam now!",
    breadcrumb: {
      "@id":
        "https://impacthealthoh.com/chiropractic-care/pregnancy-infant-chiropractic-care/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: [
          "https://impacthealthoh.com/chiropractic-care/pregnancy-infant-chiropractic-care/",
        ],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id":
      "https://impacthealthoh.com/chiropractic-care/pregnancy-infant-chiropractic-care/#breadcrumb",
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Pregnancy & Infant Chiropractic Care",
      },
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

async function PregnancyInfantChiropracticCarePage() {
  return (
    <PageLayout
      title="Pregnancy & Infant Chiropractic Care"
      eyebrow="Chiropractic Care"
      intro="Embrace wellness during pregnancy and for your infant with our chiropractic care. Safe, nurturing adjustments for comfort and health."
      breadcrumbs={[
        { label: "Chiropractic Care", href: "/chiropractic-care/" },
        { label: "Pregnancy & Infant Chiropractic Care" },
      ]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/pregnancy-infant-chiropractic-care.jpg",
        alt: "pregnancy and infant chiropractic care at Impact Health & Wellness",
      }}
      afterContent={
        <>
          <RelatedServices
            items={getRelatedServices(
              "/chiropractic-care/pregnancy-infant-chiropractic-care/"
            )}
          />
          <ServicesOverview />
        </>
      }
    >
      <h2>Chiropractic Care for Infants</h2>
      <p>
        During the process of labor and delivery, a tremendous amount of
        stress is placed on the baby&apos;s spine. Therefore, there is great
        potential for the bones of the spine to misalign, resulting in
        subluxations. If subluxations occur in a newborn, there is greater
        chance they will have trouble breast feeding, trouble digesting
        food, and recurring infections.{" "}
        <Link href="/chiropractic-care/">Chiropractic adjustments</Link> for
        newborns are very gentle and created specifically to prevent these
        problems and to allow the nervous system to function at its optimal
        level.
      </p>

      <h2>Chiropractic Care During Pregnancy</h2>
      <p>
        Chiropractic care is vital for the normal physiological function
        for both the baby and the mother during pregnancy and birth. If a
        subluxation is present during pregnancy, it will interrupt vital
        nerve flow within a mother&apos;s body and to the developing baby.
        Chiropractic care during pregnancy is designed to eliminate
        subluxations, open nerve pathways, and decrease stress on the
        mother and baby.
      </p>
      <p>
        The Webster technique is a specific chiropractic adjustment for
        pregnant mothers. This technique is used to relieve the causes of
        intrauterine restraint prior to the delivery. Other benefits of
        chiropractic care during pregnancy are reduced labor time, reduced
        chance of a cesarean birth, less pain during labor, and to
        alleviate common discomforts. Having a chiropractic care plan
        during pregnancy significantly effects the pregnancy experience.
      </p>
      <p>
        <strong>OB Consent needed prior to appointment</strong>
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/chiropractic-care/pregnancy-infant-chiropractic-care">
      <PregnancyInfantChiropracticCarePage />
    </CMSRoute>
  );
}

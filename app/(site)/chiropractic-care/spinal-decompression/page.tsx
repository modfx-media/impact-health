import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { AreaServedNote } from "@/components/page/AreaServedNote";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";
import Link from "next/link";

const fallbackMetadata: Metadata = {
  title: "Back Relief | Spinal Decompression in Westerville, OH",
  description:
    "Eliminate stubborn nerve pressure using advanced spinal decompression in Westerville, OH. Reclaim your vibrant lifestyle without surgery. Contact us to start!",
  alternates: { canonical: "/chiropractic-care/spinal-decompression/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/chiropractic-care/spinal-decompression", fallbackMetadata);
}

// Yoast schema graph captured from the live Spinal Decompression page, preserved as-is.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/chiropractic-care/spinal-decompression/",
    url: "https://impacthealthoh.com/chiropractic-care/spinal-decompression/",
    name: "Back Relief | Spinal Decompression in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T17:27:59+00:00",
    dateModified: "2026-04-10T11:00:54+00:00",
    description:
      "Eliminate stubborn nerve pressure using advanced spinal decompression in Westerville, OH. Reclaim your vibrant lifestyle without surgery. Contact us to start!",
    breadcrumb: {
      "@id":
        "https://impacthealthoh.com/chiropractic-care/spinal-decompression/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: [
          "https://impacthealthoh.com/chiropractic-care/spinal-decompression/",
        ],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id":
      "https://impacthealthoh.com/chiropractic-care/spinal-decompression/#breadcrumb",
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
      { "@type": "ListItem", position: 3, name: "Spinal Decompression" },
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

async function SpinalDecompressionPage() {
  return (
    <PageLayout
      title="Spinal Decompression"
      eyebrow="Chiropractic Care"
      intro="Rediscover comfort and mobility through our state-of-the-art Spinal Decompression therapy. Let Impact Health & Wellness guide your journey back to wellness."
      breadcrumbs={[
        { label: "Chiropractic Care", href: "/chiropractic-care/" },
        { label: "Spinal Decompression" },
      ]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/spinal-decompression.jpg",
        alt: "spinal decompression at Impact Health & Wellness",
      }}
      afterContent={
        <>
          <RelatedServices
            items={getRelatedServices(
              "/chiropractic-care/spinal-decompression/"
            )}
          />
          <ServicesOverview />
          <AreaServedNote />
        </>
      }
    >
      <p>
        Spinal decompression is a{" "}
        <Link href="/chiropractic-care/">nonsurgical therapy option</Link> that
        produces relief through motorized traction based upon weight. At
        Impact Health & Wellness, we use decompression to treat multiple
        conditions including but not limited to neck and back pain,
        sciatica, bulging and herniated discs, degenerative disc disease,
        tingling that extends down the legs, and posterior facet syndrome.
      </p>
      <p>
        Decompression works by stretching the spine, which changes the
        position and force of the spine. This change takes pressure off the
        spinal discs, gel-like cushions in your spine, by creating a
        negative pressure in the disc. Bulging or herniated discs may
        retract, taking pressure off nerves and structures in your spine.
        Sequentially, this promotes movement of water, oxygen, and other
        nutrient-rich fluids to the discs so that they may heal.
      </p>

      <h2>How Spinal Decompression Works</h2>
      <p>
        Decompression is done fully clothed, and you lay face up or face
        down on a computer-controlled table. Treatment may consist of 10-30
        sessions and last anywhere from 10-25 minutes depending on your
        specific needs. This form of therapy is not painful, yet you should
        feel a stretch after the session.
      </p>

      <h2>Who should not use spinal decompression</h2>
      <ul>
        <li>Pregnant Women</li>
        <li>Patients with Broken Vertebrae</li>
        <li>Patients with Spinal Fusion</li>
        <li>Patients with Artificial Discs or Implants in their Spine</li>
        <li>Patients with Failed Back Surgery</li>
        <li>
          Patients Who&apos;ve Had Multiple Surgeries without any Pain
          Improvement
        </li>
      </ul>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/chiropractic-care/spinal-decompression">
      <SpinalDecompressionPage />
    </CMSRoute>
  );
}

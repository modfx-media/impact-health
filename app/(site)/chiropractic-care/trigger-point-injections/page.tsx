import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";
import Link from "next/link";

const fallbackMetadata: Metadata = {
  title: "Trigger Point Injections & Pain Management in Westerville",
  description:
    "Melt away intense muscle knots with Trigger Point Injections in Westerville, Ohio. Experience rapid relaxation and enhanced mobility today. Secure your spot!",
  alternates: { canonical: "/chiropractic-care/trigger-point-injections/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/chiropractic-care/trigger-point-injections", fallbackMetadata);
}

// Yoast schema graph captured from the live Trigger Point Injections page, preserved as-is.
const schema = [
  {
    "@type": "WebPage",
    "@id":
      "https://impacthealthoh.com/chiropractic-care/trigger-point-injections/",
    url: "https://impacthealthoh.com/chiropractic-care/trigger-point-injections/",
    name: "Trigger Point Injections & Pain Management in Westerville",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T23:00:39+00:00",
    dateModified: "2026-04-10T11:01:17+00:00",
    description:
      "Melt away intense muscle knots with Trigger Point Injections in Westerville, Ohio. Experience rapid relaxation and enhanced mobility today. Secure your spot!",
    breadcrumb: {
      "@id":
        "https://impacthealthoh.com/chiropractic-care/trigger-point-injections/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: [
          "https://impacthealthoh.com/chiropractic-care/trigger-point-injections/",
        ],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id":
      "https://impacthealthoh.com/chiropractic-care/trigger-point-injections/#breadcrumb",
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
      { "@type": "ListItem", position: 3, name: "Trigger Point Injections" },
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

async function TriggerPointInjectionsPage() {
  return (
    <PageLayout
      title="Trigger Point Injections"
      eyebrow="Chiropractic Care"
      intro="Experience the benefits of Trigger Point Injections. A precise solution for chronic pain, offering immediate relief and improved mobility."
      breadcrumbs={[
        { label: "Chiropractic Care", href: "/chiropractic-care/" },
        { label: "Trigger Point Injections" },
      ]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/trigger-point-injections.jpg",
        alt: "trigger point injections at Impact Health & Wellness",
      }}
      afterContent={
        <>
          <RelatedServices
            items={getRelatedServices(
              "/chiropractic-care/trigger-point-injections/"
            )}
          />
          <ServicesOverview />
        </>
      }
    >
      <p>
        Trigger Point Injections, or TPI, is a procedure used to treat
        painful areas of muscle that contain trigger points. Trigger points
        are pressure points that have developed within the muscle. When
        people commonly speak of having a &ldquo;knot&rdquo; in their neck
        or back they are referring to these.
      </p>
      <p>
        Trigger points can result in pain in the surrounding area, muscle
        weakness, and restricted{" "}
        <Link href="/chiropractic-care/">
          spinal movement and flexibility
        </Link>
        . Our medical providers at Anodyne of Westerville specialize in the
        treatment of this condition through TPI therapy. These injections
        are always performed by a medical provider and only take a matter
        of minutes.
      </p>
      <p>
        Receiving a Trigger Point Injection also makes chiropractic care
        and physical therapy treatment more effective since the area being
        treated has become less inflamed and causing less pain in the
        surrounding area being treated.
      </p>
      <p>
        Our goal with most trigger point therapy is to reduce localized
        inflammatory reactions, improve tissue tone, and restore normal
        muscle movement.
      </p>

      <h2>Conditions Treated by Trigger Point Injections</h2>
      <h3>Chronic pain in the:</h3>
      <ul>
        <li>Lower Back</li>
        <li>Neck</li>
        <li>Arms</li>
        <li>Legs</li>
      </ul>
      <h3>Pain associated with certain medical conditions:</h3>
      <ul>
        <li>Fibromyalgia</li>
        <li>Myofascial Pain Syndrome</li>
        <li>Tension Headaches</li>
      </ul>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/chiropractic-care/trigger-point-injections">
      <TriggerPointInjectionsPage />
    </CMSRoute>
  );
}

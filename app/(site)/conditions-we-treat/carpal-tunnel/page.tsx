import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";

const fallbackMetadata: Metadata = {
  title: "Non-Invasive Carpal Tunnel Treatment in Westerville, OH",
  description:
    "Get carpal tunnel relief at Impact Health & Wellness in Westerville. Our non-invasive treatments reduce wrist pain and restore function. Book your visit now!",
  alternates: { canonical: "/conditions-we-treat/carpal-tunnel/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/conditions-we-treat/carpal-tunnel", fallbackMetadata);
}

const relatedTreatments = [
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Physical Therapy and Rehabilitation", href: "/chiropractic-care/physical-therapy/" },
  { label: "Laser Therapy", href: "/laser-therapy/" },
  { label: "Trigger Point Injections", href: "/chiropractic-care/trigger-point-injections/" },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/conditions-we-treat/carpal-tunnel/",
    url: "https://impacthealthoh.com/conditions-we-treat/carpal-tunnel/",
    name: "Non-Invasive Carpal Tunnel Treatment in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T19:19:33+00:00",
    dateModified: "2026-04-10T11:07:44+00:00",
    description:
      "Get carpal tunnel relief at Impact Health & Wellness in Westerville. Our non-invasive treatments reduce wrist pain and restore function. Book your visit now!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/conditions-we-treat/carpal-tunnel/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/conditions-we-treat/carpal-tunnel/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/conditions-we-treat/carpal-tunnel/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://impacthealthoh.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conditions We Treat",
        item: "https://impacthealthoh.com/conditions-we-treat/",
      },
      { "@type": "ListItem", position: 3, name: "Carpal Tunnel" },
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

async function CarpalTunnelPage() {
  return (
    <PageLayout
      title="Carpal Tunnel"
      intro="Understanding Carpal Tunnel: Learn about the causes, symptoms, and discomfort associated with this common condition affecting the hands."
      image={{ src: "/images/conditions/carpal-tunnel.jpg", alt: "Patient with wrist and hand pain from carpal tunnel syndrome" }}
      breadcrumbs={[
        { label: "Conditions We Treat", href: "/conditions-we-treat/" },
        { label: "Carpal Tunnel" },
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
        The Carpal Canal connects your hand to your forearm. Carpal Tunnel
        Syndrome occurs when one or more of the tendons in your Carpal Canal
        swell or degenerate, which causes the median nerve becoming trapped or
        squeezed, which leads to the pain and discomfort associated with
        Carpal Tunnel. Typical symptoms include aching, stiffness, and
        weakness in the hands, especially at night.
      </p>

      <h2>Common Signs of Carpal Tunnel Syndrome</h2>
      <ul>
        <li>Numbness or tingling in the thumb, index, and middle fingers</li>
        <li>Weak grip strength or difficulty holding small objects</li>
        <li>Pain that worsens at night or after repetitive wrist motion</li>
        <li>A pins-and-needles sensation that radiates up toward the forearm</li>
      </ul>

      <h2>What Causes Carpal Tunnel Syndrome</h2>
      <p>
        Carpal Tunnel Syndrome is often linked to repetitive hand and wrist
        motions, awkward wrist positioning, and prolonged pressure on the
        median nerve. Certain health factors, including pregnancy, diabetes,
        thyroid conditions, and rheumatoid arthritis, can also increase your
        risk by contributing to swelling within the carpal canal.
      </p>

      <h2>Why Choose Impact for Carpal Tunnel Treatment</h2>
      <p>
        Our team takes a non-invasive approach to Carpal Tunnel relief,
        combining chiropractic adjustments, laser therapy, and trigger point
        injections to reduce inflammation and restore nerve function, helping
        you avoid surgery whenever possible.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/conditions-we-treat/carpal-tunnel">
      <CarpalTunnelPage />
    </CMSRoute>
  );
}

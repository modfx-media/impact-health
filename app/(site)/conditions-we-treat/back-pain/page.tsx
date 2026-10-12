import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import Link from "next/link";

const fallbackMetadata: Metadata = {
  title: "Back Pain Treatment Chiropractor in Westerville, OH",
  description:
    "Find back pain relief at Impact Health & Wellness. Our expert chiropractor in Westerville, OH targets the root cause for lasting, effective relief. Contact us!",
  alternates: { canonical: "/conditions-we-treat/back-pain/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/conditions-we-treat/back-pain", fallbackMetadata);
}

const relatedTreatments = [
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Spinal Decompression", href: "/chiropractic-care/spinal-decompression/" },
  { label: "Physical Therapy and Rehabilitation", href: "/chiropractic-care/physical-therapy/" },
  { label: "Trigger Point Injections", href: "/chiropractic-care/trigger-point-injections/" },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/conditions-we-treat/back-pain/",
    url: "https://impacthealthoh.com/conditions-we-treat/back-pain/",
    name: "Back Pain Treatment Chiropractor in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-12T21:32:19+00:00",
    dateModified: "2026-04-10T11:07:20+00:00",
    description:
      "Find back pain relief at Impact Health & Wellness. Our expert chiropractor in Westerville, OH targets the root cause for lasting, effective relief. Contact us!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/conditions-we-treat/back-pain/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/conditions-we-treat/back-pain/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/conditions-we-treat/back-pain/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://impacthealthoh.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conditions We Treat",
        item: "https://impacthealthoh.com/conditions-we-treat/",
      },
      { "@type": "ListItem", position: 3, name: "Back Pain" },
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

async function BackPainPage() {
  return (
    <PageLayout
      title="Back Pain"
      intro="Experience lasting relief from back pain with Impact's multidisciplinary approach, including chiropractic care, therapy, and non-surgical treatments."
      image={{ src: "/images/conditions/back-pain.jpg", alt: "Chiropractor evaluating a patient's back pain" }}
      breadcrumbs={[
        { label: "Conditions We Treat", href: "/conditions-we-treat/" },
        { label: "Back Pain" },
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
        Back pain, both upper and lower, can be described as a dull ache, a
        shooting or piercing pain, spasms, stiffness, or a burning sensation.
        Back pain can lead to discomfort in the arms and legs as well as the
        hands and feet. A few symptoms of back pain include numbness or
        weakness in the legs and arms. Treatments for this condition include:{" "}
        <Link href="/chiropractic-care/">Chiropractic Care</Link>,{" "}
        <Link href="/chiropractic-care/spinal-decompression/">
          Spinal Decompression
        </Link>
        , Pain Management,{" "}
        <Link href="/chiropractic-care/physical-therapy/">
          Physical Therapy and Rehabilitation
        </Link>
        , and{" "}
        <Link href="/chiropractic-care/trigger-point-injections/">
          Trigger Point Injections
        </Link>
        .
      </p>

      <h2>Common Back Injuries and Conditions We Treat</h2>
      <ul>
        <li>Bulging Discs</li>
        <li>Degenerative Disc Disease</li>
        <li>Herniated Discs</li>
        <li>Spinal Stenosis</li>
      </ul>

      <h2>Why Choose Impact for Back Pain Treatment</h2>
      <p>
        At Impact, our multidisciplinary team is dedicated to identifying and
        treating your back condition at its source so that we can deliver
        healing that lasts – without surgical intervention. When you choose
        Impact, you’re partnering with extraordinary doctors and providers who
        put you and your health first.
      </p>

      <h2>Understanding Back Pain</h2>
      <p>
        Back pain is one of the world’s leading causes of disability, and one
        of the most common reasons for doctor’s office visits. In fact, as
        many as 75% – 85% of Americans will experience back pain at some point
        in their lives. Your pain may be concentrated in a region of your neck
        or back, or may radiate down to your legs.
      </p>
      <p>
        You also may find that your pain worsens with movement like walking,
        lifting, bending, and twisting. For some people, back pain can be
        debilitating, impacting sleep, activity level, and emotional
        well-being.
      </p>
      <p>Your back and neck pain can have many different causes:</p>
      <ul>
        <li>Trauma from a sports injury or accident</li>
        <li>Irritated or inflamed nerves</li>
        <li>Ruptured discs</li>
        <li>Muscle strains</li>
        <li>Ligament sprains</li>
        <li>In some cases, a more serious condition like infection or cancer</li>
      </ul>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/conditions-we-treat/back-pain">
      <BackPainPage />
    </CMSRoute>
  );
}

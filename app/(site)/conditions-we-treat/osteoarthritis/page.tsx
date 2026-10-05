import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";

const fallbackMetadata: Metadata = {
  title: "Osteoarthritis Treatment & Joint Pain Relief in Westerville",
  description:
    "For osteoarthritis treatment in Westerville, Impact Health & Wellness offers customized care for joint pain relief and improved function. Reclaim your life now!",
  alternates: { canonical: "/conditions-we-treat/osteoarthritis/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/conditions-we-treat/osteoarthritis", fallbackMetadata);
}

const relatedTreatments = [
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Regenerative Medicine", href: "/regenerative-medicine/" },
  { label: "PRP Therapy", href: "/prp-therapy/" },
  { label: "HA Gel Injections", href: "/ha-gel-injections/" },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/conditions-we-treat/osteoarthritis/",
    url: "https://impacthealthoh.com/conditions-we-treat/osteoarthritis/",
    name: "Osteoarthritis Treatment & Joint Pain Relief in Westerville",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T20:06:45+00:00",
    dateModified: "2026-04-10T11:10:59+00:00",
    description:
      "For osteoarthritis treatment in Westerville, Impact Health & Wellness offers customized care for joint pain relief and improved function. Reclaim your life now!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/conditions-we-treat/osteoarthritis/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/conditions-we-treat/osteoarthritis/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/conditions-we-treat/osteoarthritis/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://impacthealthoh.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conditions We Treat",
        item: "https://impacthealthoh.com/conditions-we-treat/",
      },
      { "@type": "ListItem", position: 3, name: "Osteoarthritis" },
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

async function OsteoarthritisPage() {
  return (
    <PageLayout
      title="Osteoarthritis"
      intro="Explore comprehensive insights into osteoarthritis: from its origins and symptoms to innovative treatments aimed at addressing its root causes."
      image={{ src: "/images/conditions/osteoarthritis.jpg", alt: "Provider examining a patient's joint affected by osteoarthritis" }}
      breadcrumbs={[
        { label: "Conditions We Treat", href: "/conditions-we-treat/" },
        { label: "Osteoarthritis" },
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
        Osteoarthritis is believed to be caused by mechanical stress on the
        joint and low-grade inflammatory processes. It develops as cartilage
        is lost and the underlying bone becomes affected. As pain may make it
        difficult to exercise, muscle loss may occur. Diagnosis is typically
        based on signs and symptoms, with medical imaging and other tests
        occasionally used to support or rule out other problems. In contrast
        to rheumatoid arthritis, which is primarily an inflammatory
        condition, in osteoarthritis, the joints do not become hot or red.
        Osteoarthritis is most commonly treated with pain medication where
        with Impact Health & Wellness we effectively treat the cause and
        prevention of osteoarthritis.
      </p>

      <h2>Common Osteoarthritis Symptoms</h2>
      <ul>
        <li>Joint stiffness, especially after rest or first thing in the morning</li>
        <li>Swelling around the affected joint</li>
        <li>Pain that worsens with movement or weight-bearing activity</li>
        <li>Decreased range of motion and joint tenderness</li>
      </ul>

      <h2>Joints Most Affected by Osteoarthritis</h2>
      <p>
        Osteoarthritis most commonly develops in the knees, hips, hands, and
        spine, joints that absorb repeated stress over time. Left unmanaged,
        it can progressively limit mobility and independence.
      </p>

      <h2>Why Choose Impact for Osteoarthritis Care</h2>
      <p>
        We combine regenerative medicine, PRP therapy, and HA gel injections
        with chiropractic care to reduce joint inflammation, rebuild
        cartilage support, and help you stay active without relying solely on
        pain medication or surgery.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/conditions-we-treat/osteoarthritis">
      <OsteoarthritisPage />
    </CMSRoute>
  );
}

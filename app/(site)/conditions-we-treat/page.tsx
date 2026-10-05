import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { BenefitGrid } from "@/components/page/BenefitGrid";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ConditionChip } from "@/components/home/ConditionChip";
import { Reveal } from "@/components/motion/Reveal";

const fallbackMetadata: Metadata = {
  title: "Conditions We Treat in Westerville, OH",
  description:
    "Impact Health & Wellness in Westerville, OH treats a wide range of conditions, from chronic pain to sports injuries. Find relief today. Schedule an exam!",
  alternates: { canonical: "/conditions-we-treat/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/conditions-we-treat", fallbackMetadata);
}

const conditions = [
  { label: "Back Pain", href: "/conditions-we-treat/back-pain/" },
  { label: "Carpal Tunnel", href: "/conditions-we-treat/carpal-tunnel/" },
  { label: "Chronic Pain", href: "/conditions-we-treat/chronic-pain/" },
  { label: "Foot & Ankle Pain", href: "/conditions-we-treat/foot-ankle-pain/" },
  { label: "Hip Pain", href: "/conditions-we-treat/hip-pain/" },
  { label: "Knee Pain", href: "/conditions-we-treat/knee-pain/" },
  {
    label: "Migraines and Headaches",
    href: "/conditions-we-treat/migraines-and-headaches/",
  },
  { label: "Neck Pain", href: "/conditions-we-treat/neck-pain/" },
  {
    label: "Neuropathy",
    href: "/neuropathy-treatments/#Understanding_Neuropathy",
  },
  { label: "Osteoarthritis", href: "/conditions-we-treat/osteoarthritis/" },
  { label: "Shoulder Pain", href: "/conditions-we-treat/shoulder-pain/" },
  { label: "Sports Injuries", href: "/conditions-we-treat/sports-injuries/" },
  { label: "Whiplash", href: "/conditions-we-treat/whiplash/" },
];

const relatedTreatments = [
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Physical Therapy and Rehabilitation", href: "/chiropractic-care/physical-therapy/" },
  { label: "Regenerative Medicine", href: "/regenerative-medicine/" },
  { label: "Neuropathy Treatments", href: "/neuropathy-treatments/" },
];

const benefits = [
  {
    title: "Root-Cause Approach",
    description:
      "We identify what's actually driving your pain instead of only treating the symptoms.",
  },
  {
    title: "Multidisciplinary Team",
    description:
      "Chiropractors, physical therapists, and medical providers collaborate on your care plan.",
  },
  {
    title: "Non-Surgical Solutions",
    description:
      "Our treatments are designed to help you avoid surgery and reduce reliance on medication.",
  },
  {
    title: "Personalized Plans",
    description:
      "Every treatment plan is tailored to your specific condition, goals, and lifestyle.",
  },
];

// Yoast schema graph captured from the live Conditions We Treat page, preserved as-is.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/conditions-we-treat/",
    url: "https://impacthealthoh.com/conditions-we-treat/",
    name: "Conditions We Treat in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-12T21:32:19+00:00",
    dateModified: "2026-04-10T11:07:20+00:00",
    description:
      "Impact Health & Wellness in Westerville, OH treats a wide range of conditions, from chronic pain to sports injuries. Find relief today. Schedule an exam!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/conditions-we-treat/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/conditions-we-treat/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/conditions-we-treat/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://impacthealthoh.com/" },
      { "@type": "ListItem", position: 2, name: "Conditions We Treat" },
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

async function ConditionsWeTreatPage() {
  return (
    <PageLayout
      title="Conditions We Treat"
      eyebrow="Find Relief"
      intro="From chronic pain to sports injuries, Impact Health & Wellness treats a wide range of conditions with a multidisciplinary, non-surgical approach that targets the root cause."
      image={{
        src: "/images/conditions/back-pain.jpg",
        alt: "Provider consulting with a patient about their condition",
      }}
      breadcrumbs={[{ label: "Conditions We Treat" }]}
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
        Pain can show up anywhere&mdash;your back, joints, nerves, or the
        aftermath of an injury&mdash;and it rarely has just one cause. At
        Impact Health &amp; Wellness, our providers work together across
        chiropractic care, physical therapy, and regenerative medicine to
        diagnose what&apos;s really going on and build a plan that gets you
        lasting relief, not just a temporary fix.
      </p>

      <h2>Explore Conditions We Treat</h2>
      <div className="not-prose grid gap-5 sm:grid-cols-2">
        {conditions.map((condition, i) => (
          <Reveal key={condition.label} delay={(i % 6) * 0.05} className="h-full">
            <ConditionChip label={condition.label} href={condition.href} />
          </Reveal>
        ))}
      </div>

      <h2>Why Choose Impact Health &amp; Wellness</h2>
      <p>
        Whatever condition brought you here, our team is committed to
        non-surgical, long-term relief:
      </p>
      <BenefitGrid items={benefits} />

      <h2>Not Sure Where to Start?</h2>
      <p>
        Don&apos;t see your exact condition listed above? Reach out
        anyway&mdash;our team can still evaluate your symptoms and point you
        toward the right treatment path.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/conditions-we-treat">
      <ConditionsWeTreatPage />
    </CMSRoute>
  );
}

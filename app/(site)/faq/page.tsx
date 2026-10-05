import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { Faq, faqSchema } from "@/components/page/Faq";
import { ServicesOverview } from "@/components/home/ServicesOverview";

const fallbackMetadata: Metadata = {
  title: "Frequently Asked Questions | Impact Health & Wellness",
  description:
    "Find answers to frequently asked questions about Impact Health & Wellness in Westerville, OH, our services, insurance, and appointments.",
  alternates: { canonical: "/faq/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/faq", fallbackMetadata);
}

const faqItems = [
  {
    question: "I've been to all kinds of doctors, what do you do differently?",
    answer:
      "At Impact, we don't just treat a number on a lab result, each individual patient requires their own unique treatment plan. We approach your needs with restoring cellular function in mind. Every cell operates with a specific purpose and as we are exposed to constant toxins and stress, our cells aren't able to function at their fullest capacity. The more we can do to restore cellular function, the more we help your body get the most out of itself, and the better a person feels today as well as in the future. Our approach creates sustained, long-lasting results that can be felt.",
  },
  {
    question: "What is physical medicine?",
    answer:
      "Physical medicine and rehabilitation (PM&R), also known as physiatry or rehabilitation medicine, aims to enhance and restore functional ability and quality of life to those with physical impairments or disabilities affecting the brain, spinal cord, nerves, bones, joints, ligaments, muscles, and tendons. The goals of this approach are to maximize your independence in activities of daily living and improve quality of life.",
  },
  {
    question: "What is functional medicine?",
    answer:
      "Functional Medicine approaches health care comprehensively and aims to treat and manage disease by addressing the underlying cause of your symptoms. Using a combination of traditional and alternative approaches, we focus on total body health and wellness for the rest of your life, not just acute pain care.",
  },
  {
    question: "What is medically-integrated, collaborative medicine?",
    answer:
      "Integrative medicine is the practice of medicine that reaffirms the importance of the relationship between practitioner and patient, focuses on the whole person, is evidence-informed, and makes use of all appropriate therapeutic approaches, healthcare professionals, and disciplines to achieve optimal health and healing.",
  },
  {
    question: "How is Impact different from other chiropractic office visits?",
    answer:
      "While chiropractic care is an important and fundamental part of our program, it is not the only service center that improves quality of life. Our use of various modalities like scar tissue release, spinal decompression, trigger point release, spinal rehabilitation protocols, Shockwave therapy, IV infusion, laser therapy, and other methods effectively address a wide range of spinal and joint conditions. Some conditions require more than chiropractic care alone. Our belief and practice is to address the muscle, nerve, and structure simultaneously to create lasting, long-term improvements.",
  },
  {
    question: "Are these services covered by insurance?",
    answer:
      "We accept a variety of insurance providers. Some of our services are covered, while others are not. Coverage may also vary from provider to provider. We always verify and review insurance benefits prior to treatment so that you are aware of any out-of-pocket costs prior to starting treatment.",
  },
  {
    question: "What can I expect at a new patient evaluation?",
    answer:
      "We take a multi-disciplinary approach to examining every person to determine what services might be beneficial based on each your individual needs. Our team consists of chiropractors, Nurse Practitioners, Medical Doctors, a Physical Therapist, and a case manager. No two people are the same, and we take a person-by-person approach. We look at and ask about your medical history, physical examination findings, x-rays (if necessary), and other aspects of your health to prepare the best course of action specifically for you.",
  },
  {
    question: "What treatments are used by your office?",
    answer:
      "We offer an array of treatments including Physical Therapy, Chiropractic Care, Regenerative Injections, Massage Therapy, and much more. A full list of treatments and services can be found on our Services page.",
  },
];

// Yoast schema graph pattern matched to other pages, plus a real FAQPage node built from faqItems.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/faq/",
    url: "https://impacthealthoh.com/faq/",
    name: "Frequently Asked Questions | Impact Health & Wellness",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    description:
      "Find answers to frequently asked questions about Impact Health & Wellness in Westerville, OH, our services, insurance, and appointments.",
    breadcrumb: { "@id": "https://impacthealthoh.com/faq/#breadcrumb" },
    inLanguage: "en-US",
    potentialAction: [
      { "@type": "ReadAction", target: ["https://impacthealthoh.com/faq/"] },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/faq/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "FAQ" },
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
  faqSchema(faqItems),
];

async function FaqPage() {
  return (
    <PageLayout
      title="Frequently Asked Questions"
      intro="At Impact Health & Wellness, we offer a holistic approach to health, combining Physical Medicine, Traditional Medicine, and Functional Medicine to support your wellness journey."
      breadcrumbs={[{ label: "FAQ" }]}
      schema={schema}
      afterContent={<ServicesOverview />}
    >
      <p>
        Discover how we can help you achieve a healthier, more balanced
        lifestyle through our dedicated approach to care. Explore our FAQs
        below to learn more about our services and how we&rsquo;re committed
        to guiding you towards optimal health. Your pathway to improved
        well-being starts here at Impact.
      </p>
      <Faq items={faqItems} />
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/faq">
      <FaqPage />
    </CMSRoute>
  );
}

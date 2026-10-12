import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/page/PageLayout";
import { BenefitGrid } from "@/components/page/BenefitGrid";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";

const fallbackMetadata: Metadata = {
  title: "Personalized Physical Therapy Services in Westerville, Ohio",
  description:
    "Regain strength with personalized physical therapy in Westerville, Ohio. We guide your body back to peak performance swiftly. Call us to begin recovering!",
  alternates: { canonical: "/chiropractic-care/physical-therapy/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/chiropractic-care/physical-therapy", fallbackMetadata);
}

// Yoast schema graph captured from the live Physical Therapy page.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/chiropractic-care/physical-therapy/",
    url: "https://impacthealthoh.com/chiropractic-care/physical-therapy/",
    name: "Personalized Physical Therapy Services in Westerville, Ohio",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T18:27:02+00:00",
    dateModified: "2026-04-10T11:00:04+00:00",
    description:
      "Regain strength with personalized physical therapy in Westerville, Ohio. We guide your body back to peak performance swiftly. Call us to begin recovering!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/chiropractic-care/physical-therapy/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: [
          "https://impacthealthoh.com/chiropractic-care/physical-therapy/",
        ],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/chiropractic-care/physical-therapy/#breadcrumb",
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
      { "@type": "ListItem", position: 3, name: "Physical Therapy" },
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

const whyChooseUs = [
  {
    title: "Expertise and Experience",
    description:
      "Our physical therapist has extensive knowledge and expertise in a wide range of conditions. With years of experience, she is equipped to treat a variety of conditions from sports injuries and post-surgical rehabilitation to chronic pain management and neurological disorders.",
  },
  {
    title: "Tailored Treatment Plans",
    description:
      "The team at Impact understands that everyone is unique and that's why every treatment plan is designed around patient's goals. Our team will design a personalized multidisciplinary treatment plan that addresses your specific condition and helps you achieve optimal results.",
  },
  {
    title: "Comprehensive Services",
    description:
      "We offer a comprehensive range of physical therapy services to address various musculoskeletal and neurological conditions. Our services include, but are not limited to, orthopedic rehabilitation, sports physical therapy, pediatric therapy, geriatric therapy, balance and fall prevention, and pre- and post- operative care.",
  },
  {
    title: "Collaborative Approach",
    description:
      "At Impact, we believe that the best outcomes are achieved through a collaborative effort. We work closely with a network of healthcare providers including physicians and chiropractors to ensure the proper approach to your care. Our team will communicate and collaborate with your healthcare team to achieve the best possible results.",
  },
  {
    title: "Compassionate Care",
    description:
      "We genuinely care about our patients, and strive to create a warm and supportive environment. Our goal is that you feel comfortable and encouraged throughout your physical therapy journey. Our team is dedicated to providing exceptional care and wants to empower you to take an active role in your recovery.",
  },
  {
    title: "Convenient Scheduling Options",
    description:
      "We understand that your time is valuable and offer flexible scheduling options to accommodate your busy lifestyle. This ensures that you can receive the care you need at a time that works best for you.",
  },
];

async function PhysicalTherapyPage() {
  return (
    <PageLayout
      title="Physical Therapy"
      eyebrow="Chiropractic Care"
      intro="Personalized, evidence-based physical therapy to help you regain your strength, improve your mobility, and relieve your pain."
      breadcrumbs={[
        { label: "Chiropractic Care", href: "/chiropractic-care/" },
        { label: "Physical Therapy" },
      ]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/physical-therapy.jpg",
        alt: "physical therapy",
      }}
      afterContent={
        <>
          <RelatedServices
            items={getRelatedServices("/chiropractic-care/physical-therapy/")}
          />
          <ServicesOverview />
        </>
      }
    >
      <p>
        At <Link href="/">Impact Health &amp; Wellness</Link>, we are dedicated to
        helping you regain your strength, improve your mobility, and
        relieve your pain through personalized and evidence-based physical
        therapy services.{" "}
        <Link href="/staff/eve-ciacciarelli-pt/">Eve Ciacciarelli</Link>, our
        physical therapist, is highly skilled, compassionate, and committed
        to delivering exceptional care to patients of all ages and
        conditions.
      </p>
      <p>
        Utilizing her background in outpatient settings, Eve works to not
        only treat your musculoskeletal (i.e., injuries, pain, etc.) and
        neurological (i.e., stroke, TBI, etc.) conditions, but also to help
        you understand how those conditions developed in the first place.
      </p>
      <p>
        Our step-by-step approach to treatment involves decreasing
        symptoms, restoring functional mobility, improving strength and
        neuromuscular control, promoting stabilization, and providing for
        efficient and lasting results.
      </p>
      <p>
        Rehab therapy treatment interventions include various manual soft
        tissue techniques and joint mobilizations, corrective exercises and
        home programs, functional movement training, and patient education
        as part of our integrated approach to help you feel and function at
        your best.
      </p>

      <h2>Why Should You Choose Impact for Your PT Needs?</h2>
      <BenefitGrid items={whyChooseUs} />

      <p>
        We are currently accepting most major medical insurances for
        physical therapy services.
      </p>
      <p>
        Take the first step towards a pain-free and active life by
        contacting Impact at{" "}
        <a href="tel:6149426986">614-942-6986</a> today! Our friendly staff
        is ready to assist you in scheduling your initial consultation and
        answer any questions you may have. Trust us to be your partner in
        your recovery and rehab.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/chiropractic-care/physical-therapy">
      <PhysicalTherapyPage />
    </CMSRoute>
  );
}

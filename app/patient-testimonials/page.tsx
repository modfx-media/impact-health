import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { Testimonials } from "@/components/home/Testimonials";
import { contactInfo } from "@/lib/nav-data";
import {
  getDisplayedGoogleReviews,
  googleReviewSchema,
} from "@/lib/google-reviews";

export const metadata: Metadata = {
  title: "Patient Testimonials | Impact Health & Wellness",
  description:
    "Read real patient testimonials and Google reviews for Impact Health & Wellness in Westerville, OH, and see how our team's care has helped patients feel better.",
  alternates: { canonical: "/patient-testimonials/" },
};

// Yoast schema graph pattern matched to other pages.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/patient-testimonials/",
    url: "https://impacthealthoh.com/patient-testimonials/",
    name: "Patient Testimonials | Impact Health & Wellness",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    description:
      "Read real patient testimonials and Google reviews for Impact Health & Wellness in Westerville, OH, and see how our team's care has helped patients feel better.",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/patient-testimonials/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/patient-testimonials/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/patient-testimonials/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Patient Testimonials" },
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

export default async function PatientTestimonialsPage() {
  const payload = await getDisplayedGoogleReviews();
  const schemaWithReviews = schema.map((node) =>
    node["@type"] === "Organization"
      ? { ...node, ...googleReviewSchema(payload) }
      : node,
  );

  return (
    <PageLayout
      title="Patient Testimonials"
      intro="Read firsthand accounts of how Impact Health & Wellness has positively influenced our patients' lives and well-being."
      breadcrumbs={[{ label: "Patient Testimonials" }]}
      schema={schemaWithReviews}
      showSidebar={false}
      afterContent={<Testimonials />}
    >
      <p>
        At Impact Health &amp; Wellness in Westerville, Ohio, our patients
        are at the center of everything we do. Below is a glimpse of what
        real patients share about their experience with our chiropractors,
        Nurse Practitioners, Medical Doctors and Physical Therapist &mdash;
        from pain relief to compassionate, personalized care.
      </p>
      <p>
        Ready to start your own care journey?{" "}
        <a
          href={contactInfo.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more of our Google reviews
        </a>{" "}
        or reach out to schedule a consultation.
      </p>
    </PageLayout>
  );
}

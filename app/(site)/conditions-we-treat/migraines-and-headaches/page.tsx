import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";

const fallbackMetadata: Metadata = {
  title: "Natural Migraine & Headache Relief in Westerville, OH",
  description:
    "Find natural migraine and headache relief at Impact Health & Wellness in Westerville, OH. Our holistic approach reduces pain & prevents recurrence. Learn more!",
  alternates: { canonical: "/conditions-we-treat/migraines-and-headaches/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/conditions-we-treat/migraines-and-headaches", fallbackMetadata);
}

const relatedTreatments = [
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Laser Therapy", href: "/laser-therapy/" },
  { label: "Trigger Point Injections", href: "/chiropractic-care/trigger-point-injections/" },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/conditions-we-treat/migraines-and-headaches/",
    url: "https://impacthealthoh.com/conditions-we-treat/migraines-and-headaches/",
    name: "Natural Migraine & Headache Relief in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T19:56:54+00:00",
    dateModified: "2026-04-10T11:09:51+00:00",
    description:
      "Find natural migraine and headache relief at Impact Health & Wellness in Westerville, OH. Our holistic approach reduces pain & prevents recurrence. Learn more!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/conditions-we-treat/migraines-and-headaches/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/conditions-we-treat/migraines-and-headaches/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/conditions-we-treat/migraines-and-headaches/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://impacthealthoh.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conditions We Treat",
        item: "https://impacthealthoh.com/conditions-we-treat/",
      },
      { "@type": "ListItem", position: 3, name: "Migraines and Headaches" },
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

async function MigrainesAndHeadachesPage() {
  return (
    <PageLayout
      title="Migraines and Headaches"
      intro="Natural, holistic relief from migraines and headaches at Impact Health & Wellness."
      breadcrumbs={[
        { label: "Conditions We Treat", href: "/conditions-we-treat/" },
        { label: "Migraines and Headaches" },
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
        Migraines are headaches characterized by their recurrence and mild to
        severe symptoms. Most often, migraines affect what feels like half of
        a person’s head, and can range from minutes to days in length. The
        most commonly associated symptoms are nausea, vomiting, and
        sensitivity to light, sound, or smell. The pain is generally made
        worse by physical activity.
      </p>
      <p>
        Headaches are one of the most common pain conditions – causing pain
        in the head, face, upper neck, and shoulders. Some headaches are mild
        and short-lived while others are severe and debilitating.
      </p>
      <p>
        Headache pain is caused by specific signals interacting with your
        brain, blood vessels, and nerves. These chemical interactions result
        in nerves sending pain signals to your brain.
      </p>

      <h2>The Two Types of Headaches</h2>
      <p>
        There are a wide variety of headaches, but most fall into one of two
        broad categories: primary headaches and secondary headaches. Primary
        headaches are caused by dysfunction or overactivity of pain-sensitive
        structures in your head, not by an underlying, or secondary,
        disease. Stress and disrupted sleep patterns are often triggers for
        primary headaches. A migraine is an extremely painful type of primary
        headache.
      </p>
      <p>
        Migraines can cause you to feel intense, throbbing, and often
        debilitating headache pain. Often felt on one side of your head,
        migraines can last anywhere from a few hours to several days.
      </p>
      <p>
        Secondary headaches are a symptom of an underlying disease or
        condition that is activating pain-sensitive nerves in your head.
        Secondary headaches vary in severity and can be caused by an
        incredibly diverse and wide range of diseases.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/conditions-we-treat/migraines-and-headaches">
      <MigrainesAndHeadachesPage />
    </CMSRoute>
  );
}

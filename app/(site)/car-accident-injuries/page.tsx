import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";

const fallbackMetadata: Metadata = {
  title: "Auto Injury Care | Spinal Decompression Westerville, OH",
  description:
    "Heal from car accident trauma using gentle spinal decompression in Westerville, OH. We help you bounce back to optimal vitality safely. Book a session now!",
  alternates: { canonical: "/car-accident-injuries/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/car-accident-injuries", fallbackMetadata);
}

// Yoast schema graph captured from the live Auto Related Injuries page.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/car-accident-injuries/",
    url: "https://impacthealthoh.com/car-accident-injuries/",
    name: "Auto Injury Care | Spinal Decompression Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T19:07:58+00:00",
    dateModified: "2026-04-10T10:57:38+00:00",
    description:
      "Heal from car accident trauma using gentle spinal decompression in Westerville, OH. We help you bounce back to optimal vitality safely. Book a session now!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/car-accident-injuries/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/car-accident-injuries/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/car-accident-injuries/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Auto Related Injuries" },
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

async function CarAccidentInjuriesPage() {
  return (
    <PageLayout
      title="Car Accident Injuries"
      eyebrow="Auto Related Injuries"
      intro="Heal from car accident trauma using gentle, personalized care. We help you bounce back to optimal vitality safely."
      breadcrumbs={[{ label: "Car Accident Injuries" }]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/car-accident-injuries.jpg",
        alt: "car accident injuries",
      }}
      afterContent={
        <>
          <RelatedServices
            items={getRelatedServices("/car-accident-injuries/")}
          />
          <ServicesOverview />
        </>
      }
    >
      <p>
        If you have been injured in a car accident, Impact Health & Wellness
        can help. These types of personal injuries can often be complex and
        have multiple areas of pain. Our team will perform a thorough
        evaluation of your condition, including x-rays and other imaging (as
        necessary), and will prescribe a plan of treatment to get you feeling
        back to normal as quickly as possible.
      </p>
      <p>
        We can also be the focal point for your medical care related to your
        accident. For example, in severe accidents you may receive initial
        care at a hospital then need specialized care afterwards. Medical
        records from these visits need to be collected and passed to any
        legal team that may be involved on your behalf. We have relationships
        with several area attorneys that we can partner with on your case to
        provide medical records, narrative reports, and depositions if
        necessary. The last thing you want to be worried about after an
        accident is paperwork…let us remove this burden from you.
      </p>

      <h2>Navigating Auto Accident Injuries</h2>
      <p>
        Even after the most dramatic of car crashes, sustained bodily
        injuries may not be immediately visible or obvious. That’s why
        one of the most important steps to take after experiencing a car
        crash is to seek a medical examination–even if you don’t
        feel any immediate pain or see any immediate damage. It’s also
        important to be aware of anything out of the ordinary–headaches
        that don’t subside, numbness or tingling, nausea or abdominal
        pain, bruising or discoloration, swelling, unexplained pain.
      </p>
      <p>
        These symptoms can be signs of serious injury only detected in a
        medical setting. Some injuries like whiplash may not appear until
        days later. Other common accident injuries–such as spinal
        trauma, rib fractures, compressed discs, and neck or back
        damage–may not be readily apparent and, if left untreated,
        could lead to chronic, debilitating pain.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/car-accident-injuries">
      <CarAccidentInjuriesPage />
    </CMSRoute>
  );
}

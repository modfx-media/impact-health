import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { BenefitGrid } from "@/components/page/BenefitGrid";
import { RelatedServices } from "@/components/page/RelatedServices";
import { AreaServedNote } from "@/components/page/AreaServedNote";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { CalorieMacroCalculator } from "@/components/page/CalorieMacroCalculator";
import { getRelatedServices } from "@/lib/nav-data";

const fallbackMetadata: Metadata = {
  title: "Anti-Aging & Medical Weight Loss Programs in Westerville, OH",
  description:
    "Transform your health with expert anti-aging & medical weight loss programs in Westerville, OH. Start your personalized journey to a younger, leaner you today!",
  alternates: { canonical: "/anti-aging-wellness/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/anti-aging-wellness", fallbackMetadata);
}

// Yoast schema graph captured from the live Anti-Aging & Weight Loss page, preserved as-is.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/anti-aging-wellness/",
    url: "https://impacthealthoh.com/anti-aging-wellness/",
    name: "Anti-Aging & Medical Weight Loss Programs in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T19:43:23+00:00",
    dateModified: "2026-05-28T12:02:11+00:00",
    description:
      "Transform your health with expert anti-aging & medical weight loss programs in Westerville, OH. Start your personalized journey to a younger, leaner you today!",
    breadcrumb: { "@id": "https://impacthealthoh.com/anti-aging-wellness/#breadcrumb" },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/anti-aging-wellness/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/anti-aging-wellness/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Anti-Aging & Weight Loss" },
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

const services = [
  {
    title: "Hormone Replacement Therapy",
    description:
      "Regain your vitality and balance with our hormone replacement therapy (HRT) programs. We customize treatments to optimize hormone levels and enhance your overall well-being.",
  },
  {
    title: "IV Therapy",
    description:
      "Recharge your body with our IV therapy, which delivers essential nutrients and hydration directly into your bloodstream. Experience increased energy, improved immunity, and enhanced well-being.",
  },
  {
    title: "Vitamin Boosters",
    description:
      "Revitalize health with Vitamin Boosters: direct, efficient nutrient delivery for enhanced energy, immunity, and vitality tailored to your needs.",
  },
  {
    title: "Meal Planning",
    description:
      "Transform your diet with personalized plans, easy recipes, and smart shopping lists to achieve health goals effortlessly.",
  },
];

async function AntiAgingWellnessPage() {
  return (
    <PageLayout
      title="Anti-Aging & Weight Loss"
      eyebrow="Anti-Aging & Weight Loss"
      intro="Transform your life with our Anti-Aging & Weight Loss programs. Tailored strategies to rejuvenate your body and achieve lasting wellness."
      breadcrumbs={[{ label: "Anti-Aging & Weight Loss" }]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/anti-aging-wellness.jpg",
        alt: "massage therapy at Impact Health & Wellness",
      }}
      afterContent={
        <>
          <RelatedServices items={getRelatedServices("/anti-aging-wellness/")} />
          <ServicesOverview />
          <AreaServedNote />
        </>
      }
    >
      <p>
        Are you ready to rejuvenate your body, mind, and spirit, all while
        embracing a healthier, more youthful you? At Impact Health &amp;
        Wellness, we are dedicated to helping you achieve your anti-aging and
        wellness goals with our wide array of rejuvenating services. Located
        in Westerville, Ohio, our clinic offers a comprehensive range of
        non-invasive treatments designed to help you look and feel your best.
      </p>

      <h2>Our Focus on Anti-Aging and Wellness</h2>
      <p>
        At Impact Health &amp; Wellness, we know that true well-being
        encompasses both inner and outer beauty. Our highly skilled team
        specializes in a variety of services that will help you turn back
        the clock and enjoy life to the fullest.
      </p>

      <div className="not-prose rounded-2xl border border-zinc-200/60 bg-[#f4f8fb] px-6 py-8 text-center">
        <p className="text-4xl font-extrabold text-brand-teal sm:text-5xl">
          705 lbs
        </p>
        <p className="mt-2 text-sm font-semibold text-brand-navy">
          Total Pounds Lost through Impact Health&rsquo;s Weight Loss Programs
        </p>
        <p className="mt-1 text-sm text-zinc-600">Average Weight Loss: 29lbs</p>
      </div>

      <h2>Why Choose Us</h2>
      <ul>
        <li>
          <strong>Non-Surgical Approach:</strong> Our treatments are
          non-surgical and designed to minimize discomfort and downtime.
        </li>
        <li>
          <strong>Personalized Care:</strong> We create individualized
          treatment plans tailored to your unique anti-aging and wellness
          goals.
        </li>
        <li>
          <strong>Experienced Professionals:</strong> Our team comprises
          skilled healthcare and wellness experts with deep expertise in
          anti-aging and wellness strategies.
        </li>
        <li>
          <strong>Comprehensive Solutions:</strong> We offer a wide range of
          services to address your specific anti-aging and wellness needs.
        </li>
      </ul>

      <h2>Calorie &amp; Macro Calculator</h2>
      <p>
        Curious what a personalized calorie and macro target could look like?
        Use our calculator below to get an estimate based on your goals.
      </p>
      <CalorieMacroCalculator />

      <h2>Anti-Aging &amp; Weight Loss Services</h2>
      <BenefitGrid items={services} />
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/anti-aging-wellness">
      <AntiAgingWellnessPage />
    </CMSRoute>
  );
}

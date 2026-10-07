import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { BenefitGrid } from "@/components/page/BenefitGrid";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";
import Link from "next/link";

const fallbackMetadata: Metadata = {
  title: "Meal Planning & Nutrition Services in Westerville, OH",
  description:
    "Impact Health & Wellness in Westerville, OH offers custom meal planning for weight loss and improved energy. Start your personalized wellness journey today!",
  alternates: { canonical: "/meal-planning/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/meal-planning", fallbackMetadata);
}

// Yoast schema graph captured from the live Meal Planning page, preserved as-is.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/meal-planning/",
    url: "https://impacthealthoh.com/meal-planning/",
    name: "Meal Planning & Nutrition Services in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-20T20:55:30+00:00",
    dateModified: "2026-04-10T11:19:16+00:00",
    description:
      "Impact Health & Wellness in Westerville, OH offers custom meal planning for weight loss and improved energy. Start your personalized wellness journey today!",
    breadcrumb: { "@id": "https://impacthealthoh.com/meal-planning/#breadcrumb" },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/meal-planning/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/meal-planning/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Meal Planning" },
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

const benefits = [
  {
    title: "Simplified food choices",
    description:
      "Eliminate the guesswork and stress of meal planning with a structured, yet flexible, approach.",
  },
  {
    title: "Improved nutrition",
    description:
      "Ensure you're getting the essential nutrients your body needs for optimal health and well-being.",
  },
  {
    title: "Weight management support",
    description:
      "Achieve your weight loss or maintenance goals through balanced and portion-controlled meals.",
  },
  {
    title: "Enhanced energy levels",
    description:
      "Experience sustained energy throughout the day with well-planned meals and snacks.",
  },
  {
    title: "Long-term lifestyle changes",
    description:
      "Develop healthy eating habits that you can maintain for a lifetime.",
  },
];

async function MealPlanningPage() {
  return (
    <PageLayout
      title="Meal Planning"
      eyebrow="Anti-Aging & Weight Loss"
      intro="Achieve your wellness goals with custom Meal Planning and Prepping at Impact Health. Expert nutrition advice tailored to your lifestyle."
      breadcrumbs={[
        { label: "Anti-Aging & Weight Loss", href: "/anti-aging-wellness/" },
        { label: "Meal Planning" },
      ]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/meal-planning.jpg",
        alt: "dietary consultations at Impact Health & Wellness",
      }}
      afterContent={
        <>
          <RelatedServices items={getRelatedServices("/meal-planning/")} />
          <ServicesOverview />
        </>
      }
    >
      <p>
        At Impact Health &amp; Wellness, we believe in the power of
        sustainable lifestyle changes to achieve and maintain optimal health.
        Our personalized meal planning service goes beyond just
        &ldquo;dieting&rdquo; &ndash; it&rsquo;s about creating a nutritional
        roadmap tailored to your unique needs and preferences.
      </p>

      <h2>Customized for You</h2>
      <p>
        We understand that one-size-fits-all approaches don&rsquo;t work.
        Our team of experienced professionals collaborates with you to
        create a meal plan that factors in:
      </p>
      <ul>
        <li>
          <strong>Calorie needs:</strong> Based on your individual goals and
          activity level, we determine the appropriate calorie intake for
          sustainable weight management or overall health optimization.
        </li>
        <li>
          <strong>Dietary restrictions:</strong> We cater to various dietary
          needs, including gluten-free, paleo, and others, ensuring your
          plan is safe and effective.
        </li>
        <li>
          <strong>Food preferences:</strong> We incorporate your favorite
          foods and flavors to create a plan you&rsquo;ll enjoy and stick to
          long-term.
        </li>
      </ul>

      <div className="not-prose rounded-2xl border border-zinc-200/60 bg-[#f4f8fb] px-6 py-8 text-center">
        <p className="text-4xl font-extrabold text-brand-teal sm:text-5xl">
          2,340 lbs
        </p>
        <p className="mt-2 text-sm font-semibold text-brand-navy">
          Total Pounds Lost through Impact Health&rsquo;s Weight Loss Programs
        </p>
        <p className="mt-1 text-sm text-zinc-600">Average Weight Loss: 29lbs</p>
      </div>

      <h2>Benefits of Personalized Meal Planning</h2>
      <BenefitGrid items={benefits} />

      <h2>Getting Started with Your Personalized Meal Plan</h2>
      <p>
        <Link href="/contact-us/">Schedule a consultation</Link> with our team to
        discuss your specific goals and health history. We&rsquo;ll then
        work together to design a customized meal plan that fits your
        lifestyle and preferences.
      </p>
      <p>
        Additionally, while we don&rsquo;t directly offer dietary
        consultations ourselves, we&rsquo;ve partnered with experienced
        dietitians in the area who can provide comprehensive guidance on
        personalized nutrition plans. Ask our team for more information
        about these partnerships and how you can access discounted
        services.
      </p>
      <p>
        Ready to take control of your health and embrace a sustainable
        approach to nutrition? Contact Impact Health &amp; Wellness today to
        start your personalized meal planning journey!
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/meal-planning">
      <MealPlanningPage />
    </CMSRoute>
  );
}

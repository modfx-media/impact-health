import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { BenefitGrid } from "@/components/page/BenefitGrid";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";

const fallbackMetadata: Metadata = {
  title: "IV Therapy Boosters in Westerville | Boost Energy & Immunity",
  description:
    "At Impact Health & Wellness, our IV Therapy Boosters in Westerville helps you replenish and revitalize. Boost wellness with personalized treatments. Book now!",
  alternates: { canonical: "/iv-therapy-infusion-boosters/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/iv-therapy-infusion-boosters", fallbackMetadata);
}

// Yoast schema graph captured from the live IV Therapy Infusion Boosters page, preserved as-is.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/iv-therapy-infusion-boosters/",
    url: "https://impacthealthoh.com/iv-therapy-infusion-boosters/",
    name: "IV Therapy Boosters in Westerville | Boost Energy & Immunity",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-14T21:52:18+00:00",
    dateModified: "2026-04-10T11:17:53+00:00",
    description:
      "At Impact Health & Wellness, our IV Therapy Boosters in Westerville helps you replenish and revitalize. Boost wellness with personalized treatments. Book now!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/iv-therapy-infusion-boosters/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/iv-therapy-infusion-boosters/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/iv-therapy-infusion-boosters/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "IV Therapy Infusion Boosters" },
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

const infusions = [
  {
    title: "Hydration (Fluids Only) 500mL",
    description:
      "Experience the rejuvenating benefits of Fluids Only IV therapy at Impact Health & Wellness. Recharge your body with increased stamina, boost your metabolism, and unveil a radiant complexion.",
  },
  {
    title: "Hydration (Fluids Only) 1000mL",
    description:
      "Experience the rejuvenating benefits of Fluids Only IV therapy at Impact Health & Wellness. Recharge your body with increased stamina, boost your metabolism, and unveil a radiant complexion.",
  },
  {
    title: "Anti-Aging Elixir",
    description:
      "Packed with a blend of B-Complex (B1, B2, B3, B5, B6), Vitamin C, Glutathione, and Biotin, this elixir is designed to boost your skin's natural glow, promote hair and nail growth, and soothe inflammation. Our Anti-Aging Elixir contains 1000ml of IV fluids and electrolytes, delivering the essential nutrients your body craves for a revitalized, more youthful you.",
  },
  {
    title: "Myers Cocktail Wellness",
    description:
      "This powerful blend of B-Complex (B1, B2, B3, B5, B6), Vitamin C, and Magnesium promotes immune resilience during cold and flu season, strengthens nerve health, improves memory, and enhances your energy levels. This infusion also supports your circulatory system and uplifts your mood. Enjoy a range of benefits, including mood regulation, immune enhancement, assistance with blood pressure and cardiovascular health, and improved muscle function.",
  },
  {
    title: "Immuno-Booster",
    description:
      "Give your immune system an extraordinary boost with our Immuno-Booster infusion. This powerhouse infusion contains B-Complex (B1, B2, B3, B5, B6), Vitamin C, Zinc, and B12 to promote the optimal function of your immune system. It not only aids in recovery from the common cold and flu but also increases your energy and improves your hydration. With 1000ml of IV fluids and electrolytes, you'll feel the revitalizing effects of this immune support infusion.",
  },
  {
    title: "Metabolism Supercharge",
    description:
      "This powerful blend helps your body burn fat more efficiently, providing a boost in energy and supporting healthy weight management. Our specialized infusion contains essential components such as B12, B-Complex Vitamins (B1, B2, B3, B5, B6), Taurine, and LIPO-C to kick your metabolism into high gear, promote proper hormone function, and reduce inflammation. Unlock a healthier, more vibrant you.",
  },
  {
    title: "Headache Extinguisher",
    description:
      "Put an end to your migraines. This potent infusion is designed to alleviate acute and lingering pain, along with troublesome symptoms like light sensitivity and irritability. With B-Complex (B1, B2, B3, B5, B6), B12, Zinc Sulfate, and Magnesium, it provides quick relief and a boost in energy. Administered with 1000ml of IV fluids and electrolytes, our Headache Extinguisher infusion is your solution for headache relief. Don't let migraines slow you down; extinguish the pain and reclaim your day.",
  },
  {
    title: "Athletic Performance & Recovery",
    description:
      "Maximize your athletic performance. Whether you're gearing up for a big game or recovering from an intense workout, this infusion will be your secret weapon. It contains a blend of B-Complex vitamins, Vitamin C, essential amino acids, and minerals. The result? Increased energy, reduced inflammation, and quicker muscle recovery. Administered with 1000ml of IV fluids and electrolytes, it's your ultimate ally in achieving peak performance and a swift recovery.",
  },
];

const boosters = [
  {
    title: "B12",
    description:
      "Elevate your energy levels and overall well-being with our Vitamin B12 booster injection. Packed with this essential vitamin, known for its energy-boosting properties, this injection is a quick and effective way to recharge your vitality. Vitamin B12 plays a crucial role in maintaining a healthy nervous system, supporting red blood cell production, and enhancing mood and cognitive function.",
  },
  {
    title: "Tri-Immune",
    description:
      "Elevate your immune system's defense with our Tri-Immune booster injection. This potent blend is designed to provide the ultimate boost to your immune system, keeping it strong and resilient. Our Tri-Immune booster injection features a powerful combination of Glutathione, Vitamin C, and Zinc, making it a comprehensive solution for immune support.",
  },
  {
    title: "Vitamin D3",
    description:
      "Experience the benefits of our Vitamin D booster injection, a natural mood enhancer that may also contribute to improved sleep quality. Additionally, Vitamin D plays a vital role in supporting a strong immune system and aids in enhancing bone and muscle strength.",
  },
  {
    title: "Glutathione",
    description:
      "Discover the power of our glutathione booster injection, renowned as the master antioxidant for its exceptional immune-boosting and detoxification properties. This essential compound not only enhances the immune system but also brightens and revitalizes the skin.",
  },
  {
    title: "MICC",
    description:
      "Elevate your wellness journey with our MICC booster injection, a powerhouse blend designed to boost energy and rev up metabolism. Experience improved mood, sharper mental function, and a sense of relief from feelings of depression with the inclusion of Methionine, Inositol, Choline, and B12.",
  },
  {
    title: "Lipo-C",
    description:
      "Our Lipo-C booster injection is the ultimate energizer, designed to kick your metabolism into high gear and give you that extra spring in your step. With the potent combination of Inositol, Choline, B12, and pyridoxine (B6), it's a sulfa-free, natural way to support your vitality.",
  },
  {
    title: "Amino Blend",
    description:
      "Our Amino Blend booster injection is the ultimate way to boost your energy levels and supercharge your metabolism. It also helps reduce joint and muscle inflammation and promotes the preservation of lean muscle mass. Packed with Glutamine, Arginine, and Carnitine.",
  },
];

async function IvTherapyInfusionBoostersPage() {
  return (
    <PageLayout
      title="Our Infusions & Boosters"
      eyebrow="Anti-Aging & Weight Loss"
      intro="Boost your wellbeing with personalized IV Therapy. From hydration to energy, our infusions and boosters are tailored to support your health goals."
      breadcrumbs={[
        { label: "Anti-Aging & Weight Loss", href: "/anti-aging-wellness/" },
        { label: "IV Therapy Infusion Boosters" },
      ]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/vitamin-infusions.webp",
        alt: "vitamin infusions at Impact Health & Wellness",
      }}
      afterContent={
        <>
          <RelatedServices
            items={getRelatedServices("/iv-therapy-infusion-boosters/")}
          />
          <ServicesOverview />
        </>
      }
    >
      <p>
        IV therapy is a terrific delivery method for vitamins and fluids
        that your body craves. Because it&rsquo;s intravenous, the
        absorption rate of these fluids is much greater than you get via
        digestion. We offer two varieties of IV therapy &ndash; infusions
        and booster injections.
      </p>
      <p>
        <strong>
          We currently cannot provide IV infusion services to anyone that is
          pregnant (without a doctor note stating otherwise) or under the
          age of 18. Our infusion services are not meant to diagnose or
          treat any illness or disease.
        </strong>
      </p>

      <h2>Our IV Infusion Options</h2>
      <BenefitGrid items={infusions} />

      <h2>Our Vitamin Booster Options</h2>
      <BenefitGrid items={boosters} />
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/iv-therapy-infusion-boosters">
      <IvTherapyInfusionBoostersPage />
    </CMSRoute>
  );
}

import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { BenefitGrid } from "@/components/page/BenefitGrid";
import { Faq, faqSchema } from "@/components/page/Faq";
import { RelatedServices } from "@/components/page/RelatedServices";
import { AreaServedNote } from "@/components/page/AreaServedNote";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";
import Link from "next/link";

const fallbackMetadata: Metadata = {
  title: "IV Therapy in Westerville | Boost Your Health & Wellness",
  description:
    "Revitalize with IV Therapy at Impact Health & Wellness in Westerville, OH. Boost your energy, immunity, and hydration today with our expert wellness team!",
  alternates: { canonical: "/iv-therapy/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/iv-therapy", fallbackMetadata);
}

const faqItems = [
  {
    question: "How long do the effects of IV Therapy last?",
    answer:
      "The duration of the effects from IV Therapy can vary based on the type of infusion and the individual's overall health and lifestyle. Generally, benefits such as increased energy levels and improved hydration can be felt immediately and may last from several days to a week. For ongoing wellness goals, regular sessions are recommended to maintain optimal levels of vitamins and nutrients.",
  },
  {
    question: "Is IV Therapy safe for everyone?",
    answer:
      "IV Therapy is safe for most people, but it's not suitable for everyone. Individuals with certain health conditions such as kidney disease, heart conditions, or those who are pregnant or breastfeeding should consult with our medical professionals before starting IV Therapy. A thorough health assessment is conducted prior to treatment to ensure IV Therapy is safe for you.",
  },
  {
    question: "Can IV Therapy help with chronic conditions?",
    answer:
      "IV Therapy can be tailored to support the management of chronic conditions by providing essential nutrients that may be deficient or not optimally absorbed due to the condition. While IV Therapy is not a cure, it can help alleviate symptoms, reduce fatigue, and improve quality of life as part of a comprehensive treatment plan.",
  },
  {
    question:
      "How is the specific IV infusion blend determined for each patient?",
    answer:
      "The specific IV infusion blend is determined after a detailed consultation that assesses your health history, current health concerns, and wellness goals. Our experienced team at Impact Health & Wellness customizes each IV Therapy plan based on this assessment, along with any specific recommendations from your healthcare provider, to target your unique needs effectively.",
  },
  {
    question:
      "Can IV Therapy be customized for athletes or those with active lifestyles?",
    answer:
      "Yes, IV Therapy can be specially customized for athletes or individuals with active lifestyles to support recovery, enhance performance, and replenish nutrients lost during intense physical activity. Our blends can include amino acids, electrolytes, and antioxidants to help reduce recovery time and boost energy levels, ensuring you get the most out of your training and performance.",
  },
];

// Yoast schema graph captured from the live IV Therapy page, plus a FAQPage node for the on-page FAQs.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/iv-therapy/",
    url: "https://impacthealthoh.com/iv-therapy/",
    name: "IV Therapy in Westerville | Boost Your Health & Wellness",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-11T00:07:37+00:00",
    dateModified: "2026-04-10T11:18:15+00:00",
    description:
      "Revitalize with IV Therapy at Impact Health & Wellness in Westerville, OH. Boost your energy, immunity, and hydration today with our expert wellness team!",
    breadcrumb: { "@id": "https://impacthealthoh.com/iv-therapy/#breadcrumb" },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/iv-therapy/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/iv-therapy/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "IV Therapy" },
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

const vitaminBoosters = [
  {
    title: "Vitamin C",
    description:
      "Known for its immune-boosting properties, Vitamin C is a powerful antioxidant that helps protect the body against free radical damage, supports skin health, and aids in the recovery process from illness.",
  },
  {
    title: "B-Complex Vitamins",
    description:
      "This group of vitamins plays a vital role in maintaining good health and well-being. They have a direct impact on your energy levels, brain function, and cell metabolism, helping to boost energy and reduce feelings of fatigue and lethargy.",
  },
  {
    title: "Glutathione",
    description:
      'Often referred to as the "master antioxidant," glutathione supports detoxification, helps fight oxidative stress, improves skin complexion, and boosts the immune system.',
  },
  {
    title: "Magnesium",
    description:
      "Essential for over 300 biochemical reactions in the body, magnesium helps to regulate muscle and nerve function, blood sugar levels, and blood pressure. It also supports a healthy immune system and bone health.",
  },
  {
    title: "Biotin (Vitamin B7)",
    description:
      "Biotin is well-known for its benefits to hair, skin, and nail health. It supports metabolic functions by working as a co-enzyme to help break down food, including carbohydrates, fats, and protein.",
  },
  {
    title: "NAD+",
    description:
      "Nicotinamide adenine dinucleotide (NAD+) is a coenzyme present in all cells and is involved in the metabolic process. Boosting NAD+ levels can improve energy metabolism, promote cellular repair, and potentially slow down the aging process.",
  },
  {
    title: "Amino Acids",
    description:
      "Essential for protein synthesis, amino acids support muscle building, repair tissues, and improve metabolic functions. They can enhance athletic performance and aid in recovery post-exercise.",
  },
];

async function IvTherapyPage() {
  return (
    <PageLayout
      title="IV Therapy"
      eyebrow="Anti-Aging & Weight Loss"
      intro="IV Therapy at Impact Health & Wellness in Westerville, Ohio, offers an optimal solution to rejuvenate, hydrate, and boost your overall health efficiently."
      breadcrumbs={[
        { label: "Anti-Aging & Weight Loss", href: "/anti-aging-wellness/" },
        { label: "IV Therapy" },
      ]}
      schema={schema}
      showTestimonials
      afterContent={
        <>
          <RelatedServices items={getRelatedServices("/iv-therapy/")} />
          <ServicesOverview />
          <AreaServedNote />
        </>
      }
    >
      <p>
        IV Therapy at Impact Health &amp; Wellness in Westerville, Ohio,
        offers an optimal solution to rejuvenate, hydrate, and{" "}
        <Link href="/anti-aging-wellness/">boost your overall health</Link>{" "}
        efficiently. Tailored to address various health concerns and
        wellness goals, our IV Therapy delivers essential vitamins,
        minerals, and hydration directly into your bloodstream, ensuring
        maximum absorption and immediate benefits. Discover the power of
        personalized IV treatments designed to enhance your well-being. Get
        in touch to <Link href="/contact-us/">book your consultation</Link> now.
      </p>

      <h2>What is IV Therapy?</h2>
      <p>
        IV Therapy is an innovative treatment that administers nutrients,
        hydration, and medication directly into the bloodstream. By
        bypassing the digestive system, IV Therapy ensures 100% absorption
        of its beneficial components, offering immediate effects. This
        treatment can address a range of issues from dehydration,
        migraines, and fatigue to supporting immune health, detoxification,
        and wellness goals. At Impact Health &amp; Wellness, our IV
        infusions are customized to each individual&rsquo;s needs, providing
        targeted support for optimal health.
      </p>

      <h3>Benefits of IV Therapy</h3>
      <p>Choosing IV Therapy at Impact Health &amp; Wellness provides numerous benefits:</p>
      <ul>
        <li>Rapid hydration and rehydration, essential for overall health and recovery.</li>
        <li>Immediate delivery of essential vitamins, amino acids, and minerals.</li>
        <li>Boosts to the immune system, energy levels, and cognitive function.</li>
        <li>Support in detoxification processes and weight loss efforts.</li>
        <li>
          Improvement in skin health and appearance, thanks to antioxidants
          like glutathione and vitamin C.
        </li>
      </ul>

      <h2>Why Choose Impact Health &amp; Wellness</h2>
      <p>
        Impact Health &amp; Wellness is not just a medical facility;
        it&rsquo;s a wellness destination in Westerville, Ohio, offering a
        holistic approach to health care. Our experienced team of medical
        professionals and nurse practitioners is dedicated to providing
        personalized, treatments including IV Therapy. By choosing us, you
        benefit from:
      </p>
      <ul>
        <li>Comprehensive, personalized health assessments and tailored IV infusion plans.</li>
        <li>A wide range of IV Therapy options, including hydration, rejuvenation, and wellness infusions.</li>
        <li>A comfortable and welcoming environment with expert care from our dedicated staff.</li>
      </ul>

      <h2>Ideal Candidates for IV Therapy</h2>
      <p>IV Therapy is versatile, benefiting anyone looking to enhance their overall health, including:</p>
      <ul>
        <li>Individuals seeking quick hydration and energy boosts.</li>
        <li>Those needing immune support during flu season or times of stress.</li>
        <li>Anyone looking to enhance their skin health and combat signs of aging.</li>
        <li>Patients recovering from illness, surgery, or dealing with chronic health conditions.</li>
      </ul>

      <h2>What to Expect from Your IV Therapy Session</h2>
      <p>
        Your IV Therapy treatment at Impact Health &amp; Wellness begins
        with a personal consultation to discuss your health history and
        wellness goals. During your session, you&rsquo;ll relax in a
        comfortable setting while our skilled nurse practitioners administer
        your IV infusion, a process that typically takes 30-60 minutes. You
        can resume your normal activities immediately after, feeling
        refreshed and revitalized.
      </p>

      <h2>Different Types of Vitamin Boosters</h2>
      <p>
        At Impact Health &amp; Wellness in Westerville, Ohio, we offer a{" "}
        <Link href="/iv-therapy-infusion-boosters/">variety of vitamin boosters</Link>{" "}
        as part of our IV Therapy treatments, designed to cater to the
        unique needs and health goals of our patients. Vitamin boosters are
        concentrated doses of essential vitamins and nutrients that can be
        added to IV infusions to enhance their benefits. Here are some of
        the most popular vitamin boosters and their key benefits:
      </p>
      <BenefitGrid items={vitaminBoosters} />
      <p>
        Each vitamin booster has its specific benefits, and our medical
        professionals at Impact Health &amp; Wellness can recommend the best
        combination based on your individual health assessment and wellness
        goals. By incorporating these vitamin boosters into your IV Therapy
        regimen, you can achieve targeted health outcomes, from enhanced
        immune function to improved energy levels and overall vitality.
      </p>

      <h2>Cost of IV Therapy in Ohio</h2>
      <p>
        The cost of IV Therapy varies depending on the type of infusion and
        the specific nutrients included. At Impact Health &amp; Wellness, we
        are committed to transparent pricing and providing exceptional
        value. For detailed pricing information and to explore our IV
        Therapy packages, please contact our Westerville clinic.
      </p>

      <h2>Related Treatments</h2>
      <p>
        At Impact Health &amp; Wellness, serving the Westerville and
        Columbus, Ohio area, we provide a comprehensive range of treatments
        designed to enhance your overall health and address specific
        wellness goals. Our services complement each other, offering
        benefits from aesthetic improvements to functional health
        enhancements.
      </p>
      <ul>
        <li>
          <strong>
            <Link href="/hormone-replacement-therapy-hrt/">
              Hormone Replacement Therapy (HRT)
            </Link>
            :
          </strong>{" "}
          A treatment involving the administration of bioidentical or
          synthetic hormones via injectables, patches, or pills. HRT is
          designed to balance hormone levels in the body, addressing
          symptoms associated with menopause, andropause, and other hormonal
          imbalances, thereby improving quality of life.
        </li>
        <li>
          <strong>
            <Link href="/peptide-therapy/">Peptide Therapy</Link>:
          </strong>{" "}
          Utilizes injectable amino acid sequences to signal various
          biological processes, supporting healing, muscle growth, weight
          loss, and anti-aging efforts. Peptide Therapy works by mimicking
          or stimulating the production of natural substances in the body
          to improve overall health and wellness.
        </li>
        <li>
          <strong>Wrinkle Relaxers:</strong> Cosmetic treatments such as
          Botox and Dysport that involve the minimally invasive injection of
          botulinum toxin to relax facial muscles. This process reduces the
          appearance of dynamic wrinkles and fine lines, resulting in a
          smoother, more youthful facial complexion.
        </li>
      </ul>

      <h2>Book Your IV Therapy Consultation in Westerville, Ohio</h2>
      <p>
        Elevate your health and wellness with personalized IV Therapy at
        Impact Health &amp; Wellness. Located in Westerville, Ohio,
        we&rsquo;re here to support your journey to optimal well-being with
        targeted IV treatments. <Link href="/contact-us/">Schedule your consultation</Link> today
        and take the first step towards a healthier, more vibrant you.
      </p>

      <h2>FAQs</h2>
      <Faq items={faqItems} />
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/iv-therapy">
      <IvTherapyPage />
    </CMSRoute>
  );
}

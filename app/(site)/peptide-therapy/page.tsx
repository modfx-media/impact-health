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
  title: "Peptide Therapy in Westerville | Enhanced Wellness Plans",
  description:
    "Discover Peptide Therapy at Impact Health & Wellness in Westerville, OH. Personalized treatments for recovery, energy, and better health. Get in touch today!",
  alternates: { canonical: "/peptide-therapy/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/peptide-therapy", fallbackMetadata);
}

const faqItems = [
  {
    question: "How quickly can I expect to see results from Peptide Therapy?",
    answer:
      "The timeline for experiencing results from Peptide Therapy can vary based on the individual's health status, the specific peptides used, and the treatment goals. Generally, patients may start noticing improvements in energy levels, sleep quality, and overall well-being within a few weeks. For other benefits, such as enhanced muscle mass or significant weight loss, it might take a few months of consistent treatment to see noticeable changes.",
  },
  {
    question:
      "Are there any dietary or lifestyle changes I should make to enhance the effectiveness of Peptide Therapy?",
    answer:
      "Yes, to maximize the benefits of Peptide Therapy, we recommend adopting a healthy lifestyle that includes a balanced diet, regular physical activity, adequate hydration, and sufficient sleep. Avoiding excessive alcohol consumption and smoking can also enhance treatment outcomes.",
  },
  {
    question:
      "Can Peptide Therapy be used in conjunction with other treatments offered at Impact Health & Wellness?",
    answer:
      "Absolutely. Peptide Therapy can be an integral part of a comprehensive wellness plan and is often used alongside other treatments such as Hormone Replacement Therapy, IV Therapy, and dietary consultations. Combining Peptide Therapy with other treatments can provide synergistic benefits, addressing a wide range of health concerns more effectively. Our healthcare professionals will work with you to determine the most appropriate combination of treatments based on your individual needs.",
  },
  {
    question:
      "Is Peptide Therapy suitable for individuals without any specific health concerns?",
    answer:
      "Yes, Peptide Therapy isn't only for addressing specific medical issues. Many individuals seek Peptide Therapy for its potential to enhance overall wellness, improve vitality, and support healthy aging. Even if you don't have particular health concerns, peptides can offer benefits such as improved energy levels, better sleep quality, and enhanced immune system function, contributing to a higher quality of life.",
  },
  {
    question:
      "How is the appropriate peptide and dosage determined for each patient?",
    answer:
      "The selection of peptides and their dosages is highly personalized and based on a comprehensive evaluation of your health history, current health status, and specific wellness goals. During your initial consultation at Impact Health & Wellness, our healthcare professionals will conduct thorough assessments, possibly including blood tests, to understand your unique needs. Based on this information, we'll tailor a Peptide Therapy plan specifically for you, ensuring optimal safety and effectiveness.",
  },
];

// Yoast schema graph captured from the live Peptide Therapy page, plus a FAQPage node for the on-page FAQs.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/peptide-therapy/",
    url: "https://impacthealthoh.com/peptide-therapy/",
    name: "Peptide Therapy in Westerville | Enhanced Wellness Plans",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-11T00:01:00+00:00",
    dateModified: "2026-04-10T11:24:39+00:00",
    description:
      "Discover Peptide Therapy at Impact Health & Wellness in Westerville, OH. Personalized treatments for recovery, energy, and better health. Get in touch today!",
    breadcrumb: { "@id": "https://impacthealthoh.com/peptide-therapy/#breadcrumb" },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/peptide-therapy/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/peptide-therapy/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Peptide Therapy" },
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

const benefits = [
  {
    title: "Enhanced Muscle Growth and Recovery",
    description:
      "Ideal for fitness enthusiasts looking to improve their physical performance and expedite recovery.",
  },
  {
    title: "Weight Loss Support",
    description:
      "Aids in reducing cravings and boosting metabolism to support weight management goals.",
  },
  {
    title: "Improved Skin Health",
    description: "Promotes collagen production for youthful, healthier-looking skin.",
  },
  {
    title: "Increased Energy Levels and Well-being",
    description:
      "Boosts vitality and enhances mood, contributing to an improved sense of well-being.",
  },
  {
    title: "Support for Healthy Aging",
    description:
      "Helps combat the signs of aging by improving bone density, cognitive function, and overall health.",
  },
];

const peptides = [
  {
    title: "BPC-157",
    description:
      "Known for its powerful healing properties, BPC-157 promotes tissue repair and recovery across various body systems. It's often used to accelerate wound healing, reduce inflammation, and improve gastrointestinal health.",
  },
  {
    title: "CJC-1295",
    description:
      "This growth hormone-releasing hormone (GHRH) analog is used to enhance growth hormone secretion, supporting increased muscle mass, improved fat loss, and better sleep quality. CJC-1295 is popular among athletes and those looking to improve body composition and overall wellness.",
  },
  {
    title: "Sermorelin",
    description:
      "Acting similarly to CJC-1295, Sermorelin stimulates the natural production of growth hormone. It's valued for anti-aging benefits, including enhanced energy levels, improved metabolism, and increased muscle strength.",
  },
  {
    title: "Ipamorelin",
    description:
      "A selective growth hormone secretagogue, Ipamorelin mimics the action of ghrelin in the body, promoting the release of growth hormone without significantly altering cortisol or prolactin levels. It's used for its anti-aging properties, fat loss support, and muscle building capabilities.",
  },
];

async function PeptideTherapyPage() {
  return (
    <PageLayout
      title="Peptide Therapy"
      eyebrow="Anti-Aging & Weight Loss"
      intro="At Impact Health & Wellness, we're at the forefront of innovative health solutions with our new age Peptide Therapy."
      breadcrumbs={[
        { label: "Anti-Aging & Weight Loss", href: "/anti-aging-wellness/" },
        { label: "Peptide Therapy" },
      ]}
      schema={schema}
      showTestimonials
      afterContent={
        <>
          <RelatedServices items={getRelatedServices("/peptide-therapy/")} />
          <ServicesOverview />
          <AreaServedNote />
        </>
      }
    >
      <p>
        At Impact Health &amp; Wellness, in Westerville, Ohio, we&rsquo;re at
        the forefront of innovative health solutions with our new age
        Peptide Therapy. This cutting-edge treatment harnesses the power of
        amino acids to promote healing, boost energy levels, and improve
        overall health. Whether you&rsquo;re looking to enhance muscle mass,
        support weight loss, or simply{" "}
        <Link href="/anti-aging-wellness/">revitalize your well-being</Link>, our
        peptide therapy offers a path to achieving your health goals.
        Discover the transformative power of peptides and{" "}
        <Link href="/contact-us/">schedule your consultation</Link> today.
      </p>

      <h2>What is Peptide Therapy?</h2>
      <p>
        Peptide Therapy is a revolutionary approach to wellness that
        utilizes short chains of amino acids&mdash;fundamental building
        blocks of proteins&mdash;to signal various processes in the body.
        These peptides can mimic or stimulate natural bodily functions, from
        enhancing the production of growth hormone to supporting tissue
        repair and immune system function. With minimal side effects and a
        wide range of applications, peptide therapy stands as a versatile
        option for individuals seeking to address specific health concerns
        or enhance their overall quality of life.
      </p>

      <h3>Benefits of Peptide Therapy</h3>
      <p>Peptide therapy can offer numerous benefits, including:</p>
      <BenefitGrid items={benefits} />

      <h2>Why Choose Impact Health &amp; Wellness</h2>
      <p>
        Located in Westerville and serving the greater Columbus area, Impact
        Health &amp; Wellness is your premier destination for comprehensive
        health care, including advanced peptide therapy. Our
        multidisciplinary team of experts is dedicated to providing
        personalized care tailored to your unique needs. By choosing us,
        you&rsquo;re not just receiving treatment; you&rsquo;re partnering
        with a team committed to enhancing your life every step of the way.
      </p>

      <h2>Ideal Candidates for Peptide Therapy</h2>
      <p>
        Peptide therapy is suitable for men and women of various ages who
        aim to improve their health and well-being. Ideal candidates
        include those seeking to:
      </p>
      <ul>
        <li>Address specific medical concerns such as hormone imbalances, erectile dysfunction, or muscle mass loss.</li>
        <li>Enhance physical performance and recovery.</li>
        <li>Support anti-aging efforts and cognitive health.</li>
      </ul>
      <p>Improve overall vitality and quality of life.</p>
      <ul>
        <li>
          It&rsquo;s important to consult with our healthcare professionals
          to determine if peptide therapy is right for you, considering any
          potential contraindications.
        </li>
      </ul>

      <h2>What to Expect from Your Peptide Therapy Session</h2>
      <p>
        Peptide Therapy at Impact Health &amp; Wellness involves a few key
        steps, designed to ensure that your treatment is tailored
        specifically to your health goals and needs. Initially, you&rsquo;ll
        have a consultation with one of our healthcare professionals to
        discuss your medical history, current health concerns, and what you
        hope to achieve through peptide therapy. This conversation is
        crucial for crafting a personalized treatment plan that aligns with
        your wellness objectives.
      </p>
      <p>
        Following your consultation, your treatment plan may include a
        series of peptide injections, topical applications, or other forms
        of supplementation, depending on what best suits your condition and
        goals. The administration of peptides is typically quick and with
        minimal discomfort, allowing you to continue your day without
        significant downtime.
      </p>
      <p>
        Throughout your treatment, you&rsquo;ll have follow-up appointments
        to monitor your progress, adjust dosages if necessary, and ensure
        you&rsquo;re moving toward your desired outcomes. Our team is
        committed to supporting you at every step, ensuring a smooth and
        effective therapy experience.
      </p>

      <h3>Risks and Side Effects of Peptide Therapy</h3>
      <p>
        While Peptide Therapy is generally well-tolerated and considered
        safe, as with any medical treatment, there are potential risks and
        side effects to be aware of. Common side effects can include
        irritation at the injection site, fatigue, and, in rare cases,
        changes in appetite or weight. More serious risks, though uncommon,
        may involve allergic reactions or interactions with other
        medications.
      </p>
      <p>
        It&rsquo;s important to discuss your full medical history and any
        current medications with your healthcare provider at Impact Health
        &amp; Wellness to minimize the risk of adverse effects. Our team is
        dedicated to providing a safe and effective treatment plan,
        personalized to your health needs and goals.
      </p>

      <h2>Popular Peptides and Their Benefits</h2>
      <p>Here are examples of widely-used peptides and what they are known for:</p>
      <BenefitGrid items={peptides} />
      <p>
        These peptides represent just a glimpse into the vast potential of
        peptide therapy for enhancing overall health and addressing
        specific medical concerns. At Impact Health &amp; Wellness, we
        tailor peptide treatments to meet the individual needs and health
        goals, ensuring optimal outcomes and improved quality of life.
      </p>

      <h2>Cost of Peptide Therapy in Ohio</h2>
      <p>
        The investment in your health with peptide therapy varies based on
        individual treatment plans and goals. At Impact Health &amp;
        Wellness, we pride ourselves on transparent pricing and offering
        value to our patients. For specific pricing details and to discuss
        how peptide therapy can fit into your budget, we welcome you to
        contact our Westerville clinic directly.
      </p>

      <h2>Related Treatments</h2>
      <p>
        At Impact Health &amp; Wellness in Westerville, Ohio, we offer a
        suite of treatments designed to enhance your health and wellness,
        complementing our Peptide Therapy services. Each treatment is
        tailored to meet the unique needs of our patients, ensuring optimal
        health outcomes.
      </p>
      <ul>
        <li>
          <strong>
            <Link href="/hormone-replacement-therapy-hrt/">
              Hormone Replacement Therapy (HRT)
            </Link>
            :
          </strong>{" "}
          An injectable or topical treatment that balances hormonal levels
          in men and women, HRT addresses symptoms related to hormonal
          imbalances such as menopause, andropause, and thyroid disorders.
          It works by replenishing hormone levels to their natural state,
          improving overall quality of life.
        </li>
        <li>
          <strong>
            <Link href="/anti-aging-wellness/">Dietary Consultations</Link>:
          </strong>{" "}
          Personalized nutritional advice aimed at optimizing health through
          diet. These consultations assess your dietary habits and
          nutritional needs to create a customized eating plan that
          supports weight management, enhances energy levels, and promotes
          overall wellness.
        </li>
        <li>
          <strong>
            <Link href="/iv-therapy/">IV Therapy</Link>:
          </strong>{" "}
          A treatment that delivers vitamins, minerals, and hydration
          directly into the bloodstream. IV Therapy boosts immune function,
          increases energy levels, and supports recovery from illness or
          strenuous activity by providing essential nutrients more
          efficiently than oral supplements.
        </li>
      </ul>

      <h2>Book Your Peptide Therapy Consultation in Westerville, Ohio</h2>
      <p>
        Take the first step towards a healthier, more vibrant you with
        peptide therapy at Impact Health &amp; Wellness. Our dedicated team
        is ready to guide you through each step of the process, from
        initial consultation to personalized treatment plan. Located in
        Westerville, Ohio, we are here to support your journey to optimal
        health and wellness.
      </p>
      <p>
        To schedule your consultation, <Link href="/contact-us/">contact us</Link>{" "}
        today. Your path to enhanced well-being begins here.
      </p>

      <h2>FAQs</h2>
      <Faq items={faqItems} />
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/peptide-therapy">
      <PeptideTherapyPage />
    </CMSRoute>
  );
}

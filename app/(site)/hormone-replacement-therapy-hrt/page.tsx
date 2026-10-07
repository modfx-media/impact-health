import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/page/PageLayout";
import { BenefitGrid } from "@/components/page/BenefitGrid";
import { ProcessSteps } from "@/components/page/ProcessSteps";
import { Faq, faqSchema } from "@/components/page/Faq";
import { RelatedServices } from "@/components/page/RelatedServices";
import { AreaServedNote } from "@/components/page/AreaServedNote";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";

const fallbackMetadata: Metadata = {
  title: "HRT in Westerville | Hormone Therapy & Wellness Plans",
  description:
    "For HRT in Westerville, OH, Impact Health & Wellness offers personalized hormone replacement therapy to boost your energy, mood, and well-being. Feel like you!",
  alternates: { canonical: "/hormone-replacement-therapy-hrt/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/hormone-replacement-therapy-hrt", fallbackMetadata);
}

const faqItems = [
  {
    question: "How long does Hormone Replacement Therapy typically last?",
    answer:
      "The duration of Hormone Replacement Therapy (HRT) can vary widely among individuals, depending on the specific reasons for treatment and how well your body responds. Some people may undergo HRT for a few years, while others might need longer-term therapy. The decision on the duration of HRT is personalized and based on ongoing evaluations of benefits versus risks, as well as changes in your symptoms and hormone levels.",
  },
  {
    question: "Can HRT improve skin and hair health?",
    answer:
      "Yes, HRT can have positive effects on skin and hair health. By balancing hormone levels, HRT can help improve skin elasticity, reduce dryness, and decrease the appearance of wrinkles. For hair, it can promote thickness and vitality, addressing issues like thinning and hair loss associated with hormonal imbalances. However, results can vary, and it's important to discuss these potential benefits with your healthcare provider.",
  },
  {
    question: "Is there an age limit for starting HRT?",
    answer:
      "There's no strict age limit for starting HRT; it's more about whether the benefits outweigh the risks for your particular health situation. HRT is commonly started around the time of menopause or when symptoms of hormonal imbalance become problematic. For those considering HRT later in life, healthcare providers will carefully assess health history and risk factors before making a recommendation.",
  },
  {
    question: "How does HRT affect mental health?",
    answer:
      "HRT can have a significant positive impact on mental health for many individuals. By addressing hormonal imbalances that contribute to mood swings, depression, and anxiety, HRT can help stabilize mood, improve sleep quality, and enhance overall feelings of well-being. It's important to monitor mental health symptoms closely during HRT and communicate any changes to your healthcare provider.",
  },
  {
    question: "Are there lifestyle changes that should accompany HRT?",
    answer:
      "Yes, making certain lifestyle changes can enhance the effectiveness of HRT and support your overall health. These may include adopting a balanced diet, engaging in regular physical activity, quitting smoking, and reducing alcohol intake. Your healthcare provider at Impact Health & Wellness can offer guidance on lifestyle adjustments that complement your HRT, helping to maximize benefits and improve your quality of life.",
  },
];

// Yoast schema graph captured from the live HRT page, plus a FAQPage node for the on-page FAQs.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/hormone-replacement-therapy-hrt/",
    url: "https://impacthealthoh.com/hormone-replacement-therapy-hrt/",
    name: "HRT in Westerville | Hormone Therapy & Wellness Plans",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-10T23:55:30+00:00",
    dateModified: "2026-04-10T11:17:01+00:00",
    description:
      "For HRT in Westerville, OH, Impact Health & Wellness offers personalized hormone replacement therapy to boost your energy, mood, and well-being. Feel like you!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/hormone-replacement-therapy-hrt/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: [
          "https://impacthealthoh.com/hormone-replacement-therapy-hrt/",
        ],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/hormone-replacement-therapy-hrt/#breadcrumb",
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
        name: "Hormone Replacement Therapy",
      },
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
    title: "Menopause & Andropause Relief",
    description:
      "Relief from symptoms of menopause and andropause, such as hot flashes, night sweats, and mood changes.",
  },
  {
    title: "More Energy & Better Mood",
    description:
      "Increased energy levels and improved mood, combating fatigue and depression associated with hormone deficiency.",
  },
  {
    title: "Enhanced Sex Drive",
    description:
      "Enhanced sex drive and performance by addressing issues like erectile dysfunction and vaginal dryness.",
  },
  {
    title: "Bone Density Protection",
    description:
      "Protection against bone density loss, reducing the risk of osteoporosis.",
  },
  {
    title: "Weight Management Support",
    description:
      "Support in weight management efforts by stabilizing hormones that affect metabolism and appetite.",
  },
];

const sessionSteps = [
  {
    title: "Initial Consultation",
    description:
      "Our healthcare professionals review your medical history, symptoms, and any previous treatments to assess your hormone levels through comprehensive testing.",
  },
  {
    title: "Personalized Treatment Plan",
    description:
      "We outline your treatment schedule, which may include various forms of hormone administration such as pills, patches, injections, or creams, depending on what's best suited to your lifestyle and health requirements.",
  },
  {
    title: "Ongoing Monitoring",
    description:
      "Throughout your treatment, we closely monitor your progress and hormone levels, making adjustments as needed to ensure optimal results and comfort.",
  },
  {
    title: "Recovery & Follow-Up Care",
    description:
      "Regular follow-up appointments allow us to track your health improvements, address any concerns, and refine your treatment plan for sustained well-being.",
  },
];

async function HormoneReplacementTherapyPage() {
  return (
    <PageLayout
      title="Hormone Replacement Therapy (HRT)"
      eyebrow="Hormone Therapy & Wellness"
      intro="Hormone Replacement Therapy (HRT) offers a promising solution for men and women experiencing the adverse effects of hormonal imbalances, such as mood swings, weight gain, and decreased energy levels."
      breadcrumbs={[{ label: "Hormone Replacement Therapy" }]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/hormone-replacement-therapy.jpg",
        alt: "hormone replacement therapy consultation",
      }}
      afterContent={
        <>
          <RelatedServices
            items={getRelatedServices("/hormone-replacement-therapy-hrt/")}
          />
          <ServicesOverview />
          <AreaServedNote />
        </>
      }
    >
      <p>
        At <Link href="/">Impact Health &amp; Wellness</Link>, located in
        Westerville, Ohio, we understand the critical role hormones play in
        maintaining your health, well-being, and quality of life. Hormone
        Replacement Therapy (HRT) offers a promising solution for men and
        women experiencing the adverse effects of hormonal imbalances, such
        as mood swings, weight gain, and decreased energy levels.
      </p>
      <p>
        With our personalized approach, we aim to restore your hormone
        balance and enhance your overall wellness. Contact us today to{" "}
        <Link href="/contact-us/">book your consultation</Link> and begin on a
        journey to rejuvenate your health.
      </p>

      <h2>What is Hormone Replacement Therapy?</h2>
      <p>
        Hormone Replacement Therapy is a treatment aimed at alleviating
        symptoms caused by hormonal imbalance in both men and women. By
        supplementing the body with bioidentical or synthetic hormones, HRT
        can help regulate levels of hormones like estrogen, progesterone,
        and testosterone. This process not only addresses symptoms of
        menopause and low testosterone but also contributes to a
        significant improvement in quality of life by restoring hormone
        levels to their optimal balance.
      </p>

      <h3>Benefits of Hormone Replacement Therapy</h3>
      <p>
        Choosing HRT at Impact Health &amp; Wellness provides numerous
        advantages, including:
      </p>
      <BenefitGrid items={benefits} />

      <h2>Why Choose Impact Health &amp; Wellness</h2>
      <p>
        Located in the community of Westerville, Ohio, Impact Health &amp;
        Wellness stands out as a leading health center offering Hormone
        Replacement Therapy. Our team of dedicated medical professionals,
        including specialists in regenerative medicine and wellness, is
        committed to delivering holistic, personalized care. We combine
        advanced HRT treatments with lifestyle and nutritional advice to
        ensure the best outcomes for our patients, enhancing their overall
        well-being and supporting them through every step of their wellness
        journey.
      </p>

      <h2>Ideal Candidates for Hormone Replacement Therapy</h2>
      <p>
        HRT is suitable for men and women experiencing symptoms related to
        hormonal imbalances, including:
      </p>
      <ul>
        <li>
          Women going through menopause or perimenopause experiencing hot
          flashes, mood swings, and other related symptoms.
        </li>
        <li>
          Men suffering from low testosterone levels manifesting as
          fatigue, loss of muscle mass, and decreased libido.
        </li>
      </ul>
      <p>Individuals with specific medical conditions affecting their hormone levels.</p>
      <ul>
        <li>
          However, HRT may not be suitable for everyone. Contraindications
          include certain cancers, blood clotting disorders, and
          uncontrolled high blood pressure. A thorough evaluation during
          your initial consultation will help determine if HRT is the right
          choice for you.
        </li>
      </ul>

      <h2>What to Expect from Your Hormone Replacement Therapy Session</h2>
      <ProcessSteps items={sessionSteps} />

      <h3>Risks and Side Effects of Hormone Replacement Therapy</h3>
      <p>
        While HRT offers significant benefits for those struggling with
        hormonal imbalances, it&rsquo;s important to be aware of potential
        risks and side effects. Common side effects may include mood
        swings, weight gain, acne, fatigue, and in some cases, more serious
        risks such as blood clots, stroke, heart disease, and certain types
        of cancer. Bioidentical hormone replacement therapy aims to
        minimize these risks by using hormones that are chemically
        identical to those your body produces naturally, though it&rsquo;s
        crucial to discuss all potential risks and benefits with your
        healthcare provider.
      </p>
      <p>
        At Impact Health &amp; Wellness, patient safety and informed
        decision-making are paramount. We ensure that all patients
        considering HRT are fully aware of both the potential benefits and
        risks involved, allowing for a well-informed treatment choice
        tailored to each individual&rsquo;s health profile and wellness
        goals.
      </p>

      <h2>Does HRT Help with Weight Loss?</h2>
      <p>
        Hormone Replacement Therapy (HRT) has been studied for its effects
        on various aspects of health, including weight management. While
        HRT is primarily prescribed to alleviate symptoms associated with
        hormonal imbalances, such as those experienced during menopause or
        andropause, it can indirectly influence weight. By restoring
        hormone levels to a more balanced state, HRT may help stabilize the
        body&rsquo;s metabolism and improve energy levels, potentially
        aiding in weight loss efforts.
      </p>
      <p>
        Specifically, balanced estrogen and testosterone levels can enhance
        muscle mass and fat distribution, contributing to a more favorable
        body composition. However, the primary goal of HRT is to relieve
        hormone deficiency symptoms, and any impact on weight loss can vary
        widely among individuals.
      </p>

      <h3>Can HRT Cause Weight Gain?</h3>
      <p>
        Concerns about weight gain are common among individuals considering
        Hormone Replacement Therapy. Some people may experience initial
        weight fluctuations as their body adjusts to the new hormone
        levels. These changes are often temporary and can be managed with
        dietary adjustments, exercise, and personalized healthcare guidance.
        It&rsquo;s important to discuss all potential side effects,
        including changes in weight, with your healthcare provider at
        Impact Health &amp; Wellness.
      </p>
      <p>
        They can provide detailed insights into how HRT might affect your
        body and suggest strategies to manage your weight effectively
        during treatment. Remember, the impact of HRT on weight is highly
        individual, and ongoing communication with your healthcare team is
        key to optimizing your overall health and well-being.
      </p>

      <h2>Cost of Hormone Replacement Therapy in Ohio</h2>
      <p>
        The cost of HRT at Impact Health &amp; Wellness varies depending on
        the individual treatment plan, type of hormones used, and duration
        of therapy. We pride ourselves on providing transparent pricing and
        flexible payment options to ensure our treatments are accessible to
        those in need. For more detailed information about the cost of HRT
        and to discuss your options, we invite you to contact our
        Westerville clinic directly.
      </p>

      <h2>Related Treatments</h2>
      <p>
        At Impact Health &amp; Wellness in Westerville, Ohio, we offer a
        comprehensive range of treatments that complement our Hormone
        Replacement Therapy services, catering to the diverse needs of our
        patients. These treatments are designed to enhance overall
        wellness, address specific medical conditions, and support the
        body&rsquo;s natural healing processes.
      </p>
      <ul>
        <li>
          <strong>
            <Link href="/peptide-therapy/">Peptides</Link>:
          </strong>{" "}
          Injectable treatments that use short chains of amino acids to
          signal and stimulate cellular regeneration and processes.
          Peptides can improve energy levels, boost muscle mass, enhance
          recovery, and support weight loss by mimicking natural bodily
          functions.
        </li>
        <li>
          <strong>
            <Link href="/anti-aging-wellness/">Dietary Consultations</Link>:
          </strong>{" "}
          Personalized nutritional planning aimed at optimizing your
          health. These consultations address dietary needs, manage
          weight, and support hormone balance through tailored nutrition
          plans, helping to improve overall well-being.
        </li>
        <li>
          <strong>
            <Link href="/iv-therapy/">IV Therapy</Link>:
          </strong>{" "}
          A method of delivering vitamins, minerals, and antioxidants
          directly into the bloodstream. IV Therapy can enhance immune
          function, increase energy levels, and support hormone therapy by
          ensuring optimal nutrient absorption and hydration.
        </li>
      </ul>

      <h2>
        Book Your Hormone Replacement Therapy Consultation in Westerville,
        Ohio
      </h2>
      <p>
        Take control of your hormonal health and well-being by choosing
        Impact Health &amp; Wellness for your Hormone Replacement Therapy.
        Our clinic, conveniently located in Westerville, Ohio, offers a
        serene and supportive environment for you to discuss your health
        concerns and treatment options.{" "}
        <Link href="/contact-us/">Schedule your consultation</Link> today and
        discover how we can help you achieve hormonal balance and improve
        your quality of life.
      </p>

      <h2>FAQs</h2>
      <Faq items={faqItems} />
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/hormone-replacement-therapy-hrt">
      <HormoneReplacementTherapyPage />
    </CMSRoute>
  );
}

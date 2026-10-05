import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { ProcessSteps } from "@/components/page/ProcessSteps";
import { Faq, faqSchema } from "@/components/page/Faq";
import { RelatedServices } from "@/components/page/RelatedServices";
import { AreaServedNote } from "@/components/page/AreaServedNote";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";
import Link from "next/link";

const fallbackMetadata: Metadata = {
  title: "PRP Therapy in Westerville | Advanced Healing & Relief",
  description:
    "PRP Therapy at Impact Health & Wellness in Westerville, OH accelerates healing and reduces pain. Learn about our advanced platelet-rich plasma treatments today.",
  alternates: { canonical: "/prp-therapy/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/prp-therapy", fallbackMetadata);
}

const faqItems = [
  {
    question: "What are the side effects of PRP therapy?",
    answer:
      "While PRP therapy is generally considered safe due to the use of your own blood, minimizing the risk of allergic reactions, some patients may experience mild side effects. These can include temporary pain or discomfort at the injection site, swelling, bruising and, in rare cases, infection. However, these side effects are typically short-lived and resolve on their own.",
  },
  {
    question: "How long does it take to see results from PRP therapy?",
    answer:
      "The time frame for seeing results from PRP therapy can vary depending on the individual and the condition being treated. Generally, patients may begin to notice improvements within a few weeks of treatment, with more significant results appearing after several months. Multiple sessions may be necessary to achieve optimal outcomes.",
  },
  {
    question: "Are PRP injections painful?",
    answer:
      "The discomfort level during PRP injections can vary from person to person. While some may only feel a mild pressure or discomfort, others might find the injections slightly more painful. Local anesthetic is often used to minimize pain during the procedure, making it tolerable for most patients.",
  },
];

const processItems = [
  {
    title: "Consultation",
    description:
      "Your journey begins with a personalized consultation where our team assesses your medical history, current health status and treatment goals. This initial meeting is crucial for determining if PRP therapy is the right option for you and for setting realistic expectations for the outcomes.",
  },
  {
    title: "Procedure",
    description:
      "On the day of your procedure, a small blood sample is drawn from your arm, similar to a routine blood test. This sample is then placed in a centrifuge to separate and concentrate the platelets from the red blood cells, creating the platelet-rich plasma. The PRP is then carefully injected into the treatment area, targeting the specific tissues that require healing or rejuvenation. The entire procedure usually takes less than an hour, with minimal discomfort.",
  },
  {
    title: "Recovery",
    description:
      "Recovery from PRP therapy is typically swift, with most patients returning to their daily activities immediately. You may experience mild soreness or swelling at the injection site, but these symptoms are temporary and generally resolve within a few days.",
  },
  {
    title: "Follow-ups",
    description:
      "Follow-up appointments are scheduled to monitor your progress and ensure optimal healing. Depending on your individual case, additional PRP sessions may be recommended to achieve the best results. Throughout each step, our team at Impact Health & Wellness is committed to providing support and guidance, ensuring a smooth and effective treatment process.",
  },
  {
    title: "Results",
    description:
      "PRP therapy offers a remarkable opportunity to experience both immediate and progressive improvements in your condition. As your body utilizes the concentrated growth factors in the PRP injection, expect to see continued benefits over several weeks, including tissue regeneration, reduced inflammation, and long-lasting pain relief and functional restoration. The timeframe for achieving optimal results can vary depending on the individual and the treated condition.",
  },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/prp-therapy/",
    url: "https://impacthealthoh.com/prp-therapy/",
    name: "PRP Therapy in Westerville | Advanced Healing & Relief",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-14T19:10:22+00:00",
    dateModified: "2026-04-10T11:26:06+00:00",
    description:
      "PRP Therapy at Impact Health & Wellness in Westerville, OH accelerates healing and reduces pain. Learn about our advanced platelet-rich plasma treatments today.",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/prp-therapy/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/prp-therapy/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/prp-therapy/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "PRP Therapy" },
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

async function PrpTherapyPage() {
  return (
    <PageLayout
      title="PRP Therapy"
      intro="Platelet-rich plasma therapy is an innovative treatment in the field of regenerative medicine that harnesses the healing power of your own blood to rejuvenate the body and promote healing."
      breadcrumbs={[{ label: "PRP Therapy" }]}
      schema={schema}
      showTestimonials
      afterContent={
        <>
          <RelatedServices items={getRelatedServices("/prp-therapy/")} />
          <ServicesOverview />
          <AreaServedNote />
        </>
      }
    >
      <p>
        Utilizing growth factors and proteins found in your blood, PRP
        therapy accelerates the natural healing process, making it an ideal
        option for those seeking non-surgical treatment options for
        multiple conditions.
      </p>
      <p>
        Located in Westerville, Ohio, Impact Health & Wellness is your
        destination for personalized PRP treatments.{" "}
        <Link href="/contact-us/">Book your consultation</Link> today to explore
        how PRP therapy can benefit you.
      </p>

      <h2>What is PRP Therapy?</h2>
      <p>
        PRP therapy involves concentrating platelets from your own blood
        using a centrifuge, then re-injecting this platelet-rich plasma into
        areas of the body that require healing. This concentration of
        platelets, rich in growth factors and proteins, stimulates tissue
        regeneration, collagen production and accelerates the healing of
        injured tendons, ligaments, muscles and joints. It’s a cornerstone
        of regenerative medicine that taps into the body’s inherent
        abilities to heal itself.
      </p>

      <h3>Benefits</h3>
      <ul>
        <li>Accelerated healing of sports injuries and sprains</li>
        <li>
          Improvement in joint pain and function for conditions like
          osteoarthritis
        </li>
        <li>Enhanced tissue regeneration for ligaments and tendons</li>
        <li>Less downtime compared to surgical procedures</li>
        <li>Natural healing process with minimal side effects</li>
      </ul>

      <h2>Why Choose Impact Health & Wellness</h2>
      <p>
        Choosing Impact Health & Wellness for your PRP therapy means
        entrusting your care to a team of professionals who are at the
        forefront of regenerative medicine in Westerville. Our clinic
        offers a holistic approach to wellness, combining PRP therapy with
        other treatments to optimize your health outcomes. With strategic
        partnerships enhancing our service range, you’re assured
        comprehensive care tailored to your specific needs.
      </p>

      <h2>Ideal Candidates for PRP Therapy</h2>
      <p>
        PRP therapy is suitable for a wide range of individuals,
        particularly those experiencing joint pain, sports injuries or
        conditions like plantar fasciitis and osteoarthritis. Ideal
        candidates are typically looking to address conditions or concerns
        such as:
      </p>
      <ul>
        <li>Golfer’s elbow</li>
        <li>Joint pain</li>
        <li>Ligament sprains</li>
        <li>Muscle injuries</li>
        <li>Osteoarthritis</li>
        <li>Plantar fasciitis</li>
        <li>Sports injuries</li>
        <li>Tendonitis</li>
        <li>Tennis elbow</li>
        <li>Chronic wounds</li>
        <li>Diabetic ulcers</li>
      </ul>
      <p>Contraindications may include certain blood disorders and acute infections.</p>

      <h2>What to Expect from Your PRP Therapy</h2>
      <p>
        Undergoing PRP therapy at Impact Health & Wellness involves a
        series of steps designed to ensure the most effective and
        comfortable experience. Here’s a detailed walkthrough of the
        process from consultation to follow-up.
      </p>
      <ProcessSteps items={processItems} />

      <h2>Cost of PRP Therapy in Ohio</h2>
      <p>
        The cost of PRP therapy in Westerville, Ohio, can vary based on the
        treatment area and the number of sessions required. At Impact
        Health & Wellness, we provide transparent pricing and personalized
        treatment plans to ensure you receive the best care possible.{" "}
        <Link href="/contact-us/">Contact us</Link> for more details and to
        discuss your options.
      </p>

      <h2>Related Treatments</h2>
      <p>
        At Impact Health & Wellness in Westerville, Ohio, we offer a range
        of complementary treatments that support your journey to optimal
        health and wellness. These services, like PRP therapy, leverage
        advanced medical technologies and natural healing processes to
        enhance your well-being. Here’s a closer look at some related
        treatments available at our clinic:
      </p>
      <ul>
        <li>
          <Link href="/regenerative-medicine/">Regenerative Treatments</Link>: This
          approach involves using donor tissue to repair and regenerate
          damaged tissues and organs, offering a promising solution for
          multiple orthopedic and degenerative conditions. It’s an ideal
          option for those seeking non-surgical alternatives for pain
          relief and tissue repair.
        </li>
        <li>
          <Link href="/iv-therapy/">IV Infusion Therapies</Link>: Delivering
          vitamins, minerals and medications directly into your bloodstream,
          IV infusion therapies can boost energy, enhance immune function
          and support recovery from illness or stress. This treatment is
          ideal for individuals seeking immediate benefits in their energy
          levels and overall vitality.
        </li>
      </ul>

      <h2>Book Your PRP Therapy Consultation in Westerville, Ohio</h2>
      <p>
        Discover the transformative potential of PRP therapy at Impact
        Health & Wellness. With our expert team of healthcare providers,
        welcoming facility and commitment to patient-centered care, we’re
        here to support your journey to improved health and wellness.
        Located conveniently in Westerville, Ohio, we’re easily accessible
        from Columbus, Dublin and Worthington.{" "}
        <Link href="/contact-us/">Book your consultation</Link> today and take the
        first step towards natural, effective healing.
      </p>

      <h2>Frequently Asked Questions</h2>
      <Faq items={faqItems} />
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/prp-therapy">
      <PrpTherapyPage />
    </CMSRoute>
  );
}

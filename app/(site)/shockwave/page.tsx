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
  title: "Shockwave Therapy in Westerville | Effective Pain Relief",
  description:
    "Get pain relief with Shockwave Therapy at Impact Health & Wellness in Westerville, OH. Non-invasive treatments for faster healing. Book your appointment today!",
  alternates: { canonical: "/shockwave/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/shockwave", fallbackMetadata);
}

const faqItems = [
  {
    question: "Can shockwave therapy be combined with other treatments?",
    answer:
      "Yes, shockwave therapy can be effectively combined with other treatment options such as physical therapy, chiropractic care, dry needling or regenerative treatments to enhance healing and pain relief. This integrative approach allows for a comprehensive treatment plan tailored to individual needs and conditions.",
  },
  {
    question:
      "How soon can I expect to see improvements after starting shockwave therapy?",
    answer:
      "Improvements can vary depending on the individual and the condition being treated. Some patients report relief after just a few sessions, while others may notice gradual improvements over the course of their treatment plan.",
  },
  {
    question: "How many shockwave sessions will I need?",
    answer:
      "The number of shockwave therapy sessions required varies based on your condition, the severity of symptoms and response to treatment. Typically, patients may need between 3 to 6 sessions, with each session spaced a week apart, to achieve optimal results.",
  },
];

const processItems = [
  {
    title: "Consultation",
    description:
      "Your treatment journey begins with a personalized consultation at our Westerville, Ohio office. During this session, one of our skilled healthcare professionals will review your medical history, discuss your symptoms and evaluate your condition to determine if this is the right treatment for you. This is also the perfect time for you to ask questions and address any concerns.",
  },
  {
    title: "Procedure",
    description:
      "Shockwave therapy sessions are quick and non-invasive, typically lasting about 15-20 minutes. During the procedure, you will be asked to relax in a comfortable position while the shockwave device is applied to the affected area. You may feel a tapping sensation, but the procedure is generally painless. Our team ensures that you are comfortable and informed throughout the entire process.",
  },
  {
    title: "Recovery",
    description:
      "One of the benefits of shockwave therapy is the minimal downtime. Most patients can resume their normal activities immediately after the session. You might experience mild soreness in the treated area, but this typically subsides within a few hours.",
  },
  {
    title: "Follow-ups",
    description:
      "Following your initial treatment, we'll schedule follow-up sessions to monitor your progress and adjust the treatment plan as needed. The number of sessions required varies based on your individual condition and response to the therapy. Our goal is to ensure optimal healing and pain relief, guiding you towards a quicker recovery and improved quality of life.",
  },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/shockwave/",
    url: "https://impacthealthoh.com/shockwave/",
    name: "Shockwave Therapy in Westerville | Effective Pain Relief",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-14T19:36:10+00:00",
    dateModified: "2026-04-10T11:29:54+00:00",
    description:
      "Get pain relief with Shockwave Therapy at Impact Health & Wellness in Westerville, OH. Non-invasive treatments for faster healing. Book your appointment today!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/shockwave/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/shockwave/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/shockwave/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Shockwave Therapy" },
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

async function ShockwavePage() {
  return (
    <PageLayout
      title="Shockwave Therapy"
      intro="Embrace the future of healing with Shockwave Therapy. Accelerate recovery, reduce pain, and improve mobility with this innovative, non-surgical treatment."
      breadcrumbs={[{ label: "Shockwave Therapy" }]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/shockwave-therapy.webp",
        alt: "Shockwave Therapy",
      }}
      afterContent={
        <>
          <RelatedServices items={getRelatedServices("/shockwave/")} />
          <ServicesOverview />
          <AreaServedNote />
        </>
      }
    >
      <p>
        Are you tired of living with chronic pain that limits your daily
        activities? Shockwave therapy at Impact Health & Wellness in
        Westerville, Ohio, could be the solution you’ve been searching for.
      </p>
      <p>
        Extracorporeal shockwave therapy (ESWT) is a non-invasive treatment
        that <Link href="/regenerative-medicine/">promotes healing</Link> and pain
        relief without the need for surgery or medication. Discover how
        Shockwave therapy can help you move beyond pain and towards a more
        active lifestyle by <Link href="/contact-us/">scheduling a consultation</Link>{" "}
        with us today.
      </p>

      <h2>What is Shockwave Therapy?</h2>
      <div className="not-prose aspect-video overflow-hidden rounded-xl">
        <video
          controls
          className="h-full w-full object-cover"
          poster="/videos/services/shockwave-therapy-poster.jpg"
        >
          <source src="/videos/services/shockwave-therapy.mp4" type="video/mp4" />
        </video>
      </div>
      <p>
        Shockwave therapy, also known as extracorporeal shockwave therapy
        (ESWT), is a highly effective treatment that uses sound waves to
        promote healing in injured tissues. These sound waves increase
        blood flow, stimulate the body’s natural healing processes and
        break down scar tissue.
      </p>
      <p>
        Shockwave therapy has been shown to safely and effectively treat a
        number of conditions including tendonitis, plantar fasciitis,
        tennis elbow and rotator cuff injuries. By addressing the root
        cause of pain and dysfunction, ESWT offers a significant
        improvement in quality of life for those suffering from chronic
        musculoskeletal conditions.
      </p>

      <h3>Benefits</h3>
      <ul>
        <li>Non-invasive treatment</li>
        <li>Pain relief and healing without medication</li>
        <li>Short treatment sessions with long-lasting results</li>
        <li>Improved mobility and quality of life</li>
        <li>High success rate in treating chronic conditions</li>
      </ul>

      <h2>Why Choose Impact Health & Wellness?</h2>
      <p>
        At Impact Health & Wellness, located in the heart of Central Ohio,
        we are committed to providing our patients with the highest
        standard of care. Our team of experienced physical therapists,
        nurse practitioners, rehabilitation specialists and chiropractors
        utilize a holistic approach to pain management and healing,
        ensuring that each patient receives personalized treatments and
        medical advice tailored to their specific needs. Our Westerville,
        Ohio facility is equipped with the latest technologies, ensuring
        you receive the most effective treatment possible.
      </p>

      <h2>Ideal Candidates for Shockwave Therapy</h2>
      <p>
        Shockwave therapy is suitable for individuals of all ages who are
        suffering from various musculoskeletal conditions, including:
      </p>
      <ul>
        <li>Chronic heel pain from plantar fasciitis</li>
        <li>Tennis elbow and other forms of tendonitis</li>
        <li>Rotator cuff injuries that limit shoulder movement</li>
        <li>
          Chronic pain conditions that have not improved with traditional
          treatments
        </li>
      </ul>
      <p>
        Contraindications for this treatment may include pregnancy, blood
        clotting disorders and the presence of a pacemaker. Our specialists
        will conduct a thorough assessment to ensure Shockwave therapy is
        the right option for you.
      </p>

      <h2>What to Expect from Your Shockwave Therapy</h2>
      <p>
        Undergoing Shockwave Therapy at Impact Health & Wellness is
        designed to be a seamless and comfortable experience. Here’s a
        detailed look at what you can expect during each phase of the
        treatment:
      </p>
      <ProcessSteps items={processItems} />

      <h2>Cost of Shockwave Therapy in Ohio</h2>
      <p>
        The cost of Shockwave Therapy can vary depending on the number of
        sessions required and the specific condition being treated. At
        Impact Health & Wellness, we strive to provide accessible and
        affordable care to our patients in Westerville and the surrounding
        areas. We encourage you to <Link href="/contact-us/">contact</Link> our
        office to discuss your options and learn of any special offerings
        for new patients.
      </p>

      <h2>Related Treatments</h2>
      <p>
        At Impact Health & Wellness in Westerville, Ohio, we are dedicated
        to providing a comprehensive range of treatments that complement
        Shockwave Therapy, focusing on holistic and regenerative approaches
        to healthcare. These services are designed to address various
        aspects of musculoskeletal health, ensuring that we can meet your
        individual needs and preferences.
      </p>
      <ul>
        <li>
          <Link href="/chiropractic-care/">Chiropractic Care</Link>: This
          treatment involves spinal adjustments and manipulations to
          alleviate pain, improve alignment and enhance overall physical
          function. It’s an excellent choice for those seeking a natural
          and non-invasive solution to chronic pain and musculoskeletal
          issues.
        </li>
        <li>
          <Link href="/prp-therapy/">PRP Therapy</Link>: Platelet-Rich Plasma
          (PRP) therapy utilizes the healing components of your own blood
          to repair damaged tissues and reduce inflammation. Ideal for
          individuals looking for advanced regenerative treatments to
          accelerate recovery and heal more effectively.
        </li>
        <li>
          <Link href="/ha-gel-injections/">HA Gel Injections</Link>: Hyaluronic
          acid gel injections provide lubrication and cushioning to joints
          affected by osteoarthritis, offering pain relief and improved
          mobility. This option is perfect for patients seeking targeted
          solutions for joint pain without resorting to surgery.
        </li>
        <li>
          <Link href="/neuropathy-treatments/">Neuropathy Treatments</Link>: Our
          specialized neuropathy treatments are designed to address the
          root causes of nerve pain and dysfunction, using a combination of
          therapies to restore nerve health and reduce symptoms. Suitable
          for those experiencing neuropathic pain and looking for
          comprehensive care options.
        </li>
      </ul>

      <h2>Book Your Shockwave Therapy Consultation in Westerville, Ohio</h2>
      <p>
        Don’t let chronic pain hold you back any longer. At Impact Health &
        Wellness, we’re dedicated to helping our patients achieve optimal
        health and wellness through personalized, innovative treatment
        plans. If you’re in Westerville, Columbus, Dublin, Gahanna or
        Central Ohio, <Link href="/contact-us/">contact us</Link> to schedule an
        appointment and take the first step towards a pain-free life.
      </p>

      <h2>FAQs</h2>
      <Faq items={faqItems} />
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/shockwave">
      <ShockwavePage />
    </CMSRoute>
  );
}

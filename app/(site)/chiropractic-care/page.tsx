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
  title: "Expert Back & Neck Pain Chiropractor in Westerville, OH",
  description:
    "Discover top-tier alignment with the leading chiropractic care in Westerville. Relieve stiffness and restore proper posture today. Call to book a visit!",
  alternates: { canonical: "/chiropractic-care/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/chiropractic-care", fallbackMetadata);
}

const faqItems = [
  {
    question: "How often should I receive chiropractic adjustments?",
    answer:
      "The frequency of chiropractic adjustments varies based on individual health needs, the nature of the condition being treated, and the goals of the treatment plan. After your initial assessment, our chiropractors will recommend a schedule that best supports your recovery and wellness objectives.",
  },
  {
    question: "Are chiropractic treatments safe during pregnancy?",
    answer:
      "Yes, chiropractic care is considered safe during pregnancy. Our chiropractors are trained in techniques that avoid unnecessary pressure on the abdomen, providing relief from pregnancy-related discomfort without compromising the health of the mother or the fetus.",
  },
  {
    question: "Can chiropractic care help with headaches and migraines?",
    answer:
      "Many patients find relief from headaches and migraines through chiropractic adjustments, particularly if their headaches are related to neck tension or misalignment of the spine. Our treatment plans are personalized to address the specific causes of your headaches.",
  },
  {
    question:
      "What's the difference between roller table therapy and traditional massage therapy?",
    answer:
      "Roller table therapy uses a mechanized table to gently massage the spine and back muscles, improving circulation and relieving tension. Traditional massage therapy is performed by a massage therapist who applies manual techniques to target specific areas of tension throughout the body.",
  },
  {
    question: "How does cupping therapy complement chiropractic care?",
    answer:
      "Cupping therapy enhances the benefits of chiropractic adjustments by promoting blood flow, reducing muscle tension, and facilitating the healing of soft tissues. When used in conjunction with chiropractic care, cupping can help achieve more comprehensive pain relief and muscle relaxation.",
  },
];

// Yoast schema graph captured from the live Chiropractic Care page, preserved as-is.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/chiropractic-care/",
    url: "https://impacthealthoh.com/chiropractic-care/",
    name: "Expert Back & Neck Pain Chiropractor in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-11T21:53:09+00:00",
    dateModified: "2026-04-10T10:59:21+00:00",
    description:
      "Discover top-tier alignment with the leading chiropractic care in Westerville. Relieve stiffness and restore proper posture today. Call to book a visit!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/chiropractic-care/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/chiropractic-care/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/chiropractic-care/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Chiropractic Care" },
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
    title: "Pain Relief",
    description:
      "Relief from back and neck pain, sciatica, and other musculoskeletal issues.",
  },
  {
    title: "Improved Mobility",
    description: "Improved mobility and range of motion.",
  },
  {
    title: "Nervous System Support",
    description:
      "Enhanced nervous system function and overall well-being.",
  },
  {
    title: "Less Reliance on Medication",
    description: "Reduction in reliance on pain medication.",
  },
  {
    title: "Personalized Plans",
    description: "Personalized care plans tailored to individual health goals.",
  },
];

async function ChiropracticCarePage() {
  return (
    <PageLayout
      title="Chiropractic Care"
      eyebrow="Expert Care in Westerville"
      intro="Welcome to Impact Health & Wellness, your premier destination for holistic chiropractic care in Westerville, Ohio. Specializing in a wide range of treatments from spinal adjustments to therapeutic massage, our facility is dedicated to revolutionizing patient care with an emphasis on personalized, multidisciplinary approaches. Whether you're seeking relief from back pain, neck pain, or looking for a holistic path to wellness, our expert team is here to support your health journey."
      breadcrumbs={[{ label: "Chiropractic Care" }]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/chiropractic-care-hub.jpg",
        alt: "Impact Health & Wellness office",
      }}
      afterContent={
        <>
          <RelatedServices items={getRelatedServices("/chiropractic-care/")} />
          <ServicesOverview />
          <AreaServedNote />
        </>
      }
    >
      <h2>What is Chiropractic Care?</h2>
      <p>
        Chiropractic Care involves the diagnosis and manipulative treatment of
        misalignments of the joints, particularly those of the spinal column,
        which are believed to cause other disorders by affecting the nerves,
        muscles, and organs. This non-invasive, drug-free approach focuses on
        manual adjustments and manipulations to improve overall health and
        alleviate pain.
      </p>

      <h3>Benefits of Chiropractic Care</h3>
      <p>
        Choosing chiropractic care at Impact Health & Wellness offers
        numerous benefits, including:
      </p>
      <BenefitGrid items={benefits} />

      <h2>Why Choose Impact Health & Wellness</h2>
      <p>At Impact Health & Wellness, we stand out for several reasons:</p>
      <ul>
        <li>
          <strong>Expert Care Team:</strong> Our practitioners, including
          chiropractors, physical therapists, and massage therapists, bring
          years of experience and a passion for patient care.
        </li>
        <li>
          <strong>Holistic Approach:</strong> We offer a comprehensive suite
          of services that go beyond chiropractic adjustments to include
          massage therapy, physical therapy, and more.
        </li>
        <li>
          <strong>State-of-the-Art Facilities:</strong> Located in
          Westerville and serving Central Ohio, our clinic is equipped with
          the latest in chiropractic and wellness technology.
        </li>
      </ul>

      <h2>Our Chiropractic & Rehab Services at Impact Health & Wellness</h2>
      <p>
        At Impact Health & Wellness, located in Westerville, Ohio, we offer a
        comprehensive suite of chiropractic and rehabilitation services
        designed to address a wide range of conditions and promote overall
        well-being. Our team of experienced professionals is committed to
        providing personalized, effective treatment plans to support your
        health journey.
      </p>

      <h3>Chiropractic Adjustments</h3>
      <p>
        Our expert chiropractors employ gentle, precise techniques to
        realign your spine, enhancing joint mobility, relieving pain, and
        restoring balance to your body. Experience the benefits of a
        properly aligned spine and embrace a life free from discomfort.
      </p>

      <h3>Spinal Decompression</h3>
      <p>
        Alleviate the discomfort of herniated discs, spinal stenosis, and
        other spinal conditions with our{" "}
        <Link href="/chiropractic-care/spinal-decompression/">
          spinal decompression
        </Link>{" "}
        therapy. This non-invasive treatment method gently stretches the
        spine to relieve nerve pressure and reduce pain, offering a safe
        alternative to surgical interventions.
      </p>

      <h3>Roller Table Therapy</h3>
      <p>
        Complement your chiropractic care with roller table therapy, a
        treatment designed to support spinal health, alleviate muscle
        tension, and promote relaxation. Enjoy the soothing benefits of this
        therapy as part of your comprehensive recovery plan, fostering
        quicker healing and enhanced spinal alignment.
      </p>

      <h3>Chiropractic Care for Pregnancy and Infants</h3>
      <p>
        Our clinic provides specialized chiropractic adjustments for
        expectant mothers and infants, focusing on gentle techniques that
        offer comfort during pregnancy and support the healthy development
        of your infant&apos;s spine. Trust in our care to ease pregnancy-related
        discomfort and ensure a strong foundation for your child&apos;s
        musculoskeletal health.
      </p>

      <h3>Diagnostic Imaging</h3>
      <p>
        Our state-of-the-art{" "}
        <Link href="/chiropractic-care/diagnostics/">imaging techniques</Link>{" "}
        provide clear insights into your musculoskeletal system, enabling
        our team to develop targeted, effective treatment plans tailored to
        your specific needs and conditions.
      </p>

      <h3>Physical Therapy</h3>
      <p>
        Our dedicated{" "}
        <Link href="/chiropractic-care/physical-therapy/">
          physical therapists
        </Link>{" "}
        will guide you through personalized rehabilitation programs,
        addressing injuries, improving mobility, and boosting your overall
        quality of life through expert care and support.
      </p>

      <h3>Cupping Therapy</h3>
      <p>
        Integrated into your personalized treatment plan, cupping therapy
        can amplify the effects of other therapeutic modalities,
        contributing to a holistic approach to your well-being.
      </p>

      <h2>Ideal Candidates for Chiropractic Care</h2>
      <p>
        Our chiropractic services are ideal for individuals of all ages
        experiencing:
      </p>
      <ul>
        <li>Acute or chronic back, neck, and shoulder pain.</li>
        <li>
          Discomfort from car accidents, workplace injuries, or sports
          injuries.
        </li>
        <li>Issues with mobility or chronic conditions like sciatica.</li>
      </ul>

      <h2>What to Expect from Your Chiropractic Care Session</h2>
      <p>
        Your first visit to Impact Health & Wellness will include a
        comprehensive evaluation to understand your health history and
        current concerns. Following this, our chiropractors will develop a
        customized treatment plan that may include spinal adjustments,
        massage therapy, or other modalities to address your specific
        needs.
      </p>

      <h2>Cost of Chiropractic Care in Westerville, OH</h2>
      <p>
        The cost of chiropractic care varies depending on the treatment
        plan. We strive for transparency in pricing and offer various
        payment options to accommodate our patients. Contact us to discuss
        your needs and learn more about our services.
      </p>

      <h2>Other Services at Impact Health & Wellness</h2>
      <p>
        At Impact Health & Wellness in Westerville, Ohio, we offer a broad
        spectrum of services to address various health concerns:
      </p>
      <ul>
        <li>
          <strong>Anti-aging & Weight-loss:</strong> Combining nutritional
          guidance, tailored exercise regimens, and injectable therapies to
          improve metabolic health and physical appearance.
        </li>
        <li>
          <strong>Wound Care:</strong> Specialized treatments including
          hyperbaric oxygen therapy and advanced dressings to accelerate the
          healing of chronic and acute wounds.
        </li>
        <li>
          <strong>Regenerative Medicine:</strong> Utilizing cutting-edge
          techniques such as stem cell therapy and platelet-rich plasma
          (PRP) injections to repair damaged tissues and alleviate pain
          without surgery.
        </li>
      </ul>
      <p>
        These services reflect our commitment to providing holistic,
        comprehensive care to promote overall well-being and address
        specific health issues within our community in Westerville and the
        surrounding Central Ohio area.
      </p>

      <h2>Book Your Chiropractic Care Consultation in Westerville, Ohio</h2>
      <p>
        Ready to experience the benefits of chiropractic care?{" "}
        <Link href="/contact-us/">Contact</Link> Impact Health & Wellness today to
        schedule your consultation. Let us be your partner in achieving
        optimal health and wellness.
      </p>

      <h2>Frequently Asked Questions</h2>
      <Faq items={faqItems} />
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/chiropractic-care">
      <ChiropracticCarePage />
    </CMSRoute>
  );
}

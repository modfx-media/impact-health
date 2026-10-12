import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/page/PageLayout";
import { BenefitGrid } from "@/components/page/BenefitGrid";
import { Faq, faqSchema } from "@/components/page/Faq";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";

const fallbackMetadata: Metadata = {
  title: "Expert Personal Injury Treatment & Care in Westerville, OH",
  description:
    "Personal injury recovery starts at Impact Health & Wellness in Westerville, OH. Get expert care and personalized rehabilitation for faster, effective healing.",
  alternates: { canonical: "/personal-injuries/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/personal-injuries", fallbackMetadata);
}

const faqItems = [
  {
    question:
      "How long does a typical recovery program last at Impact Health & Wellness?",
    answer:
      "The duration of a recovery program at Impact Health & Wellness varies depending on the severity of the injury, the specific treatments required, and the individual’s response to therapy. Our personalized approach means each patient’s recovery timeline is tailored to their unique situation, with most programs ranging from a few weeks to several months.",
  },
  {
    question:
      "Can Impact Health & Wellness assist with recovery from injuries not listed, such as repetitive strain injuries or post-operative complications?",
    answer:
      "Yes, Impact Health & Wellness offers comprehensive care for a wide range of injuries beyond those explicitly listed, including repetitive strain injuries and complications following surgery. Our holistic approach and multidisciplinary team allow us to create customized treatment plans for various conditions, ensuring each patient receives the care they need for a full recovery.",
  },
  {
    question:
      "What kind of support does Impact Health & Wellness offer for dealing with the emotional impact of personal injuries?",
    answer:
      "Understanding that personal injuries can have significant emotional and psychological effects, Impact Health & Wellness provides support services designed to address these aspects. Our care programs include access to counseling and stress management techniques, helping patients cope with the emotional challenges associated with their injuries and recovery process.",
  },
  {
    question:
      "How does Impact Health & Wellness work with insurance companies to cover the cost of treatments?",
    answer:
      "Impact Health & Wellness collaborates closely with most major insurance providers to ensure that our patients receive the maximum coverage possible for their treatments. Our administrative team assists patients in navigating their insurance benefits, submitting claims, and advocating on their behalf to minimize out-of-pocket expenses.",
  },
  {
    question:
      "Are there any preventive care services offered at Impact Health & Wellness to reduce the risk of future personal injuries?",
    answer:
      "Yes, in addition to rehabilitation and recovery services, Impact Health & Wellness offers preventive care programs focused on minimizing the risk of future injuries. These services include ergonomic assessments, lifestyle and nutritional counseling, strength and conditioning programs, and education on injury prevention techniques. Our goal is to not only heal but also empower our patients to maintain optimal health and prevent recurrences.",
  },
];

// Yoast schema graph captured from the live Personal Injuries page, plus a FAQPage node built from the FAQs below.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/personal-injuries/",
    url: "https://impacthealthoh.com/personal-injuries/",
    name: "Expert Personal Injury Treatment & Care in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-11T21:19:06+00:00",
    dateModified: "2026-04-10T11:25:06+00:00",
    description:
      "Personal injury recovery starts at Impact Health & Wellness in Westerville, OH. Get expert care and personalized rehabilitation for faster, effective healing.",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/personal-injuries/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/personal-injuries/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/personal-injuries/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Personal Injuries" },
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

async function PersonalInjuriesPage() {
  return (
    <PageLayout
      title="Personal Injuries"
      eyebrow="Personal Injury Recovery"
      intro="Navigate your recovery from personal injuries with our dedicated support. Regain your strength and wellness with tailored care."
      breadcrumbs={[{ label: "Personal Injuries" }]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/personal-injuries.jpg",
        alt: "personal injuries",
      }}
      afterContent={
        <>
          <RelatedServices items={getRelatedServices("/personal-injuries/")} />
          <ServicesOverview />
        </>
      }
    >
      <p>
        At Impact Health & Wellness, located inf Westerville, Ohio, we
        understand the complexities of recovering from personal injuries. Our
        all-inclusive health center is dedicated to providing comprehensive
        care and support to individuals affected by various injuries. With a
        focus on regenerative medicine, chiropractic care, and advanced wound
        healing, we offer personalized, multidisciplinary treatments designed
        to accelerate your recovery process and restore your well-being.
      </p>

      <h2>The Role of Holistic Care in Personal Injury Recovery</h2>
      <p>
        Personal injury recovery goes beyond the physical healing of wounds.
        It encompasses the entire spectrum of an individual’s health,
        including physical therapy, pain management, and emotional support.
        Our holistic approach ensures that every aspect of your recovery
        journey is addressed, promoting faster healing and a more complete
        return to wellness.
      </p>

      <h2>Why Choose Impact Health & Wellness for Personal Injuries</h2>
      <p>
        At Impact Health & Wellness, we stand ready to guide you through this
        tumultuous journey, offering hope and a path towards reclaiming your
        life. Our clinic is uniquely positioned to cater to those grappling
        with the aftermath of workers’ compensation and auto accident
        injuries, providing specialized services designed for your
        comprehensive recovery.
      </p>
      <BenefitGrid
        items={[
          {
            title: "Expert Care Team",
            description:
              "The cornerstone of our approach is our multidisciplinary team of medical professionals, physical therapists, and chiropractors, each bringing a wealth of experience and specialized knowledge in injury recovery.",
          },
          {
            title: "Advanced Treatment Options",
            description:
              "Leveraging the latest advancements in medical science, our clinic offers a broad spectrum of regenerative therapies, chiropractic adjustments, and advanced wound care options.",
          },
          {
            title: "Personalized Recovery Plans",
            description:
              "Recognizing the individuality of each patient’s journey, we craft personalized recovery plans that align with your specific health conditions, challenges, and objectives.",
          },
        ]}
      />

      <h2>Our Services at Impact Health & Wellness</h2>
      <p>
        At Impact Health & Wellness, we offer a comprehensive suite of
        services tailored to meet the needs of individuals recovering from
        personal injuries. Our multidisciplinary approach ensures that each
        patient receives holistic care designed to address their specific
        conditions and facilitate a swift and effective recovery process.
      </p>

      <h3>Workers’ Compensation</h3>
      <p>
        If you’ve suffered an injury in the workplace, our dedicated team is
        here to support you through your recovery. We specialize in providing
        top-notch care for workers’ compensation injuries, focusing on
        restoring your strength, functionality, and well-being. Our goal is
        to help you navigate the complexities of workplace injuries with
        comprehensive and compassionate care, ensuring a smooth path back to
        your professional life.
      </p>

      <h3>Auto Accident Injury Rehabilitation</h3>
      <p>
        The road to recovery following an auto accident involves both
        physical and emotional healing. Our specialized auto accident injury
        rehabilitation programs are crafted to meet the unique needs of those
        affected by vehicular accidents. From treating whiplash to addressing
        complex musculoskeletal injuries, our tailored approach aims to
        restore your health and mobility, enabling you to overcome the
        challenges posed by such traumatic events.
      </p>

      <h3>Chiropractic Care</h3>
      <p>
        Chiropractic care stands as a fundamental component of our personal
        injury recovery services. Through precise adjustments and focused
        spinal care, we aim to alleviate pain, enhance mobility, and foster
        your body’s innate healing abilities. Our expert chiropractors employ
        a variety of techniques to ensure you receive the most effective care
        possible, contributing to your overall recovery and long-term health.
      </p>

      <h3>Physical Therapy</h3>
      <p>
        Our physical therapy services are designed with one goal in mind: to
        help you regain strength, mobility, and function. By working closely
        with you, we develop personalized rehabilitation plans that cater to
        your specific needs and recovery goals. Through targeted exercises
        and therapeutic modalities, our physical therapists are dedicated to
        helping you achieve optimal health and well-being.
      </p>

      <h3>Diagnostic Imaging</h3>
      <p>
        In the realm of personal injury recovery, accurate diagnosis is
        paramount. Our state-of-the-art diagnostic imaging services play a
        crucial role in understanding the full scope of your injuries. By
        leveraging advanced imaging technologies, we are able to obtain
        precise assessments that guide our comprehensive treatment plans,
        ensuring targeted and effective care.
      </p>

      <h3>Pain Management</h3>
      <p>
        Effective pain management is essential for a successful recovery
        from personal injury. Our clinic offers a wide array of pain relief
        strategies and therapies, tailored to alleviate your discomfort and
        improve your quality of life. From medication management to
        non-invasive therapies, our pain management solutions are designed to
        address your specific pain concerns, helping you regain
        functionality and comfort.
      </p>

      <h2>Ideal Candidates for Our Recovery Programs</h2>
      <p>
        Whether you’re dealing with the physical and emotional toll of an
        auto accident, navigating the complexities of workplace-related
        injuries, or striving to overcome sports-related setbacks, our
        tailored programs are here to support your journey towards healing.
      </p>
      <p>
        Furthermore, our services extend to those in the midst of surgical
        recovery or in need of specialized wound care, ensuring that every
        aspect of your healing process is addressed. Additionally, if chronic
        pain or mobility issues have been a constant challenge in your life
        due to past injuries, our expert team is equipped with the knowledge
        and resources to provide the care you need.
      </p>
      <p>
        Our approach at Impact Health & Wellness is holistic and
        patient-centered, focusing on personalized treatment plans that
        encompass everything from chiropractic care and physical therapy to
        advanced pain management techniques.
      </p>

      <h2>What to Expect During Your Recovery Program</h2>
      <p>
        We begin with a thorough assessment to understand the full extent of
        your injuries and health status. Based on this assessment, we’ll
        develop a personalized treatment plan that may include a combination
        of physical therapy, chiropractic care, regenerative treatments, and
        supportive therapies aimed at enhancing your healing process and
        improving your quality of life.
      </p>

      <h2>The Impact of Comprehensive Care on Recovery Outcomes</h2>
      <p>
        By choosing Impact Health & Wellness, you benefit from a coordinated
        care approach that not only aims to heal your injuries but also to
        rehabilitate your overall health. Our comprehensive care model has
        been shown to significantly improve recovery outcomes, reduce
        recovery times, and enhance patients’ overall quality of life.
      </p>

      <h2>Other Services at Impact Health & Wellness</h2>
      <p>
        From enhancing physical appearance and managing weight to
        facilitating the healing of complex wounds and employing
        groundbreaking regenerative techniques, our clinic provides holistic,
        patient-centered care.
      </p>
      <BenefitGrid
        items={[
          {
            title: "Anti-aging & Weight-loss",
            description:
              "Our Anti-aging & Weight-loss programs combine nutritional counseling, exercise regimens, and potentially injectable treatments to help patients achieve a healthier weight and youthful vitality.",
          },
          {
            title: "Wound Care",
            description:
              "Specializing in the treatment of chronic and acute wounds, our Wound Care services utilize advanced techniques like hyperbaric oxygen therapy to accelerate healing, prevent infection, and improve outcomes for patients with diabetic ulcers, surgical wounds, and other types of injuries requiring expert care.",
          },
          {
            title: "Regenerative Medicine",
            description:
              "Our minimally invasive procedures aim to repair damaged tissues and alleviate pain without the need for surgery, offering hope and healing for conditions ranging from joint degeneration to sports injuries.",
          },
        ]}
      />

      <h2>Booking Your Consultation in Westerville, Ohio</h2>
      <p>
        Begin your journey to recovery with Impact Health & Wellness.{" "}
        <Link href="/contact-us/">Contact us</Link> today to schedule your
        consultation and learn more about how our personalized care programs
        can support your recovery from personal injuries. Let us help you
        reclaim your health and well-being.
      </p>

      <h2>FAQs</h2>
      <Faq items={faqItems} />
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/personal-injuries">
      <PersonalInjuriesPage />
    </CMSRoute>
  );
}

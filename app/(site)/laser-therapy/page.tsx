import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { BenefitGrid } from "@/components/page/BenefitGrid";
import { ProcessSteps } from "@/components/page/ProcessSteps";
import { Faq, faqSchema } from "@/components/page/Faq";
import { RelatedServices } from "@/components/page/RelatedServices";
import { AreaServedNote } from "@/components/page/AreaServedNote";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { getRelatedServices } from "@/lib/nav-data";
import Link from "next/link";

const fallbackMetadata: Metadata = {
  title: "Laser Therapy in Westerville | Non-Invasive Pain Relief",
  description:
    "Laser therapy in Westerville at Impact Health & Wellness offers non-invasive treatments for pain relief and healing. Contact us today to learn how we can help!",
  alternates: { canonical: "/laser-therapy/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/laser-therapy", fallbackMetadata);
}

const faqItems = [
  {
    question: "What conditions can be treated with Class IV Laser Therapy?",
    answer:
      "This therapy is versatile, effectively treating a range of conditions including chronic pain, arthritis, tendonitis, neuropathy and injuries related to sports or repetitive strain. It's also used for accelerating post-surgical healing.",
  },
  {
    question: "How many medical laser therapy sessions will I need?",
    answer:
      "The number of medical laser therapy sessions required varies depending on the individual's condition, the severity of the symptoms, and the body's response to treatment. Typically, a treatment plan may involve several sessions spread over a few weeks to achieve optimal results.",
  },
  {
    question:
      "What happens if I stop receiving Summus Horizon laser treatments?",
    answer:
      "If you stop receiving Summus Horizon laser treatments, you may experience a halt or slowdown in the therapeutic progress and potential relief achieved from previous sessions. It's important to follow the recommended treatment plan to fully benefit from the cumulative effects of laser therapy.",
  },
  {
    question: "Can I combine this treatment with other pain management therapies?",
    answer:
      "Yes. In fact, it's usually most beneficial to combine laser therapy with other pain management therapies such as physical therapy, chiropractic care or regenerative medicine. Integrating multiple treatment modalities can enhance overall effectiveness and provide a more comprehensive approach to pain relief and healing.",
  },
];

const summusBenefits = [
  {
    title: "Advanced Technology",
    description:
      "The Summus Horizon is a cutting-edge laser technology platform that delivers precise and controlled laser light, allowing for deeper penetration and a broader range of therapeutic effects.",
  },
  {
    title: "Customizable Treatment Options",
    description:
      "The Summus Horizon laser system offers a range of wavelengths and power settings, enabling us to tailor each treatment to the specific needs of our patients. This flexibility ensures that we can optimize treatment plans for maximum efficacy.",
  },
  {
    title: "Proven Efficacy",
    description:
      "Lasers from Summus Medical, LLC are backed by research that supports their effectiveness in promoting tissue healing, reducing inflammation and providing pain relief. The therapeutic effects of laser therapy have been documented in various clinical studies, demonstrating significant improvements in patient outcomes.",
  },
  {
    title: "Safety and Comfort",
    description:
      "These lasers are designed with patient safety and comfort in mind. The non-invasive nature of laser therapy, combined with the advanced features of the Summus system, ensures a safe treatment experience without the need for downtime.",
  },
];

const processItems = [
  {
    title: "Consultation",
    description:
      "Your journey begins with a one-on-one consultation at our Westerville, Ohio, clinic. During this initial meeting, our experts will review your medical history, assess your condition and discuss your health goals. This is an opportunity to address any questions or concerns you may have about the laser therapy. In many cases, laser therapy will be recommended as one piece of a comprehensive treatment program.",
  },
  {
    title: "Procedure",
    description:
      "The laser therapy session is non-invasive and typically lasts between 15 to 30 minutes, depending on the area being treated. You'll relax in a comfortable position while the Summus medical laser device is directed at the target area, and you'll feel a gentle warmth as the Summus laser is applied to the skin.",
  },
  {
    title: "Recovery",
    description:
      "One of the advantages of Class IV laser therapy is the minimal recovery time. Most patients can resume their normal activities immediately after the session. Our team will provide post-treatment care instructions to ensure optimal healing.",
  },
  {
    title: "Follow-Ups",
    description:
      "To achieve the best results, multiple sessions may be necessary. We'll schedule follow-up appointments to monitor your progress and make any necessary adjustments to your treatment plan, ensuring you achieve the maximum therapeutic benefits from your laser therapy.",
  },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/laser-therapy/",
    url: "https://impacthealthoh.com/laser-therapy/",
    name: "Laser Therapy in Westerville | Non-Invasive Pain Relief",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-14T20:10:09+00:00",
    dateModified: "2026-04-10T11:18:43+00:00",
    description:
      "Laser therapy in Westerville at Impact Health & Wellness offers non-invasive treatments for pain relief and healing. Contact us today to learn how we can help!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/laser-therapy/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/laser-therapy/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/laser-therapy/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Laser Therapy" },
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

async function LaserTherapyPage() {
  return (
    <PageLayout
      title="Laser Therapy"
      intro="Laser therapy in Westerville at Impact Health & Wellness offers non-invasive treatments for pain relief and healing."
      breadcrumbs={[{ label: "Laser Therapy" }]}
      schema={schema}
      showTestimonials
      afterContent={
        <>
          <RelatedServices items={getRelatedServices("/laser-therapy/")} />
          <ServicesOverview />
          <AreaServedNote />
        </>
      }
    >
      <p>
        Discover the healing power of light with Class IV laser therapy at
        Impact Health & Wellness, your premier destination for advanced pain
        management and <Link href="/regenerative-medicine/">
          healing technologies
        </Link>{" "}
        in Westerville, Ohio. The Summus Horizon medical laser is an
        innovative, non-invasive treatment that offers a drug-free solution
        to pain relief and healing.
      </p>
      <p>
        Whether you’re dealing with chronic pain, neuropathy or looking for
        post-surgery recovery options, laser therapy might be the answer
        you’ve been searching for. <Link href="/contact-us/">Contact us</Link>{" "}
        today to schedule a consultation and explore how laser therapy can
        help you achieve a better quality of life.
      </p>

      <h2>What is Class IV Laser Therapy?</h2>
      <div className="not-prose aspect-video overflow-hidden rounded-xl">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/PJ3g5vVhBGI"
          title="Heal Your Body With the Power of Light"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <p>
        Class IV laser treatments utilize specific wavelengths of laser
        light to penetrate deeply into the tissue, promoting healing and
        pain relief at the cellular level. The Summus Horizon medical laser
        delivers precise and controlled energy to the affected areas,
        stimulating the body’s natural recovery processes and cellular
        energy production (ATP).
      </p>
      <p>
        This therapeutic effect can lead to reduced inflammation, enhanced
        blood flow and accelerated tissue repair, offering relief for a
        range of conditions from neuropathy to sports injuries.
      </p>

      <h3>Benefits</h3>
      <ul>
        <li>Pain relief from conditions like neuropathy, arthritis and sports injuries</li>
        <li>Enhanced tissue repair and cell growth for faster recovery</li>
        <li>Improved vascular activity and blood flow</li>
        <li>Reduced inflammation and swelling</li>
        <li>Increased joint flexibility and range of motion</li>
        <li>Stimulation of nerve function and repair</li>
      </ul>

      <h2>Why Choose Impact Health & Wellness?</h2>
      <p>
        Impact Health & Wellness stands out in the landscape of laser
        therapy, advanced wound care and chiropractic services in
        Westerville, Ohio. Our clinic is home to a dedicated team of
        professionals who are committed to providing expert treatment
        protocols using the latest, most innovative solutions in the field
        of regenerative medicine and other medical technologies.
      </p>

      <h2>Why We Use the Summus Horizon for Laser Therapy</h2>
      <p>
        At Impact Health & Wellness, we are committed to providing our
        patients with the most advanced and effective treatments available.
        That’s why we’ve chosen Summus Medical Laser for our Class IV laser
        therapy treatments. Here are some unique advantages of Summus laser
        treatments:
      </p>
      <BenefitGrid items={summusBenefits} />

      <h2>Ideal Candidates for Laser Therapy</h2>
      <p>
        Laser therapy is suitable for patients of all ages seeking relief
        from various conditions, including:
      </p>
      <ul>
        <li>Chronic pain and inflammation</li>
        <li>Neuropathy and nerve-related conditions</li>
        <li>Post-surgical recovery and wound healing</li>
        <li>Joint and muscle injuries</li>
      </ul>
      <p>
        Contraindications include pregnancy, cancerous areas and
        photosensitivity to laser light. Our team will assess your medical
        history and current health status to ensure laser therapy is a safe
        and effective option for you.
      </p>

      <h2>Before &amp; Afters</h2>
      <p>
        Patients who have undergone Class IV Laser Therapy at our clinic
        have experienced transformative results. Many report a noticeable
        decrease in pain and improved mobility even after just a few
        sessions. The actual benefits can be seen over time, with the area
        treated becoming less inflamed, more functional and free from pain.
      </p>

      <h2>What to Expect from Your Laser Therapy Session</h2>
      <p>
        Embarking on Class IV Laser Therapy at Impact Health & Wellness
        involves a series of steps designed to ensure the most effective
        and comfortable treatment experience. Here’s what you can
        anticipate at each stage:
      </p>
      <ProcessSteps items={processItems} />

      <h3>Risks and Side Effects</h3>
      <p>
        Class IV laser therapy is widely recognized for its safety and
        efficacy. However, like all medical treatments, it carries some
        risks and potential side effects, including:
      </p>
      <ul>
        <li>Temporary discomfort or redness at the treatment site</li>
        <li>Mild swelling or irritation</li>
        <li>Rarely, changes in skin pigmentation</li>
      </ul>
      <p>
        Our team at Impact Health & Wellness is committed to ensuring your
        safety and comfort throughout the treatment process, providing you
        with all the information you need to make an informed decision
        about your care.
      </p>

      <h2>Cost of Laser Therapy in Ohio</h2>
      <p>
        The cost of Class IV Laser Therapy can vary based on the specific
        treatment plan, the number of sessions required and the condition
        being treated. At Impact Health & Wellness, we believe in
        transparent pricing and will provide you with all the information
        you need during your consultation. We’re here to work with you to
        find a payment plan that fits your budget, ensuring you can access
        the care you need in Westerville, Ohio.
      </p>

      <h2>Related Treatments</h2>
      <p>
        At Impact Health & Wellness in Westerville, Ohio, we offer a
        diverse range of treatments to complement Class IV laser therapy,
        focusing on holistic and non-invasive approaches to pain relief and
        healing. Each treatment is designed to target specific conditions,
        offering our patients a comprehensive care plan.
      </p>
      <ul>
        <li>
          <Link href="/chiropractic-care/">Chiropractic Care</Link>: A
          non-invasive approach focusing on the manipulation of the spine
          and other parts of the body to alleviate pain, improve alignment
          and enhance overall physical function, particularly useful for
          back pain, neck pain and headaches.
        </li>
        <li>
          <Link href="/neuropathy-treatments/">Neuropathy Treatments</Link>: These
          treatments target nerve damage, using a combination of therapies
          to reduce pain, restore function and promote nerve health. Ideal
          for patients with diabetic neuropathy or other nerve-related
          conditions.
        </li>
        <li>
          <Link href="/shockwave/">Shockwave Therapy</Link>: A non-invasive
          treatment that employs acoustic waves to stimulate healing in
          injured tissues, reduce pain and enhance blood circulation,
          making it effective for a variety of musculoskeletal conditions.
        </li>
      </ul>

      <h2>Book Your Laser Therapy Consultation in Westerville, Ohio</h2>
      <p>
        Take the first step towards a pain-free life and enhanced wellness
        with Class IV laser therapy at Impact Health & Wellness. Our team
        is ready to support you through your healing journey with
        personalized care and advanced treatments. If you’re in
        Westerville, Columbus or the surrounding Central Ohio area,{" "}
        <Link href="/contact-us/">contact us</Link> today to schedule your
        consultation and discover the power of laser therapy.
      </p>

      <h2>FAQs</h2>
      <Faq items={faqItems} />
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/laser-therapy">
      <LaserTherapyPage />
    </CMSRoute>
  );
}

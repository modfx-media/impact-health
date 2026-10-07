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
  title: "Neuropathy Treatment & Advanced Relief in Westerville, OH",
  description:
    "Impact Health & Wellness in Westerville, OH offers neuropathy treatments to reduce pain and improve nerve function. Find the relief you deserve. Schedule today!",
  alternates: { canonical: "/neuropathy-treatments/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/neuropathy-treatments", fallbackMetadata);
}

const faqItems = [
  {
    question: "Can neuropathy treatments help with diabetic neuropathy?",
    answer:
      "Yes, our neuropathy treatments are designed to address various forms of neuropathy, including diabetic neuropathy. By improving blood flow and nerve function, our therapies can alleviate symptoms and potentially slow the progression of nerve damage caused by high blood sugar levels.",
  },
  {
    question:
      "How long does it take to see results from neuropathy treatments?",
    answer:
      "The time frame for experiencing improvement varies depending on the individual and the severity of the neuropathy. Some patients report feeling better after just a few sessions, while others may need a longer treatment course to see significant changes.",
  },
  {
    question:
      "Can lifestyle changes impact the effectiveness of neuropathy treatments?",
    answer:
      "Lifestyle factors, such as diet, exercise and managing blood sugar levels, can significantly impact the effectiveness of neuropathy treatments. Our team provides guidance on making positive lifestyle changes to complement your treatment plan.",
  },
];

// Yoast schema graph captured from the live Neuropathy Treatments page, plus a FAQPage node for the on-page FAQs.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/neuropathy-treatments/",
    url: "https://impacthealthoh.com/neuropathy-treatments/",
    name: "Neuropathy Treatment & Advanced Relief in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T20:03:51+00:00",
    dateModified: "2026-05-20T09:22:47+00:00",
    description:
      "Impact Health & Wellness in Westerville, OH offers neuropathy treatments to reduce pain and improve nerve function. Find the relief you deserve. Schedule today!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/neuropathy-treatments/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/neuropathy-treatments/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/neuropathy-treatments/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Neuropathy Treatments" },
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

const causes = [
  {
    title: "Diabetic Neuropathy",
    description:
      "High blood sugar levels associated with diabetes can lead to a specific type of nerve damage that particularly affects the legs and feet.",
  },
  {
    title: "Physical Injury",
    description:
      "Trauma to the spinal cord or peripheral nerves, possibly from accidents or surgeries, can disrupt nerve signals, leading to neuropathy.",
  },
  {
    title: "Infections and Autoimmune Diseases",
    description:
      "Certain infections and autoimmune conditions can attack nerve tissues, resulting in neuropathic symptoms.",
  },
  {
    title: "Other Health Conditions",
    description:
      "Diseases that affect the nervous system, such as neurology disorders, can lead to neuropathy. Additionally, conditions that impact blood flow or the body's ability to process nutrients can contribute to nerve damage.",
  },
];

const treatments = [
  {
    title: "Laser Therapy",
    description:
      "Laser therapy uses focused light to stimulate healing in damaged tissues. By targeting affected areas with specific wavelengths of light, this therapy promotes cellular repair and blood flow, reducing inflammation and pain associated with neuropathy. The non-invasive nature of laser therapy makes it an ideal option for patients seeking relief without side effects.",
  },
  {
    title: "Shockwave Therapy",
    description:
      "Shockwave therapy employs acoustic waves to stimulate healing in soft tissues and nerves. This modality is particularly effective for neuropathy as it enhances blood circulation, breaks down scar tissue and promotes cellular regeneration in the affected areas. The therapeutic effect of shockwave therapy can lead to significant improvements in symptoms like muscle weakness and nerve pain, contributing to an overall better quality of life for neuropathy patients.",
  },
  {
    title: "Regenerative Treatments",
    description:
      "Our regenerative treatments focus on restoring damaged nerve tissues and improving function. These therapies harness the body's natural healing mechanisms to promote the regeneration of nerve cells, potentially reversing the effects of neuropathy. By stimulating the growth of new cells and tissues, regenerative treatments offer hope for long-term improvement in nerve function and pain relief.",
  },
  {
    title: "PRP Therapy",
    description:
      "Platelet-Rich Plasma (PRP) therapy involves using a concentration of a patient's own platelets to accelerate the healing of injured tissues. In the context of neuropathy, PRP therapy can enhance the repair of nerve tissues and reduce inflammation, leading to improved nerve function and decreased pain. This approach leverages the body's inherent healing capabilities, offering a natural path to recovery.",
  },
];

async function NeuropathyTreatmentsPage() {
  return (
    <PageLayout
      title="Neuropathy Treatments"
      eyebrow="Nerve Pain Relief"
      intro="Understand the symptoms, types, and management approaches. Empower yourself with knowledge for better symptom management!"
      breadcrumbs={[{ label: "Neuropathy Treatments" }]}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/neuropathy-treatments.jpg",
        alt: "neuropathy treatments",
      }}
      afterContent={
        <>
          <RelatedServices
            items={getRelatedServices("/neuropathy-treatments/")}
          />
          <ServicesOverview />
          <AreaServedNote />
        </>
      }
    >
      <p>
        At <Link href="/">Impact Health &amp; Wellness</Link>, we understand the
        challenges and discomfort caused by neuropathy. Located in
        Westerville, Ohio, our clinic offers a cutting-edge, combination
        approach to neuropathy treatment, designed to alleviate pain, restore
        function and improve your quality of life.
      </p>
      <p>
        We utilize a powerful synergy of{" "}
        <strong>laser therapy and shockwave therapy</strong>, alongside other
        advanced modalities, to address both the symptoms and root causes of
        your neuropathy. Whether you&rsquo;re dealing with diabetic
        neuropathy, peripheral neuropathy or other nerve-related conditions,
        our team of board-certified and experienced providers is here to
        help. <Link href="/contact-us/">Schedule a consultation</Link> today and
        take the first step towards effective relief and recovery.
      </p>

      <h2>Understanding Neuropathy</h2>
      <p>
        Neuropathy, often experienced as nerve pain, tingling or muscle
        weakness, arises from damage to the peripheral nerves. The sensation
        of neuropathy pain varies between feeling sharp, throbbing, freezing
        or burning. This condition can stem from a variety of factors, each
        affecting the nervous system in unique ways. Key causes include:
      </p>
      <BenefitGrid items={causes} />

      <h3>Treatment Options</h3>
      <p>
        Neuropathy treatments at Impact Health &amp; Wellness encompass a
        range of therapies tailored to address the underlying causes of
        nerve damage and alleviate symptoms. Our treatments aim to enhance
        blood flow, reduce nerve pain and support the body&rsquo;s natural
        healing processes. From regenerative medicine techniques to
        specialized physical therapy protocols, we utilize the latest
        advancements in healthcare to target both peripheral and diabetic
        neuropathies effectively.
      </p>

      <h4>Benefits</h4>
      <ul>
        <li>Relief from nerve pain and discomfort</li>
        <li>Improved muscle strength and range of motion</li>
        <li>Enhanced quality of life through better pain management</li>
        <li>Reduction in symptoms associated with diabetic neuropathy</li>
      </ul>

      <h2>Why Choose Impact Health &amp; Wellness?</h2>
      <p>
        Impact Health &amp; Wellness is a leading provider of neuropathy
        treatments in the Westerville and Central Ohio area. Our clinic is
        known for:
      </p>
      <ul>
        <li>A team of highly skilled neurologists and healthcare professionals</li>
        <li>Personalized treatment plans based on the latest neurology research</li>
        <li>State-of-the-art facilities with full accessibility for all patients</li>
        <li>A holistic approach to wellness that addresses the root cause of neuropathy</li>
      </ul>

      <h2>Ideal Candidates for Neuropathy Treatments</h2>
      <p>
        Neuropathy treatments are suitable for individuals experiencing
        symptoms such as tingling, numbness, pain or muscle weakness due to
        nerve damage. Ideal candidates include individuals who have:
      </p>
      <ul>
        <li>Diabetic neuropathy</li>
        <li>Blood sugar-related nerve damage</li>
        <li>
          Peripheral neuropathy caused by injury or other health conditions
        </li>
        <li>Not found relief through standard medical treatments</li>
      </ul>
      <p>
        Contraindications may include certain acute infections or
        uncontrolled health conditions, which will be assessed during your
        consultation.
      </p>

      <h2>Neuropathy Treatments We Offer</h2>
      <p>
        At Impact Health &amp; Wellness in Westerville, Ohio, we understand
        the debilitating effects of neuropathy and are committed to
        providing comprehensive, effective treatment options. We take a{" "}
        <strong>cutting-edge approach</strong>,{" "}
        <strong>
          harnessing the power of combined laser and shockwave therapy
        </strong>{" "}
        to address both the symptoms and root causes of neuropathy. This
        innovative combination offers significant advantages over
        traditional methods, providing lasting relief and improved quality of
        life for our patients.
      </p>
      <p>
        Our 360-degree treatment plan incorporates advanced modalities, each
        carefully chosen to work synergistically. Laser therapy utilizes
        targeted light to promote cellular repair and reduce inflammation,
        while shockwave therapy employs acoustic waves to stimulate healing
        and regeneration in affected tissues and nerves. This potent
        combination effectively addresses the key factors contributing to
        neuropathy, leading to:
      </p>
      <ul>
        <li>Reduced pain and discomfort</li>
        <li>Improved nerve function and sensation</li>
        <li>Enhanced blood circulation</li>
        <li>Reduced inflammation and scar tissue formation</li>
        <li>Promoted overall healing and regeneration</li>
      </ul>

      <h3>Breaking Down The Treatments</h3>
      <ProcessSteps items={treatments} />

      <h2>Cost of Neuropathy Treatments in Ohio</h2>
      <p>
        The cost of neuropathy treatments varies based on the specific
        therapies required and the extent of treatment needed. At Impact
        Health &amp; Wellness, we&rsquo;re committed to providing transparent
        pricing and will discuss all options during your consultation. We
        strive to make our treatments accessible to everyone in the
        Westerville and surrounding areas, ensuring you receive the care you
        need without financial strain.
      </p>

      <h2>
        Book Your Neuropathy Treatment Consultation in Westerville, Ohio
      </h2>
      <p>
        Don&rsquo;t let neuropathy control your life. At Impact Health &amp;
        Wellness, we&rsquo;re dedicated to helping our patients find relief
        and regain control. If you&rsquo;re in Westerville, Columbus,
        Dublin, New Albany, Worthington or anywhere in Central Ohio,{" "}
        <Link href="/contact-us/">contact us</Link> today to schedule your
        neuropathy treatment consultation. Our team is ready to provide you
        with the care and support you need for a better quality of life.
      </p>

      <h2>FAQs</h2>
      <Faq items={faqItems} />
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/neuropathy-treatments">
      <NeuropathyTreatmentsPage />
    </CMSRoute>
  );
}

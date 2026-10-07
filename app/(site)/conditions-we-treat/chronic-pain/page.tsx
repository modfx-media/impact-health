import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { ServicesOverview } from "@/components/home/ServicesOverview";

const fallbackMetadata: Metadata = {
  title: "Personalized Chronic Pain Relief Treatment in Westerville",
  description:
    "Overcome chronic pain with Impact Health & Wellness in Westerville. Our personalized treatments provide lasting relief & a better quality of life. Start today!",
  alternates: { canonical: "/conditions-we-treat/chronic-pain/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/conditions-we-treat/chronic-pain", fallbackMetadata);
}

const relatedTreatments = [
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Trigger Point Injections", href: "/chiropractic-care/trigger-point-injections/" },
  { label: "PRP Therapy", href: "/prp-therapy/" },
  { label: "Regenerative Medicine", href: "/regenerative-medicine/" },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/conditions-we-treat/chronic-pain/",
    url: "https://impacthealthoh.com/conditions-we-treat/chronic-pain/",
    name: "Personalized Chronic Pain Relief Treatment in Westerville",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T19:24:04+00:00",
    dateModified: "2026-04-10T11:08:08+00:00",
    description:
      "Overcome chronic pain with Impact Health & Wellness in Westerville. Our personalized treatments provide lasting relief & a better quality of life. Start today!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/conditions-we-treat/chronic-pain/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/conditions-we-treat/chronic-pain/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/conditions-we-treat/chronic-pain/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://impacthealthoh.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Conditions We Treat",
        item: "https://impacthealthoh.com/conditions-we-treat/",
      },
      { "@type": "ListItem", position: 3, name: "Chronic Pain" },
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

async function ChronicPainPage() {
  return (
    <PageLayout
      title="Chronic Pain"
      intro="Discover personalized care for chronic pain conditions like fibromyalgia and sciatica at Impact Health & Wellness. Relief awaits."
      image={{ src: "/images/conditions/back-pain.jpg", alt: "Provider consulting with a patient about chronic pain" }}
      breadcrumbs={[
        { label: "Conditions We Treat", href: "/conditions-we-treat/" },
        { label: "Chronic Pain" },
      ]}
      schema={schema}
      showTestimonials
      afterContent={
        <>
          <RelatedServices items={relatedTreatments} heading="Related Treatments" />
          <ServicesOverview className="bg-[#f4f8fb]" />
        </>
      }
    >
      <p>
        Chronic pain is often described as a recurring pain or pains that have
        lasted for more than a few days, and the severity of the case needs to
        be assessed etiologically. Chronic Pain is a general term that is used
        to distinguish between long-lasting (chronic) pain and short-term
        (acute) pain.
      </p>
      <p>
        Chronic Pain is the type of pain that can occur after surgery or
        injury. Acute pain is the type of pain felt when you stub your toe or
        suffer a paper cut. The best way to assess whether your pain is
        Chronic or Acute is to come visit us at Impact Health & Wellness for a
        personalized evaluation and approach.
      </p>

      <h2>Common Types of Pain We Treat</h2>
      <ul>
        <li>Back Pain and Injury</li>
        <li>Neck Pain and Injury</li>
        <li>Knee Pain and Injury</li>
        <li>Shoulder Pain and Injury</li>
        <li>Sciatica</li>
        <li>Hand and Wrist Pain and Injury</li>
        <li>Ankle and Foot Pain and Injury</li>
        <li>Headaches and Migraines</li>
        <li>Arthritis</li>
        <li>Personal & Auto Accidents Injury</li>
        <li>Sports Injury</li>
        <li>Fibromyalgia</li>
        <li>Stiffness</li>
      </ul>

      <h2>Why Choose Impact for Chronic Pain Treatment</h2>
      <p>
        At Impact, our multidisciplinary team is dedicated to identifying and
        treating your pain at its source so that we can deliver healing that
        lasts – without surgical intervention. When you choose Impact, you’re
        partnering with extraordinary doctors and providers who put you and
        your health first.
      </p>

      <h2>What is Fibromyalgia?</h2>
      <p>
        Patients often describe Fibromyalgia (FM) as chronic widespread pain
        and extra sensitivity to pressure, as well as being associated with
        fatigue, sleep problems, and memory impairment. Some people also
        report restless legs syndrome, bowel or bladder problems, numbness and
        tingling and sensitivity to noise, lights or temperature.
      </p>
      <p>
        Fibromyalgia is frequently associated with depression, anxiety, and
        Post-Traumatic Stress Disorder. FM is considered a “wastebasket
        diagnosis” in the primary care arena due to the poor outcomes with
        medical intervention. That’s why Impact has had exceptional results
        using our conservative physical medicine approach. Impact does not
        treat FM with prescription medicine, which only treats the symptoms;
        we treat the underlying causes.
      </p>

      <h2>What is Sciatica?</h2>
      <p>
        The sciatic nerve stretches from your lower back, down through the
        hips and buttocks, and down each leg. Sciatica is chronic pain felt in
        the lower back down to the legs. Sciatica pain usually occurs
        suddenly following strenuous activities like lifting heavy objects.
        The pain is often described as a “shooting pain.” Sciatica is a
        common health problem, but many different treatment programs are used
        depending upon the cause. Unfortunately for some, sciatica is
        commonly misdiagnosed for surgical disc problems where it can simply
        be caused by muscle spasms and conservatively treated without
        surgery.
      </p>

      <h2>What is Stiffness?</h2>
      <p>
        Chronic pain associated with stiffness can be a concern.
        Stiff-person syndrome (SPS) is characterized by progressive rigidity
        and stiffness. The stiffness primarily affects the core/stomach
        muscles and is often associated with spasms, resulting in bad
        posture. Chronic pain, impaired mobility, and abnormal low back
        curvature are common symptoms. SPS is a rare neurological disorder
        most commonly found in middle-aged people. Variants of the condition
        are often seen, such as stiffness in a specific limb.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/conditions-we-treat/chronic-pain">
      <ChronicPainPage />
    </CMSRoute>
  );
}

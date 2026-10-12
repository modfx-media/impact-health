import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { Reveal } from "@/components/motion/Reveal";
import { TeamGrid } from "@/components/page/TeamGrid";
import { staffMembers } from "@/lib/staff-data";

const fallbackMetadata: Metadata = {
  title: "Our Team | Impact Health & Wellness in Westerville, OH",
  description:
    "Meet the dedicated team at Impact Health & Wellness in Westerville, OH. Our experts provide personalized care to help you achieve optimal health and wellness.",
  alternates: { canonical: "/our-team/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/our-team", fallbackMetadata);
}

// Yoast schema graph captured from the live Our Team page, preserved as-is.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/our-team/",
    url: "https://impacthealthoh.com/our-team/",
    name: "Our Team | Impact Health & Wellness in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-14T00:06:11+00:00",
    dateModified: "2025-03-14T12:48:41+00:00",
    description:
      "Meet the dedicated team at Impact Health & Wellness in Westerville, OH. Our experts provide personalized care to help you achieve optimal health and wellness.",
    breadcrumb: { "@id": "https://impacthealthoh.com/our-team/#breadcrumb" },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/our-team/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/our-team/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Our Team" },
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

const teamGroups = [
  {
    title: "Medical Professionals",
    description:
      "Our skilled medical professionals are at the forefront of healthcare, specializing in various fields to address your specific health needs. With a focus on evidence-based practices, they strive to diagnose and treat a wide range of medical conditions.",
    icon: (
      <path
        d="M12 21s-7-4.35-9.5-8.5C.7 9.1 2 5.5 5.4 4.6c2-.53 3.9.3 5 1.9l1.6 2.3 1.6-2.3c1.1-1.6 3-2.43 5-1.9 3.4.9 4.7 4.5 2.9 7.9C19 16.65 12 21 12 21Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Chiropractors",
    description:
      "Our chiropractor specializes in manual adjustments and spinal care, aiming to alleviate pain and improve overall well-being. Through personalized treatment plans, Dr. Southworth focuses on restoring proper alignment and function to enhance your body’s natural healing processes.",
    icon: (
      <path
        d="M12 3v4m0 0-2 2m2-2 2 2M8 11h8m-8 4h8M9 19l-2 2m8-2 2 2M9 11a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0v-6Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Physical Therapists",
    description:
      "Our dedicated physical therapist works collaboratively to enhance your physical function and mobility. Whether you’re recovering from an injury or seeking preventive measures, our physical therapy team is here to support you on your journey to optimal health.",
    icon: (
      <path
        d="M8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3 2-3 1-2 5m5-6 4 3-1 6m-3-9 2 4h3m-9 2-2 5m6-5-1 5m-3 0h4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

async function OurTeamPage() {
  return (
    <PageLayout
      title="Meet Our Team"
      eyebrow="Our Team"
      intro="Welcome to Impact Health & Wellness, your trusted partners in health and wellness located in Westerville, Ohio. Beyond being a team of medical professionals, we are dedicated to your well-being, offering a multidisciplinary approach for comprehensive care personalized to your unique needs."
      breadcrumbs={[{ label: "Our Team" }]}
      schema={schema}
      showSidebar={false}
      image={{
        src: "/images/about/shockwave-therapy.jpg",
        alt: "A provider at Impact Health & Wellness performing shockwave therapy on a patient",
      }}
      afterContent={
        <>
          {/* Intro continuation */}
          <section className="bg-white pt-4 pb-12 sm:pb-16">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <p className="max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                  Our integrated team, comprising medical professionals,
                  physical therapists, and chiropractors, is committed to
                  providing a holistic range of treatments. From physical and
                  traditional medicine to functional and regenerative
                  medicine, we employ diverse approaches to address your
                  health concerns effectively. Each member of our team brings
                  a wealth of experience and expertise to ensure you receive
                  the highest quality of care.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Our Team Consists Of */}
          <section className="bg-[#f4f8fb] py-14 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                  Our Team Consists Of
                </h2>
              </Reveal>
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {teamGroups.map((group, i) => (
                  <Reveal key={group.title} delay={i * 0.05}>
                    <div className="flex h-full flex-col items-center rounded-3xl border border-zinc-100 bg-white p-8 text-center shadow-sm">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-teal/15 to-brand-teal/5 ring-1 ring-brand-teal/20">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          className="h-8 w-8 text-brand-teal"
                        >
                          {group.icon}
                        </svg>
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-brand-navy">
                        {group.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                        {group.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Team grid */}
          <section className="bg-white py-14 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-6xl px-6">
              <TeamGrid members={staffMembers} />
            </div>
          </section>

          {/* Strategic Partnerships */}
          <section className="bg-[#f4f8fb] py-14 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-3xl px-6">
              <Reveal>
                <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                  Strategic Partnerships
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
                  <p>
                    In addition to our core services, Impact Health & Wellness
                    proudly offers specialized care through strategic
                    partnerships. United Wound Care Centers provides expert
                    wound care services, ensuring comprehensive treatment for
                    individuals with chronic or complex wounds. HealthWorx
                    extends our services to primary care, addressing your
                    general health needs with a patient-centered approach.
                  </p>
                  <p>
                    Furthermore, our team excels in providing essential
                    services such as IV infusions and medical weight loss
                    programs. IV infusions offer a direct and efficient way to
                    replenish essential nutrients, boost energy, and support
                    overall wellness. Our medical weight loss programs are
                    tailored to each individual, combining medical expertise,
                    nutritional guidance, and lifestyle strategies for
                    sustainable and effective weight management.
                  </p>
                  <p>
                    At Impact Health & Wellness, our mission is to empower you
                    on your journey to optimal health. With a dedicated and
                    skilled team, comprehensive services, and a
                    patient-centered approach, we are committed to making a
                    positive impact on your well-being. Experience the
                    difference with Impact Health & Wellness – where your
                    health is our priority.
                  </p>
                </div>
              </Reveal>
            </div>
          </section>
        </>
      }
    />
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/our-team">
      <OurTeamPage />
    </CMSRoute>
  );
}

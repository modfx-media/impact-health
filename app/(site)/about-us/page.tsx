import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import { PageLayout } from "@/components/page/PageLayout";
import { Reveal } from "@/components/motion/Reveal";
import { TeamGrid } from "@/components/page/TeamGrid";
import { staffMembers } from "@/lib/staff-data";

const differentiators = [
  "Non-Surgical Regenerative Medicine",
  "Anti-Aging & Weight Loss Programs",
  "Chiropractic & Rehab Therapies",
  "Wound Care",
  "Personal Injury Rehabilitation",
];

const fallbackMetadata: Metadata = {
  title: "Pain Management, Health, & Wellness Experts in Westerville",
  description:
    "Get to know your pain management, health, & wellness experts in Westerville, OH. We provide natural & personalized approach to your well-being. Contact us.",
  alternates: { canonical: "/about-us/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/about-us", fallbackMetadata);
}

// Yoast schema graph captured from the live About page, preserved as-is.
const schema = [
  {
    "@type": ["WebPage", "AboutPage"],
    "@id": "https://impacthealthoh.com/about-us/",
    url: "https://impacthealthoh.com/about-us/",
    name: "Pain Management, Health, & Wellness Experts in Westerville",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2023-10-19T11:31:54+00:00",
    dateModified: "2026-05-28T11:59:50+00:00",
    description:
      "Get to know your pain management, health, & wellness experts in Westerville, OH. We provide natural & personalized approach to your well-being. Contact us.",
    breadcrumb: { "@id": "https://impacthealthoh.com/about-us/#breadcrumb" },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/about-us/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/about-us/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "About Us" },
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

async function AboutUsPage() {
  return (
    <PageLayout
      title="About Us"
      eyebrow="Who We Are"
      intro="Get to know your pain management, health, & wellness experts in Westerville, OH. We provide a natural & personalized approach to your well-being."
      breadcrumbs={[{ label: "About Us" }]}
      schema={schema}
      image={{
        src: "/images/about/chiropractic-care.jpg",
        alt: "A chiropractor at Impact Health & Wellness treating a patient",
      }}
      afterContent={
        <>
          {/* Our Story */}
          <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-brand-teal/10 blur-3xl"
            />
            <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <div className="relative">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xl shadow-brand-navy/10 ring-1 ring-black/5">
                    <Image
                      src="/images/about/our-story.jpg"
                      alt="A physical therapist guiding a patient through a resistance-band exercise at Impact Health & Wellness"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 560px"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 hidden max-w-[220px] rounded-2xl bg-brand-navy px-6 py-4 shadow-lg shadow-brand-navy/20 sm:block">
                    <p className="text-2xl font-extrabold text-white">
                      360&deg;
                    </p>
                    <p className="text-xs font-medium uppercase tracking-wide text-white/70">
                      Whole-Person Care
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-teal">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-brand-teal"
                  />
                  Our Story
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                  Redefining what healthcare feels like
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-600 sm:text-lg">
                  <p>
                    At Impact Health & Wellness in Westerville, Ohio,
                    we&rsquo;re redefining healthcare to offer a 360-degree,
                    natural, and personalized approach to your well-being. Our
                    commitment is to address the root cause of your health
                    concerns, not merely alleviate symptoms.
                  </p>
                  <p>
                    We take pride in our state-of-the-art facilities, equipped
                    with the latest advancements in medical technology and
                    treatments. Our commitment to excellence guarantees that
                    our patients benefit from the most effective and
                    forward-thinking approaches to health and wellness
                    available today.
                  </p>
                  <p>
                    Our dedicated team strives to deliver a positive and
                    enriching experience for every individual we serve,
                    ensuring each visit is as rewarding as it is therapeutic.
                  </p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="relative overflow-hidden bg-[#f4f8fb] py-14 sm:py-20 lg:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-navy/5 blur-3xl"
            />
            <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
              <Reveal className="order-2 lg:order-1">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-teal">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-brand-teal"
                  />
                  Why Choose Us
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                  A holistic team, built around you
                </h2>
                <p className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
                  Our team understands that health and wellness are more than
                  just the absence of pain. That&rsquo;s why we take a
                  holistic approach, working collaboratively with our
                  multidisciplinary team to create a comprehensive wellness
                  plan &mdash; one that tackles immediate issues while
                  focusing on your long-term health and happiness.
                </p>
                <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
                  Our comprehensive approach, paired with our outstanding team
                  of providers, guarantees that our patients receive not only
                  advanced medical interventions but also customized care
                  plans aimed at boosting their overall health and quality of
                  life.
                </p>

                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {differentiators.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-brand-navy/10 bg-white px-4 py-3 shadow-sm"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mt-0.5 h-5 w-5 flex-none text-brand-teal"
                      >
                        <path
                          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-sm font-semibold text-brand-navy">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1} className="order-1 lg:order-2">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xl shadow-brand-navy/10 ring-1 ring-black/5">
                  <Image
                    src="/images/about/why-choose-us.jpg"
                    alt="A provider at Impact Health & Wellness using laser therapy on a patient"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                </div>
              </Reveal>
            </div>
          </section>

          {/* Our Team */}
          <section className="bg-white py-14 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-6xl px-6">
              <Reveal>
                <div className="mx-auto max-w-2xl text-center">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-navy/10 bg-[#eef4f9] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-teal">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-brand-teal"
                    />
                    Our Team
                  </span>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                    Meet the experts behind your care
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
                    A multidisciplinary team dedicated to helping you feel
                    your best, every step of the way.
                  </p>
                </div>
              </Reveal>
              <div className="mt-12">
                <TeamGrid members={staffMembers} />
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/about-us">
      <AboutUsPage />
    </CMSRoute>
  );
}

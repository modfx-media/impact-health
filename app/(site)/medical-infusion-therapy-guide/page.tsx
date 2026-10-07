import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { Reveal } from "@/components/motion/Reveal";
import { infusionGuideSections } from "@/lib/infusion-data";

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

const fallbackMetadata: Metadata = {
  title: "Infusion Therapy for Wellness | Impact Health, Westerville",
  description:
    "Explore medical infusion therapy for wellness at Impact Health & Wellness in Westerville. Boost hydration and energy levels with our expert treatments.",
  alternates: { canonical: "/medical-infusion-therapy-guide/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/medical-infusion-therapy-guide", fallbackMetadata);
}

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/medical-infusion-therapy-guide/",
    url: "https://impacthealthoh.com/medical-infusion-therapy-guide/",
    name: "Infusion Therapy for Wellness | Impact Health, Westerville",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-09-03T19:07:39+00:00",
    dateModified: "2024-09-03T19:12:09+00:00",
    description:
      "Explore medical infusion therapy for wellness at Impact Health & Wellness in Westerville. Boost hydration and energy levels with our expert treatments.",
    breadcrumb: {
      "@id":
        "https://impacthealthoh.com/medical-infusion-therapy-guide/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: [
          "https://impacthealthoh.com/medical-infusion-therapy-guide/",
        ],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id":
      "https://impacthealthoh.com/medical-infusion-therapy-guide/#breadcrumb",
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
        name: "Medical Infusion Therapy Guide",
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
];

async function MedicalInfusionTherapyGuidePage() {
  return (
    <PageLayout
      title="Medical Infusion Therapy Guide"
      eyebrow="Infusions"
      intro="A specialty-by-specialty reference for the infusion and biologic therapies available at Impact Health & Wellness."
      breadcrumbs={[
        { label: "Infusions" },
        { label: "Medical Infusion Therapy Guide" },
      ]}
      schema={schema}
      showTestimonials
      afterContent={
        <>
          <section className="bg-white">
            <div className="mx-auto max-w-5xl px-6 pt-16 sm:pt-20">
              <Reveal>
                <p className="border-l-2 border-brand-teal/15 pl-6 text-lg leading-relaxed text-brand-navy/80 sm:pl-10 sm:text-xl">
                  This guide organizes the infusion and biologic therapies we
                  administer at Impact Health &amp; Wellness by the medical
                  specialty that typically prescribes them. If your provider
                  has already selected a therapy for you, jump straight to
                  its order form on our{" "}
                  <a
                    href="/therapies-order-forms/"
                    className="font-medium text-brand-teal hover:text-brand-navy-deep"
                  >
                    therapies &amp; order forms
                  </a>{" "}
                  page.
                </p>
              </Reveal>

              <Reveal delay={0.05}>
                <nav
                  aria-label="Jump to specialty"
                  className="mt-10 flex flex-wrap gap-2 border-y border-zinc-200/70 py-6"
                >
                  {infusionGuideSections.map((section) => (
                    <a
                      key={section.specialty}
                      href={`#${slugify(section.specialty)}`}
                      className="rounded-full border border-zinc-200/70 bg-white px-4 py-1.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal/50 hover:bg-brand-teal/10 hover:text-brand-navy-deep"
                    >
                      {section.specialty}
                    </a>
                  ))}
                </nav>
              </Reveal>
            </div>
          </section>

          {infusionGuideSections.map((section, sectionIndex) => (
            <section
              key={section.specialty}
              className={
                sectionIndex % 2 === 0 ? "bg-white" : "bg-[#f4f8fb]"
              }
            >
              <div className="mx-auto max-w-5xl px-6 py-12 sm:py-14">
                <Reveal>
                  <div
                    id={slugify(section.specialty)}
                    className="flex scroll-mt-28 items-center gap-4"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal text-lg font-extrabold text-white"
                    >
                      {section.specialty.charAt(0)}
                    </span>
                    <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
                      {section.specialty}
                    </h2>
                  </div>
                </Reveal>

                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {section.items.map((item, i) => (
                    <Reveal key={item.name} delay={(i % 4) * 0.05}>
                      <li className="h-full rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/50 hover:shadow-lg hover:shadow-brand-teal/10">
                        <p className="font-bold text-brand-navy">
                          {item.name}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                          {item.indication}
                        </p>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </section>
          ))}

          <section className="bg-white">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
              <Reveal>
                <div className="rounded-2xl border border-brand-teal/20 bg-[#eef4f9] p-8 text-center sm:p-10">
                  <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
                    Ready to Get Started?
                  </h2>
                  <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-zinc-600">
                    If your provider has prescribed one of these therapies,
                    reach out to our team to coordinate scheduling, or head
                    to our order forms directory to download the paperwork
                    for your specific treatment.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="/contact-us/"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-deep"
                    >
                      Contact Our Team
                    </a>
                    <a
                      href="/therapies-order-forms/"
                      className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal/50 hover:bg-brand-teal/10"
                    >
                      Browse Order Forms
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <RelatedServices
            heading="Explore More"
            items={[
              {
                label: "Therapies & Order Forms",
                href: "/therapies-order-forms/",
              },
            ]}
          />
        </>
      }
    />
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/medical-infusion-therapy-guide">
      <MedicalInfusionTherapyGuidePage />
    </CMSRoute>
  );
}

import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { ProcessSteps } from "@/components/page/ProcessSteps";
import { RelatedServices } from "@/components/page/RelatedServices";
import { Reveal } from "@/components/motion/Reveal";
import { orderFormTherapies } from "@/lib/infusion-data";
import Link from "next/link";

const fallbackMetadata: Metadata = {
  title: "Therapies & Order Forms | Impact Health & Wellness, OH",
  description:
    "Find therapy services and order forms at Impact Health & Wellness in Westerville, OH. Access convenient online forms for your treatments. Start your care here!",
  alternates: { canonical: "/therapies-order-forms/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/therapies-order-forms", fallbackMetadata);
}

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/therapies-order-forms/",
    url: "https://impacthealthoh.com/therapies-order-forms/",
    name: "Therapies & Order Forms | Impact Health & Wellness, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-10-03T15:42:06+00:00",
    dateModified: "2026-04-10T11:31:09+00:00",
    description:
      "Find therapy services and order forms at Impact Health & Wellness in Westerville, OH. Access convenient online forms for your treatments. Start your care here!",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/therapies-order-forms/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/therapies-order-forms/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/therapies-order-forms/#breadcrumb",
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
        name: "Therapies & Order Forms",
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

const orderSteps = [
  {
    title: "Find Your Therapy",
    description:
      "Locate your prescribed therapy in the directory below and download its order form as a PDF.",
  },
  {
    title: "Complete the Form",
    description:
      "Fill out all required fields and attach any clinical documentation your provider has requested.",
  },
  {
    title: "Submit Securely",
    description:
      "Fax or securely submit the completed form to our office using the instructions included on the form.",
  },
  {
    title: "We'll Be in Touch",
    description:
      "Our team reviews every submission promptly and will reach out if anything additional is needed before scheduling.",
  },
];

async function TherapiesOrderFormsPage() {
  return (
    <PageLayout
      title="Therapies & Order Forms"
      eyebrow="Infusions"
      intro="Download the order form for your prescribed therapy and submit it securely to get your infusion scheduled."
      breadcrumbs={[
        { label: "Infusions" },
        { label: "Therapies & Order Forms" },
      ]}
      schema={schema}
      showSidebar={false}
      afterContent={
        <>
          <section className="bg-[#f4f8fb]">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
              <Reveal>
                <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
                  How It Works
                </h2>
              </Reveal>
              <div className="mt-8">
                <ProcessSteps items={orderSteps} />
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
              <Reveal>
                <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
                  Therapy Directory
                </h2>
              </Reveal>

              <ul className="mt-8 grid list-none grid-cols-1 gap-3 pl-0 sm:grid-cols-2 lg:grid-cols-3">
                {orderFormTherapies.map((therapy, i) => (
                  <Reveal key={therapy.name} delay={(i % 6) * 0.03}>
                    <li>
                      {therapy.pdf ? (
                        <a
                          href={therapy.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-3 rounded-xl border border-zinc-200/60 bg-white p-4 text-sm font-bold text-brand-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-teal/50 hover:shadow-lg hover:shadow-brand-teal/10"
                        >
                          {therapy.name}
                          <span
                            aria-hidden="true"
                            className="shrink-0 text-xs font-medium text-brand-teal"
                          >
                            PDF &darr;
                          </span>
                        </a>
                      ) : (
                        <div className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200/60 bg-white/60 p-4 text-sm font-bold text-brand-navy/70">
                          {therapy.name}
                          <span className="shrink-0 text-xs font-medium text-zinc-400">
                            Contact us
                          </span>
                        </div>
                      )}
                    </li>
                  </Reveal>
                ))}
              </ul>

              <p className="mt-8 text-sm leading-relaxed text-zinc-600">
                Order form not available online for your therapy?{" "}
                <a
                  href="/contact-us/"
                  className="font-medium text-brand-teal hover:text-brand-navy-deep"
                >
                  Contact our office
                </a>{" "}
                directly and we&rsquo;ll get you the right paperwork.
              </p>
            </div>
          </section>

          <RelatedServices
            heading="Explore More"
            items={[
              {
                label: "Infusion Therapy Guide by Specialty",
                href: "/medical-infusion-therapy-guide/",
              },
            ]}
          />
        </>
      }
    >
      <p>
        If your physician has prescribed an infusion or biologic therapy,
        find it in the directory below and download its order form. Once
        it&rsquo;s completed and submitted, our team will follow up to confirm
        scheduling. Don&rsquo;t see your therapy listed, or have questions?{" "}
        <Link href="/contact-us/">Contact our office</Link> and we&rsquo;ll help.
      </p>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/therapies-order-forms">
      <TherapiesOrderFormsPage />
    </CMSRoute>
  );
}

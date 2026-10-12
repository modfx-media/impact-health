import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import Script from "next/script";
import { PageLayout } from "@/components/page/PageLayout";
import { Reveal } from "@/components/motion/Reveal";
import { MapOfficeHours } from "@/components/home/MapOfficeHours";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { AreaServedNote } from "@/components/page/AreaServedNote";
import { PhoneIcon, MailIcon } from "@/components/site-header/icons";
import { contactInfo } from "@/lib/nav-data";

const fallbackMetadata: Metadata = {
  title: "Health & Wellness Clinic in Westerville, OH | Book Today",
  description:
    "Contact Impact Health & Wellness in Westerville, OH. Get in touch for appointments, inquiries & info about our health and wellness services. We're here to help!",
  alternates: { canonical: "/contact-us/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/contact-us", fallbackMetadata);
}

// Yoast schema graph captured from the live Contact Us page, preserved as-is.
const schema = [
  {
    "@type": ["WebPage", "ContactPage"],
    "@id": "https://impacthealthoh.com/contact-us/",
    url: "https://impacthealthoh.com/contact-us/",
    name: "Health & Wellness Clinic in Westerville, OH | Book Today",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2023-10-19T10:12:51+00:00",
    dateModified: "2026-08-17T13:13:16+00:00",
    description:
      "Contact Impact Health & Wellness in Westerville, OH. Get in touch for appointments, inquiries & info about our health and wellness services. We're here to help!",
    breadcrumb: { "@id": "https://impacthealthoh.com/contact-us/#breadcrumb" },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/contact-us/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/contact-us/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Contact Us" },
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

async function ContactUsPage() {
  return (
    <PageLayout
      title="Contact Us"
      eyebrow="We're Here for You, Let's Connect!"
      intro="At Impact Health & Wellness, our devoted team of experts is here to support you on your path to optimal health and well-being. Contact us for further details or to arrange your initial consultation."
      breadcrumbs={[{ label: "Contact Us" }]}
      schema={schema}
      showSidebar={false}
      image={{
        src: "/images/contact/contact-us-hero.jpg",
        alt: "Contact Us",
      }}
      afterContent={
        <>
          {/*
            The live site's form is a hosted "Website Form" widget served from
            the practice's own GoHighLevel/LeadConnector CRM (same iframe src
            + form_embed.js resize script as production) — kept verbatim so
            submissions keep flowing into their real CRM/lead pipeline. Only
            the surrounding section chrome (heading, card, spacing) is
            rebuilt to match this site's own design system.
          */}
          <section className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
                <Reveal className="lg:sticky lg:top-28">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-[#eef4f9] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-teal">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-brand-teal"
                    />
                    Schedule a Visit
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl lg:text-4xl">
                    Book Your Appointment Now
                  </h2>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-zinc-600">
                    Fill out the form and a member of our team will reach out
                    to confirm your visit.
                  </p>
                  <div className="mt-8 flex flex-col gap-3">
                    <a
                      href={contactInfo.phoneHref}
                      className="flex items-center gap-3 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-teal"
                    >
                      <PhoneIcon className="h-5 w-5 shrink-0 text-brand-teal" />
                      {contactInfo.phoneDisplay}
                    </a>
                    <a
                      href={contactInfo.emailHref}
                      className="flex items-center gap-3 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-teal"
                    >
                      <MailIcon className="h-5 w-5 shrink-0 text-brand-teal" />
                      {contactInfo.email}
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="overflow-hidden rounded-3xl border border-zinc-200/70 bg-white p-2 shadow-xl shadow-brand-navy/10 sm:p-4">
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/form/VAg8a0Q7VuZoXHwU3coO"
                      id="inline-VAg8a0Q7VuZoXHwU3coO"
                      style={{
                        width: "100%",
                        height: "809px",
                        border: "none",
                        borderRadius: "3px",
                      }}
                      data-layout='{"id":"INLINE"}'
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Website Form"
                      data-height="809"
                      data-layout-iframe-id="inline-VAg8a0Q7VuZoXHwU3coO"
                      data-form-id="VAg8a0Q7VuZoXHwU3coO"
                      title="Website Form"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <MapOfficeHours />

          <ServicesOverview />

          <AreaServedNote />

          <Script
            src="https://link.msgsndr.com/js/form_embed.js"
            strategy="afterInteractive"
          />
        </>
      }
    />
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/contact-us">
      <ContactUsPage />
    </CMSRoute>
  );
}

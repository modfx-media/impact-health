import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { BookAppointmentCta } from "@/components/page/BookAppointmentCta";

export const metadata: Metadata = {
  title: "Page Not Found | Impact Health & Wellness",
  description:
    "The page you're looking for can't be found. Explore our services or head back to the Impact Health & Wellness homepage.",
  robots: { index: false, follow: true },
};

const popularPages = [
  { label: "Regenerative Medicine", href: "/regenerative-medicine/" },
  { label: "Anti-Aging & Weight Loss", href: "/anti-aging-wellness/" },
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Neuropathy Treatments", href: "/neuropathy-treatments/" },
  {
    label: "Hormone Replacement Therapy",
    href: "/hormone-replacement-therapy-hrt/",
  },
  { label: "Conditions We Treat", href: "/conditions-we-treat/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative overflow-hidden bg-[#eef4f9]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_85%_10%,rgba(64,144,185,0.14),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_10%_90%,rgba(23,61,101,0.08),transparent_60%)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-white [clip-path:ellipse(60%_100%_at_50%_100%)] sm:h-20"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-24 lg:py-28">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-navy/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-teal shadow-sm shadow-brand-navy/5 backdrop-blur-md">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-brand-teal"
              />
              Error 404
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-teal bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
              Page Not Found
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              We can&apos;t find the page you&apos;re looking for. It may have
              been moved or no longer exists. Try heading back to the
              homepage or browsing one of our services below.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-navy"
              >
                Back to Homepage
              </Link>
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-brand-navy hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
          <Reveal>
            <h2 className="text-center text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl">
              Popular Pages
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
              {popularPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-teal/40 hover:shadow-md hover:shadow-brand-teal/10"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-brand-teal"
                    />
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <BookAppointmentCta />
    </main>
  );
}

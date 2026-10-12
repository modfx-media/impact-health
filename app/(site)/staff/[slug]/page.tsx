import type { Metadata } from "next";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/page/JsonLd";
import { Breadcrumbs } from "@/components/page/Breadcrumbs";
import { BookAppointmentCta } from "@/components/page/BookAppointmentCta";
import { Reveal } from "@/components/motion/Reveal";
import { staffMembers } from "@/lib/staff-data";

export function generateStaticParams() {
  return staffMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = staffMembers.find((m) => m.slug === slug);
  if (!member) return {};

  return cmsMetadata(`/staff/${member.slug}`, {
    title: member.pageTitle,
    description: member.metaDescription,
    alternates: { canonical: `/staff/${member.slug}/` },
  });
}

async function StaffMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = staffMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    description: member.bio[0],
    image: `https://impacthealthoh.com${member.image}`,
    worksFor: { "@id": "https://impacthealthoh.com/#organization" },
    url: `https://impacthealthoh.com/staff/${member.slug}/`,
  };

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us/" },
    { label: member.name },
  ];

  return (
    <main className="flex flex-1 flex-col">
      <JsonLd schema={schema} />

      <section className="relative overflow-hidden bg-[#eef4f9]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_85%_10%,rgba(64,144,185,0.14),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_10%_90%,rgba(23,61,101,0.08),transparent_60%)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-white [clip-path:ellipse(60%_100%_at_50%_100%)] sm:h-20"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
          <Reveal>
            <Breadcrumbs items={crumbs} />
          </Reveal>

          <div className="mt-8 grid gap-12 lg:mt-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xl shadow-brand-navy/10 ring-1 ring-white/60">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 480px"
                    priority
                  />
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-navy/10 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-teal shadow-sm shadow-brand-navy/5 backdrop-blur-md">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-brand-teal"
                  />
                  {member.role}
                </span>
                <h1 className="mt-4 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-teal bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                  {member.name}
                </h1>
                <p className="mt-3 text-base font-semibold text-brand-teal sm:text-lg">
                  {member.blurb}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 space-y-5 border-t border-brand-navy/10 pt-8 text-base leading-relaxed text-zinc-600 sm:text-lg">
                  {member.bio.map((paragraph, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "text-lg font-medium text-brand-navy/90 sm:text-xl"
                          : undefined
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link
                    href="/contact-us/"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-teal"
                  >
                    Book an Appointment
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <Link
                    href="/about-us/"
                    className="text-sm font-semibold text-brand-navy/70 transition-colors hover:text-brand-teal"
                  >
                    &larr; Back to Our Team
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <BookAppointmentCta
        description={`Schedule your visit with ${member.name} and take the next step toward relief and recovery.`}
      />
    </main>
  );
}

export default async function CmsWrappedStaffPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <CMSRoute path={`/staff/${slug}`}>
      <StaffMemberPage params={params} />
    </CMSRoute>
  );
}

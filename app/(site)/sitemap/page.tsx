import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/page/PageLayout";
import { getPublishedBlogPosts } from "@/lib/ranked/posts";
import { staffMembers } from "@/lib/staff-data";
import {
  AREAS_WE_SERVE_ENABLED,
  AREAS_WE_SERVE_PILOT_MODE,
  isPilotCombo,
  isPilotLocation,
} from "@/lib/areas-we-serve/config";
import { areaLocations } from "@/lib/areas-we-serve/locations";
import { areaTopics } from "@/lib/areas-we-serve/topics";

const fallbackMetadata: Metadata = {
  title: "Sitemap | Impact Health & Wellness in Westerville, OH",
  description:
    "Browse every page on the Impact Health & Wellness website, organized by category: services, conditions we treat, our team, blog, and more.",
  alternates: { canonical: "/sitemap/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/sitemap", fallbackMetadata);
}

const mainPages = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Our Team", href: "/our-team/" },
  { label: "Accepted Insurance", href: "/accepted-insurance/" },
  { label: "Patient Testimonials", href: "/patient-testimonials/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Use", href: "/terms-of-use/" },
];

const servicePages = [
  { label: "Regenerative Medicine", href: "/regenerative-medicine/" },
  { label: "HA Gel Injections", href: "/ha-gel-injections/" },
  { label: "PRP Therapy", href: "/prp-therapy/" },
  { label: "Shockwave Therapy", href: "/shockwave/" },
  { label: "Laser Therapy", href: "/laser-therapy/" },
  { label: "Neuropathy Treatments", href: "/neuropathy-treatments/" },
  { label: "Anti-Aging & Wellness", href: "/anti-aging-wellness/" },
  { label: "Meal Planning", href: "/meal-planning/" },
  { label: "IV Therapy", href: "/iv-therapy/" },
  { label: "IV Therapy & Infusion Boosters", href: "/iv-therapy-infusion-boosters/" },
  { label: "Peptide Therapy", href: "/peptide-therapy/" },
  { label: "Hormone Replacement Therapy (HRT)", href: "/hormone-replacement-therapy-hrt/" },
  { label: "Medical Infusion Therapy Guide", href: "/medical-infusion-therapy-guide/" },
  { label: "Therapies Order Forms", href: "/therapies-order-forms/" },
  { label: "School Sports Physicals", href: "/school-sports-physicals/" },
];

const chiropracticPages = [
  { label: "Chiropractic Care", href: "/chiropractic-care/" },
  { label: "Diagnostics", href: "/chiropractic-care/diagnostics/" },
  { label: "Physical Therapy", href: "/chiropractic-care/physical-therapy/" },
  {
    label: "Pregnancy & Infant Chiropractic Care",
    href: "/chiropractic-care/pregnancy-infant-chiropractic-care/",
  },
  { label: "Spinal Decompression", href: "/chiropractic-care/spinal-decompression/" },
  { label: "Trigger Point Injections", href: "/chiropractic-care/trigger-point-injections/" },
];

const conditionPages = [
  { label: "Conditions We Treat", href: "/conditions-we-treat/" },
  { label: "Back Pain", href: "/conditions-we-treat/back-pain/" },
  { label: "Carpal Tunnel", href: "/conditions-we-treat/carpal-tunnel/" },
  { label: "Chronic Pain", href: "/conditions-we-treat/chronic-pain/" },
  { label: "Foot & Ankle Pain", href: "/conditions-we-treat/foot-ankle-pain/" },
  { label: "Hip Pain", href: "/conditions-we-treat/hip-pain/" },
  { label: "Knee Pain", href: "/conditions-we-treat/knee-pain/" },
  { label: "Migraines & Headaches", href: "/conditions-we-treat/migraines-and-headaches/" },
  { label: "Neck Pain", href: "/conditions-we-treat/neck-pain/" },
  { label: "Osteoarthritis", href: "/conditions-we-treat/osteoarthritis/" },
  { label: "Shoulder Pain", href: "/conditions-we-treat/shoulder-pain/" },
  { label: "Sports Injuries", href: "/conditions-we-treat/sports-injuries/" },
  { label: "Whiplash", href: "/conditions-we-treat/whiplash/" },
];

const injuryPages = [
  { label: "Workers' Compensation", href: "/workers-compensation/" },
  { label: "Car Accident Injuries", href: "/car-accident-injuries/" },
  { label: "Personal Injuries", href: "/personal-injuries/" },
];

function LinkGrid({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="not-prose grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="block truncate text-sm font-medium text-brand-teal hover:text-brand-navy-deep hover:underline"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

async function SitemapPage() {
  const publishedPosts = await getPublishedBlogPosts().catch(() => []);
  const visibleAreaLocations = AREAS_WE_SERVE_ENABLED
    ? areaLocations.filter(
        (location) => !AREAS_WE_SERVE_PILOT_MODE || isPilotLocation(location.slug),
      )
    : [];

  return (
    <PageLayout
      title="Sitemap"
      intro="Every page on the Impact Health & Wellness website, organized by category."
      breadcrumbs={[{ label: "Sitemap" }]}
      showSidebar={false}
    >
      <h2>Main Pages</h2>
      <LinkGrid items={mainPages} />

      <h2>Services</h2>
      <LinkGrid items={servicePages} />

      <h2>Chiropractic Care</h2>
      <LinkGrid items={chiropracticPages} />

      <h2>Conditions We Treat</h2>
      <LinkGrid items={conditionPages} />

      <h2>Injuries & Workers&apos; Compensation</h2>
      <LinkGrid items={injuryPages} />

      <h2>Our Team</h2>
      <LinkGrid
        items={staffMembers.map((member) => ({
          label: member.name,
          href: `/staff/${member.slug}/`,
        }))}
      />

      <h2>Blog</h2>
      <LinkGrid
        items={publishedPosts.map((post) => ({
          label: post.title,
          href: `/blog/${post.slug}/`,
        }))}
      />

      {visibleAreaLocations.length > 0 ? (
        <h2>Areas We Serve</h2>
      ) : null}
      {visibleAreaLocations.length > 0 ? (
        <LinkGrid
          items={[
            { label: "Areas We Serve", href: "/areas-we-serve/" },
            ...visibleAreaLocations.map((location) => ({
              label: location.name,
              href: `/areas-we-serve/${location.slug}/`,
            })),
          ]}
        />
      ) : null}
      {visibleAreaLocations.map((location) => (
        <div key={location.slug}>
          <h3>{location.name}</h3>
          <LinkGrid
            items={areaTopics
              .filter(
                (topic) =>
                  !AREAS_WE_SERVE_PILOT_MODE || isPilotCombo(location.slug, topic.slug),
              )
              .map((topic) => ({
                label: `${topic.name} in ${location.name}, OH`,
                href: `/areas-we-serve/${location.slug}/${topic.slug}/`,
              }))}
          />
        </div>
      ))}
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/sitemap">
      <SitemapPage />
    </CMSRoute>
  );
}

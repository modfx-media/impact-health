import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { PageLayout } from "@/components/page/PageLayout";
import { ProcessSteps } from "@/components/page/ProcessSteps";
import { RelatedServices } from "@/components/page/RelatedServices";
import { AreaServedNote } from "@/components/page/AreaServedNote";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { CtaButton } from "@/components/ui/CtaButton";
import { getRelatedServices } from "@/lib/nav-data";
import Link from "next/link";

const fallbackMetadata: Metadata = {
  title: "Regenerative Medicine in Westerville | Non-Surgical Healing",
  description:
    "Chronic joint pain and soft tissue injuries don't have to end in surgery. Impact Health & Wellness in Westerville, OH offers non-surgical regenerative therapies to relieve pain and restore mobility.",
  alternates: { canonical: "/regenerative-medicine/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/regenerative-medicine", fallbackMetadata);
}

const processItems = [
  {
    title: "Consultation",
    description:
      "We review your history, current symptoms, and goals, and may recommend lab work to help identify any underlying issues contributing to your pain, to build a plan specific to your case.",
  },
  {
    title: "Treatment",
    description:
      "A typical protocol includes 1–3 biologic injections (allograft and/or PRP) alongside a course of 4–6 shockwave sessions and 6–8 laser sessions, combined with physical therapy and stretching. Your exact plan depends on your injury and how you respond along the way.",
  },
  {
    title: "Recovery",
    description:
      "Most patients notice improvement within weeks; full benefit typically builds over the course of the full protocol.",
  },
  {
    title: "Follow-Up",
    description: "We track your progress and adjust your plan as needed.",
  },
];

const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/regenerative-medicine/",
    url: "https://impacthealthoh.com/regenerative-medicine/",
    name: "Regenerative Medicine in Westerville | Non-Surgical Healing",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-14T18:10:57+00:00",
    dateModified: "2026-09-04T00:00:00+00:00",
    description:
      "Chronic joint pain and soft tissue injuries don't have to end in surgery. Impact Health & Wellness in Westerville, OH offers non-surgical regenerative therapies to relieve pain and restore mobility.",
    breadcrumb: {
      "@id": "https://impacthealthoh.com/regenerative-medicine/#breadcrumb",
    },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/regenerative-medicine/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/regenerative-medicine/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Regenerative Medicine" },
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

async function RegenerativeMedicinePage() {
  return (
    <PageLayout
      title="Non-Surgical Relief for Joint & Soft Tissue Injuries"
      intro="Chronic joint pain, tendon injuries, and soft tissue damage don't have to end in surgery. At Impact Health & Wellness, we use advanced, non-surgical therapies that work with your body's own repair process, helping you manage pain, move better, and get back to the life you had before the pain started."
      breadcrumbs={[{ label: "Regenerative Medicine" }]}
      cta={{ label: "Schedule a Consultation", href: "/contact-us/" }}
      schema={schema}
      showTestimonials
      image={{
        src: "/images/services/regenerative-medicine.jpg",
        alt: "Regenerative Medicine",
      }}
      afterContent={
        <>
          <RelatedServices
            items={getRelatedServices("/regenerative-medicine/")}
          />
          <ServicesOverview />
          <AreaServedNote />
        </>
      }
    >
      <h2>A Smarter Path Before Surgery</h2>
      <p>
        Most patients come to us after trying everything else, medication,
        injections, physical therapy, and still not feeling like themselves.
        They&apos;re not looking for another short-term fix. They want their
        joint or injury to actually get better.
      </p>
      <p>
        That&apos;s what regenerative treatment is built for. Instead of
        masking pain with medication, we deliver targeted, biologic-based
        therapies directly to the affected area to support your body&apos;s
        own healing response, helping reduce inflammation, ease pain,
        numbness, and stiffness, and support tissue repair without surgery or
        long recovery times.
      </p>

      <h3>We see the strongest results treating symptoms of:</h3>
      <ul>
        <li>Osteoarthritis, including pain, stiffness, and reduced mobility</li>
        <li>
          Soft tissue injuries and partial tears (tendon, ligament, muscle)
        </li>
        <li>Muscle strains and sprains</li>
      </ul>

      <h3>Also used to help manage:</h3>
      <ul>
        <li>Tendonitis and overuse injuries</li>
        <li>
          Chronic joint pain, numbness, or tingling that hasn&apos;t responded
          to other treatment
        </li>
      </ul>

      <h2>Advanced Therapies That Support Real Healing</h2>
      <p>
        We use two core biologic-based therapies, often paired together
        depending on your injury:
      </p>
      <ul>
        <li>
          <span>
            <strong>Umbilical Cord Tissue Allografts:</strong> A donated
            tissue product rich in the growth factors and structural proteins
            your body naturally uses to repair connective tissue. It&apos;s
            placed directly at the site of injury to support the healing
            process.
          </span>
        </li>
        <li>
          <span>
            <strong>Platelet-Rich Plasma (PRP) Therapy:</strong> We draw a
            small sample of your own blood, concentrate the platelets (which
            carry your body&apos;s natural healing factors), and inject it
            directly into the injured joint or tissue to jump-start repair.
          </span>
        </li>
      </ul>

      <h2>Why We Pair These with Shockwave & Laser Therapy</h2>
      <p>
        Biologic therapies work best when the surrounding tissue is primed to
        respond. That&apos;s why we often combine allograft or PRP treatment
        with:
      </p>
      <ul>
        <li>
          <span>
            <Link href="/shockwave/">Shockwave Therapy</Link>: acoustic wave
            pulses that increase blood flow and break up scar tissue, making
            the area more receptive to healing
          </span>
        </li>
        <li>
          <span>
            <Link href="/laser-therapy/">Class IV Medical Laser Therapy</Link>:
            reduces inflammation and stimulates cellular repair at a deeper
            level
          </span>
        </li>
      </ul>
      <p>
        Used together, this combination can meaningfully improve outcomes
        compared to any one treatment alone, it&apos;s often the difference
        between a good result and a great one.
      </p>
      <p>
        <strong>This isn&apos;t a one-and-done treatment.</strong> Lasting
        symptom relief comes from a customized, multi-faceted protocol, not a
        single injection. A typical plan combines biologic therapy with a full
        course of shockwave and laser sessions, plus physical therapy and
        stretching, in the sequence your body actually needs. We may also
        recommend lab work to help identify any underlying issues
        contributing to your symptoms.
      </p>

      <h2>Is This the Right Option for You?</h2>
      <p>This approach may be a good fit if you:</p>
      <ul>
        <li>
          Have osteoarthritis pain, a soft tissue injury, a partial tear, or a
          muscle strain/sprain that hasn&apos;t improved with rest, PT, or
          medication
        </li>
        <li>
          Have been told surgery is your &quot;only option&quot; and want to
          explore alternatives first
        </li>
        <li>
          Are an active person or athlete looking to manage pain and recover
          from an injury
        </li>
        <li>
          Want a treatment approach aimed at the source of your symptoms, not
          just covering them up
        </li>
      </ul>
      <p>
        <em>
          Not everyone is a candidate: certain medical conditions, pregnancy,
          and active infections may rule out some treatments. We&apos;ll walk
          through your health history at your consultation to determine
          what&apos;s appropriate for you.
        </em>
      </p>

      <h2>What to Expect</h2>
      <ProcessSteps items={processItems} />
      <CtaButton href="/contact-us/" variant="teal" className="not-prose">
        Book Your Consultation
      </CtaButton>

      <h2>An Investment in Fixing the Problem, Not Just Covering It Up</h2>
      <p>
        These treatments are self-pay. Insurance typically covers medications
        and injections designed to mask pain, not therapies designed to
        support your body&apos;s own repair process. We believe that&apos;s an
        important distinction: you&apos;re not paying to manage a symptom
        indefinitely, you&apos;re investing in a protocol built to address
        what&apos;s actually causing it. We&apos;ll walk through the full cost
        of your customized plan at your consultation, with no surprises.
      </p>
    </PageLayout>
  );
}


export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/regenerative-medicine">
      <RegenerativeMedicinePage />
    </CMSRoute>
  );
}

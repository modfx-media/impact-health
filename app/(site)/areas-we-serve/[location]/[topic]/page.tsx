import type { Metadata } from "next";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/page/PageLayout";
import { RelatedServices } from "@/components/page/RelatedServices";
import { BookAppointmentCta } from "@/components/page/BookAppointmentCta";
import { Faq } from "@/components/page/Faq";
import {
  AREAS_WE_SERVE_ENABLED,
  AREAS_WE_SERVE_PILOT_MODE,
  PILOT_COMBOS,
  isPilotCombo,
  shouldNoindexArea,
} from "@/lib/areas-we-serve/config";
import { areaLocations, getLocationBySlug } from "@/lib/areas-we-serve/locations";
import { areaTopics, getTopicBySlug } from "@/lib/areas-we-serve/topics";
import { getAreaFaqItems } from "@/lib/areas-we-serve/faq-bank";
import {
  getAreaIntro,
  getAreaMeta,
  getAreaRelatedLinks,
  getTopicDetailParagraph,
  getTravelParagraph,
  topicMention,
} from "@/lib/areas-we-serve/content";
import { buildAreaSchema } from "@/lib/areas-we-serve/schema";

export function generateStaticParams() {
  if (!AREAS_WE_SERVE_ENABLED) return [];
  if (AREAS_WE_SERVE_PILOT_MODE) return PILOT_COMBOS;
  return areaLocations.flatMap((location) =>
    areaTopics.map((topic) => ({ location: location.slug, topic: topic.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string; topic: string }>;
}): Promise<Metadata> {
  if (!AREAS_WE_SERVE_ENABLED) return {};

  const { location: locationSlug, topic: topicSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  const topic = getTopicBySlug(topicSlug);
  if (!location || !topic) return {};
  if (AREAS_WE_SERVE_PILOT_MODE && !isPilotCombo(location.slug, topic.slug)) return {};

  const { title, description } = getAreaMeta(location, topic);
  return cmsMetadata(`/areas-we-serve/${location.slug}/${topic.slug}`, {
    title,
    description,
    alternates: { canonical: `/areas-we-serve/${location.slug}/${topic.slug}/` },
    robots: shouldNoindexArea(location) ? { index: false, follow: true } : undefined,
  });
}

async function AreaTopicPage({
  params,
}: {
  params: Promise<{ location: string; topic: string }>;
}) {
  if (!AREAS_WE_SERVE_ENABLED) notFound();

  const { location: locationSlug, topic: topicSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  const topic = getTopicBySlug(topicSlug);
  if (!location || !topic) notFound();
  if (AREAS_WE_SERVE_PILOT_MODE && !isPilotCombo(location.slug, topic.slug)) notFound();

  const { title, description } = getAreaMeta(location, topic);
  const faqItems = getAreaFaqItems(location, topic);
  const schema = buildAreaSchema({ location, topic, faqItems, title, description });
  const relatedLinks = getAreaRelatedLinks(location, topic);

  return (
    <PageLayout
      title={`${topic.name} for ${location.name}, OH Patients`}
      eyebrow="Areas We Serve"
      intro={getAreaIntro(location, topic)}
      breadcrumbs={[
        { label: "Areas We Serve", href: "/areas-we-serve/" },
        { label: location.name, href: `/areas-we-serve/${location.slug}/` },
        { label: topic.name },
      ]}
      schema={schema}
      afterContent={
        <>
          <RelatedServices items={relatedLinks} heading="Explore More" />
          <BookAppointmentCta
            title={`Ready to get started with ${topicMention(topic)}?`}
            description={`Book an appointment at our Westerville office, a convenient drive from ${location.name}, and take the next step toward relief and recovery.`}
          />
        </>
      }
    >
      <h2>Serving {location.name} Patients</h2>
      <p>{getTravelParagraph(location, topic)}</p>

      <h2>{topic.name} at Impact Health & Wellness</h2>
      <p>{topic.tagline}</p>
      <p>{getTopicDetailParagraph(topic)}</p>

      <h2>FAQs</h2>
      <Faq items={faqItems} />
    </PageLayout>
  );
}

export default async function CmsWrappedAreaTopicPage({
  params,
}: {
  params: Promise<{ location: string; topic: string }>;
}) {
  const { location, topic } = await params;
  return (
    <CMSRoute path={`/areas-we-serve/${location}/${topic}`}>
      <AreaTopicPage params={params} />
    </CMSRoute>
  );
}

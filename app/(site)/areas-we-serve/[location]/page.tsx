import type { Metadata } from "next";
import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/page/PageLayout";
import { BookAppointmentCta } from "@/components/page/BookAppointmentCta";
import { AREAS_WE_SERVE_ENABLED, AREAS_WE_SERVE_PILOT_MODE, PILOT_LOCATION_SLUGS, isPilotCombo, isPilotLocation } from "@/lib/areas-we-serve/config";
import { areaLocations, getLocationBySlug, getNearbyLocations } from "@/lib/areas-we-serve/locations";
import { areaTopics } from "@/lib/areas-we-serve/topics";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  if (!AREAS_WE_SERVE_ENABLED) return [];
  if (AREAS_WE_SERVE_PILOT_MODE) return PILOT_LOCATION_SLUGS.map((slug) => ({ location: slug }));
  return areaLocations.map((location) => ({ location: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  if (!AREAS_WE_SERVE_ENABLED) return {};

  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  if (!location) return {};
  if (AREAS_WE_SERVE_PILOT_MODE && !isPilotLocation(location.slug)) return {};

  const title = `Care for ${location.name}, OH Patients | Impact Health & Wellness`;
  const description = location.isHomeBase
    ? `Impact Health & Wellness is located in ${location.name}, OH, offering chiropractic care, regenerative medicine, and more.`
    : `Impact Health & Wellness in Westerville, OH welcomes patients from ${location.name}, about a ${location.driveTimeMinutes}-minute drive. Explore our services and conditions we treat.`;

  return cmsMetadata(`/areas-we-serve/${location.slug}`, {
    title,
    description,
    alternates: { canonical: `/areas-we-serve/${location.slug}/` },
  });
}

async function AreaLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  if (!AREAS_WE_SERVE_ENABLED) notFound();

  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  if (!location) notFound();
  if (AREAS_WE_SERVE_PILOT_MODE && !isPilotLocation(location.slug)) notFound();

  const services = areaTopics.filter((topic) => topic.category === "service");
  const conditions = areaTopics.filter((topic) => topic.category === "condition");
  const other = areaTopics.filter((topic) => topic.category === "other");
  const nearby = getNearbyLocations(location, 3).filter(
    (nearbyLocation) => !AREAS_WE_SERVE_PILOT_MODE || isPilotLocation(nearbyLocation.slug),
  );

  // While the pilot is running, only link to topic pages that are actually
  // generated for this location — everything else in the matrix still 404s.
  const visibleTopicSlug = (topic: { slug: string }) =>
    !AREAS_WE_SERVE_PILOT_MODE || isPilotCombo(location.slug, topic.slug);
  const visibleServices = services.filter(visibleTopicSlug);
  const visibleConditions = conditions.filter(visibleTopicSlug);
  const visibleOther = other.filter(visibleTopicSlug);

  const url = `${SITE_URL}/areas-we-serve/${location.slug}/`;
  const schema = [
    {
      "@type": "CollectionPage",
      "@id": url,
      url,
      name: `Care for ${location.name}, OH Patients`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Areas We Serve",
          item: `${SITE_URL}/areas-we-serve/`,
        },
        { "@type": "ListItem", position: 3, name: location.name },
      ],
    },
  ];

  return (
    <PageLayout
      title={`Care for ${location.name}, OH Patients`}
      eyebrow="Areas We Serve"
      intro={
        location.isHomeBase
          ? `${location.blurb} Our office is located right here in ${location.name}.`
          : `${location.blurb} Patients from ${location.name} travel to our Westerville office, about a ${location.driveTimeMinutes}-minute drive, for the services and conditions below.`
      }
      breadcrumbs={[
        { label: "Areas We Serve", href: "/areas-we-serve/" },
        { label: location.name },
      ]}
      schema={schema}
      afterContent={
        <BookAppointmentCta
          description={`Book an appointment at our Westerville office, a convenient drive from ${location.name}.`}
        />
      }
    >
      <h2>Services for {location.name} Patients</h2>
      <ul>
        {visibleServices.map((topic) => (
          <li key={topic.slug}>
            <Link href={`/areas-we-serve/${location.slug}/${topic.slug}/`}>{topic.name}</Link>
          </li>
        ))}
        {visibleOther.map((topic) => (
          <li key={topic.slug}>
            <Link href={`/areas-we-serve/${location.slug}/${topic.slug}/`}>{topic.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Conditions We Treat for {location.name} Patients</h2>
      <ul>
        {visibleConditions.map((topic) => (
          <li key={topic.slug}>
            <Link href={`/areas-we-serve/${location.slug}/${topic.slug}/`}>{topic.name}</Link>
          </li>
        ))}
      </ul>

      {nearby.length > 0 ? (
        <>
          <h2>Nearby Areas We Serve</h2>
          <ul>
            {nearby.map((nearbyLocation) => (
              <li key={nearbyLocation.slug}>
                <Link href={`/areas-we-serve/${nearbyLocation.slug}/`}>{nearbyLocation.name}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </PageLayout>
  );
}

export default async function CmsWrappedAreaLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  return (
    <CMSRoute path={`/areas-we-serve/${location}`}>
      <AreaLocationPage params={params} />
    </CMSRoute>
  );
}

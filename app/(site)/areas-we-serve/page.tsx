import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/page/PageLayout";
import { BookAppointmentCta } from "@/components/page/BookAppointmentCta";
import { AreaLocationsDirectory } from "@/components/areas-we-serve/AreaLocationsDirectory";
import { AREAS_WE_SERVE_ENABLED, AREAS_WE_SERVE_PILOT_MODE, isPilotLocation } from "@/lib/areas-we-serve/config";
import { areaLocations, areaRegions } from "@/lib/areas-we-serve/locations";
import { SITE_URL } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  if (!AREAS_WE_SERVE_ENABLED) return {};

  return cmsMetadata("/areas-we-serve", {
    title: "Areas We Serve | Impact Health & Wellness",
    description:
      "Impact Health & Wellness in Westerville, OH welcomes patients from across Central Ohio. See drive times and care options for your area.",
    alternates: { canonical: "/areas-we-serve/" },
  });
}

async function AreasWeServePage() {
  if (!AREAS_WE_SERVE_ENABLED) notFound();

  const url = `${SITE_URL}/areas-we-serve/`;
  const schema = [
    {
      "@type": "CollectionPage",
      "@id": url,
      url,
      name: "Areas We Serve",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Areas We Serve" },
      ],
    },
  ];

  return (
    <PageLayout
      title="Areas We Serve"
      eyebrow="Areas We Serve"
      intro={
        AREAS_WE_SERVE_PILOT_MODE
          ? "Impact Health & Wellness is located at 193 W. Schrock Road in Westerville, OH, patients travel from across Central Ohio to see us. We're rolling out area pages gradually; find your area below, and check back soon if you don't see it yet."
          : "Impact Health & Wellness is located at 193 W. Schrock Road in Westerville, OH, patients travel from across Central Ohio to see us. Find your area below for drive times and the care we offer."
      }
      breadcrumbs={[{ label: "Areas We Serve" }]}
      schema={schema}
      showSidebar={false}
      afterContent={<BookAppointmentCta />}
    >
      <h2>Find Your Area</h2>
      <AreaLocationsDirectory
        locations={
          AREAS_WE_SERVE_PILOT_MODE
            ? areaLocations.filter((location) => isPilotLocation(location.slug))
            : areaLocations
        }
        regions={areaRegions}
      />
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/areas-we-serve">
      <AreasWeServePage />
    </CMSRoute>
  );
}

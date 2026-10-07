import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/page/PageLayout";

const fallbackMetadata: Metadata = {
  title: "Privacy Policy | Impact Health & Wellness in Westerville, OH",
  description:
    "Our Privacy Policy and Notice of Privacy Practices are currently being finalized. Contact Impact Health & Wellness with any privacy questions.",
  alternates: { canonical: "/privacy-policy/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/privacy-policy", fallbackMetadata);
}

async function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      intro="Our Notice of Privacy Practices is currently being finalized."
      breadcrumbs={[{ label: "Privacy Policy" }]}
      showSidebar={false}
    >
      <p>
        Impact Health &amp; Wellness is committed to protecting your privacy
        and the confidentiality of your personal and health information.
        Our full Privacy Policy and Notice of Privacy Practices &mdash;
        describing how we collect, use and share your information, and your
        rights regarding your patient information &mdash; is currently being
        finalized and will be published on this page shortly.
      </p>
      <p>
        In the meantime, please see our{" "}
        <Link href="/terms-of-use/">Terms of Use</Link> for information about
        our online privacy practices, or{" "}
        <Link href="/contact-us/">Contact Us</Link> directly with any
        questions about how your information is handled.
      </p>
    </PageLayout>
  );
}


export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/privacy-policy">
      <PrivacyPolicyPage />
    </CMSRoute>
  );
}

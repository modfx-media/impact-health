import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { blogPosts, formatBlogDate } from "@/lib/blog-posts";
import { blogPostSchemas } from "@/lib/blog-schema";
import { getPublishedBlogPost, getPublishedBlogSlugs } from "@/lib/ranked/posts";
import { rankedPostSchema } from "@/lib/ranked/schema";
import { PageLayout } from "@/components/page/PageLayout";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { rankedArticleNodes } from "@/components/blog/RankedArticleBody";
import { PeptidesForMuscleBuildingContent } from "@/components/blog/content/peptides-for-muscle-building";
import { HowToImproveProstateHealthContent } from "@/components/blog/content/how-to-improve-prostate-health";
import { HealthyBloodGlucoseLevelsContent } from "@/components/blog/content/healthy-blood-glucose-levels";
import { HormoneTherapyForMenopauseContent } from "@/components/blog/content/hormone-therapy-for-menopause";
import { UmbilicalCordStemCellInjectionsContent } from "@/components/blog/content/umbilical-cord-stem-cell-injections";
import { HiddenDangersOfAmazonSupplementsContent } from "@/components/blog/content/hidden-dangers-of-amazon-supplements";
import { HrtMythsContent } from "@/components/blog/content/hrt-myths";
import { InnovationsInNeuropathyTreatmentsContent } from "@/components/blog/content/innovations-in-neuropathy-treatments";
import { MealPlanningMadeEasyContent } from "@/components/blog/content/meal-planning-made-easy";
import { ExploringTheFundamentalsOfAHealthyDietContent } from "@/components/blog/content/exploring-the-fundamentals-of-a-healthy-diet";
import { UnveilingTheWondersOfLaserTherapyAtImpactHealthWellnessContent } from "@/components/blog/content/unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness";
import { TheHarmonyWithinAGuideToAchievingMindBodyBalanceContent } from "@/components/blog/content/the-harmony-within-a-guide-to-achieving-mind-body-balance";
import { UnderstandingTheRoleOfSocialConnectionsContent } from "@/components/blog/content/understanding-the-role-of-social-connections";
import { TheBasicsOfMindfulEatingContent } from "@/components/blog/content/the-basics-of-mindful-eating";
import { StrengthTrainingByAgeContent } from "@/components/blog/content/strength-training-by-age";
import { DiscoverTheTransformativePowerOfIvVitaminTherapyContent } from "@/components/blog/content/discover-the-transformative-power-of-iv-vitamin-therapy";
import { NeuropathyTreatmentInWestervilleLifestyleHabitsThatAffectResultsContent } from "@/components/blog/content/neuropathy-treatment-in-westerville-lifestyle-habits-that-affect-results";
import { BackPainInWestervilleRedFlagsThatWarrantSeeingASpineSpecialistContent } from "@/components/blog/content/back-pain-in-westerville-red-flags-that-warrant-seeing-a-spine-specialist";
import { NeuropathyTreatmentTimelineInWestervilleMilestonesAndProgressTrackingContent } from "@/components/blog/content/neuropathy-treatment-timeline-in-westerville-milestones-and-progress-tracking";
import { RecognizingWhenMigraineTreatmentInWestervilleNeedsAnUpgradeContent } from "@/components/blog/content/recognizing-when-migraine-treatment-in-westerville-needs-an-upgrade";
import { UnderstandingSpinalDecompressionForChronicBackPainReliefContent } from "@/components/blog/content/understanding-spinal-decompression-for-chronic-back-pain-relief";
import { ChronicPainInWestervilleNeuropathyVsArthritisVsSciaticaTreatmentsContent } from "@/components/blog/content/chronic-pain-in-westerville-neuropathy-vs-arthritis-vs-sciatica-treatments";
import { EarlyArthritisCluesYourSummerActivityIsMaskingContent } from "@/components/blog/content/early-arthritis-clues-your-summer-activity-is-masking";
import { SummerArthritisFlareUpsAndWhenRegenerativeMedicineHelpsContent } from "@/components/blog/content/summer-arthritis-flare-ups-and-when-regenerative-medicine-helps";
import { SummerMigraineFlareUpsAndWhenToSeekTreatmentInWestervilleContent } from "@/components/blog/content/summer-migraine-flare-ups-and-when-to-seek-treatment-in-westerville";
import { SummerActivityMistakesThatWorsenSciaticaPainContent } from "@/components/blog/content/summer-activity-mistakes-that-worsen-sciatica-pain";
import { ChronicBackPainWhenAWestervilleChiropractorIsTheNextStepContent } from "@/components/blog/content/chronic-back-pain-when-a-westerville-chiropractor-is-the-next-step";
import { HipPainInWestervilleCausesByLocationGroinVsOuterHipVsButtockContent } from "@/components/blog/content/hip-pain-in-westerville-causes-by-location-groin-vs-outer-hip-vs-buttock";
import { HiddenSignsYourKneePainNeedsTargetedTreatmentContent } from "@/components/blog/content/hidden-signs-your-knee-pain-needs-targeted-treatment";
import { SummerSportsComebackRegenerativeMedicineForFasterHealingContent } from "@/components/blog/content/summer-sports-comeback-regenerative-medicine-for-faster-healing";
import { PreventNeckPainWhileTravelingPackingPillowSupportPostureAndCareContent } from "@/components/blog/content/prevent-neck-pain-while-traveling-packing-pillow-support-posture-and-care";
import { ShouldYouSeeAChiropractorFirstForChronicNeckPainContent } from "@/components/blog/content/should-you-see-a-chiropractor-first-for-chronic-neck-pain";
import { ComparingRegenerativeMedicineAndSurgeryForJointPainReliefContent } from "@/components/blog/content/comparing-regenerative-medicine-and-surgery-for-joint-pain-relief";
import { ManagingSummerSportsInjuriesWithPhysicalTherapyInWestervilleContent } from "@/components/blog/content/managing-summer-sports-injuries-with-physical-therapy-in-westerville";
import { JointPainReliefOptionsInWestervilleBeyondMedicationContent } from "@/components/blog/content/joint-pain-relief-options-in-westerville-beyond-medication";
import { WhyYourSpringJointPainNeedsArthritisTreatmentSupportContent } from "@/components/blog/content/why-your-spring-joint-pain-needs-arthritis-treatment-support";
import { UnderstandingNeuropathyTreatmentOptionsInWestervilleContent } from "@/components/blog/content/understanding-neuropathy-treatment-options-in-westerville";
import { IsShockwaveTherapyTheMissingStepInYourSportsInjuryRecoveryContent } from "@/components/blog/content/is-shockwave-therapy-the-missing-step-in-your-sports-injury-recovery";
import { WhenPersistentHipPainDemandsSpecialistTreatmentContent } from "@/components/blog/content/when-persistent-hip-pain-demands-specialist-treatment";
import { LaserTherapyOptionsForJointPainInWestervilleContent } from "@/components/blog/content/laser-therapy-options-for-joint-pain-in-westerville";
import { KneePainCareOptionsPtInjectionsOrSurgeryContent } from "@/components/blog/content/knee-pain-care-options-pt-injections-or-surgery";

export const revalidate = 3600;
export const dynamicParams = true;

const contentBySlug: Record<string, ReactNode[]> = {
  "peptides-for-muscle-building": PeptidesForMuscleBuildingContent,
  "how-to-improve-prostate-health": HowToImproveProstateHealthContent,
  "healthy-blood-glucose-levels": HealthyBloodGlucoseLevelsContent,
  "hormone-therapy-for-menopause": HormoneTherapyForMenopauseContent,
  "umbilical-cord-stem-cell-injections": UmbilicalCordStemCellInjectionsContent,
  "hidden-dangers-of-amazon-supplements": HiddenDangersOfAmazonSupplementsContent,
  "hrt-myths": HrtMythsContent,
  "innovations-in-neuropathy-treatments": InnovationsInNeuropathyTreatmentsContent,
  "meal-planning-made-easy": MealPlanningMadeEasyContent,
  "exploring-the-fundamentals-of-a-healthy-diet": ExploringTheFundamentalsOfAHealthyDietContent,
  "unveiling-the-wonders-of-laser-therapy-at-impact-health-wellness": UnveilingTheWondersOfLaserTherapyAtImpactHealthWellnessContent,
  "the-harmony-within-a-guide-to-achieving-mind-body-balance": TheHarmonyWithinAGuideToAchievingMindBodyBalanceContent,
  "understanding-the-role-of-social-connections": UnderstandingTheRoleOfSocialConnectionsContent,
  "the-basics-of-mindful-eating": TheBasicsOfMindfulEatingContent,
  "strength-training-by-age": StrengthTrainingByAgeContent,
  "discover-the-transformative-power-of-iv-vitamin-therapy": DiscoverTheTransformativePowerOfIvVitaminTherapyContent,
  "neuropathy-treatment-in-westerville-lifestyle-habits-that-affect-results": NeuropathyTreatmentInWestervilleLifestyleHabitsThatAffectResultsContent,
  "back-pain-in-westerville-red-flags-that-warrant-seeing-a-spine-specialist": BackPainInWestervilleRedFlagsThatWarrantSeeingASpineSpecialistContent,
  "neuropathy-treatment-timeline-in-westerville-milestones-and-progress-tracking": NeuropathyTreatmentTimelineInWestervilleMilestonesAndProgressTrackingContent,
  "recognizing-when-migraine-treatment-in-westerville-needs-an-upgrade": RecognizingWhenMigraineTreatmentInWestervilleNeedsAnUpgradeContent,
  "understanding-spinal-decompression-for-chronic-back-pain-relief": UnderstandingSpinalDecompressionForChronicBackPainReliefContent,
  "chronic-pain-in-westerville-neuropathy-vs-arthritis-vs-sciatica-treatments": ChronicPainInWestervilleNeuropathyVsArthritisVsSciaticaTreatmentsContent,
  "early-arthritis-clues-your-summer-activity-is-masking": EarlyArthritisCluesYourSummerActivityIsMaskingContent,
  "summer-arthritis-flare-ups-and-when-regenerative-medicine-helps": SummerArthritisFlareUpsAndWhenRegenerativeMedicineHelpsContent,
  "summer-migraine-flare-ups-and-when-to-seek-treatment-in-westerville": SummerMigraineFlareUpsAndWhenToSeekTreatmentInWestervilleContent,
  "summer-activity-mistakes-that-worsen-sciatica-pain": SummerActivityMistakesThatWorsenSciaticaPainContent,
  "chronic-back-pain-when-a-westerville-chiropractor-is-the-next-step": ChronicBackPainWhenAWestervilleChiropractorIsTheNextStepContent,
  "hip-pain-in-westerville-causes-by-location-groin-vs-outer-hip-vs-buttock": HipPainInWestervilleCausesByLocationGroinVsOuterHipVsButtockContent,
  "hidden-signs-your-knee-pain-needs-targeted-treatment": HiddenSignsYourKneePainNeedsTargetedTreatmentContent,
  "summer-sports-comeback-regenerative-medicine-for-faster-healing": SummerSportsComebackRegenerativeMedicineForFasterHealingContent,
  "prevent-neck-pain-while-traveling-packing-pillow-support-posture-and-care": PreventNeckPainWhileTravelingPackingPillowSupportPostureAndCareContent,
  "should-you-see-a-chiropractor-first-for-chronic-neck-pain": ShouldYouSeeAChiropractorFirstForChronicNeckPainContent,
  "comparing-regenerative-medicine-and-surgery-for-joint-pain-relief": ComparingRegenerativeMedicineAndSurgeryForJointPainReliefContent,
  "managing-summer-sports-injuries-with-physical-therapy-in-westerville": ManagingSummerSportsInjuriesWithPhysicalTherapyInWestervilleContent,
  "joint-pain-relief-options-in-westerville-beyond-medication": JointPainReliefOptionsInWestervilleBeyondMedicationContent,
  "why-your-spring-joint-pain-needs-arthritis-treatment-support": WhyYourSpringJointPainNeedsArthritisTreatmentSupportContent,
  "understanding-neuropathy-treatment-options-in-westerville": UnderstandingNeuropathyTreatmentOptionsInWestervilleContent,
  "is-shockwave-therapy-the-missing-step-in-your-sports-injury-recovery": IsShockwaveTherapyTheMissingStepInYourSportsInjuryRecoveryContent,
  "when-persistent-hip-pain-demands-specialist-treatment": WhenPersistentHipPainDemandsSpecialistTreatmentContent,
  "laser-therapy-options-for-joint-pain-in-westerville": LaserTherapyOptionsForJointPainInWestervilleContent,
  "knee-pain-care-options-pt-injections-or-surgery": KneePainCareOptionsPtInjectionsOrSurgeryContent,
};

export async function generateStaticParams() {
  const slugs = await getPublishedBlogSlugs().catch(() => blogPosts.map((post) => post.slug));
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const local = blogPosts.find((p) => p.slug === slug);
  const post = await getPublishedBlogPost(slug);
  if (local) {
    return {
      title: local.title,
      description: local.description,
      alternates: { canonical: `/blog/${local.slug}/` },
      openGraph: {
        title: local.title,
        description: local.description,
        type: "article",
        publishedTime: post?.publishDate ?? local.date,
        modifiedTime: local.dateModified,
        images: [{ url: post?.coverImage ?? local.image }],
      },
    };
  }

  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishDate,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const local = blogPosts.find((p) => p.slug === slug);
  const compiled = contentBySlug[slug];
  const published = await getPublishedBlogPost(slug);

  if (local && compiled) {
    const schema = blogPostSchemas[slug];
    const date = published?.publishDate ?? local.date;
    const cover = local.image;
    const coverAlt = local.imageAlt;
    return (
      <PageLayout
        title={local.h1 ?? local.title}
        eyebrow="Blog"
        intro={local.description}
        image={{ src: cover, alt: coverAlt }}
        breadcrumbs={[{ label: "Blog", href: "/blog/" }, { label: local.title }]}
        schema={schema}
        afterContent={<ServicesOverview />}
      >
        <p className="!mt-0 text-sm font-semibold tracking-wide text-brand-teal uppercase">
          {formatBlogDate(date)} &middot; Impact Health &amp; Wellness Team
        </p>
        {compiled}
      </PageLayout>
    );
  }

  const post = published;
  if (!post || post.sections.length === 0) notFound();

  return (
    <PageLayout
      title={post.h1}
      eyebrow="Blog"
      intro={post.intro}
      image={{ src: post.coverImage, alt: post.coverAlt }}
      breadcrumbs={[{ label: "Blog", href: "/blog/" }, { label: post.title }]}
      schema={rankedPostSchema(post)}
      afterContent={<ServicesOverview />}
    >
      <p className="!mt-0 text-sm font-semibold tracking-wide text-brand-teal uppercase">
        {formatBlogDate(post.publishDate)} &middot; Impact Health &amp; Wellness Team
      </p>
      {rankedArticleNodes(post)}
    </PageLayout>
  );
}

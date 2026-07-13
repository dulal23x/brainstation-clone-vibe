import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { LeadGenHero } from "@/components/home/LeadGenHero";
import { MarketingServices } from "@/components/home/MarketingServices";
import { ResultsShowcase } from "@/components/home/ResultsShowcase";
import { ValuesBand } from "@/components/home/ValuesBand";
import { GrowthPlaybook } from "@/components/home/GrowthPlaybook";
import { IndustriesWeGrow } from "@/components/home/IndustriesWeGrow";
import { CompanyStory } from "@/components/home/CompanyStory";
import { CaseStudies } from "@/components/home/CaseStudies";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { EngineeringBand } from "@/components/home/EngineeringBand";
import { JoinTeam } from "@/components/home/JoinTeam";
import { GlobalOffices } from "@/components/home/GlobalOffices";
import { ContactCTA } from "@/components/home/ContactCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dulal's Digital LLC — Lead generation & growth marketing" },
      {
        name: "description",
        content:
          "Lead generation, paid media, and conversion systems for ambitious brands — with in-house engineering when your growth needs a product to back it up. Founded by Dulal Hussain.",
      },
      { property: "og:title", content: "Dulal's Digital LLC — Lead generation & growth marketing" },
      {
        property: "og:description",
        content:
          "Results-driven lead generation, paid media, and conversion systems — from qualified leads to shipped software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dulal's Digital LLC — Lead generation & growth marketing" },
      {
        name: "twitter:description",
        content:
          "Lead generation, paid media, and conversion systems for ambitious brands.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <LeadGenHero />
        <MarketingServices />
        <ResultsShowcase />
        <ValuesBand />
        <GrowthPlaybook />
        <IndustriesWeGrow />
        <CompanyStory />
        <CaseStudies />
        <ProcessTimeline />
        <EngineeringBand />
        <JoinTeam />
        <GlobalOffices />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

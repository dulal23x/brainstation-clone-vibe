import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { LeadGenHero } from "@/components/home/LeadGenHero";
import { MarketingServices } from "@/components/home/MarketingServices";
import { CapabilitiesGrid } from "@/components/home/CapabilitiesGrid";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { ResultsShowcase } from "@/components/home/ResultsShowcase";
import { AiExcellence } from "@/components/home/AiExcellence";
import { ProductsGrid } from "@/components/home/ProductsGrid";
import { ValuesBand } from "@/components/home/ValuesBand";
import { CompanyStory } from "@/components/home/CompanyStory";
import { TechStackGrid } from "@/components/home/TechStackGrid";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { CaseStudies } from "@/components/home/CaseStudies";
import { JoinTeam } from "@/components/home/JoinTeam";
import { GlobalOffices } from "@/components/home/GlobalOffices";
import { ContactCTA } from "@/components/home/ContactCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dulal's Digital LLC — Results-driven marketing + engineering" },
      {
        name: "description",
        content:
          "Lead generation, paid media, and full-stack engineering for ambitious brands. Founded by Dulal Hussain — Dulal's Digital LLC.",
      },
      { property: "og:title", content: "Dulal's Digital LLC — Results-driven marketing + engineering" },
      {
        property: "og:description",
        content:
          "Lead generation, paid media, and full-stack engineering under one roof — from qualified leads to shipped software.",
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
        <CapabilitiesGrid />
        <IndustriesGrid />
        <ResultsShowcase />
        <AiExcellence />
        <ProductsGrid />
        <ValuesBand />
        <CompanyStory />
        <TechStackGrid />
        <ProcessTimeline />
        <CaseStudies />
        <JoinTeam />
        <GlobalOffices />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

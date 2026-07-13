import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { CapabilitiesGrid } from "@/components/home/CapabilitiesGrid";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { AiExcellence } from "@/components/home/AiExcellence";
import { ProductsGrid } from "@/components/home/ProductsGrid";
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
      { title: "Brain Station 23 — Build AI-Powered, Scalable Software" },
      {
        name: "description",
        content:
          "From fintech to eCommerce, Brain Station 23 delivers end-to-end software solutions tailored to your business — fast, flexible, and reliable.",
      },
      { property: "og:title", content: "Brain Station 23 — Build AI-Powered, Scalable Software" },
      {
        property: "og:description",
        content:
          "From fintech to eCommerce, Brain Station 23 delivers end-to-end software solutions tailored to your business — fast, flexible, and reliable.",
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
        <CapabilitiesGrid />
        <IndustriesGrid />
        <AiExcellence />
        <ProductsGrid />
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

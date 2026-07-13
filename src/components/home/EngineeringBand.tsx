import { CapabilitiesGrid } from "./CapabilitiesGrid";
import { TechStackGrid } from "./TechStackGrid";
import { AiExcellence } from "./AiExcellence";
import { ProductsGrid } from "./ProductsGrid";

export function EngineeringBand() {
  return (
    <section id="engineering" className="bg-secondary/40 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Secondary capability
          </p>
          <h2 className="mt-3 text-[32px] font-bold leading-tight text-foreground sm:text-4xl">
            Engineering, when your growth needs a product to back it up
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Our in-house engineering crew ships the software behind the campaigns — landing pages,
            portals, mobile apps, AI features, and the infrastructure that scales when leads start
            pouring in.
          </p>
        </div>
      </div>
      <div className="mt-4 [&>section]:py-12 lg:[&>section]:py-14 [&>section]:bg-transparent">
        <CapabilitiesGrid />
        <ProductsGrid />
        <AiExcellence />
        <TechStackGrid />
      </div>
    </section>
  );
}

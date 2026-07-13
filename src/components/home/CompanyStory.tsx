import { ArrowRight } from "lucide-react";
import img from "@/assets/bs23/group-pic_.webp.asset.json";

export function CompanyStory() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our story</p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Founded in 2006, powering digital transformation across industries
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Two decades of building for regulated and consumer sectors — from central banks to
            healthcare networks to global retailers. What began as a Dhaka-based studio is now a
            900-strong engineering partner shipping across 36 countries.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Learn about us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <img
          src={img.url}
          alt="Brain Station 23 team gathered at an offsite"
          className="w-full rounded-2xl shadow-elevated"
        />
      </div>
    </section>
  );
}

import { ArrowRight, PlayCircle } from "lucide-react";
import hero1 from "@/assets/bs23/Hero-Img-v3.1.webp.asset.json";
import hero2 from "@/assets/bs23/Hero-Img-v3.2.webp.asset.json";
import pattern from "@/assets/bs23/brand-patternv2.2.svg.asset.json";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={pattern.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 w-[900px] max-w-none opacity-70"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-14 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
            Dulal's Digital LLC · Founded by Dulal Hussain
          </span>
          <h1 className="mt-5 text-[40px] font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Results-driven marketing for ambitious brands.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            Lead generation, paid media, and full-stack engineering under one roof. Hungry for
            answers to your sales, conversion, or product challenges? You're in the right place.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-sm transition hover:opacity-90"
            >
              Get your proposal <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              <PlayCircle className="h-4 w-4" /> See our work
            </a>
          </div>
        </div>
        <div className="relative min-h-[420px] lg:min-h-[520px]">
          <img
            src={hero1.url}
            alt="Growth team reviewing campaign performance"
            className="absolute right-0 top-0 w-[68%] rounded-2xl object-cover shadow-elevated"
          />
          <div className="absolute right-[22%] top-[24%] rounded-2xl bg-card px-5 py-4 text-center shadow-card">
            <div className="text-3xl font-bold text-foreground">5×</div>
            <div className="mt-0.5 text-xs font-medium text-muted-foreground">Client revenue lift</div>
          </div>
          <img
            src={hero2.url}
            alt="Consultants planning a lead-generation launch with a client"
            className="absolute bottom-0 right-[8%] w-[62%] rounded-2xl object-cover shadow-elevated"
          />
          <div className="absolute bottom-[22%] left-[6%] rounded-2xl bg-card px-5 py-4 text-center shadow-card">
            <div className="text-3xl font-bold text-foreground">1M+</div>
            <div className="mt-0.5 text-xs font-medium text-muted-foreground">Organic reach / mo</div>
          </div>
        </div>
      </div>
    </section>
  );
}

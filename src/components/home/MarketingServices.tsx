import { Megaphone, Search, Facebook, Compass, MousePointerClick, Palette, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import iconYellow from "@/assets/dd/icon-building-yellow.png.asset.json";

type Svc = { icon: LucideIcon; title: string; body: string };

const SVCS: Svc[] = [
  { icon: Megaphone, title: "Lead Generation", body: "Multi-channel demand engines that deliver qualified, sales-ready leads." },
  { icon: Search, title: "Google Ads / PPC", body: "Search, Performance Max, and YouTube campaigns tuned for CPL and ROAS." },
  { icon: Facebook, title: "Facebook & Meta Ads", body: "Creative-led paid social that hooks, converts, and scales profitably." },
  { icon: Compass, title: "Marketing Strategy", body: "Full-funnel positioning, offer design, and channel mix — before a dollar is spent." },
  { icon: MousePointerClick, title: "Conversion Optimization", body: "Landing pages, funnels, and A/B tests that lift conversion rate without more traffic." },
  { icon: Palette, title: "Creative & Ad Design", body: "Scroll-stopping static, motion, and UGC-style creative built to test." },
];

export function MarketingServices() {
  return (
    <section id="marketing-services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Growth & Marketing</p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Specialists — not generalists — for full-funnel growth
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Deep expertise in digital channels that are complex and changing daily. Every service
            plugs into the same lead-gen flywheel.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SVCS.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <img
                src={iconYellow.url}
                alt=""
                aria-hidden
                className="absolute -right-6 -top-6 h-24 w-24 opacity-10 transition group-hover:opacity-20"
              />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-navy">
                <s.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="relative mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="relative mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground opacity-0 transition group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

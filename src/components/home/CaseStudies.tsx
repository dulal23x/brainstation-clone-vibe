import { ArrowRight } from "lucide-react";
import c1 from "@/assets/bs23/image-18.webp.asset.json";
import c2 from "@/assets/bs23/image-23.webp.asset.json";
import c3 from "@/assets/bs23/fintech23.webp.asset.json";
import outco from "@/assets/dd/Outco-white.png.asset.json";
import beeda from "@/assets/dd/beeda.png.asset.json";
import applypass from "@/assets/dd/ApplyPass.png.asset.json";

const CASES = [
  { img: c1, tag: "Healthcare · Engineering", title: "Telehealth platform for a national provider network", stats: ["+62%", "-38%"], statLabels: ["Patient throughput", "Waiting time"] },
  { img: c2, tag: "Fintech · Engineering", title: "Digital-wallet re-platforming for a top-3 telco", stats: ["10M+", "99.99%"], statLabels: ["MAU migrated", "Uptime SLA"] },
  { img: c3, tag: "Retail · Engineering", title: "Headless commerce for an omnichannel apparel brand", stats: ["+41%", "3.2×"], statLabels: ["Conversion", "Time-to-market"] },
  { img: outco, tag: "SaaS · Growth", title: "Outco / ApplyPass — 5× revenue with a rebuilt paid-media engine", stats: ["5×", "-42%"], statLabels: ["Revenue", "CPL"], contain: true },
  { img: beeda, tag: "Marketplace · Growth", title: "Beeda — full-funnel launch across Meta and Google Ads", stats: ["3.1×", "+118%"], statLabels: ["ROAS", "Leads MoM"], contain: true },
  { img: applypass, tag: "SaaS · Growth", title: "ApplyPass — landing-page + offer redesign lifting signup CVR", stats: ["+114%", "670"], statLabels: ["CTR", "New leads"], contain: true },
];

export function CaseStudies() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Case Studies</p>
            <h2 className="mt-3 text-[34px] font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Outcomes we've shipped
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            View all case studies <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="overflow-hidden rounded-2xl border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className={`aspect-[16/10] overflow-hidden ${c.contain ? "bg-navy p-8" : "bg-muted"}`}>
                <img src={c.img.url} alt={c.title} className={`h-full w-full ${c.contain ? "object-contain" : "object-cover"}`} />
              </div>
              <div className="p-6">
                <span className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-navy">
                  {c.tag}
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">{c.title}</h3>
                <div className="mt-5 flex gap-6">
                  {c.stats.map((s, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold text-foreground">{s}</div>
                      <div className="text-xs text-muted-foreground">{c.statLabels[i]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

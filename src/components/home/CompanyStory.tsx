import { ArrowRight } from "lucide-react";
import img from "@/assets/bs23/group-pic_.webp.asset.json";
import editorial from "@/assets/dd/editorial.jpg.asset.json";

const HIGHLIGHTS = [
  { stat: "1MM", label: "monthly organic reach" },
  { stat: "1.2MM", label: "community subscribers" },
  { stat: "36+", label: "countries served" },
];

export function CompanyStory() {
  return (
    <section id="story" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our story</p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Founded by Dulal Hussain — redefining what a growth partner looks like.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Dulal's Digital LLC blends a growth-marketing crew that has driven 5× revenue for SaaS
            clients with two decades of enterprise engineering heritage. From central banks to
            health networks to bootstrapped founders, we ship the whole loop — demand, conversion,
            and the product behind it.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-6">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label}>
                <dt className="text-3xl font-bold text-foreground">{h.stat}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{h.label}</dd>
              </div>
            ))}
          </dl>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Learn about us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="relative">
          <img
            src={img.url}
            alt="Team gathered at an offsite"
            className="w-full rounded-2xl shadow-elevated"
          />
          <img
            src={editorial.url}
            alt="Digital marketing editorial"
            className="absolute -bottom-6 -left-6 hidden w-48 rounded-xl border-4 border-background shadow-elevated sm:block"
          />
        </div>
      </div>
    </section>
  );
}

import { Sparkles, ArrowRight } from "lucide-react";
import img from "@/assets/bs23/AIDSecI.webp.asset.json";

const STATS = [
  { pct: 30, label: "Faster delivery with AI-augmented engineering" },
  { pct: 40, label: "Cost reduction across build + run" },
  { pct: 24, label: "Hours coverage from our global delivery pods", suffix: "/7" },
];

export function AiExcellence() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-navy">
            <Sparkles className="h-3.5 w-3.5" /> AI-Driven Delivery
          </div>
          <h2 className="mt-4 text-[34px] font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            AI-driven development excellence
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            We wire generative AI into every phase of delivery — discovery, code, review, QA, and
            run. Ship faster, spend less, and keep quality high.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Talk to an AI engineer <ArrowRight className="h-4 w-4" />
          </a>
          <img
            src={img.url}
            alt="Brain Station 23 engineers in a workshop session"
            className="mt-10 w-full rounded-2xl shadow-elevated"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border bg-card p-7 shadow-card">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-foreground">{s.pct}</span>
                <span className="text-3xl font-bold text-accent">{s.suffix ?? "%"}</span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.label}</p>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${Math.min(s.pct * (s.suffix ? 3 : 1.5), 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

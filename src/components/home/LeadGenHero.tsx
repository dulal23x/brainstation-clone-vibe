import { ArrowRight, Target, LineChart, Rocket } from "lucide-react";
import quote from "@/assets/dd/Quotre-2.png.asset.json";

const PILLARS = [
  { icon: Target, title: "Qualified pipeline", body: "ICP-matched leads delivered weekly with sales-ready intent signals." },
  { icon: LineChart, title: "Full-funnel attribution", body: "Every dollar tracked from ad impression to closed revenue." },
  { icon: Rocket, title: "Scale that compounds", body: "Landing pages, offers, and creatives iterated until CPL bends downward." },
];

export function LeadGenHero() {
  return (
    <section id="lead-generation" className="relative overflow-hidden bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
            Flagship service
          </span>
          <h2 className="mt-4 text-[36px] font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Lead generation that fills your pipeline — not your spam folder.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            We build lead engines for ambitious brands — paid media, landing pages, offers, and
            follow-up sequences engineered to convert. Fewer tire-kickers, more booked calls.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-xl border bg-card p-4 shadow-card">
                <p.icon className="h-5 w-5 text-navy" strokeWidth={1.75} />
                <h3 className="mt-3 text-sm font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 text-[13px] leading-snug text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Get your proposal <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="relative">
          <img
            src={quote.url}
            alt="Client testimonial artwork"
            className="mx-auto w-full max-w-[480px] rounded-2xl shadow-elevated"
          />
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-navy p-5 text-navy-foreground shadow-elevated sm:left-8 sm:right-8">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-accent">5×</span>
              <span className="text-sm font-medium text-navy-foreground/80">
                Revenue growth for Outco / ApplyPass
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-navy-foreground/70">
              A rebuilt paid-media engine, a new offer, and a 3-touch nurture sequence — deployed in
              90 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

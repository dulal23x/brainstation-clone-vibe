const INDUSTRIES = [
  { name: "SaaS & Tech", note: "Founder-led sales, PLG onboarding, demo pipelines" },
  { name: "Home Services", note: "Plumbing, HVAC, roofing — high-intent Google Ads" },
  { name: "Coaching & Info", note: "Webinars, launches, evergreen funnels" },
  { name: "Med Spa & Aesthetics", note: "Local paid + booking-optimized landing pages" },
  { name: "Beauty & Education", note: "Course launches, cohort-based enrollment" },
  { name: "Professional Services", note: "Accounting, legal, consulting lead flow" },
  { name: "Fintech & Insurance", note: "Compliance-safe Meta + Google campaigns" },
  { name: "Healthcare", note: "Patient acquisition with HIPAA-aware creative" },
];

export function IndustriesWeGrow() {
  return (
    <section id="industries-we-grow" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Industries</p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Who we grow
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Specialists, not generalists. We go deep in the categories where we already know what
            makes the phone ring.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((i) => (
            <div
              key={i.name}
              className="group rounded-2xl border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-accent hover:shadow-elevated"
            >
              <h3 className="text-base font-semibold text-foreground">{i.name}</h3>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">{i.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

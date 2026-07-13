import iconYellow from "@/assets/dd/icon-building-yellow.png.asset.json";

type Result = { stat: string; label: string; title: string; industry: string };

const RESULTS: Result[] = [
  { stat: "114%", label: "Campaign CTR increase", title: "Facebook Ads for SaaS / Insurance", industry: "Medicare · SaaS" },
  { stat: "670", label: "New leads delivered", title: "Google Ads for a plumbing company", industry: "Home services" },
  { stat: "122%", label: "Revenue goal exceeded", title: "Marketing strategy for a coaching brand", industry: "Coaching" },
  { stat: "-27%", label: "Cost per lead", title: "Google Ads for an accounting firm", industry: "Professional services" },
  { stat: "-47%", label: "Cost per lead", title: "Paid ads for a beauty education brand", industry: "Beauty · Education" },
  { stat: "375", label: "New qualified leads", title: "Google Ads for a med spa", industry: "Healthcare · Med Spa" },
];

export function ResultsShowcase() {
  return (
    <section id="results" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Results</p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Numbers we've moved for real clients
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A snapshot of campaigns from our growth crew across paid search, paid social, and
            end-to-end marketing strategy.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map((r) => (
            <article key={r.title} className="rounded-2xl border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
              <div className="flex items-center justify-between">
                <div className="text-5xl font-bold tracking-tight text-navy">{r.stat}</div>
                <img src={iconYellow.url} alt="" aria-hidden className="h-10 w-10 object-contain" />
              </div>
              <p className="mt-3 text-sm font-medium text-muted-foreground">{r.label}</p>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">{r.title}</h3>
              <span className="mt-4 inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-navy">
                {r.industry}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

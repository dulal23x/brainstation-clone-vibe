import { Search, Sparkles, Rocket, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Research",
    body: "We map your ICP, competitors, and buying triggers. Every campaign starts from a real customer insight — not a template.",
  },
  {
    icon: Sparkles,
    title: "Offer",
    body: "We craft an offer worth clicking — landing pages, hooks, and creative that speak directly to intent-loaded prospects.",
  },
  {
    icon: Rocket,
    title: "Launch",
    body: "Google, Meta, LinkedIn, YouTube — deployed with tight tracking and conversion events wired end-to-end.",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    body: "Weekly cadence: kill what doesn't work, scale what does. Cost per lead drops, pipeline compounds.",
  },
];

export function GrowthPlaybook() {
  return (
    <section id="playbook" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">The playbook</p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            How we generate demand — and turn it into revenue
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A four-step operating system for growth. It's how we've moved the needle for SaaS
            founders, home-service operators, coaches, and med spas.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border bg-card p-6 shadow-card">
              <span className="absolute right-5 top-5 text-4xl font-bold text-accent/30">
                0{i + 1}
              </span>
              <s.icon className="h-6 w-6 text-navy" strokeWidth={1.75} />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

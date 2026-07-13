import img from "@/assets/bs23/ctaimg-1.webp.asset.json";

const STEPS = [
  { n: "01", title: "Discover", body: "Business, users, data, constraints. A single artifact your whole team aligns on." },
  { n: "02", title: "Design", body: "Systemized UX, architecture, and a build plan sized to your milestones." },
  { n: "03", title: "Deliver", body: "AI-augmented sprints with weekly demos and measurable outcomes." },
  { n: "04", title: "Run", body: "24/7 SRE, observability, and continuous modernization." },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">How we work</p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Our process — AI-optimized, transparent, scalable
          </h2>
          <img
            src={img.url}
            alt="Brain Station 23 team planning a project"
            className="mt-10 w-full rounded-2xl shadow-elevated"
          />
        </div>
        <ol className="relative border-l-2 border-dashed border-accent/40 pl-8">
          {STEPS.map((s) => (
            <li key={s.n} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[42px] flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                {s.n}
              </span>
              <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

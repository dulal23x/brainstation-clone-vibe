import { Sparkles, Anchor, PartyPopper } from "lucide-react";

const VALUES = [
  { icon: Sparkles, title: "Think Big", body: "We chase industry-disrupting outcomes, not vanity metrics." },
  { icon: Anchor, title: "Own It", body: "Client wins are our wins. We stand behind every campaign and every ship." },
  { icon: PartyPopper, title: "Have Fun", body: "Great work comes from a team that actually loves the craft." },
];

export function ValuesBand() {
  return (
    <section className="bg-navy py-16 text-navy-foreground lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Our values</p>
          <h2 className="mt-3 text-[30px] font-bold leading-tight sm:text-4xl">
            Three words. One operating manual.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl bg-navy-2 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                <v.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-xl font-semibold uppercase tracking-wide">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

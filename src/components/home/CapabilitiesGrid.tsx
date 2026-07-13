import {
  Code2,
  Smartphone,
  Cpu,
  Cloud,
  ShieldCheck,
  Settings2,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Cap = { icon: LucideIcon; title: string; body: string };

const CAPS: Cap[] = [
  { icon: Code2, title: "Custom Software Development", body: "Web and enterprise platforms engineered for scale, security, and long-term ownership." },
  { icon: Smartphone, title: "Mobile App Development", body: "Native and cross-platform apps that ship faster and keep a five-star review floor." },
  { icon: Cpu, title: "AI & Machine Learning", body: "Production LLM features, RAG, computer vision, and predictive models — from POC to prod." },
  { icon: Cloud, title: "Cloud & DevOps", body: "AWS, Azure, and GCP delivery with IaC, GitOps, and cost-tuned infrastructure." },
  { icon: ShieldCheck, title: "QA & Test Engineering", body: "Automated regression, performance, and security testing baked into every release." },
  { icon: Settings2, title: "Managed Services", body: "24/7 SRE, application support, and continuous modernization for mission-critical systems." },
];

export function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Core capabilities</p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Drive growth with our core capabilities
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Full-lifecycle product engineering — discovery, design, delivery, and 24/7 run.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPS.map((c) => (
            <article
              key={c.title}
              className="group relative rounded-2xl border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-navy">
                <c.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{c.body}</p>
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground opacity-0 transition group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

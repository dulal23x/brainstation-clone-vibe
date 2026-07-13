import { ArrowRight, ShieldCheck } from "lucide-react";
import i1 from "@/assets/bs23/6684761_3412943-1.svg.asset.json";
import i2 from "@/assets/bs23/6764647_3425857-1.svg.asset.json";
import i3 from "@/assets/bs23/721566_13-1.svg.asset.json";
import i4 from "@/assets/bs23/9588744_4213537-1.svg.asset.json";
import i5 from "@/assets/bs23/00000-01-1.svg.asset.json";
import i6 from "@/assets/bs23/Frame-1618872771.svg.asset.json";
import i7 from "@/assets/bs23/67909ed924615d402e05044f_Group-1321316638.svg.asset.json";
import i8 from "@/assets/bs23/67909ed97087aee2c1ff0da4_Group-1413373285.svg.asset.json";

type Ind = { img?: { url: string }; title: string; body: string };

const IND: Ind[] = [
  { img: i1, title: "Fintech", body: "Digital banking, payments, and compliance-first platforms." },
  { img: i2, title: "Retail & eCommerce", body: "Omnichannel storefronts, headless commerce, and CX." },
  { img: i3, title: "EdTech", body: "LMS, Moodle, and adaptive learning at national scale." },
  { img: i4, title: "Healthcare", body: "HIPAA-grade telehealth, EMR, and clinical workflow tools." },
  { img: i5, title: "Telecom", body: "OSS/BSS modernization, self-care apps, and analytics." },
  { img: i6, title: "Manufacturing", body: "IoT, MES, and supply-chain visibility platforms." },
  { img: i7, title: "RMG & Apparel", body: "PLM, factory ops, and sustainability reporting." },
  { img: i8, title: "Logistics", body: "Fleet, last-mile, and warehouse orchestration." },
  { title: "Government", body: "Citizen services, e-governance, and secure identity." },
];

export function IndustriesGrid() {
  return (
    <section id="industries" className="bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Industries</p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight sm:text-4xl lg:text-5xl">
            Industries we power with innovation
          </h2>
          <p className="mt-4 text-base text-navy-foreground/70">
            Two decades of domain depth across regulated and consumer sectors.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IND.map((i) => (
            <article
              key={i.title}
              className="rounded-2xl bg-navy-2 p-6 transition hover:bg-navy-2/70"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/8 ring-1 ring-white/10">
                {i.img ? (
                  <img src={i.img.url} alt="" aria-hidden className="h-8 w-8 object-contain" />
                ) : (
                  <ShieldCheck className="h-6 w-6 text-accent" strokeWidth={1.75} />
                )}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-navy-foreground/70">{i.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center lg:justify-end">
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            See all industries <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

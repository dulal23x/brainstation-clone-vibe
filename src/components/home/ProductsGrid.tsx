import { ArrowUpRight } from "lucide-react";
import s1 from "@/assets/bs23/Service-Card-1.webp.asset.json";
import s2 from "@/assets/bs23/Service-Card-2.webp.asset.json";
import s3 from "@/assets/bs23/Service-Card-3.webp.asset.json";
import s4 from "@/assets/bs23/Service-Card-4.webp.asset.json";

const PRODUCTS = [
  { img: s1, title: "Zenwallet", body: "Digital wallet and payments platform trusted across South Asia." },
  { img: s2, title: "Elarn", body: "Enterprise learning suite built on Moodle for national deployments." },
  { img: s3, title: "Health23", body: "Telemedicine, EMR, and clinical workflow platform." },
  { img: s4, title: "Insurtech23", body: "Modular insurance core — quote, bind, claims — for modern carriers." },
];

export function ProductsGrid() {
  return (
    <section id="products" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Products & Solutions</p>
            <h2 className="mt-3 text-[34px] font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Our products & solutions
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-input px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            Explore all products <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {PRODUCTS.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={p.img.url}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

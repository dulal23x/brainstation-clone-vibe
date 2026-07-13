import { ArrowRight } from "lucide-react";
import img from "@/assets/bs23/Column.webp.asset.json";

export function JoinTeam() {
  return (
    <section className="bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <img
          src={img.url}
          alt="Brain Station 23 engineers collaborating"
          className="w-full rounded-2xl shadow-elevated"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Careers</p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight sm:text-4xl lg:text-5xl">
            Join our team — build what's next
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/70">
            900+ engineers, designers, and researchers working across Dhaka, Chittagong, Amsterdam,
            Tokyo, Copenhagen, and Dallas. Meaningful problems, real ownership, deep craft.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            See open roles <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

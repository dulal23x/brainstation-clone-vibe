import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react";
import { subscribeNewsletter } from "@/lib/contact.functions";
import logo from "@/assets/bs23/BS23Dark-Logo.svg.asset.json";
import iso1 from "@/assets/bs23/iso2.svg.asset.json";
import iso2 from "@/assets/bs23/iso9.svg.asset.json";
import cmmi from "@/assets/bs23/cmmi3.svg.asset.json";
import clutch from "@/assets/bs23/clutch-logo_zaiioc-1-2.webp.asset.json";
import aws from "@/assets/bs23/aws.svg.svg.asset.json";
import msft from "@/assets/bs23/microsoft.svg.svg.asset.json";
import inc5000 from "@/assets/bs23/inc-5000.svg.svg.asset.json";
import ey from "@/assets/bs23/ey-entrepreneur-of-the-year.svg.svg.asset.json";
import fLogo from "@/assets/bs23/f-logo-2.svg.asset.json";


const COLS = [
  {
    title: "Company",
    links: ["About us", "Leadership", "Careers", "Newsroom", "Contact"],
  },
  {
    title: "Services",
    links: ["Custom Software", "AI & ML", "Mobile Apps", "Cloud & DevOps", "QA & Test"],
  },
  {
    title: "Industries",
    links: ["Fintech", "Healthcare", "Retail", "Telecom", "Government"],
  },
];

export function SiteFooter() {
  const subscribe = useServerFn(subscribeNewsletter);
  const [pending, setPending] = useState(false);

  const onSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    if (!email) return;
    setPending(true);
    try {
      await subscribe({ data: { email } });
      toast.success("Subscribed. Watch your inbox.");
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error("Please enter a valid email.");
    } finally {
      setPending(false);
    }
  };

  return (
    <footer className="bg-navy pt-16 pb-8 text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <img src={logo.url} alt="Brain Station 23" className="h-8 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              A global custom software company building AI-powered, scalable platforms for
              startups and enterprises since 2006.
            </p>
            <form onSubmit={onSubscribe} className="mt-6 flex max-w-md gap-2">
              <input
                required
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full rounded-full bg-white/5 px-4 py-3 text-sm text-navy-foreground outline-none ring-1 ring-white/10 focus:ring-accent"
              />
              <button
                disabled={pending}
                className="inline-flex items-center gap-1 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90 disabled:opacity-60"
              >
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-navy-foreground">{c.title}</h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-navy-foreground/70 transition hover:text-accent">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center gap-6 opacity-90">
            <img src={iso1.url} alt="ISO 27001" className="h-10 w-auto" />
            <img src={iso2.url} alt="ISO 9001" className="h-10 w-auto" />
            <img src={cmmi.url} alt="CMMI Level 3" className="h-10 w-auto" />
            <img src={clutch.url} alt="Clutch top developers" className="h-8 w-auto" />
            <img src={aws.url} alt="AWS Partner" className="h-10 w-auto brightness-0 invert" />
            <img src={msft.url} alt="Microsoft Partner" className="h-10 w-auto brightness-0 invert" />
            <img src={inc5000.url} alt="Inc. 5000" className="h-10 w-auto brightness-0 invert" />
            <img src={ey.url} alt="EY Entrepreneur of the Year" className="h-10 w-auto brightness-0 invert" />
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-navy-foreground/80 transition hover:bg-accent hover:text-accent-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 transition hover:bg-accent">
              <img src={fLogo.url} alt="" aria-hidden className="h-4 w-4 object-contain" />
            </a>
            <a href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-navy-foreground/80 transition hover:bg-accent hover:text-accent-foreground">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-navy-foreground/80 transition hover:bg-accent hover:text-accent-foreground">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>


        <p className="mt-8 text-center text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} Brain Station 23 PLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

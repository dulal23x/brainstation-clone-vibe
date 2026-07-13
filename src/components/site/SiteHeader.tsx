import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/bs23/BS23Dark-Logo.svg.asset.json";

const NAV = [
  { label: "Services", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Products", href: "#products" },
  { label: "Resources", href: "#process" },
  { label: "Global Offices", href: "#offices" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="/" className="flex items-center gap-2">
          <img src={logo.url} alt="Brain Station 23" className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-[15px] font-medium text-foreground/85 transition hover:text-foreground"
            >
              {item.label}
              {item.label !== "Global Offices" && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition hover:opacity-90 lg:inline-flex"
        >
          Schedule a Call
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-background lg:hidden">
          <nav className="flex flex-col px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Schedule a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

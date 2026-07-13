import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";

export function ContactCTA() {
  const submit = useServerFn(submitContact);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? "") || null,
      phone: null,
      message: String(fd.get("message") ?? ""),
    };
    setLoading(true);
    try {
      await submit({ data: payload });
      toast.success("Thanks! We'll get back to you within one business day.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again or email dulal@dulalsdigital.com.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-navy py-20 text-navy-foreground lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Let's talk</p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight sm:text-4xl lg:text-5xl">
            Are you ready for better results?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-navy-foreground/70">
            Tell us about your growth goals or the product you're building. We'll come back within
            one business day with a scoped proposal.
          </p>
          <div className="mt-8 space-y-2 text-sm text-navy-foreground/75">
            <p className="font-semibold text-navy-foreground">Dulal's Digital LLC</p>
            <p>1201 Mountain Road NW, Albuquerque, NM 87104</p>
            <p>
              <a href="mailto:dulal@dulalsdigital.com" className="text-accent hover:underline">
                dulal@dulalsdigital.com
              </a>
            </p>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 gap-4 rounded-2xl bg-navy-2 p-6 shadow-elevated sm:grid-cols-2 sm:p-8"
        >
          <div className="sm:col-span-1">
            <label className="mb-1.5 block text-xs font-medium text-navy-foreground/80">Full name</label>
            <input
              required
              name="name"
              className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm text-navy-foreground outline-none ring-1 ring-white/10 focus:ring-accent"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1.5 block text-xs font-medium text-navy-foreground/80">Work email</label>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm text-navy-foreground outline-none ring-1 ring-white/10 focus:ring-accent"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-xs font-medium text-navy-foreground/80">Company</label>
            <input
              name="company"
              className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm text-navy-foreground outline-none ring-1 ring-white/10 focus:ring-accent"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-xs font-medium text-navy-foreground/80">
              What are you building?
            </label>
            <textarea
              required
              name="message"
              rows={4}
              className="w-full resize-none rounded-lg bg-white/5 px-4 py-3 text-sm text-navy-foreground outline-none ring-1 ring-white/10 focus:ring-accent"
            />
          </div>
          <button
            disabled={loading}
            className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {loading ? "Sending…" : "Get your proposal"}
            {!loading && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>
      </div>
    </section>
  );
}

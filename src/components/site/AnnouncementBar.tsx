import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="w-full border-b bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1.5 px-5 py-2 text-center text-[13px] lg:justify-between lg:px-10">
        <p className="font-medium">
          Scale your dev team with top 1% Bangladeshi talent in 4 weeks.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
        >
          Book a discovery call <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

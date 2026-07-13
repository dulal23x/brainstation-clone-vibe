import { MapPin } from "lucide-react";

const OFFICES = [
  { city: "Dhaka", country: "Bangladesh", tag: "Global HQ", addr: "Plot 02, Bir Uttam A K Khandakar Road, Mohakhali C/A, Dhaka 1212" },
  { city: "Chittagong", country: "Bangladesh", addr: "Agrabad Commercial Area, Chattogram 4100" },
  { city: "Amsterdam", country: "Netherlands", addr: "WTC, Strawinskylaan, Amsterdam" },
  { city: "Tokyo", country: "Japan", addr: "Minato City, Tokyo" },
  { city: "Copenhagen", country: "Denmark", addr: "Kongens Nytorv, Copenhagen" },
  { city: "Dallas", country: "USA", addr: "Dallas, Texas" },
];

export function GlobalOffices() {
  return (
    <section id="offices" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Global Offices</p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Delivering from 6 offices, serving 36+ countries
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICES.map((o) => (
            <div key={o.city} className="rounded-2xl border bg-card p-6 shadow-card">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">
                  {o.city}, {o.country}
                </h3>
                {o.tag && (
                  <span className="ml-auto rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-semibold text-navy">
                    {o.tag}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.addr}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

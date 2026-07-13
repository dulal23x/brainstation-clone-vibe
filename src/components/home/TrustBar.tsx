import l1 from "@/assets/bs23/LogoH1.svg.asset.json";
import l2 from "@/assets/bs23/LogoH2.svg.asset.json";
import l3 from "@/assets/bs23/LogoH3.svg.asset.json";
import l4 from "@/assets/bs23/LogoH4.svg.asset.json";
import l5 from "@/assets/bs23/LogoH5.svg.asset.json";
import l6 from "@/assets/bs23/LogoH6.svg.asset.json";
import l7 from "@/assets/bs23/LogoH7.svg.asset.json";
import l8 from "@/assets/bs23/LogoH8.svg.asset.json";
import l9 from "@/assets/bs23/LogoH9.svg.asset.json";
import l31 from "@/assets/bs23/LogoH31.svg.asset.json";
import l32 from "@/assets/bs23/LogoH32.svg.asset.json";
import l33 from "@/assets/bs23/LogoH33.svg.asset.json";
import l34 from "@/assets/bs23/LogoH34.svg.asset.json";
import l35 from "@/assets/bs23/LogoH35.svg.asset.json";
import l36 from "@/assets/bs23/LogoH36.svg.asset.json";
import beeda from "@/assets/dd/beeda.png.asset.json";
import outco from "@/assets/dd/Outco-white.png.asset.json";
import applypass from "@/assets/dd/ApplyPass.png.asset.json";
import fitness from "@/assets/dd/fitness-matrix.jpg.asset.json";

const DD_CLIENTS = [
  { src: beeda.url, name: "Beeda", scale: "max-h-20 sm:max-h-24 md:max-h-28" },
  { src: outco.url, name: "Outco", scale: "max-h-20 sm:max-h-24 md:max-h-28" },
  { src: applypass.url, name: "ApplyPass", scale: "max-h-28 sm:max-h-32 md:max-h-36 scale-125" },
  { src: fitness.url, name: "Fitness Matrix", scale: "max-h-20 sm:max-h-24 md:max-h-28" },
];
const ROW1 = [l1, l2, l3, l4, l5, l6, l7, l8, l9];
const ROW2 = [l31, l32, l33, l34, l35, l36];

export function TrustBar() {
  const loop1 = [...ROW1, ...ROW1];
  const loop2 = [...ROW2, ...ROW2];
  return (
    <section className="border-y bg-background py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <h2 className="text-center text-[22px] font-semibold text-foreground sm:text-2xl">
          Brands growing with Dulal's Digital
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-8 md:grid-cols-4">
          {DD_CLIENTS.map((c) => (
            <div
              key={c.name}
              className="flex h-32 w-full items-center justify-center rounded-2xl border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated sm:h-40 md:h-44"
            >
              <img
                src={c.src}
                alt={c.name}
                className={`w-auto max-w-full object-contain ${c.scale}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-12 space-y-6 overflow-hidden opacity-60">
        <div className="marquee-track flex w-max items-center gap-12 px-8">
          {loop1.map((logo, i) => (
            <img key={i} src={logo.url} alt="" aria-hidden className="h-8 w-auto object-contain" />
          ))}
        </div>
        <div className="marquee-track flex w-max items-center gap-12 px-8" style={{ animationDirection: "reverse", animationDuration: "50s" }}>
          {loop2.map((logo, i) => (
            <img key={i} src={logo.url} alt="" aria-hidden className="h-8 w-auto object-contain" />
          ))}
        </div>
      </div>
    </section>

  );
}


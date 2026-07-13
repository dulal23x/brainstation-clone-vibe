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
  { src: beeda.url, name: "Beeda" },
  { src: outco.url, name: "Outco" },
  { src: applypass.url, name: "ApplyPass" },
  { src: fitness.url, name: "Fitness Matrix" },
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
          Companies we've helped grow — from startups to enterprises
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {DD_CLIENTS.map((c) => (
            <img
              key={c.name}
              src={c.src}
              alt={c.name}
              className="h-12 w-auto max-w-[160px] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
      <div className="relative mt-10 space-y-6 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-16 px-8">
          {loop1.map((logo, i) => (
            <img key={i} src={logo.url} alt="" aria-hidden className="h-10 w-auto object-contain opacity-80" />
          ))}
        </div>
        <div className="marquee-track flex w-max items-center gap-16 px-8" style={{ animationDirection: "reverse", animationDuration: "50s" }}>
          {loop2.map((logo, i) => (
            <img key={i} src={logo.url} alt="" aria-hidden className="h-10 w-auto object-contain opacity-80" />
          ))}
        </div>
      </div>
    </section>
  );
}


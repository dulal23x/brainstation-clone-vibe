import Java from "@/assets/bs23/Java.svg.asset.json";
import React from "@/assets/bs23/React.svg.asset.json";
import Net from "@/assets/bs23/NET.svg.asset.json";
import Python from "@/assets/bs23/Python.svg.asset.json";
import Angular from "@/assets/bs23/Angular.svg.asset.json";
import Moodle from "@/assets/bs23/Moodle.svg.asset.json";
import Wp from "@/assets/bs23/Wordpress.svg.asset.json";
import Ionic from "@/assets/bs23/Ionic.svg.asset.json";
import Node from "@/assets/bs23/Node.js.svg.asset.json";
import Vue from "@/assets/bs23/Vue.js.svg.asset.json";
import PHP from "@/assets/bs23/PHP.svg.asset.json";
import Flutter from "@/assets/bs23/Flutter.svg.asset.json";

const STACK = [
  { name: "Java", logo: Java },
  { name: "React", logo: React },
  { name: ".NET", logo: Net },
  { name: "Python", logo: Python },
  { name: "Angular", logo: Angular },
  { name: "Node.js", logo: Node },
  { name: "Vue", logo: Vue },
  { name: "PHP", logo: PHP },
  { name: "Flutter", logo: Flutter },
  { name: "Ionic", logo: Ionic },
  { name: "Moodle", logo: Moodle },
  { name: "WordPress", logo: Wp },
];

export function TechStackGrid() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Tech Stack</p>
          <h2 className="mt-3 text-[34px] font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Yes — we cover your tech stack
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Deep benches across every mainstream server, mobile, and web platform.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {STACK.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <img src={s.logo.url} alt={s.name} className="h-12 w-12 object-contain" />
              <span className="text-sm font-medium text-foreground">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

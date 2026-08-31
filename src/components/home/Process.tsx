"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionLabel from "@/components/ui/SectionLabel";
import { company } from "@/data/company";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Card stacking on scroll (RNG GSAP paradigm):
// cards slide up from the bottom and stack into place, pinned to the viewport
export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      const travel = window.innerHeight * 0.6;

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: travel + i * 40 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: () => `+=${travel * (i + 1) * 0.7}`,
              scrub: 1,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute -left-40 top-1/3 w-[36rem] h-[36rem] rounded-full blur-[160px] opacity-15 bg-molten" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <SectionLabel index="04" label="How it works" className="mb-6" />
        <h2 className="font-display font-black uppercase tracking-tight leading-[0.95] text-[clamp(2rem,5vw,4.25rem)] max-w-3xl mb-10 sm:mb-12">
          From enquiry to delivery, <span className="steel-text">stacked</span> in four moves
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
          {company.process.map((step, i) => (
            <div
              key={step.title}
              className="process-card relative border border-line rounded-3xl bg-coal/90 backdrop-blur-sm p-8 sm:p-12 will-change-transform"
            >
              <div className="flex items-start justify-between">
                <span className="font-display font-black text-[clamp(4rem,8vw,7rem)] leading-none steel-text">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel-dim mt-2">
                  Step {i + 1} / {company.process.length}
                </span>
              </div>
              <h3 className="mt-6 font-display font-bold text-2xl sm:text-3xl tracking-tight">{step.title}</h3>
              <p className="mt-3 text-steel leading-relaxed max-w-md">{step.desc}</p>
              <span className="absolute top-0 right-0 h-px w-full bg-gradient-to-r from-transparent via-molten/60 to-transparent opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

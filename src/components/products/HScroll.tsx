"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { company } from "@/data/company";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Horizontal scroll section (RNG GSAP paradigm): pinned track scrubs sideways
export default function HScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;
      const getAmount = () => track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: () => -getAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-6 items-stretch pl-6 sm:pl-10 w-max will-change-transform py-10"
      >
        {[...company.products, ...company.products].map((p, i) => (
          <div
            key={`${p.slug}-${i}`}
            className="relative w-[68vw] sm:w-[30rem] lg:w-[34rem] h-[26rem] lg:h-[30rem] shrink-0 rounded-3xl overflow-hidden border border-line"
          >
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="w-full h-full object-cover grayscale contrast-125 opacity-75"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-7 lg:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-molten mb-2">
                {p.hsns} · {p.category}
              </div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl tracking-tight">{p.name}</h3>
              <p className="mt-2 text-sm text-steel max-w-sm leading-relaxed">{p.tagline}</p>
            </div>
            <span className="absolute top-5 left-6 font-mono text-[10px] text-steel-dim tracking-widest">
              {String(i + 1).padStart(2, "0")} / {company.products.length * 2}
            </span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </section>
  );
}

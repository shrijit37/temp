"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { company } from "@/data/company";

export default function HScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
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
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-4 sm:gap-6 items-stretch overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pl-6 sm:pl-10 pr-6 w-auto md:w-max will-change-transform py-6 sm:py-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {company.products.map((p, i) => (
          <div
            key={`${p.slug}-${i}`}
            className="relative w-[82vw] sm:w-[30rem] lg:w-[34rem] h-[22rem] sm:h-[26rem] lg:h-[30rem] shrink-0 snap-center rounded-2xl sm:rounded-3xl overflow-hidden border border-line"
          >
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="w-full h-full object-cover grayscale contrast-125 opacity-75"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 lg:p-9">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-molten mb-1.5 sm:mb-2">
                {p.hsns} · {p.category}
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight">{p.name}</h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-steel max-w-sm leading-relaxed line-clamp-2 sm:line-clamp-none">{p.tagline}</p>
            </div>
            <span className="absolute top-4 sm:top-5 left-5 sm:left-6 font-mono text-[10px] text-steel-dim tracking-widest">
              {String(i + 1).padStart(2, "0")} / {company.products.length}
            </span>
          </div>
        ))}
      </div>
      <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-ink to-transparent" />
    </section>
  );
}

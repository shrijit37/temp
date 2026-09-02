"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaskedHeading from "@/components/reactbits/MaskedHeading";
import { PrimaryButton, GhostButton } from "@/components/ui/Buttons";
import { company } from "@/data/company";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Intro soft rise
      const rises = rootRef.current?.querySelectorAll("[data-hero-rise]");
      if (rises && rises.length > 0) {
        gsap.fromTo(
          rises,
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "power3.out", delay: 0.15 }
        );
      }
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
      {/* ambient background */}
      <div className="absolute inset-0 grid-hairlines opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] rounded-full blur-[140px] opacity-25 bg-molten"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        {/* Editorial headline — full-bleed masked heading */}
        <MaskedHeading
          tag="h1"
          text="DELHI METAL CORPORATION"
          src="/images/hero-texture.jpg"
          grayscale
          brightness={1.05}
          saturation={1.1}
          align="left"
          weight={900}
          tracking={-0.045}
          lineHeight={0.92}
          textScale={0.125}
          className="select-none"
          style={{ fontFamily: "var(--font-display)" }}
        />

        {/* Editorial split */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-end">
          <div className="md:col-span-7" data-hero-rise>
            <div className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.32em] text-molten mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-molten" />
              Wholesaler &amp; Distributor · New Delhi
            </div>
            <p className="text-steel text-lg sm:text-xl leading-relaxed max-w-xl font-light">
              {company.intro}
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col items-start gap-5" data-hero-rise>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <PrimaryButton href="/#contact">Get a Quote</PrimaryButton>
              <GhostButton href="/products">Explore Products</GhostButton>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              {company.stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span className="font-display font-black text-xl steel-text">{s.value}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-steel-dim">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

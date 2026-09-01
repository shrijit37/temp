"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPressure from "@/components/reactbits/TextPressure";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Statement() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        { opacity: 0.25, scale: 0.97 },
        {
          opacity: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 85%", end: "top 40%", scrub: true },
        }
      );
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <TextPressure
          text="The conductor behind India's power"
          textColor="#9AA0A8"
          minFontSize={20}
        />
        <div className="mt-8 text-center font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-steel-dim">
          Aluminium · Copper · Since day one
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { company } from "@/data/company";

// Inline typography images (RNG component) — pill images embedded in the headline
const INLINE_IMAGES = [
  { src: "/images/prod-alu-strip.jpg", alt: "Aluminium strip", cls: "w-20 sm:w-28 h-8 sm:h-11" },
  { src: "/images/hero-copper.jpg", alt: "Copper strip", cls: "w-24 sm:w-36 h-9 sm:h-12" },
  { src: "/images/prod-chequered.jpg", alt: "Chequered sheet", cls: "w-16 sm:w-24 h-7 sm:h-10" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <SectionLabel index="01" label="Who we are" className="mb-10 sm:mb-14" />

        <h2 className="font-display font-black uppercase tracking-tight leading-[0.95] text-[clamp(2rem,5.4vw,4.75rem)] max-w-6xl">
          Aluminium &amp; copper,
          <br className="hidden sm:block" />
          in every form you{" "}
          <span className="inline-block align-middle mx-2 overflow-hidden rounded-full">
            <img
              src={`/images/prod-alu-strip.jpg`}
              alt={INLINE_IMAGES[0].alt}
              className={`object-cover grayscale contrast-125 ${INLINE_IMAGES[0].cls}`}
              draggable={false}
            />
          </span>
          build with
          <span className="inline-block align-middle mx-2 overflow-hidden rounded-full">
            <img
              src={`/images/hero-copper.jpg`}
              alt={INLINE_IMAGES[1].alt}
              className={`object-cover grayscale contrast-125 ${INLINE_IMAGES[1].cls}`}
              draggable={false}
            />
          </span>
          — bus bars, strips, sheets,
          <br className="hidden sm:block" />
          angles &amp; sections
          <span className="inline-block align-middle mx-2 overflow-hidden rounded-full">
            <img
              src={`/images/prod-chequered.jpg`}
              alt={INLINE_IMAGES[2].alt}
              className={`object-cover grayscale contrast-125 ${INLINE_IMAGES[2].cls}`}
              draggable={false}
            />
          </span>
          , from one yard in New Delhi.
        </h2>

        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <ScrollReveal
              containerClassName="!my-0 text-left"
              textClassName="!text-[clamp(1.15rem,2vw,1.5rem)] !leading-[1.7] !font-light !text-steel"
              baseOpacity={0.08}
              blurStrength={2}
            >
              {company.about}
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-line rounded-3xl bg-coal/60 p-8 sm:p-10 h-full flex flex-col justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-steel-dim">Why industry buys from us</p>
              <ul className="mt-8 space-y-6">
                {[
                  ["Mill-direct pricing", "Trade rates sourced straight from approved mills — no middlemen, no markups."],
                  ["Every lot, any lot", "From a single bus bar to full truckloads of coil and sheet."],
                  ["Certified material", "GST-verified supply with material traceability on request."],
                  ["Delivered on the date", "Just-in-time dispatch across Delhi NCR — when you say, not when we say."],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-molten" />
                    <div>
                      <div className="font-display font-bold text-bone">{t}</div>
                      <div className="text-sm text-steel mt-1 leading-relaxed">{d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

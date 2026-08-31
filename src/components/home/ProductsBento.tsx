"use client";

import Link from "next/link";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { company } from "@/data/company";

// Gapless bento: row 1 = 7 + 5, row 2 = 5 + 4 + 3 → 24 columns full, zero voids
const FEATURED = [company.products[0], company.products[1], company.products[2], company.products[3]];

const SPANS = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-4",
];

export default function ProductsBento() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 grid-hairlines opacity-40" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <SectionLabel index="02" label="Product range" className="mb-6" />
            <h2 className="font-display font-black uppercase tracking-tight leading-[0.95] text-[clamp(2rem,5vw,4.25rem)] max-w-3xl">
              Stocked for the <span className="molten-text">power</span> and{" "}
              <span className="molten-text">fabrication</span> trade
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-steel hover:text-bone transition-colors duration-300"
          >
            Full catalogue <span className="text-molten text-base">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 md:grid-flow-dense">
          {FEATURED.map((p, i) => (
            <Link key={p.slug} href="/products" className={`group block ${SPANS[i]}`}>
              <SpotlightCard
                className="h-full !p-0 border-line bg-panel hover:border-line-strong transition-colors duration-500"
                spotlightColor="rgba(255, 90, 31, 0.14)"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 ease-out"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
                  <span className="absolute top-4 left-5 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/90 bg-ink/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-line-strong">
                    {p.category}
                  </span>
                  <span className="absolute top-4 right-5 font-mono text-[10px] tracking-widest text-steel">
                    {p.hsns}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight group-hover:text-bone transition-colors duration-300">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-steel leading-relaxed">{p.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-molten">
                    Enquire <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </SpotlightCard>
            </Link>
          ))}

          {/* View-all card: 3 cols, joins the grid with zero gap */}
          <Link href="/products" className="group block md:col-span-3">
            <SpotlightCard
              className="h-full !p-0 border-line bg-coal hover:bg-panel-2 transition-colors duration-500 grid place-items-center min-h-56"
              spotlightColor="rgba(255, 90, 31, 0.1)"
            >
              <div className="p-6 text-center">
                <div className="font-display font-black text-3xl steel-text group-hover:molten-text transition-all duration-500">
                  {company.products.length}+
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-steel">
                  products in stock
                </div>
                <div className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-molten">
                  View catalogue
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </SpotlightCard>
          </Link>
        </div>
      </div>
    </section>
  );
}

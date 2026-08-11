"use client";

import { useState } from "react";
import { company } from "@/data/company";

// Horizontal accordion (RNG component): vertical slices expanding on hover/click
export default function ProductAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Desktop: horizontal slices */}
      <div className="hidden md:flex h-[26rem] lg:h-[30rem] gap-1.5">
        {company.products.map((p, i) => {
          const expanded = active === i;
          return (
            <button
              key={p.slug}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`relative group overflow-hidden rounded-2xl border transition-all duration-700 ease-out text-left ${
                expanded ? "flex-[2.8]" : "flex-1"
              } border-line hover:border-line-strong`}
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-all duration-700 ease-out ${
                  expanded ? "opacity-70 scale-100" : "opacity-40 scale-110"
                }`}
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

              {/* Vertical label when collapsed */}
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-6 font-mono text-[10px] uppercase tracking-[0.35em] text-bone/80 whitespace-nowrap origin-center transition-all duration-700 ${
                  expanded ? "opacity-0 rotate-90" : "opacity-100"
                }`}
                style={{ writingMode: "vertical-rl" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div
                className={`absolute inset-x-0 bottom-0 p-6 lg:p-8 transition-all duration-700 ease-out ${
                  expanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-molten mb-2">
                  {p.hsns} · {p.category}
                </div>
                <h3 className="font-display font-bold text-xl lg:text-2xl tracking-tight">{p.name}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed max-w-sm">{p.tagline}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-bone/80">
                      <span className="h-1 w-1 rounded-full bg-molten shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile: stacked expandable cards */}
      <div className="md:hidden flex flex-col gap-3">
        {company.products.map((p, i) => {
          const open = active === i;
          return (
            <button
              key={p.slug}
              onClick={() => setActive(open ? -1 : i)}
              aria-expanded={open}
              className={`relative overflow-hidden rounded-2xl border border-line text-left transition-all duration-500 ${
                open ? "bg-panel" : "bg-coal"
              }`}
            >
              <div className="flex items-center justify-between p-5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-molten">
                    {String(i + 1).padStart(2, "0")} · {p.hsns}
                  </div>
                  <div className="mt-1 font-display font-bold text-lg tracking-tight">{p.name}</div>
                </div>
                <span
                  className={`grid place-items-center w-9 h-9 rounded-full border border-line-strong text-steel transition-transform duration-500 ${
                    open ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>
              <div
                className={`grid transition-all duration-500 ease-out ${
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-40 object-cover rounded-xl grayscale contrast-125 opacity-80"
                      draggable={false}
                    />
                    <p className="mt-3 text-sm text-steel leading-relaxed">{p.tagline}</p>
                    <ul className="mt-3 space-y-1.5">
                      {p.specs.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-xs text-bone/80">
                          <span className="h-1 w-1 rounded-full bg-molten shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-steel-dim">
                      Used in: {p.applications}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "@/data/company";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = openPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-4 sm:top-6 inset-x-0 z-50 px-4 sm:px-6">
        <div
          className={`mx-auto max-w-6xl flex items-center justify-between rounded-full border px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled
              ? "border-line-strong bg-ink/80 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
              : "border-line bg-ink/40 backdrop-blur-md"
          }`}
        >
          <Link
            href="/"
            onClick={() => setOpenPath(null)}
            className="flex items-center gap-2 group"
          >
            <span className="grid place-items-center w-9 h-9 rounded-full bg-molten text-ink font-black text-sm tracking-tight group-hover:rotate-6 transition-transform duration-300">
              {company.monogram}
            </span>
            <span className="block">
              <span className="block font-display font-bold text-sm sm:text-base leading-none tracking-tight">
                {company.shortName}
              </span>
              <span className="block font-mono text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-steel mt-1">
                Steel · Metals
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive(l.href) ? "text-bone bg-white/8" : "text-steel hover:text-bone hover:bg-white/5"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-molten text-ink font-bold text-sm px-5 py-2.5 transition-all duration-300 hover:bg-ember hover:shadow-[0_0_30px_rgba(255,90,31,0.35)]"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setOpenPath(open ? null : pathname)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="md:hidden grid place-items-center w-10 h-10 rounded-full border border-line-strong text-bone"
            >
              <span className="relative block w-4">
                <span
                  className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-300 ${
                    open ? "translate-y-0 rotate-45" : "-translate-y-[4px]"
                  }`}
                />
                <span
                  className={`absolute left-0 top-0 h-px w-4 bg-current transition-opacity duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-300 ${
                    open ? "translate-y-0 -rotate-45" : "translate-y-[4px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink/95 backdrop-blur-2xl flex flex-col justify-center px-8 transition-all duration-500 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col gap-2">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpenPath(null)}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={`font-display font-black uppercase tracking-tight text-[clamp(2.5rem,10vw,4rem)] leading-none py-2 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              } ${isActive(l.href) ? "molten-text" : "text-bone hover:text-molten"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div
          className={`mt-12 font-mono text-xs tracking-[0.3em] uppercase text-steel transition-all duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          {company.contact.address || "Delhi, India"}
        </div>
      </div>
    </>
  );
}

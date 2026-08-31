import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SplitText from "@/components/reactbits/SplitText";
import Aurora from "@/components/reactbits/Aurora";
import SectionLabel from "@/components/ui/SectionLabel";
import ProductAccordion from "@/components/products/ProductAccordion";
import HScroll from "@/components/products/HScroll";
import { PrimaryButton, GhostButton } from "@/components/ui/Buttons";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Products — Delhi Metal Corporation | Aluminium & Copper in Delhi",
  description:
    "Aluminium bus bars, copper bus bars, flat bars, strips, rods, sheets and GI strips — wholesale supply in New Delhi. HSN 7604, 7606, 7409, 7210.",
};

export default function ProductsPage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Nav />

      {/* Page hero */}
      <section className="relative pt-36 sm:pt-48 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-hairlines opacity-60" aria-hidden="true" />
        <div
          className="absolute -top-32 right-0 w-[46vw] h-[46vh] rounded-full blur-[150px] opacity-20 bg-molten"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
          <SectionLabel index="CAT" label="Product catalogue" className="mb-6" />
          <SplitText
            tag="h1"
            text="Aluminium & copper, cut to your bill of material"
            splitType="words"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            delay={45}
            className="!text-left font-display font-black uppercase tracking-tight text-[clamp(2.2rem,6vw,5.25rem)] leading-[0.95] max-w-5xl"
            textAlign="left"
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-7 text-steel text-lg leading-relaxed max-w-2xl">
              {company.products.length} stocked ranges across bus bars, flat bars, strips, rods and
              sheets — wholesale and cut-to-size, from {company.shortName}&apos;s New Delhi yard.
              All material GST-verified, mill-direct and delivered on the date promised.
            </p>
            <div className="md:col-span-5 flex flex-col sm:flex-row md:justify-end gap-3">
              <PrimaryButton href="/#contact">Request a quote</PrimaryButton>
              <GhostButton href="/#contact">Talk to us</GhostButton>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal accordion catalogue */}
      <section className="relative py-16 sm:py-22">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <ProductAccordion />
        </div>
      </section>

      {/* Horizontal scroll gallery */}
      <section className="relative py-16 sm:py-22">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-10 flex items-end justify-between">
          <h2 className="font-display font-black uppercase tracking-tight leading-[0.95] text-[clamp(1.8rem,4vw,3.2rem)]">
            The yard at a <span className="molten-text">glance</span>
          </h2>
          <span className="hidden sm:block font-mono text-[10px] uppercase tracking-[0.3em] text-steel-dim">
            Keep scrolling →
          </span>
        </div>
        <HScroll />
      </section>

      {/* CTA band */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30 mix-blend-screen">
          <Aurora colorStops={["#2E1A10", "#FF5A1F", "#101014"]} amplitude={0.7} blend={0.6} speed={0.6} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-black uppercase tracking-tight leading-[0.95] text-[clamp(2.2rem,6vw,5rem)]">
            Need a size we <span className="molten-text">haven&apos;t listed?</span>
          </h2>
          <p className="mt-6 text-steel text-lg max-w-xl mx-auto leading-relaxed">
            Cut-to-size, custom lengths and mixed-load orders are our bread and butter. Send the
            drawing, we&apos;ll price it.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <PrimaryButton href="/#contact">Send your requirement</PrimaryButton>
            <GhostButton href="/#contact">Call the yard</GhostButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

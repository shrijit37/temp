import SectionLabel from "@/components/ui/SectionLabel";

const POINTS = [
  ["Mill-direct rates", "Wholesale pricing sourced straight from approved mills and suppliers."],
  ["Every quantity", "One bus bar or a truckload — the same rate card and the same care."],
  ["GST verified", "Clean, registered supply with tax-compliant invoicing on every order."],
  ["Cut to size", "Shearing, slitting and cut-to-length so material arrives work-ready."],
  ["On-time dispatch", "Deliveries planned around your schedule, not ours."],
  ["Honest material", "Grades and specs stated plainly — what you order is what arrives."],
];

export default function WhyDmc() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionLabel index="05" label="Why DMC" className="mb-8" />
            <h2 className="font-display font-black uppercase tracking-tight leading-[0.95] text-[clamp(2rem,4.6vw,3.9rem)]">
              The quiet supplier behind <span className="molten-text">busy</span> factories
            </h2>
            <p className="mt-6 text-steel leading-relaxed max-w-md">
              Panel builders and fabricators don&apos;t have time to chase material. They order from the
              house that answers on the first ring, delivers on the date, and never swaps the grade.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line rounded-3xl overflow-hidden">
            {POINTS.map(([title, desc]) => (
              <div key={title} className="bg-coal p-7 sm:p-9 transition-colors duration-500 hover:bg-panel">
                <div className="h-1 w-8 bg-molten rounded-full" />
                <h3 className="mt-5 font-display font-bold text-lg tracking-tight">{title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

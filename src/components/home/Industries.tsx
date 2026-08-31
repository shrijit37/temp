import SectionLabel from "@/components/ui/SectionLabel";

const INDUSTRIES = [
  ["Switchgear & Panels", "LT / HT panels, busbar trunking, control panels"],
  ["Transformers", "Strips, plates & connections for transformer works"],
  ["Bus-body & Fabrication", "Angles, flats, chequered sheets for body building"],
  ["Infrastructure & Erection", "Earthing, distribution, structural supply"],
  ["Electrical OEMs", "Conductor-grade bus bars on repeat schedule"],
  ["Retail & Traders", "Small lots, cut-to-size, same-week dispatch"],
];

export default function Industries() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <SectionLabel index="03" label="Who we serve" className="mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-line">
          {INDUSTRIES.map(([title, desc], i) => (
            <div
              key={title}
              className="group border-r border-b border-line p-8 sm:p-10 transition-colors duration-500 hover:bg-coal/70"
            >
              <span className="font-mono text-[11px] text-steel-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display font-bold text-lg sm:text-xl tracking-tight group-hover:text-bone transition-colors duration-300">
                {title}
              </h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Single source of truth for all site content.
// Researched from IndiaMART (delhi-metal-corporation), TradeIndia,
// GSTIN records and other public listings — 2026-08-11.
// Contact fields marked PENDING are waiting on the final
// research digest (phone / email / address).
// ─────────────────────────────────────────────────────────────

export interface Product {
  slug: string;
  name: string;
  category: string;
  hsns: string;
  tagline: string;
  specs: string[];
  applications: string;
  image: string;
}

export interface CompanyData {
  name: string;
  shortName: string;
  monogram: string;
  tagline: string;
  intro: string;
  about: string;
  stats: { value: string; label: string }[];
  materials: string[];
  products: Product[];
  process: { title: string; desc: string }[];
  contact: {
    phone: string;
    phone2?: string;
    email: string;
    address: string;
    hours: string;
    gstin: string;
    contactPerson: string;
  };
}

export const company: CompanyData = {
  name: "Delhi Metal Corporation",
  shortName: "DMC",
  monogram: "DM",
  tagline: "The conductor behind India's power",
  intro:
    "Delhi Metal Corporation is a New Delhi based wholesale distributor of aluminium and copper — the go-to house for Hindalco-make electrical grade bus bars, strips, sheets, angles and sections, supplying panel builders, switchgear manufacturers, transformer works and fabricators across Delhi NCR.",
  about:
    "A GST-compliant partnership firm since 2020, Delhi Metal Corporation has quietly become the distributor panel builders call first — the house behind Hindalco-make electrical grade aluminium bus bars, precision copper bus bars, strips, chequered sheets, angles and sections. Every order is sourced from approved mills, checked on arrival against your specification, and delivered on the date promised. Quote-based wholesale pricing, honest material, and the ability to move small lots and full truckloads alike have made DMC the quiet supplier behind Delhi's switchboards and power infrastructure.",
  stats: [
    { value: "7+", label: "Years in trade" },
    { value: "20+", label: "Aluminium & copper products" },
    { value: "5", label: "HSN categories stocked" },
    { value: "100%", label: "GST verified supplier" },
  ],
  materials: [
    "HINDALCO BUS BARS",
    "ELECTRICAL GRADE",
    "COPPER BUS BARS",
    "ALUMINIUM STRIPS",
    "CHEQUERED SHEETS",
    "ALUMINIUM ANGLES",
    "FLAT BARS",
    "ALUMINIUM COILS",
    "COPPER PLATES",
    "JINDAL SECTIONS",
  ],
  products: [
    {
      slug: "aluminium-bus-bar",
      name: "Aluminium Bus Bar",
      category: "Aluminium",
      hsns: "HSN 7604",
      tagline: "The backbone of switchboards and distribution panels",
      specs: ["Industrial & electrical grade", "Rectangular bars, custom lengths", "HSN 7604 — bars, rods & profiles", "Cut-to-size and machined options"],
      applications: "Busbar trunking, switchgear, distribution panels, transformer terminals, earthing systems",
      image: "/images/prod-alu-busbar.jpg",
    },
    {
      slug: "copper-bus-bar",
      name: "Copper Bus Bar",
      category: "Copper",
      hsns: "HSN 7409",
      tagline: "High-conductivity copper for heavy-current duty",
      specs: ["High electrical conductivity", "Plates, strips & custom profiles", "HSN 7409 — plates, sheets & strip", "Drilled, bent or silver-plated on request"],
      applications: "Switchgear, LT & HT panels, power transformers, earthing and neutral links",
      image: "/images/prod-copper-busbar.jpg",
    },
    {
      slug: "aluminium-strip",
      name: "Aluminium Strip",
      category: "Aluminium",
      hsns: "HSN 7606",
      tagline: "Precision-rolled strips in every width",
      specs: ["Slit to width from coil", "HSN 7606 — plates, sheets & strip", "Multiple temper options", "Bare and insulated variants"],
      applications: "Transformer windings, cable armouring, heat exchangers, gaskets and fin stock",
      image: "/images/prod-alu-strip.jpg",
    },
    {
      slug: "aluminium-chequered-sheet",
      name: "Aluminium Chequered Sheet",
      category: "Aluminium",
      hsns: "HSN 7606",
      tagline: "Skid-proof chequer plate for floors and platforms",
      specs: ["Diamond & 5-bar chequer patterns", "HSN 7606", "Lightweight, corrosion resistant", "Cut to size available"],
      applications: "Industrial flooring, truck body flooring, ramps, platforms and architectural cladding",
      image: "/images/prod-chequered.jpg",
    },
    {
      slug: "aluminium-angle",
      name: "Aluminium Angle & Section",
      category: "Aluminium",
      hsns: "HSN 7604",
      tagline: "Structural sections, Jindal origin",
      specs: ["Equal & unequal angles", "Jindal aluminium sections", "HSN 7604", "Multiple sizes in stock"],
      applications: "Fabrication, framework, architectural work, bus-body building and shelving systems",
      image: "/images/prod-alu-angle.jpg",
    },
    {
      slug: "aluminium-flat-bar",
      name: "Aluminium Flat Bar",
      category: "Aluminium",
      hsns: "HSN 7604",
      tagline: "Clean, sharp-edged flat bars",
      specs: ["HSN 7604", "Wide size range", "Mill-finish and polished", "Cut-to-length service"],
      applications: "Earthing, busbar risers, structural supports, nameplates and mechanical parts",
      image: "/images/prod-alu-flat.jpg",
    },
    {
      slug: "aluminium-sheet-coil",
      name: "Aluminium Sheet & Coil",
      category: "Aluminium",
      hsns: "HSN 7606",
      tagline: "Sheets, plates and coils in one place",
      specs: ["Plain, chequered & embossed", "HSN 7606", "Bare and coated", "Gauge from 0.2 mm up"],
      applications: "Cladding, roofing, tanks, signage, kitchen equipment and general fabrication",
      image: "/images/prod-sheet-coil.jpg",
    },
    {
      slug: "copper-plate",
      name: "Copper Plate & Strip",
      category: "Copper",
      hsns: "HSN 7409",
      tagline: "Certified copper for critical connections",
      specs: ["HSN 7409", "Plates, sheets & strip > 0.15 mm", "High purity & conductivity", "Custom sizes on order"],
      applications: "Busbar systems, switchgear, earthing, plating anodes and transformer connections",
      image: "/images/prod-copper-plate.jpg",
    },
  ],
  process: [
    {
      title: "Enquire",
      desc: "Tell us the material, grade, sizes and quantity — over the phone, WhatsApp or the form on this page.",
    },
    {
      title: "Quote",
      desc: "You get a transparent, mill-direct rate within hours — no hidden charges, no surprises.",
    },
    {
      title: "Source & Check",
      desc: "Material is sourced from approved mills and checked on arrival against your specification.",
    },
    {
      title: "Deliver",
      desc: "Dispatched on the agreed date — across Delhi NCR and beyond, small lots to full truckloads.",
    },
  ],
  contact: {
    phone: "+91 96548 19310",
    phone2: "+91 92170 02598",
    email: "sales@delhimetalcorporation.com",
    address: "2574/10, Ground Floor, Gali No. 10 (Chitragupta Road), Chuna Mandi, Paharganj, New Delhi – 110055",
    hours: "Mon – Sat · 10:00 – 20:00 · Sun closed",
    gstin: "07AAQFD8445E1Z6",
    contactPerson: "A. Kaushik",
  },
};


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
    "FLAT BARS",
    "ALUMINIUM RODS",
    "COPPER RODS",
    "COPPER FLAT BARS",
    "GI STRIPS",
    "ETP GRADE",
    "HINDALCO MAKE",
    "DEALER IN DELHI",
    "BENDING GUARANTEE",
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
      slug: "aluminium-rods",
      name: "Aluminium Rods",
      category: "Aluminium",
      hsns: "HSN 7604",
      tagline: "Round and hex rods for machining and fabrication",
      specs: ["Round, hex & square profiles", "HSN 7604 — bars, rods & profiles", "Multiple diameters in stock", "Alloy 6061 / 6063 options"],
      applications: "CNC machining, fasteners, architectural fittings, electrical connectors and general fabrication",
      image: "/images/prod-alu-flat.jpg",
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
      slug: "copper-rods",
      name: "Copper Rods",
      category: "Copper",
      hsns: "HSN 7409",
      tagline: "High-conductivity copper rod for electrical and engineering use",
      specs: ["Round & hex rod profiles", "ETP grade copper", "High conductivity", "Cut-to-length available"],
      applications: "Earthing electrodes, electrical connectors, CNC machining, busbar joints and plumbing fittings",
      image: "/images/prod-copper-plate.jpg",
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
      slug: "copper-flat-bar",
      name: "Copper Flat Bar",
      category: "Copper",
      hsns: "HSN 7409",
      tagline: "Precision copper flats for heavy-current connections",
      specs: ["ETP grade copper", "HSN 7409", "Wide width range", "Cut-to-length service"],
      applications: "Busbar connections, switchgear, earthing, transformer links and panel manufacturing",
      image: "/images/prod-copper-busbar.jpg",
    },
    {
      slug: "gi-strip",
      name: "GI Strip",
      category: "Steel",
      hsns: "HSN 7210",
      tagline: "Galvanised iron strips for binding and fabrication",
      specs: ["Hot-dip galvanised coating", "HSN 7210 — coated flat products", "Multiple widths & thicknesses", "Corrosion resistant finish"],
      applications: "Construction binding, packaging, ceiling channels, cable trays and general fabrication",
      image: "/images/prod-alu-strip.jpg",
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

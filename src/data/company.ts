// ─────────────────────────────────────────────────────────────
// Single source of truth for all site content.
// Researched from IndiaMART (delhi-metal-corporation), TradeIndia,
// GSTIN records and other public listings.
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
    "Delhi Metal Corporation is a New Delhi based wholesale distributor of aluminium and copper — the go-to house for Hindalco-make electrical grade bus bars, flat bars, strips, rods and sheets, supplying switchgear manufacturers, transformer works and fabricators across Delhi NCR.",
  about:
    "A GST-compliant partnership firm in trade for 7+ years, Delhi Metal Corporation has quietly become the distributor panel builders call first — the house behind Hindalco-make electrical grade aluminium bus bars, precision copper bus bars, flat bars, strips and sheets. Every order is sourced from registered mills, checked on arrival against your specification, and delivered on the date promised. Quote-based wholesale pricing, honest material, and the ability to move small lots and full truckloads alike have made DMC the trusted supplier behind Delhi's switchboards and power infrastructure.",
  stats: [
    { value: "7+", label: "Years in trade" },
    { value: "Hindalco & ETP", label: "grade material" },
    { value: "5", label: "HSN categories stocked" },
    { value: "100%", label: "GSTIN-registered supply" },
  ],
  materials: [
    "HINDALCO BUS BARS",
    "ELECTRICAL GRADE",
    "COPPER BUS BARS",
    "ALUMINIUM STRIPS",
    "ALUMINIUM FLAT BARS",
    "ALUMINIUM RODS",
    "ALUMINIUM SHEETS",
    "COPPER STRIPS",
    "COPPER RODS",
    "COPPER FLAT BARS",
    "COPPER SHEETS",
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
      tagline: "Hindalco-make electrical grade bus bars with bending guarantee",
      specs: ["Hindalco make / electrical grade", "Rectangular bus bars, custom lengths", "HSN 7604 — bars & rods", "Bending guarantee & cut-to-size"],
      applications: "Busbar trunking, switchgear, distribution panels, transformer terminals, earthing systems",
      image: "/images/prod-alu-busbar.jpg",
    },
    {
      slug: "copper-bus-bar",
      name: "Copper Bus Bar",
      category: "Copper",
      hsns: "HSN 7409",
      tagline: "High-conductivity ETP grade copper for heavy-current duty",
      specs: ["ETP grade high conductivity", "Rectangular bus bars & strips", "HSN 7409 — plates, sheets & strip", "Drilled & bent on request"],
      applications: "Switchgear, LT & HT panels, power transformers, earthing and neutral links",
      image: "/images/prod-copper-busbar.jpg",
    },
    {
      slug: "aluminium-flat-bar",
      name: "Aluminium Flat Bar",
      category: "Aluminium",
      hsns: "HSN 7604",
      tagline: "Clean, sharp-edged electrical & commercial flat bars",
      specs: ["Electrical & commercial grade", "Wide size range in stock", "HSN 7604 — flat bars & profiles", "Cut-to-length service available"],
      applications: "Earthing, busbar risers, structural supports, panel links and fabrication",
      image: "/images/prod-alu-flat.jpg",
    },
    {
      slug: "copper-strip",
      name: "Copper Strip",
      category: "Copper",
      hsns: "HSN 7409",
      tagline: "High-conductivity copper strips for electrical & earthing use",
      specs: ["Slit strips & coils", "ETP grade copper", "High conductivity", "Precision slit edges"],
      applications: "Earthing electrodes, electrical connectors, switchboard links and transformer windings",
      image: "/images/prod-copper-plate.jpg",
    },
    {
      slug: "aluminium-strip",
      name: "Aluminium Strip",
      category: "Aluminium",
      hsns: "HSN 7606",
      tagline: "Precision-rolled aluminium strips in every width",
      specs: ["Slit to required width", "HSN 7606 — plates, sheets & strip", "Multiple temper options", "Bare and insulated variants"],
      applications: "Transformer windings, cable armouring, heat exchangers, gaskets and fin stock",
      image: "/images/prod-alu-strip.jpg",
    },
    {
      slug: "copper-flat-bar",
      name: "Copper Flat Bar",
      category: "Copper",
      hsns: "HSN 7409",
      tagline: "Precision copper flats for heavy-current connections",
      specs: ["ETP grade copper", "HSN 7409 — flat bars & strip", "Wide width & thickness range", "Cut-to-length service"],
      applications: "Busbar connections, switchgear, earthing, transformer links and panel manufacturing",
      image: "/images/prod-copper-busbar.jpg",
    },
    {
      slug: "aluminium-rods",
      name: "Aluminium Rods",
      category: "Aluminium",
      hsns: "HSN 7604",
      tagline: "Round and hex rods for electrical and engineering fabrication",
      specs: ["Round, hex & square profiles", "HSN 7604 — bars & rods", "Multiple diameters in stock", "High machinability"],
      applications: "CNC machining, fasteners, architectural fittings, electrical connectors and fabrication",
      image: "/images/prod-alu-rod.jpg",
    },
    {
      slug: "copper-rods",
      name: "Copper Rods",
      category: "Copper",
      hsns: "HSN 7409",
      tagline: "Solid copper round rods for electrical and grounding works",
      specs: ["Round rod profiles", "ETP grade copper", "High thermal & electrical conductivity", "Cut-to-length available"],
      applications: "Earthing electrodes, lightning protection, electrical machining and connectors",
      image: "/images/prod-copper-plate.jpg",
    },
    {
      slug: "aluminium-sheets",
      name: "Aluminium Sheets",
      category: "Aluminium",
      hsns: "HSN 7606",
      tagline: "Commercial and industrial grade aluminium sheets",
      specs: ["Standard & cut-to-size sheets", "HSN 7606 — plates, sheets & strip", "Uniform gauge & surface finish", "Clean sheared edges"],
      applications: "Panel enclosures, body building, roofing, transformer tanks and fabrication",
      image: "/images/prod-sheet-coil.jpg",
    },
    {
      slug: "copper-sheets",
      name: "Copper Sheets",
      category: "Copper",
      hsns: "HSN 7409",
      tagline: "Pure ETP grade copper sheets and plates",
      specs: ["ETP grade copper", "HSN 7409 — plates, sheets & strip", "Uniform gauge thickness", "High corrosion resistance"],
      applications: "Electrical shielding, transformer plates, switchboard lining and earthing mats",
      image: "/images/prod-copper-plate.jpg",
    },
    {
      slug: "gi-strip",
      name: "GI Strip",
      category: "Steel",
      hsns: "HSN 7210",
      tagline: "Galvanised iron strips for binding, earthing and fabrication",
      specs: ["Hot-dip galvanised coating", "HSN 7210 — coated flat products", "Multiple widths & thicknesses", "Corrosion resistant finish"],
      applications: "Earthing strips, construction binding, packaging, cable trays and fabrication",
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
      desc: "Material is sourced from registered mills and checked on arrival against your specification.",
    },
    {
      title: "Deliver",
      desc: "Dispatched on the agreed date — across Delhi NCR and beyond, small lots to full truckloads.",
    },
  ],
  contact: {
    phone: "+91 97117 07511",
    phone2: "+91 99992 39072",
    email: "sales@delhimetalcorporation.com",
    address: "2574/10, Ground Floor, Gali No. 10 (Chitragupta Road), Chuna Mandi, Paharganj, New Delhi – 110055",
    hours: "Mon – Sat · 10:00 – 20:00 · Sun closed",
    gstin: "07AAQFD8445E1Z6",
    contactPerson: "KL Sharma & Aditya Kaushik",
  },
};

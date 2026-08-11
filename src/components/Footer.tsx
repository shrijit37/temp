import Link from "next/link";
import { company } from "@/data/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-coal">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-molten text-ink font-black text-base">
                {company.monogram}
              </span>
              <div>
                <div className="font-display font-bold text-lg tracking-tight">{company.name}</div>
                <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-steel">
                  Steel · Metals · Since {company.stats[0]?.value !== "TODO" ? company.stats[0].value : "the beginning"}
                </div>
              </div>
            </div>
            <p className="mt-6 text-steel text-sm leading-relaxed max-w-sm">{company.tagline}</p>
          </div>

          {/* Products */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-steel-dim mb-6">Products</h3>
            <ul className="space-y-3">
              {company.products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href="/products"
                    className="text-sm text-steel hover:text-bone transition-colors duration-300"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-steel-dim mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-steel hover:text-bone transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-steel hover:text-bone transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-steel hover:text-bone transition-colors duration-300">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.3em] text-steel-dim mb-6">Reach us</h3>
            <ul className="space-y-3 text-sm text-steel">
              <li>
                <a href={`tel:${company.contact.phone}`} className="hover:text-bone transition-colors duration-300">
                  {company.contact.phone}
                </a>
              </li>
              {company.contact.phone2 && (
                <li>
                  <a href={`tel:${company.contact.phone2}`} className="hover:text-bone transition-colors duration-300">
                    {company.contact.phone2}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="hover:text-bone transition-colors duration-300 break-all"
                >
                  {company.contact.email}
                </a>
              </li>
              <li className="leading-relaxed">{company.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[11px] tracking-wider text-steel-dim">
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] tracking-wider text-steel-dim">
            {company.contact.gstin !== "TODO" ? `GSTIN ${company.contact.gstin}` : "GST registered"}
            <span className="mx-2 text-steel-dim">·</span>Made in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}

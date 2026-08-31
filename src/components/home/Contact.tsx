"use client";

import { useState } from "react";
import Aurora from "@/components/reactbits/Aurora";
import SectionLabel from "@/components/ui/SectionLabel";
import { company } from "@/data/company";

const MATERIALS = [
  "Aluminium Bus Bar",
  "Copper Bus Bar",
  "Aluminium Flat Bar",
  "Copper Flat Bar",
  "Aluminium Strip",
  "Copper Strip",
  "Aluminium Rods",
  "Copper Rods",
  "Aluminium Sheets",
  "Copper Sheets",
  "GI Strip",
  "Other / not sure yet",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", material: MATERIALS[0], qty: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
    // Clear error when user starts typing
    if (errors[k]) {
      setErrors({ ...errors, [k]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[\d\s-]{10,}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Quantity validation
    if (!form.qty.trim()) {
      newErrors.qty = "Quantity is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Material: ${form.material}`,
      `Quantity: ${form.qty}`,
      form.message && `Details: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    // WhatsApp is the fast channel for wholesale enquiries
    const wa = (company.contact.phone2 || company.contact.phone).replace(/\D/g, "");
    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(body)}`, "_blank");

    setIsSubmitting(false);
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Aurora backdrop */}
      <div className="absolute inset-0 opacity-[0.35] mix-blend-screen">
        <Aurora colorStops={["#7A2E10", "#FF5A1F", "#3A2A20"]} amplitude={0.8} blend={0.55} speed={0.7} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-14 sm:mb-20">
          <SectionLabel index="06" label="Get a quote" className="mb-6 justify-center" />
          <h2 className="font-display font-black uppercase tracking-tight leading-[0.95] text-[clamp(2.2rem,6vw,5.5rem)] max-w-4xl mx-auto">
            Tell us what you&apos;re <span className="molten-text">building</span>
          </h2>
          <p className="mt-6 text-steel max-w-xl mx-auto leading-relaxed">
            Send the material, grade, sizes and quantity — a member of the team replies with a
            transparent mill-direct quote, usually within hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-7 border border-line-strong rounded-3xl bg-ink/70 backdrop-blur-xl p-7 sm:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <label className="block" htmlFor="name">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel-dim">Your name</span>
                <input
                  id="name"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="e.g. Rajesh Kumar"
                  className={`mt-2 w-full bg-coal border rounded-xl px-4 py-3.5 text-base sm:text-sm text-bone placeholder:text-steel-dim focus:outline-none transition-colors duration-300 ${
                    errors.name ? "border-error focus:border-error" : "border-line focus:border-molten"
                  }`}
                />
                {errors.name && <p className="mt-1.5 text-xs text-error-light">{errors.name}</p>}\
              </label>
              <label className="block" htmlFor="phone">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel-dim">Phone / WhatsApp</span>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+91 ..."
                  className={`mt-2 w-full bg-coal border rounded-xl px-4 py-3.5 text-base sm:text-sm text-bone placeholder:text-steel-dim focus:outline-none transition-colors duration-300 ${
                    errors.phone ? "border-error focus:border-error" : "border-line focus:border-molten"
                  }`}
                />
                {errors.phone && <p className="mt-1.5 text-xs text-error-light">{errors.phone}</p>}
              </label>
              <label className="block" htmlFor="material">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel-dim">Material</span>
                <select
                  id="material"
                  value={form.material}
                  onChange={set("material")}
                  className="mt-2 w-full bg-coal border border-line rounded-xl px-4 py-3.5 text-base sm:text-sm text-bone focus:outline-none focus:border-molten transition-colors duration-300"
                >
                  {MATERIALS.map((m) => (
                    <option key={m} value={m} className="bg-coal">
                      {m}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block" htmlFor="quantity">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel-dim">Quantity / size</span>
                <input
                  id="quantity"
                  value={form.qty}
                  onChange={set("qty")}
                  placeholder="e.g. 100 kg, 6 m lengths"
                  className={`mt-2 w-full bg-coal border rounded-xl px-4 py-3.5 text-base sm:text-sm text-bone placeholder:text-steel-dim focus:outline-none transition-colors duration-300 ${
                    errors.qty ? "border-error focus:border-error" : "border-line focus:border-molten"
                  }`}
                />
                {errors.qty && <p className="mt-1.5 text-xs text-error-light">{errors.qty}</p>}
              </label>
            </div>
            <label className="block mt-5" htmlFor="message">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel-dim">Anything else</span>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={set("message")}
                placeholder="Grade, finish, delivery deadline…"
                className="mt-2 w-full bg-coal border border-line rounded-xl px-4 py-3.5 text-base sm:text-sm text-bone placeholder:text-steel-dim focus:outline-none focus:border-molten transition-colors duration-300 resize-none"
              />
            </label>
            <button
              type="submit"
              disabled={isSubmitting || sent}
              className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-molten text-ink font-bold text-base px-10 py-4 transition-all duration-300 hover:bg-ember hover:shadow-[0_0_44px_rgba(255,90,31,0.4)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-molten disabled:hover:shadow-none cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-ink" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : sent ? (
                "Enquiry sent — we'll call you back"
              ) : (
                <>
                  Request a quote
                  <span className="text-xl">→</span>
                </>
              )}
            </button>
          </form>

          {/* Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border border-line rounded-3xl bg-coal/70 backdrop-blur-xl p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel-dim mb-6">Reach us directly</div>
              <ul className="space-y-5 text-sm">
                <li className="flex items-center gap-4">
                  <span className="grid place-items-center w-10 h-10 rounded-full border border-line-strong font-mono text-[10px] text-molten">
                    TEL
                  </span>
                  <a href={`tel:${company.contact.phone}`} className="text-bone hover:text-molten transition-colors duration-300">
                    {company.contact.phone}
                  </a>
                </li>
                {company.contact.phone2 && (
                  <li className="flex items-center gap-4">
                    <span className="grid place-items-center w-10 h-10 rounded-full border border-line-strong font-mono text-[10px] text-molten">
                      WA
                    </span>
                    <a
                      href={`https://wa.me/${company.contact.phone2.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bone hover:text-molten transition-colors duration-300"
                    >
                      {company.contact.phone2} · WhatsApp
                    </a>
                  </li>
                )}
                <li className="flex items-center gap-4">
                  <span className="grid place-items-center w-10 h-10 rounded-full border border-line-strong font-mono text-[10px] text-molten">
                    MAIL
                  </span>
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="text-bone hover:text-molten transition-colors duration-300 break-all"
                  >
                    {company.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid place-items-center w-10 h-10 rounded-full border border-line-strong font-mono text-[10px] text-molten shrink-0">
                    PIN
                  </span>
                  <span className="text-steel leading-relaxed">
                    {company.contact.address}
                    <br />
                    <span className="text-steel-dim">{company.contact.hours}</span>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid place-items-center w-10 h-10 rounded-full border border-line-strong font-mono text-[10px] text-molten">
                    GST
                  </span>
                  <span className="font-mono text-xs tracking-wider text-steel">
                    {company.contact.gstin} · verified
                  </span>
                </li>
              </ul>
            </div>

            <div className="border border-line rounded-3xl bg-coal/70 backdrop-blur-xl p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel-dim mb-3">Talk to</div>
              <div className="font-display font-bold text-xl">{company.contact.contactPerson}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel mt-1">
                Wholesale enquiries · Delhi Metal Corporation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/site/Layout";
import { PHONE, PHONE_TEL, ADDRESS, MAPS_URL } from "../components/site/data";
import { Phone, MapPin, Clock, Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote — Jason Levy Agency Novi MI" },
      { name: "description", content: "Request a free no-obligation insurance quote from Novi's 5-star agent. Response within 24 hours. Call (248) 519-7787." },
    ],
  }),
  component: Contact,
});

const INSURANCE_TYPES = [
  "Home Insurance",
  "Auto Insurance",
  "Business Insurance",
  "Life Insurance",
  "Specialty Insurance",
  "Flood Insurance",
  "Multiple / Bundle",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(20),
  type: z.string().min(1, "Select an insurance type"),
  provider: z.string().max(120).optional(),
  message: z.string().max(1000).optional(),
});

function formatPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", provider: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k: string, v: string) => {
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(e => ({ ...e, [k]: "" }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach(i => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <PageHero title="Get Your Free Quote" subtitle="No obligation. No pressure. Just honest insurance advice." />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-5 gap-8">
          {/* FORM */}
          <div className="lg:col-span-3 card-jl">
            {submitted ? (
              <div className="text-center py-14">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#10B981]/15 flex items-center justify-center">
                  <Check size={32} className="text-[#10B981]" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-[#1B2B4B]">Thank you!</h3>
                <p className="mt-2 text-[#6B7280]">Jason will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <h3 className="text-2xl font-bold text-[#1B2B4B]">Request Your Free Quote</h3>
                <Field label="Full Name" required error={errors.name}>
                  <input value={form.name} onChange={e => update("name", e.target.value)} className={input(!!errors.name)} placeholder="Jane Smith" />
                </Field>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Email Address" required error={errors.email}>
                    <input type="email" value={form.email} onChange={e => update("email", e.target.value)} className={input(!!errors.email)} placeholder="you@example.com" />
                  </Field>
                  <Field label="Phone Number" required error={errors.phone}>
                    <input value={form.phone} onChange={e => update("phone", formatPhone(e.target.value))} className={input(!!errors.phone)} placeholder="(248) 555-1234" />
                  </Field>
                </div>
                <Field label="Insurance Type" required error={errors.type}>
                  <select value={form.type} onChange={e => update("type", e.target.value)} className={input(!!errors.type)}>
                    <option value="">Select coverage type…</option>
                    {INSURANCE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Current Insurance Provider">
                  <input value={form.provider} onChange={e => update("provider", e.target.value)} className={input(false)} placeholder="Optional" />
                </Field>
                <Field label="Message / Additional Details">
                  <textarea rows={4} value={form.message} onChange={e => update("message", e.target.value)} className={input(false)} placeholder="Tell Jason about your coverage needs…" />
                </Field>
                <button type="submit" className="btn-gold w-full justify-center !py-4 text-base">
                  GET MY FREE QUOTE <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>

          {/* INFO */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl p-8 text-white" style={{ background: "linear-gradient(160deg,#1B2B4B,#2E4A7A)", border: "2px solid #F59E0B" }}>
              <p className="text-xs uppercase tracking-widest text-[#FCD34D] font-bold">Call Direct</p>
              <a href={`tel:${PHONE_TEL}`} className="mt-2 block font-num font-extrabold text-3xl text-[#FCD34D] hover:text-white">
                {PHONE}
              </a>
              <div className="mt-6 space-y-3 text-sm">
                <Row Icon={MapPin}>{ADDRESS}</Row>
                <Row Icon={Clock}>Mon–Fri: 8:30 AM – 5:00 PM</Row>
                <Row Icon={Clock}>Sat: By Appointment</Row>
                <Row Icon={Clock}>Sun: Closed</Row>
              </div>
            </div>

            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="block rounded-2xl p-6 text-white hover:brightness-110 transition" style={{ background: "linear-gradient(160deg,#2E4A7A,#1B2B4B)", border: "1px solid #F59E0B/40" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F59E0B] flex items-center justify-center shrink-0">
                  <MapPin className="text-[#1B2B4B]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Visit the Office</h4>
                  <p className="text-sm text-white/80 mt-1">{ADDRESS}</p>
                  <p className="mt-3 text-[#FCD34D] font-semibold inline-flex items-center gap-1">
                    Get Directions <ArrowRight size={14} />
                  </p>
                </div>
              </div>
            </a>

            <div className="space-y-2">
              {["Free no-obligation quotes", "Response within 24 hours", "5-star rated local agent"].map(t => (
                <div key={t} className="flex items-center gap-3 p-3 rounded-lg bg-[#F8FAFF] border border-[#10B981]/30">
                  <Check size={18} className="text-[#10B981] shrink-0" />
                  <span className="font-semibold text-[#1B2B4B] text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function input(error: boolean) {
  return `w-full rounded-lg px-4 py-3 bg-white border ${error ? "border-red-500" : "border-[#E5E7EB]"} text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-[#3B82F6] transition`;
}

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#1B2B4B]">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </label>
  );
}

function Row({ Icon, children }: { Icon: any; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="text-[#F59E0B] shrink-0 mt-0.5" size={18} />
      <span>{children}</span>
    </div>
  );
}

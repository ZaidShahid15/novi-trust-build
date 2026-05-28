import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "../components/site/Layout";
import { Hero } from "../components/site/Hero";

import { Stars } from "../components/site/Stars";
import { CountUp } from "../components/site/CountUp";
import { CARRIERS, SERVICES, REVIEWS, PHONE, PHONE_TEL } from "../components/site/data";
import { Phone, Quote, User, Search, MapPin, ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jason Levy Agency — Novi MI's 5-Star Insurance Agent" },
      { name: "description", content: "Protecting Novi families with personalized insurance — Home, Auto, Business, Life, Specialty & Flood. 11 carriers. Free quote: (248) 519-7787." },
    ],
  }),
  component: Home,
});

const FAQS = [
  {
    q: "How do I know which insurance is right for me?",
    a: "Jason reviews your specific situation, assets, and budget to recommend the right coverage. No two families are the same and no two policies should be either.",
  },
  {
    q: "Can you beat my current insurance rate?",
    a: "With access to 11 top carriers, Jason shops the entire market to find you the best combination of coverage and price. Most clients save money when they switch.",
  },
  {
    q: "How quickly can I get covered?",
    a: "Most policies can be activated same day or next business day after your quote is approved. Jason makes the process fast and simple.",
  },
  {
    q: "Do you help with claims?",
    a: "Absolutely. Jason guides you through the entire claims process and advocates on your behalf every step of the way.",
  },
];

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SiteLayout>
      {/* HERO */}
      <Hero />


      {/* STATS */}
      <section className="bg-white pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 md:p-8 rounded-2xl bg-[#F8FAFF]"
            style={{ border: "2px solid #F59E0B" }}
          >
            <Stat value={<><CountUp end={5} decimals={1} /> ⭐</>} label="Google Rating" />
            <Stat value={<><CountUp end={60} suffix="+" /></>} label="Five Star Reviews" />
            <Stat value={<><CountUp end={11} /></>} label="Insurance Carriers" />
            <Stat value={<><CountUp end={100} suffix="%" /></>} label="Local Novi Agent" />
          </div>
        </div>
      </section>

      {/* CARRIERS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle eyebrow="Carrier Network" title="Trusted by Michigan's Best Carriers" subtitle="Multiple options to find you the best coverage at the best price" />
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <div
              className="lg:col-span-1 rounded-2xl p-8 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(160deg,#1B2B4B,#2E4A7A)", border: "2px solid #F59E0B" }}
            >
              <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest bg-[#F59E0B] text-[#1B2B4B] font-bold px-2 py-1 rounded">Primary Carrier</span>
              <ShieldCheck className="text-[#F59E0B] mx-auto" size={40} />
              <h3 className="mt-4 text-3xl font-extrabold text-[#FCD34D]">Farm Bureau</h3>
              <p className="mt-2 text-white/80 text-sm">Michigan's trusted carrier — Jason's flagship partner.</p>
            </div>
            <div className="lg:col-span-2 flex flex-wrap content-center gap-2.5">
              {CARRIERS.filter(c => c !== "Farm Bureau").map(c => (
                <span key={c} className="pill-carrier">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle eyebrow="Services" title="Coverage for Every Stage of Life" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="card-jl fade-up overflow-hidden !p-0" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute top-3 left-3 w-11 h-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center text-2xl shadow">{s.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B2B4B]">{s.title}</h3>
                  <p className="mt-2 text-[#6B7280] text-sm leading-relaxed">{s.desc}</p>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-[#F59E0B] font-semibold hover:gap-2 transition-all">
                    Get A Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JASON */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle eyebrow="Why Jason" title="Why Novi Families Choose Jason Levy" />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { Icon: User, title: "Personal Service, Not a Call Center", body: "When you call Jason Levy Agency you talk to Jason. Not a robot, not a call center. A real person who knows your policy and your family." },
              { Icon: Search, title: "Multiple Carriers, One Agent", body: "With access to Farm Bureau, Progressive, Chubb, and 8 other top carriers, Jason shops the market to find you the best coverage at the best price." },
              { Icon: MapPin, title: "Novi Local — Always Available", body: "Based right here at 28550 Cabot Dr in Novi. Walk in, call, or text. Jason is always reachable when you need him most." },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="text-center px-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#F8FAFF] border border-[#F59E0B]/30 flex items-center justify-center">
                  <Icon className="text-[#F59E0B]" size={28} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#1B2B4B]">{title}</h3>
                <p className="mt-3 text-[#6B7280] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SNIPPET */}
      <section className="py-20 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold">Reviews</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#1B2B4B]">What Novi Residents Are Saying</h2>
            <div className="mt-4 inline-flex items-center gap-2">
              <span className="font-num font-bold text-[#1B2B4B] text-xl">5.0</span>
              <Stars />
              <span className="text-[#6B7280] text-sm">· 60 Reviews on Google</span>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/reviews" className="text-[#F59E0B] font-bold hover:text-[#FCD34D] inline-flex items-center gap-1">
              See All 60 Reviews <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle eyebrow="FAQ" title="Common Insurance Questions" subtitle="Quick answers from Novi's trusted advisor" />
          <div className="mt-10 space-y-3">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="rounded-xl border border-[#E5E7EB] overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex justify-between items-center text-left p-5 font-bold text-[#1B2B4B] hover:bg-[#F8FAFF]"
                  >
                    <span>{f.q}</span>
                    <ChevronDown size={20} className={`shrink-0 transition-transform ${open ? "rotate-180 text-[#F59E0B]" : ""}`} />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[#6B7280] leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />
    </SiteLayout>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-[#1B2B4B]">{value}</div>
      <div className="mt-1 text-xs md:text-sm font-semibold text-[#6B7280] uppercase tracking-wider">{label}</div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && <p className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#1B2B4B]">{title}</h2>
      {subtitle && <p className="mt-3 text-[#6B7280]">{subtitle}</p>}
    </div>
  );
}

function ReviewCard({ name, loc, text }: { name: string; loc: string; text: string }) {
  return (
    <div className="card-jl relative">
      <Quote className="absolute top-4 right-4 text-[#1B2B4B]/10" size={48} />
      <Stars />
      <p className="mt-4 text-[#111827] leading-relaxed">"{text}"</p>
      <p className="mt-5 font-bold text-[#1B2B4B]">— {name}, <span className="font-normal text-[#6B7280]">{loc}</span></p>
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-[#1B2B4B] text-white relative" style={{ borderTop: "4px solid #F59E0B" }}>
      <div className="absolute inset-0 bg-grid-blue opacity-20" />
      <div className="max-w-4xl mx-auto px-4 py-20 text-center relative">
        <h2 className="text-3xl md:text-5xl font-extrabold">Ready to Protect What Matters?</h2>
        <p className="mt-4 text-white/75 max-w-xl mx-auto">
          Get a free no-obligation quote in minutes. Jason will find you the best coverage for your needs and budget.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn-gold">GET A FREE QUOTE <ArrowRight size={18} /></Link>
          <a href={`tel:${PHONE_TEL}`} className="btn-outline-white"><Phone size={18} /> CALL {PHONE}</a>
        </div>
      </div>
    </section>
  );
}

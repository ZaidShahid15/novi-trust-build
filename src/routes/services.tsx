import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/site/Layout";
import { SERVICES, CARRIERS } from "../components/site/data";
import { ArrowRight, Check } from "lucide-react";
import { FinalCTA } from "./index";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Insurance Services — Jason Levy Agency Novi MI" },
      { name: "description", content: "Home, Auto, Business, Life, Specialty and Flood insurance through 11 top carriers. Get a free quote from Novi's trusted local agent." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHero title="Insurance for Every Need" subtitle="Multiple carriers. One trusted local agent." />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          {SERVICES.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={s.title} className={`grid md:grid-cols-2 gap-10 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div
                  className="relative rounded-2xl aspect-[5/4] overflow-hidden"
                  style={{
                    border: "1px solid #E5E7EB",
                    borderTop: "3px solid #F59E0B",
                    boxShadow: "0 10px 30px rgba(27,43,75,0.12)",
                  }}
                >
                  <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center text-3xl shadow">{s.icon}</div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold">Service {i + 1}</p>
                  <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#1B2B4B]">{s.title}</h2>
                  <p className="mt-4 text-[#6B7280] leading-relaxed">{s.desc}</p>
                  <div className="mt-5">
                    <p className="text-sm font-bold text-[#1B2B4B] uppercase tracking-wider mb-2">Carriers</p>
                    <div className="flex flex-wrap gap-2">
                      {s.carriers.map(c => <span key={c} className="pill-gold !text-xs !py-1 !px-3">{c}</span>)}
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-sm font-bold text-[#1B2B4B] uppercase tracking-wider mb-2">What's Covered</p>
                    <ul className="grid grid-cols-2 gap-y-1.5 gap-x-4">
                      {s.covers.map(c => (
                        <li key={c} className="flex items-center gap-2 text-sm text-[#111827]">
                          <Check size={16} className="text-[#10B981]" /> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact" className="mt-8 inline-flex btn-gold">
                    Get {s.title} Quote <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFF]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold">11 Top Carriers</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#1B2B4B]">All Our Insurance Partners</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {CARRIERS.map(c => <span key={c} className="pill-gold !text-base !py-2.5 !px-5">{c}</span>)}
          </div>
        </div>
      </section>

      <FinalCTA />
    </SiteLayout>
  );
}

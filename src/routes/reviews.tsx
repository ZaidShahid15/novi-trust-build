import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/site/Layout";
import { Stars } from "../components/site/Stars";
import { REVIEWS, REVIEW_URL } from "../components/site/data";
import { Quote, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — 60 Five-Star Reviews | Jason Levy Agency" },
      { name: "description", content: "Read 60 five-star Google reviews from Novi residents about Jason Levy Agency's personal service and insurance expertise." },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <SiteLayout>
      <section className="bg-[#1B2B4B] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-blue opacity-30" />
        <div className="max-w-4xl mx-auto px-4 py-20 md:py-24 text-center relative">
          <div className="flex justify-center"><Stars size={36} /></div>
          <h1 className="mt-5 text-5xl md:text-6xl font-extrabold">5.0 out of 5.0</h1>
          <p className="mt-3 text-[#FCD34D] text-lg font-semibold">60 Five-Star Reviews on Google</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["60", "Total Reviews"],
            ["5.0", "Average Rating"],
            ["100%", "Five Star"],
            ["Novi", "Michigan"],
          ].map(([v, l]) => (
            <div key={l} className="text-center p-5 rounded-xl bg-[#F8FAFF] border border-[#F59E0B]/30">
              <div className="font-num font-extrabold text-2xl md:text-3xl text-[#1B2B4B]">{v}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFF]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="card-jl relative fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <Quote className="absolute top-4 right-4 text-[#1B2B4B]/10" size={48} />
              <Stars />
              <p className="mt-4 text-[#111827] leading-relaxed">"{r.text}"</p>
              <p className="mt-5 font-bold text-[#1B2B4B]">— {r.name}, <span className="font-normal text-[#6B7280]">{r.loc}</span></p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(160deg,#1B2B4B,#2E4A7A)", border: "2px solid #F59E0B" }}>
            <h2 className="text-3xl font-extrabold text-white">Happy with your experience?</h2>
            <p className="mt-3 text-white/80">Share your story and help other Novi families find the right agent.</p>
            <a href={REVIEW_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex btn-gold">
              Leave a Google Review <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

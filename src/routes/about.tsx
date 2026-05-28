import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/site/Layout";
import { AgentCard } from "../components/site/AgentCard";
import { PHONE, PHONE_TEL, ADDRESS, MAPS_URL } from "../components/site/data";
import { Award, GraduationCap, Star, MapPin, Phone, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jason Levy — Novi's Certified Trusted Advisor" },
      { name: "description", content: "Meet Jason Levy, Novi Michigan's 5-star independent insurance agent. Personal service, 11 top carriers, deep local roots." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero title="Meet Jason Levy" subtitle="Novi's Certified Trusted Advisor" />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <AgentCard />
          <div>
            <p className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold">About</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#1B2B4B]">Your Neighbor, Your Agent</h2>
            <p className="mt-5 text-[#6B7280] leading-relaxed">
              Jason Levy is a Certified Trusted Advisor and independent insurance agent serving the Novi, Michigan community.
              With deep roots in the Detroit Metropolitan Area and access to over 11 top insurance carriers, Jason helps
              families and businesses find the right coverage at the right price — with personal service that big insurance
              companies simply cannot match.
            </p>
            <p className="mt-4 text-[#6B7280] leading-relaxed">
              When you work with Jason Levy Agency, you get a real person who knows your name, understands your needs,
              and picks up the phone when you call. No call centers. No runaround. Just honest, straightforward insurance
              advice from someone who genuinely cares about protecting your family.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFF]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            { Icon: Award, title: "Certified Trusted Advisor", body: "Recognized expertise in personal and commercial insurance." },
            { Icon: GraduationCap, title: "University of Texas at El Paso", body: "Educational foundation with a focus on business." },
            { Icon: Star, title: "5.0 Google Rating", body: "60 verified five-star reviews from Novi clients." },
          ].map(({ Icon, title, body }) => (
            <div key={title} className="card-jl text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-[#1B2B4B] flex items-center justify-center">
                <Icon className="text-[#F59E0B]" size={26} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#1B2B4B]">{title}</h3>
              <p className="mt-2 text-sm text-[#6B7280]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-2xl p-8 md:p-10" style={{ background: "linear-gradient(160deg,#2E4A7A,#1B2B4B)", border: "2px solid #F59E0B" }}>
            <h3 className="text-2xl font-bold text-white">Visit the Office</h3>
            <div className="mt-6 space-y-4 text-white">
              <Row Icon={MapPin}>{ADDRESS}</Row>
              <Row Icon={Phone}><a href={`tel:${PHONE_TEL}`} className="font-num font-bold hover:text-[#FCD34D]">{PHONE}</a></Row>
              <Row Icon={Clock}>Monday–Friday: 8:30 AM – 5:00 PM</Row>
              <Row Icon={Clock}>Saturday: By Appointment</Row>
              <Row Icon={Clock}>Sunday: Closed</Row>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-gold">Get Directions <ArrowRight size={18} /></a>
              <Link to="/contact" className="btn-outline-white">Book A Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Row({ Icon, children }: { Icon: any; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="text-[#F59E0B] shrink-0 mt-0.5" size={20} />
      <span>{children}</span>
    </div>
  );
}

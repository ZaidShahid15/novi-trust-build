import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, Menu, X, ShieldCheck, MapPin, Clock } from "lucide-react";
import { PHONE, PHONE_TEL, ADDRESS, CARRIERS } from "./data";

function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="bg-[#F59E0B] text-[#1B2B4B] text-sm font-semibold">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between gap-4">
        <p className="truncate">
          ⭐ Novi's #1 Rated Insurance Agent — 5.0 Stars · 60 Reviews · Call{" "}
          <a href={`tel:${PHONE_TEL}`} className="underline underline-offset-2">{PHONE}</a>
        </p>
        <button onClick={() => setOpen(false)} aria-label="Dismiss" className="shrink-0">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.08)]" : "bg-white"
      } border-b border-[#E5E7EB]`}
    >
      <div className="max-w-7xl mx-auto px-4 h-[72px] flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#1B2B4B,#2E4A7A)" }}
          >
            <ShieldCheck className="text-[#F59E0B]" size={22} />
          </span>
          <span className="font-display font-extrabold text-[#1B2B4B] text-lg leading-tight">
            Jason Levy <span className="block text-xs font-medium text-[#6B7280] -mt-0.5">Agency</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => {
            const active = location.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`text-sm font-semibold transition-colors ${
                  active ? "text-[#F59E0B]" : "text-[#1B2B4B] hover:text-[#3B82F6]"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${PHONE_TEL}`} className="font-num font-bold text-[#1B2B4B] hover:text-[#3B82F6] flex items-center gap-1.5">
            <Phone size={16} /> {PHONE}
          </a>
          <Link to="/contact" className="btn-gold !py-2.5 !px-5 text-sm">GET A FREE QUOTE</Link>
        </div>

        <button className="lg:hidden text-[#1B2B4B]" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={28} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#1B2B4B] text-white flex flex-col">
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <span className="font-display font-bold text-lg">Jason Levy Agency</span>
            <button onClick={() => setOpen(false)} aria-label="Close"><X size={28} /></button>
          </div>
          <nav className="flex flex-col p-6 gap-2 text-xl font-display font-semibold">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="py-3 border-b border-white/10">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="p-6 mt-auto space-y-3">
            <a href={`tel:${PHONE_TEL}`} className="block text-center btn-gold w-full justify-center">
              <Phone size={18} /> Call {PHONE}
            </a>
            <Link to="/contact" className="block text-center btn-outline-white w-full justify-center">
              Get A Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function FloatingCall() {
  return (
    <>
      <a
        href={`tel:${PHONE_TEL}`}
        className="hidden md:flex fixed bottom-6 right-6 z-30 w-16 h-16 rounded-full bg-[#F59E0B] text-[#1B2B4B] items-center justify-center shadow-xl pulse-gold group"
        aria-label={`Call ${PHONE}`}
      >
        <Phone size={26} />
        <span className="absolute right-[calc(100%+10px)] whitespace-nowrap bg-[#1B2B4B] text-white text-sm font-semibold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          Call Jason — {PHONE}
        </span>
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#F59E0B] text-[#1B2B4B] font-bold py-3.5 text-center flex items-center justify-center gap-2 shadow-[0_-4px_16px_rgba(0,0,0,0.15)]"
      >
        <Phone size={18} /> Call {PHONE}
      </a>
    </>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-white">
      {/* ROW 1 — Top CTA Strip */}
      <div className="bg-[#F59E0B] text-[#1B2B4B]">
        <div className="max-w-7xl mx-auto px-4 min-h-[70px] py-3 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="font-bold text-sm md:text-base">
            ⭐ Novi's #1 Rated Insurance Agent — 5.0 Stars · 60 Google Reviews
          </p>
          <Link
            to="/contact"
            className="bg-[#1B2B4B] text-white font-bold px-6 py-2.5 rounded-md text-sm hover:bg-[#0F1E38] transition-colors whitespace-nowrap"
          >
            GET A FREE QUOTE
          </Link>
        </div>
      </div>

      {/* ROW 2 — Main Footer Body */}
      <div className="bg-[#1B2B4B]">
        <div className="max-w-7xl mx-auto px-4 py-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="text-[#F59E0B]" size={40} />
              <span className="font-display font-extrabold text-white text-[22px] leading-tight">
                Jason Levy Agency
              </span>
            </div>
            <p className="mt-3 text-[#F59E0B] italic text-sm">
              Protecting Novi Families Since Day One
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 text-[#FCD34D] font-num font-bold text-lg hover:text-white transition-colors"
              >
                <Phone size={18} /> {PHONE}
              </a>
              <p className="flex items-start gap-2 text-gray-300">
                <MapPin size={16} className="text-[#F59E0B] shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </p>
              <p className="flex items-start gap-2 text-gray-300">
                <Clock size={16} className="text-[#F59E0B] shrink-0 mt-0.5" />
                <span>Mon–Fri: 8:30AM–5PM | Sat: By Appt</span>
              </p>
            </div>
          </div>

          {/* Column 2 — Navigate */}
          <div>
            <h4 className="text-[#F59E0B] uppercase text-[11px] font-bold tracking-[0.2em]">
              Navigate
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Jason" },
                { to: "/services", label: "Our Services" },
                { to: "/reviews", label: "Client Reviews" },
                { to: "/contact", label: "Get A Quote" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-white hover:text-[#F59E0B] transition-colors"
                  >
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Insurance */}
          <div>
            <h4 className="text-[#F59E0B] uppercase text-[11px] font-bold tracking-[0.2em]">
              Insurance
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {[
                "Home Insurance",
                "Auto Insurance",
                "Business Insurance",
                "Life Insurance",
                "Specialty Insurance",
                "Flood Insurance",
              ].map((l) => (
                <li key={l}>
                  <Link
                    to="/services"
                    className="text-white hover:text-[#F59E0B] transition-colors"
                  >
                    → {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Trusted Agent */}
          <div>
            <h4 className="text-[#F59E0B] uppercase text-[11px] font-bold tracking-[0.2em]">
              Trusted Agent
            </h4>
            <div className="mt-5 rounded-xl border border-[#F59E0B]/50 bg-[#0F1E38] p-4 text-center">
              <div className="flex items-center justify-center gap-1.5">
                <span className="text-[#F59E0B] text-lg tracking-wider">★★★★★</span>
                <span className="font-num font-bold text-white">5.0</span>
              </div>
              <p className="mt-1 text-xs text-gray-300">60 Five-Star Reviews</p>
              <a
                href="https://g.page/r/CRjL5Y93TPmsEBM/review"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block bg-[#1B2B4B] border border-[#F59E0B]/40 text-white text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-[#F59E0B] hover:text-[#1B2B4B] transition-colors"
              >
                Leave A Review
              </a>
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F59E0B] text-[#1B2B4B] font-bold text-xs">
              <ShieldCheck size={14} /> Certified Trusted Advisor
            </div>
            <p className="mt-3 text-xs text-gray-300">University of Texas at El Paso</p>
          </div>
        </div>
      </div>

      {/* ROW 3 — Carriers Strip */}
      <div className="bg-[#0F1E38]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h4 className="text-[#F59E0B] uppercase text-[11px] font-bold tracking-[0.2em] text-center">
            Our Carrier Network
          </h4>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {CARRIERS.map((c) => {
              const primary = c === "Farm Bureau";
              return (
                <span
                  key={c}
                  className={
                    primary
                      ? "px-4 py-1.5 rounded-full border-2 border-[#F59E0B] text-[#FCD34D] text-sm font-bold"
                      : "px-3 py-1 rounded-full border border-white/40 text-white text-xs font-semibold hover:border-[#F59E0B] hover:text-[#FCD34D] transition-colors"
                  }
                >
                  {c}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* ROW 4 — Bottom Bar */}
      <div className="bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 min-h-[48px] py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <p className="text-gray-400 text-xs">
            © {year} Jason Levy Agency. All Rights Reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Farm Bureau Insurance & More — Novi, Michigan
          </p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer />
      <FloatingCall />
    </div>
  );
}

export function PageHero({
  badge,
  title,
  titleAccent,
  subtitle,
}: {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-[#1B2B4B] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-blue opacity-30" />
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative text-center fade-up">
        {badge && (
          <span className="pill-gold !bg-[#F59E0B]/15 !text-[#FCD34D] !border-[#F59E0B]/40 mb-5">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          {title}{" "}
          {titleAccent && <span className="text-[#F59E0B]">{titleAccent}</span>}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-[#FCD34D] max-w-2xl mx-auto font-medium">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

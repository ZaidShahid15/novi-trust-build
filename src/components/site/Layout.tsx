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
  return (
    <footer className="bg-[#1B2B4B] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 space-y-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 justify-center">
            <span className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center">
              <ShieldCheck className="text-[#F59E0B]" size={22} />
            </span>
            <span className="font-display font-extrabold text-xl">Jason Levy Agency</span>
          </div>
          <p className="mt-3 text-[#FCD34D] font-medium">Protecting Novi Families Since Day One</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-[#FCD34D]">{n.label}</Link>
          ))}
        </nav>

        <div>
          <p className="text-center text-xs uppercase tracking-widest text-[#FCD34D] mb-4">Our Carriers</p>
          <div className="flex flex-wrap justify-center gap-2">
            {CARRIERS.map((c) => (
              <span key={c} className="px-3 py-1.5 rounded-full border border-[#F59E0B]/60 text-[#FCD34D] text-xs font-semibold">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-sm border-t border-white/10 pt-8">
          <a href={`tel:${PHONE_TEL}`} className="flex items-start gap-3 hover:text-[#FCD34D]">
            <Phone className="text-[#F59E0B] shrink-0 mt-0.5" size={18} />
            <span className="font-num font-semibold">{PHONE}</span>
          </a>
          <div className="flex items-start gap-3">
            <MapPin className="text-[#F59E0B] shrink-0 mt-0.5" size={18} />
            <span>{ADDRESS}</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="text-[#F59E0B] shrink-0 mt-0.5" size={18} />
            <span>Mon–Fri 8:30AM–5PM<br />Sat By Appt</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Jason Levy Agency. All Rights Reserved.
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

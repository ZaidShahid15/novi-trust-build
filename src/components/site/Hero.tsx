import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight, ShieldCheck, Star, Trophy, PhoneCall, Check } from "lucide-react";
import { Stars } from "./Stars";
import { PHONE, PHONE_TEL } from "./data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-animated-bg">
      {/* Floating bg shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { size: 120, left: "8%", delay: 0, dur: 26, shape: "circle" },
          { size: 80, left: "22%", delay: 4, dur: 22, shape: "shield" },
          { size: 60, left: "45%", delay: 2, dur: 28, shape: "circle" },
          { size: 100, left: "65%", delay: 6, dur: 30, shape: "shield" },
          { size: 40, left: "80%", delay: 1, dur: 20, shape: "circle" },
          { size: 90, left: "92%", delay: 3, dur: 25, shape: "circle" },
        ].map((s, i) => (
          <span
            key={i}
            className="hero-float-shape"
            style={{
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
              borderRadius: s.shape === "circle" ? "50%" : "30% 30% 50% 50% / 30% 30% 60% 60%",
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-grid-blue opacity-40" />

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative grid lg:grid-cols-5 gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
            className="inline-block"
          >
            <span className="pill-gold pill-shimmer pill-glow">
              ⭐ NOVI'S #1 RATED INSURANCE AGENT
            </span>
          </motion.div>

          <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1B2B4B] leading-[1.05]">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="block"
            >
              Protecting What
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
              className="block text-[#F59E0B]"
            >
              Matters Most.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.6 }}
            className="mt-6 text-lg text-[#6B7280] max-w-xl leading-relaxed"
          >
            Serving Novi, Michigan families and businesses with personalized insurance solutions.
            Farm Bureau's trusted local agent with a 5-star Google reputation and access to 11 top carriers.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-4 text-sm text-[#1B2B4B] font-semibold flex items-center gap-2"
          >
            <span className="relative inline-flex">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              <span className="absolute inset-0 rounded-full bg-[#10B981] animate-ping opacity-75" />
            </span>
            Open Now — Mon–Fri: 8:30 AM – 5:00 PM &nbsp;|&nbsp; Sat: By Appointment
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.8 }}
            >
              <Link to="/contact" className="btn-gold btn-shimmer group">
                GET A FREE QUOTE
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.9 }}
            >
              <a href={`tel:${PHONE_TEL}`} className="btn-outline-navy btn-phone-wiggle">
                <Phone size={18} /> CALL {PHONE}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#6B7280]"
          >
            {["No Obligation", "Free Quote", "Same Day Coverage"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check size={14} className="text-[#10B981]" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="lg:col-span-2 relative"
        >
          <div className="hero-card-float relative">
            <div className="hero-card-glow" />
            <div
              className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center px-6"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, #2E4A7A 0%, #1B2B4B 60%, #0F1A35 100%)",
                border: "3px solid #F59E0B",
              }}
            >
              <div className="absolute inset-0 bg-grid-blue opacity-20" />
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.6 }}
                  className="font-display font-extrabold leading-none drop-shadow-[0_4px_20px_rgba(245,158,11,0.45)]"
                  style={{
                    fontSize: "112px",
                    letterSpacing: "-0.04em",
                    background: "linear-gradient(180deg,#FCD34D 0%,#F59E0B 60%,#B8740A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  JL
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-4 text-white text-3xl font-bold"
                >
                  Jason Levy
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                  className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B] text-[#1B2B4B] font-bold text-xs uppercase tracking-wider pill-shimmer"
                >
                  <ShieldCheck size={14} /> Certified Trusted Advisor
                </motion.div>
                <div className="mt-5 flex flex-col items-center gap-1.5">
                  <div className="inline-flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.3 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.1, type: "spring", stiffness: 240 }}
                      >
                        <Star
                          size={18}
                          className="fill-[#F59E0B] text-[#F59E0B]"
                          style={{ filter: "drop-shadow(0 0 4px rgba(245,158,11,0.6))" }}
                        />
                      </motion.span>
                    ))}
                  </div>
                  <span className="font-num font-semibold text-[#FCD34D] text-sm">
                    5.0 · 60 Reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badges — hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="hidden md:flex hero-badge hero-badge-bob items-center gap-2 absolute -top-3 -left-2"
              style={{ animationDelay: "0s" }}
            >
              <Star size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
              <span className="text-xs font-bold text-[#1B2B4B]">5.0 Google Rating</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="hidden md:flex hero-badge hero-badge-bob items-center gap-2 absolute -bottom-2 -right-3"
              style={{ animationDelay: "1s" }}
            >
              <Trophy size={14} className="text-[#F59E0B]" />
              <span className="text-xs font-bold text-[#1B2B4B]">Certified Advisor</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="hidden md:flex hero-badge hero-badge-bob items-center gap-2 absolute -bottom-4 left-2"
              style={{ animationDelay: "2s" }}
            >
              <PhoneCall size={14} className="text-[#10B981]" />
              <span className="text-xs font-bold text-[#1B2B4B]">Always Available</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { Stars } from "./Stars";
import { ShieldCheck } from "lucide-react";

export function AgentCard() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center px-6"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, #2E4A7A 0%, #1B2B4B 60%, #0F1A35 100%)",
          border: "3px solid #F59E0B",
          boxShadow: "0 20px 50px rgba(27,43,75,0.35)",
        }}
      >
        <div className="absolute inset-0 bg-grid-blue opacity-20" />
        <div className="relative">
          <div
            className="font-display font-extrabold text-[#F59E0B] leading-none drop-shadow-[0_4px_20px_rgba(245,158,11,0.4)]"
            style={{ fontSize: "112px", letterSpacing: "-0.04em" }}
          >
            JL
          </div>
          <h3 className="mt-4 text-white text-3xl font-bold">Jason Levy</h3>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B] text-[#1B2B4B] font-bold text-xs uppercase tracking-wider">
            <ShieldCheck size={14} /> Certified Trusted Advisor
          </div>
          <div className="mt-5 flex flex-col items-center gap-1.5">
            <Stars size={18} />
            <span className="font-num font-semibold text-[#FCD34D] text-sm">
              5.0 · 60 Reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

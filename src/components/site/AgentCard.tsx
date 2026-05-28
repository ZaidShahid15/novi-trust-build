import { Stars } from "./Stars";
import { ShieldCheck } from "lucide-react";

export function AgentCard() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full max-w-sm aspect-[4/5] rounded-2xl p-8 flex flex-col items-center justify-center text-center"
        style={{
          background: "linear-gradient(160deg, #1B2B4B 0%, #2E4A7A 100%)",
          border: "3px solid #F59E0B",
          boxShadow: "0 20px 50px rgba(27,43,75,0.25)",
        }}
      >
        <div
          className="w-40 h-40 rounded-full flex items-center justify-center mb-6"
          style={{ background: "linear-gradient(135deg, #F59E0B, #FCD34D)" }}
        >
          <span className="font-display text-6xl font-bold text-[#1B2B4B]">JL</span>
        </div>
        <h3 className="text-white text-2xl font-bold">Jason Levy</h3>
        <p className="text-[#FCD34D] mt-1 text-sm uppercase tracking-wider">Trusted Local Agent</p>
      </div>
      <div className="-mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B] text-[#1B2B4B] font-bold text-sm shadow-md">
        <ShieldCheck size={16} /> Certified Trusted Advisor
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Stars />
        <span className="font-num font-semibold text-[#1B2B4B]">5.0 · 60 Reviews</span>
      </div>
    </div>
  );
}

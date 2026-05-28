import { Stars } from "./Stars";
import { ShieldCheck } from "lucide-react";
import { AGENT_PHOTO } from "./data";

export function AgentCard() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden flex flex-col justify-end"
        style={{
          border: "3px solid #F59E0B",
          boxShadow: "0 20px 50px rgba(27,43,75,0.25)",
        }}
      >
        <img
          src={AGENT_PHOTO}
          alt="Jason Levy, trusted local insurance agent in Novi, Michigan"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(27,43,75,0.05) 45%, rgba(27,43,75,0.92) 100%)",
          }}
        />
        <div className="relative p-6 text-center">
          <h3 className="text-white text-2xl font-bold drop-shadow">Jason Levy</h3>
          <p className="text-[#FCD34D] mt-1 text-sm uppercase tracking-wider">
            Trusted Local Agent
          </p>
        </div>
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

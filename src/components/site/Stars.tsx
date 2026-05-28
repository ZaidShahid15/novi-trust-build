import { Star } from "lucide-react";

export function Stars({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`inline-flex gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className="fill-[#F59E0B] text-[#F59E0B]" />
      ))}
    </div>
  );
}

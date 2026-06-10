import { treatmentsMarquee } from "@/lib/content";
import { CupLogo } from "./Icons";

export default function Marquee() {
  const row = [...treatmentsMarquee, ...treatmentsMarquee];
  return (
    <div className="relative border-y border-line bg-steel/40 py-4 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-night to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-night to-transparent z-10" />
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-3 px-6 text-mist">
            <CupLogo className="h-4 w-4 text-gold-bright" />
            <span className="text-sm font-medium uppercase tracking-[0.15em]">{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

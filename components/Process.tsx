import { steps } from "@/lib/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="pedir" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-bright">
            Cómo funciona
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white">
            Tu café, en 4 pasos
          </h2>
          <p className="mt-4 text-mist">
            Venir a Origen es simple. Y si te gusta, te lo llevás a casa.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="relative text-center">
              <div className="relative mx-auto grid place-items-center h-16 w-16 rounded-full bg-gradient-to-br from-gold-bright to-gold-deep text-[#1a1008] font-display text-xl font-bold shadow-lg shadow-gold/20">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-mist px-2">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

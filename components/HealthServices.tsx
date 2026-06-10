import { experiences } from "@/lib/content";
import { iconMap, IconSparkle } from "./Icons";
import { waLink, WA_EVENTO_MSG } from "@/lib/site";
import Reveal from "./Reveal";

export default function HealthServices() {
  return (
    <section id="eventos" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute -left-24 top-1/4 -z-10 h-96 w-96 rounded-full bg-sage/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-gold-bright">
            <IconSparkle className="h-4 w-4" /> Más que una cafetería
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white">
            Brunch, eventos y café para llevar
          </h2>
          <p className="mt-4 text-mist">
            Vivimos el café de muchas formas. Elegí la tuya: desde un brunch de
            domingo hasta el café de tu empresa o tu suscripción para casa.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal
                key={s.title}
                delay={i * 60}
                className="group relative overflow-hidden rounded-[1.5rem] border border-line bg-steel/40 p-6 hover:border-gold/40 transition"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                <div className="relative flex items-start gap-4">
                  <span className="grid place-items-center h-12 w-12 shrink-0 rounded-2xl bg-gradient-to-br from-gold/20 to-clay/10 text-gold-bright ring-1 ring-gold/20">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                      <span className="rounded-full bg-sage/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sage-bright">
                        {s.badge}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-mist">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={waLink(WA_EVENTO_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-6 py-3 text-sm font-semibold text-gold-bright hover:bg-gold/20 transition"
          >
            Consultar por un evento o catering
          </a>
        </div>
      </div>
    </section>
  );
}

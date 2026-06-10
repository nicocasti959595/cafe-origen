import { amenities } from "@/lib/content";
import { waLink, WA_DEFAULT_MSG } from "@/lib/site";
import { IconSparkle } from "./Icons";

export default function ObrasSociales() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-steel/40 px-6 py-10 sm:px-10">
          <div className="absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="lg:w-1/3">
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-gold-bright">
                <IconSparkle className="h-4 w-4" /> Tu visita incluye
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
                Pensado para que te quedes
              </h2>
              <p className="mt-3 text-sm text-mist">
                Venís por un café y te terminás quedando toda la tarde. Tenemos
                todo para que estés cómodo, trabajes o simplemente disfrutes.
              </p>
              <a
                href={waLink(WA_DEFAULT_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold-bright hover:bg-gold/20 transition"
              >
                Quiero conocer el café
              </a>
            </div>

            <div className="lg:w-2/3 flex flex-wrap gap-2.5">
              {amenities.map((o) => (
                <span
                  key={o}
                  className="inline-flex items-center rounded-full border border-line bg-night/60 px-4 py-2.5 text-sm font-medium text-white/85"
                >
                  {o}
                </span>
              ))}
              <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-2.5 text-sm font-medium text-gold-bright">
                y mucho más
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

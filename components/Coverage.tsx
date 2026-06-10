import { nearby } from "@/lib/content";
import { site, waLink, telLink, WA_RESERVA_MSG } from "@/lib/site";
import { IconMap, IconWhatsApp, IconCheck, IconClock, IconPhone } from "./Icons";

export default function Coverage() {
  return (
    <section id="ubicacion" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute -left-20 top-10 -z-10 h-80 w-80 rounded-full bg-sage/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-bright">
            Dónde estamos
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white">
            Tu rincón en Palermo
          </h2>
          <p className="mt-4 text-mist max-w-lg">
            Estamos en {site.addressStreet}, {site.addressLocality}, a pocas
            cuadras del subte y con colectivos y estacionamiento medido cerca.
            Un espacio cálido para hacer una pausa en el día.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-steel/40 p-4">
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-gold/10 text-gold-bright ring-1 ring-gold/20">
                <IconMap className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs text-mist">Dirección</p>
                <p className="font-semibold text-white text-sm">{site.addressStreet}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-steel/40 p-4">
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-gold/10 text-gold-bright ring-1 ring-gold/20">
                <IconClock className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-xs text-mist">Horarios</p>
                <p className="font-semibold text-white text-sm">{site.hours}</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm font-medium text-white/85">Nos visitan desde:</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {nearby.map((z) => (
              <li
                key={z}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-steel/50 px-3 py-1.5 text-sm text-white/85 hover:border-gold/40 hover:text-white transition"
              >
                <IconCheck className="h-3.5 w-3.5 text-sage-bright" />
                {z}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href={waLink(WA_RESERVA_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-[#1a1008] hover:bg-gold-bright transition"
            >
              <IconWhatsApp className="h-4 w-4" />
              Reservar una mesa
            </a>
            <a
              href={telLink}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              <IconPhone className="h-4 w-4 text-gold-bright" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="glass rounded-[2rem] p-3 shadow-2xl">
            <div className="overflow-hidden rounded-[1.5rem] border border-line">
              <iframe
                title={`Ubicación de ${site.brandFull}`}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-58.45%2C-34.61%2C-58.41%2C-34.57&layer=mapnik&marker=-34.5889%2C-58.4306"
                className="w-full h-[380px] grayscale-[0.25] contrast-[1.05] sepia-[0.15]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="absolute -top-4 -right-3 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-[#1a1008] shadow-xl">
            <IconMap className="h-6 w-6 text-gold-deep" />
            <div className="leading-tight">
              <p className="text-xs text-stone-500">Estás cerca</p>
              <p className="text-sm font-extrabold">Palermo, CABA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

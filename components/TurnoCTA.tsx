import { waLink, telLink, site, WA_GRANO_MSG } from "@/lib/site";
import { IconWhatsApp, IconPhone, IconBeans } from "./Icons";

export default function TurnoCTA() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-gold-deep via-gold to-clay px-6 py-12 sm:px-12 sm:py-14">
          <div className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay" />
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-20 h-56 w-56 rounded-full bg-clay-bright/30 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#1a1008]/20 px-3 py-1 text-xs font-bold text-[#1a1008]">
                <IconBeans className="h-4 w-4" /> CAFÉ EN GRANO & SUSCRIPCIÓN
              </p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-[#1a1008]">
                Llevate Origen a tu casa
              </h2>
              <p className="mt-3 text-[#3a2410] text-lg font-medium">
                El mismo café que tomás acá, recién tostado, en grano o molido a
                tu gusto. Comprá por bolsa o suscribite y recibilo todos los meses
                con envío. {site.giftNote}.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
              <a
                href={waLink(WA_GRANO_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1a1008] px-7 py-4 text-base font-bold text-white shadow-xl hover:bg-[#241710] transition"
              >
                <IconWhatsApp className="h-5 w-5" />
                Quiero mi café en grano
              </a>
              <a
                href={telLink}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white/30 ring-1 ring-[#1a1008]/30 px-7 py-4 text-base font-semibold text-[#1a1008] hover:bg-white/50 transition"
              >
                <IconPhone className="h-5 w-5" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

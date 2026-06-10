import Image from "next/image";
import { site, img, waLink, WA_PEDIDO_MSG } from "@/lib/site";
import { signatureDrinks } from "@/lib/content";
import {
  CupLogo,
  IconWhatsApp,
  IconCheck,
  IconStar,
  IconArrow,
  IconBeans,
} from "./Icons";

const trust = [
  "Tostado propio cada semana",
  "Granos de origen trazable",
  "Pet friendly · apto notebook",
];

export default function Hero() {
  const featured = signatureDrinks[2]; // V60 de origen único

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Foto de fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={img("photo-1554118811-1e0d58224f24", 2000)}
          alt="Salón cálido de Origen, café de especialidad en Palermo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/40" />
      </div>
      <div className="absolute -top-40 -right-32 -z-10 h-[36rem] w-[36rem] rounded-full bg-gold/15 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 pt-32 pb-20 sm:pt-40 sm:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* Columna texto */}
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-black/30 px-4 py-1.5 text-xs font-semibold text-gold-bright backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold-bright animate-ping opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-bright" />
            </span>
            Café de especialidad en {site.region}
          </div>

          <h1 className="mt-6 font-display font-black leading-[1.02] text-5xl sm:text-6xl lg:text-7xl text-white">
            El café como{" "}
            <span className="text-gradient-gold italic">tiene que ser.</span>
          </h1>

          <p className="mt-5 text-lg text-mist max-w-xl">{site.claim}</p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-white/90">
                <IconCheck className="h-5 w-5 text-sage-bright" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#carta"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-base font-semibold text-[#1a1008] shadow-xl shadow-gold/30 hover:bg-gold-bright transition"
            >
              Ver la carta
              <IconArrow className="h-5 w-5 group-hover:translate-x-0.5 transition" />
            </a>
            <a
              href={waLink(WA_PEDIDO_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-line bg-white/5 px-7 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-gold/40 transition backdrop-blur-sm"
            >
              <IconWhatsApp className="h-5 w-5 text-[#25D366]" />
              Pedir por WhatsApp
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3 text-sm text-mist">
            <div className="flex -space-x-2">
              {["VR", "MS", "CM", "LP"].map((i) => (
                <span
                  key={i}
                  className="grid place-items-center h-8 w-8 rounded-full border-2 border-night bg-steel-2 text-[10px] font-bold text-gold-bright"
                >
                  {i}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="flex text-gold-bright">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </span>
              <span className="font-semibold text-white">4,9</span>
              <span>· +600 opiniones reales</span>
            </div>
          </div>
        </div>

        {/* Columna visual: tarjeta destacada */}
        <div className="relative reveal" style={{ animationDelay: "120ms" }}>
          <div className="relative mx-auto max-w-md">
            <div className="glass rounded-[2rem] p-4 shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.4rem]">
                <Image
                  src={img(featured.photo, 800)}
                  alt={featured.title}
                  width={800}
                  height={600}
                  className="h-56 w-full object-cover"
                />
                {/* vapor */}
                <div className="pointer-events-none absolute top-3 left-1/2 -translate-x-1/2 flex gap-2">
                  <span className="h-10 w-1 rounded-full bg-white/40 blur-[2px] animate-steam" />
                  <span className="h-12 w-1 rounded-full bg-white/40 blur-[2px] animate-steam" style={{ animationDelay: "0.6s" }} />
                  <span className="h-9 w-1 rounded-full bg-white/40 blur-[2px] animate-steam" style={{ animationDelay: "1.2s" }} />
                </div>
                <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-night/80 px-3 py-1 text-[11px] font-bold text-gold-bright backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-sage-bright animate-blink" />
                  CAFÉ DE LA SEMANA
                </span>
              </div>

              <div className="px-3 pt-5 pb-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {featured.title}
                    </h3>
                    <p className="mt-1 text-sm text-mist">{featured.desc}</p>
                  </div>
                  <span className="grid place-items-center h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-gold-bright to-gold-deep text-[#1a1008] animate-float gold-glow">
                    <CupLogo className="h-6 w-6" />
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="inline-flex items-center gap-2 text-sm text-white/90">
                    <IconBeans className="h-5 w-5 text-sage-bright" />
                    Origen rotativo
                  </span>
                  <span className="font-display text-2xl font-bold text-gold-bright">
                    {featured.price}
                  </span>
                </div>
              </div>
            </div>

            {/* Badge flotante */}
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-[#1a1008] shadow-xl animate-float" style={{ animationDelay: "1.5s" }}>
              <IconStar className="h-6 w-6 text-gold-deep" />
              <div className="leading-tight">
                <p className="text-xs text-stone-500">Valoración</p>
                <p className="text-sm font-extrabold">4,9 / 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

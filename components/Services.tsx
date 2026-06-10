import Image from "next/image";
import { signatureDrinks, menu } from "@/lib/content";
import { img, waLink, WA_PEDIDO_MSG } from "@/lib/site";
import { iconMap, IconArrow, IconSparkle } from "./Icons";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="carta" className="relative py-20 sm:py-28">
      <div className="absolute top-1/4 -right-10 -z-10 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-bright">
            Nuestra carta
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white">
            Café que se nota en la taza
          </h2>
          <p className="mt-4 text-mist">
            Empezá por nuestros cafés de autor y después armá tu pedido con la
            carta completa. Todo se prepara al momento, con grano recién molido.
            Los precios son orientativos.
          </p>
        </div>

        {/* Cafés destacados (con foto) */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {signatureDrinks.map((s, i) => (
            <Reveal
              as="article"
              key={s.title}
              delay={i * 60}
              className="card-glow glass rounded-[1.5rem] overflow-hidden flex flex-col"
            >
              <div className="relative">
                <Image
                  src={img(s.photo, 700)}
                  alt={s.title}
                  width={700}
                  height={500}
                  className="h-44 w-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-night/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold-bright backdrop-blur-sm">
                  {s.tag}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-mist flex-1">{s.desc}</p>
                <div className="mt-4 flex items-end justify-between border-t border-line pt-4">
                  <span className="text-[11px] uppercase tracking-wide text-mist">Desde</span>
                  <span className="font-display text-xl font-bold text-gold-bright">{s.price}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Carta completa por categorías */}
        <div className="mt-14 grid lg:grid-cols-2 gap-5">
          {menu.map((sec, i) => {
            const Icon = iconMap[sec.icon];
            return (
              <Reveal
                key={sec.category}
                delay={i * 70}
                className="rounded-[1.5rem] border border-line bg-steel/40 p-6 sm:p-7"
              >
                <div className="flex items-center gap-3 border-b border-line pb-4">
                  <span className="grid place-items-center h-12 w-12 rounded-2xl bg-gold/10 text-gold-bright ring-1 ring-gold/20 p-3">
                    <Icon className="h-full w-full" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">{sec.category}</h3>
                    {sec.note && (
                      <p className="text-xs text-sage-bright flex items-center gap-1.5">
                        <IconSparkle className="h-3 w-3" /> {sec.note}
                      </p>
                    )}
                  </div>
                </div>
                <ul className="mt-4 space-y-3.5">
                  {sec.items.map((it) => (
                    <li key={it.name} className="flex items-baseline gap-3">
                      <div className="min-w-0">
                        <p className="font-semibold text-white">{it.name}</p>
                        {it.desc && <p className="text-sm text-mist">{it.desc}</p>}
                      </div>
                      <span className="flex-1 border-b border-dotted border-line/80 translate-y-[-3px]" />
                      <span className="font-display font-bold text-gold-bright shrink-0">{it.price}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 rounded-[1.5rem] border border-line bg-steel/40 px-6 py-5 text-center sm:text-left">
          <p className="text-white font-medium">
            ¿Querés pedir para llevar o con delivery? Te lo preparamos al toque.
          </p>
          <a
            href={waLink(WA_PEDIDO_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-[#1a1008] hover:bg-gold-bright transition shrink-0"
          >
            Hacer mi pedido <IconArrow className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

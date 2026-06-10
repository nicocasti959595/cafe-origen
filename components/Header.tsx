"use client";

import { useEffect, useState } from "react";
import { site, waLink, telLink, WA_PEDIDO_MSG } from "@/lib/site";
import { CupLogo, IconPhone, IconWhatsApp, IconSparkle } from "./Icons";

const NAV = [
  { href: "#carta", label: "Carta" },
  { href: "#porque", label: "Por qué Origen" },
  { href: "#galeria", label: "Galería" },
  { href: "#eventos", label: "Eventos" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Barra superior */}
      <div className="bg-gradient-to-r from-gold-deep via-gold to-clay text-[#1a1008] text-[13px] sm:text-sm">
        <div className="mx-auto max-w-7xl px-4 h-9 flex items-center justify-center sm:justify-between gap-3">
          <p className="font-semibold tracking-wide flex items-center gap-2">
            <IconSparkle className="h-3.5 w-3.5" />
            TOSTADO PROPIO · {site.giftNote.toUpperCase()}
          </p>
          <a
            href={telLink}
            className="hidden sm:flex items-center gap-1.5 font-semibold hover:underline underline-offset-2"
          >
            <IconPhone className="h-4 w-4" /> {site.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Navegación */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-night/90 backdrop-blur-md border-b border-line shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-gold-bright to-gold-deep text-[#1a1008] shadow-lg shadow-gold/25 group-hover:scale-105 transition gold-glow">
              <CupLogo className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-display font-bold text-[19px] text-white tracking-wide">
                {site.name}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.28em] text-gold-bright">
                Café de Especialidad
              </span>
            </span>
          </a>

          <ul className="hidden xl:flex items-center gap-1 text-sm text-mist">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="px-3 py-2 rounded-lg hover:text-white hover:bg-white/5 transition"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={waLink(WA_PEDIDO_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-[#1a1008] hover:bg-gold-bright transition shadow-lg shadow-gold/25"
            >
              <IconWhatsApp className="h-4 w-4" />
              Pedir
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menú"
              aria-expanded={open}
              className="xl:hidden grid place-items-center h-10 w-10 rounded-lg border border-line text-white"
            >
              <span className="sr-only">Menú</span>
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Menú mobile */}
        {open && (
          <div className="xl:hidden border-t border-line bg-night/95 backdrop-blur-md">
            <ul className="px-4 py-3 space-y-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 rounded-lg text-mist hover:text-white hover:bg-white/5"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={waLink(WA_PEDIDO_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 font-semibold text-[#1a1008]"
                >
                  <IconWhatsApp className="h-5 w-5" /> Pedir por WhatsApp
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

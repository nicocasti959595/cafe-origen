import { site, waLink, telLink, WA_PEDIDO_MSG } from "@/lib/site";
import { CupLogo, IconPhone, IconWhatsApp } from "./Icons";

const NAV = [
  { href: "#carta", label: "Carta" },
  { href: "#porque", label: "Por qué Origen" },
  { href: "#galeria", label: "Galería" },
  { href: "#eventos", label: "Eventos" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

const CARTA = [
  "Espresso & leche",
  "Métodos & filtrados",
  "Cold brew & fríos",
  "Brunch & pastelería",
  "Café en grano",
  "Catering de café",
];

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-line bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-gold-bright to-gold-deep text-[#1a1008] gold-glow">
                <CupLogo className="h-6 w-6" />
              </span>
              <span className="leading-tight">
                <span className="block font-display font-bold text-lg text-white tracking-wide">{site.name}</span>
                <span className="block text-[10px] uppercase tracking-[0.28em] text-gold-bright">
                  Café de Especialidad
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm text-mist max-w-xs">
              Café de especialidad con tostado propio en {site.addressLocality}.
              Espresso, métodos, brunch y grano para llevar a casa.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a href={telLink} className="inline-flex items-center gap-2 text-white font-semibold hover:text-gold-bright transition">
                <IconPhone className="h-4 w-4 text-gold-bright" /> {site.phoneDisplay}
              </a>
              <a
                href={waLink(WA_PEDIDO_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-mist hover:text-white transition"
              >
                <IconWhatsApp className="h-4 w-4 text-[#25D366]" /> WhatsApp directo
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-white">Navegación</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-mist hover:text-white transition">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-white">Carta</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {CARTA.map((s) => (
                <li key={s} className="text-mist">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-white">Atención</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-mist">
              <li>{site.hours}</li>
              <li>{site.bookingNote}</li>
              <li>{site.addressStreet}, {site.addressLocality}</li>
              <li>{site.email}</li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a href="/privacidad" className="text-xs text-mist hover:text-white underline underline-offset-2">
                Privacidad
              </a>
              <span className="text-line">·</span>
              <a href="/terminos" className="text-xs text-mist hover:text-white underline underline-offset-2">
                Términos
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-mist">
          <p>
            © {new Date().getFullYear()} {site.brandFull}. Todos los derechos
            reservados.
          </p>
          <p>
            Desarrollado por{" "}
            <a
              href="https://ideawebx.com"
              rel="dofollow"
              className="font-semibold text-gold-bright hover:text-gold underline underline-offset-2"
            >
              IdeaWebX
            </a>
          </p>
        </div>

        <p className="mt-6 text-center text-[11px] text-mist/60">
          Sitio de demostración. Marca, datos de contacto y reseñas son ilustrativos.
        </p>
      </div>
    </footer>
  );
}

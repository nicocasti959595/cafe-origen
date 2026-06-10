"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { IconWhatsApp, IconPhone, IconMap, IconClock, IconArrow } from "./Icons";

const MOTIVOS = [
  "Reservar una mesa",
  "Pedido para llevar (take away)",
  "Pedido con delivery",
  "Comprar café en grano",
  "Evento privado / catering",
  "Otra consulta",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    motivo: MOTIVOS[0],
    fecha: "",
    message: "",
    company: "", // honeypot
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.company) return; // bot
    const msg =
      `Hola ${site.name} 👋 Te escribo desde la web.%0A` +
      `%0A• Nombre: ${form.name || "-"}` +
      `%0A• Teléfono: ${form.phone || "-"}` +
      `%0A• Motivo: ${form.motivo}` +
      `%0A• Día/horario o detalle: ${form.fecha || "-"}` +
      (form.message ? `%0A• Comentario: ${form.message}` : "");
    window.open(`https://wa.me/${site.whatsappRaw}?text=${msg}`, "_blank");
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contacto" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-bright">
            Escribinos
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white">
            Reservá, pedí o consultá
          </h2>
          <p className="mt-4 text-mist">
            Completá el formulario y te abrimos WhatsApp con todo listo. O
            escribinos / llamanos directo.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 glass rounded-[2rem] p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nombre">
                <input
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Tu nombre"
                  className="inp"
                />
              </Field>
              <Field label="Teléfono">
                <input
                  required
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="11 5555-5555"
                  className="inp"
                  inputMode="tel"
                />
              </Field>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="¿Qué necesitás?">
                <select value={form.motivo} onChange={set("motivo")} className="inp">
                  {MOTIVOS.map((s) => (
                    <option key={s} value={s} className="bg-night">
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Día/horario o detalle">
                <input
                  value={form.fecha}
                  onChange={set("fecha")}
                  placeholder="Ej. domingo 11 h, 4 personas"
                  className="inp"
                />
              </Field>
            </div>

            <Field label="¿Querés contarnos algo más?">
              <textarea
                value={form.message}
                onChange={set("message")}
                rows={3}
                placeholder="Ej. Mesa cerca de la ventana, o pedido de 2 cafés y medialunas."
                className="inp resize-none"
              />
            </Field>

            {/* honeypot */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={set("company")}
              className="hidden"
              aria-hidden="true"
            />

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-6 py-4 text-base font-semibold text-[#1a1008] hover:bg-gold-bright transition shadow-lg shadow-gold/25"
            >
              <IconWhatsApp className="h-5 w-5" />
              Enviar por WhatsApp
              <IconArrow className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-mist">
              Al enviar aceptás ser contactado por este medio. No compartimos tus
              datos. Ver{" "}
              <a href="/privacidad" className="underline underline-offset-2 hover:text-white">
                privacidad
              </a>
              .
            </p>
          </form>

          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={`tel:${site.phoneRaw}`}
              className="flex items-center gap-4 rounded-2xl border border-line bg-steel/40 p-5 hover:border-gold/40 transition"
            >
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-gold/10 text-gold-bright ring-1 ring-gold/20">
                <IconPhone className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs text-mist">Llamanos</p>
                <p className="font-display font-bold text-white">{site.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${site.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-line bg-steel/40 p-5 hover:border-gold/40 transition"
            >
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-[#25D366]/15 text-[#25D366] ring-1 ring-[#25D366]/30">
                <IconWhatsApp className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs text-mist">WhatsApp directo</p>
                <p className="font-display font-bold text-white">{site.phoneDisplay}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-line bg-steel/40 p-5">
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-gold/10 text-gold-bright ring-1 ring-gold/20">
                <IconClock className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs text-mist">Horario de atención</p>
                <p className="font-semibold text-white">{site.hours}</p>
                <p className="text-xs text-mist">{site.bookingNote}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-line bg-steel/40 p-5">
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-gold/10 text-gold-bright ring-1 ring-gold/20">
                <IconMap className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs text-mist">Dónde estamos</p>
                <p className="font-semibold text-white">{site.addressStreet}</p>
                <p className="text-xs text-mist">{site.addressLocality}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .inp {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid var(--color-line);
          background: rgba(18,11,6,0.6);
          padding: 0.75rem 0.9rem;
          font-size: 0.95rem;
          color: #f7ecdc;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .inp::placeholder { color: #927a5e; }
        .inp:focus {
          border-color: var(--color-gold);
          box-shadow: 0 0 0 3px rgba(216,165,89,0.18);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white/85">{label}</span>
      {children}
    </label>
  );
}

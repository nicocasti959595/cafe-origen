import Image from "next/image";
import { gallery } from "@/lib/content";
import { img } from "@/lib/site";
import { IconSparkle } from "./Icons";
import Reveal from "./Reveal";

// Algunas piezas ocupan 2 columnas para un mosaico más dinámico.
const spans = [
  "lg:col-span-2 lg:row-span-2 h-56 sm:h-72 lg:h-full",
  "h-44 sm:h-52",
  "h-44 sm:h-52",
  "h-44 sm:h-52",
  "h-44 sm:h-52",
  "lg:col-span-2 h-44 sm:h-52",
  "h-44 sm:h-52",
  "h-44 sm:h-52",
];

export default function Gallery() {
  return (
    <section id="galeria" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute -left-24 top-1/3 -z-10 h-96 w-96 rounded-full bg-clay/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-gold-bright">
            <IconSparkle className="h-4 w-4" /> Nuestro mundo
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-white">
            Un lugar para enamorarse del café
          </h2>
          <p className="mt-4 text-mist">
            El salón, la barra, el grano y cada plato. Así se vive Origen todos
            los días.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[11rem] gap-3 sm:gap-4">
          {gallery.map((g, i) => (
            <Reveal
              key={g.photo}
              delay={(i % 4) * 60}
              className={`group relative overflow-hidden rounded-2xl border border-line ${spans[i] ?? "h-44 sm:h-52"}`}
            >
              <Image
                src={img(g.photo, i === 0 ? 1000 : 700)}
                alt={g.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition" />
              <p className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
                {g.alt}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

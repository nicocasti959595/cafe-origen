import Link from "next/link";
import { site } from "@/lib/site";
import { CupLogo, IconArrow } from "./Icons";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-line bg-night/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-3xl px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid place-items-center h-9 w-9 rounded-full bg-gradient-to-br from-gold-bright to-gold-deep text-[#1a1008]">
              <CupLogo className="h-5 w-5" />
            </span>
            <span className="font-display font-bold text-lg text-white tracking-wide">{site.name}</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-mist hover:text-white transition"
          >
            <IconArrow className="h-4 w-4 rotate-180" /> Volver al inicio
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">{title}</h1>
          <p className="mt-2 text-sm text-mist">Última actualización: {updated}</p>
          <div className="mt-10 space-y-6 text-mist leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_a]:text-gold-bright [&_a]:underline [&_a]:underline-offset-2">
            {children}
          </div>
        </div>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-mist">
        © {new Date().getFullYear()} {site.brandFull} ·{" "}
        <a href="https://ideawebx.com" rel="dofollow" className="text-gold-bright underline underline-offset-2">
          IdeaWebX
        </a>
      </footer>
    </div>
  );
}

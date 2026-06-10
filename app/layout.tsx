import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { localBusinessJsonLd, faqJsonLd } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brandFull} — Café de especialidad y brunch en Palermo, CABA`,
    template: `%s | ${site.brandFull}`,
  },
  description:
    "Café de especialidad con tostado propio en Palermo, CABA. Espresso, métodos de filtrado, cold brew, brunch y pastelería artesanal. Pet friendly, Wi-Fi y venta de café en grano. Pedí o reservá tu mesa por WhatsApp.",
  keywords: [
    "café de especialidad Palermo",
    "cafetería Buenos Aires",
    "brunch Palermo",
    "tostado propio café",
    "cold brew CABA",
    "flat white Buenos Aires",
    "café en grano Argentina",
    "coffee shop Palermo",
    "pet friendly café CABA",
  ],
  authors: [{ name: site.brandFull }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.brandFull,
    title: `${site.brandFull} — Café de especialidad y brunch en Palermo`,
    description:
      "Tostamos nuestro propio café y lo servimos como se merece: espresso, métodos, cold brew, brunch y pastelería artesanal en el corazón de Palermo.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brandFull} — Café de especialidad en Palermo`,
    description:
      "Espresso, métodos de filtrado, cold brew, brunch y pastelería artesanal. Tostado propio. Pedí por WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Café",
};

export const viewport: Viewport = {
  themeColor: "#1a1008",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
        />
        {children}
      </body>
    </html>
  );
}

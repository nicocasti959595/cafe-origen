import { site } from "./site";
import { faqs, menu } from "./content";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${site.url}/#business`,
    name: site.brandFull,
    description:
      "Café de especialidad con tostado propio en Palermo, CABA. Espresso, métodos de filtrado, cold brew, brunch y pastelería artesanal. Pet friendly, Wi-Fi, venta de café en grano y coffee catering. Pedí o reservá por WhatsApp.",
    url: site.url,
    telephone: site.phoneRaw,
    email: site.email,
    image: `${site.url}/opengraph-image`,
    servesCuisine: ["Café de especialidad", "Brunch", "Pastelería"],
    priceRange: "$$",
    currenciesAccepted: "ARS",
    paymentAccepted: "Efectivo, Transferencia, Débito, Crédito, QR",
    acceptsReservations: "True",
    areaServed: [{ "@type": "City", name: "Ciudad Autónoma de Buenos Aires" }],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressStreet,
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    hasMenu: {
      "@type": "Menu",
      name: "Carta Origen",
      hasMenuSection: menu.map((sec) => ({
        "@type": "MenuSection",
        name: sec.category,
        hasMenuItem: sec.items.map((it) => ({
          "@type": "MenuItem",
          name: it.name,
          ...(it.desc ? { description: it.desc } : {}),
          offers: { "@type": "Offer", price: it.price.replace(/[^\d]/g, ""), priceCurrency: "ARS" },
        })),
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "612",
    },
    sameAs: [site.instagram, site.facebook],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

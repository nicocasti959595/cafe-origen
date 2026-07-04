// =============================================================
//  DATOS DEL NEGOCIO — editá todo acá para adaptar el sitio.
//  Marca, teléfono, dirección y reseñas son FICTICIOS (demo).
// =============================================================

export const site = {
  name: "Origen",
  legalName: "Origen Café de Especialidad",
  brandFull: "Origen · Café de Especialidad",
  tagline: "Café de especialidad con tostado propio",
  claim:
    "Tostamos nuestro propio café de fincas seleccionadas y lo servimos como se merece. Espresso, métodos de filtrado, cold brew y una cocina rica para acompañar, en un rincón cálido de Palermo.",

  // Contacto (placeholders — reemplazar por los reales)
  phoneDisplay: "+54 9 11 5555-0142",
  phoneRaw: "+5491155550142",
  whatsappRaw: "5491155550142", // sin + ni espacios, para wa.me
  email: "hola@origencafe.com.ar",

  // Ubicación
  city: "Ciudad Autónoma de Buenos Aires",
  region: "Palermo, CABA",
  addressStreet: "Gorriti 4725",
  addressLocality: "Palermo, CABA",
  addressRegion: "Buenos Aires",
  postalCode: "C1414",
  country: "AR",
  geo: { lat: -34.5889, lng: -58.4306 },

  hours: "Lun a Vie de 8 a 20 h · Sáb y Dom de 9 a 21 h",
  bookingNote: "Mesas sin reserva · Reservás para grupos",
  giftNote: "Vendemos nuestro café en grano y molido",

  // Redes (placeholders)
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",

  // SEO
  url: "https://demo-cafeteria-v1.ideawebx.com",
  locale: "es_AR",
};

// Helper de imágenes (Unsplash con transformación)
export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsappRaw}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

export const telLink = `tel:${site.phoneRaw}`;

export const WA_DEFAULT_MSG =
  "Hola Origen 👋 Quería hacer una consulta. ¿Me ayudan?";

export const WA_RESERVA_MSG =
  "Hola Origen 👋 Quiero reservar una mesa. ¿Qué día y horario tienen disponible?";

export const WA_PEDIDO_MSG =
  "Hola Origen 👋 Quiero hacer un pedido para llevar / delivery. ¿Cómo coordinamos?";

export const WA_GRANO_MSG =
  "Hola Origen 👋 Quiero comprar café en grano. ¿Qué orígenes tienen disponibles? ☕";

export const WA_EVENTO_MSG =
  "Hola Origen 👋 Quiero consultar por un evento / catering de café. ¿Me pasan info?";

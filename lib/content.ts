// =============================================================
//  CONTENIDO DE LA WEB — carta, destacados, eventos, FAQ, etc.
//  Todo editable para adaptar el sitio a cada cliente.
//  Precios en ARS, orientativos (demo).
// =============================================================

// ---------- Cafés destacados / de autor (con foto) ----------
export const signatureDrinks: {
  photo: string;
  title: string;
  desc: string;
  price: string;
  tag: string;
}[] = [
  {
    photo: "photo-1442550528053-c431ecb55509",
    title: "Flat White de la casa",
    desc: "Doble ristretto y leche texturizada al punto. Nuestro blend insignia, dulce y sedoso. El que más se pide.",
    price: "$4.200",
    tag: "El más pedido",
  },
  {
    photo: "photo-1559056199-641a0ac8b55e",
    title: "Cold Brew 18 horas",
    desc: "Extracción en frío durante 18 horas. Suave, sin amargor y con notas a chocolate y frutos rojos. Servido con hielo.",
    price: "$5.200",
    tag: "Frío",
  },
  {
    photo: "photo-1525610553991-2bede1a236e2",
    title: "V60 de origen único",
    desc: "Filtrado a mano, taza por taza, con un grano de finca que rota cada semana. Para descubrir el café de verdad.",
    price: "$5.600",
    tag: "De origen",
  },
  {
    photo: "photo-1495474472287-4d71bcdd2085",
    title: "Latte de estación",
    desc: "Nuestro espresso con leche cremosa y un toque de estación: vainilla de Madagascar, dulce de leche o pistacho.",
    price: "$4.800",
    tag: "De autor",
  },
];

// ---------- Carta completa (lista de precios por categoría) ----------
export type MenuIcon = "espresso" | "milk" | "filter" | "cold" | "pastry" | "brunch";

export const menu: {
  icon: MenuIcon;
  category: string;
  note?: string;
  items: { name: string; desc?: string; price: string }[];
}[] = [
  {
    icon: "espresso",
    category: "Espresso & leche",
    note: "Leches vegetales sin cargo extra",
    items: [
      { name: "Espresso / Ristretto", desc: "Simple o doble", price: "$2.800" },
      { name: "Cortado / Lágrima", price: "$3.200" },
      { name: "Capuchino", desc: "Con cacao espolvoreado", price: "$4.300" },
      { name: "Flat White", desc: "Doble shot, leche sedosa", price: "$4.200" },
      { name: "Latte / Latte saborizado", price: "$4.500" },
      { name: "Mocaccino", desc: "Espresso, chocolate y leche", price: "$4.900" },
    ],
  },
  {
    icon: "filter",
    category: "Métodos & filtrados",
    note: "Grano de origen, molido al momento",
    items: [
      { name: "V60", desc: "Filtrado limpio y aromático", price: "$5.600" },
      { name: "Chemex (para compartir)", desc: "Dos tazas", price: "$8.900" },
      { name: "Aeropress", desc: "Cuerpo intenso", price: "$5.400" },
      { name: "Prensa francesa", price: "$5.200" },
      { name: "Café del día (filtrado)", price: "$3.400" },
    ],
  },
  {
    icon: "cold",
    category: "Fríos",
    note: "Ideales para el verano porteño",
    items: [
      { name: "Cold Brew 18 h", desc: "Extracción en frío", price: "$5.200" },
      { name: "Iced Latte", price: "$4.900" },
      { name: "Espresso Tonic", desc: "Espresso, tónica y cítricos", price: "$5.500" },
      { name: "Frappé de café", price: "$5.800" },
      { name: "Limonada de jengibre", price: "$4.200" },
    ],
  },
  {
    icon: "brunch",
    category: "Pastelería & brunch",
    note: "Horneado del día · opciones sin TACC",
    items: [
      { name: "Medialunas (x3)", desc: "De manteca, recién horneadas", price: "$3.600" },
      { name: "Tostado de jamón y queso", desc: "En pan de masa madre", price: "$6.500" },
      { name: "Avocado toast", desc: "Palta, huevo poché y semillas", price: "$8.900" },
      { name: "Banana bread", desc: "Con nueces", price: "$4.200" },
      { name: "Brunch Origen", desc: "Café + jugo + tostadas + huevos + bowl de frutas", price: "$13.900" },
      { name: "Cheesecake de estación", price: "$5.400" },
    ],
  },
];

// ---------- Por qué elegirnos ----------
export const whyUs: {
  icon: "roast" | "origin" | "barista" | "kitchen" | "space" | "togo";
  title: string;
  desc: string;
}[] = [
  { icon: "roast", title: "Tostado propio", desc: "Tostamos cada semana en nuestro tostadero para que el café llegue a tu taza en su punto justo de frescura. Sin escalas ni intermediarios." },
  { icon: "origin", title: "Granos de origen", desc: "Trabajamos con fincas seleccionadas de Colombia, Etiopía y Brasil. Trazabilidad real: sabés de dónde viene cada grano que tomás." },
  { icon: "barista", title: "Baristas que saben", desc: "Nuestro equipo se forma constantemente. Calibramos la molienda y la extracción todos los días para que cada café salga perfecto." },
  { icon: "kitchen", title: "Cocina rica y fresca", desc: "Pastelería horneada en el día y brunch de verdad. Ingredientes frescos, recetas propias y opciones sin TACC y veganas." },
  { icon: "space", title: "Un lugar para quedarse", desc: "Wi-Fi rápido, enchufes en cada mesa, patio interno y buena música. Pet friendly y apto notebook: tu segunda oficina favorita." },
  { icon: "togo", title: "Llevátelo a casa", desc: "Vendemos nuestro café en grano o molido a tu gusto, con suscripción mensual y envío. Tu ritual de cada mañana, también en tu casa." },
];

// ---------- Experiencias / servicios (eventos) ----------
export const experiences: {
  icon: "brunch" | "event" | "cupping" | "catering" | "beans" | "delivery";
  title: string;
  desc: string;
  badge: string;
}[] = [
  { icon: "brunch", title: "Brunch de fin de semana", desc: "Sábados y domingos servimos nuestro brunch completo: café de especialidad, huevos, tostadas, bowls y pastelería. Vení temprano.", badge: "Sáb y Dom" },
  { icon: "event", title: "Eventos privados", desc: "Reservá el salón para tu cumpleaños, reunión o lanzamiento. Armamos una propuesta de café y comida a tu medida.", badge: "Privados" },
  { icon: "cupping", title: "Catas de café", desc: "Una vez por mes abrimos una cata guiada: aprendés a reconocer orígenes, perfiles y métodos. Cupos limitados.", badge: "Mensual" },
  { icon: "catering", title: "Coffee catering", desc: "Llevamos el café de especialidad a tu empresa o evento: barra móvil, barista y todo el equipo. Cotización a medida.", badge: "Empresas" },
  { icon: "beans", title: "Café en grano & suscripción", desc: "Comprá nuestro tostado por bolsa o suscribite y recibilo todos los meses en tu casa, recién tostado.", badge: "Para llevar" },
  { icon: "delivery", title: "Delivery & take away", desc: "Pedí tu café y tu comida para llevar o con envío por la zona. Coordinamos todo rápido por WhatsApp.", badge: "A domicilio" },
];

// ---------- Cómo pedir (pasos) ----------
export const steps: { n: string; title: string; desc: string }[] = [
  { n: "01", title: "Elegís tu café", desc: "Acercate a la barra o escribinos por WhatsApp. Te asesoramos según lo que tengas ganas de tomar ese día." },
  { n: "02", title: "Lo preparamos al momento", desc: "Molemos el grano recién y calibramos la extracción para vos. Cada taza se prepara a pedido, nunca antes." },
  { n: "03", title: "Disfrutás o llevás", desc: "Te quedás en el salón o en el patio, o lo pedís para llevar. Si querés, sumás algo rico de la pastelería." },
  { n: "04", title: "Te llevás el café a casa", desc: "¿Te gustó? Te vendemos el mismo grano en bolsa o te lo mandamos todos los meses con la suscripción." },
];

export const stats: { value: number; suffix: string; label: string; decimals?: number }[] = [
  { value: 8, suffix: "+", label: "años tostando café" },
  { value: 60000, suffix: "+", label: "tazas servidas por año" },
  { value: 12, suffix: "", label: "orígenes en rotación" },
  { value: 4.9, suffix: " ★", label: "valoración media", decimals: 1 },
];

// ---------- Marquee (orígenes y productos) ----------
export const treatmentsMarquee = [
  "Espresso", "Flat White", "Cold Brew", "Método V60", "Brunch", "Medialunas",
  "Etiopía", "Colombia", "Brasil", "Tostado propio", "Café en grano", "Latte de autor",
];

// ---------- Lo que incluye tu visita (banda de amenities) ----------
export const amenities = [
  "Wi-Fi de alta velocidad", "Enchufes en cada mesa", "Pet friendly",
  "Opciones sin TACC", "Leches vegetales", "Patio interno",
  "Apto notebook / coworking", "Café para llevar",
];

// ---------- Galería ----------
export const gallery: { photo: string; alt: string }[] = [
  { photo: "photo-1453614512568-c4024d13c247", alt: "Salón cálido de la cafetería con luz natural" },
  { photo: "photo-1461023058943-07fcbe16d735", alt: "Barista preparando un espresso en la máquina" },
  { photo: "photo-1517433670267-08bbd4be890f", alt: "Pastelería y medialunas recién horneadas" },
  { photo: "photo-1486427944299-d1955d23e34d", alt: "Granos de café de especialidad tostados" },
  { photo: "photo-1521017432531-fbd92d768814", alt: "Latte art servido en taza de cerámica" },
  { photo: "photo-1501339847302-ac426a4a7cbb", alt: "Ambiente del café con gente disfrutando" },
  { photo: "photo-1572442388796-11668a67e53d", alt: "Medialuna y café sobre la mesa" },
  { photo: "photo-1509042239860-f550ce710b93", alt: "Taza de café junto a granos tostados" },
];

export const testimonials: { name: string; area: string; text: string }[] = [
  {
    name: "Valentina R.",
    area: "Palermo",
    text: "El mejor flat white que tomé en Buenos Aires, sin exagerar. Se nota que el café es fresco y que los baristas saben lo que hacen. Encima el lugar es divino para quedarse a trabajar.",
  },
  {
    name: "Martín S.",
    area: "Villa Crespo",
    text: "Voy todos los sábados al brunch. La comida es riquísima, el café de otro nivel y el patio es un golazo. Me llevo siempre una bolsa de grano para casa.",
  },
  {
    name: "Carla M.",
    area: "Belgrano",
    text: "Hice la cata de café y aprendí un montón. Te explican todo con paciencia y onda. Ahora entiendo por qué un café de especialidad es tan distinto. Súper recomendable.",
  },
  {
    name: "Lucía P.",
    area: "Recoleta",
    text: "Pet friendly de verdad: vengo siempre con mi perra y la reciben con agua y mimos. El cold brew es lo más para el calor. Mi cafetería favorita del barrio.",
  },
  {
    name: "Federico G.",
    area: "Caballito",
    text: "Trabajo remoto y este es mi lugar fijo: wifi rápido, enchufes en todas las mesas y café que te mantiene despierto sin que tiemble el pulso. Atención de diez.",
  },
  {
    name: "Sofía D.",
    area: "Palermo Hollywood",
    text: "Pedí el coffee catering para un evento de la oficina y fue un éxito. Vinieron con la barra móvil, un barista y todo. Todos preguntaban de dónde era el café. Volvemos a contratar seguro.",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "¿Necesito reservar mesa?",
    a: "Para el día a día no hace falta: venís y te sentás donde haya lugar. Sí te recomendamos reservar si venís en grupo (más de 6 personas), para el brunch de fin de semana en horario pico o si querés asegurarte una mesa para trabajar. Reservar es tan simple como escribirnos por WhatsApp y te confirmamos al toque.",
  },
  {
    q: "¿Qué café usan y puedo comprarlo para casa?",
    a: "Tostamos nuestro propio café de especialidad cada semana, con granos de fincas seleccionadas de Colombia, Etiopía y Brasil que vamos rotando. Sí, podés llevarte el mismo café que tomás acá: lo vendemos en grano o molido a tu gusto, en bolsas de 250 g y 1 kg. También tenemos una suscripción mensual con envío para que no te quedes nunca sin café.",
  },
  {
    q: "¿Tienen opciones sin TACC, veganas o leches vegetales?",
    a: "Sí. Trabajamos con leches vegetales (almendras, avena y coco) sin cargo extra en cualquier café. En la pastelería y el brunch siempre hay opciones sin TACC y veganas marcadas en la carta. Si tenés alguna restricción puntual, avisanos y te ayudamos a elegir.",
  },
  {
    q: "¿Hacen delivery y take away?",
    a: "Sí. Podés pedir tu café y tu comida para llevar en el local, o con envío por la zona de Palermo y alrededores. La forma más rápida de coordinar un pedido es por WhatsApp: nos escribís, armás tu pedido y te decimos el tiempo de entrega.",
  },
  {
    q: "¿Puedo trabajar o estudiar con la notebook?",
    a: "¡Claro! Somos apto notebook: tenemos Wi-Fi de alta velocidad, enchufes en cada mesa y un ambiente tranquilo, sobre todo a la mañana y a media tarde. Te pedimos solo consumir algo cada tanto y, en los horarios de mayor demanda (mediodía y fines de semana), liberar la mesa si hay gente esperando.",
  },
  {
    q: "¿Organizan eventos o catering de café?",
    a: "Sí. Podés reservar nuestro salón para eventos privados (cumpleaños, reuniones, lanzamientos) y armamos una propuesta de café y comida a medida. También ofrecemos coffee catering para empresas y eventos, con barra móvil y barista incluido. Escribinos contándonos fecha, lugar y cantidad de personas y te pasamos un presupuesto.",
  },
  {
    q: "¿Dónde están y cómo llego?",
    a: "Estamos en Gorriti 4725, Palermo, CABA, a pocas cuadras del subte y con varias líneas de colectivo cerca. Hay estacionamiento medido en la zona. Apenas nos escribís te pasamos la ubicación exacta y cómo llegar sin perderte.",
  },
];

// ---------- Barrios cercanos (sección de ubicación) ----------
export const nearby = [
  "Palermo Soho", "Palermo Hollywood", "Villa Crespo", "Chacarita",
  "Colegiales", "Belgrano", "Recoleta", "Las Cañitas",
];

import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/* ---------- Logo: taza de café con vapor ---------- */
export function CupLogo(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 2.6c-.7.8-.7 1.6 0 2.4s.7 1.6 0 2.4" />
      <path d="M13 2.6c-.7.8-.7 1.6 0 2.4s.7 1.6 0 2.4" />
      <path d="M4 10.4h12.5V14a5.4 5.4 0 0 1-5.4 5.4H9.4A5.4 5.4 0 0 1 4 14z" />
      <path d="M16.5 11.5h1.7a2.4 2.4 0 0 1 0 4.8h-.6" />
      <path d="M3 21.6h14.5" />
    </svg>
  );
}

/* ---------- Carta ---------- */
export function IconEspresso(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 9h9v3.4A4 4 0 0 1 10 16.4H9A4 4 0 0 1 5 12.4z" />
      <path d="M14 9.6h1.5a2 2 0 0 1 0 4H14" />
      <path d="M4 19.2h11" />
      <path d="M8 4.6c-.6.6-.6 1.1 0 1.7M11 4.6c-.6.6-.6 1.1 0 1.7" />
    </svg>
  );
}

export function IconMilk(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 8h7l-.9 9.7a2 2 0 0 1-2 1.8H9.4a2 2 0 0 1-2-1.8z" />
      <path d="M13.5 9.6 17 8l-.6 4.2-2.7.5" />
      <path d="M6.5 8 7 5.5h6L13.5 8" />
    </svg>
  );
}

export function IconFilter(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 5.5h15l-6 7.2h-3z" />
      <path d="M9 16.6h6V19a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      <path d="M10.6 12.7v3.6M13.4 12.7v3.6" />
    </svg>
  );
}

export function IconCold(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M6.6 7.5h10.8l-1.1 11.6a1.7 1.7 0 0 1-1.7 1.5H9.4a1.7 1.7 0 0 1-1.7-1.5z" />
      <path d="M7.4 11.5h9.2" />
      <path d="M15 4 10.6 13" />
    </svg>
  );
}

export function IconPastry(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M4 16c1.8-5 5-7.5 8-7.5s6.2 2.5 8 7.5c-2.2.9-4.2.4-5.8-1.3-1.6 1.7-3.6 2.2-5.2.6-1.6 1.5-3.6 1.1-5-.8" />
      <path d="M12 8.5V5.5" />
    </svg>
  );
}

export function IconBrunch(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5c3.4 0 5.4 1.9 5.4 4.4 0 1.5-.9 2.5-2.2 3.1 1.1 1 1.3 2.9.2 4-1.4 1.4-3.9 1.4-5.2 0-1.1-1.1-.9-3 .2-4C9.3 11.9 8.4 10.9 8.4 9.4 8.4 6.9 8.6 5 12 5z" />
      <circle cx="12" cy="10.3" r="1.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ---------- Por qué elegirnos ---------- */
export function IconRoast(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c3 2.9 4.9 5.8 4.9 8.8a4.9 4.9 0 0 1-9.8 0c0-1.5.7-3 1.9-4.4.4 1 1 1.6 1.8 1.8C10 7 10.6 5 12 3z" />
    </svg>
  );
}

export function IconOrigin(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <path d="M12 12.5c0-1.7-.9-3-2.4-3.6M12 12.5c0-1.7.9-3 2.4-3.6M12 12.5V7.4" />
    </svg>
  );
}

export function IconBarista(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="6.6" r="3" />
      <path d="M5.6 20a6.4 6.4 0 0 1 12.8 0" />
      <path d="M9.2 12.6 8.6 20M14.8 12.6l.6 7.4" />
    </svg>
  );
}

export function IconKitchen(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3v8M6 3v4a2 2 0 0 0 4 0V3M8 11v10" />
      <path d="M16 3c-1.5 0-2.4 2-2.4 4.8 0 1.8 1 2.6 2 2.9V21" />
    </svg>
  );
}

export function IconSpace(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 11V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
      <path d="M4 11a2 2 0 0 1 2 2v2h12v-2a2 2 0 0 1 4 0v4H2v-4a2 2 0 0 1 2-2z" />
      <path d="M6.5 19v1.6M17.5 19v1.6" />
    </svg>
  );
}

export function IconTogo(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M7 8.4h10l-1 11a1.6 1.6 0 0 1-1.6 1.5H9.6A1.6 1.6 0 0 1 8 19.4z" />
      <path d="M5.6 8.4h12.8l-.5-2.6H6.1z" />
      <path d="M10 12.4h4" />
    </svg>
  );
}

/* ---------- Experiencias / eventos ---------- */
export function IconEvent(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.4" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3.5v3M16 3.5v3" />
      <path d="m12 12.4.95 1.9 2.1.3-1.5 1.5.35 2.1-1.9-1-1.9 1 .35-2.1-1.5-1.5 2.1-.3z" />
    </svg>
  );
}

export function IconCupping(props: P) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="9" cy="7" rx="3.1" ry="4" />
      <path d="M9 11v9.4" />
      <path d="M15.5 4.5c-.6.7-.6 1.4 0 2.1s.6 1.4 0 2.1M18.5 4.5c-.6.7-.6 1.4 0 2.1s.6 1.4 0 2.1" />
    </svg>
  );
}

export function IconCatering(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="7.5" width="17" height="11" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M3.5 12.6h17" />
      <path d="M12 11.6v2" />
    </svg>
  );
}

export function IconBeans(props: P) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="9" cy="9.5" rx="3.3" ry="4.5" transform="rotate(-28 9 9.5)" />
      <path d="M8.1 6c1.4 1.6 1.2 5.3-.4 7" />
      <ellipse cx="15" cy="14.5" rx="3.3" ry="4.5" transform="rotate(-28 15 14.5)" />
      <path d="M14.1 11c1.4 1.6 1.2 5.3-.4 7" />
    </svg>
  );
}

export function IconDelivery(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M6 8.5h12l-1 11a1.8 1.8 0 0 1-1.8 1.6H8.8A1.8 1.8 0 0 1 7 19.5z" />
      <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" />
      <path d="M9.5 12.5h5" />
    </svg>
  );
}

/* ---------- Genéricos ---------- */
export function IconLeaf(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19C4 12 8 5 19 5c0 11-7 15-14 14z" />
      <path d="M9 15c2-3 5-5 8-6" />
    </svg>
  );
}

export function IconWifi(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 8.5a14 14 0 0 1 19 0" />
      <path d="M5.5 11.8a9.5 9.5 0 0 1 13 0" />
      <path d="M8.5 15a5 5 0 0 1 7 0" />
      <circle cx="12" cy="18.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconSparkle(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l1.8 5.6L19.5 9.4 13.8 11.2 12 16.8l-1.8-5.6L4.5 9.4l5.7-1.8z" />
    </svg>
  );
}

export function IconPhone(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
    </svg>
  );
}

export function IconWhatsApp(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.16 8.16 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.25 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

export function IconArrow(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export function IconStar(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.9 6.2 20.95l1.1-6.5-4.7-4.6 6.5-.95z" />
    </svg>
  );
}

export function IconClock(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconMap(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function IconHeart(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20.5s-7-4.5-7-10A4.2 4.2 0 0 1 12 7.8 4.2 4.2 0 0 1 19 10.5c0 5.5-7 10-7 10z" />
    </svg>
  );
}

export function IconGift(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="3.6" y="9" width="16.8" height="11" rx="1.6" />
      <path d="M3.6 13h16.8M12 9v11" />
      <path d="M12 9c-1.4 0-3.4-.3-4.2-1.4-.6-.9-.2-2.1.9-2.4C10.4 4.7 12 9 12 9z" />
      <path d="M12 9c1.4 0 3.4-.3 4.2-1.4.6-.9.2-2.1-.9-2.4C13.6 4.7 12 9 12 9z" />
    </svg>
  );
}

export const iconMap = {
  // carta
  espresso: IconEspresso,
  milk: IconMilk,
  filter: IconFilter,
  cold: IconCold,
  pastry: IconPastry,
  brunch: IconBrunch,
  // por qué elegirnos
  roast: IconRoast,
  origin: IconOrigin,
  barista: IconBarista,
  kitchen: IconKitchen,
  space: IconSpace,
  togo: IconTogo,
  // experiencias / eventos
  event: IconEvent,
  cupping: IconCupping,
  catering: IconCatering,
  beans: IconBeans,
  delivery: IconDelivery,
} as const;

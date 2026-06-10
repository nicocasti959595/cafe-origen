import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.brandFull,
    short_name: site.name,
    description: "Café de especialidad y brunch en Palermo, CABA. Pedí por WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#1a1008",
    theme_color: "#1a1008",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}

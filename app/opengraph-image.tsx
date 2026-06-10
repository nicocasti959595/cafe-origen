import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.brandFull} — Café de especialidad en Palermo, CABA`;

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(1100px 520px at 85% -10%, rgba(216,165,89,0.34), transparent 60%), linear-gradient(135deg, #1a1008 0%, #120b06 100%)",
          color: "#f7ecdc",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 78,
              height: 78,
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #f2cb88, #b27d39)",
            }}
          >
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#1a1008" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 2.6c-.7.8-.7 1.6 0 2.4s.7 1.6 0 2.4" />
              <path d="M13 2.6c-.7.8-.7 1.6 0 2.4s.7 1.6 0 2.4" />
              <path d="M4 10.4h12.5V14a5.4 5.4 0 0 1-5.4 5.4H9.4A5.4 5.4 0 0 1 4 14z" />
              <path d="M16.5 11.5h1.7a2.4 2.4 0 0 1 0 4.8h-.6" />
              <path d="M3 21.6h14.5" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 700 }}>{site.name}</span>
            <span style={{ fontSize: 17, color: "#d8a559", letterSpacing: 6 }}>
              CAFÉ DE ESPECIALIDAD
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(216,165,89,0.18)",
              border: "1px solid rgba(216,165,89,0.5)",
              color: "#f2cb88",
              padding: "8px 18px",
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 600,
              alignSelf: "flex-start",
              fontFamily: "sans-serif",
            }}
          >
            <span style={{ width: 12, height: 12, borderRadius: 999, background: "#d8a559", display: "flex" }} />
            PALERMO, CABA · TOSTADO PROPIO
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0 18px",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            <span>El café como</span>
            <span style={{ color: "#d8a559" }}>tiene que ser</span>
          </div>
          <div style={{ display: "flex", fontSize: 29, color: "#cab497", maxWidth: 980, fontFamily: "sans-serif" }}>
            Espresso · Métodos · Cold Brew · Brunch · Pastelería · Café en grano
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "sans-serif" }}>
          <span style={{ fontSize: 30, fontWeight: 700, color: "#d8a559" }}>
            {site.phoneDisplay}
          </span>
          <span style={{ display: "flex", fontSize: 22, color: "#cab497" }}>
            Tostado propio · 8+ años
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}

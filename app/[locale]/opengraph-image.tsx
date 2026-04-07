import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Edu learning & Immersion";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #003B2D 0%, #0D883C 100%)",
        padding: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 54,
          fontWeight: 700,
          color: "white",
          lineHeight: 1.2,
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Edu learning &amp; Immersion
      </div>
      <div
        style={{
          fontSize: 28,
          color: "rgba(255,255,255,0.8)",
          textAlign: "center",
          maxWidth: "800px",
          lineHeight: 1.5,
        }}
      >
        Bridging Languages and Cultures for Global Collaboration
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            padding: "10px 24px",
            borderRadius: "40px",
            background: "rgba(255,255,255,0.15)",
            color: "white",
            fontSize: 18,
          }}
        >
          English
        </div>
        <div
          style={{
            padding: "10px 24px",
            borderRadius: "40px",
            background: "rgba(255,255,255,0.15)",
            color: "white",
            fontSize: 18,
          }}
        >
          French
        </div>
        <div
          style={{
            padding: "10px 24px",
            borderRadius: "40px",
            background: "rgba(255,255,255,0.15)",
            color: "white",
            fontSize: 18,
          }}
        >
          German
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          fontSize: 16,
          color: "rgba(255,255,255,0.5)",
        }}
      >
        contact@edulearningimmersion.org
      </div>
    </div>,
    { ...size },
  );
}

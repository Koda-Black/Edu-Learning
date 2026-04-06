import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Edu learning & Immersion";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
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
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontSize: 54,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.2,
            }}
          >
            Edu{" "}
            <span style={{ color: "#A5F3C1" }}>learning</span>
            {" & "}
            <span style={{ color: "#A5F3C1" }}>Immersion</span>
          </div>
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
          {["English", "French", "German"].map((lang) => (
            <div
              key={lang}
              style={{
                padding: "10px 24px",
                borderRadius: "40px",
                background: "rgba(255,255,255,0.15)",
                color: "white",
                fontSize: 18,
              }}
            >
              {lang}
            </div>
          ))}
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
      </div>
    ),
    { ...size },
  );
}

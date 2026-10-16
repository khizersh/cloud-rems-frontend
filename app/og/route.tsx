import { ImageResponse } from "next/og";

// Placeholder social sharing image; replace with designed artwork when available.
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0b1f3a 0%, #12305a 60%, #0f766e 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 700, color: "#5eead4", display: "flex" }}>
          CloudREMS
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 24, lineHeight: 1.1, display: "flex" }}>
          Cloud-Based Real Estate ERP
        </div>
        <div style={{ fontSize: 32, marginTop: 28, color: "#cbd5e1", display: "flex" }}>
          Manage Properties. Simplify Operations. Grow Smarter.
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

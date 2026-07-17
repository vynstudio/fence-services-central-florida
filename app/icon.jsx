import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** High-contrast brand favicon generated at request/build time. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#124137",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            color: "#ffffff",
            fontSize: 18,
            fontWeight: 800,
            fontFamily: "system-ui, sans-serif",
            letterSpacing: -0.5,
            lineHeight: 1,
          }}
        >
          <span style={{ fontSize: 16, opacity: 0.95 }}>‖</span>
          <span>F</span>
        </div>
      </div>
    ),
    { ...size },
  );
}

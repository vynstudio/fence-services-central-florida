/**
 * Shared Open Graph / Twitter share card (1200×630).
 * Satori rule: every element with >1 child needs display: "flex" | "none".
 *
 * Logo: public/logo/og-logo.png → auto-picked by opengraph-image.jsx
 */

export const OG_SIZE = { width: 1200, height: 630 };

export const OG_ALT =
  "FenceLine Florida — fence installation and repair from Jacksonville to Tampa";

const chip = (label) => (
  <div
    key={label}
    style={{
      display: "flex",
      padding: "12px 18px",
      border: "1px solid rgba(255,255,255,0.18)",
      background: "rgba(255,255,255,0.05)",
      fontSize: 18,
      fontWeight: 600,
      color: "rgba(255,255,255,0.85)",
    }}
  >
    {label}
  </div>
);

export function OgCard({ logoSrc = null }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0a",
        color: "#ffffff",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft brand glow (left) */}
      <div
        style={{
          position: "absolute",
          top: -80,
          left: -60,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(18,65,55,0.55) 0%, transparent 68%)",
          display: "flex",
        }}
      />
      {/* Soft brand glow (right) */}
      <div
        style={{
          position: "absolute",
          bottom: -120,
          right: -40,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(18,65,55,0.28) 0%, transparent 70%)",
          display: "flex",
        }}
      />
      {/* Fence-post rhythm */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.07,
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0, transparent 47px, rgba(255,255,255,0.95) 47px, rgba(255,255,255,0.95) 48px)",
          display: "flex",
        }}
      />
      {/* True line accent */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 290,
          height: 2,
          background:
            "linear-gradient(90deg, transparent 0%, #124137 35%, #124137 65%, transparent 100%)",
          display: "flex",
        }}
      />

      {/* Top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "48px 64px 0",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          {logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoSrc}
              width={280}
              height={64}
              alt="Fence Line"
              style={{
                width: 280,
                height: 64,
                objectFit: "contain",
                objectPosition: "left center",
              }}
            />
          ) : (
            <div
              style={{
                display: "flex",
                fontSize: 32,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#ffffff",
              }}
            >
              FENCE LINE
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 600,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "0.02em",
          }}
        >
          fencelineflorida.com
        </div>
      </div>

      {/* Main copy */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 64px",
          position: "relative",
          gap: 18,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#3ECF8E",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#3ECF8E",
              display: "flex",
            }}
          />
          <div style={{ display: "flex" }}>Straight lines. Strong fences.</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 58,
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1.08,
            color: "#ffffff",
            maxWidth: 920,
          }}
        >
          <div style={{ display: "flex" }}>Fence install & repair</div>
          <div style={{ display: "flex", color: "rgba(255,255,255,0.42)" }}>
            in Central Florida
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 500,
            lineHeight: 1.35,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 820,
          }}
        >
          Wood · Vinyl · Aluminum · Chain link — free quotes across Central &amp;
          North Florida
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 64px 48px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", gap: 12 }}>
          {["Install", "Repair", "HOA & permits", "Storm-ready"].map(chip)}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 18,
            fontWeight: 600,
            color: "rgba(255,255,255,0.45)",
          }}
        >
          DBA of Diler Dynamics Group LLC
        </div>
      </div>
    </div>
  );
}

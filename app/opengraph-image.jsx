import { ImageResponse } from "next/og";
import { OgCard, OG_SIZE, OG_ALT } from "@/lib/og-card";
import { SITE } from "@/lib/site";
import { existsSync } from "fs";
import { join } from "path";
import { readFile } from "fs/promises";

export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = "image/png";

/**
 * Share card for iMessage, WhatsApp, Slack, Facebook, LinkedIn, etc.
 * Logo: drop transparent PNG at public/logo/og-logo.png (recommended ~400px wide).
 */
export default async function OpenGraphImage() {
  let logoSrc = null;

  try {
    const logoPath = join(process.cwd(), "public", "logo", "og-logo.png");
    if (existsSync(logoPath)) {
      const bytes = await readFile(logoPath);
      const b64 = Buffer.from(bytes).toString("base64");
      logoSrc = `data:image/png;base64,${b64}`;
    }
  } catch {
    // Fall back to geometric mark + wordmark
  }

  return new ImageResponse(<OgCard logoSrc={logoSrc} />, {
    ...OG_SIZE,
    headers: {
      "Cache-Control": "public, immutable, no-transform, max-age=3600",
    },
  });
}

// Silence unused import if tree-shaken oddly in some builds
void SITE;

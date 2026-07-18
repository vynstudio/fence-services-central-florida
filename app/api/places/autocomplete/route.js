import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function mapsKey() {
  // Prefer server-only key (no HTTP referrer restriction).
  // Falls back to public key if unrestricted.
  return (
    process.env.GOOGLE_MAPS_API_KEY ||
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
    ""
  );
}

/**
 * GET /api/places/autocomplete?q=10775+Hobbit
 * Proxies Google Places so the browser never loads Maps JS.
 */
export async function GET(request) {
  const key = mapsKey();
  if (!key) {
    return NextResponse.json(
      { error: "Maps API key not configured", predictions: [] },
      { status: 503 },
    );
  }

  const q = (request.nextUrl.searchParams.get("q") || "").trim();
  if (q.length < 3) {
    return NextResponse.json({ predictions: [] });
  }

  // 1) Places API (New)
  try {
    const res = await fetch("https://places.googleapis.com/v1/places:autocomplete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": key,
      },
      body: JSON.stringify({
        input: q,
        includedRegionCodes: ["us"],
        locationBias: {
          rectangle: {
            low: { latitude: 26.5, longitude: -83.0 },
            high: { latitude: 30.9, longitude: -80.0 },
          },
        },
      }),
    });

    const data = await res.json().catch(() => ({}));
    if (res.ok && Array.isArray(data.suggestions)) {
      const predictions = data.suggestions
        .map((s) => {
          const p = s.placePrediction;
          if (!p) return null;
          return {
            placeId: p.placeId,
            description:
              p.text?.text ||
              p.structuredFormat?.mainText?.text ||
              "",
            mainText: p.structuredFormat?.mainText?.text || "",
            secondaryText: p.structuredFormat?.secondaryText?.text || "",
          };
        })
        .filter((p) => p?.placeId && p.description);

      return NextResponse.json({ predictions, source: "places-new" });
    }

    // Fall through to legacy if New API not enabled
    if (data.error) {
      console.warn("places new autocomplete", data.error?.status, data.error?.message);
    }
  } catch (err) {
    console.warn("places new autocomplete threw", err.message);
  }

  // 2) Legacy Places Autocomplete
  try {
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/autocomplete/json",
    );
    url.searchParams.set("input", q);
    url.searchParams.set("key", key);
    url.searchParams.set("components", "country:us");
    url.searchParams.set("types", "address");
    url.searchParams.set("location", "28.5383,-81.3792"); // Orlando bias
    url.searchParams.set("radius", "250000");

    const res = await fetch(url.toString());
    const data = await res.json();

    if (data.status === "OK" || data.status === "ZERO_RESULTS") {
      const predictions = (data.predictions || []).map((p) => ({
        placeId: p.place_id,
        description: p.description,
        mainText: p.structured_formatting?.main_text || p.description,
        secondaryText: p.structured_formatting?.secondary_text || "",
      }));
      return NextResponse.json({ predictions, source: "places-legacy" });
    }

    console.warn("places legacy autocomplete", data.status, data.error_message);
    const msg = data.error_message || data.status || "Address search denied";
    const isReferrer =
      /referer|referrer/i.test(msg) || data.status === "REQUEST_DENIED";
    return NextResponse.json(
      {
        predictions: [],
        error: isReferrer
          ? "API key has HTTP referrer restrictions. Add a server key (Application restriction: None) as GOOGLE_MAPS_API_KEY with Places API enabled."
          : msg,
        source: "places-legacy",
      },
      { status: data.status === "REQUEST_DENIED" ? 403 : 200 },
    );
  } catch (err) {
    console.error("places autocomplete error", err);
    return NextResponse.json(
      { predictions: [], error: "Address search failed" },
      { status: 500 },
    );
  }
}

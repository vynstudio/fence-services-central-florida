import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function mapsKey() {
  return (
    process.env.GOOGLE_MAPS_API_KEY ||
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
    ""
  );
}

function parseNewComponents(components = []) {
  const get = (type, short = false) => {
    const c = components.find((x) => (x.types || []).includes(type));
    if (!c) return "";
    return short ? c.shortText || c.short_name || "" : c.longText || c.long_name || "";
  };

  const streetNumber = get("street_number");
  const route = get("route");
  const street = [streetNumber, route].filter(Boolean).join(" ").trim();
  const city =
    get("locality") ||
    get("sublocality") ||
    get("neighborhood") ||
    get("administrative_area_level_3") ||
    "";
  const state = get("administrative_area_level_1", true);
  const zip = get("postal_code");
  const county = get("administrative_area_level_2");

  return { street, city, state: state || "FL", zip, county };
}

function parseLegacyComponents(components = []) {
  const get = (type, short = false) => {
    const c = components.find((x) => (x.types || []).includes(type));
    if (!c) return "";
    return short ? c.short_name : c.long_name;
  };

  const street = [get("street_number"), get("route")].filter(Boolean).join(" ").trim();
  const city =
    get("locality") ||
    get("sublocality") ||
    get("neighborhood") ||
    get("administrative_area_level_3") ||
    "";
  return {
    street,
    city,
    state: get("administrative_area_level_1", true) || "FL",
    zip: get("postal_code"),
    county: get("administrative_area_level_2"),
  };
}

/**
 * GET /api/places/details?placeId=...
 */
export async function GET(request) {
  const key = mapsKey();
  if (!key) {
    return NextResponse.json({ error: "Maps API key not configured" }, { status: 503 });
  }

  let placeId = (request.nextUrl.searchParams.get("placeId") || "").trim();
  if (!placeId) {
    return NextResponse.json({ error: "placeId required" }, { status: 400 });
  }

  // Places API (New) ids sometimes come as "places/ChIJ..."
  const newId = placeId.startsWith("places/") ? placeId : `places/${placeId}`;
  const rawId = placeId.replace(/^places\//, "");

  // 1) Places API (New)
  try {
    const res = await fetch(`https://places.googleapis.com/v1/${newId}`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask":
          "id,formattedAddress,addressComponents,location,displayName",
      },
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && (data.formattedAddress || data.addressComponents)) {
      const parsed = parseNewComponents(data.addressComponents || []);
      return NextResponse.json({
        street: parsed.street || data.displayName?.text || "",
        city: parsed.city,
        state: parsed.state,
        zip: parsed.zip,
        county: parsed.county,
        formattedAddress: data.formattedAddress || "",
        placeId: rawId,
        lat: data.location?.latitude ?? null,
        lng: data.location?.longitude ?? null,
        source: "places-new",
      });
    }
    if (data.error) {
      console.warn("places new details", data.error?.status, data.error?.message);
    }
  } catch (err) {
    console.warn("places new details threw", err.message);
  }

  // 2) Legacy Place Details
  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", rawId);
    url.searchParams.set("key", key);
    url.searchParams.set(
      "fields",
      "address_component,formatted_address,geometry,name,place_id",
    );

    const res = await fetch(url.toString());
    const data = await res.json();
    if (data.status === "OK" && data.result) {
      const r = data.result;
      const parsed = parseLegacyComponents(r.address_components || []);
      return NextResponse.json({
        street: parsed.street || r.name || "",
        city: parsed.city,
        state: parsed.state,
        zip: parsed.zip,
        county: parsed.county,
        formattedAddress: r.formatted_address || "",
        placeId: r.place_id || rawId,
        lat: r.geometry?.location?.lat ?? null,
        lng: r.geometry?.location?.lng ?? null,
        source: "places-legacy",
      });
    }

    return NextResponse.json(
      { error: data.error_message || data.status || "Place not found" },
      { status: 404 },
    );
  } catch (err) {
    console.error("places details error", err);
    return NextResponse.json({ error: "Place details failed" }, { status: 500 });
  }
}

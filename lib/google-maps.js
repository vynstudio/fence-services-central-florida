/**
 * Load Google Maps JS API (Places) once in the browser.
 * Requires NEXT_PUBLIC_GOOGLE_MAPS_API_KEY with Places API enabled.
 */

const SCRIPT_ID = "google-maps-places";

let loadPromise = null;

export function getGoogleMapsKey() {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
}

export function loadGoogleMapsPlaces() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("window unavailable"));
  }

  if (window.google?.maps?.places) {
    return Promise.resolve(window.google);
  }

  if (loadPromise) return loadPromise;

  const key = getGoogleMapsKey();
  if (!key) {
    return Promise.reject(new Error("Missing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"));
  }

  loadPromise = new Promise((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      existing.addEventListener("load", () => resolve(window.google));
      existing.addEventListener("error", () =>
        reject(new Error("Google Maps failed to load")),
      );
      // Already loading / loaded
      if (window.google?.maps?.places) resolve(window.google);
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&libraries=places&v=weekly`;
    script.onload = () => {
      if (window.google?.maps?.places) resolve(window.google);
      else reject(new Error("Places library missing"));
    };
    script.onerror = () => {
      loadPromise = null;
      reject(new Error("Google Maps script error"));
    };
    document.head.appendChild(script);
  });

  return loadPromise;
}

/**
 * Parse Google Place result into form fields.
 */
export function parsePlaceAddress(place) {
  const components = place?.address_components || [];
  const get = (type, useShort = false) => {
    const c = components.find((x) => x.types.includes(type));
    if (!c) return "";
    return useShort ? c.short_name : c.long_name;
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

  const lat = place.geometry?.location?.lat?.();
  const lng = place.geometry?.location?.lng?.();

  return {
    street: street || place.name || "",
    city,
    state: state || "FL",
    zip,
    county,
    formattedAddress: place.formatted_address || "",
    placeId: place.place_id || "",
    lat: typeof lat === "number" ? lat : null,
    lng: typeof lng === "number" ? lng : null,
  };
}

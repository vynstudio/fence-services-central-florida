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
    const fail = (msg) => {
      loadPromise = null;
      reject(new Error(msg));
    };

    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      existing.addEventListener("load", () => {
        if (window.google?.maps?.places) resolve(window.google);
        else fail("Places library missing after load");
      });
      existing.addEventListener("error", () => fail("Google Maps failed to load"));
      if (window.google?.maps?.places) resolve(window.google);
      return;
    }

    // Surface Google auth/billing/API errors instead of a bare browser alert only
    const prev = window.gm_authFailure;
    window.gm_authFailure = () => {
      try {
        prev?.();
      } catch {
        /* ignore */
      }
      fail(
        "Google Maps auth failed — enable Maps JavaScript API + Places API and billing on the Cloud project",
      );
    };

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.defer = true;
    // loading=async is recommended; places library for Autocomplete
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&libraries=places&v=weekly&loading=async`;
    script.onload = () => {
      // Auth failures often still "load" the script; wait a tick for places
      window.setTimeout(() => {
        if (window.google?.maps?.places) resolve(window.google);
        else
          fail(
            "Places not available — enable Places API (and Maps JavaScript API) in Google Cloud",
          );
      }, 50);
    };
    script.onerror = () => fail("Google Maps script network error");
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

"use client";

import { Label } from "@relume_io/relume-ui";
import { getGoogleMapsKey, loadGoogleMapsPlaces, parsePlaceAddress } from "@/lib/google-maps";
import React, { useEffect, useId, useRef, useState } from "react";

const inputClass =
  "flex w-full min-h-12 border border-border-primary bg-background-primary px-3 py-2 text-base text-text-primary outline-none transition placeholder:text-text-secondary focus:border-brand-accent focus:ring-1 focus:ring-brand-accent disabled:cursor-not-allowed disabled:opacity-50";

/**
 * Google Places address search for Florida projects.
 * Falls back to plain text if Maps key is missing.
 */
export function AddressAutocomplete({
  value = "",
  onPlace,
  onInputChange,
  disabled = false,
  autoFocus = false,
}) {
  const inputId = useId();
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const [mapsReady, setMapsReady] = useState(false);
  const [mapsError, setMapsError] = useState("");
  const hasKey = Boolean(getGoogleMapsKey());

  useEffect(() => {
    if (!hasKey) {
      setMapsError("manual");
      return;
    }

    let cancelled = false;
    loadGoogleMapsPlaces()
      .then((google) => {
        if (cancelled || !inputRef.current) return;
        if (autocompleteRef.current) return;

        const ac = new google.maps.places.Autocomplete(inputRef.current, {
          fields: [
            "address_components",
            "formatted_address",
            "geometry",
            "name",
            "place_id",
          ],
          componentRestrictions: { country: "us" },
          types: ["address"],
        });

        try {
          const bounds = new google.maps.LatLngBounds(
            { lat: 26.5, lng: -83.0 },
            { lat: 30.8, lng: -80.0 },
          );
          ac.setBounds(bounds);
        } catch {
          /* optional bias */
        }

        ac.addListener("place_changed", () => {
          const place = ac.getPlace();
          if (!place?.address_components) return;
          onPlace?.(parsePlaceAddress(place));
        });

        autocompleteRef.current = ac;
        setMapsReady(true);
      })
      .catch((err) => {
        console.warn("Google Places unavailable", err);
        if (!cancelled) setMapsError(err.message || "maps-error");
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasKey]);

  useEffect(() => {
    const styleId = "gmaps-pac-z";
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .pac-container {
        z-index: 10050 !important;
        border-radius: 2px;
        border: 1px solid #c9d5cf;
        box-shadow: 0 12px 32px -12px rgba(15, 36, 31, 0.35);
        font-family: inherit;
      }
      .pac-item { padding: 8px 12px; cursor: pointer; }
      .pac-item:hover { background: #f3f7f5; }
      .pac-item-query { font-weight: 600; color: #0f241f; }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="grid gap-2">
      <Label htmlFor={inputId} className="mb-0">
        Project address
      </Label>
      <input
        ref={inputRef}
        id={inputId}
        name="address-search"
        type="text"
        autoComplete="off"
        autoFocus={autoFocus}
        disabled={disabled}
        placeholder={
          hasKey
            ? "Start typing — select your full address"
            : "123 Main St, Orlando, FL 32801"
        }
        value={value}
        onChange={(e) => onInputChange?.(e.target.value)}
        className={inputClass}
        aria-describedby={`${inputId}-hint`}
      />
      <p id={`${inputId}-hint`} className="text-xs text-text-secondary">
        {hasKey && mapsReady && "Google Maps · pick your address from the list"}
        {hasKey && !mapsReady && !mapsError && "Loading address search…"}
        {!hasKey && "Type your full street address"}
        {hasKey && mapsError && mapsError !== "manual" && (
          <span className="text-amber-800">
            Address search unavailable (enable Maps JavaScript API + Places API
            and billing in Google Cloud). Use manual entry below.
          </span>
        )}
      </p>
    </div>
  );
}

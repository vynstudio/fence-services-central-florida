"use client";

import { Label } from "@relume_io/relume-ui";
import React, { useEffect, useId, useRef, useState } from "react";

const inputClass =
  "flex w-full min-h-12 border border-border-primary bg-background-primary px-3 py-2 text-base text-text-primary outline-none transition placeholder:text-text-secondary focus:border-brand-accent focus:ring-1 focus:ring-brand-accent disabled:cursor-not-allowed disabled:opacity-50";

/**
 * Address search via our /api/places proxy (no Maps JS widget).
 * Works with Places API (New) or legacy Places when enabled + billing on.
 */
export function AddressAutocomplete({
  value = "",
  onPlace,
  onInputChange,
  disabled = false,
  autoFocus = false,
}) {
  const inputId = useId();
  const wrapRef = useRef(null);
  const [query, setQuery] = useState(value);
  const [preds, setPreds] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [active, setActive] = useState(-1);
  const debounceRef = useRef(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    const q = query.trim();
    if (q.length < 3) {
      setPreds([]);
      setError("");
      setLoading(false);
      return;
    }

    setLoading(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/places/autocomplete?q=${encodeURIComponent(q)}`,
        );
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          setPreds([]);
          setError(
            data.error ||
              "Address search unavailable — use manual entry below",
          );
          setOpen(false);
          return;
        }
        setPreds(data.predictions || []);
        setError("");
        setOpen((data.predictions || []).length > 0);
        setActive(-1);
      } catch {
        setPreds([]);
        setError("Address search offline — use manual entry below");
        setOpen(false);
      } finally {
        setLoading(false);
      }
    }, 280);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  const pick = async (pred) => {
    setQuery(pred.description);
    onInputChange?.(pred.description);
    setOpen(false);
    setPreds([]);
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `/api/places/details?placeId=${encodeURIComponent(pred.placeId)}`,
      );
      const place = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(place.error || "Could not load that address");
        // Still pass a best-effort place from the description
        onPlace?.({
          street: pred.mainText || pred.description,
          city: "",
          state: "FL",
          zip: "",
          county: "",
          formattedAddress: pred.description,
          placeId: pred.placeId,
          lat: null,
          lng: null,
        });
        return;
      }
      onPlace?.(place);
    } catch {
      setError("Could not load that address");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (!open || preds.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, preds.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && active >= 0) {
      e.preventDefault();
      pick(preds[active]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={wrapRef} className="relative grid gap-2">
      <Label htmlFor={inputId} className="mb-0">
        Project address
      </Label>
      <input
        id={inputId}
        name="address-search"
        type="text"
        autoComplete="off"
        autoFocus={autoFocus}
        disabled={disabled}
        placeholder="Start typing your street address"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onInputChange?.(e.target.value);
        }}
        onFocus={() => preds.length > 0 && setOpen(true)}
        onKeyDown={onKeyDown}
        className={inputClass}
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={`${inputId}-list`}
        role="combobox"
      />

      {open && preds.length > 0 && (
        <ul
          id={`${inputId}-list`}
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%-0.25rem)] z-30 max-h-60 overflow-auto border border-brand-line bg-white shadow-lg"
        >
          {preds.map((p, i) => (
            <li key={p.placeId} role="option" aria-selected={i === active}>
              <button
                type="button"
                className={`w-full px-3 py-2.5 text-left text-sm touch-manipulation ${
                  i === active ? "bg-brand-soft" : "hover:bg-brand-soft"
                }`}
                onMouseEnter={() => setActive(i)}
                onClick={() => pick(p)}
              >
                <span className="block font-semibold text-text-primary">
                  {p.mainText || p.description}
                </span>
                {p.secondaryText && (
                  <span className="block text-xs text-text-secondary">
                    {p.secondaryText}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="text-xs text-text-secondary">
        {loading && "Searching addresses…"}
        {!loading && !error && preds.length === 0 && query.trim().length >= 3 && (
          "No matches — try more of the street name, or enter manually"
        )}
        {!loading && !error && query.trim().length < 3 && (
          "Type at least 3 characters · Florida & US addresses"
        )}
        {error && <span className="text-amber-800">{error}</span>}
      </p>
    </div>
  );
}

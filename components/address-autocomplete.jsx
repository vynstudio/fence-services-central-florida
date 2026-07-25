"use client";

import { Label } from "@relume_io/relume-ui";
import React, { useEffect, useId, useRef, useState } from "react";

const inputClass =
  "flex w-full min-h-12 border border-border-primary bg-background-primary px-3 py-2 text-base text-text-primary outline-none transition placeholder:text-text-secondary focus:border-brand-accent focus:ring-1 focus:ring-brand-accent disabled:cursor-not-allowed disabled:opacity-50";

/**
 * Address search via /api/places proxy (no Maps JS widget).
 * Local input state is source of truth while typing — avoids cursor/glitch
 * from parent re-syncing controlled value every keystroke.
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
  const inputRef = useRef(null);
  const debounceRef = useRef(null);
  const abortRef = useRef(null);
  const focusedRef = useRef(false);
  const skipNextPropSync = useRef(false);

  const [query, setQuery] = useState(value);
  const [preds, setPreds] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [active, setActive] = useState(-1);

  // Sync from parent only when not actively typing (e.g. place selected, form reset)
  useEffect(() => {
    if (skipNextPropSync.current) {
      skipNextPropSync.current = false;
      return;
    }
    if (focusedRef.current) return;
    if (value !== query) {
      setQuery(value || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional: only react to external value
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
    if (abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
    }

    const q = query.trim();
    if (q.length < 3) {
      setPreds([]);
      setError("");
      setLoading(false);
      setOpen(false);
      return;
    }

    // Debounce only — do not flip loading=true on every keystroke
    debounceRef.current = setTimeout(async () => {
      const ac = new AbortController();
      abortRef.current = ac;
      setLoading(true);
      setError("");

      try {
        const res = await fetch(
          `/api/places/autocomplete?q=${encodeURIComponent(q)}`,
          { signal: ac.signal },
        );
        const data = await res.json().catch(() => ({}));
        if (ac.signal.aborted) return;

        if (!res.ok) {
          setPreds([]);
          setError(
            data.error ||
              "Address search unavailable — use manual entry below",
          );
          setOpen(false);
          return;
        }

        const list = data.predictions || [];
        setPreds(list);
        setError("");
        setOpen(list.length > 0 && focusedRef.current);
        setActive(-1);
      } catch (err) {
        if (err?.name === "AbortError") return;
        setPreds([]);
        setError("Address search offline — use manual entry below");
        setOpen(false);
      } finally {
        if (!ac.signal.aborted) setLoading(false);
      }
    }, 320);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (abortRef.current) {
        abortRef.current.abort();
        abortRef.current = null;
      }
    };
  }, [query]);

  const pick = async (pred) => {
    if (!pred?.placeId) return;

    const display = pred.description || pred.mainText || "";
    skipNextPropSync.current = true;
    setQuery(display);
    onInputChange?.(display);
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
      skipNextPropSync.current = true;
      if (place.formattedAddress) {
        setQuery(place.formattedAddress);
        onInputChange?.(place.formattedAddress);
      }
      onPlace?.(place);
    } catch {
      setError("Could not load that address");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (!open || preds.length === 0) {
      if (e.key === "Escape") setOpen(false);
      return;
    }
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
      e.preventDefault();
      setOpen(false);
    }
  };

  return (
    <div ref={wrapRef} className="relative z-20 grid gap-2">
      <Label htmlFor={inputId} className="mb-0">
        Project address
      </Label>
      <input
        ref={inputRef}
        id={inputId}
        name="address-search"
        type="text"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        autoFocus={autoFocus}
        disabled={disabled}
        placeholder="Start typing your street address"
        value={query}
        onChange={(e) => {
          const v = e.target.value;
          skipNextPropSync.current = true;
          setQuery(v);
          onInputChange?.(v);
        }}
        onFocus={() => {
          focusedRef.current = true;
          if (preds.length > 0) setOpen(true);
        }}
        onBlur={() => {
          // Delay so list item mousedown/click can fire first
          window.setTimeout(() => {
            focusedRef.current = false;
          }, 150);
        }}
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
          className="absolute left-0 right-0 top-full z-40 mt-1 max-h-60 overflow-auto border border-brand-line bg-white shadow-lg"
        >
          {preds.map((p, i) => (
            <li
              key={p.placeId || `${p.description}-${i}`}
              role="option"
              aria-selected={i === active}
            >
              <button
                type="button"
                className={`w-full px-3 py-2.5 text-left text-sm touch-manipulation ${
                  i === active ? "bg-brand-soft" : "hover:bg-brand-soft"
                }`}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => {
                  // Prevent input blur before click — classic autocomplete bug
                  e.preventDefault();
                }}
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

      <p className="min-h-[1.25rem] text-xs text-text-secondary" aria-live="polite">
        {loading && "Searching addresses…"}
        {!loading &&
          !error &&
          preds.length === 0 &&
          query.trim().length >= 3 &&
          "No matches — try more of the street name, or enter manually"}
        {!loading &&
          !error &&
          query.trim().length < 3 &&
          "Type at least 3 characters · Florida & US addresses"}
        {error && <span className="text-amber-800">{error}</span>}
      </p>
    </div>
  );
}

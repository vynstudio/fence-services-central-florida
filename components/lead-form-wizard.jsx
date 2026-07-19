"use client";

import { Button, Input, Label, Textarea } from "@relume_io/relume-ui";
import { AddressAutocomplete } from "@/components/address-autocomplete";
import { SITE } from "@/lib/site";
import React, { useCallback, useEffect, useRef, useState } from "react";

const STEPS = [
  { id: "need", title: "What do you need?" },
  { id: "material", title: "Fence type" },
  { id: "property", title: "Property type" },
  { id: "location", title: "Where’s the project?" },
  { id: "contact", title: "How do we reach you?" },
];

const NEED_OPTIONS = [
  { value: "repair", label: "Repair", hint: "Fix posts, panels, or gates" },
  { value: "install", label: "New install", hint: "Full new fence line" },
  { value: "not-sure", label: "Not sure", hint: "We’ll help you decide" },
];

const MATERIAL_OPTIONS = [
  { value: "wood", label: "Wood" },
  { value: "vinyl", label: "Vinyl" },
  { value: "aluminum", label: "Aluminum (pool)" },
  { value: "steel", label: "Ornamental steel" },
  { value: "chain-link", label: "Chain link" },
  { value: "gates", label: "Gates / access" },
  { value: "not-sure", label: "Not sure" },
];

const PROPERTY_OPTIONS = [
  { value: "residential", label: "Residential", hint: "Home or HOA lot" },
  { value: "commercial", label: "Commercial", hint: "Business or multi-unit" },
];

const empty = {
  need: "",
  material: "",
  property: "",
  street: "",
  city: "",
  state: "FL",
  zip: "",
  county: "",
  formattedAddress: "",
  placeId: "",
  lat: null,
  lng: null,
  addressQuery: "",
  name: "",
  phone: "",
  email: "",
  message: "",
};

const ADVANCE_MS = 280;

function ChoiceGrid({ options, value, onChange, columns = 2 }) {
  return (
    <div
      className={`grid gap-3 ${columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
      role="listbox"
    >
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="option"
            aria-selected={active}
            onClick={() => onChange(opt.value)}
            className={`min-h-[3.25rem] touch-manipulation rounded-sm border px-4 py-4 text-left transition active:scale-[0.99] ${
              active
                ? "border-brand-accent bg-brand-accent text-white shadow-sm"
                : "border-brand-line bg-background-primary hover:border-brand-accent/40 hover:bg-brand-soft"
            }`}
          >
            <span className="block text-base font-bold">{opt.label}</span>
            {opt.hint && (
              <span
                className={`mt-1 block text-sm ${active ? "text-white/85" : "text-text-secondary"}`}
              >
                {opt.hint}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function formatPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function LeadFormWizard({
  onSuccess,
  onCancel,
  className = "",
  compact = false,
}) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(empty);
  const [status, setStatus] = useState("idle");
  const [showNotes, setShowNotes] = useState(false);
  const advanceTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  const setField = useCallback((key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const goNext = useCallback(() => {
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }, []);

  const goBack = () => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    setStep((s) => Math.max(s - 1, 0));
  };

  /** Choice steps: select → brief highlight → auto-advance */
  const selectAndAdvance = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    advanceTimer.current = setTimeout(() => {
      setStep((s) => Math.min(s + 1, STEPS.length - 1));
    }, ADVANCE_MS);
  };

  const addressComplete = Boolean(
    data.street.trim() &&
      data.city.trim() &&
      data.zip.trim().length >= 5,
  );

  const canNext = () => {
    if (step === 0) return Boolean(data.need);
    if (step === 1) return Boolean(data.material);
    if (step === 2) return Boolean(data.property);
    if (step === 3) return addressComplete;
    if (step === 4)
      return Boolean(
        data.name.trim() &&
          data.phone.replace(/\D/g, "").length >= 10 &&
          data.email.trim().includes("@"),
      );
    return false;
  };

  const handlePlace = (place) => {
    setData((prev) => ({
      ...prev,
      street: place.street || prev.street,
      city: place.city || prev.city,
      state: place.state || "FL",
      zip: place.zip || prev.zip,
      county: place.county || "",
      formattedAddress: place.formattedAddress || "",
      placeId: place.placeId || "",
      lat: place.lat,
      lng: place.lng,
      addressQuery: place.formattedAddress || prev.addressQuery,
    }));

    // Auto-advance when Google returns a full address
    if (place.street && place.city && place.zip) {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
      advanceTimer.current = setTimeout(() => {
        setStep((s) => Math.min(s + 1, STEPS.length - 1));
      }, 400);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!canNext()) return;
    setStatus("submitting");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          street: data.street,
          city: data.city,
          state: data.state || "FL",
          zip: data.zip,
          county: data.county,
          formattedAddress: data.formattedAddress,
          placeId: data.placeId,
          lat: data.lat,
          lng: data.lng,
          need: data.need,
          material: data.material,
          property: data.property,
          message: data.message,
          "bot-field": "",
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error("lead submit failed", err);
        setStatus("error");
        return;
      }

      setStatus("success");
      if (onSuccess) onSuccess();
      else window.location.href = "/thank-you/";
    } catch (err) {
      console.error("lead submit error", err);
      setStatus("error");
    }
  };

  const progress = ((step + 1) / STEPS.length) * 100;
  const isChoiceStep = step <= 2;

  return (
    <form
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
      className={className}
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-brand-accent">
            Step {step + 1} of {STEPS.length}
          </span>
          <span className="text-text-secondary">{STEPS[step].title}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-background-secondary">
          <div
            className="h-full bg-brand-accent transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {isChoiceStep && (
          <p className="mt-2 text-xs text-text-secondary">
            Tap a choice — we’ll move you forward automatically
          </p>
        )}
      </div>

      <h3
        className={`mb-4 font-bold leading-tight ${compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl md:text-4xl"}`}
      >
        {STEPS[step].title}
      </h3>

      {step === 0 && (
        <ChoiceGrid
          options={NEED_OPTIONS}
          value={data.need}
          onChange={(v) => selectAndAdvance("need", v)}
        />
      )}

      {step === 1 && (
        <ChoiceGrid
          options={MATERIAL_OPTIONS}
          value={data.material}
          onChange={(v) => selectAndAdvance("material", v)}
          columns={2}
        />
      )}

      {step === 2 && (
        <ChoiceGrid
          options={PROPERTY_OPTIONS}
          value={data.property}
          onChange={(v) => selectAndAdvance("property", v)}
        />
      )}

      {step === 3 && (
        <div className="grid gap-4">
          <AddressAutocomplete
            value={data.addressQuery}
            autoFocus
            onInputChange={(v) => setField("addressQuery", v)}
            onPlace={handlePlace}
          />

          {(data.street || data.city || data.zip) && (
            <div className="rounded-sm border border-brand-line bg-brand-soft/80 px-3 py-3 text-sm">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-accent">
                We’ll use this address
              </p>
              <p className="font-medium text-text-primary">
                {data.formattedAddress ||
                  [data.street, data.city, data.state || "FL", data.zip]
                    .filter(Boolean)
                    .join(", ")}
              </p>
              {addressComplete && (
                <p className="mt-1 text-xs text-brand-accent">
                  Looking good — continuing…
                </p>
              )}
            </div>
          )}

          {/* Manual fallback / tweak fields */}
          <details className="group text-sm">
            <summary className="cursor-pointer font-medium text-brand-accent underline-offset-2 hover:underline">
              Enter or edit address manually
            </summary>
            <div className="mt-3 grid gap-3">
              <div>
                <Label htmlFor="street" className="mb-1.5">
                  Street
                </Label>
                <Input
                  id="street"
                  name="street"
                  autoComplete="street-address"
                  placeholder="123 Main St"
                  value={data.street}
                  onChange={(e) => setField("street", e.target.value)}
                  className="min-h-11"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="sm:col-span-1">
                  <Label htmlFor="city" className="mb-1.5">
                    City
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    placeholder="Tampa"
                    value={data.city}
                    onChange={(e) => setField("city", e.target.value)}
                    className="min-h-11"
                  />
                </div>
                <div>
                  <Label htmlFor="state" className="mb-1.5">
                    State
                  </Label>
                  <Input
                    id="state"
                    name="state"
                    autoComplete="address-level1"
                    value={data.state}
                    onChange={(e) =>
                      setField("state", e.target.value.toUpperCase().slice(0, 2))
                    }
                    className="min-h-11"
                    maxLength={2}
                  />
                </div>
                <div>
                  <Label htmlFor="zip" className="mb-1.5">
                    ZIP
                  </Label>
                  <Input
                    id="zip"
                    name="zip"
                    autoComplete="postal-code"
                    inputMode="numeric"
                    maxLength={5}
                    placeholder="32801"
                    value={data.zip}
                    onChange={(e) =>
                      setField("zip", e.target.value.replace(/\D/g, "").slice(0, 5))
                    }
                    className="min-h-11"
                  />
                </div>
              </div>
            </div>
          </details>

          <p className="text-xs text-text-secondary">Serving {SITE.area}</p>
        </div>
      )}

      {step === 4 && (
        <div className="grid gap-4">
          <div>
            <Label htmlFor="name" className="mb-1.5">
              Full name
            </Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              autoFocus
              placeholder="Your name"
              value={data.name}
              onChange={(e) => setField("name", e.target.value)}
              className="min-h-12 text-base"
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" className="mb-1.5">
              Mobile phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="(689) 600-0000"
              value={data.phone}
              onChange={(e) => setField("phone", formatPhone(e.target.value))}
              className="min-h-12 text-base"
              required
            />
            <p className="mt-1 text-xs text-text-secondary">
              We’ll text a confirmation from FenceLine
            </p>
          </div>
          <div>
            <Label htmlFor="email" className="mb-1.5">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              value={data.email}
              onChange={(e) => setField("email", e.target.value)}
              className="min-h-12 text-base"
              required
            />
          </div>

          {!showNotes ? (
            <button
              type="button"
              className="justify-self-start text-sm font-medium text-brand-accent underline-offset-2 hover:underline"
              onClick={() => setShowNotes(true)}
            >
              + Add a note (optional)
            </button>
          ) : (
            <div>
              <Label htmlFor="message" className="mb-1.5">
                Notes (optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Gate, HOA, timing, gate code…"
                className="min-h-20"
                value={data.message}
                onChange={(e) => setField("message", e.target.value)}
                autoFocus
              />
            </div>
          )}

          {addressComplete && (
            <p className="rounded-sm bg-brand-soft px-3 py-2 text-xs text-text-secondary">
              <span className="font-semibold text-text-primary">Project: </span>
              {data.formattedAddress ||
                `${data.street}, ${data.city}, ${data.state} ${data.zip}`}
            </p>
          )}
        </div>
      )}

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong. Call us at{" "}
          <a className="underline" href={SITE.phoneHref}>
            {SITE.phone}
          </a>{" "}
          or try again.
        </p>
      )}

      <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {step > 0 && (
            <Button type="button" variant="secondary" onClick={goBack} className="min-h-11">
              Back
            </Button>
          )}
          {onCancel && step === 0 && (
            <Button type="button" variant="link" onClick={onCancel}>
              Cancel
            </Button>
          )}
        </div>

        {/* Choice steps: optional Continue if they want to re-tap */}
        {step < 3 && (
          <Button
            type="button"
            title="Continue"
            disabled={!canNext()}
            onClick={goNext}
            className="min-h-11 min-w-[7.5rem]"
          >
            Continue
          </Button>
        )}

        {step === 3 && (
          <Button
            type="button"
            title="Continue"
            disabled={!canNext()}
            onClick={goNext}
            className="min-h-11 min-w-[7.5rem]"
          >
            Continue
          </Button>
        )}

        {step === 4 && (
          <Button
            type="submit"
            title="Submit"
            disabled={!canNext() || status === "submitting"}
            className="min-h-12 min-w-[10rem] !bg-brand-accent font-bold"
          >
            {status === "submitting" ? "Sending…" : "Get my free quote"}
          </Button>
        )}
      </div>
    </form>
  );
}

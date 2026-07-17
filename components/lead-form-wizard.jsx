"use client";

import { Button, Input, Label, Textarea } from "@relume_io/relume-ui";
import { filterCities } from "@/lib/florida-cities";
import { SITE } from "@/lib/site";
import React, { useEffect, useMemo, useRef, useState } from "react";

const STEPS = [
  { id: "need", title: "What do you need?" },
  { id: "material", title: "Fence type" },
  { id: "property", title: "Property type" },
  { id: "location", title: "Project location" },
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
  { value: "aluminum", label: "Aluminum" },
  { value: "chain-link", label: "Chain link" },
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
  zip: "",
  name: "",
  phone: "",
  email: "",
  message: "",
};

function ChoiceGrid({ options, value, onChange, columns = 2 }) {
  return (
    <div
      className={`grid gap-3 ${columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}
    >
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`rounded-sm border px-4 py-4 text-left transition ${
              active
                ? "border-background-alternative bg-background-alternative text-text-alternative"
                : "border-border-primary bg-background-primary hover:bg-background-secondary"
            }`}
          >
            <span className="block text-base font-bold">{opt.label}</span>
            {opt.hint && (
              <span
                className={`mt-1 block text-sm ${active ? "text-white/80" : "text-text-secondary"}`}
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
  const [cityOpen, setCityOpen] = useState(false);
  const cityBoxRef = useRef(null);

  const citySuggestions = useMemo(
    () => filterCities(data.city, 8),
    [data.city],
  );

  useEffect(() => {
    const onDoc = (e) => {
      if (cityBoxRef.current && !cityBoxRef.current.contains(e.target)) {
        setCityOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const setField = (key, value) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const canNext = () => {
    if (step === 0) return Boolean(data.need);
    if (step === 1) return Boolean(data.material);
    if (step === 2) return Boolean(data.property);
    if (step === 3)
      return Boolean(data.street.trim() && data.city.trim() && data.zip.trim());
    if (step === 4)
      return Boolean(
        data.name.trim() && data.phone.replace(/\D/g, "").length >= 10 && data.email.trim(),
      );
    return false;
  };

  const goNext = () => {
    if (!canNext()) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!canNext()) return;
    setStatus("submitting");

    const notes = [
      data.message ? data.message : null,
    ]
      .filter(Boolean)
      .join("\n");

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
          zip: data.zip,
          need: data.need,
          material: data.material,
          property: data.property,
          message: notes,
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

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={className}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-brand-accent">
            Step {step + 1} of {STEPS.length}
          </span>
          <span className="text-text-secondary">{STEPS[step].title}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-background-secondary">
          <div
            className="h-full bg-brand-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h3 className={`mb-5 font-bold ${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}>
        {STEPS[step].title}
      </h3>

      {step === 0 && (
        <ChoiceGrid
          options={NEED_OPTIONS}
          value={data.need}
          onChange={(v) => setField("need", v)}
        />
      )}

      {step === 1 && (
        <ChoiceGrid
          options={MATERIAL_OPTIONS}
          value={data.material}
          onChange={(v) => setField("material", v)}
          columns={3}
        />
      )}

      {step === 2 && (
        <ChoiceGrid
          options={PROPERTY_OPTIONS}
          value={data.property}
          onChange={(v) => setField("property", v)}
        />
      )}

      {step === 3 && (
        <div className="grid gap-4">
          <div>
            <Label htmlFor="street" className="mb-2">
              Street address
            </Label>
            <Input
              id="street"
              name="street"
              autoComplete="street-address"
              placeholder="123 Main St"
              value={data.street}
              onChange={(e) => setField("street", e.target.value)}
              required
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div ref={cityBoxRef} className="relative">
              <Label htmlFor="city" className="mb-2">
                City
              </Label>
              <Input
                id="city"
                name="city"
                autoComplete="address-level2"
                placeholder="Orlando"
                value={data.city}
                onChange={(e) => {
                  setField("city", e.target.value);
                  setCityOpen(true);
                }}
                onFocus={() => setCityOpen(true)}
                required
              />
              {cityOpen && citySuggestions.length > 0 && (
                <ul className="absolute z-20 mt-1 max-h-48 w-full overflow-auto border border-border-primary bg-background-primary shadow-medium">
                  {citySuggestions.map((city) => (
                    <li key={city}>
                      <button
                        type="button"
                        className="w-full px-3 py-2 text-left text-sm hover:bg-background-secondary"
                        onClick={() => {
                          setField("city", city);
                          setCityOpen(false);
                        }}
                      >
                        {city}, FL
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <Label htmlFor="zip" className="mb-2">
                ZIP
              </Label>
              <Input
                id="zip"
                name="zip"
                autoComplete="postal-code"
                inputMode="numeric"
                pattern="[0-9]{5}"
                maxLength={5}
                placeholder="32801"
                value={data.zip}
                onChange={(e) =>
                  setField("zip", e.target.value.replace(/\D/g, "").slice(0, 5))
                }
                required
              />
            </div>
          </div>
          <p className="text-sm text-text-secondary">
            Serving {SITE.area}
          </p>
        </div>
      )}

      {step === 4 && (
        <div className="grid gap-4">
          <div>
            <Label htmlFor="name" className="mb-2">
              Full name
            </Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              value={data.name}
              onChange={(e) => setField("name", e.target.value)}
              required
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="phone" className="mb-2">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="(407) 555-0198"
                value={data.phone}
                onChange={(e) => setField("phone", formatPhone(e.target.value))}
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="mb-2">
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
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="message" className="mb-2">
              Anything else? (optional)
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Gate issues, HOA rules, preferred timing..."
              className="min-h-24"
              value={data.message}
              onChange={(e) => setField("message", e.target.value)}
            />
          </div>
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

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {step > 0 && (
            <Button type="button" variant="secondary" onClick={goBack}>
              Back
            </Button>
          )}
          {onCancel && step === 0 && (
            <Button type="button" variant="link" onClick={onCancel}>
              Cancel
            </Button>
          )}
        </div>
        {step < STEPS.length - 1 ? (
          <Button
            type="button"
            title="Continue"
            disabled={!canNext()}
            onClick={goNext}
          >
            Continue
          </Button>
        ) : (
          <Button
            type="submit"
            title="Submit"
            disabled={!canNext() || status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Get my free quote"}
          </Button>
        )}
      </div>
    </form>
  );
}

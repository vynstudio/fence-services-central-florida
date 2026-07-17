"use client";

import { Button, Input, Label } from "@relume_io/relume-ui";
import { Navbar1 } from "@/components/home/Navbar1";
import { Footer1 } from "@/components/home/Footer1";
import { SITE } from "@/lib/site";
import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

function DepositForm() {
  const params = useSearchParams();
  const canceled = params.get("canceled") === "1";
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const pay = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout failed");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err.message || "Something went wrong");
      setStatus("error");
    }
  };

  return (
    <main className="px-[5%] py-12 md:py-20">
      <div className="container max-w-lg">
        <p className="brand-eyebrow">Secure deposit</p>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Reserve your fence project
        </h1>
        <p className="mb-8 text-md text-text-secondary">
          Pay a deposit via Stripe to hold your install/repair slot. The deposit
          applies to your final invoice. {SITE.name} is a DBA of {SITE.legalName}
          .
        </p>

        {canceled && (
          <p className="mb-6 rounded-sm border border-border-primary bg-background-secondary px-4 py-3 text-sm">
            Checkout canceled — no charge was made. You can try again below.
          </p>
        )}

        <form onSubmit={pay} className="grid gap-4">
          <div>
            <Label htmlFor="name" className="mb-2">
              Name
            </Label>
            <Input
              id="name"
              autoComplete="name"
              required
              value={form.name}
              onChange={set("name")}
            />
          </div>
          <div>
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={set("email")}
            />
          </div>
          <div>
            <Label htmlFor="phone" className="mb-2">
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={set("phone")}
            />
          </div>
          <div>
            <Label htmlFor="city" className="mb-2">
              City
            </Label>
            <Input
              id="city"
              autoComplete="address-level2"
              value={form.city}
              onChange={set("city")}
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button
            type="submit"
            title="Pay deposit"
            disabled={status === "loading"}
            className="w-full"
          >
            {status === "loading"
              ? "Redirecting to Stripe..."
              : "Pay deposit with Stripe"}
          </Button>
          <p className="text-xs text-text-secondary">
            Secured by Stripe. Card details never touch our servers. Amount is
            set server-side (default $150 in test mode).
          </p>
        </form>
      </div>
    </main>
  );
}

export default function DepositPage() {
  return (
    <div>
      <Navbar1 />
      <Suspense fallback={<main className="p-16 text-center">Loading…</main>}>
        <DepositForm />
      </Suspense>
      <Footer1 />
    </div>
  );
}

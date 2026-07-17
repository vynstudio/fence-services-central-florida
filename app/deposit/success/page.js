"use client";

import { Button } from "@relume_io/relume-ui";
import { BrandLogo } from "@/components/brand-logo";
import { SiteHeader } from "@/components/landing/site-header";
import { SITE } from "@/lib/site";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessBody() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 py-16 text-center md:px-8">
      <p className="brand-eyebrow">Payment received</p>
      <h1 className="mb-4 max-w-lg text-4xl font-bold md:text-5xl">
        Deposit confirmed
      </h1>
      <p className="mb-8 max-w-md text-md text-text-secondary">
        Thanks — your fence project deposit is secured. We’ll reach out shortly
        to confirm schedule and details.
      </p>
      {sessionId && (
        <p className="mb-6 max-w-full truncate text-xs text-text-secondary">
          Reference: {sessionId}
        </p>
      )}
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild>
          <a href="/">Back home</a>
        </Button>
        <Button variant="secondary" asChild>
          <a href={SITE.phoneHref}>Call {SITE.phone}</a>
        </Button>
      </div>
    </main>
  );
}

export default function DepositSuccessPage() {
  return (
    <div>
      <SiteHeader />
      <Suspense fallback={<main className="p-16 text-center">Loading…</main>}>
        <SuccessBody />
      </Suspense>
      <footer className="border-t border-border-primary px-5 py-8 md:px-8">
        <div className="mx-auto max-w-[1120px]">
          <BrandLogo variant="dark" />
        </div>
      </footer>
    </div>
  );
}

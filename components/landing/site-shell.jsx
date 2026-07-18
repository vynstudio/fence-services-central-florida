"use client";

import { Button } from "@relume_io/relume-ui";
import { BrandLogo } from "@/components/brand-logo";
import { QuoteButton } from "@/components/quote-button";
import { SiteHeader } from "@/components/landing/site-header";
import { SITE } from "@/lib/site";
import React from "react";

/** Shared chrome for SEO subpages (header + footer + CTA strip) */
export function SiteShell({ children }) {
  return (
    <div className="min-h-screen bg-background-primary">
      <SiteHeader />
      <main>{children}</main>
      <section className="bg-brand-accent shell-section text-white">
        <div className="shell-inner mx-auto max-w-2xl text-center">
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
            Get a free fence quote
          </h2>
          <p className="mb-6 text-sm text-white/85 sm:text-base">
            A representative from our team will contact you soon.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center">
            <QuoteButton className="min-h-12 !bg-white !text-brand-accent hover:!bg-brand-soft sm:w-auto">
              Get free quote
            </QuoteButton>
            <Button
              variant="secondary-alt"
              className="min-h-12 border-2 border-white/50 bg-transparent text-white hover:bg-white/10 sm:w-auto"
              asChild
            >
              <a href={SITE.phoneHref}>Call {SITE.phone}</a>
            </Button>
          </div>
        </div>
      </section>
      <footer className="border-t border-brand-line shell-section !py-8 md:!py-10">
        <div className="shell-inner flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <BrandLogo variant="dark" height={34} />
            <p className="mt-3 max-w-sm text-sm text-text-secondary">
              {SITE.tagline} Fence installation and repair across {SITE.area}.
            </p>
            <p className="mt-2 text-sm font-medium text-text-primary">
              {SITE.addressLine}
            </p>
            <p className="mt-1 text-sm text-text-secondary">
              <a href={SITE.phoneHref} className="hover:underline">
                {SITE.phone}
              </a>
              {" · "}
              <a href={SITE.emailHref} className="hover:underline">
                {SITE.email}
              </a>
            </p>
            <p className="mt-2 text-xs text-text-secondary">{SITE.legalLine}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="mb-2 font-bold">Explore</p>
              <a href="/#services" className="block min-h-9 py-1 hover:underline">
                Services
              </a>
              <a href="/#areas" className="block min-h-9 py-1 hover:underline">
                Areas
              </a>
              <a href="/#reviews" className="block min-h-9 py-1 hover:underline">
                Reviews
              </a>
              <a href="/#faq" className="block min-h-9 py-1 hover:underline">
                FAQ
              </a>
            </div>
            <div>
              <p className="mb-2 font-bold">Contact</p>
              <a href={SITE.phoneHref} className="block min-h-9 py-1 hover:underline">
                {SITE.phone}
              </a>
              <a href={SITE.smsHref} className="block min-h-9 py-1 hover:underline">
                Text us
              </a>
              <a href="/#contact" className="block min-h-9 py-1 hover:underline">
                Free quote
              </a>
            </div>
          </div>
        </div>
        <div className="shell-inner mt-8 border-t border-brand-line pt-5 text-xs text-text-secondary">
          © {SITE.year} {SITE.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

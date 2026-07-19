"use client";

import { BrandLogo } from "@/components/brand-logo";
import { QuoteButton } from "@/components/quote-button";
import { SiteHeader } from "@/components/landing/site-header";
import { SITE } from "@/lib/site";
import React from "react";

/** Shared chrome for SEO subpages — matches homepage brand system */
export function SiteShell({ children }) {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <SiteHeader />
      <main className="bg-background-primary text-text-primary">{children}</main>

      {/* Bottom CTA — same green band as homepage contact */}
      <section className="bg-brand-accent text-white">
        <div className="shell-section">
          <div className="shell-inner mx-auto max-w-2xl text-center">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Get a free fence quote
            </h2>
            <p className="mb-6 text-sm text-white/85 sm:text-base">
              A representative from our team will contact you soon.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center sm:justify-center">
              <QuoteButton className="btn-on-brand min-h-12 w-full sm:w-auto sm:min-w-[11rem]">
                Get free quote
              </QuoteButton>
              <a
                href={SITE.phoneHref}
                className="inline-flex min-h-12 w-full items-center justify-center border-2 border-white/50 bg-transparent px-5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-brand-line bg-background-primary">
        <div className="shell-section !py-8 md:!py-10">
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
                <p className="mb-2 font-bold text-text-primary">Explore</p>
                <a
                  href="/#services"
                  className="block min-h-9 py-1 text-text-secondary hover:text-brand-accent hover:underline"
                >
                  Services
                </a>
                <a
                  href="/#areas"
                  className="block min-h-9 py-1 text-text-secondary hover:text-brand-accent hover:underline"
                >
                  Areas
                </a>
                <a
                  href="/#reviews"
                  className="block min-h-9 py-1 text-text-secondary hover:text-brand-accent hover:underline"
                >
                  Reviews
                </a>
                <a
                  href="/#faq"
                  className="block min-h-9 py-1 text-text-secondary hover:text-brand-accent hover:underline"
                >
                  FAQ
                </a>
              </div>
              <div>
                <p className="mb-2 font-bold text-text-primary">Contact</p>
                <a
                  href={SITE.phoneHref}
                  className="block min-h-9 py-1 text-text-secondary hover:text-brand-accent hover:underline"
                >
                  {SITE.phone}
                </a>
                <a
                  href={SITE.smsHref}
                  className="block min-h-9 py-1 text-text-secondary hover:text-brand-accent hover:underline"
                >
                  Text us
                </a>
                <a
                  href="/#contact"
                  className="block min-h-9 py-1 text-text-secondary hover:text-brand-accent hover:underline"
                >
                  Free quote
                </a>
              </div>
            </div>
          </div>
          <div className="shell-inner mt-8 border-t border-brand-line pt-5 text-xs text-text-secondary">
            © {SITE.year} {SITE.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

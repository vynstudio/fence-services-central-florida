"use client";

import { Button } from "@relume_io/relume-ui";
import { QuoteButton } from "@/components/quote-button";
import { SITE } from "@/lib/site";
import React from "react";

export function Header98() {
  return (
    <section className="px-[5%] py-8 md:py-16 lg:py-24">
      <div className="container relative overflow-hidden">
        <div className="relative z-10 flex min-h-[22rem] flex-col items-center justify-center px-5 py-12 text-center sm:min-h-[26rem] md:min-h-[36rem] md:px-12 md:py-16 lg:min-h-[42rem] lg:px-20 lg:py-24">
          <div className="w-full max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent md:mb-5 md:text-sm">
              {SITE.tagline}
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-text-alternative sm:text-4xl md:mb-6 md:text-7xl lg:text-10xl lg:leading-[1.05]">
              {SITE.marketLine}
            </h1>
            <p className="mx-auto max-w-xl text-sm text-white/90 sm:text-base md:text-md lg:text-lg">
              Expert repair and installation that stands up to Florida weather.
              Clear quotes. Solid posts. The true line—every time.
            </p>
          </div>
          <div className="mt-6 flex w-full max-w-md flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 lg:mt-10">
            <QuoteButton title="Free quote" variant="primary" className="w-full sm:w-auto">
              Free quote
            </QuoteButton>
            <Button
              title="Our services"
              variant="secondary-alt"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="/services">Our services</a>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home-hero-header-section.jpg"
            className="size-full object-cover"
            alt="Meridian Fence Group installation"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
      </div>
    </section>
  );
}

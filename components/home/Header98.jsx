"use client";

import { Button } from "@relume_io/relume-ui";
import { SITE } from "@/lib/site";
import React from "react";

export function Header98() {
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container relative overflow-hidden rounded-sm">
        <div className="relative z-10 flex min-h-[32rem] flex-col items-center justify-center p-8 text-center md:min-h-[40rem] md:p-16">
          <div className="w-full max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-copper-light">
              {SITE.tagline}
            </p>
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {SITE.marketLine}
            </h1>
            <p className="text-text-alternative md:text-md">
              Expert repair and installation that stands up to Florida weather.
              Clear quotes. Solid posts. The true line—every time.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Free quote" variant="primary" asChild>
              <a href="/contact-us">Free quote</a>
            </Button>
            <Button title="Our services" variant="secondary-alt" asChild>
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

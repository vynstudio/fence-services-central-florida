"use client";

import { Button } from "@relume_io/relume-ui";
import { SITE } from "@/lib/site";
import React from "react";

export function Header98() {
  return (
    <section id="relume" className="px-[5%] py-16 lg:py-24">
      <div className="container relative overflow-hidden">
        <div className="relative z-10 flex min-h-[28rem] flex-col items-center justify-center px-8 py-16 text-center md:min-h-[36rem] lg:min-h-[42rem] lg:px-20 lg:py-24">
          <div className="w-full max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
              {SITE.tagline}
            </p>
            <h1 className="mb-6 text-5xl font-bold text-text-alternative md:text-8xl lg:text-10xl lg:leading-[1.05]">
              {SITE.marketLine}
            </h1>
            <p className="mx-auto max-w-xl text-base text-white/90 md:text-md lg:text-lg">
              Expert repair and installation that stands up to Florida weather.
              Clear quotes. Solid posts. The true line—every time.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:mt-10">
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

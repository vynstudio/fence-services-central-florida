"use client";

import { Button } from "@relume_io/relume-ui";
import { SITE } from "@/lib/site";
import React from "react";

export function Cta53() {
  return (
    <section id="estimate-cta" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-accent">
              {SITE.tagline}
            </p>
            <h2 className="rb-5 mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
              Get your free estimate today
            </h2>
            <p className="text-text-alternative md:text-md">
              Tell us about the job—repair or new install. We’ll follow up with
              a clear next step and a no-pressure quote.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Free quote" asChild>
              <a href="/contact-us">Free quote</a>
            </Button>
            <Button title="Call" variant="secondary-alt" asChild>
              <a href={SITE.phoneHref}>Call {SITE.phone}</a>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home-gallery-section-4.jpg"
            className="size-full object-cover"
            alt="Finished fence project"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
      </div>
    </section>
  );
}

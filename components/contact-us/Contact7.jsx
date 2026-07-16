"use client";

import { LeadFormWizard } from "@/components/lead-form-wizard";
import React from "react";

export function Contact7() {
  return (
    <section id="estimate" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="brand-eyebrow">Estimate</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Get a free quote
            </h2>
            <p className="md:text-md">
              Answer a few guided questions—we’ll follow up with a clear next
              step. No pressure, no spam.
            </p>
          </div>
          <LeadFormWizard />
        </div>
        <div className="md:sticky md:top-24 md:self-start">
          <img
            src="/images/home-hero-header-section.jpg"
            alt="Fence installation project"
            className="size-full max-h-[36rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { QuoteButton } from "@/components/quote-button";
import React from "react";

export function Cta52() {
  return (
    <section id="get-quote" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center border border-border-primary bg-background-secondary p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <p className="brand-eyebrow">Quick start</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Start your fence project
            </h2>
            <p className="md:text-md">
              Open the guided quote form—about 60 seconds. We’ll follow up with
              a clear next step.
            </p>
          </div>
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-4">
            <QuoteButton title="Get free quote">Get free quote</QuoteButton>
            <a href="/contact-us" className="text-sm font-semibold underline">
              Or open the full contact page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

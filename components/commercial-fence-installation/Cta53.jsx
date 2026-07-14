"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta53() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative">
        <div className="relative z-10 flex flex-col items-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <h2 className="rb-5 mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
              Secure your site today
            </h2>
            <p className="text-text-alternative md:text-md">
              Get a free commercial site assessment and a detailed project
              proposal with no obligation
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Assess">Assess</Button>
            <Button title="Contact" variant="secondary-alt">
              Contact
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home-hero-header-section.jpg"
            className="size-full object-cover"
            alt="Fence installation project"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Emergency</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Storm damage repair when you need it most
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              A downed fence leaves your home exposed. We arrive fast to secure
              the perimeter with temporary fencing and give you a clear timeline
              for the permanent build. The work is tough, quick, and done right.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  24hr
                </h3>
                <p>Average time to secure a property with temporary fencing</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  3d
                </h3>
                <p>
                  Typical turnaround for a complete permanent repair after a
                  storm
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Call" asChild><a href="tel:+14075550198">Call</a></Button>
              <Button
                title="Quote"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Quote
              </Button>
            </div>
          </div>
          <img
            src="/images/home-hero-header-section.jpg"
            className="w-full object-cover"
            alt="Fence installation project"
          />
        </div>
      </div>
    </section>
  );
}

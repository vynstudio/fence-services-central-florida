"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Contact26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 flex max-w-lg flex-col justify-center text-center md:mb-18 lg:mb-20">
          <p className="brand-eyebrow">Coverage</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Our reach
          </h2>
          <p className="md:text-md">
            Crews running the I-4 corridor from coast to coast.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 aspect-[3/2] md:mb-8">
              <img
                src="/images/home-features-list-section-0.jpg"
                className="h-full w-full object-cover"
                alt="Fence installation project"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Jacksonville
            </h3>
            <p className="text-center">
              Serving all of Duval County and the beaches.
            </p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Get directions"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Get directions
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-6 aspect-[3/2] md:mb-8">
              <img
                src="/images/home-features-list-section-1.jpg"
                className="h-full w-full object-cover"
                alt="Fence installation project"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Tampa
            </h3>
            <p className="text-center">
              Covering Hillsborough County and the bay area.
            </p>
            <div className="mt-5 md:mt-6">
              <Button
                title="Get directions"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Get directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout237() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="brand-eyebrow">Process</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              The simple way we fix your fence in Florida
            </h2>
            <p className="md:text-md">
              No confusion. No hidden steps. Just a straight path from a broken
              fence to a strong one.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="/images/home-features-list-section-0.jpg"
                  alt="Fence project"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Schedule an on-site inspection at your convenience
              </h3>
              <p>
                We walk the line, check the damage, and listen to what you need.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="/images/home-features-list-section-0.jpg"
                  alt="Fence project"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Receive a transparent, no-obligation quote in writing
              </h3>
              <p>
                A firm price for the exact work, with no surprises added later.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="/images/home-features-list-section-0.jpg"
                  alt="Fence project"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                The repair team completes the work and cleans the site
              </h3>
              <p>
                We fix the fence fast and haul away the old debris when we
                leave.
              </p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">Call</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout395() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Process</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            How we work
          </h1>
          <p className="md:text-md">
            A simple path from your call to a finished fence.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/home-hero-header-section.jpg"
                alt="Fence project photo"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Step 1</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Schedule your free estimate
                </h2>
                <p>We come to your property and listen to your needs.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Contact"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/home-about-section.jpg"
                alt="Fence project photo"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Step 2</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Get a transparent quote and material options
                </h2>
                <p>A clear price with no hidden costs. You choose.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Services"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Services
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/home-gallery-section-0.jpg"
                alt="Fence project photo"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Step 3</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Enjoy prompt professional installation or repair
                </h2>
                <p>We show up on time and clean up when done.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Contact"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

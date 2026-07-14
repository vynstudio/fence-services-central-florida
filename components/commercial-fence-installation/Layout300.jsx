"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout300() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 w-full max-w-lg items-start justify-between gap-5 md:mb-18 lg:mb-20">
            <p className="mb-3 text-center font-semibold md:mb-4">Solutions</p>
            <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              One crew for every commercial fencing need
            </h2>
            <p className="text-center md:text-md">
              From a simple chain link enclosure to a fully integrated access
              control perimeter, we install it all. No subcontractors and no
              excuses.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="/images/home-features-list-section-0.jpg"
                  alt="Fence project photo"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Heavy-gauge chain link with barbed wire arms
              </h3>
              <p className="text-center">
                9-gauge core wire with a Class 3 galvanized coating that stands
                up to salt air and decades of hard use.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="/images/home-features-list-section-1.jpg"
                  alt="Fence project photo"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Ornamental steel and aluminum that cannot be climbed
              </h3>
              <p className="text-center">
                Fully welded pickets with powder-coated finish. Meets commercial
                height and spacing code without looking like a cage.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="/images/home-features-list-section-2.jpg"
                  alt="Fence project photo"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Solid vinyl privacy for screening and noise reduction
              </h3>
              <p className="text-center">
                High-density tongue-and-groove panels that block sightlines and
                dampen road noise for office parks and hospitality sites.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="/images/home-features-list-section-3.jpg"
                  alt="Fence project photo"
                  className="flex justify-center"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                Temporary construction fencing and pedestrian barricades
              </h3>
              <p className="text-center">
                Quick deployment and pickup. We keep your job site secure and
                OSHA-compliant for the duration of the project.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="All" variant="secondary">
              All
            </Button>
            <Button
              title="View"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

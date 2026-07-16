"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout400() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="brand-eyebrow">Why call</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Good reasons to reach out now
            </h2>
            <p className="md:text-md">
              A fence down is a problem that cannot wait.
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/home-features-list-section-0.jpg"
                alt="Fence project photo"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Speed</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  A fast response and a firm quote
                </h3>
                <p>We call back by the next business day. Guaranteed.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Learn"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Learn
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/home-features-list-section-1.jpg"
                alt="Fence project photo"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Estimate</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  The estimate costs you nothing
                </h3>
                <p>A man should know the price before he commits.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Learn"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Learn
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/home-features-list-section-2.jpg"
                alt="Fence project photo"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Trust</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Licensed, insured, and standing by the work
                </h3>
                <p>We carry the papers so you have no liability.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Learn"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Learn
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/home-features-list-section-3.jpg"
                alt="Fence project photo"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-sm font-semibold">Pay</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Financing that makes the work possible now
                </h3>
                <p>Flexible terms so a good fence fits your budget.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Learn"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Learn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

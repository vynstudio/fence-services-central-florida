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
            <p className="brand-eyebrow">Benefits</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              A good fence matters
            </h2>
            <p className="md:text-md">
              A solid repair does more than close a gap.
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
                <p className="mb-2 text-sm font-semibold">Curb</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Restored curb appeal starts at the property line
                </h3>
                <p>A clean, straight fence makes the whole house look right.</p>
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
                <p className="mb-2 text-sm font-semibold">Value</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Maintained property value with every solid post
                </h3>
                <p>A broken fence drags down the worth of your home.</p>
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
                <p className="mb-2 text-sm font-semibold">Security</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  Real security for your children and your dog
                </h3>
                <p>A closed perimeter means a safe yard for your family.</p>
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
                <p className="mb-2 text-sm font-semibold">HOA</p>
                <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                  HOA compliance without the headache or the letters
                </h3>
                <p>
                  We match the spec and provide the paperwork your board needs.
                </p>
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

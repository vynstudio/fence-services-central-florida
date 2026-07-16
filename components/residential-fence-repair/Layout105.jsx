"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout105() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Honest</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              A repair is often better than a replacement
            </h3>
          </div>
          <div>
            <p className="mb-5 md:mb-4 md:text-md">
              We look at the damage and tell you the truth. If a post can be
              reset and a few pickets swapped, we say so instead of selling you
              a whole new fence.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-0 md:gap-6 md:py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/images/home-features-list-section-0.jpg"
                    alt="Fence project"
                    className="size-6"
                  />
                </div>
                <p>Root cause assessment</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/images/home-features-list-section-0.jpg"
                    alt="Fence project"
                    className="size-6"
                  />
                </div>
                <p>Honest material matching</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/images/home-features-list-section-0.jpg"
                    alt="Fence project"
                    className="size-6"
                  />
                </div>
                <p>Cost comparison breakdown</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button variant="primary">Call</Button>
              <Button variant="secondary">Quote</Button>
            </div>
          </div>
        </div>
        <img
          src="/images/home-features-list-section-0.jpg"
          className="w-full object-cover"
          alt="Fence installation project"
        />
      </div>
    </section>
  );
}

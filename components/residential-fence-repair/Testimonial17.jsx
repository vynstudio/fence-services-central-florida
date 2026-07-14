"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial17() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Homeowner stories
          </h2>
          <p className="md:text-md">
            Real neighbors across Central Florida who needed a fast fix
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="md:text-md">
                "The hurricane took a whole section down. They had a temporary
                barrier up the same night and the new fence finished in two
                days."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="/images/home-hero-header-section.jpg"
                alt="Customer"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
              />
              <div>
                <p className="font-semibold">Maria S.</p>
                <p>Homeowner, Orlando</p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="md:text-md">
                "My gate was sagging so badly it wouldn't latch. They rebuilt
                the frame and now it swings true and quiet."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="/images/home-about-section.jpg"
                alt="Customer"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
              />
              <div>
                <p className="font-semibold">David Chen</p>
                <p>Homeowner, Jacksonville</p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-5 flex md:mb-6">
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
                <BiSolidStar className="mr-1 size-6" />
              </div>
              <blockquote className="md:text-md">
                "A fallen oak crushed the corner post. They dug out the rot, set
                a new post in concrete, and matched the old wood perfectly."
              </blockquote>
            </div>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <img
                src="/images/home-gallery-section-0.jpg"
                alt="Customer"
                className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
              />
              <div>
                <p className="font-semibold">Linda R.</p>
                <p>Homeowner, Tampa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

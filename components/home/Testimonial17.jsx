"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

const REVIEWS = [
  {
    quote:
      "The crew arrived two hours after I called. The new fence was up by sunset and it has not budged through two storms.",
    name: "Maria S.",
    role: "Homeowner, Orlando",
    image: "/images/home-testimonial-section-0.jpg",
  },
  {
    quote:
      "They matched the existing vinyl perfectly. You cannot tell where the old damage was. Clean work and a fair price.",
    name: "James R.",
    role: "Homeowner, Jacksonville",
    image: "/images/home-testimonial-section-1.jpg",
  },
  {
    quote:
      "I needed a commercial chain link job done fast. They handled the permits and finished ahead of schedule.",
    name: "David K.",
    role: "Property Manager, Tampa",
    image: "/images/home-testimonial-section-2.jpg",
  },
];

export function Testimonial17() {
  return (
    <section id="testimonials" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="brand-eyebrow">Reviews</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What customers say
          </h2>
          <p className="md:text-md">
            Homeowners and property managers across Central Florida trust
            Meridian for strong, lasting fence work.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8"
            >
              <div className="rb-5 mb-5 md:mb-6">
                <div className="mb-5 flex md:mb-6" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <BiSolidStar key={i} className="mr-1 size-6 text-brand-accent" />
                  ))}
                </div>
                <blockquote className="md:text-md">
                  “{review.quote}”
                </blockquote>
              </div>
              <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
                <img
                  src={review.image}
                  alt=""
                  className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                />
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-text-secondary">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

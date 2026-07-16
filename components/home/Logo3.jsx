"use client";

import React from "react";

const TRUST = [
  { label: "Install & repair", sub: "Full-service fencing" },
  { label: "Wood · Vinyl · Aluminum · Chain link", sub: "Every material" },
  { label: "Jacksonville to Tampa", sub: "Central Florida corridor" },
  { label: "Permits & HOA ready", sub: "Code-aware installs" },
  { label: "Storm-ready posts", sub: "Built for Florida wind" },
  { label: "Clear fixed quotes", sub: "No surprise markups" },
];

export function Logo3() {
  return (
    <section
      id="trust"
      className="overflow-hidden border-y border-border-primary bg-background-secondary py-12 md:py-16 lg:py-20"
    >
      <div className="container mb-10 w-full max-w-2xl px-[5%] md:mb-12">
        <p className="brand-eyebrow text-center">Trust signals</p>
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          What you can count on from Meridian
        </h2>
      </div>
      <div className="flex items-center">
        <div className="flex shrink-0 animate-loop-horizontally items-stretch">
          {[...TRUST, ...TRUST].map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="mx-3 flex min-w-[14rem] flex-col justify-center border border-border-primary bg-background-primary px-6 py-5 md:mx-4 md:min-w-[16rem]"
            >
              <p className="text-base font-bold md:text-md">{item.label}</p>
              <p className="mt-1 text-sm text-text-secondary">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { SITE } from "@/lib/site";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact20() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 flex max-w-lg flex-col justify-center text-center md:mb-18 lg:mb-20">
          <p className="brand-eyebrow">Contact</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Reach us
          </h2>
          <p className="md:text-md">A real voice on the line. No machines.</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-5 lg:mb-6">
              <BiEnvelope className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Email
            </h3>
            <p className="mb-5 md:mb-6">
              Send us the details. We read every one.
            </p>
            <a className="underline" href={SITE.emailHref}>
              {SITE.email}
            </a>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-5 lg:mb-6">
              <BiPhone className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Phone
            </h3>
            <p className="mb-5 md:mb-6">
              We pick up. If we miss you, we call back fast.
            </p>
            <a className="underline" href={SITE.phoneHref}>
              {SITE.phone}
            </a>
          </div>
          <div className="flex flex-col items-center justify-start text-center">
            <div className="mb-5 lg:mb-6">
              <BiMap className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold leading-[1.4] md:text-3xl lg:mb-4 lg:text-4xl">
              Office
            </h3>
            <p className="mb-5 md:mb-6">
              The hub for crews from Jacksonville to Tampa.
            </p>
            <a className="underline" href={SITE.mapsHref} target="_blank" rel="noreferrer">
              {SITE.address}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

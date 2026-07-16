"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta52() {
  return (
    <section id="get-quote" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center border border-border-primary bg-background-secondary p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <p className="brand-eyebrow">Quick start</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Start your fence project
            </h2>
            <p className="md:text-md">
              Drop your email and we’ll follow up within one business day—or
              go straight to the full quote form.
            </p>
          </div>
          <div className="mx-auto mt-6 w-full max-w-md md:mt-8">
            <form
              name="quote"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you/"
              className="rb-4 mb-4 grid grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
            >
              <input type="hidden" name="form-name" value="quote" />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
              />
              <Button
                type="submit"
                title="Get started"
                variant="primary"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                Get started
              </Button>
            </form>
            <p className="text-center text-sm">
              Prefer the full form?{" "}
              <a href="/contact-us" className="font-semibold underline">
                Request a free quote
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

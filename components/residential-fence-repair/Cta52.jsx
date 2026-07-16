"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta52() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center border border-border-primary p-8 md:p-12 lg:p-16">
          <div className="max-w-lg text-center">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Describe your fence repair need
            </h2>
            <p className="md:text-md">
              Tell us what happened. We will get back with a plan and a price
              within hours.
            </p>
          </div>
          <div className="mx-auto mt-6 max-w-sm md:mt-8">
            <form
              name="quote"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you/"
              className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
            >
              <input type="hidden" name="form-name" value="quote" />
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <Input id="email" name="email" type="email" required placeholder="Enter your email" />
              <Button
                title="Sign up"
                variant="primary"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                Sign up
              </Button>
            </form>
            <p className="text-xs">
              By clicking Sign Up you're confirming that you agree with our
              Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

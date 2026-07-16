"use client";

import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import React, { useState } from "react";

export function Contact7() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      window.location.href = "/thank-you/";
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="estimate" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">Estimate</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Get a free quote
            </h2>
            <p className="md:text-md">
              Tell us about the job. We respond fast with a clear next step—no
              pressure, no spam.
            </p>
          </div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2">
                Name
              </Label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2">
                Phone
              </Label>
              <Input type="tel" id="phone" name="phone" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2">
                Project details
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Address, fence type, repair or new install..."
                className="min-h-[11.25rem] overflow-auto"
                required
              />
            </div>
            <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
              <Checkbox id="terms" name="terms" required />
              <Label htmlFor="terms" className="cursor-pointer">
                I agree to be contacted about my fence project
              </Label>
            </div>
            <div>
              <Button type="submit" title="Submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Request free quote"}
              </Button>
              {status === "error" && (
                <p className="mt-3 text-sm text-red-600">
                  Something went wrong. Please call us or try again.
                </p>
              )}
            </div>
          </form>
        </div>
        <div>
          <img
            src="/images/home-hero-header-section.jpg"
            alt="Fence installation project"
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

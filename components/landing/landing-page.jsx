"use client";

import { Button } from "@relume_io/relume-ui";
import { BrandLogo } from "@/components/brand-logo";
import { QuoteButton } from "@/components/quote-button";
import { Hero } from "@/components/landing/hero";
import { SiteHeader } from "@/components/landing/site-header";
import { HOME_FAQS, HOME_STEPS } from "@/lib/seo";
import { SITE } from "@/lib/site";
import React from "react";
import {
  BiCheckCircle,
  BiMap,
  BiTimeFive,
} from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

const SERVICES = [
  {
    title: "Wood fence",
    body: "Privacy and curb appeal with cedar or pressure-treated wood—posts set for Florida soil and storms.",
    image: "/images/home-gallery-section-0.jpg",
  },
  {
    title: "Vinyl fence",
    body: "Low-maintenance privacy that holds color in sun and humidity. Clean lines, no painting.",
    image: "/images/home-gallery-section-1.jpg",
  },
  {
    title: "Aluminum fence",
    body: "Rust-proof ornamental and pool-ready options. Strong, refined, and built to last.",
    image: "/images/home-gallery-section-3.jpg",
  },
  {
    title: "Chain link",
    body: "Durable security for homes, pets, and commercial lots. Galvanized and coated systems.",
    image: "/images/home-gallery-section-2.jpg",
  },
];

const WHY = [
  {
    icon: BiTimeFive,
    title: "Fast repair response",
    body: "Storm damage or a failed post—we move quickly so your line is secure again.",
  },
  {
    icon: BiMap,
    title: "Jax to Tampa corridor",
    body: "One crew network across Central Florida. Residential and commercial jobs.",
  },
  {
    icon: BiCheckCircle,
    title: "Clean, code-aware work",
    body: "Straight lines, solid posts, permits and HOA details handled with care.",
  },
];

const STEPS = HOME_STEPS.map((step, i) => ({
  n: String(i + 1).padStart(2, "0"),
  t: step.name,
  d: step.text,
}));

const AREAS = SITE.serviceAreas.filter((a) => a !== "Central Florida");

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`px-5 py-14 md:px-8 md:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-[1120px]">{children}</div>
    </section>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <SiteHeader />
      <Hero />

      {/* AEO definition block — fact-first, extractable */}
      <Section id="about" className="bg-background-secondary !py-10 md:!py-12">
        <p className="brand-eyebrow">About {SITE.webName}</p>
        <h2 className="mb-4 max-w-2xl text-2xl font-bold md:text-3xl">
          Central Florida fence installation and repair
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-text-secondary md:text-base">
          {SITE.about}
        </p>
      </Section>

      {/* Services */}
      <Section id="services" className="bg-background-primary">
        <p className="brand-eyebrow">Services</p>
        <h2 className="mb-3 max-w-xl text-3xl font-bold md:text-4xl lg:text-5xl">
          Install and repair, every material
        </h2>
        <p className="mb-10 max-w-xl text-text-secondary md:text-md">
          One team for residential and commercial fence work across Central
          Florida from Jacksonville to Tampa.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="flex flex-col overflow-hidden border border-border-primary bg-background-primary"
            >
              <img
                src={s.image}
                alt={s.title}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                <p className="mb-5 flex-1 text-sm text-text-secondary">{s.body}</p>
                <QuoteButton variant="link" size="link" className="justify-start p-0">
                  Get quote <RxChevronRight className="size-5" />
                </QuoteButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Why us */}
      <Section id="why" className="bg-background-secondary">
        <p className="brand-eyebrow">Why Meridian</p>
        <h2 className="mb-10 max-w-xl text-3xl font-bold md:text-4xl lg:text-5xl">
          Professional fence work without the noise
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {WHY.map((item) => (
            <div
              key={item.title}
              className="border border-border-primary bg-background-primary p-6"
            >
              <item.icon className="mb-4 size-8 text-brand-accent" aria-hidden />
              <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-text-secondary md:text-base">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process">
        <p className="brand-eyebrow">Process</p>
        <h2 className="mb-10 max-w-xl text-3xl font-bold md:text-4xl lg:text-5xl">
          Simple path from quote to finished line
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.n} className="border border-border-primary p-6">
              <p className="mb-3 text-sm font-bold text-brand-accent">{step.n}</p>
              <h3 className="mb-2 text-lg font-bold">{step.t}</h3>
              <p className="text-sm text-text-secondary">{step.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Areas */}
      <Section id="areas" className="bg-background-secondary">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="brand-eyebrow">Service area</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Central Florida coverage
            </h2>
            <p className="mb-6 text-text-secondary md:text-md">
              {SITE.area}. Install and repair for homes, HOAs, and commercial
              properties.
            </p>
            <ul className="mb-8 flex flex-wrap gap-2">
              {AREAS.map((city) => (
                <li
                  key={city}
                  className="border border-border-primary bg-background-primary px-3 py-1.5 text-sm font-medium"
                >
                  {city}
                </li>
              ))}
            </ul>
            <QuoteButton>Get free quote</QuoteButton>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/images/home-about-section.jpg"
              alt="Fence crew working on a property line"
              className="size-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* FAQ — matches FAQPage schema for rich results + AEO */}
      <Section id="faq">
        <p className="brand-eyebrow">FAQ</p>
        <h2 className="mb-3 max-w-xl text-3xl font-bold md:text-4xl lg:text-5xl">
          Fence questions, direct answers
        </h2>
        <p className="mb-8 max-w-xl text-text-secondary md:text-md">
          Permits, HOA rules, storm readiness, timelines, and service area for{" "}
          {SITE.webName}.
        </p>
        <div className="mx-auto max-w-3xl divide-y divide-border-primary border border-border-primary">
          {HOME_FAQS.map((item) => (
            <details key={item.q} className="group p-5 md:p-6">
              <summary className="cursor-pointer list-none text-base font-bold md:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-brand-accent transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-text-secondary md:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section id="contact" className="bg-background-alternative text-text-alternative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent md:text-sm">
            {SITE.tagline}
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Get your free estimate today
          </h2>
          <p className="mb-8 text-white/80 md:text-md">
            Tell us about the job. We’ll follow up with a clear next step—no
            pressure.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <QuoteButton className="w-full sm:w-auto">Get free quote</QuoteButton>
            <Button variant="secondary-alt" className="w-full sm:w-auto" asChild>
              <a href={SITE.phoneHref}>Call {SITE.phone}</a>
            </Button>
            <Button variant="link-alt" className="w-full sm:w-auto" asChild>
              <a href={SITE.smsHref}>Text us</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border-primary px-5 py-10 md:px-8">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <BrandLogo variant="dark" />
            <p className="mt-4 max-w-sm text-sm text-text-secondary">
              {SITE.webName} — {SITE.tagline} Install and repair across{" "}
              {SITE.area}.
            </p>
            <p className="mt-2 max-w-sm text-xs text-text-secondary">
              {SITE.addressLine}
            </p>
          </div>
          <div className="grid gap-6 text-sm sm:grid-cols-2">
            <div>
              <p className="mb-2 font-bold">Contact</p>
              <a href={SITE.phoneHref} className="block py-1 hover:underline">
                {SITE.phone}
              </a>
              <a href={SITE.emailHref} className="block py-1 hover:underline">
                {SITE.email}
              </a>
              <a href={SITE.smsHref} className="block py-1 hover:underline">
                Text us
              </a>
            </div>
            <div>
              <p className="mb-2 font-bold">Company</p>
              <p className="py-1 text-text-secondary">{SITE.webName}</p>
              <p className="py-1 text-text-secondary">{SITE.name}</p>
              <p className="py-1 text-text-secondary">{SITE.domain}</p>
              <a href="/deposit" className="block py-1 hover:underline">
                Pay deposit
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 w-full max-w-[1120px] border-t border-border-primary pt-6 text-xs text-text-secondary md:text-sm">
          <p>
            © {SITE.year} {SITE.name} ({SITE.webName}). A DBA of{" "}
            {SITE.legalName}. All rights reserved.{" "}
            <a href="https://fencelineflorida.com" className="underline">
              fencelineflorida.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

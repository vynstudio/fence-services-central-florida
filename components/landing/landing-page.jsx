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

const AREAS = SITE.serviceAreas.filter(
  (a) => a !== "Central Florida" && a !== "North Florida",
);

/**
 * Mobile-first section shell:
 * - phone: tight vertical rhythm
 * - iPad: more air, still compact
 * - desktop: full editorial spacing
 */
function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`px-4 py-10 sm:px-5 sm:py-12 md:px-8 md:py-16 lg:py-20 xl:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1120px]">{children}</div>
    </section>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <SiteHeader />
      <Hero />

      {/* About — denser on phone */}
      <Section id="about" className="bg-background-secondary !py-8 sm:!py-10 md:!py-12">
        <p className="brand-eyebrow">About {SITE.webName}</p>
        <h2 className="mb-3 max-w-2xl text-xl font-bold sm:text-2xl md:mb-4 md:text-3xl">
          Professional fence installation and repair
        </h2>
        <div className="max-w-3xl space-y-3 text-sm leading-relaxed text-text-secondary md:space-y-4 md:text-base">
          <p>
            FenceLine Florida is a DBA of Diler Dynamics Group LLC, providing
            professional fence installation and repair services across Central
            and North Florida. We specialize in wood, vinyl, aluminum, and
            chain-link fencing for both residential and commercial properties,
            serving areas from Jacksonville to Tampa, including Orlando,
            Sanford, Kissimmee, Clermont, Lakeland, Daytona Beach, Melbourne,
            and Ocala.
          </p>
          <p>{SITE.aboutEngineering}</p>
        </div>
      </Section>

      {/* Services
          phone: 1 col horizontal cards
          iPad: 2×2
          desktop: 4 col
      */}
      <Section id="services">
        <p className="brand-eyebrow">Services</p>
        <h2 className="mb-2 max-w-xl text-2xl font-bold sm:text-3xl md:mb-3 md:text-4xl lg:text-5xl">
          Install and repair, every material
        </h2>
        <p className="mb-6 max-w-xl text-sm text-text-secondary sm:mb-8 sm:text-base md:mb-10 md:text-md">
          Professional install and repair for residential and commercial
          properties across Central and North Florida—Jacksonville to Tampa.
        </p>

        {/* Phone: horizontal snap cards */}
        <div className="mb-0 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="w-[78%] max-w-[280px] shrink-0 snap-start overflow-hidden border border-border-primary bg-background-primary"
            >
              <img
                src={s.image}
                alt={s.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="flex flex-col p-4">
                <h3 className="mb-1.5 text-base font-bold">{s.title}</h3>
                <p className="mb-3 line-clamp-3 text-sm text-text-secondary">
                  {s.body}
                </p>
                <QuoteButton
                  variant="link"
                  size="link"
                  className="min-h-10 justify-start p-0"
                >
                  Get quote <RxChevronRight className="size-5" />
                </QuoteButton>
              </div>
            </article>
          ))}
        </div>

        {/* iPad + desktop grid */}
        <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="flex flex-col overflow-hidden border border-border-primary bg-background-primary"
            >
              <img
                src={s.image}
                alt={s.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-4 lg:p-5">
                <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                <p className="mb-4 flex-1 text-sm text-text-secondary">{s.body}</p>
                <QuoteButton
                  variant="link"
                  size="link"
                  className="justify-start p-0"
                >
                  Get quote <RxChevronRight className="size-5" />
                </QuoteButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Why
          phone: stack
          iPad: 3 equal cols
          desktop: same, more padding
      */}
      <Section id="why" className="bg-background-secondary">
        <p className="brand-eyebrow">Why us</p>
        <h2 className="mb-6 max-w-xl text-2xl font-bold sm:text-3xl md:mb-8 md:text-4xl lg:mb-10 lg:text-5xl">
          Professional fence work without the noise
        </h2>
        <div className="grid gap-3 sm:gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
          {WHY.map((item) => (
            <div
              key={item.title}
              className="border border-border-primary bg-background-primary p-4 sm:p-5 md:p-5 lg:p-6"
            >
              <item.icon
                className="mb-3 size-7 text-brand-accent sm:mb-4 sm:size-8"
                aria-hidden
              />
              <h3 className="mb-1.5 text-lg font-bold sm:mb-2 sm:text-xl">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary md:text-base">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process
          phone: vertical timeline
          iPad: 2×2
          desktop: 4 cols
      */}
      <Section id="process">
        <p className="brand-eyebrow">Process</p>
        <h2 className="mb-6 max-w-xl text-2xl font-bold sm:text-3xl md:mb-8 md:text-4xl lg:mb-10 lg:text-5xl">
          Simple path from quote to finished line
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              className="relative border border-border-primary p-4 sm:p-5 md:p-6"
            >
              <p className="mb-2 text-sm font-bold text-brand-accent sm:mb-3">
                {step.n}
              </p>
              <h3 className="mb-1.5 text-base font-bold sm:mb-2 sm:text-lg">
                {step.t}
              </h3>
              <p className="text-sm text-text-secondary">{step.d}</p>
              {i < STEPS.length - 1 && (
                <span
                  className="absolute -bottom-2 left-1/2 hidden h-4 w-px -translate-x-1/2 bg-border-primary sm:block lg:hidden"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Areas
          phone: stack (copy then image)
          iPad: side-by-side
          desktop: wider gap
      */}
      <Section id="areas" className="bg-background-secondary">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          <div className="order-2 md:order-1">
            <p className="brand-eyebrow">Service area</p>
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
              Central & North Florida coverage
            </h2>
            <p className="mb-4 text-sm text-text-secondary sm:mb-5 sm:text-base md:mb-6 md:text-md">
              From Jacksonville to Tampa—including Orlando, Sanford, Kissimmee,
              Clermont, Lakeland, Daytona Beach, Melbourne, and Ocala.
              Residential and commercial.
            </p>
            <ul className="mb-6 flex flex-wrap gap-1.5 sm:mb-8 sm:gap-2">
              {AREAS.map((city) => (
                <li
                  key={city}
                  className="border border-border-primary bg-background-primary px-2.5 py-1.5 text-xs font-medium sm:px-3 sm:text-sm"
                >
                  {city}
                </li>
              ))}
            </ul>
            <QuoteButton className="min-h-12 w-full touch-manipulation sm:w-auto sm:min-h-11">
              Get free quote
            </QuoteButton>
          </div>
          <div className="relative order-1 aspect-[16/10] overflow-hidden md:order-2 md:aspect-[4/3]">
            <img
              src="/images/home-about-section.jpg"
              alt="Fence crew working on a property line"
              className="size-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* FAQ — larger tap targets on phone */}
      <Section id="faq">
        <p className="brand-eyebrow">FAQ</p>
        <h2 className="mb-2 max-w-xl text-2xl font-bold sm:mb-3 sm:text-3xl md:text-4xl lg:text-5xl">
          Fence questions, direct answers
        </h2>
        <p className="mb-6 max-w-xl text-sm text-text-secondary sm:mb-8 sm:text-base md:text-md">
          Permits, HOA rules, storm readiness, timelines, and service area for{" "}
          {SITE.webName}.
        </p>
        <div className="mx-auto max-w-3xl divide-y divide-border-primary border border-border-primary">
          {HOME_FAQS.map((item) => (
            <details key={item.q} className="group">
              <summary className="cursor-pointer list-none px-4 py-4 text-[0.95rem] font-bold touch-manipulation sm:px-5 sm:py-5 sm:text-base md:p-6 md:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3 sm:gap-4">
                  <span className="min-w-0 flex-1">{item.q}</span>
                  <span className="mt-0.5 shrink-0 text-brand-accent transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="px-4 pb-4 text-sm leading-relaxed text-text-secondary sm:px-5 sm:pb-5 md:px-6 md:pb-6 md:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section
        id="contact"
        className="bg-background-alternative text-text-alternative"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-accent sm:mb-3 sm:text-xs md:text-sm">
            {SITE.tagline}
          </p>
          <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Get your free estimate today
          </h2>
          <p className="mb-6 text-sm text-white/80 sm:mb-8 sm:text-base md:text-md">
            Tell us about the job. A representative from our team will contact
            you soon—no pressure.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-2.5 sm:gap-3 md:flex-row md:items-center">
            <QuoteButton className="min-h-12 w-full touch-manipulation md:w-auto md:min-h-11">
              Get free quote
            </QuoteButton>
            <Button
              variant="secondary-alt"
              className="min-h-12 w-full touch-manipulation md:w-auto md:min-h-11"
              asChild
            >
              <a href={SITE.phoneHref}>Call {SITE.phone}</a>
            </Button>
            <Button
              variant="link-alt"
              className="min-h-11 w-full touch-manipulation md:w-auto"
              asChild
            >
              <a href={SITE.smsHref}>Text us</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer — stacked phone, split tablet+ */}
      <footer className="border-t border-border-primary px-4 py-8 sm:px-5 sm:py-10 md:px-8">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 sm:gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <BrandLogo variant="dark" />
            <p className="mt-3 max-w-sm text-sm text-text-secondary sm:mt-4">
              {SITE.tagline} Professional fence installation and repair across{" "}
              {SITE.area}.
            </p>
            <p className="mt-2 max-w-sm text-xs text-text-secondary">
              {SITE.addressLine}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm sm:gap-8">
            <div>
              <p className="mb-2 font-bold">Contact</p>
              <a
                href={SITE.phoneHref}
                className="block min-h-10 py-1.5 hover:underline touch-manipulation"
              >
                {SITE.phone}
              </a>
              <a
                href={SITE.emailHref}
                className="block min-h-10 break-all py-1.5 hover:underline touch-manipulation"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.smsHref}
                className="block min-h-10 py-1.5 hover:underline touch-manipulation"
              >
                Text us
              </a>
            </div>
            <div>
              <p className="mb-2 font-bold">Company</p>
              <p className="py-1 text-text-secondary">{SITE.name}</p>
              <p className="py-1 text-text-secondary">{SITE.domain}</p>
              <p className="py-1 text-xs text-text-secondary">{SITE.legalLine}</p>
              <a
                href="/deposit"
                className="block min-h-10 py-1.5 hover:underline touch-manipulation"
              >
                Pay deposit
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 w-full max-w-[1120px] border-t border-border-primary pt-5 text-xs text-text-secondary sm:mt-10 sm:pt-6 sm:text-sm">
          <p>
            © {SITE.year} {SITE.name}. {SITE.legalLine} All rights reserved.{" "}
            <a href="https://fencelineflorida.com" className="underline">
              fencelineflorida.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

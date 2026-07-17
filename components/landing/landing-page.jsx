"use client";

/**
 * Strategic section order (conversion + SEO/AEO):
 * 1. Hero          — attention + primary CTA
 * 2. Services      — what you buy (SEO)
 * 3. Florida-built — core differentiator
 * 4. Why us        — craft vs volume
 * 5. Process       — reduce risk
 * 6. Areas         — local SEO
 * 7. FAQ           — one place only, before final CTA (objections)
 * 8. About         — company story (low, not ATF)
 * 9. Contact CTA   — convert
 */

import { Button } from "@relume_io/relume-ui";
import { BrandLogo } from "@/components/brand-logo";
import { QuoteButton } from "@/components/quote-button";
import { Hero } from "@/components/landing/hero";
import { SiteHeader } from "@/components/landing/site-header";
import {
  CORE_SERVICES,
  FLORIDA_STANDARDS,
  HOME_FAQS,
  HOME_STEPS,
  WHY_POINTS,
} from "@/lib/seo";
import { SITE } from "@/lib/site";
import React from "react";
import {
  BiCheckCircle,
  BiFile,
  BiHomeAlt,
  BiMap,
  BiShield,
  BiTimeFive,
} from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

const WHY_ICONS = [BiShield, BiTimeFive, BiHomeAlt, BiFile];

const STEPS = HOME_STEPS.map((step, i) => ({
  n: String(i + 1).padStart(2, "0"),
  t: step.name,
  d: step.text,
}));

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

function CtaStrip({ className = "" }) {
  return (
    <div
      className={`flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center ${className}`}
    >
      <QuoteButton className="min-h-12 w-full touch-manipulation sm:w-auto sm:min-h-11">
        Get My Fence Quote
      </QuoteButton>
      <Button
        variant="secondary"
        className="min-h-12 w-full touch-manipulation sm:w-auto sm:min-h-11"
        asChild
      >
        <a href="#contact">Schedule Site Visit</a>
      </Button>
      <Button
        variant="link"
        className="min-h-11 w-full justify-center touch-manipulation sm:w-auto sm:justify-start"
        asChild
      >
        <a href={SITE.phoneHref}>Call for Same-Week Availability</a>
      </Button>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <SiteHeader />

      {/* 1 — Hero */}
      <Hero />

      {/* 2 — Services (offer first) */}
      <Section id="services">
        <p className="brand-eyebrow">Services</p>
        <h2 className="mb-3 max-w-2xl text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
          {SITE.servicesHeading}
        </h2>
        <p className="mb-8 max-w-2xl text-sm text-text-secondary sm:text-base md:mb-10 md:text-md">
          {SITE.servicesLead}
        </p>

        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-text-primary">
          Our core services include
        </p>

        <div className="mb-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
          {CORE_SERVICES.map((s) => (
            <article
              key={s.title}
              className="w-[82%] max-w-[300px] shrink-0 snap-start overflow-hidden border border-border-primary bg-background-primary"
            >
              <img
                src={s.image}
                alt={s.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="mb-1.5 text-base font-bold leading-snug">
                  {s.title}
                </h3>
                <p className="mb-3 text-sm text-text-secondary">{s.body}</p>
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

        <div className="mb-8 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {CORE_SERVICES.map((s) => (
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
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-lg font-bold leading-snug">{s.title}</h3>
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

        <p className="mb-6 max-w-2xl text-sm font-medium text-text-primary md:text-base">
          {SITE.servicesClose}
        </p>
        <CtaStrip />
      </Section>

      {/* 3 — Built for Florida (differentiator) */}
      <Section id="florida" className="bg-background-secondary">
        <p className="brand-eyebrow">Built for Florida conditions</p>
        <h2 className="mb-3 max-w-2xl text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
          {SITE.floridaHeading}
        </h2>
        <p className="mb-8 max-w-2xl text-sm text-text-secondary sm:text-base md:mb-10 md:text-md">
          {SITE.floridaLead}
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:gap-4">
          {FLORIDA_STANDARDS.map((line) => (
            <li
              key={line}
              className="flex gap-3 border border-border-primary bg-background-primary p-4 sm:p-5"
            >
              <BiCheckCircle
                className="mt-0.5 size-5 shrink-0 text-brand-accent"
                aria-hidden
              />
              <span className="text-sm font-medium text-text-primary md:text-base">
                {line}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4 — Why choose (brand) */}
      <Section id="why">
        <p className="brand-eyebrow">Why FenceLine Florida</p>
        <h2 className="mb-3 max-w-2xl text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
          {SITE.whyHeading}
        </h2>
        <p className="mb-8 max-w-2xl text-sm text-text-secondary sm:text-base md:mb-10 md:text-md">
          {SITE.whyLead}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
          {WHY_POINTS.map((item, i) => {
            const Icon = WHY_ICONS[i] || BiCheckCircle;
            return (
              <div
                key={item.title}
                className="border border-border-primary bg-background-secondary p-4 sm:p-5 lg:p-6"
              >
                <Icon
                  className="mb-3 size-7 text-brand-accent sm:size-8"
                  aria-hidden
                />
                <h3 className="mb-1.5 text-lg font-bold sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary md:text-base">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 5 — Process (trust) */}
      <Section id="process" className="bg-background-secondary">
        <p className="brand-eyebrow">How it works</p>
        <h2 className="mb-6 max-w-xl text-2xl font-bold sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl">
          How our fence process works
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-5">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="border border-border-primary bg-background-primary p-4 sm:p-5"
            >
              <p className="mb-2 text-sm font-bold text-brand-accent">
                {step.n}
              </p>
              <h3 className="mb-1.5 text-base font-bold sm:text-lg">{step.t}</h3>
              <p className="text-sm text-text-secondary">{step.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <CtaStrip />
        </div>
      </Section>

      {/* 6 — Areas (local SEO) */}
      <Section id="areas">
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
          <div>
            <p className="brand-eyebrow">Service areas</p>
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
              {SITE.areasHeading}
            </h2>
            <p className="mb-6 text-sm text-text-secondary sm:text-base md:text-md">
              {SITE.areasLead}
            </p>
            <ul className="mb-6 space-y-3">
              {SITE.serviceAreaGroups.map((g) => (
                <li key={g.title} className="flex gap-3">
                  <BiMap
                    className="mt-0.5 size-5 shrink-0 text-brand-accent"
                    aria-hidden
                  />
                  <div>
                    <p className="font-bold text-text-primary">{g.title}</p>
                    <p className="text-sm text-text-secondary">{g.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mb-6 text-sm text-text-secondary md:text-base">
              {SITE.areasNearMe}
            </p>
            <QuoteButton className="min-h-12 w-full touch-manipulation sm:w-auto sm:min-h-11">
              Get My Fence Quote
            </QuoteButton>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[22rem]">
            <img
              src="/images/home-about-section.jpg"
              alt="FenceLine Florida serving Central and North Florida"
              className="size-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* 7 — FAQ once (AEO + objections before convert) */}
      <Section id="faq" className="bg-background-secondary">
        <p className="brand-eyebrow">FAQ</p>
        <h2 className="mb-3 max-w-xl text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl">
          Common questions
        </h2>
        <p className="mb-6 max-w-xl text-sm text-text-secondary sm:mb-8 md:text-base">
          What we install, where we work, permits, HOA, and Florida weather—clear
          answers before you request a quote.
        </p>
        <div className="mx-auto max-w-3xl divide-y divide-border-primary border border-border-primary bg-background-primary">
          {HOME_FAQS.map((item) => (
            <details key={item.q} className="group">
              <summary className="cursor-pointer list-none px-4 py-4 text-[0.95rem] font-bold touch-manipulation sm:px-5 sm:py-5 sm:text-base md:p-6 md:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
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

      {/* 8 — About (low on page — not ATF) */}
      <Section id="about">
        <div className="mx-auto max-w-3xl">
          <p className="brand-eyebrow">About us</p>
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Owner-led. Florida-focused. Craft over volume.
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-text-secondary md:space-y-4 md:text-base">
            <p>{SITE.about}</p>
            <p>{SITE.aboutBody}</p>
            <p className="text-xs md:text-sm">{SITE.legalLine}</p>
          </div>
        </div>
      </Section>

      {/* 9 — Final conversion */}
      <Section
        id="contact"
        className="bg-background-alternative text-text-alternative"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-accent sm:mb-3 sm:text-xs md:text-sm">
            Ready to install your fence?
          </p>
          <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            {SITE.ctaHeading}
          </h2>
          <p className="mb-4 text-sm text-white/80 sm:mb-6 sm:text-base md:text-md">
            {SITE.ctaLead}
          </p>
          <p className="mb-8 text-sm text-white/65">
            A representative from our team will contact you soon.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-2.5 sm:gap-3 md:flex-row md:items-center">
            <QuoteButton className="min-h-12 w-full touch-manipulation md:w-auto md:min-h-11">
              Get My Fence Quote
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

      <footer className="border-t border-border-primary px-4 py-8 sm:px-5 sm:py-10 md:px-8">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 sm:gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <BrandLogo variant="dark" />
            <p className="mt-3 max-w-sm text-sm text-text-secondary sm:mt-4">
              {SITE.tagline} Owner-led fence installation and repair across{" "}
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
              <p className="mb-2 font-bold">Explore</p>
              <a href="#services" className="block min-h-10 py-1.5 hover:underline">
                Services
              </a>
              <a href="#faq" className="block min-h-10 py-1.5 hover:underline">
                FAQ
              </a>
              <a href="#about" className="block min-h-10 py-1.5 hover:underline">
                About
              </a>
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

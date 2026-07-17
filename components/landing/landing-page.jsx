"use client";

/**
 * SEO + AEO foundation homepage.
 * Three shells: phone (<768) · iPad (768–1023) · desktop (≥1024)
 * Flow: Hero → Services → Areas → Why → FAQ → About → CTA
 */

import { Button } from "@relume_io/relume-ui";
import { BrandLogo } from "@/components/brand-logo";
import { QuoteButton } from "@/components/quote-button";
import { Hero } from "@/components/landing/hero";
import { SiteHeader } from "@/components/landing/site-header";
import {
  FULL_SERVICES,
  HOME_FAQS,
  MATERIAL_SERVICES,
  WHY_POINTS,
} from "@/lib/seo";
import { SITE } from "@/lib/site";
import React from "react";
import {
  BiCheckCircle,
  BiFile,
  BiHomeAlt,
  BiShield,
  BiTimeFive,
  BiWrench,
} from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { ResponsivePicture } from "@/components/responsive-picture";

const SERVICE_ICONS = [BiHomeAlt, BiWrench, BiShield, BiTimeFive, BiFile];
const WHY_ICONS = [BiShield, BiTimeFive, BiFile, BiCheckCircle];

const AREAS = SITE.serviceAreas.filter(
  (a) => a !== "Central Florida" && a !== "North Florida",
);

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`shell-section ${className}`}>
      <div className="shell-inner">{children}</div>
    </section>
  );
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <SiteHeader />
      <Hero />

      {/* Full-service fence company */}
      <Section id="services">
        <p className="brand-eyebrow">Services</p>
        <h2 className="mb-3 max-w-2xl text-[1.5rem] font-bold leading-tight sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
          {SITE.servicesHeading}
        </h2>
        <p className="mb-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:mb-8 sm:text-base md:mb-10 md:text-md">
          {SITE.servicesLead}
        </p>

        <p className="mb-4 text-sm font-bold text-text-primary">
          Our services include:
        </p>
        {/* Phone: 1 col · iPad: 2 col · Desktop: 3 col */}
        <ul className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {FULL_SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[i] || BiCheckCircle;
            return (
              <li
                key={s.title}
                className="flex gap-3 border border-border-primary bg-background-primary p-4 md:p-5"
              >
                <Icon
                  className="mt-0.5 size-6 shrink-0 text-brand-accent"
                  aria-hidden
                />
                <div>
                  <h3 className="mb-1 text-base font-bold sm:text-lg">{s.title}</h3>
                  <p className="text-sm text-text-secondary">{s.body}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mb-8 max-w-2xl text-sm font-medium text-text-primary md:text-base">
          {SITE.servicesClose}
        </p>

        <h3 className="mb-4 text-lg font-bold md:text-xl">
          Materials we install &amp; repair
        </h3>

        {/* Phone: horizontal snap cards */}
        <div className="shell-phone-only snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {MATERIAL_SERVICES.map((s) => (
            <article
              key={s.title}
              className="w-[78%] max-w-[280px] shrink-0 snap-start overflow-hidden border border-border-primary"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <ResponsivePicture
                  name={s.name}
                  alt={`${s.title} in Central Florida`}
                  className="block size-full"
                  fallback={s.image}
                />
              </div>
              <div className="p-4">
                <h4 className="mb-1.5 text-base font-bold">{s.title}</h4>
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

        {/* iPad: 2 col · Desktop: 4 col */}
        <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {MATERIAL_SERVICES.map((s) => (
            <article
              key={s.title}
              className="flex flex-col overflow-hidden border border-border-primary"
            >
              <div className="aspect-[4/3] w-full overflow-hidden lg:aspect-[16/10]">
                <ResponsivePicture
                  name={s.name}
                  alt={`${s.title} in Central Florida`}
                  className="block size-full"
                  fallback={s.image}
                />
              </div>
              <div className="flex flex-1 flex-col p-4 lg:p-5">
                <h4 className="mb-2 text-lg font-bold">{s.title}</h4>
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

      {/* Areas we serve */}
      <Section id="areas" className="bg-background-secondary">
        {/* Phone: photo then copy · iPad/Desktop: side-by-side */}
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-14">
          <div className="order-2 md:order-1">
            <p className="brand-eyebrow">Coverage</p>
            <h2 className="mb-3 text-[1.5rem] font-bold leading-tight md:mb-4 md:text-4xl lg:text-5xl">
              {SITE.areasHeading}
            </h2>
            <p className="mb-4 text-base leading-relaxed text-text-secondary md:mb-5 md:text-md">
              {SITE.areasLead}
            </p>
            <ul className="mb-5 flex flex-wrap gap-1.5 md:mb-6 md:gap-2">
              {AREAS.map((city) => (
                <li
                  key={city}
                  className="border border-border-primary bg-background-primary px-2.5 py-1.5 text-xs font-medium md:px-3 md:text-sm"
                >
                  {city}
                </li>
              ))}
            </ul>
            <p className="mb-6 text-sm text-text-secondary md:text-base">
              {SITE.areasNearMe}
            </p>
            <QuoteButton className="min-h-12 w-full touch-manipulation md:w-auto md:min-h-11">
              Get free quote
            </QuoteButton>
          </div>
          <div className="relative order-1 aspect-[3/4] overflow-hidden md:order-2 md:aspect-[4/3] lg:aspect-[16/10]">
            <ResponsivePicture
              name="about"
              alt="FenceLine Florida service area across Central and North Florida"
              className="absolute inset-0 block size-full"
              fallback="/images/home-about-section.jpg"
            />
          </div>
        </div>
      </Section>

      {/* Why choose */}
      <Section id="why">
        <p className="brand-eyebrow">Why us</p>
        <h2 className="mb-3 max-w-2xl text-[1.5rem] font-bold leading-tight sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
          {SITE.whyHeading}
        </h2>
        <p className="mb-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:mb-8 sm:text-base md:mb-10 md:text-md">
          {SITE.whyLead}
        </p>
        {/* Phone: stack · iPad/Desktop: 2×2 */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:gap-5">
          {WHY_POINTS.map((item, i) => {
            const Icon = WHY_ICONS[i] || BiCheckCircle;
            return (
              <div
                key={item.title}
                className="border border-border-primary bg-background-secondary p-4 md:p-5 lg:p-6"
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

      {/* AEO FAQ — one block, before convert */}
      <Section id="faq" className="bg-background-secondary">
        <p className="brand-eyebrow">FAQ</p>
        <h2 className="mb-3 max-w-xl text-[1.5rem] font-bold leading-tight sm:text-3xl md:mb-4 md:text-4xl">
          Common questions
        </h2>
        <p className="mb-5 max-w-xl text-base text-text-secondary sm:mb-8 md:text-base">
          Materials, permits, HOA, Florida weather, and service areas.
        </p>
        <div className="mx-auto max-w-3xl divide-y divide-border-primary border border-border-primary bg-background-primary">
          {HOME_FAQS.map((item) => (
            <details key={item.q} className="group">
              <summary className="cursor-pointer list-none px-4 py-4 text-base font-bold touch-manipulation sm:px-5 sm:py-5 sm:text-base md:p-6 md:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
                  <span className="min-w-0 flex-1 pr-2">{item.q}</span>
                  <span className="mt-0.5 shrink-0 text-brand-accent transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="px-4 pb-4 text-base leading-relaxed text-text-secondary sm:px-5 sm:pb-5 md:px-6 md:pb-6">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* About — full description lower on page */}
      <Section id="about">
        <div className="mx-auto max-w-3xl">
          <p className="brand-eyebrow">About FenceLine Florida</p>
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            {SITE.seoHeading}
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-text-secondary md:space-y-4 md:text-base">
            <p>{SITE.about}</p>
            <p>{SITE.aboutBody}</p>
            <p className="text-xs md:text-sm">{SITE.legalLine}</p>
          </div>
        </div>
      </Section>

      {/* Get a fence quote today */}
      <Section
        id="contact"
        className="bg-background-alternative text-text-alternative"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-accent sm:mb-3 sm:text-xs md:text-sm">
            Free estimate
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
          {/* Phone: stacked full-width · iPad/Desktop: row */}
          <div className="flex flex-col items-stretch justify-center gap-2.5 md:flex-row md:items-center md:gap-3">
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

      <footer className="border-t border-border-primary shell-section !py-8 md:!py-10">
        <div className="shell-inner flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8">
          <div>
            <BrandLogo variant="dark" />
            <p className="mt-3 max-w-sm text-sm text-text-secondary sm:mt-4">
              {SITE.tagline} Fence installation and repair across {SITE.area}.
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
              <a href="#areas" className="block min-h-10 py-1.5 hover:underline">
                Areas
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
        <div className="shell-inner mt-8 border-t border-border-primary pt-5 text-xs text-text-secondary md:mt-10 md:pt-6 md:text-sm">
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

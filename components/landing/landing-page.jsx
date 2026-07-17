"use client";

import { Button } from "@relume_io/relume-ui";
import { BrandLogo } from "@/components/brand-logo";
import { QuoteButton } from "@/components/quote-button";
import { Hero } from "@/components/landing/hero";
import { SiteHeader } from "@/components/landing/site-header";
import {
  FULL_SERVICES,
  HOME_FAQS,
  HOME_STEPS,
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

const SERVICE_ICONS = [BiHomeAlt, BiWrench, BiShield, BiTimeFive, BiFile];

const STEPS = HOME_STEPS.map((step, i) => ({
  n: String(i + 1).padStart(2, "0"),
  t: step.name,
  d: step.text,
}));

const AREAS = SITE.serviceAreas.filter(
  (a) => a !== "Central Florida" && a !== "North Florida",
);

const WHY_ICONS = [BiShield, BiTimeFive, BiFile, BiCheckCircle];

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

      {/* SEO intro — primary keyword H1 for crawlers & AEO */}
      <Section id="about" className="bg-background-secondary !py-8 sm:!py-10 md:!py-12">
        <p className="brand-eyebrow">About {SITE.webName}</p>
        <h1 className="mb-4 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl md:mb-5 md:text-4xl lg:text-[2.75rem]">
          {SITE.seoHeading}
        </h1>
        <div className="max-w-3xl space-y-3 text-sm leading-relaxed text-text-secondary md:space-y-4 md:text-base">
          <p>{SITE.about}</p>
          <p>{SITE.aboutBody}</p>
        </div>
      </Section>

      {/* Full-service company */}
      <Section id="services">
        <p className="brand-eyebrow">Full-service fence company</p>
        <h2 className="mb-2 max-w-2xl text-2xl font-bold sm:text-3xl md:mb-3 md:text-4xl lg:text-5xl">
          Everything from start to finish
        </h2>
        <p className="mb-6 max-w-2xl text-sm text-text-secondary sm:mb-8 sm:text-base md:mb-10 md:text-md">
          {SITE.fullServiceLead}
        </p>

        <ul className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {FULL_SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[i] || BiCheckCircle;
            return (
              <li
                key={s.title}
                className="flex gap-3 border border-border-primary bg-background-primary p-4 sm:p-5"
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

        <p className="mb-6 max-w-2xl text-sm font-medium text-text-primary sm:text-base">
          {SITE.fullServiceClose}
        </p>

        <h3 className="mb-4 text-lg font-bold md:text-xl">
          Materials we install & repair
        </h3>

        {/* Phone: horizontal snap cards */}
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
          {MATERIAL_SERVICES.map((s) => (
            <article
              key={s.title}
              className="w-[78%] max-w-[280px] shrink-0 snap-start overflow-hidden border border-border-primary bg-background-primary"
            >
              <img
                src={s.image}
                alt={`${s.title} installation in Central Florida`}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="flex flex-col p-4">
                <h4 className="mb-1.5 text-base font-bold">{s.title}</h4>
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

        <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {MATERIAL_SERVICES.map((s) => (
            <article
              key={s.title}
              className="flex flex-col overflow-hidden border border-border-primary bg-background-primary"
            >
              <img
                src={s.image}
                alt={`${s.title} installation in Central Florida`}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
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

      {/* Why choose */}
      <Section id="why" className="bg-background-secondary">
        <p className="brand-eyebrow">Why choose FenceLine Florida</p>
        <h2 className="mb-3 max-w-2xl text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
          Built for Florida. Done right the first time.
        </h2>
        <p className="mb-6 max-w-2xl text-sm text-text-secondary sm:mb-8 md:mb-10 md:text-md">
          {SITE.whyLead}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
          {WHY_POINTS.map((item, i) => {
            const Icon = WHY_ICONS[i] || BiCheckCircle;
            return (
              <div
                key={item.title}
                className="border border-border-primary bg-background-primary p-4 sm:p-5 lg:p-6"
              >
                <Icon
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
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section id="process">
        <p className="brand-eyebrow">Process</p>
        <h2 className="mb-6 max-w-xl text-2xl font-bold sm:text-3xl md:mb-8 md:text-4xl lg:mb-10 lg:text-5xl">
          Simple path from quote to finished line
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="border border-border-primary p-4 sm:p-5 md:p-6"
            >
              <p className="mb-2 text-sm font-bold text-brand-accent sm:mb-3">
                {step.n}
              </p>
              <h3 className="mb-1.5 text-base font-bold sm:mb-2 sm:text-lg">
                {step.t}
              </h3>
              <p className="text-sm text-text-secondary">{step.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Areas we serve */}
      <Section id="areas" className="bg-background-secondary">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          <div className="order-2 md:order-1">
            <p className="brand-eyebrow">Areas we serve</p>
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
              Central & North Florida
            </h2>
            <p className="mb-4 text-sm text-text-secondary sm:mb-5 sm:text-base md:mb-6 md:text-md">
              {SITE.areasLead}
            </p>
            <ul className="mb-5 flex flex-wrap gap-1.5 sm:mb-6 sm:gap-2">
              {AREAS.map((city) => (
                <li
                  key={city}
                  className="border border-border-primary bg-background-primary px-2.5 py-1.5 text-xs font-medium sm:px-3 sm:text-sm"
                >
                  {city}
                </li>
              ))}
            </ul>
            <p className="mb-6 text-sm text-text-secondary md:text-base">
              {SITE.areasNearMe}
            </p>
            <QuoteButton className="min-h-12 w-full touch-manipulation sm:w-auto sm:min-h-11">
              Get free quote
            </QuoteButton>
          </div>
          <div className="relative order-1 aspect-[16/10] overflow-hidden md:order-2 md:aspect-[4/3]">
            <img
              src="/images/home-about-section.jpg"
              alt="FenceLine Florida crew installing fencing in Central Florida"
              className="size-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* AEO FAQ */}
      <Section id="faq">
        <p className="brand-eyebrow">FAQ</p>
        <h2 className="mb-2 max-w-xl text-2xl font-bold sm:mb-3 sm:text-3xl md:text-4xl lg:text-5xl">
          Fence questions, direct answers
        </h2>
        <p className="mb-6 max-w-xl text-sm text-text-secondary sm:mb-8 sm:text-base md:text-md">
          Quick answers about materials, permits, Florida weather, and where we
          work—optimized for search and AI assistants.
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

      {/* Get a fence quote today */}
      <Section
        id="contact"
        className="bg-background-alternative text-text-alternative"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-accent sm:mb-3 sm:text-xs md:text-sm">
            Get a fence quote today
          </p>
          <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Reliable fence contractor in Florida
          </h2>
          <p className="mb-6 text-sm text-white/80 sm:mb-8 sm:text-base md:text-md">
            {SITE.ctaLead}
          </p>
          <p className="mb-6 text-sm text-white/70">
            A representative from our team will contact you soon.
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

      <footer className="border-t border-border-primary px-4 py-8 sm:px-5 sm:py-10 md:px-8">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 sm:gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <BrandLogo variant="dark" />
            <p className="mt-3 max-w-sm text-sm text-text-secondary sm:mt-4">
              {SITE.tagline} {SITE.seoHeading}. {SITE.legalLine}
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

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
  ScrollParallaxMedia,
  ScrollProgressLine,
  ScrollReveal,
  ScrollSection,
  ScrollStaggerGrid,
} from "@/components/landing/scroll-reveal";
import {
  FULL_SERVICES,
  HOME_FAQS,
  HOME_REVIEWS,
  MATERIAL_SERVICES,
  PRODUCT_LINES,
  WHY_POINTS,
} from "@/lib/seo";
import { CITY_PAGES } from "@/lib/locations";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { SITE } from "@/lib/site";
import React from "react";
import {
  BiCheckCircle,
  BiFile,
  BiHomeAlt,
  BiShield,
  BiStar,
  BiTimeFive,
  BiWrench,
} from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { ResponsivePicture } from "@/components/responsive-picture";

const SERVICE_ICONS = [
  BiHomeAlt,
  BiWrench,
  BiShield,
  BiTimeFive,
  BiFile,
  BiCheckCircle,
];
const WHY_ICONS = [BiShield, BiTimeFive, BiFile, BiCheckCircle];

const AREAS = SITE.serviceAreas.filter(
  (a) => a !== "Central Florida" && a !== "North Florida",
);

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <ScrollProgressLine />
      <SiteHeader />
      <Hero />

      {/* Full-service fence company */}
      <ScrollSection id="services">
        <ScrollReveal>
          <p className="brand-eyebrow">Services</p>
          <h2 className="mb-3 max-w-2xl text-[1.5rem] font-bold leading-tight sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
            {SITE.servicesHeading}
          </h2>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:mb-8 sm:text-base md:mb-10 md:text-md">
            {SITE.servicesLead}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="mb-4 text-sm font-bold text-text-primary">
            Our services include:
          </p>
        </ScrollReveal>

        <ScrollStaggerGrid className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {FULL_SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[i] || BiCheckCircle;
            return (
              <div
                key={s.title}
                className="brand-card flex h-full gap-3 p-4 md:p-5"
              >
                <Icon
                  className="mt-0.5 size-6 shrink-0 text-brand-accent"
                  aria-hidden
                />
                <div>
                  <h3 className="mb-1 text-base font-bold sm:text-lg">{s.title}</h3>
                  <p className="text-sm text-text-secondary">{s.body}</p>
                </div>
              </div>
            );
          })}
        </ScrollStaggerGrid>

        <ScrollReveal delay={0.05}>
          <p className="mb-8 max-w-2xl text-sm font-medium text-text-primary md:text-base">
            {SITE.servicesClose}
          </p>

          <h3 className="mb-2 text-lg font-bold md:text-xl">
            Materials &amp; systems we install
          </h3>
          <p className="mb-4 max-w-2xl text-sm text-text-secondary">
            Wholesale-grade product lines (including Master Halco catalog systems
            where available)—specified for Florida heat, humidity, and storms.
          </p>
        </ScrollReveal>

        {/* Phone: horizontal snap cards */}
        <div className="shell-phone-only snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {MATERIAL_SERVICES.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.05} className="contents">
              <article className="brand-card w-[78%] max-w-[280px] shrink-0 snap-start overflow-hidden">
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
                  <p className="mb-2 text-sm text-text-secondary">{s.body}</p>
                  {s.flNeed && (
                    <p className="mb-3 text-xs font-medium text-brand-accent">
                      FL fit: {s.flNeed}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-3">
                    <QuoteButton
                      variant="link"
                      size="link"
                      className="min-h-10 justify-start p-0"
                    >
                      Get quote <RxChevronRight className="size-5" />
                    </QuoteButton>
                    {s.slug && (
                      <a
                        href={`/services/${s.slug}`}
                        className="text-sm font-semibold text-brand-accent hover:underline"
                      >
                        Details
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* iPad: 2 col · Desktop: 3 col */}
        <ScrollStaggerGrid className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {MATERIAL_SERVICES.map((s) => (
            <article
              key={s.title}
              className="brand-card flex h-full flex-col overflow-hidden"
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
                <p className="mb-2 flex-1 text-sm text-text-secondary">{s.body}</p>
                {s.flNeed && (
                  <p className="mb-3 text-xs font-medium text-brand-accent">
                    FL fit: {s.flNeed}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-3">
                  <QuoteButton
                    variant="link"
                    size="link"
                    className="justify-start p-0"
                  >
                    Get quote <RxChevronRight className="size-5" />
                  </QuoteButton>
                  {s.slug && (
                    <a
                      href={`/services/${s.slug}`}
                      className="text-sm font-semibold text-brand-accent hover:underline"
                    >
                      Details
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </ScrollStaggerGrid>

        <ScrollReveal delay={0.05}>
          <div className="mt-10">
            <h3 className="mb-3 text-base font-bold md:text-lg">
              Full product catalog we can quote
            </h3>
            <p className="mb-4 max-w-2xl text-sm text-text-secondary">
              Aligned with major wholesale catalogs (Master Halco and others). We
              recommend and install what fits your property—not every SKU is right
              for every Florida lot.
            </p>
            <ul className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCT_LINES.map((p) => (
                <li
                  key={p.id}
                  className="brand-card px-3 py-3 text-sm"
                >
                  <span className="font-bold text-text-primary">{p.title}</span>
                  <span className="mt-0.5 block text-xs text-text-secondary">
                    {p.florida}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mb-4 text-xs text-text-secondary">{SITE.supplierNote}</p>
            <div className="flex flex-wrap gap-2">
              {SERVICE_PAGES.map((p) => (
                <a
                  key={p.slug}
                  href={`/services/${p.slug}`}
                  className="border border-brand-line bg-background-primary px-3 py-2 text-xs font-semibold text-brand-ink hover:border-brand-accent hover:text-brand-accent md:text-sm"
                >
                  {p.h1}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </ScrollSection>

      {/* Areas we serve */}
      <ScrollSection id="areas" className="bg-background-secondary" post={false}>
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-14">
          <ScrollReveal className="order-2 md:order-1">
            <p className="brand-eyebrow">Coverage</p>
            <h2 className="mb-3 text-[1.5rem] font-bold leading-tight md:mb-4 md:text-4xl lg:text-5xl">
              {SITE.areasHeading}
            </h2>
            <p className="mb-4 text-base leading-relaxed text-text-secondary md:mb-5 md:text-md">
              {SITE.areasLead}
            </p>
            <ul className="mb-5 flex flex-wrap gap-1.5 md:mb-6 md:gap-2">
              {CITY_PAGES.map((city) => (
                <li key={city.slug}>
                  <a
                    href={`/areas/${city.slug}`}
                    className="inline-block border border-brand-line bg-background-primary px-2.5 py-1.5 text-xs font-semibold text-brand-ink hover:border-brand-accent hover:text-brand-accent md:px-3 md:text-sm"
                  >
                    {city.name}
                  </a>
                </li>
              ))}
              {AREAS.filter(
                (a) => !CITY_PAGES.some((c) => c.name === a),
              ).map((city) => (
                <li
                  key={city}
                  className="border border-brand-line bg-background-primary px-2.5 py-1.5 text-xs font-semibold text-brand-ink md:px-3 md:text-sm"
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
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.08} className="order-1 md:order-2">
            <ScrollParallaxMedia className="relative aspect-[3/4] md:aspect-[4/3] lg:aspect-[16/10]">
              <ResponsivePicture
                name="about"
                alt="FenceLine Florida service area across Central and North Florida"
                className="absolute inset-0 block size-full scale-110"
                fallback="/images/home-about-section.jpg"
              />
            </ScrollParallaxMedia>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* Why choose */}
      <ScrollSection id="why">
        <ScrollReveal>
          <p className="brand-eyebrow">Why us</p>
          <h2 className="mb-3 max-w-2xl text-[1.5rem] font-bold leading-tight sm:text-3xl md:mb-4 md:text-4xl lg:text-5xl">
            {SITE.whyHeading}
          </h2>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:mb-8 sm:text-base md:mb-10 md:text-md">
            {SITE.whyLead}
          </p>
        </ScrollReveal>
        <ScrollStaggerGrid className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:gap-5">
          {WHY_POINTS.map((item, i) => {
            const Icon = WHY_ICONS[i] || BiCheckCircle;
            return (
              <div
                key={item.title}
                className="brand-card h-full bg-background-secondary p-4 md:p-5 lg:p-6"
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
        </ScrollStaggerGrid>
      </ScrollSection>

      {/* Reviews / social proof */}
      <ScrollSection id="reviews" className="bg-background-secondary">
        <ScrollReveal>
          <p className="brand-eyebrow">Reviews</p>
          <h2 className="mb-3 max-w-2xl text-[1.5rem] font-bold leading-tight sm:text-3xl md:mb-4 md:text-4xl">
            Homeowners across Central Florida
          </h2>
          <p className="mb-6 max-w-xl text-base text-text-secondary sm:mb-8">
            Straight lines, clear quotes, and crews that show up. Leave a Google
            review after your project — it helps neighbors find solid fence work.
          </p>
        </ScrollReveal>
        <ScrollStaggerGrid className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {HOME_REVIEWS.map((r) => (
            <blockquote
              key={`${r.name}-${r.city}`}
              className="brand-card flex h-full flex-col bg-background-primary p-4 md:p-5"
            >
              <div className="mb-2 flex gap-0.5 text-brand-accent" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <BiStar key={i} className="size-4" aria-hidden />
                ))}
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-text-primary">
                “{r.text}”
              </p>
              <footer className="text-sm font-bold text-text-primary">
                {r.name}
                <span className="font-medium text-text-secondary">
                  {" "}
                  · {r.city}
                </span>
              </footer>
            </blockquote>
          ))}
        </ScrollStaggerGrid>
        <ScrollReveal delay={0.05}>
          <p className="mt-6 text-sm text-text-secondary">
            <a
              href={SITE.googleBusinessUrl}
              className="font-semibold text-brand-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find us on Google
            </a>
            {" · "}
            Call{" "}
            <a href={SITE.phoneHref} className="font-semibold hover:underline">
              {SITE.phone}
            </a>
          </p>
        </ScrollReveal>
      </ScrollSection>

      {/* AEO FAQ — one block, before convert */}
      <ScrollSection id="faq">
        <ScrollReveal>
          <p className="brand-eyebrow">FAQ</p>
          <h2 className="mb-3 max-w-xl text-[1.5rem] font-bold leading-tight sm:text-3xl md:mb-4 md:text-4xl">
            Common questions
          </h2>
          <p className="mb-5 max-w-xl text-base text-text-secondary sm:mb-8 md:text-base">
            Materials, permits, HOA, Florida weather, and service areas.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <div className="mx-auto max-w-3xl divide-y divide-brand-line border border-brand-line bg-background-primary">
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
        </ScrollReveal>
      </ScrollSection>

      {/* About — full description lower on page */}
      <ScrollSection id="about" post={false}>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <p className="brand-eyebrow">About FenceLine Florida</p>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
              {SITE.seoHeading}
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-text-secondary md:space-y-4 md:text-base">
              <p>{SITE.about}</p>
              <p>{SITE.aboutBody}</p>
              <p className="text-xs md:text-sm">{SITE.supplierNote}</p>
              <p className="text-xs md:text-sm">{SITE.legalLine}</p>
            </div>
          </div>
        </ScrollReveal>
      </ScrollSection>

      {/* Get a fence quote today */}
      <ScrollSection
        id="contact"
        className="bg-brand-accent text-text-alternative"
        post={false}
      >
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 sm:mb-3 sm:text-xs md:text-sm">
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
            <div className="flex flex-col items-stretch justify-center gap-2.5 md:flex-row md:items-center md:gap-3">
              <QuoteButton className="btn-on-brand min-h-12 w-full touch-manipulation md:w-auto md:min-h-11">
                Get free quote
              </QuoteButton>
              <Button
                variant="secondary-alt"
                className="min-h-12 w-full touch-manipulation border-2 border-white/50 bg-transparent text-white hover:bg-white/10 md:w-auto md:min-h-11"
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
        </ScrollReveal>
      </ScrollSection>

      <footer className="border-t border-border-primary shell-section !py-8 md:!py-10">
        <div className="shell-inner flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8">
          <div>
            <BrandLogo variant="dark" height={34} />
            <p className="mt-3 max-w-sm text-sm text-text-secondary sm:mt-4">
              {SITE.tagline} Fence installation and repair across {SITE.area}.
            </p>
            <p className="mt-2 max-w-sm text-sm font-medium text-text-primary">
              {SITE.addressLine}
            </p>
            <p className="mt-1 max-w-sm text-xs text-text-secondary">
              <a href={SITE.phoneHref} className="hover:underline">
                {SITE.phone}
              </a>
              {" · "}
              <a href={SITE.emailHref} className="hover:underline">
                {SITE.email}
              </a>
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

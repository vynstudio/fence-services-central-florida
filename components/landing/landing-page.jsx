"use client";

/**
 * SEO + AEO foundation homepage.
 * Mobile-first shells: phone (<768) · iPad (768–1023) · desktop (≥1024)
 * Flow: Hero → Services → Areas → Why → Reviews → FAQ → About → CTA
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
  BiMap,
  BiShield,
  BiStar,
  BiTimeFive,
  BiWrench,
} from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { ResponsivePicture } from "@/components/responsive-picture";

const SERVICE_ICONS = [BiHomeAlt, BiWrench, BiShield, BiTimeFive, BiFile, BiCheckCircle];
const WHY_ICONS = [BiShield, BiTimeFive, BiFile, BiCheckCircle];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <ScrollProgressLine />
      <SiteHeader />
      <Hero />

      {/* ── Services ── */}
      <ScrollSection id="services">
        <ScrollReveal>
          <p className="brand-eyebrow">Services</p>
          <h2 className="shell-title mb-3 max-w-2xl">
            {SITE.servicesHeading}
          </h2>
          <p className="shell-lead mb-6 max-w-2xl sm:mb-8 md:mb-9">
            {SITE.servicesLead}
          </p>
        </ScrollReveal>

        <ScrollStaggerGrid className="grid-services mb-8 md:mb-10">
          {FULL_SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[i] || BiCheckCircle;
            return (
              <div
                key={s.title}
                className="brand-card flex h-full gap-3 p-4 sm:p-4 md:p-5"
              >
                <Icon
                  className="mt-0.5 size-6 shrink-0 text-brand-accent"
                  aria-hidden
                />
                <div className="min-w-0">
                  <h3 className="mb-1 text-[0.975rem] font-bold leading-snug sm:text-base md:text-lg">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })}
        </ScrollStaggerGrid>

        <ScrollReveal delay={0.04}>
          <p className="mb-7 max-w-2xl text-sm font-medium text-text-primary md:mb-8 md:text-base">
            {SITE.servicesClose}
          </p>

          <h3 className="mb-2 text-lg font-bold md:text-xl">
            Materials we install
          </h3>
          <p className="mb-4 max-w-2xl text-sm text-text-secondary md:mb-5">
            Two materials, done right—residential and commercial vinyl and
            chain-link, specified for Florida heat, humidity, and storms.
          </p>
        </ScrollReveal>

        {/* Always stacked / 2-col — only 2 materials, no carousel */}
        <ScrollStaggerGrid className="grid-materials">
          {MATERIAL_SERVICES.map((s) => (
            <article
              key={s.title}
              className="brand-card flex h-full flex-col overflow-hidden"
            >
              <div className="aspect-[16/11] w-full overflow-hidden sm:aspect-[4/3] lg:aspect-[16/10]">
                <ResponsivePicture
                  name={s.name}
                  alt={`${s.title} in Jacksonville, Orlando & Kissimmee`}
                  className="block size-full"
                  fallback={s.image}
                />
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h4 className="mb-1.5 text-lg font-bold">{s.title}</h4>
                <p className="mb-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {s.body}
                </p>
                {s.flNeed && (
                  <p className="mb-3 text-xs font-medium text-brand-accent">
                    FL fit: {s.flNeed}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <QuoteButton
                    variant="link"
                    size="link"
                    className="min-h-10 justify-start p-0 text-sm font-bold"
                  >
                    Get quote <RxChevronRight className="size-5" />
                  </QuoteButton>
                  {s.slug && (
                    <a
                      href={`/services/${s.slug}`}
                      className="inline-flex min-h-10 items-center text-sm font-semibold text-brand-accent hover:underline"
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
          <div className="mt-9 md:mt-11">
            <h3 className="mb-2 text-base font-bold md:text-lg">
              Residential &amp; commercial options
            </h3>
            <p className="mb-4 max-w-2xl text-sm text-text-secondary">
              Vinyl privacy and chain-link security for homes, HOAs, and
              businesses—quoted for your property in Jacksonville, Orlando, or
              Kissimmee.
            </p>
            <ul className="mb-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              {PRODUCT_LINES.map((p) => (
                <li key={p.id} className="brand-card px-3.5 py-3.5 text-sm">
                  <span className="font-bold text-text-primary">{p.title}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-text-secondary">
                    {p.florida}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mb-4 text-xs leading-relaxed text-text-secondary">
              {SITE.supplierNote}
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {SERVICE_PAGES.map((p) => (
                <a
                  key={p.slug}
                  href={`/services/${p.slug}`}
                  className="inline-flex min-h-11 items-center justify-center border border-brand-line bg-background-primary px-3.5 py-2.5 text-sm font-semibold text-brand-ink touch-manipulation hover:border-brand-accent hover:text-brand-accent sm:min-h-10 sm:justify-start"
                >
                  {p.h1}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </ScrollSection>

      {/* ── Areas ── */}
      <ScrollSection id="areas" className="bg-background-secondary" post={false}>
        <ScrollReveal>
          <p className="brand-eyebrow">Coverage</p>
          <h2 className="shell-title mb-3 max-w-2xl">
            {SITE.areasHeading}
          </h2>
          <p className="shell-lead mb-5 max-w-2xl md:mb-7">
            {SITE.areasLead}
          </p>
        </ScrollReveal>

        <ScrollStaggerGrid className="grid-cities mb-6 md:mb-8">
          {CITY_PAGES.map((city) => (
            <a
              key={city.slug}
              href={`/areas/${city.slug}`}
              className="city-card"
            >
              <div>
                <span className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-accent">
                  <BiMap className="size-3.5" aria-hidden />
                  {city.region}
                </span>
                <span className="block text-xl font-bold text-text-primary md:text-[1.35rem]">
                  {city.name}
                </span>
                <span className="mt-1.5 block text-sm text-text-secondary">
                  Vinyl &amp; chain-link · homes &amp; businesses
                </span>
              </div>
              <span className="mt-4 inline-flex items-center gap-0.5 text-sm font-bold text-brand-accent">
                View area <RxChevronRight className="size-4" aria-hidden />
              </span>
            </a>
          ))}
        </ScrollStaggerGrid>

        <ScrollReveal delay={0.04}>
          <p className="mb-5 max-w-xl text-sm text-text-secondary md:text-base">
            {SITE.areasNearMe}
          </p>
          <QuoteButton className="min-h-12 w-full touch-manipulation sm:w-auto sm:min-w-[11rem] md:min-h-11">
            Get free quote
          </QuoteButton>
        </ScrollReveal>
      </ScrollSection>

      {/* ── Why ── */}
      <ScrollSection id="why">
        <ScrollReveal>
          <p className="brand-eyebrow">Why us</p>
          <h2 className="shell-title mb-3 max-w-2xl">
            {SITE.whyHeading}
          </h2>
          <p className="shell-lead mb-6 max-w-2xl sm:mb-8 md:mb-9">
            {SITE.whyLead}
          </p>
        </ScrollReveal>
        <ScrollStaggerGrid className="grid-services">
          {WHY_POINTS.map((item, i) => {
            const Icon = WHY_ICONS[i] || BiCheckCircle;
            return (
              <div
                key={item.title}
                className="brand-card h-full bg-background-secondary p-4 sm:p-5 lg:p-6"
              >
                <Icon
                  className="mb-3 size-7 text-brand-accent sm:size-8"
                  aria-hidden
                />
                <h3 className="mb-1.5 text-base font-bold sm:text-lg md:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary md:text-base">
                  {item.body}
                </p>
              </div>
            );
          })}
        </ScrollStaggerGrid>
      </ScrollSection>

      {/* ── Reviews ── */}
      <ScrollSection id="reviews" className="bg-background-secondary">
        <ScrollReveal>
          <p className="brand-eyebrow">Reviews</p>
          <h2 className="shell-title mb-3 max-w-2xl">
            Homes &amp; businesses we serve
          </h2>
          <p className="shell-lead mb-6 max-w-xl sm:mb-8">
            Straight lines, clear quotes, and crews that show up in Jacksonville,
            Orlando, and Kissimmee.
          </p>
        </ScrollReveal>
        <ScrollStaggerGrid className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {HOME_REVIEWS.map((r) => (
            <blockquote
              key={`${r.name}-${r.city}`}
              className="brand-card flex h-full flex-col bg-background-primary p-4 md:p-5"
            >
              <div
                className="mb-2 flex gap-0.5 text-brand-accent"
                aria-label={`${r.rating} out of 5 stars`}
              >
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

      {/* ── FAQ ── */}
      <ScrollSection id="faq">
        <ScrollReveal>
          <p className="brand-eyebrow">FAQ</p>
          <h2 className="shell-title mb-3 max-w-xl">
            Frequently Asked Questions
          </h2>
          <p className="shell-lead mb-5 max-w-xl sm:mb-7">
            Permits, HOA packages, Jacksonville fence heights, and why local
            installers matter across Central Florida.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <div className="mx-auto max-w-3xl divide-y divide-brand-line border border-brand-line bg-background-primary">
            {HOME_FAQS.map((item) => (
              <details key={item.q} className="group faq-item">
                <summary className="cursor-pointer list-none px-4 py-4 touch-manipulation sm:px-5 sm:py-5 md:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-3">
                    <h3 className="min-w-0 flex-1 pr-2 text-[0.975rem] font-bold leading-snug text-text-primary sm:text-base md:text-lg">
                      {item.q}
                    </h3>
                    <span className="mt-0.5 shrink-0 text-brand-accent transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="px-4 pb-4 text-[0.975rem] leading-relaxed text-text-secondary sm:px-5 sm:pb-5 md:px-6 md:pb-6 md:text-base">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-sm text-text-secondary">
            Need more detail on permits and HOAs?{" "}
            <a
              href="/resources/fence-permits-hoa-florida"
              className="font-semibold text-brand-accent hover:underline"
            >
              Read our Florida fence permit &amp; HOA guide
            </a>
            {" · "}
            <a
              href="/resources"
              className="font-semibold text-brand-accent hover:underline"
            >
              All guides
            </a>
          </p>
        </ScrollReveal>
      </ScrollSection>

      {/* ── About ── */}
      <ScrollSection id="about" post={false}>
        <div className="grid items-center gap-7 md:grid-cols-2 md:gap-10 lg:gap-14">
          <ScrollReveal>
            <p className="brand-eyebrow">About FenceLine Florida</p>
            <h2 className="shell-title mb-4">
              {SITE.seoHeading}
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-text-secondary md:space-y-4 md:text-base">
              <p>{SITE.about}</p>
              <p>{SITE.aboutBody}</p>
              <p className="text-xs md:text-sm">{SITE.supplierNote}</p>
              <p className="text-xs md:text-sm">{SITE.legalLine}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.06} className="hidden md:block">
            <ScrollParallaxMedia className="relative aspect-[4/3] lg:aspect-[16/11]">
              <ResponsivePicture
                name="about"
                alt="FenceLine Florida — vinyl and chain-link installs"
                className="absolute inset-0 block size-full scale-110"
                fallback="/images/home-about-section.jpg"
              />
            </ScrollParallaxMedia>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* ── Contact CTA ── */}
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
            <h2 className="mb-3 text-[1.65rem] font-bold leading-tight text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
              Permits, HOA Packages &amp; Free Estimates
            </h2>
            <p className="mb-2 text-base font-semibold text-white/90 sm:text-lg">
              {SITE.ctaHeading}
            </p>
            <p className="mb-3 text-sm leading-relaxed text-white/85 sm:mb-5 sm:text-base md:text-md">
              {SITE.ctaLead}
            </p>
            <p className="mb-7 text-sm text-white/65 sm:mb-8">
              A representative from our team will contact you soon.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
              <QuoteButton className="btn-on-brand min-h-12 w-full touch-manipulation sm:w-auto sm:min-w-[11rem] md:min-h-11">
                Get free quote
              </QuoteButton>
              <Button
                variant="secondary-alt"
                className="min-h-12 w-full touch-manipulation border-2 border-white/50 bg-transparent text-white hover:bg-white/10 sm:w-auto md:min-h-11"
                asChild
              >
                <a href={SITE.phoneHref}>Call {SITE.phone}</a>
              </Button>
              <Button
                variant="link-alt"
                className="min-h-11 w-full touch-manipulation text-white sm:w-auto"
                asChild
              >
                <a href={SITE.smsHref}>Text us</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </ScrollSection>

      {/* ── Footer ── */}
      <footer className="border-t border-border-primary shell-section !py-8 md:!py-11">
        <div className="shell-inner flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
          <div className="max-w-sm">
            <BrandLogo variant="dark" height={34} />
            <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:mt-4">
              {SITE.tagline} Vinyl &amp; chain-link fencing across {SITE.area}.
            </p>
            <p className="mt-3 text-xs font-medium text-brand-accent">
              {SITE.addressServiceLine}
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              <a href={SITE.phoneHref} className="font-semibold hover:underline">
                {SITE.phone}
              </a>
              <span className="mx-1.5 text-brand-line">·</span>
              <a href={SITE.emailHref} className="hover:underline">
                {SITE.email}
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 text-sm sm:gap-x-12 md:gap-x-14">
            <div>
              <p className="mb-2.5 font-bold">Contact</p>
              <a
                href={SITE.phoneHref}
                className="block min-h-11 py-1.5 hover:underline touch-manipulation"
              >
                {SITE.phone}
              </a>
              <a
                href={SITE.emailHref}
                className="block min-h-11 break-all py-1.5 hover:underline touch-manipulation"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.smsHref}
                className="block min-h-11 py-1.5 hover:underline touch-manipulation"
              >
                Text us
              </a>
            </div>
            <div>
              <p className="mb-2.5 font-bold">Explore</p>
              <a href="#services" className="block min-h-11 py-1.5 hover:underline">
                Services
              </a>
              <a href="#areas" className="block min-h-11 py-1.5 hover:underline">
                Areas
              </a>
              <a href="#faq" className="block min-h-11 py-1.5 hover:underline">
                FAQ
              </a>
              <a href="#about" className="block min-h-11 py-1.5 hover:underline">
                About
              </a>
              <a
                href="/resources"
                className="block min-h-11 py-1.5 hover:underline"
              >
                Guides
              </a>
              <a
                href="/deposit"
                className="block min-h-11 py-1.5 hover:underline touch-manipulation"
              >
                Pay deposit
              </a>
            </div>
          </div>
        </div>
        <div className="shell-inner mt-8 border-t border-border-primary pt-5 text-xs leading-relaxed text-text-secondary md:mt-10 md:pt-6 md:text-sm">
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

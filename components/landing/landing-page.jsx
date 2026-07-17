"use client";

import { Button } from "@relume_io/relume-ui";
import { BrandLogo } from "@/components/brand-logo";
import { QuoteButton } from "@/components/quote-button";
import { SiteHeader } from "@/components/landing/site-header";
import { SITE } from "@/lib/site";
import React from "react";
import {
  BiCheckCircle,
  BiMap,
  BiPhone,
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

const STEPS = [
  { n: "01", t: "Request a quote", d: "Tell us repair or install, material, and location." },
  { n: "02", t: "We confirm details", d: "Measure, review codes/HOA, and send a clear price." },
  { n: "03", t: "We build or repair", d: "Crew on site with materials ready for Florida conditions." },
  { n: "04", t: "Walkthrough", d: "You inspect the line. We leave it clean and true." },
];

const AREAS = [
  "Jacksonville",
  "Orlando",
  "Tampa",
  "Sanford",
  "Kissimmee",
  "Clermont",
  "Lakeland",
  "Daytona Beach",
  "Melbourne",
  "Ocala",
];

const FAQS = [
  {
    q: "Do I need a permit?",
    a: "Most cities require a permit for new fences and many major repairs. We pull the paperwork as part of the job.",
  },
  {
    q: "Can you work with my HOA?",
    a: "Yes. We submit specs and materials for approval so the board and your property both get what they need.",
  },
  {
    q: "Will it hold up in storms?",
    a: "We set posts deep and build to Florida wind expectations. Materials and hardware are chosen for sun, rain, and salt air.",
  },
  {
    q: "How long does install take?",
    a: "Most residential jobs finish in one to three days. Larger commercial work is scheduled with a firm timeline up front.",
  },
  {
    q: "Do you only do repairs?",
    a: "We do both—full installs and targeted repairs (posts, panels, gates) when a full replacement isn’t needed.",
  },
];

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`px-5 py-14 md:px-8 md:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-[1120px]">{children}</div>
    </section>
  );
}

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  alternateName: SITE.shortName,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  areaServed: "Central Florida",
  slogan: SITE.tagline,
};

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
      />
      <SiteHeader />

      {/* Hero */}
      <section className="px-5 pb-10 pt-6 md:px-8 md:pb-16 md:pt-10 lg:pb-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="relative overflow-hidden rounded-sm">
            <div className="relative z-10 flex min-h-[22rem] flex-col justify-end px-6 py-10 sm:min-h-[26rem] md:min-h-[32rem] md:px-12 md:py-14 lg:min-h-[36rem] lg:px-16 lg:py-16">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent md:text-sm">
                {SITE.tagline}
              </p>
              <h1 className="mb-4 max-w-2xl text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                {SITE.marketLine}
              </h1>
              <p className="mb-8 max-w-xl text-sm text-white/90 md:text-base lg:text-lg">
                Install and repair for wood, vinyl, aluminum, and chain link.
                Clear quotes. Solid posts. Built for Florida weather.
              </p>
              <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
                <QuoteButton className="w-full sm:w-auto">Get free quote</QuoteButton>
                <Button variant="secondary-alt" className="w-full sm:w-auto" asChild>
                  <a href={SITE.phoneHref}>
                    <BiPhone className="size-5" />
                    Call {SITE.phone}
                  </a>
                </Button>
              </div>
            </div>
            <div className="absolute inset-0">
              <img
                src="/images/home-hero-header-section.jpg"
                alt="Finished residential fence installation"
                className="size-full object-cover"
              />
              <div className="hero-overlay absolute inset-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section id="services" className="bg-background-primary">
        <p className="brand-eyebrow">Services</p>
        <h2 className="mb-3 max-w-xl text-3xl font-bold md:text-4xl lg:text-5xl">
          Install and repair, every material
        </h2>
        <p className="mb-10 max-w-xl text-text-secondary md:text-md">
          One team for residential and commercial fence work across Central
          Florida.
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

      {/* FAQ */}
      <Section id="faq">
        <p className="brand-eyebrow">FAQ</p>
        <h2 className="mb-8 max-w-xl text-3xl font-bold md:text-4xl lg:text-5xl">
          Common questions
        </h2>
        <div className="mx-auto max-w-3xl divide-y divide-border-primary border border-border-primary">
          {FAQS.map((item) => (
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
              {SITE.tagline} Install and repair across {SITE.area}.
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
              <p className="py-1 text-text-secondary">{SITE.name}</p>
              <p className="py-1 text-text-secondary">fencelineflorida.com</p>
              <a href="/deposit" className="block py-1 hover:underline">
                Pay deposit
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 w-full max-w-[1120px] border-t border-border-primary pt-6 text-xs text-text-secondary md:text-sm">
          <p>
            © {SITE.year} {SITE.name}. A DBA of {SITE.legalName}. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { SiteShell } from "@/components/landing/site-shell";
import { QuoteButton } from "@/components/quote-button";
import { ResponsivePicture } from "@/components/responsive-picture";
import { JsonLd } from "@/components/seo/json-ld";
import {
  SERVICE_PAGES,
  getServiceBySlug,
  serviceJsonLd,
  servicePath,
} from "@/lib/service-pages";
import { SITE } from "@/lib/site";
import { notFound } from "next/navigation";
import React from "react";

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `${SITE.url}${servicePath(service.slug)}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${SITE.url}${servicePath(service.slug)}`,
    },
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <SiteShell>
        <section className="shell-section">
          <div className="shell-inner grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <p className="brand-eyebrow">{service.eyebrow}</p>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
                {service.h1}
              </h1>
              <p className="mb-4 text-base leading-relaxed text-text-secondary md:text-lg">
                {service.intro}
              </p>
              <p className="mb-6 text-base leading-relaxed text-text-secondary">
                {service.body}
              </p>
              <ul className="mb-8 space-y-2">
                {service.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 text-sm font-medium text-text-primary md:text-base"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="min-h-12 w-full sm:w-auto">
                  Get free quote
                </QuoteButton>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center border border-brand-line px-5 text-sm font-bold text-brand-accent hover:bg-brand-soft"
                >
                  Call {SITE.phone}
                </a>
              </div>
              <p className="mt-8 text-sm">
                <a href="/#services" className="text-brand-accent underline">
                  ← All services
                </a>
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-brand-line lg:aspect-[5/4]">
              <ResponsivePicture
                name={service.image}
                alt={`${service.h1} — FenceLine Florida`}
                className="absolute inset-0 block size-full"
              />
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}

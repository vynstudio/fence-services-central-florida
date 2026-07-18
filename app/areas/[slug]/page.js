import { SiteShell } from "@/components/landing/site-shell";
import { QuoteButton } from "@/components/quote-button";
import { JsonLd } from "@/components/seo/json-ld";
import {
  CITY_PAGES,
  cityJsonLd,
  cityPath,
  getCityBySlug,
} from "@/lib/locations";
import { SITE } from "@/lib/site";
import { notFound } from "next/navigation";
import React from "react";

export function generateStaticParams() {
  return CITY_PAGES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const city = getCityBySlug(params.slug);
  if (!city) return {};
  return {
    title: city.title,
    description: city.description,
    alternates: { canonical: `${SITE.url}${cityPath(city.slug)}` },
    openGraph: {
      title: city.title,
      description: city.description,
      url: `${SITE.url}${cityPath(city.slug)}`,
    },
  };
}

export default function CityPage({ params }) {
  const city = getCityBySlug(params.slug);
  if (!city) notFound();

  return (
    <>
      <JsonLd data={cityJsonLd(city)} />
      <SiteShell>
        <section className="shell-section !pb-4 md:!pb-6">
          <div className="shell-inner max-w-3xl">
            <p className="brand-eyebrow">{city.region}</p>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
              {city.h1}
            </h1>
            <p className="mb-4 text-base leading-relaxed text-text-secondary md:text-lg">
              {city.intro}
            </p>
            <p className="mb-8 text-base leading-relaxed text-text-secondary">
              {city.body}
            </p>
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center">
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
            <h2 className="mb-3 text-lg font-bold">Nearby communities</h2>
            <ul className="mb-8 flex flex-wrap gap-2">
              {city.nearby.map((n) => (
                <li
                  key={n}
                  className="border border-brand-line bg-brand-soft px-3 py-1.5 text-sm font-medium"
                >
                  {n}
                </li>
              ))}
            </ul>
            <p className="text-sm text-text-secondary">
              Also serving{" "}
              <a href="/#areas" className="font-medium text-brand-accent underline">
                cities across {SITE.area}
              </a>
              . {SITE.legalLine}
            </p>
            <p className="mt-6 text-sm">
              <a href="/" className="text-brand-accent underline">
                ← Back to home
              </a>
            </p>
          </div>
        </section>
      </SiteShell>
    </>
  );
}

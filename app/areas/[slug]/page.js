import { SiteShell } from "@/components/landing/site-shell";
import { QuoteButton } from "@/components/quote-button";
import { ResponsivePicture } from "@/components/responsive-picture";
import { JsonLd } from "@/components/seo/json-ld";
import {
  CITY_PAGES,
  cityJsonLd,
  cityPath,
  getCityBySlug,
} from "@/lib/locations";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { buildPageMetadata } from "@/lib/seo-entity";
import { SITE } from "@/lib/site";
import { notFound } from "next/navigation";
import React from "react";

export function generateStaticParams() {
  return CITY_PAGES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return buildPageMetadata({
    title: city.title,
    description: city.description,
    path: cityPath(city.slug),
  });
}

export default async function CityPage({ params }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  return (
    <>
      <JsonLd data={cityJsonLd(city)} />
      <SiteShell>
        <section className="bg-background-primary text-text-primary">
          <div className="shell-section">
            <div className="shell-inner">
              <div className="grid items-start gap-5 md:gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                <div className="order-2 min-w-0 lg:order-1">
                  <p className="brand-eyebrow">{city.region}</p>
                  <h1 className="shell-title mb-3 sm:mb-4 md:text-[2.5rem] lg:text-[2.75rem]">
                    {city.h1}
                  </h1>
                  <p className="mb-3 text-[0.975rem] leading-relaxed text-text-secondary sm:mb-4 md:text-lg">
                    {city.intro}
                  </p>
                  <p className="mb-6 text-[0.975rem] leading-relaxed text-text-secondary sm:mb-8 md:text-base">
                    {city.body}
                  </p>
                  <div className="mb-8 flex flex-col gap-2.5 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-center">
                    <QuoteButton className="min-h-12 w-full touch-manipulation !bg-brand-accent font-bold !text-white hover:!bg-brand-accent-hover sm:w-auto sm:min-w-[10.5rem]">
                      Get free quote
                    </QuoteButton>
                    <a
                      href={SITE.phoneHref}
                      className="inline-flex min-h-12 w-full items-center justify-center border-2 border-brand-accent px-5 text-sm font-bold text-brand-accent transition hover:bg-brand-soft sm:w-auto"
                    >
                      Call {SITE.phone}
                    </a>
                  </div>
                  <h2 className="mb-3 text-lg font-bold text-text-primary">
                    Services in {city.name}
                  </h2>
                  <ul className="mb-8 flex flex-wrap gap-2">
                    {SERVICE_PAGES.map((s) => (
                      <li key={s.slug}>
                        <a
                          href={`/services/${s.slug}`}
                          className="inline-block border border-brand-line bg-brand-soft px-3 py-1.5 text-sm font-semibold text-text-primary hover:border-brand-accent hover:text-brand-accent"
                        >
                          {s.h1}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mb-8 text-sm">
                    <a
                      href="/resources/fence-permits-hoa-florida"
                      className="font-semibold text-brand-accent hover:underline"
                    >
                      Fence permits &amp; HOA approval guide →
                    </a>
                  </p>
                  <h2 className="mb-3 text-lg font-bold text-text-primary">
                    Nearby communities
                  </h2>
                  <ul className="mb-8 flex flex-wrap gap-2">
                    {city.nearby.map((n) => (
                      <li
                        key={n}
                        className="border border-brand-line bg-brand-soft px-3 py-1.5 text-sm font-medium text-text-primary"
                      >
                        {n}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-text-secondary">
                    Also serving{" "}
                    <a
                      href="/#areas"
                      className="font-semibold text-brand-accent hover:underline"
                    >
                      {SITE.area}
                    </a>
                    . {SITE.legalLine}
                  </p>
                  <p className="mt-6 text-sm">
                    <a
                      href="/"
                      className="font-semibold text-brand-accent hover:underline"
                    >
                      ← Back to home
                    </a>
                  </p>
                </div>

                <div className="order-1 min-w-0 lg:order-2">
                  <div className="relative aspect-[16/11] w-full overflow-hidden border border-brand-line bg-brand-soft sm:aspect-[4/3] lg:aspect-[5/4]">
                    <ResponsivePicture
                      name="about"
                      alt={`Fence installation in ${city.name}, Florida`}
                      className="absolute inset-0 block h-full w-full"
                      imgClassName="absolute inset-0 size-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}

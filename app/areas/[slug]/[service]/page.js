import { SiteShell } from "@/components/landing/site-shell";
import { QuoteButton } from "@/components/quote-button";
import { ResponsivePicture } from "@/components/responsive-picture";
import { JsonLd } from "@/components/seo/json-ld";
import {
  CITY_SERVICE_PAGES,
  cityServiceJsonLd,
  cityServicePath,
  getCityServicePage,
} from "@/lib/city-service-pages";
import { buildPageMetadata } from "@/lib/seo-entity";
import { SITE } from "@/lib/site";
import { notFound } from "next/navigation";
import React from "react";

export function generateStaticParams() {
  return CITY_SERVICE_PAGES.map((p) => ({
    slug: p.citySlug,
    service: p.serviceSlug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug, service } = await params;
  const page = getCityServicePage(slug, service);
  if (!page) return {};
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: cityServicePath(page.citySlug, page.serviceSlug),
  });
}

export default async function CityServicePage({ params }) {
  const { slug, service } = await params;
  const page = getCityServicePage(slug, service);
  if (!page) notFound();

  const image = page.serviceSlug === "chain-link-fence" ? "chain" : "vinyl";

  return (
    <>
      <JsonLd data={cityServiceJsonLd(page)} />
      <SiteShell>
        <section className="bg-background-primary text-text-primary">
          <div className="shell-section">
            <div className="shell-inner">
              <div className="grid items-start gap-5 md:gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="order-2 min-w-0 lg:order-1">
                  <p className="brand-eyebrow">{page.eyebrow}</p>
                  <h1 className="shell-title mb-3 sm:mb-4 md:text-[2.5rem]">
                    {page.h1}
                  </h1>
                  <p className="mb-3 text-[0.975rem] leading-relaxed text-text-secondary md:text-lg">
                    {page.intro}
                  </p>
                  {page.body?.map((section) => (
                    <div key={section.h2} className="mb-6">
                      <h2 className="mb-2 text-lg font-bold md:text-xl">
                        {section.h2}
                      </h2>
                      {section.paragraphs?.map((p) => (
                        <p
                          key={p.slice(0, 48)}
                          className="mb-2 text-sm leading-relaxed text-text-secondary md:text-base"
                        >
                          {p}
                        </p>
                      ))}
                      {section.list && (
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-secondary">
                          {section.list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  {page.bullets?.length > 0 && (
                    <ul className="mb-6 space-y-2.5">
                      {page.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2.5 text-sm font-medium text-text-primary md:text-base"
                        >
                          <span
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent"
                            aria-hidden
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mb-8 flex flex-col gap-2.5 sm:flex-row">
                    <QuoteButton className="min-h-12 w-full touch-manipulation !bg-brand-accent font-bold !text-white hover:!bg-brand-accent-hover sm:w-auto sm:min-w-[10.5rem]">
                      Get free quote
                    </QuoteButton>
                    <a
                      href={SITE.phoneHref}
                      className="inline-flex min-h-12 w-full items-center justify-center border-2 border-brand-accent px-5 text-sm font-bold text-brand-accent sm:w-auto"
                    >
                      Call {SITE.phone}
                    </a>
                  </div>
                  {page.faqs?.length > 0 && (
                    <div className="mb-8">
                      <h2 className="mb-3 text-lg font-bold">
                        Questions about {page.cityName}
                      </h2>
                      <div className="divide-y divide-brand-line border border-brand-line">
                        {page.faqs.map((item) => (
                          <details key={item.q} className="group">
                            <summary className="cursor-pointer list-none px-4 py-3 font-bold [&::-webkit-details-marker]:hidden">
                              <h3 className="text-sm font-bold md:text-base">
                                {item.q}
                              </h3>
                            </summary>
                            <p className="px-4 pb-3 text-sm text-text-secondary">
                              {item.a}
                            </p>
                          </details>
                        ))}
                      </div>
                    </div>
                  )}
                  <p className="text-sm">
                    <a
                      href={`/areas/${page.citySlug}`}
                      className="font-semibold text-brand-accent hover:underline"
                    >
                      ← {page.cityName} overview
                    </a>
                    {" · "}
                    <a
                      href={`/services/${page.serviceSlug}`}
                      className="font-semibold text-brand-accent hover:underline"
                    >
                      {page.serviceSlug === "vinyl-fence"
                        ? "Vinyl service"
                        : "Chain-link service"}
                    </a>
                  </p>
                </div>
                <div className="order-1 min-w-0 lg:order-2">
                  <div className="relative aspect-[16/11] w-full overflow-hidden border border-brand-line bg-brand-soft sm:aspect-[4/3]">
                    <ResponsivePicture
                      name={image}
                      alt={`${page.h1} — FenceLine Florida`}
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

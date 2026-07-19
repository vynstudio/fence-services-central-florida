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

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
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

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <SiteShell>
        <section className="bg-background-primary text-text-primary">
          <div className="shell-section">
            <div className="shell-inner">
              {/* Mobile: image first · Desktop: copy | image */}
              <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                <div className="order-2 min-w-0 lg:order-1">
                  <p className="brand-eyebrow">{service.eyebrow}</p>
                  <h1 className="mb-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                    {service.h1}
                  </h1>
                  <p className="mb-4 text-base leading-relaxed text-text-secondary md:text-lg">
                    {service.intro}
                  </p>
                  <p className="mb-6 text-base leading-relaxed text-text-secondary">
                    {service.body}
                  </p>
                  <ul className="mb-8 space-y-2.5">
                    {service.bullets.map((b) => (
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
                  <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
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
                  <p className="mt-8 text-sm">
                    <a
                      href="/#services"
                      className="font-semibold text-brand-accent hover:underline"
                    >
                      ← All services
                    </a>
                  </p>
                </div>

                <div className="order-1 min-w-0 lg:order-2">
                  <div className="relative w-full overflow-hidden border border-brand-line bg-brand-soft aspect-[4/3] lg:aspect-[5/4]">
                    <ResponsivePicture
                      name={service.image}
                      alt={`${service.h1} — FenceLine Florida`}
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

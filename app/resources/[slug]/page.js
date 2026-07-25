import { SiteShell } from "@/components/landing/site-shell";
import { QuoteButton } from "@/components/quote-button";
import { JsonLd } from "@/components/seo/json-ld";
import {
  RESOURCE_PAGES,
  getResourceBySlug,
  resourceJsonLd,
  resourcePath,
} from "@/lib/resources";
import { SITE } from "@/lib/site";
import { notFound } from "next/navigation";
import React from "react";

export function generateStaticParams() {
  return RESOURCE_PAGES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return {
    title: resource.title,
    description: resource.description,
    alternates: { canonical: `${SITE.url}${resourcePath(resource.slug)}` },
    openGraph: {
      title: resource.title,
      description: resource.description,
      url: `${SITE.url}${resourcePath(resource.slug)}`,
    },
  };
}

export default async function ResourcePage({ params }) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  return (
    <>
      <JsonLd data={resourceJsonLd(resource)} />
      <SiteShell>
        <article className="bg-background-primary text-text-primary">
          <div className="shell-section">
            <div className="shell-inner mx-auto max-w-3xl">
              <p className="brand-eyebrow">{resource.eyebrow}</p>
              <h1 className="shell-title mb-3 sm:mb-4 md:text-[2.5rem] lg:text-[2.75rem]">
                {resource.h1}
              </h1>

              {/* Direct answer box for AEO */}
              <div className="brand-card mb-6 border-l-4 border-l-brand-accent p-4 sm:mb-8 sm:p-5 md:p-6">
                <p className="text-[0.975rem] leading-relaxed text-text-primary sm:text-base md:text-lg">
                  {resource.intro}
                </p>
              </div>

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

              {/* Body sections */}
              <div className="space-y-8 sm:space-y-10">
                {resource.body.map((section) => (
                  <section key={section.h2}>
                    <h2 className="mb-3 text-xl font-bold text-text-primary sm:text-2xl">
                      {section.h2}
                    </h2>
                    {section.paragraphs.map((p) => (
                      <p
                        key={p.slice(0, 48)}
                        className="mb-3 text-[0.975rem] leading-relaxed text-text-secondary last:mb-0 md:text-base"
                      >
                        {p}
                      </p>
                    ))}
                    {section.list && section.list.length > 0 ? (
                      <ul className="mt-4 space-y-2.5">
                        {section.list.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 text-sm font-medium text-text-primary md:text-base"
                          >
                            <span
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent"
                              aria-hidden
                            />
                            <span className="min-w-0 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>

              {/* External official sources */}
              {resource.externalLinks && resource.externalLinks.length > 0 ? (
                <section className="mt-8 sm:mt-10">
                  <h2 className="mb-3 text-xl font-bold text-text-primary sm:text-2xl">
                    Official resources
                  </h2>
                  <ul className="space-y-2">
                    {resource.externalLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[0.975rem] font-semibold text-brand-accent hover:underline md:text-base"
                        >
                          {link.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {/* Disclaimer */}
              <p className="mt-8 text-sm leading-relaxed text-text-secondary sm:mt-10">
                Educational information only—not legal advice. Permit and HOA
                rules change. Confirm requirements with your city, county, and
                association before you build.
              </p>

              {/* FAQ accordion */}
              {resource.faqs && resource.faqs.length > 0 ? (
                <section className="mt-10 sm:mt-12" id="faq">
                  <p className="brand-eyebrow">FAQ</p>
                  <h2 className="shell-title mb-4 max-w-xl text-2xl sm:mb-6 sm:text-3xl">
                    Common questions
                  </h2>
                  <div className="divide-y divide-brand-line border border-brand-line bg-background-primary">
                    {resource.faqs.map((item) => (
                      <details key={item.q} className="group">
                        <summary className="cursor-pointer list-none px-4 py-4 text-[0.975rem] font-bold touch-manipulation sm:px-5 sm:py-5 sm:text-base md:p-6 md:text-lg [&::-webkit-details-marker]:hidden">
                          <span className="flex items-start justify-between gap-3">
                            <span className="min-w-0 flex-1 pr-2 leading-snug">
                              {item.q}
                            </span>
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
                </section>
              ) : null}

              {/* Related links */}
              {resource.relatedLinks && resource.relatedLinks.length > 0 ? (
                <section className="mt-10 sm:mt-12">
                  <h2 className="mb-3 text-lg font-bold text-text-primary">
                    Related guides & services
                  </h2>
                  <ul className="flex flex-wrap gap-2">
                    {resource.relatedLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="inline-block border border-brand-line bg-brand-soft px-3 py-1.5 text-sm font-semibold text-text-primary hover:border-brand-accent hover:text-brand-accent"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {/* Mid-page CTA */}
              <div className="brand-card mt-10 p-5 sm:mt-12 sm:p-6 md:p-8">
                <p className="mb-4 text-[0.975rem] leading-relaxed text-text-primary md:text-base">
                  {resource.cta}
                </p>
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
              </div>

              <p className="mt-8 text-sm">
                <a
                  href="/resources"
                  className="inline-flex min-h-10 items-center font-semibold text-brand-accent hover:underline"
                >
                  ← All resources
                </a>
              </p>
            </div>
          </div>
        </article>
      </SiteShell>
    </>
  );
}

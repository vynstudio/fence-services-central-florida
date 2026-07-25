import { SiteShell } from "@/components/landing/site-shell";
import { QuoteButton } from "@/components/quote-button";
import { JsonLd } from "@/components/seo/json-ld";
import { RESOURCE_PAGES, resourcePath } from "@/lib/resources";
import { SITE } from "@/lib/site";
import React from "react";

const PAGE_TITLE =
  "Fence Permits & HOA Resources | Jacksonville, Orlando, Kissimmee";
const PAGE_DESCRIPTION =
  "Guides to fence permits and HOA approval for vinyl and chain-link installs in Jacksonville, Orlando, and Kissimmee. FenceLine Florida.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE.url}/resources` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE.url}/resources`,
  },
};

function indexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE.url}/resources`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
    hasPart: RESOURCE_PAGES.map((r) => ({
      "@type": "WebPage",
      name: r.h1,
      description: r.description,
      url: `${SITE.url}${resourcePath(r.slug)}`,
    })),
  };
}

export default function ResourcesIndexPage() {
  return (
    <>
      <JsonLd data={indexJsonLd()} />
      <SiteShell>
        <section className="bg-background-primary text-text-primary">
          <div className="shell-section">
            <div className="shell-inner mx-auto max-w-3xl">
              <p className="brand-eyebrow">Resources</p>
              <h1 className="shell-title mb-3 sm:mb-4 md:text-[2.5rem] lg:text-[2.75rem]">
                Fence permits & HOA approval guides
              </h1>
              <p className="mb-6 text-[0.975rem] leading-relaxed text-text-secondary sm:mb-8 md:text-lg">
                Educational guides for residential and commercial vinyl and
                chain-link projects in Jacksonville, Orlando, and Kissimmee.
                FenceLine Florida helps with permit and HOA documentation—always
                confirm final rules with your city and association.
              </p>

              <ul className="mb-8 space-y-3 sm:mb-10">
                {RESOURCE_PAGES.map((r) => (
                  <li key={r.slug}>
                    <a
                      href={resourcePath(r.slug)}
                      className="brand-card block p-4 transition hover:border-brand-accent sm:p-5"
                    >
                      <p className="text-xs font-bold uppercase tracking-wide text-brand-accent">
                        {r.eyebrow}
                      </p>
                      <h2 className="mt-1 text-lg font-bold text-text-primary sm:text-xl">
                        {r.h1}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary md:text-[0.975rem]">
                        {r.description}
                      </p>
                    </a>
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
                  href="/"
                  className="inline-flex min-h-10 items-center font-semibold text-brand-accent hover:underline"
                >
                  ← Back to home
                </a>
              </p>
            </div>
          </div>
        </section>
      </SiteShell>
    </>
  );
}

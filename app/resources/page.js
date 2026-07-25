import { SiteShell } from "@/components/landing/site-shell";
import { QuoteButton } from "@/components/quote-button";
import { JsonLd } from "@/components/seo/json-ld";
import { RESOURCE_PAGES, resourcePath } from "@/lib/resources";
import {
  absoluteUrl,
  buildPageMetadata,
  entityIds,
  pageEntityGraph,
} from "@/lib/seo-entity";
import { SITE } from "@/lib/site";
import React from "react";

const PAGE_TITLE =
  "Fence Permits & HOA Resources | Jacksonville, Orlando, Kissimmee | FenceLine Florida";
const PAGE_DESCRIPTION =
  "Guides to fence permits and HOA approval for vinyl and chain-link installs in Jacksonville, Orange, Seminole, and Osceola County. FenceLine Florida.";

export const metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/resources",
});

function indexJsonLd() {
  const base = pageEntityGraph({
    path: "/resources",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  });
  const ids = entityIds();
  return {
    ...base,
    "@graph": [
      ...base["@graph"],
      {
        "@type": "CollectionPage",
        "@id": `${absoluteUrl("/resources")}#collection`,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: absoluteUrl("/resources"),
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.localBusiness },
        hasPart: RESOURCE_PAGES.map((r) => ({
          "@type": "WebPage",
          name: r.h1,
          description: r.description,
          url: absoluteUrl(resourcePath(r.slug)),
        })),
      },
    ],
  };
}

export default function ResourcesIndexPage() {
  return (
    <>
      <JsonLd data={indexJsonLd()} />
      <SiteShell>
        <section className="bg-background-primary text-text-primary">
          <div className="shell-section">
            <div className="shell-inner">
              <p className="brand-eyebrow">Resources</p>
              <h1 className="shell-title mb-3 sm:mb-4 md:text-[2.5rem] lg:text-[2.75rem]">
                Fence permits &amp; HOA guides
              </h1>
              <p className="shell-lead mb-8 max-w-2xl md:mb-10">
                Practical guides for vinyl and chain-link projects in
                Jacksonville, Orlando, and Kissimmee — and the counties around
                them. Educational only; confirm final rules with your city and
                HOA.
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {RESOURCE_PAGES.map((r) => (
                  <li key={r.slug}>
                    <a
                      href={resourcePath(r.slug)}
                      className="brand-card flex h-full flex-col p-4 transition hover:border-brand-accent sm:p-5"
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-accent">
                        {r.eyebrow}
                      </span>
                      <h2 className="mt-1 text-lg font-bold text-text-primary sm:text-xl">
                        {r.h1}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                        {r.description}
                      </p>
                      <span className="mt-3 text-sm font-bold text-brand-accent">
                        Read guide →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-2.5 sm:flex-row sm:items-center">
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
          </div>
        </section>
      </SiteShell>
    </>
  );
}

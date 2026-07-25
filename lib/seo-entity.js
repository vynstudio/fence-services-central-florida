/**
 * Sitewide SEO / AEO — shared entity, coverage wording, meta + JSON-LD helpers.
 * Rules (SEO + voice): docs/seo-sitewide-rules.md
 *
 * Import this module on every indexable template. Do not invent parallel entities.
 * Voice: direct, specialist (vinyl + chain-link only), Florida-practical, legally careful, low hype.
 */

import { SITE } from "@/lib/site";

// ─── Coverage (approved wording only) ───────────────────────────────────────

export const COVERAGE = {
  /** UI chips / trust lines */
  short: "Jacksonville · Orange · Seminole · Osceola County",
  /** Body + meta long form */
  long: "Jacksonville, Orange, Seminole, and Osceola County",
  /** Footer / service line */
  servingLine: "Serving Jacksonville, Orange, Seminole & Osceola County",
  /** Secondary market line */
  marketLine:
    "Vinyl and chain-link fence installation for Jacksonville, Orange, Seminole & Osceola County",
  /** Region label */
  region: "Jacksonville & Central Florida",
  cities: ["Jacksonville", "Orlando", "Kissimmee"],
  counties: [
    "Duval County",
    "Orange County",
    "Seminole County",
    "Osceola County",
  ],
  /** Flat labels for simple arrays */
  labels: [
    "Jacksonville",
    "Orlando",
    "Kissimmee",
    "Orange County",
    "Seminole County",
    "Osceola County",
  ],
};

/** Schema.org areaServed — Jacksonville + counties (homepage brief structure) */
export const COVERAGE_AREA_SERVED_SCHEMA = [
  {
    "@type": "City",
    name: "Jacksonville",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Duval County",
    },
  },
  { "@type": "AdministrativeArea", name: "Orange County" },
  { "@type": "AdministrativeArea", name: "Seminole County" },
  { "@type": "AdministrativeArea", name: "Osceola County" },
];

export const SERVICE_TYPES = [
  "Vinyl Fence Installation",
  "Chain-Link Fence Installation",
  "Residential Fence Installation",
  "Commercial Fence Installation",
  "Fence Permit Coordination",
  "HOA Fence Documentation",
];

export const MATERIALS = ["vinyl", "chain-link"];

// ─── URL helpers ────────────────────────────────────────────────────────────

export function absoluteUrl(path = "/") {
  if (!path) return SITE.url;
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function entityIds() {
  return {
    localBusiness: `${SITE.url}/#localbusiness`,
    organization: `${SITE.url}/#organization`,
    website: `${SITE.url}/#website`,
  };
}

// ─── Shared entity nodes (same @id sitewide) ────────────────────────────────

export function localBusinessNode(overrides = {}) {
  const ids = entityIds();
  const logoUrl = absoluteUrl(SITE.logo);

  return {
    // Multi-type is valid; do NOT use serviceType on LocalBusiness (not in schema.org)
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": ids.localBusiness,
    name: SITE.name,
    alternateName: ["Fence Line Florida", SITE.shortName, SITE.domain],
    legalName: SITE.legalName,
    url: SITE.url,
    logo: logoUrl,
    image: logoUrl,
    telephone: SITE.phone,
    email: SITE.email,
    description: SITE.aeoSnippet,
    areaServed: COVERAGE_AREA_SERVED_SCHEMA,
    sameAs: [
      SITE.googleBusinessUrl ||
        "https://www.google.com/maps/search/?api=1&query=FenceLine+Florida",
    ],
    ...overrides,
  };
}

export function organizationNode(overrides = {}) {
  const ids = entityIds();
  return {
    "@type": "Organization",
    "@id": ids.organization,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE.logo),
    },
    areaServed: [
      "Jacksonville",
      "Orange County",
      "Seminole County",
      "Osceola County",
    ],
    ...overrides,
  };
}

export function websiteNode(overrides = {}) {
  const ids = entityIds();
  return {
    "@type": "WebSite",
    "@id": ids.website,
    name: SITE.webName,
    url: SITE.url,
    inLanguage: "en-US",
    publisher: { "@id": ids.organization },
    ...overrides,
  };
}

export function providerRef() {
  return { "@id": entityIds().localBusiness };
}

// ─── FAQ + page graph ───────────────────────────────────────────────────────

/**
 * @param {{ q: string, a: string }[]} faqs
 * @param {string} pageUrl absolute URL
 */
export function faqPageNode(faqs, pageUrl) {
  if (!faqs?.length) return null;
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/**
 * Standard indexable page graph: entity + webpage + optional service + FAQ.
 *
 * @param {object} opts
 * @param {string} opts.path - site path e.g. /services/vinyl-fence
 * @param {string} opts.title
 * @param {string} opts.description
 * @param {string} [opts.serviceName]
 * @param {string} [opts.serviceDescription]
 * @param {{ q: string, a: string }[]} [opts.faqs]
 * @param {object[]} [opts.extraNodes] - additional graph nodes
 * @param {object} [opts.localBusinessOverrides]
 * @param {object|object[]} [opts.areaServed] - Service areaServed override
 */
export function pageEntityGraph({
  path,
  title,
  description,
  serviceName,
  serviceDescription,
  faqs,
  extraNodes = [],
  localBusinessOverrides,
  areaServed,
}) {
  const pageUrl = absoluteUrl(path === "/" ? "/" : path);
  const ids = entityIds();

  const webpage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.localBusiness },
    inLanguage: "en-US",
  };

  const nodes = [
    localBusinessNode(localBusinessOverrides),
    organizationNode(),
    websiteNode(),
    webpage,
  ];

  if (serviceName) {
    nodes.push({
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: serviceName,
      description: serviceDescription || description,
      provider: providerRef(),
      areaServed: areaServed || COVERAGE_AREA_SERVED_SCHEMA,
      url: pageUrl,
    });
  }

  const faq = faqPageNode(faqs, pageUrl);
  if (faq) nodes.push(faq);

  if (extraNodes?.length) nodes.push(...extraNodes);

  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

// ─── Metadata builder ───────────────────────────────────────────────────────

/**
 * Next.js metadata object for indexable pages.
 *
 * @param {object} opts
 * @param {string} opts.title - full title or primary (will append brand if needed)
 * @param {string} opts.description
 * @param {string} opts.path - e.g. /services/vinyl-fence
 * @param {boolean} [opts.absoluteTitle=true] - use absolute title (no layout template)
 * @param {string} [opts.ogDescription]
 */
export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = true,
  ogDescription,
}) {
  const brand = SITE.webName;
  const fullTitle =
    title.includes(brand) || title.includes("FenceLine")
      ? title
      : `${title} | ${brand}`;

  const canonicalPath = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const canonical =
    canonicalPath === "/"
      ? `${SITE.url}/`
      : `${SITE.url}${canonicalPath}`;

  const ogDesc = ogDescription || description;

  return {
    title: absoluteTitle ? { absolute: fullTitle } : fullTitle,
    description,
    robots: { index: true, follow: true },
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: fullTitle,
      description: ogDesc,
      siteName: SITE.webName,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: ogDesc,
    },
  };
}

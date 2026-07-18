import { SITE } from "@/lib/site";

/**
 * Master Halco–aligned catalog (reseller + install).
 * Source: masterhalco.com product lines, prioritized for Florida demand.
 * MH is wholesale-only; we sell/install to homeowners & commercial clients.
 */

/** AEO FAQ snippets — visible on page + FAQPage schema */
export const HOME_FAQS = [
  {
    q: "What types of fences do you install?",
    a: "We install and repair wood, vinyl (PVC), ornamental aluminum, ornamental steel, and chain-link fencing, plus gates and access control. Materials are sourced from major wholesale lines including systems available through Master Halco distribution.",
  },
  {
    q: "What fence is best for Florida storms and soil?",
    a: "Posts and foundations matter as much as panels. We set for Florida sand and wind, recommend steel post systems where wood posts fail, and specify materials that hold up to humidity, sun, and hurricane-season weather.",
  },
  {
    q: "Do you install pool fences that meet Florida code?",
    a: "Yes. Ornamental aluminum is a common pool barrier choice for visibility and code-friendly layouts. We design for your property and local pool safety rules—confirm final code requirements with your city or HOA.",
  },
  {
    q: "Do you handle permits and HOA approval?",
    a: "Yes. FenceLine Florida manages permitting and HOA documentation as part of our full-service process for most residential and commercial jobs.",
  },
  {
    q: "Can you replace just a gate or add automatic openers?",
    a: "Yes. We install walk and drive gates, commercial/custom gates, and residential or commercial access control (swing and slide operators) matched to your fence system.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Orlando, Lakeland, Tampa, Jacksonville, and surrounding cities throughout Central and North Florida.",
  },
];

/** Core services Floridians actually buy */
export const FULL_SERVICES = [
  {
    title: "New fence installation",
    body: "Full lines in wood, vinyl, aluminum, steel, and chain-link—specified for Florida weather.",
  },
  {
    title: "Fence repair & storm restoration",
    body: "Posts, panels, and gates rebuilt after storms or years of humidity and soil shift.",
  },
  {
    title: "Gates & access control",
    body: "Walk gates, driveway gates, commercial gates, and swing/slide operators.",
  },
  {
    title: "Pool barrier aluminum",
    body: "Ornamental aluminum designed for visibility, curb appeal, and pool-area layouts.",
  },
  {
    title: "Commercial & security fence",
    body: "Chain-link, ornamental steel, and gated access for lots, yards, and facilities.",
  },
  {
    title: "Permits & HOA approvals",
    body: "We manage paperwork so your project stays code-compliant and approved.",
  },
];

/**
 * Product / material grid (Master Halco categories, FL-prioritized).
 * `name` maps to public/images/{mobile,tablet,desktop}/{name}.jpg when present.
 */
export const MATERIAL_SERVICES = [
  {
    title: "Wood fence",
    body: "Privacy and curb appeal—cedar, pine, and pre-stained options with posts set for Florida soil.",
    name: "wood",
    image: "/images/home-gallery-section-0.jpg",
    slug: "wood-fence",
    flNeed: "Privacy, HOA curb appeal, backyard living",
  },
  {
    title: "Vinyl fence",
    body: "Low-maintenance PVC privacy that holds color in Florida sun and humidity—HOA favorite.",
    name: "vinyl",
    image: "/images/home-gallery-section-1.jpg",
    slug: "vinyl-fence",
    flNeed: "Low upkeep, HOA communities, coastal humidity",
  },
  {
    title: "Ornamental aluminum",
    body: "Pool-ready and estate-style aluminum with clean lines and lasting powder-coat finish.",
    name: "aluminum",
    image: "/images/home-gallery-section-3.jpg",
    slug: "aluminum-fence",
    flNeed: "Pool barriers, visibility, corrosion resistance",
  },
  {
    title: "Ornamental steel",
    body: "Classic wrought-iron look—modern steel systems for security and street presence.",
    name: "aluminum",
    image: "/images/home-gallery-section-3.jpg",
    slug: "steel-fence",
    flNeed: "Security, commercial curb appeal, long life",
  },
  {
    title: "Chain link",
    body: "Galvanized or color-coated mesh for pets, yards, schools, and commercial lots.",
    name: "chain",
    image: "/images/home-gallery-section-2.jpg",
    slug: "chain-link-fence",
    flNeed: "Security, cost control, commercial & pets",
  },
  {
    title: "Gates & operators",
    body: "Walk gates, driveway gates, commercial gates, and access control for swing or slide.",
    name: "wood",
    image: "/images/home-gallery-section-0.jpg",
    slug: "gates-access-control",
    flNeed: "Driveways, HOA entries, commercial security",
  },
];

/** Expanded product lines we can quote (MH catalog alignment) */
export const PRODUCT_LINES = [
  {
    id: "wood",
    title: "Wood fencing",
    summary: "Western red cedar, other cedars, spruce/fir, pine, specialty & pre-stained.",
    florida: "Privacy and HOA looks; pair with steel posts where wood posts rot in FL soil.",
  },
  {
    id: "vinyl",
    title: "Vinyl / PVC",
    summary: "Privacy and semi-privacy systems including woodgrain styles.",
    florida: "Low maintenance in heat and humidity; popular in planned communities.",
  },
  {
    id: "aluminum",
    title: "Ornamental aluminum",
    summary: "Independence, Colonial, Echelon-style ornamental aluminum lines.",
    florida: "Pool barriers and coastal-friendly finishes vs raw steel.",
  },
  {
    id: "steel",
    title: "Ornamental steel",
    summary: "Montage, Highland, Remington, Impasse, Palisade-class steel systems.",
    florida: "Security and premium street frontage; powder-coated for humidity.",
  },
  {
    id: "chain",
    title: "Chain link",
    summary: "Mesh, color systems, gates, commercial and residential applications.",
    florida: "Pets, warehouses, schools, and budget-secure perimeters.",
  },
  {
    id: "posts",
    title: "Steel post systems",
    summary: "PostMaster / steel posts as alternatives to wood posts that fail in sand.",
    florida: "High value in Florida—posts outlast wood in wet, sandy soil.",
  },
  {
    id: "gates",
    title: "Gates & ARMA-style systems",
    summary: "Panel gates, commercial/custom gates, and modular gate systems.",
    florida: "Driveways, HOA entries, and commercial access points.",
  },
  {
    id: "access",
    title: "Access control",
    summary: "Residential & commercial swing/slide operators and hardware.",
    florida: "Gated communities, estates, and commercial lots.",
  },
  {
    id: "ag",
    title: "Agricultural & farm",
    summary: "Cattle, horse, deer/wildlife, and garden fencing options.",
    florida: "Acreage, ranches, and rural Central/North Florida properties.",
  },
  {
    id: "temp",
    title: "Temporary fence",
    summary: "Construction and event temporary fencing, windscreen, barricades.",
    florida: "Jobsites, storm recovery staging, and short-term security.",
  },
];

/**
 * Homepage reviews block.
 * Replace with real Google reviews when GBP is live.
 */
export const HOME_REVIEWS = [
  {
    name: "Maria G.",
    city: "Orlando",
    rating: 5,
    text: "Straight fence line, clean install, and they handled our HOA paperwork. Crew was professional from start to finish.",
  },
  {
    name: "James R.",
    city: "Lakeland",
    rating: 5,
    text: "Storm took out two sections. FenceLine repaired it fast and it looks better than before. Clear price, no surprises.",
  },
  {
    name: "Anita P.",
    city: "Tampa",
    rating: 5,
    text: "We needed vinyl for privacy and low maintenance. Quote was clear, install was on schedule, and the gates feel solid.",
  },
  {
    name: "Chris D.",
    city: "Jacksonville",
    rating: 5,
    text: "Commercial chain-link done right—tight mesh, straight posts, finished on time. Easy to reach by phone and text.",
  },
];

export const WHY_POINTS = [
  {
    title: "Built for Florida conditions",
    body: "Deep-set posts, steel post options where wood fails, and materials that handle sun, humidity, and wind.",
  },
  {
    title: "Wholesale-grade materials",
    body: "We install and supply systems from major fence wholesalers—including Master Halco product lines where available—so you get pro-grade gear, not big-box leftovers.",
  },
  {
    title: "Fully managed permits & HOA",
    body: "We handle permitting and HOA documentation as part of our full-service process.",
  },
  {
    title: "Gates, access & full service",
    body: "From privacy lines to pool aluminum and automated gates—one contractor for the whole perimeter.",
  },
];

export const HOME_STEPS = [
  {
    name: "Request a quote",
    text: "Tell us repair or install, material, and project location.",
  },
  {
    name: "We confirm details",
    text: "Measure, review codes and HOA rules, and send a clear price.",
  },
  {
    name: "We build or repair",
    text: "Crew on site with wholesale-grade materials ready for Florida conditions.",
  },
  {
    name: "Final inspection",
    text: "You walk the line with us—clean, professional, built to last.",
  },
];

function abs(path) {
  if (!path) return SITE.url;
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getHomeJsonLd() {
  const logoUrl = abs(SITE.logo);
  const imageUrl = abs(SITE.ogImage);

  const organization = {
    "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: [SITE.shortName, "Fence Line Florida", SITE.domain],
    legalName: SITE.legalName,
    description: SITE.aeoSnippet,
    url: SITE.url,
    logo: logoUrl,
    image: imageUrl,
    telephone: SITE.phone,
    email: SITE.email,
    slogan: SITE.tagline,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...(SITE.hasStreetAddress && SITE.address.street
        ? { streetAddress: SITE.address.street }
        : {}),
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      ...(SITE.address.postalCode ? { postalCode: SITE.address.postalCode } : {}),
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: SITE.serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    knowsAbout: [
      "Fence installation Central Florida",
      "Fence repair Central Florida",
      "Wood fence",
      "Vinyl fence",
      "Aluminum pool fence",
      "Ornamental steel fence",
      "Chain link fence",
      "Gate operators Florida",
      "HOA fence approval",
      "Fence permits Florida",
      "Storm fence repair Florida",
    ],
    sameAs: [SITE.url],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "sales",
        areaServed: "US-FL",
        availableLanguage: ["English"],
      },
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.webName,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-US",
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${SITE.url}/#webpage`,
    url: SITE.url,
    name: SITE.seoHeading,
    description: SITE.description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    primaryImageOfPage: imageUrl,
    inLanguage: "en-US",
  };

  const services = FULL_SERVICES.map((s, i) => ({
    "@type": "Service",
    "@id": `${SITE.url}/#service-${i}`,
    name: s.title,
    description: s.body,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: ["Central Florida", "North Florida"],
    url: SITE.url,
  }));

  const howTo = {
    "@type": "HowTo",
    "@id": `${SITE.url}/#howto-quote`,
    name: "How to get a fence installed or repaired with FenceLine Florida",
    description:
      "Four-step process from free quote to finished fence line in Central Florida.",
    step: HOME_STEPS.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    mainEntity: HOME_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, webpage, ...services, howTo, faqPage],
  };
}

export function absoluteUrl(path = "/") {
  return abs(path);
}

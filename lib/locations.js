import { SITE } from "@/lib/site";

/** SEO city / area landing pages */
export const CITY_PAGES = [
  {
    slug: "orlando",
    name: "Orlando",
    region: "Central Florida",
    title: "Fence Installation & Repair in Orlando, FL",
    description:
      "FenceLine Florida installs and repairs wood, vinyl, aluminum, and chain-link fences in Orlando and nearby communities. Permits & HOA handled. Free quote.",
    h1: "Fence installation & repair in Orlando",
    intro:
      "Looking for a fence company in Orlando? FenceLine Florida builds and repairs storm-ready fences for homes and businesses across Orange County and surrounding areas.",
    body: "From privacy wood and low-maintenance vinyl to aluminum pool fencing and chain-link security, we install for Florida soil and weather. We handle permitting and HOA paperwork so your project stays on track.",
    nearby: ["Winter Park", "Altamonte Springs", "Apopka", "Ocoee", "Winter Garden"],
  },
  {
    slug: "tampa",
    name: "Tampa",
    region: "Tampa Bay",
    title: "Fence Installation & Repair in Tampa, FL",
    description:
      "Professional fence installation and repair in Tampa and Tampa Bay. Wood, vinyl, aluminum, chain-link. Storm-ready. Free estimate from FenceLine Florida.",
    h1: "Fence installation & repair in Tampa",
    intro:
      "FenceLine Florida serves Tampa homeowners and commercial properties with clean installs and reliable repairs built for Gulf Coast weather.",
    body: "Whether you need a new privacy line, pool aluminum, or storm damage restoration, our crew delivers straight lines and durable posts. Ask about HOA and permit handling for your Tampa property.",
    nearby: ["Brandon", "Riverview", "Carrollwood", "Temple Terrace", "Clearwater"],
  },
  {
    slug: "jacksonville",
    name: "Jacksonville",
    region: "North Florida",
    title: "Fence Installation & Repair in Jacksonville, FL",
    description:
      "Fence company serving Jacksonville and North Florida. Install and repair wood, vinyl, aluminum, and chain-link. Free quote — FenceLine Florida.",
    h1: "Fence installation & repair in Jacksonville",
    intro:
      "From the beaches to the suburbs, FenceLine Florida installs and repairs fences across the Jacksonville metro for residential and commercial clients.",
    body: "We specialize in Florida-ready construction—proper post depth, materials that hold up, and clear communication from quote to final walkthrough.",
    nearby: ["St. Augustine", "Orange Park", "Fleming Island", "Ponte Vedra", "Mandarin"],
  },
  {
    slug: "lakeland",
    name: "Lakeland",
    region: "Central Florida",
    title: "Fence Installation & Repair in Lakeland, FL",
    description:
      "Fence installation and repair in Lakeland and Polk County. Wood, vinyl, aluminum, chain-link. Permits & HOA help. Free quote from FenceLine Florida.",
    h1: "Fence installation & repair in Lakeland",
    intro:
      "FenceLine Florida is a trusted fence contractor for Lakeland homes and businesses—new installs, repairs, gates, and storm restoration.",
    body: "Central Florida soil and storms demand solid posts and clean workmanship. We deliver both, plus help with permits and HOA when needed.",
    nearby: ["Winter Haven", "Bartow", "Plant City", "Auburndale", "Davenport"],
  },
];

export function getCityBySlug(slug) {
  return CITY_PAGES.find((c) => c.slug === slug) || null;
}

export function cityPath(slug) {
  return `/areas/${slug}`;
}

export function allCityPaths() {
  return CITY_PAGES.map((c) => cityPath(c.slug));
}

export function cityJsonLd(city) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: city.title,
    description: city.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phone,
      url: SITE.url,
      areaServed: city.name,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: "Florida" },
    },
    url: `${SITE.url}${cityPath(city.slug)}`,
  };
}

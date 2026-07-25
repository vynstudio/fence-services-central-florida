import { pageEntityGraph } from "@/lib/seo-entity";

/** SEO city / area landing pages — Jacksonville, Orlando, Kissimmee only.
 *  Sitewide rules: docs/seo-sitewide-rules.md
 */
export const CITY_PAGES = [
  {
    slug: "jacksonville",
    name: "Jacksonville",
    region: "North Florida",
    title: "Vinyl & Chain Link Fence Installation in Jacksonville, FL",
    description:
      "FenceLine Florida installs residential and commercial vinyl and chain-link fences in Jacksonville and nearby communities. Permits & HOA help. Free quote.",
    h1: "Vinyl & chain-link fence installation in Jacksonville",
    intro:
      "From the beaches to the suburbs, FenceLine Florida installs vinyl and chain-link fences across the Jacksonville metro for homeowners, HOAs, and commercial clients. Vinyl for privacy and curb appeal; chain link for pets, yards, and security perimeters.",
    body: "Jacksonville homeowners often choose residential vinyl when they want backyard privacy and low maintenance in North Florida heat and humidity. Chain link is a strong fit for pet containment, larger lots, and commercial security around warehouses, facilities, and multi-unit properties. Fence permits and HOA design rules depend on location, height, and property type—requirements are not the same on every lot—so we help review what is often needed and manage permitting and HOA documentation for most jobs. Always confirm final requirements with the city and your HOA. Posts are set for Florida sand and wind, with clear quotes that spell out materials, footage, gates, and labor. Serving Jacksonville and nearby communities including Orange Park, Fleming Island, Mandarin, Ponte Vedra, and St. Augustine. For a full overview, read our fence permits and HOA approval guide for Florida.",
    nearby: ["Orange Park", "Fleming Island", "Ponte Vedra", "Mandarin", "St. Augustine"],
  },
  {
    slug: "orlando",
    name: "Orlando",
    region: "Central Florida",
    title: "Vinyl & Chain Link Fence Installation in Orlando, FL",
    description:
      "FenceLine Florida installs residential and commercial vinyl and chain-link fences in Orlando and Orange County. HOA & permit help. Free quote.",
    h1: "Vinyl & chain-link fence installation in Orlando",
    intro:
      "Looking for a fence company in Orlando? FenceLine Florida builds residential and commercial vinyl and chain-link fences across Orange County and surrounding areas—privacy for HOA homes, security for businesses, and installs built for Central Florida weather.",
    body: "In Orlando, vinyl is a favorite for HOA communities and low-maintenance privacy; chain link delivers cost-effective security for homes, pets, and commercial lots. Permit needs often depend on fence height, use, and site conditions—for example, taller fences (commonly over 6 ft), commercial projects, pool barriers, corner lots, easements, powered gates, or floodplain work are situations where a permit is often required. HOA design approval is frequently needed even when a city permit is not. These rules vary by property, so confirm with the city and your association; FenceLine Florida helps review requirements and handles permitting and HOA paperwork for most residential and commercial jobs. Quotes cover material, style, linear footage, posts, gates, and labor so pricing stays transparent. Nearby communities include Winter Park, Altamonte Springs, Apopka, Ocoee, and Winter Garden. For city-specific permit triggers and HOA tips, see our fence permits and HOA approval guide for Florida.",
    nearby: ["Winter Park", "Altamonte Springs", "Apopka", "Ocoee", "Winter Garden"],
  },
  {
    slug: "kissimmee",
    name: "Kissimmee",
    region: "Central Florida",
    title: "Vinyl & Chain Link Fence Installation in Kissimmee, FL",
    description:
      "FenceLine Florida installs residential and commercial vinyl and chain-link fences in Kissimmee and Osceola County. Permits & HOA help. Free quote.",
    h1: "Vinyl & chain-link fence installation in Kissimmee",
    intro:
      "FenceLine Florida serves Kissimmee homeowners and commercial properties with vinyl privacy and chain-link security built for Central Florida soil, sun, and storms—clear quotes, professional crews, and help with permits or HOA paperwork when needed.",
    body: "Whether you need a new vinyl line for backyard privacy, chain link for pets and property lines, or a commercial perimeter for a lot or facility, we install with straight posts and methods suited to Florida sand and wind. In Kissimmee and Osceola County, permit and HOA requirements depend on height, location, and property type—planned communities often require design approval even when a city permit is not required. We help sort out what is often needed and manage documentation for most jobs; always confirm final rules with the city and your HOA. Transparent quotes include materials (vinyl or chain link), footage, gates, post setting, and labor. Nearby: St. Cloud, Poinciana, Celebration, and Davenport. For more on permits and association packets, see our fence permits and HOA approval guide for Florida.",
    nearby: ["St. Cloud", "Poinciana", "Celebration", "Davenport", "St. Cloud West"],
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
  return pageEntityGraph({
    path: cityPath(city.slug),
    title: city.title,
    description: city.description,
    serviceName: city.h1,
    serviceDescription: city.description,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: "Florida" },
    },
  });
}

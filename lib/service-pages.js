import { pageEntityGraph } from "@/lib/seo-entity";

/**
 * SEO service pages — vinyl + chain-link only, residential & commercial.
 * Sitewide rules: docs/seo-sitewide-rules.md
 */
export const SERVICE_PAGES = [
  {
    slug: "vinyl-fence",
    title: "Vinyl Fence Installation | Residential & Commercial | FenceLine Florida",
    description:
      "Vinyl PVC fence installation for homes and businesses in Jacksonville, Orlando, and Kissimmee. Low maintenance, HOA-friendly privacy. Free quote — FenceLine Florida.",
    h1: "Vinyl fence installation",
    eyebrow: "Materials · Residential & commercial",
    intro:
      "Vinyl (PVC) fencing is our top privacy choice for Florida HOAs, homeowners, and commercial properties that want a clean look without painting or staining every few years. Choose vinyl when privacy, curb appeal, and low upkeep matter more than open sight lines or lowest cost.",
    body: "We install residential and commercial vinyl systems—including privacy and semi-privacy styles—built for Florida heat, humidity, and sun. Compared with chain link, vinyl screens neighbors and street view and is often preferred in planned communities; chain link remains the better pick for pets, open yards, and many security perimeters. Posts are set for Florida sand and wind so panels stay straight through storm season. From backyard privacy lines to business screening, we finish with matching gates when needed. Permit and HOA rules depend on city, height, and association guidelines—we help review what is often required and manage documentation for most jobs; always confirm with your city and HOA. For a step-by-step overview, see our fence permits and HOA approval guide covering Jacksonville, Orlando, and Kissimmee. Serving those cities with transparent quotes that include material, footage, posts, gates, and labor.",
    bullets: [
      "Residential privacy & HOA-friendly vinyl",
      "Commercial vinyl for offices, lots & facilities",
      "Low maintenance — holds color in Florida sun",
      "Permits & HOA documentation available",
      "Posts set for Florida soil and wind",
    ],
    image: "vinyl",
  },
  {
    slug: "chain-link-fence",
    title: "Chain Link Fence Installation | Residential & Commercial | FenceLine Florida",
    description:
      "Chain-link fence install for homes and businesses in Jacksonville, Orlando, and Kissimmee. Galvanized or color-coated. Free quote — FenceLine Florida.",
    h1: "Chain-link fence installation",
    eyebrow: "Materials · Residential & commercial",
    intro:
      "Chain link remains one of the most effective, economical barriers—for pets and yards at home, and security perimeters for schools, warehouses, and commercial lots. Choose chain link when durability, cost, and containment matter most; choose vinyl when full privacy and HOA curb appeal are the priority.",
    body: "We install residential and commercial chain-link systems with proper tensioning, terminal posts, and gates—built for Florida use, not a weekend box-store patch. Galvanized or color-coated options are available for homes that want a cleaner look and for businesses that need clear site security. Homeowners often pick chain link for dogs and property lines; commercial clients pick it for lots, facilities, and multi-unit perimeters. Posts and foundations matter in Florida sand and wind as much as mesh gauge. Permit needs often depend on height, commercial use, corner lots, easements, or powered gates—HOA rules may still apply on residential lots even when a city permit is not required. We help sort requirements and document the job; confirm final rules with the city and your HOA. Serving Jacksonville, Orlando, and Kissimmee with quotes that spell out mesh, height, footage, gates, and labor.",
    bullets: [
      "Residential chain link for yards & pets",
      "Commercial & security chain-link perimeters",
      "Galvanized or color-coated mesh",
      "Gates, terminals, and full-run installs",
      "Florida post setting for soil and wind",
    ],
    image: "chain",
  },
  {
    slug: "residential-fence",
    title: "Residential Fence Installation | Vinyl & Chain Link | FenceLine Florida",
    description:
      "Residential vinyl and chain-link fence installation in Jacksonville, Orlando, and Kissimmee. HOA-friendly options. Free quote — FenceLine Florida.",
    h1: "Residential fence installation",
    eyebrow: "Residential · Vinyl & chain link",
    intro:
      "Homeowners choose FenceLine Florida for vinyl privacy and chain-link security—clean installs, clear quotes, and help with permits or HOA paperwork. We specialize in the two materials Florida homes use most: vinyl for privacy and curb appeal, chain link for pets and cost-effective boundaries.",
    body: "Deciding between vinyl and chain link is usually about priority: privacy and low maintenance point to vinyl; pets, open sight lines, and budget often point to chain link. We install both for Florida soil and weather—deep-set posts, straight lines, and wholesale-grade materials. In Jacksonville, Orlando, and Kissimmee, HOA design approval is often required even when a city permit is not, and permit triggers can include taller fences, pool barriers, corner lots, or easements depending on the property. We help review what is often needed and manage documentation for most residential jobs; always confirm with your city and association. A good residential quote includes material and style, height, linear footage, gates, post setting, labor, and any permit or HOA support so there are no surprises at install.",
    bullets: [
      "Vinyl privacy for homes & HOA communities",
      "Chain link for yards, pets & property lines",
      "HOA and permit support",
      "Straight lines and durable post setting",
      "Transparent residential quotes",
    ],
    image: "vinyl",
  },
  {
    slug: "commercial-fence",
    title: "Commercial Fence Installation | Vinyl & Chain Link | FenceLine Florida",
    description:
      "Commercial vinyl and chain-link fence installation in Jacksonville, Orlando, and Kissimmee. Security and perimeter fencing for businesses. Free quote.",
    h1: "Commercial fence installation",
    eyebrow: "Commercial · Vinyl & chain link",
    intro:
      "Businesses and facilities need secure, professional perimeters. We install commercial vinyl and chain-link systems for lots, warehouses, schools, and multi-unit properties across Jacksonville, Orlando, and Kissimmee—with schedules that respect your operations.",
    body: "Commercial chain link is typically the go-to for security perimeters, site control, and cost-effective boundaries; commercial vinyl is the better fit when screening, privacy, or a cleaner street-facing look matters. Both need correct posts, terminals, and tension for Florida soil, wind, and humidity. Commercial fence projects often have different permit expectations than simple residential yards—city rules, easements, floodplain, or powered gates can apply depending on the site. We help coordinate documentation and deliver transparent quotes covering mesh or vinyl system, height, linear footage, gates, labor, and timeline. FenceLine Florida focuses only on vinyl and chain link so commercial installs stay consistent and professional from measure to final walk-through.",
    bullets: [
      "Commercial chain-link security & perimeter",
      "Commercial vinyl screening & privacy",
      "Lots, facilities, schools & multi-unit",
      "Clear timelines and professional crews",
      "Quote transparency: materials, footage, gates",
    ],
    image: "chain",
  },
];

export function getServiceBySlug(slug) {
  return SERVICE_PAGES.find((s) => s.slug === slug) || null;
}

export function servicePath(slug) {
  return `/services/${slug}`;
}

export function allServicePaths() {
  return SERVICE_PAGES.map((s) => servicePath(s.slug));
}

export function serviceJsonLd(service) {
  return pageEntityGraph({
    path: servicePath(service.slug),
    title: service.title,
    description: service.description,
    serviceName: service.h1,
    serviceDescription: service.description,
  });
}

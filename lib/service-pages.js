import { SITE } from "@/lib/site";

/**
 * SEO service / product pages — Master Halco catalog × Florida demand.
 */
export const SERVICE_PAGES = [
  {
    slug: "fence-installation",
    title: "Fence Installation in Central Florida",
    description:
      "New fence installation across Central and North Florida. Wood, vinyl, aluminum, steel, and chain-link from wholesale-grade lines. Free quote — FenceLine Florida.",
    h1: "Fence installation",
    eyebrow: "Services",
    intro:
      "Need a new fence line? We install residential and commercial systems specified for Florida soil, wind, and humidity—using materials from major wholesale suppliers including Master Halco product lines where available.",
    body: "From privacy wood and vinyl to pool aluminum, ornamental steel, and chain-link security, we set posts correctly, run clean lines, and finish with gates that match. Permits and HOA help available.",
    bullets: [
      "Wood, vinyl, aluminum, steel, chain-link",
      "Steel post systems where wood posts fail",
      "Residential and commercial",
      "Permits & HOA handling",
    ],
    image: "wood",
  },
  {
    slug: "fence-repair",
    title: "Fence Repair & Storm Restoration | FenceLine Florida",
    description:
      "Fence repair and storm damage restoration in Central Florida. Posts, panels, gates. Fast, clean work. Free estimate.",
    h1: "Fence repair & storm restoration",
    eyebrow: "Services",
    intro:
      "Leaning posts, blown panels, or hurricane damage? We repair and rebuild so your line is straight, secure, and ready for the next storm season.",
    body: "Florida’s sand and wind punish weak posts. We fix what failed—and upgrade foundations or materials when a simple patch won’t last.",
    bullets: [
      "Post, panel, and rail repairs",
      "Storm damage restoration",
      "Gate repair and replacement",
      "Partial or full line rebuilds",
    ],
    image: "chain",
  },
  {
    slug: "wood-fence",
    title: "Wood Fence Installation & Repair | FenceLine Florida",
    description:
      "Wood privacy fence installation in Central Florida. Cedar, pine, pre-stained options. Posts set for Florida soil. Free quote.",
    h1: "Wood fence installation & repair",
    eyebrow: "Materials · Master Halco lines",
    intro:
      "Wood fencing delivers privacy and classic curb appeal. We install and repair wood systems—including pre-stained options—with posts and spacing designed for Florida conditions.",
    body: "Sourced from professional wholesale lines (cedar, pine, spruce/fir, specialty, and pre-stained programs available through suppliers like Master Halco). Ask about steel posts when wood posts have failed before.",
    bullets: [
      "Privacy and semi-privacy styles",
      "Pre-stained options available",
      "Posts set for Florida soil",
      "Gates matched to the line",
    ],
    image: "wood",
  },
  {
    slug: "vinyl-fence",
    title: "Vinyl Fence Installation | FenceLine Florida",
    description:
      "Vinyl PVC privacy fence in Central Florida. Low maintenance, HOA-friendly, holds color in the sun. Free quote.",
    h1: "Vinyl fence installation & repair",
    eyebrow: "Materials · Master Halco lines",
    intro:
      "Vinyl (PVC) is a top choice for Florida HOAs and homeowners who want privacy without painting or staining every few years.",
    body: "We install low-maintenance vinyl systems—including woodgrain styles—from major wholesale catalogs. Ideal for heat, humidity, and planned communities.",
    bullets: [
      "Low-maintenance privacy",
      "Color that holds in Florida sun",
      "HOA-friendly options",
      "Matching gates available",
    ],
    image: "vinyl",
  },
  {
    slug: "aluminum-fence",
    title: "Aluminum Pool & Ornamental Fence | FenceLine Florida",
    description:
      "Ornamental aluminum fence installation in Central Florida. Pool barriers, estate styles, corrosion-resistant finishes. Free quote.",
    h1: "Ornamental aluminum fence",
    eyebrow: "Materials · Pool-ready",
    intro:
      "Aluminum ornamental fencing gives the wrought-iron look without the rust drama—perfect for pool areas and open Florida lots.",
    body: "We install pool-friendly aluminum systems with clean lines and durable finishes. Final layout should meet your local pool barrier code and HOA rules—we help you plan for both.",
    bullets: [
      "Pool barrier layouts",
      "Open views with security",
      "Powder-coated finishes",
      "Residential and light commercial",
    ],
    image: "aluminum",
  },
  {
    slug: "steel-fence",
    title: "Ornamental Steel Fence | FenceLine Florida",
    description:
      "Ornamental steel fence installation in Central Florida. Security and classic curb appeal. Free quote from FenceLine Florida.",
    h1: "Ornamental steel fence",
    eyebrow: "Materials · Security",
    intro:
      "Modern ornamental steel delivers the classic iron look with stronger panels and coatings built for humidity and sun.",
    body: "From residential street fronts to commercial security, we install steel ornamental systems available through professional wholesale channels—matched to gates and access where needed.",
    bullets: [
      "Security with style",
      "Powder-coated systems",
      "Commercial and residential",
      "Pairs with automated gates",
    ],
    image: "aluminum",
  },
  {
    slug: "chain-link-fence",
    title: "Chain Link Fence Installation | FenceLine Florida",
    description:
      "Chain-link fence install and repair in Central Florida. Galvanized or color-coated. Residential, commercial, pets. Free quote.",
    h1: "Chain-link fence",
    eyebrow: "Materials · Security",
    intro:
      "Chain link remains one of the most effective, economical permanent barriers—for pets, yards, schools, and commercial lots.",
    body: "We install galvanized and color systems with proper tensioning, terminal posts, and gates. Built for Florida use, not a weekend box-store patch.",
    bullets: [
      "Residential and commercial",
      "Color-coated options",
      "Gates and hardware",
      "Repair and full runs",
    ],
    image: "chain",
  },
  {
    slug: "gates-access-control",
    title: "Gates & Access Control | FenceLine Florida",
    description:
      "Fence gates, driveway gates, commercial gates, and automatic openers in Central Florida. Free quote — FenceLine Florida.",
    h1: "Gates & access control",
    eyebrow: "Services · Security",
    intro:
      "A fence is only as good as its openings. We install walk gates, driveway gates, commercial gates, and access control for swing or slide systems.",
    body: "Whether you need a simple latch gate or a powered entry for a home or business, we match hardware and operators to your fence material and use case.",
    bullets: [
      "Walk and driveway gates",
      "Commercial and custom gate options",
      "Residential & commercial operators",
      "Integrated with wood, vinyl, aluminum, steel, chain-link",
    ],
    image: "wood",
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
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phone,
      url: SITE.url,
    },
    areaServed: SITE.serviceAreas.slice(0, 10).map((name) => ({
      "@type": "City",
      name,
    })),
    url: `${SITE.url}${servicePath(service.slug)}`,
  };
}

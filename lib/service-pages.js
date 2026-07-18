import { SITE } from "@/lib/site";

/** SEO service / product landing pages */
export const SERVICE_PAGES = [
  {
    slug: "fence-installation",
    title: "Fence Installation in Central Florida",
    description:
      "New fence installation across Central and North Florida. Wood, vinyl, aluminum, and chain-link. Engineered for Florida weather. Free quote — FenceLine Florida.",
    h1: "Fence installation",
    eyebrow: "Services",
    intro:
      "Need a new fence line? FenceLine Florida installs residential and commercial fences built for Florida soil, wind, and rain—from first measurement to final inspection.",
    body: "We set posts correctly, run clean lines, and finish with gates and hardware that match your system. Permits and HOA documentation are available as part of our full-service process.",
    bullets: [
      "Wood, vinyl, aluminum, and chain-link",
      "Residential and commercial properties",
      "Florida-weather engineering",
      "Permits & HOA handling available",
    ],
    image: "wood",
  },
  {
    slug: "fence-repair",
    title: "Fence Repair in Central Florida",
    description:
      "Fence repair and panel replacement in Central Florida. Failed posts, storm damage, gates. Fast, clean work from FenceLine Florida. Free estimate.",
    h1: "Fence repair",
    eyebrow: "Services",
    intro:
      "Leaning posts, blown panels, or a broken gate? We repair and replace fence sections so your line is straight, secure, and ready for the next storm season.",
    body: "Storm restoration is a core part of what we do. We’ll assess damage, quote clearly, and rebuild with durable methods suited to Florida conditions.",
    bullets: [
      "Post, panel, and rail repairs",
      "Storm damage restoration",
      "Gate repair and replacement",
      "Partial or full line replacement",
    ],
    image: "chain",
  },
  {
    slug: "wood-fence",
    title: "Wood Fence Installation & Repair | FenceLine Florida",
    description:
      "Wood privacy fence installation and repair in Central Florida. Posts set for Florida soil and storms. Free quote from FenceLine Florida.",
    h1: "Wood fence installation & repair",
    eyebrow: "Materials",
    intro:
      "Wood fencing delivers privacy and classic curb appeal. We install and repair wood fence systems with posts and spacing designed for Florida conditions.",
    body: "From full privacy lines to repairs after storms, we keep wood fences straight, solid, and professional—backed by clear communication and clean workmanship.",
    bullets: [
      "Privacy and semi-privacy styles",
      "Posts set for Florida soil",
      "Gates and hardware matched to the line",
      "Repair and full replacement options",
    ],
    image: "wood",
  },
  {
    slug: "vinyl-fence",
    title: "Vinyl Fence Installation & Repair | FenceLine Florida",
    description:
      "Vinyl privacy fence installation in Central Florida. Low maintenance, holds color in the sun. FenceLine Florida — free quote.",
    h1: "Vinyl fence installation & repair",
    eyebrow: "Materials",
    intro:
      "Vinyl fencing is a favorite for low-maintenance privacy in Florida heat and humidity. We install clean vinyl systems that stay bright and straight.",
    body: "Ideal for homes and HOA communities that want privacy without constant painting or staining. Ask us about styles, colors, and gate options for your property.",
    bullets: [
      "Low-maintenance privacy",
      "Color that holds in Florida sun",
      "HOA-friendly options",
      "Install and repair service",
    ],
    image: "vinyl",
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

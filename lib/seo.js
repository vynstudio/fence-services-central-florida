import { SITE } from "@/lib/site";
import {
  absoluteUrl as entityAbsoluteUrl,
  pageEntityGraph,
} from "@/lib/seo-entity";

/**
 * Homepage SEO content — vinyl + chain-link, residential & commercial.
 * Sitewide rules: docs/seo-sitewide-rules.md · entity: lib/seo-entity.js
 */

/**
 * Homepage AEO FAQs — must match FAQPage schema text (SEO brief Jul 25, 2026).
 * Visible on page + JSON-LD. Keep answers careful; not legal advice.
 */
export const HOME_FAQS = [
  {
    q: "Do I need a permit for a fence in Jacksonville?",
    a: "Sometimes. In Jacksonville, permit requirements depend on fence height, placement, and zoning rules. Even when a building permit is not required under Florida HB 803 (effective July 1, 2026, for residential projects under $7,500), local setbacks and height limits still apply. It is smart to confirm the rules before installation — FenceLine Florida handles this process for every project.",
  },
  {
    q: "Can FenceLine Florida help with permits and HOA paperwork?",
    a: "Yes. Permit coordination and HOA package support are included in our installation process. That saves time, reduces back-and-forth, and helps homeowners avoid delays caused by missing documents or rule conflicts.",
  },
  {
    q: "What fence heights are allowed in Jacksonville?",
    a: "Jacksonville (Duval County) rules typically allow up to 4 feet in front yards and up to 8 feet in side or rear yards, depending on zoning and property conditions. Property line placement, visibility triangles, and flood-zone rules can also affect what is permitted.",
  },
  {
    q: "Does Florida have a statewide fence permit rule?",
    a: "No. Florida does not use one statewide fence-permit rule. Requirements are set locally by counties and cities. Jacksonville, Orange, Seminole, and Osceola County each follow different permitting and zoning standards, which is why working with a local contractor who knows the rules matters.",
  },
  {
    q: "Why choose a local fence contractor instead of a general installer?",
    a: "A local contractor understands county and city rules, HOA requirements, and common property issues that slow down projects. That typically means fewer surprises, cleaner estimates, and a smoother installation from start to finish.",
  },
];

/** Core services — vinyl/chain × residential/commercial */
export const FULL_SERVICES = [
  {
    title: "Residential vinyl fence",
    body: "Low-maintenance PVC privacy for Florida homes and HOA communities—holds color in sun and humidity without painting or staining.",
  },
  {
    title: "Commercial vinyl fence",
    body: "Clean screening and privacy for offices, multi-unit properties, and business lots that want curb appeal with minimal upkeep.",
  },
  {
    title: "Residential chain link",
    body: "Durable, cost-effective fencing for yards, pets, and property lines—built with proper posts and tension for Florida use.",
  },
  {
    title: "Commercial chain link",
    body: "Security and perimeter fencing for facilities, warehouses, schools, and commercial lots—tight mesh, solid terminals, clear schedules.",
  },
];

/**
 * Product / material grid (homepage cards).
 * `name` maps to public/images/{mobile,tablet,desktop}/{name}.jpg when present.
 */
export const MATERIAL_SERVICES = [
  {
    title: "Vinyl fence",
    body: "Low-maintenance PVC privacy for homes and businesses—an HOA favorite in Florida heat and humidity. Ideal when you want screening without painting or staining.",
    name: "vinyl",
    image: "/images/home-gallery-section-1.jpg",
    slug: "vinyl-fence",
    flNeed: "Privacy, HOA communities, low upkeep",
  },
  {
    title: "Chain link",
    body: "Galvanized or color-coated mesh for pet yards and commercial security perimeters—economical, durable, and built with proper posts for Florida soil.",
    name: "chain",
    image: "/images/home-gallery-section-2.jpg",
    slug: "chain-link-fence",
    flNeed: "Security, pets, commercial lots",
  },
];

/** Focused product lines we install */
export const PRODUCT_LINES = [
  {
    id: "vinyl-residential",
    title: "Residential vinyl",
    summary: "Privacy and semi-privacy PVC systems for homes and HOAs—best when backyard privacy and curb appeal matter most.",
    florida: "Holds color in Florida sun and humidity; popular in planned communities where HOA design rules often apply.",
  },
  {
    id: "vinyl-commercial",
    title: "Commercial vinyl",
    summary: "Screening and privacy systems for business and multi-unit properties.",
    florida: "Clean look with minimal upkeep for Florida commercial sites that need screening without constant maintenance.",
  },
  {
    id: "chain-residential",
    title: "Residential chain link",
    summary: "Mesh systems for yards, pets, and property boundaries—best when cost and durability matter.",
    florida: "Cost-effective containment that stands up to Florida use when posts are set for local soil and wind.",
  },
  {
    id: "chain-commercial",
    title: "Commercial chain link",
    summary: "Perimeter and security fencing for lots, schools, and facilities.",
    florida: "Tight tensioning, proper terminals, and schedules that respect commercial operations.",
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
    text: "Vinyl privacy fence for our HOA lot—straight line, clean install, and they handled the paperwork. Professional from start to finish.",
  },
  {
    name: "James R.",
    city: "Kissimmee",
    rating: 5,
    text: "Residential chain link for the backyard and pets. Clear price, on schedule, posts set solid. No surprises.",
  },
  {
    name: "Anita P.",
    city: "Jacksonville",
    rating: 5,
    text: "We needed vinyl for privacy and low maintenance. Quote was clear, install was on schedule, and it still looks new.",
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
    title: "Focused on vinyl & chain link",
    body: "We specialize in two materials—so every install is dialed in for residential privacy or commercial security, with clearer quotes and fewer shortcuts.",
  },
  {
    title: "Built for Florida conditions",
    body: "Posts set for Florida sand and wind, plus materials that handle sun, humidity, and storm-season weather across Jacksonville, Orlando, and Kissimmee.",
  },
  {
    title: "Wholesale-grade materials",
    body: "We install systems from major fence wholesalers—including Master Halco product lines where available—not big-box leftovers.",
  },
  {
    title: "Permits & HOA help",
    body: "Fence rules often depend on city, height, and HOA. We help review requirements and manage permitting and HOA documentation for most residential and commercial jobs.",
  },
];

export const HOME_STEPS = [
  {
    name: "Request a quote",
    text: "Tell us vinyl or chain link, residential or commercial, and your city.",
  },
  {
    name: "We confirm details",
    text: "Measure, review codes and HOA rules, and send a clear price.",
  },
  {
    name: "We install",
    text: "Crew on site with wholesale-grade vinyl or chain-link materials.",
  },
  {
    name: "Final inspection",
    text: "You walk the line with us—clean, professional, built to last.",
  },
];

/**
 * Homepage JSON-LD — shared entity graph + OfferCatalog (homepage brief).
 * FAQ answers must match HOME_FAQS on-page text.
 * Sitewide rules: docs/seo-sitewide-rules.md
 */
export function getHomeJsonLd() {
  return pageEntityGraph({
    path: "/",
    title: SITE.seoHeading,
    description: SITE.description,
    faqs: HOME_FAQS,
    localBusinessOverrides: {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Fence Installation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vinyl Fence Installation",
              description:
                "Wholesale-grade vinyl fence installation engineered for Florida wind and humidity conditions.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Chain-Link Fence Installation",
              description:
                "Residential and commercial chain-link fence installation across Jacksonville and Central Florida.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Permit Coordination",
              description:
                "Full permit application support for Duval, Orange, Seminole, and Osceola County fence projects.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "HOA Package Preparation",
              description:
                "HOA documentation and submission support for fence installation projects.",
            },
          },
        ],
      },
    },
  });
}

export function absoluteUrl(path = "/") {
  return entityAbsoluteUrl(path);
}

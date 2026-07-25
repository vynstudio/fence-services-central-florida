/** Single source of truth for brand + NAP + SEO. */
export const SITE = {
  name: "FenceLine Florida",
  shortName: "FenceLine",
  webName: "FenceLine Florida",
  domain: "fencelineflorida.com",
  legalName: "Diler Dynamics Group LLC",
  legalLine: "FenceLine Florida is a DBA of Diler Dynamics Group LLC.",
  tagline: "Straight lines. Strong fences.",

  /** Primary SEO H1 + title (homepage AEO brief Jul 2026) */
  seoHeading: "Fence Installation in Jacksonville & Central Florida",
  marketLine:
    "Vinyl and chain-link fence installation for Jacksonville, Orange, Seminole & Osceola County",

  /** Meta description */
  description:
    "FenceLine Florida installs vinyl and chain-link fences for homes and businesses in Jacksonville, Orange, Seminole, and Osceola County. We handle permits and HOA paperwork — get a free estimate today.",

  /**
   * Homepage about (SEO + AEO foundation).
   */
  about:
    "FenceLine Florida is a professional fence installation company specializing in vinyl and chain-link fencing for residential and commercial properties in Jacksonville, Orange, Seminole, and Osceola County (including Orlando and Kissimmee). As a DBA of Diler Dynamics Group LLC, we provide reliable fencing solutions built for Florida conditions, with permit and HOA documentation available for most jobs.",
  aboutBody:
    "We install vinyl privacy systems and chain-link security for homes, HOAs, businesses, and facilities. Every project is built for Florida soil, sun, and storms—from post setting to final inspection. Permit and HOA requirements often depend on city, fence height, and property type; we help review what is often needed and manage documentation for most residential and commercial installs. Materials are sourced through professional fence wholesalers including Master Halco product lines where available.",
  supplierNote:
    "Materials sourced through professional fence wholesalers. Master Halco is a leading manufacturer/wholesaler; FenceLine Florida sells and installs to homeowners and businesses (we are not a Master Halco retail store).",

  /** Hero — short SEO layout */
  heroHeadline: "Fence Installation in Jacksonville & Central Florida",
  heroSubheadline:
    "Vinyl and chain-link for homes and businesses—permits, HOA packages, and free estimates.",
  heroTrust: "Jacksonville · Orange · Seminole · Osceola County",
  heroCta: "Get free quote",

  /** Services */
  servicesHeading: "Vinyl & Chain-Link Fence Installation",
  servicesLead:
    "We focus on two materials done right: vinyl for low-maintenance privacy, and chain link for durable security—for both homes and businesses.",
  servicesClose:
    "Installations use wholesale-grade materials and methods engineered for Florida weather: high winds, shifting soil, humidity, and heavy rain.",

  /** Areas */
  areasHeading: "Serving Jacksonville, Orange, Seminole & Osceola County",
  areasLead:
    "Priority markets for vinyl and chain-link installs—homes, HOAs, and commercial properties:",
  areasNearMe:
    "Looking for fence installation in Jacksonville or Central Florida (Orange, Seminole, Osceola)—including Orlando and Kissimmee? We’re ready to quote your project.",

  /** Why */
  whyHeading: "Why Homeowners Choose FenceLine Florida",
  whyLead:
    "Local focus, vinyl and chain-link specialization, and help with permits and HOA paperwork—no shortcuts, no weak installs.",

  /** CTA */
  ctaHeading: "Get a Fence Quote Today",
  ctaLead:
    "Need residential or commercial vinyl or chain-link fencing in Jacksonville or Central Florida (Orange, Seminole, Osceola)? Contact FenceLine Florida for a fast, transparent quote.",

  aeoSnippet:
    "FenceLine Florida installs vinyl and chain-link fences for residential and commercial properties in Jacksonville, Orange, Seminole, and Osceola County. Services include permit coordination and HOA documentation support.",

  url: "https://fencelineflorida.com",
  /**
   * Phone — env-driven so you can swap to a FenceLine-only Quo number later.
   * NEXT_PUBLIC_PHONE_E164 / NEXT_PUBLIC_PHONE_DISPLAY / QUO_FROM_NUMBER
   */
  phone: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(689) 600-2720",
  phoneE164: process.env.NEXT_PUBLIC_PHONE_E164 || "+16896002720",
  phoneHref: `tel:${process.env.NEXT_PUBLIC_PHONE_E164 || "+16896002720"}`,
  smsHref: `sms:${process.env.NEXT_PUBLIC_PHONE_E164 || "+16896002720"}?&body=Hi%20FenceLine%20Florida%20%E2%80%94%20I%27d%20like%20a%20free%20fence%20quote.`,
  email: "hello@fencelineflorida.com",
  emailHref: "mailto:hello@fencelineflorida.com",
  /** Service-area business — no public street address on site */
  hasStreetAddress: false,
  address: {
    street: "",
    city: "",
    region: "FL",
    postalCode: "",
    country: "US",
  },
  addressLine: "",
  addressServiceLine: "Serving Jacksonville, Orange, Seminole & Osceola County",
  mapsHref: "",
  googleBusinessUrl:
    "https://www.google.com/maps/search/?api=1&query=FenceLine+Florida",
  geo: null,
  area: "Jacksonville & Central Florida",
  serviceAreas: [
    "Jacksonville",
    "Orlando",
    "Kissimmee",
    "Orange County",
    "Seminole County",
    "Osceola County",
  ],
  year: new Date().getFullYear(),
  ogImage: "/opengraph-image",
  logo: "/logo/logo-dark.png",
  logoLight: "/logo/logo-light.png",
  logoMark: "/logo/logo-mark.png",
  ogLogoPath: "/logo/og-logo.png",
  /** Brand green sampled from logo suite */
  /** Sampled from official logo-dark.png wordmark */
  brandGreen: "#124137",
  brandInk: "#0F241F",
  brandSoft: "#F3F7F5",
  brandLine: "#C9D5CF",
  keywords: [
    "vinyl fence Jacksonville",
    "vinyl fence Orlando",
    "vinyl fence Kissimmee",
    "chain link fence Jacksonville",
    "chain link fence Orlando",
    "chain link fence Kissimmee",
    "residential vinyl fence Florida",
    "commercial chain link fence Florida",
    "vinyl fence installation Florida",
    "chain link fence installation Florida",
    "HOA vinyl fence Florida",
    "FenceLine Florida",
    "Diler Dynamics Group LLC",
  ],
  colors: {
    black: "#111111",
    ink: "#121212",
    accent: "#124137",
    accentHover: "#0E332C",
    accentBright: "#2A9B6A",
    accentSoft: "#E8F2EE",
    gray: "#555555",
    line: "#E2E8E4",
    soft: "#F6F8F6",
    white: "#FFFFFF",
  },
};

export const HOME_TITLE =
  "Fence Installation Jacksonville & Central Florida | FenceLine Florida";

/** OG / Twitter description (brief) */
export const HOME_OG_DESCRIPTION =
  "Vinyl and chain-link fence installation for Jacksonville and Central Florida. Permits, HOA packages, and free estimates included.";

export const HOME_DESCRIPTION = SITE.description;

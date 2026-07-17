/** Single source of truth for brand + NAP + SEO. */
export const SITE = {
  name: "FenceLine Florida",
  shortName: "FenceLine",
  webName: "FenceLine Florida",
  domain: "fencelineflorida.com",
  legalName: "Diler Dynamics Group LLC",
  legalLine: "FenceLine Florida is a DBA of Diler Dynamics Group LLC.",
  tagline: "Straight lines. Strong fences.",

  /** Primary SEO H1 + title */
  seoHeading: "Fence Installation & Repair in Central Florida",
  marketLine: "Fence installation & repair in Central Florida",

  /** Meta description */
  description:
    "FenceLine Florida — fence installation and repair across Central and North Florida. Wood, vinyl, aluminum & chain-link. Storm-ready. Permits & HOA handled. Free quote.",

  /**
   * Homepage about (SEO + AEO foundation).
   */
  about:
    "FenceLine Florida is a professional fence installation and repair company serving Central and North Florida, including Orlando, Lakeland, Tampa, Jacksonville, and surrounding areas. As a DBA of Diler Dynamics Group LLC, we provide reliable, code-compliant fencing solutions for residential and commercial properties.",
  aboutBody:
    "We install and repair wood, vinyl, aluminum, and chain-link fences built specifically for Florida’s soil and storm conditions. Every project is handled with precision, from post setting to final inspection, ensuring long-term durability and clean, professional results.",

  /** Hero */
  heroHeadline: "Fence Installation & Repair in Central Florida",
  heroSubheadline:
    "Wood, vinyl, aluminum, and chain-link for homes and businesses—built for Florida soil and storms. Free quotes.",
  heroBullets: [
    "New install, repair, gates, and storm restoration",
    "Wood, vinyl, aluminum, and chain-link",
    "Engineered for Florida weather",
    "Permits and HOA approvals handled for you",
  ],
  heroCta: "Get free quote",

  /** Services */
  servicesHeading: "Full-Service Fence Company",
  servicesLead:
    "We handle everything from start to finish so you don’t have to deal with multiple contractors or paperwork.",
  servicesClose:
    "All installations are engineered to withstand Florida weather, including high winds, shifting soil, and heavy rainfall.",

  /** Areas */
  areasHeading: "Areas We Serve",
  areasLead:
    "FenceLine Florida proudly serves homeowners and businesses across:",
  areasNearMe:
    "If you’re searching for “fence installation near me” or “fence repair in Central Florida,” our team is ready to help.",

  /** Why */
  whyHeading: "Why Choose FenceLine Florida",
  whyLead:
    "We focus on doing the job right the first time—no shortcuts, no weak installs.",

  /** CTA */
  ctaHeading: "Get a Fence Quote Today",
  ctaLead:
    "Looking for a reliable fence contractor in Florida? FenceLine Florida makes it easy to get started. Contact us today for a fast, transparent quote and expert guidance on the best fencing option for your property.",

  aeoSnippet:
    "FenceLine Florida is a professional fence company serving Central and North Florida, specializing in wood, vinyl, aluminum, and chain-link fence installation and repair with Florida-weather engineered installs and full permit/HOA handling.",

  url: "https://fencelineflorida.com",
  phone: "(407) 555-0198",
  phoneHref: "tel:+14075550198",
  smsHref:
    "sms:+14075550198?&body=Hi%20FenceLine%20Florida%20%E2%80%94%20I%27d%20like%20a%20free%20fence%20quote.",
  email: "hello@fencelineflorida.com",
  emailHref: "mailto:hello@fencelineflorida.com",
  address: {
    street: "1420 West Pine Street",
    city: "Orlando",
    region: "FL",
    postalCode: "32805",
    country: "US",
  },
  addressLine: "1420 West Pine Street, Orlando, FL 32805",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Orlando+FL+fence+company",
  geo: { latitude: 28.5383, longitude: -81.3792 },
  area: "Central & North Florida",
  serviceAreas: [
    "Orlando",
    "Sanford",
    "Kissimmee",
    "Clermont",
    "Lakeland",
    "Tampa",
    "Daytona Beach",
    "Melbourne",
    "Ocala",
    "Jacksonville",
    "Central Florida",
    "North Florida",
  ],
  year: new Date().getFullYear(),
  ogImage: "/opengraph-image",
  logo: "/logo/logo-dark.png",
  logoLight: "/logo/logo-light.png",
  logoMark: "/logo/logo-mark.png",
  ogLogoPath: "/logo/og-logo.png",
  /** Brand green sampled from logo suite */
  brandGreen: "#124137",
  keywords: [
    "fence installation Central Florida",
    "fence repair Central Florida",
    "fence installation near me",
    "fence company Orlando",
    "fence company Lakeland",
    "fence company Tampa",
    "fence company Jacksonville",
    "wood fence Florida",
    "vinyl fence Florida",
    "aluminum fence Florida",
    "chain link fence Florida",
    "HOA fence permit Florida",
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
  "Fence Installation & Repair in Central Florida | FenceLine Florida";

export const HOME_DESCRIPTION = SITE.description;

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
    "FenceLine Florida installs and repairs wood, vinyl, aluminum, steel, and chain-link fences across Central & North Florida. Gates, pool barriers, storm repair. Wholesale-grade materials. Free quote.",

  /**
   * Homepage about (SEO + AEO foundation).
   */
  about:
    "FenceLine Florida is a professional fence installation and repair company based in St. Petersburg and serving the corridor from Tampa Bay to Jacksonville—including Tampa, St. Petersburg, Orlando, Lakeland, Ocala, and Jacksonville. As a DBA of Diler Dynamics Group LLC, we provide reliable, code-compliant fencing solutions for residential and commercial properties.",
  aboutBody:
    "We install and supply fence systems from major wholesale lines—including Master Halco product families where available—wood, vinyl, ornamental aluminum and steel, chain-link, gates, and access control. Every project is built for Florida soil, sun, and storms, from post setting to final inspection.",
  supplierNote:
    "Materials sourced through professional fence wholesalers. Master Halco is a leading manufacturer/wholesaler; FenceLine Florida sells and installs to homeowners and businesses (we are not a Master Halco retail store).",

  /** Hero — short SEO layout */
  heroHeadline: "Fence Installation & Repair in Central Florida",
  heroSubheadline:
    "Wood, vinyl, aluminum, steel & chain-link—plus gates. Built for Florida soil and storms.",
  heroTrust: "Permits & HOA handled · Pool barriers · Storm repair",
  heroCta: "Get free quote",

  /** Services */
  servicesHeading: "Full-Service Fence Company",
  servicesLead:
    "From privacy and pool aluminum to commercial chain-link and automated gates—we specify, supply, and install systems Floridians actually need.",
  servicesClose:
    "Installations use wholesale-grade materials and methods engineered for Florida weather: high winds, shifting soil, humidity, and heavy rain.",

  /** Areas */
  areasHeading: "Areas We Serve",
  areasLead:
    "Based in St. Petersburg, we proudly serve homeowners and businesses from Tampa Bay to Jacksonville:",
  areasNearMe:
    "If you’re searching for “fence installation near me” or “fence company Tampa to Jacksonville,” our team is ready to help.",

  /** Why */
  whyHeading: "Why Choose FenceLine Florida",
  whyLead:
    "We focus on doing the job right the first time—no shortcuts, no weak installs.",

  /** CTA */
  ctaHeading: "Get a Fence Quote Today",
  ctaLead:
    "Looking for a reliable fence contractor in Florida? FenceLine Florida makes it easy to get started. Contact us today for a fast, transparent quote and expert guidance on the best fencing option for your property.",

  aeoSnippet:
    "FenceLine Florida is a professional fence company based in St. Petersburg, FL, serving from Tampa to Jacksonville. We install wood, vinyl, ornamental aluminum and steel, chain-link, gates, and access control with Florida-weather engineered installs and full permit/HOA handling. Materials from major wholesale lines including Master Halco products where available.",

  url: "https://fencelineflorida.com",
  phone: "(689) 600-2720",
  phoneHref: "tel:+16896002720",
  smsHref:
    "sms:+16896002720?&body=Hi%20FenceLine%20Florida%20%E2%80%94%20I%27d%20like%20a%20free%20fence%20quote.",
  email: "hello@fencelineflorida.com",
  emailHref: "mailto:hello@fencelineflorida.com",
  /** NAP — HQ + service corridor Tampa → Jacksonville */
  hasStreetAddress: true,
  address: {
    street: "7901 4th St N, Suite 300",
    city: "St. Petersburg",
    region: "FL",
    postalCode: "33702",
    country: "US",
  },
  addressLine: "7901 4th St N, Ste 300, St. Petersburg, FL 33702",
  addressServiceLine: "Serving Tampa Bay to Jacksonville",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=7901+4th+St+N+Suite+300+St+Petersburg+FL+33702",
  googleBusinessUrl:
    "https://www.google.com/maps/search/?api=1&query=FenceLine+Florida+7901+4th+St+N+St+Petersburg+FL",
  /** Approx. for 7901 4th St N, St. Petersburg FL 33702 */
  geo: { latitude: 27.8439, longitude: -82.6394 },
  area: "Tampa Bay to Jacksonville",
  serviceAreas: [
    "Tampa",
    "St. Petersburg",
    "Clearwater",
    "Brandon",
    "Lakeland",
    "Orlando",
    "Sanford",
    "Kissimmee",
    "Clermont",
    "Ocala",
    "Daytona Beach",
    "Gainesville",
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
  /** Sampled from official logo-dark.png wordmark */
  brandGreen: "#124137",
  brandInk: "#0F241F",
  brandSoft: "#F3F7F5",
  brandLine: "#C9D5CF",
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
    "aluminum pool fence Florida",
    "ornamental steel fence Florida",
    "chain link fence Florida",
    "gate operator installation Florida",
    "storm fence repair Florida",
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

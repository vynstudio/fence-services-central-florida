/** Single source of truth for brand + NAP + SEO. */
export const SITE = {
  name: "FenceLine Florida",
  shortName: "FenceLine",
  webName: "FenceLine Florida",
  domain: "fencelineflorida.com",
  legalName: "Diler Dynamics Group LLC",
  legalLine: "FenceLine Florida is a DBA of Diler Dynamics Group LLC.",
  tagline: "Straight lines. Strong fences.",
  marketLine: "Premium fence installation built for Florida weather",

  /** Title / meta (SERP) */
  seoHeading: "Premium Fence Installation Built for Florida Weather",
  description:
    "FenceLine Florida installs and repairs wood, vinyl, aluminum, and chain-link fences across Central and North Florida. Storm-ready installs, permits and HOA handled, residential and commercial.",

  /** Positioning */
  positioning:
    "FenceLine Florida is an owner-led, Florida-focused fence installation and repair company serving Central and North Florida, built on precision craftsmanship rather than volume installs. We specialize in wood, vinyl, aluminum, and chain-link fencing engineered specifically for Florida soil, wind, and storm conditions for both homes and businesses.",

  /** Hero */
  heroHeadline: "Premium Fence Installation Built for Florida Weather",
  heroSubheadline:
    "FenceLine Florida installs and repairs wood, vinyl, aluminum, and chain-link fences across Central and North Florida, with posts, footers, and layouts engineered for Florida soil and storm conditions.",
  heroBullets: [
    "Residential and commercial fence installation and repair",
    "Wood, vinyl, aluminum, and chain-link fences tailored to your property",
    "Posts and footers set for Florida wind, rain, and shifting soil",
    "Permits and HOA paperwork handled for you, start to finish",
  ],
  heroCta: "Get Your Custom Fence Quote",

  /** About (lower on page) */
  about:
    "FenceLine Florida is an owner-led, Florida-focused fence installation and repair company serving Central and North Florida, built on precision craftsmanship rather than volume installs.",
  aboutBody:
    "We specialize in wood, vinyl, aluminum, and chain-link fencing engineered specifically for Florida soil, wind, and storm conditions for both homes and businesses. As a DBA of Diler Dynamics Group LLC, we deliver reliable, code-compliant installs with clear communication and itemized quotes.",

  /** Services intro */
  servicesHeading: "Fence Installation & Repair Services in Florida",
  servicesLead:
    "FenceLine Florida provides full-service fence installation and repair for residential and commercial properties. Every project is scoped, measured, and laid out with attention to property lines, grade, and Florida-specific soil conditions, so your fence stays straight, secure, and within code.",
  servicesClose:
    "Each fence is installed with proper post depth, concrete footers, and hardware chosen for Florida’s humidity, wind, and UV exposure.",

  /** Florida conditions */
  floridaHeading: "Fences Engineered for Florida Soil & Storms",
  floridaLead:
    "Florida’s weather and soil can destroy weak fence installations—so FenceLine Florida installs every fence with storm-ready layouts, deeper posts, and materials suited to local conditions. We design around wind load, water drainage, and soil shift, helping your fence last longer and require fewer repairs over time.",

  /** Areas */
  areasHeading: "Fence Installation Near You in Central & North Florida",
  areasLead:
    "FenceLine Florida serves homeowners, property managers, and business owners across a broad Florida corridor.",
  areasNearMe:
    "If you’re searching for “fence installation near me” or “fence repair in Central Florida,” FenceLine Florida can schedule an on-site visit and provide a detailed, transparent quote.",

  /** Why us */
  whyHeading: "Why Homeowners Choose FenceLine Florida",
  whyLead:
    "Owner-led and craft-driven—projects overseen with care, not high-volume dispatch. Transparent line-item quotes, storm-engineered installs, and a responsive local team.",

  /** CTA */
  ctaHeading: "Ready to Install Your Fence?",
  ctaLead:
    "Get a custom fence quote for your Florida property today. Share your address, fence type, and approximate length, and we’ll provide a clear, storm-ready installation plan and pricing.",

  /** AEO one-liner for schema */
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
  geo: {
    latitude: 28.5383,
    longitude: -81.3792,
  },
  area: "Central & North Florida",
  serviceAreas: [
    "Jacksonville",
    "Orlando",
    "Sanford",
    "Kissimmee",
    "Clermont",
    "Lakeland",
    "Tampa",
    "Daytona Beach",
    "Melbourne",
    "Ocala",
    "Central Florida",
    "North Florida",
  ],
  serviceAreaGroups: [
    {
      title: "Jacksonville corridor",
      body: "Jacksonville and surrounding communities",
    },
    {
      title: "Orlando metro",
      body: "Orlando, Sanford, Kissimmee, and Clermont",
    },
    {
      title: "Tampa Bay & Lakeland",
      body: "Lakeland, Tampa, and nearby suburbs",
    },
    {
      title: "Space Coast",
      body: "Daytona Beach and the Space Coast including Melbourne",
    },
    {
      title: "Central Florida",
      body: "Ocala and Central Florida communities",
    },
  ],
  year: new Date().getFullYear(),
  ogImage: "/opengraph-image",
  logo: "/logo/logo-dark.svg",
  ogLogoPath: "/logo/og-logo.png",
  keywords: [
    "fence installation Central Florida",
    "fence installation North Florida",
    "fence repair Central Florida",
    "fence installation near me",
    "storm-ready fence Florida",
    "wood privacy fence Florida",
    "vinyl fence installation Florida",
    "aluminum fence Florida",
    "chain-link fence Florida",
    "fence permits HOA Florida",
    "fence company Orlando",
    "fence company Jacksonville",
    "fence company Tampa",
    "FenceLine Florida",
  ],
  colors: {
    black: "#111111",
    ink: "#111111",
    accent: "#1F6B4A",
    accentSoft: "#E8F2EC",
    gray: "#6B6B6B",
    line: "#E5E5E5",
    soft: "#F7F7F5",
    white: "#FFFFFF",
  },
};

export const HOME_TITLE =
  "Fence Installation & Repair in Central Florida | FenceLine Florida";

export const HOME_DESCRIPTION = SITE.description;

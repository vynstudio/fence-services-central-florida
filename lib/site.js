/** Single source of truth for brand + NAP + SEO. */
export const SITE = {
  /** Public brand (DBA) */
  name: "Meridian Fence Group",
  shortName: "Meridian Fence",
  /** Web / domain brand used in titles & search */
  webName: "FenceLine Florida",
  domain: "fencelineflorida.com",
  /** Registered legal entity */
  legalName: "Diler Dynamics Group LLC",
  /** One-line legal disclosure for footers & contracts */
  legalLine:
    "Meridian Fence Group (FenceLine Florida) is a DBA of Diler Dynamics Group LLC.",
  /** Brand promise */
  tagline: "Straight lines. Strong fences.",
  /** Market / area line */
  marketLine: "Strong fences from Jacksonville to Tampa",
  /** Primary meta description (~155 chars) */
  description:
    "Fence installation and repair across Central Florida—Jacksonville to Tampa. Wood, vinyl, aluminum & chain link. Free quotes. Meridian Fence Group at fencelineflorida.com.",
  /** Longer AEO / about blurb */
  about:
    "FenceLine Florida is the online home of Meridian Fence Group, a DBA of Diler Dynamics Group LLC. We install and repair wood, vinyl, aluminum, and chain-link fences for homes and businesses from Jacksonville to Tampa, including Orlando, Sanford, Kissimmee, Clermont, Lakeland, Daytona Beach, Melbourne, and Ocala. Posts are set for Florida soil and storm conditions; permits and HOA documentation are handled as part of the job.",
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
  area: "Jacksonville to Tampa · Central Florida",
  serviceAreas: [
    "Jacksonville",
    "Orlando",
    "Tampa",
    "Sanford",
    "Kissimmee",
    "Clermont",
    "Lakeland",
    "Daytona Beach",
    "Melbourne",
    "Ocala",
    "Central Florida",
  ],
  year: new Date().getFullYear(),
  /** Primary OG / social image (absolute path under public) */
  ogImage: "/images/home-hero-header-section.jpg",
  logo: "/logo/logo-dark.svg",
  /** Core keywords for meta + schema */
  keywords: [
    "fence installation Central Florida",
    "fence repair Florida",
    "fence company Orlando",
    "fence company Jacksonville",
    "fence company Tampa",
    "wood fence installation",
    "vinyl fence installation",
    "aluminum fence",
    "chain link fence",
    "HOA fence permit",
    "storm fence repair Florida",
    "FenceLine Florida",
    "Meridian Fence Group",
    "fencelineflorida.com",
  ],
  /** Clean monochrome + forest green accent */
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
  "Fence Installation & Repair Central Florida | FenceLine Florida";

export const HOME_DESCRIPTION = SITE.description;

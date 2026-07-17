import { SITE } from "@/lib/site";

/** AEO FAQ snippets — visible on page + FAQPage schema */
export const HOME_FAQS = [
  {
    q: "What types of fences do you install?",
    a: "We install wood, vinyl, aluminum, and chain-link fences for residential and commercial properties across Central Florida.",
  },
  {
    q: "Do you handle permits and HOA approval?",
    a: "Yes, FenceLine Florida manages all permitting and HOA documentation as part of our full-service process.",
  },
  {
    q: "Do your fences withstand Florida weather?",
    a: "Yes, all fences are installed with techniques designed for Florida soil, wind loads, and storm conditions.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Orlando, Lakeland, Tampa, Jacksonville, and surrounding cities throughout Central and North Florida.",
  },
];

export const FULL_SERVICES = [
  {
    title: "New fence installation",
    body: "Wood, vinyl, aluminum, and chain-link—built for Florida conditions.",
  },
  {
    title: "Fence repair and replacement",
    body: "Fix failed posts, panels, and gates, or replace worn fence lines cleanly.",
  },
  {
    title: "Gate installation and upgrades",
    body: "New gates and upgrades that match your fence system and property use.",
  },
  {
    title: "Storm damage fence restoration",
    body: "Fast, durable restoration after high winds and storm impact.",
  },
  {
    title: "Permit processing and HOA approvals",
    body: "We manage paperwork so your project stays code-compliant and approved.",
  },
];

export const MATERIAL_SERVICES = [
  {
    title: "Wood fence",
    body: "Privacy and curb appeal with posts set for Florida soil and storms.",
    name: "wood",
    image: "/images/home-gallery-section-0.jpg",
  },
  {
    title: "Vinyl fence",
    body: "Low-maintenance privacy that holds color in Florida sun and humidity.",
    name: "vinyl",
    image: "/images/home-gallery-section-1.jpg",
  },
  {
    title: "Aluminum fence",
    body: "Ornamental and pool-ready aluminum with clean lines and lasting finish.",
    name: "aluminum",
    image: "/images/home-gallery-section-3.jpg",
  },
  {
    title: "Chain link",
    body: "Durable security for homes, pets, and commercial lots.",
    name: "chain",
    image: "/images/home-gallery-section-2.jpg",
  },
];

export const WHY_POINTS = [
  {
    title: "Built for Florida conditions",
    body: "Deep-set posts, proper spacing, and durable materials engineered for Florida soil and storms.",
  },
  {
    title: "Fast turnaround & clear communication",
    body: "Clear quotes, reliable scheduling, and updates so you always know what’s next.",
  },
  {
    title: "Fully managed permits & HOA",
    body: "We handle permitting and HOA documentation as part of our full-service process.",
  },
  {
    title: "Clean, professional installs",
    body: "Long-term value with precision workmanship—no shortcuts, no weak installs.",
  },
];

export const HOME_STEPS = [
  {
    name: "Request a quote",
    text: "Tell us repair or install, material, and project location.",
  },
  {
    name: "We confirm details",
    text: "Measure, review codes and HOA rules, and send a clear price.",
  },
  {
    name: "We build or repair",
    text: "Crew on site with materials ready for Florida conditions.",
  },
  {
    name: "Final inspection",
    text: "You walk the line with us—clean, professional, built to last.",
  },
];

function abs(path) {
  if (!path) return SITE.url;
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getHomeJsonLd() {
  const logoUrl = abs(SITE.logo);
  const imageUrl = abs(SITE.ogImage);

  const organization = {
    "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: [SITE.shortName, "Fence Line Florida", SITE.domain],
    legalName: SITE.legalName,
    description: SITE.aeoSnippet,
    url: SITE.url,
    logo: logoUrl,
    image: imageUrl,
    telephone: SITE.phone,
    email: SITE.email,
    slogan: SITE.tagline,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: SITE.serviceAreas.map((name) => ({
      "@type": "City",
      name,
    })),
    knowsAbout: [
      "Fence installation Central Florida",
      "Fence repair Central Florida",
      "Wood fence",
      "Vinyl fence",
      "Aluminum fence",
      "Chain link fence",
      "HOA fence approval",
      "Fence permits Florida",
    ],
    sameAs: [SITE.url],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "sales",
        areaServed: "US-FL",
        availableLanguage: ["English"],
      },
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.webName,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-US",
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${SITE.url}/#webpage`,
    url: SITE.url,
    name: SITE.seoHeading,
    description: SITE.description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    primaryImageOfPage: imageUrl,
    inLanguage: "en-US",
  };

  const services = FULL_SERVICES.map((s, i) => ({
    "@type": "Service",
    "@id": `${SITE.url}/#service-${i}`,
    name: s.title,
    description: s.body,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: ["Central Florida", "North Florida"],
    url: SITE.url,
  }));

  const howTo = {
    "@type": "HowTo",
    "@id": `${SITE.url}/#howto-quote`,
    name: "How to get a fence installed or repaired with FenceLine Florida",
    description:
      "Four-step process from free quote to finished fence line in Central Florida.",
    step: HOME_STEPS.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    mainEntity: HOME_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, webpage, ...services, howTo, faqPage],
  };
}

export function absoluteUrl(path = "/") {
  return abs(path);
}

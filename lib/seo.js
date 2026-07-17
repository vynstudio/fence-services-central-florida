import { SITE } from "@/lib/site";

/** Quick Answers — AEO block near top + FAQPage schema */
export const HOME_FAQS = [
  {
    q: "What does FenceLine Florida do?",
    a: "FenceLine Florida installs and repairs wood, vinyl, aluminum, and chain-link fences for homes and businesses across Central and North Florida, with installations designed for Florida soil and storm conditions.",
  },
  {
    q: "Do you handle permits and HOA approvals?",
    a: "Yes. FenceLine Florida manages city permits and HOA documentation as part of every fence project, so your installation stays code-compliant and approved.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Jacksonville, Tampa, Orlando, Sanford, Kissimmee, Clermont, Lakeland, Daytona Beach, Melbourne, Ocala, and surrounding Central and North Florida communities.",
  },
  {
    q: "What types of fences do you install?",
    a: "We install wood privacy fences, vinyl fences, aluminum fences, and chain-link fences, with options for gates, pool fencing, and commercial security fencing.",
  },
];

export const CORE_SERVICES = [
  {
    title: "Wood privacy fence installation and repair",
    body: "Privacy and curb appeal with layouts measured to property lines and grade.",
    image: "/images/home-gallery-section-0.jpg",
  },
  {
    title: "Vinyl fence installation",
    body: "Low-maintenance privacy and pool-area fencing that holds up in Florida sun.",
    image: "/images/home-gallery-section-1.jpg",
  },
  {
    title: "Aluminum fence installation",
    body: "Decorative and front-yard aluminum with clean lines and lasting finish.",
    image: "/images/home-gallery-section-3.jpg",
  },
  {
    title: "Chain-link fence installation",
    body: "Pets, play areas, and commercial security—strong and practical.",
    image: "/images/home-gallery-section-2.jpg",
  },
  {
    title: "Fence and gate repair & storm restoration",
    body: "Replacement, repair, and storm damage restoration with clear scope.",
    image: "/images/home-gallery-section-4.jpg",
  },
];

export const FLORIDA_STANDARDS = [
  "Deep-set posts with appropriate concrete footers for Florida soil types",
  "Hardware and fasteners chosen for rust resistance and durability",
  "Layouts designed to reduce wind pressure and panel failure",
  "Attention to grade, drainage, and property boundaries on every job",
];

export const WHY_POINTS = [
  {
    title: "Engineered for Florida soil, storms, and wind",
    body: "Storm-ready layouts, deeper posts, and materials suited to local conditions—not generic “durable” installs.",
  },
  {
    title: "Owner-led, craft-driven team",
    body: "Direct communication with a local, owner-led team—not just crews dispatched from a volume shop.",
  },
  {
    title: "Clean sites & respectful crews",
    body: "Professional work sites, careful property handling, and finishes you’d expect from precision craftsmanship.",
  },
  {
    title: "Transparent pricing & real timelines",
    body: "Itemized quotes, clear scope, and realistic schedules—no surprise add-ons or vague “best price” talk.",
  },
];

export const HOME_STEPS = [
  {
    name: "On-site assessment",
    text: "We visit your property, measure the layout, review access, and listen to your goals for privacy, security, or aesthetics.",
  },
  {
    name: "Detailed fence quote",
    text: "You receive a clear, itemized quote including materials, labor, permits, and any removal work—no surprise add-ons.",
  },
  {
    name: "Permits & HOA approvals",
    text: "We handle city permits and HOA documentation, coordinating approvals before installation begins.",
  },
  {
    name: "Professional installation",
    text: "Our crew installs your fence with proper post depth, alignment, and finishing, keeping the site neat throughout the job.",
  },
  {
    name: "Final walkthrough",
    text: "We walk the fence line with you, answer questions, and confirm that everything matches the approved layout and quote.",
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
      "Premium fence installation Florida",
      "Storm-ready fence installation",
      "Wood privacy fence",
      "Vinyl fence",
      "Aluminum fence",
      "Chain-link fence",
      "Fence permits Florida",
      "HOA fence approval",
      "Fence repair Central Florida",
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

  const services = CORE_SERVICES.map((s, i) => ({
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
    name: "How FenceLine Florida’s fence process works",
    description:
      "Five-step process from on-site assessment to final walkthrough for Florida fence installation.",
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

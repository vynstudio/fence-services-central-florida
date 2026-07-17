import { SITE } from "@/lib/site";

/** Shared FAQ content — visible on page + FAQPage schema (AEO extractable). */
export const HOME_FAQS = [
  {
    q: "Do I need a permit for a new fence in Central Florida?",
    a: "Most cities and counties in Central Florida require a permit for new fence installation and many major repairs. FenceLine Florida (Meridian Fence Group) pulls permits as part of the job so homeowners and commercial clients stay compliant.",
  },
  {
    q: "Can you work with my HOA on fence materials and height?",
    a: "Yes. We prepare specs, materials, and heights for HOA review and submit documentation so the board and your property both get an approved fence line.",
  },
  {
    q: "Will a new fence hold up in Florida storms?",
    a: "We set posts deep for Florida soil and wind conditions and choose materials and hardware suited to sun, rain, humidity, and coastal air where needed. Storm-ready install is standard practice, not an upgrade.",
  },
  {
    q: "How long does residential fence installation take?",
    a: "Most residential fence installs finish in one to three days after materials are on site. Larger commercial projects receive a written schedule before work begins.",
  },
  {
    q: "Do you only repair fences, or install new ones too?",
    a: "We do both. Full installs and targeted repairs (posts, panels, gates) when a full replacement is not required—wood, vinyl, aluminum, and chain link across Central Florida.",
  },
  {
    q: "What areas does FenceLine Florida serve?",
    a: "We serve the Jacksonville-to-Tampa corridor, including Orlando, Sanford, Kissimmee, Clermont, Lakeland, Daytona Beach, Melbourne, Ocala, and surrounding Central Florida communities.",
  },
  {
    q: "What fence materials do you install?",
    a: "Wood (cedar and pressure-treated), vinyl privacy, aluminum ornamental and pool fencing, and chain-link for residential and commercial properties.",
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
    name: "Walkthrough",
    text: "You inspect the finished line. We leave the site clean and true.",
  },
];

function abs(path) {
  if (!path) return SITE.url;
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Full JSON-LD graph for homepage SEO + AEO. */
export function getHomeJsonLd() {
  const logoUrl = abs(SITE.logo);
  const imageUrl = abs(SITE.ogImage);

  const organization = {
    "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: [SITE.webName, SITE.shortName, "Fence Line Florida"],
    legalName: SITE.legalName,
    description: SITE.about,
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
      "Fence installation",
      "Fence repair",
      "Wood fence",
      "Vinyl fence",
      "Aluminum fence",
      "Chain link fence",
      "HOA fence compliance",
      "Florida storm-resistant fencing",
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
    alternateName: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-US",
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${SITE.url}/#webpage`,
    url: SITE.url,
    name: "Fence Installation & Repair Central Florida | FenceLine Florida",
    description: SITE.description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    primaryImageOfPage: imageUrl,
    inLanguage: "en-US",
  };

  const services = [
    {
      "@type": "Service",
      "@id": `${SITE.url}/#service-install`,
      name: "Fence installation",
      serviceType: "Fence installation",
      description:
        "New wood, vinyl, aluminum, and chain-link fence installation for residential and commercial properties in Central Florida.",
      provider: { "@id": `${SITE.url}/#organization` },
      areaServed: "Central Florida",
      url: SITE.url,
    },
    {
      "@type": "Service",
      "@id": `${SITE.url}/#service-repair`,
      name: "Fence repair",
      serviceType: "Fence repair",
      description:
        "Storm damage, failed posts, panels, and gate repair for existing fence lines across the Jacksonville to Tampa corridor.",
      provider: { "@id": `${SITE.url}/#organization` },
      areaServed: "Central Florida",
      url: SITE.url,
    },
  ];

  const howTo = {
    "@type": "HowTo",
    "@id": `${SITE.url}/#howto-quote`,
    name: "How to get a fence installed or repaired with FenceLine Florida",
    description:
      "Four-step process from free quote to finished fence line in Central Florida.",
    totalTime: "P3D",
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
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
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

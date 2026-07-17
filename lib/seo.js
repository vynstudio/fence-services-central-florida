import { SITE } from "@/lib/site";

/** Shared FAQ content — visible on page + FAQPage schema (AEO extractable). */
export const HOME_FAQS = [
  {
    q: "Do I need a permit for a new fence in Central Florida?",
    a: "Most cities and counties require a permit for new fence installation and many major repairs. FenceLine Florida manages permitting as part of our full-service install and repair experience.",
  },
  {
    q: "Can you work with my HOA on fence materials and height?",
    a: "Yes. We manage HOA documentation as part of a seamless process—preparing specs, materials, and heights so the board and your property both get an approved fence line.",
  },
  {
    q: "Will a new fence hold up in Florida storms?",
    a: "All installations are engineered for Florida’s soil and storm conditions, with properly set posts to ensure durability and longevity. Materials and hardware are chosen for sun, rain, humidity, and coastal air where needed.",
  },
  {
    q: "How long does residential fence installation take?",
    a: "Most residential fence installs finish in one to three days after materials are on site. Larger commercial projects receive a written schedule before work begins.",
  },
  {
    q: "Do you only repair fences, or install new ones too?",
    a: "We provide professional fence installation and repair for residential and commercial properties—wood, vinyl, aluminum, and chain-link—across Central and North Florida.",
  },
  {
    q: "What areas does FenceLine Florida serve?",
    a: "We serve Central and North Florida from Jacksonville to Tampa, including Orlando, Sanford, Kissimmee, Clermont, Lakeland, Daytona Beach, Melbourne, and Ocala.",
  },
  {
    q: "What fence materials do you install?",
    a: "We specialize in wood, vinyl, aluminum, and chain-link fencing for both residential and commercial properties.",
  },
  {
    q: "Who is FenceLine Florida?",
    a: "FenceLine Florida is a DBA of Diler Dynamics Group LLC, providing professional fence installation and repair services across Central and North Florida.",
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
    alternateName: [SITE.shortName, "Fence Line Florida", SITE.domain],
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
        "Professional wood, vinyl, aluminum, and chain-link fence installation for residential and commercial properties across Central and North Florida.",
      provider: { "@id": `${SITE.url}/#organization` },
      areaServed: ["Central Florida", "North Florida"],
      url: SITE.url,
    },
    {
      "@type": "Service",
      "@id": `${SITE.url}/#service-repair`,
      name: "Fence repair",
      serviceType: "Fence repair",
      description:
        "Professional fence repair—storm damage, failed posts, panels, and gates—across Central and North Florida from Jacksonville to Tampa.",
      provider: { "@id": `${SITE.url}/#organization` },
      areaServed: ["Central Florida", "North Florida"],
      url: SITE.url,
    },
  ];

  const howTo = {
    "@type": "HowTo",
    "@id": `${SITE.url}/#howto-quote`,
    name: "How to get a fence installed or repaired with FenceLine Florida",
    description:
      "Four-step process from free quote to finished fence line across Central and North Florida.",
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

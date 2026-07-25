import { pageEntityGraph } from "@/lib/seo-entity";
import { EXTRA_RESOURCE_PAGES } from "@/lib/resources/extra";

/**
 * Fence permits & HOA approval content cluster + extra AEO guides.
 * Educational only — not legal advice. Confirm with city/HOA.
 * Vinyl + chain-link only; Jacksonville, Orlando, Kissimmee.
 * Extra guides: lib/resources/entries/* via extra.js
 */
const BASE_RESOURCE_PAGES = [
  {
    slug: "fence-permits-hoa-florida",
    title:
      "Fence Permits & HOA Approval in Florida | Jacksonville, Orlando, Kissimmee",
    description:
      "How fence permits and HOA approval work for vinyl and chain-link installs in Jacksonville, Orlando, and Kissimmee. FenceLine Florida helps with documentation.",
    h1: "Fence permits and HOA approval in Florida",
    eyebrow: "Resources · Permits & HOA",
    intro:
      "Fence permits and HOA approval are separate steps. City or county building rules decide when a permit is required for vinyl or chain-link fencing; your HOA may still require design approval even when the city does not. FenceLine Florida helps homeowners and businesses in Jacksonville, Orlando, and Kissimmee with permit and HOA documentation for residential and commercial vinyl and chain-link installs—always confirm final requirements with your city and association.",
    body: [
      {
        h2: "Permit vs HOA: two different tracks",
        paragraphs: [
          "A building permit is issued by a city or county and relates to life safety, zoning setbacks, easements, flood zones, and construction standards. HOA (or condo/community) approval is a private design and use rule—height, style, color, setbacks from sidewalks, and materials—enforced by your association, not the building department.",
          "You may need a permit without an HOA, an HOA stamp without a city permit, both, or neither. Skipping either path can delay your install, force redesign, or create compliance issues after the fence is up.",
        ],
      },
      {
        h2: "Common reasons a fence permit is required",
        paragraphs: [
          "Exact triggers vary by jurisdiction. In many Florida cities, including Orlando, common permit or plan-review triggers for fences include height (often over about 6 feet), commercial property work, pool barriers, easements, corner lots with sight-triangle rules, powered or automated gates, and work in a floodplain. Jacksonville, Kissimmee, and county unincorporated areas each publish their own thresholds.",
          "This page is educational, not legal advice. Always verify current rules with the city or county building department before you order materials or set posts.",
        ],
        list: [
          "Fence height above local residential limits (often around 6 feet—confirm locally)",
          "Commercial or multi-unit properties",
          "Pool and spa barrier / safety enclosure requirements",
          "Work in easements, rights-of-way, or over utilities",
          "Corner lots and visibility triangles at intersections",
          "Powered gates, operators, and electrical work",
          "Floodplain or special hazard area restrictions",
        ],
      },
      {
        h2: "How HOA fence approval usually works",
        paragraphs: [
          "Most associations require an architectural review (ARC) application before install. You typically submit a site sketch, material and color samples (for vinyl: color and style; for chain link: mesh, gauge, and coating), height, gate locations, and setbacks from property lines or sidewalks.",
          "Approval can take days to several weeks. Install before you have written approval at your own risk—many HOAs can require removal or redesign. FenceLine Florida can prepare clear drawings and product specs so your packet is complete the first time.",
        ],
      },
      {
        h2: "Vinyl and chain-link: what reviewers care about",
        paragraphs: [
          "Vinyl privacy and semi-privacy systems are popular in Florida HOAs for low maintenance and a clean look. Reviewers often care about height, color (white, tan, gray), style (full privacy vs picket), and gate hardware that matches the run.",
          "Chain-link is common for residential yards, pets, and commercial security. HOAs may limit mesh height, require vinyl-coated or color-coated mesh, restrict barbed wire, or ban chain link in front yards. Commercial lots more often allow galvanized or coated chain-link for perimeters and security.",
        ],
      },
      {
        h2: "City snapshots: Jacksonville, Orlando, Kissimmee",
        paragraphs: [
          "Orlando publishes fence permit guidance through its Building & Development portal. Common review themes include height, commercial work, pool barriers, easements, corner lots, powered gates, and floodplain. Official start point: City of Orlando fence permit information.",
          "Jacksonville (Duval County / City of Jacksonville) and Kissimmee (Osceola County) each maintain their own permit portals and height/setback rules. Unincorporated county parcels may use a different office than city limits. Confirm parcel jurisdiction before you apply.",
          "FenceLine Florida focuses vinyl and chain-link installation—and permit/HOA documentation help—on Jacksonville, Orlando, and Kissimmee for residential and commercial customers.",
        ],
      },
      {
        h2: "How FenceLine Florida helps",
        paragraphs: [
          "We install residential and commercial vinyl and chain-link fencing in Jacksonville, Orlando, and Kissimmee. When your project needs a permit packet or HOA submittal, we help assemble documentation—site layout, product specs, and install notes—so reviews move faster.",
          "We do not replace your attorney, surveyor, or the building official. Final approval always rests with the city, county, and your HOA. We build to the approved plan once requirements are clear.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I always need a fence permit in Florida?",
        a: "No. Many residential vinyl and chain-link projects under local height limits may not need a city permit—but commercial work, pool barriers, taller fences, easements, corner lots, powered gates, and floodplain sites often do. Rules differ by city and county. Confirm with your building department; this is not legal advice.",
      },
      {
        q: "Does HOA approval replace a city fence permit?",
        a: "No. HOA approval and a building permit are separate. You may need one, both, or neither. Get written HOA approval when required, and apply for any city or county permit your parcel triggers.",
      },
      {
        q: "Can FenceLine Florida handle permit and HOA paperwork?",
        a: "Yes. FenceLine Florida helps with permits and HOA documentation for vinyl and chain-link installs in Jacksonville, Orlando, and Kissimmee. We prepare drawings and product details for review; the city and HOA still issue final approvals.",
      },
      {
        q: "What fence materials do you install under permit or HOA rules?",
        a: "We specialize in residential and commercial vinyl and chain-link only—privacy vinyl systems and galvanized or color-coated chain-link for homes and businesses.",
      },
      {
        q: "Where can I apply for a fence permit in Orlando?",
        a: "Start with the City of Orlando Building & Development fence permit page (orlando.gov). Requirements change; always use the official portal and confirm whether your address is inside city limits or unincorporated Orange County.",
      },
    ],
    relatedLinks: [
      {
        href: "/resources/fence-permit-orlando",
        label: "Fence permits in Orlando",
      },
      {
        href: "/resources/fence-permit-jacksonville",
        label: "Fence permits in Jacksonville",
      },
      {
        href: "/resources/fence-permit-kissimmee",
        label: "Fence permits in Kissimmee",
      },
      {
        href: "/resources/hoa-fence-approval-checklist",
        label: "HOA fence approval checklist",
      },
      { href: "/services/vinyl-fence", label: "Vinyl fence installation" },
      {
        href: "/services/chain-link-fence",
        label: "Chain-link fence installation",
      },
    ],
    cta: "Planning a vinyl or chain-link fence in Jacksonville, Orlando, or Kissimmee? Get a free quote and ask about permit and HOA documentation help.",
    externalLinks: [
      {
        href: "https://www.orlando.gov/Building-Development/Permits-Inspections/Other/Apply-for-a-Fence-Permit",
        label: "City of Orlando — Apply for a Fence Permit",
      },
    ],
  },
  {
    slug: "fence-permit-orlando",
    title:
      "Fence Permit Orlando, FL | Vinyl & Chain Link | FenceLine Florida",
    description:
      "When you need a fence permit in Orlando for vinyl or chain-link. Height, commercial, pool barriers, HOA tips. FenceLine Florida helps with documentation.",
    h1: "Fence permits in Orlando, Florida",
    eyebrow: "Resources · Orlando permits",
    intro:
      "In Orlando, whether you need a fence permit depends on height, property type, pool barriers, easements, corner-lot visibility, powered gates, floodplain location, and other local triggers—not only on material. HOA communities may still require design approval even when a city permit is not required. FenceLine Florida installs residential and commercial vinyl and chain-link in Orlando and helps with permit and HOA documentation. Confirm all requirements with the City of Orlando or Orange County; this is not legal advice.",
    body: [
      {
        h2: "Common Orlando fence permit triggers",
        paragraphs: [
          "Local rules evolve. As a practical guide—not a substitute for the official code—fence projects in the Orlando area often draw plan review when one or more of these apply: fence height over typical residential limits (commonly discussed around 6 feet—verify current code), commercial property work, pool or spa barrier fencing, work affecting easements or rights-of-way, corner lots with sight-triangle restrictions, powered or automated gates, and sites in a floodplain or special flood hazard area.",
          "Always check the City of Orlando Building & Development resources for current application steps and whether your address falls under city limits or unincorporated Orange County.",
        ],
        list: [
          "Height above local residential maximums (often ~6 ft—confirm)",
          "Commercial and multi-unit properties",
          "Pool and spa barrier requirements",
          "Easements, utilities, and right-of-way conflicts",
          "Corner lots and visibility triangles",
          "Powered gates and electrical components",
          "Floodplain / special hazard area rules",
        ],
      },
      {
        h2: "Official Orlando source",
        paragraphs: [
          "Use the City of Orlando’s fence permit page as your primary source for applications, fees, and required documents:",
        ],
        list: [
          "Apply for a Fence Permit — orlando.gov Building & Development (linked below)",
        ],
      },
      {
        h2: "HOA communities in Orlando",
        paragraphs: [
          "Many Orlando and Orange County neighborhoods are HOA-governed. Associations often regulate fence height, color, style, and front-yard placement for vinyl privacy systems, and may restrict or condition chain-link use. Submit your ARC packet early—approval timelines can outlast material lead times.",
          "FenceLine Florida can supply product specs and a clear layout for vinyl or chain-link so your HOA package is complete, while you or we coordinate any required city permit.",
        ],
      },
      {
        h2: "Residential and commercial vinyl & chain-link",
        paragraphs: [
          "Homeowners often choose vinyl for low-maintenance privacy that fits HOA design standards. Chain-link remains a practical option for pets, side yards, and cost-effective security. Commercial properties use both materials for screening and perimeter security around lots, facilities, and multi-unit sites.",
          "We build for Florida soil, sun, and storms once the approved plan is set—straight posts, proper footings, and gates that match the run.",
        ],
      },
      {
        h2: "How FenceLine Florida helps in Orlando",
        paragraphs: [
          "FenceLine Florida is a vinyl and chain-link installation company serving Orlando. We help with permit and HOA documentation for residential and commercial projects so reviews are based on accurate drawings and product data. Final decisions rest with the city, county, and your association.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a fence permit in Orlando for a 6-foot vinyl fence?",
        a: "It depends on your exact address, height measurement method, setbacks, and other site factors. Height near or above common residential limits, pool barriers, commercial use, easements, corner lots, powered gates, and floodplain status can all trigger review. Confirm with the City of Orlando or Orange County before install—this is not legal advice.",
      },
      {
        q: "Where do I apply for an Orlando fence permit?",
        a: "Start with the City of Orlando Building & Development fence permit page: Apply for a Fence Permit on orlando.gov. Verify city vs. county jurisdiction for your parcel.",
      },
      {
        q: "If my HOA approves my fence, do I still need a city permit?",
        a: "Possibly. HOA approval does not replace a building permit when the city requires one. Treat them as separate tracks.",
      },
      {
        q: "Can FenceLine Florida help with Orlando permit paperwork?",
        a: "Yes. We help assemble documentation for vinyl and chain-link installs in Orlando—layouts, heights, and product specs—while the city issues any required permit.",
      },
    ],
    relatedLinks: [
      {
        href: "/resources/fence-permits-hoa-florida",
        label: "Fence permits & HOA hub (Florida)",
      },
      {
        href: "/resources/hoa-fence-approval-checklist",
        label: "HOA fence approval checklist",
      },
      { href: "/areas/orlando", label: "Fence installation in Orlando" },
      { href: "/services/vinyl-fence", label: "Vinyl fence installation" },
      {
        href: "/services/chain-link-fence",
        label: "Chain-link fence installation",
      },
    ],
    cta: "Need a vinyl or chain-link fence in Orlando with permit or HOA help? Request a free FenceLine Florida quote.",
    externalLinks: [
      {
        href: "https://www.orlando.gov/Building-Development/Permits-Inspections/Other/Apply-for-a-Fence-Permit",
        label: "City of Orlando — Apply for a Fence Permit",
      },
    ],
  },
  {
    slug: "fence-permit-jacksonville",
    title:
      "Fence Permit Jacksonville, FL | Vinyl & Chain Link | FenceLine Florida",
    description:
      "Fence permit basics for Jacksonville vinyl and chain-link projects. City vs HOA, common triggers, and how FenceLine Florida helps with documentation.",
    h1: "Fence permits in Jacksonville, Florida",
    eyebrow: "Resources · Jacksonville permits",
    intro:
      "Jacksonville fence permits are governed by City of Jacksonville / Duval County building and zoning rules, which can differ from HOA design rules. Height, commercial use, pool barriers, easements, corner lots, powered gates, and floodplain or waterfront conditions may require permits or extra review. FenceLine Florida installs residential and commercial vinyl and chain-link across the Jacksonville metro and helps with permit and HOA documentation. Always confirm current requirements with the city—this is not legal advice.",
    body: [
      {
        h2: "City rules vs HOA rules in Jacksonville",
        paragraphs: [
          "Building permits address public code: structure, setbacks, flood zones, and safety-related barriers. HOAs and community associations regulate appearance and placement for homeowners. Completing one process does not automatically satisfy the other.",
          "If you live in an HOA community near Mandarin, Orange Park, Fleming Island, or similar areas, start both tracks early so install scheduling is not blocked by a late ARC decision.",
        ],
      },
      {
        h2: "When Jacksonville projects often need review",
        paragraphs: [
          "Exact thresholds are set by the city and can change. In practice, many North Florida fence projects draw extra attention for taller fences, commercial perimeters, pool barrier compliance, work near easements or rights-of-way, corner visibility triangles, powered gate equipment, and flood-prone parcels. Verify against current City of Jacksonville permit guidance for your parcel.",
        ],
        list: [
          "Residential height limits and rear/side yard rules",
          "Commercial chain-link and vinyl perimeters",
          "Pool barrier and safety enclosure compliance",
          "Easements, utilities, and drainage corridors",
          "Corner lots and sight lines",
          "Powered gates and electrical permits when required",
          "Flood zones and coastal-influenced restrictions",
        ],
      },
      {
        h2: "Vinyl and chain-link for Jacksonville properties",
        paragraphs: [
          "Vinyl privacy fencing is a strong residential choice for low maintenance in Florida sun and humidity. Chain-link remains a workhorse for yards, pets, and commercial security around lots and facilities. Material choice may still need HOA color/style approval even when a city permit is straightforward.",
        ],
      },
      {
        h2: "How FenceLine Florida helps in Jacksonville",
        paragraphs: [
          "FenceLine Florida focuses on vinyl and chain-link installation for homes and businesses in Jacksonville and nearby communities. We help prepare permit and HOA documentation—layout, heights, materials—so reviewers see a clear, complete package. Approvals are issued by the city and your association, not by the installer.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do residential fences in Jacksonville always need a permit?",
        a: "Not always. Many standard-height residential vinyl or chain-link installs may not need a permit, while taller fences, pool barriers, commercial work, easements, corner lots, powered gates, and floodplain sites often do. Confirm with the City of Jacksonville for your address—this is not legal advice.",
      },
      {
        q: "Does my Jacksonville HOA approval replace a building permit?",
        a: "No. Treat HOA design approval and city permits as separate requirements. You may need both.",
      },
      {
        q: "Can FenceLine Florida help with Jacksonville fence permit paperwork?",
        a: "Yes. We help with documentation for residential and commercial vinyl and chain-link projects in Jacksonville while the city remains the permitting authority.",
      },
      {
        q: "What areas near Jacksonville do you serve?",
        a: "We serve Jacksonville and nearby communities such as Orange Park, Fleming Island, Mandarin, Ponte Vedra, and St. Augustine for vinyl and chain-link installs, subject to scheduling and project fit.",
      },
    ],
    relatedLinks: [
      {
        href: "/resources/fence-permits-hoa-florida",
        label: "Fence permits & HOA hub (Florida)",
      },
      {
        href: "/resources/hoa-fence-approval-checklist",
        label: "HOA fence approval checklist",
      },
      {
        href: "/areas/jacksonville",
        label: "Fence installation in Jacksonville",
      },
      { href: "/services/vinyl-fence", label: "Vinyl fence installation" },
      {
        href: "/services/chain-link-fence",
        label: "Chain-link fence installation",
      },
    ],
    cta: "Planning vinyl or chain-link fencing in Jacksonville? Get a free quote and ask about permit and HOA documentation support.",
    externalLinks: [],
  },
  {
    slug: "fence-permit-kissimmee",
    title:
      "Fence Permit Kissimmee, FL | Vinyl & Chain Link | FenceLine Florida",
    description:
      "Fence permit and HOA basics for Kissimmee and Osceola County vinyl and chain-link projects. FenceLine Florida helps with documentation.",
    h1: "Fence permits in Kissimmee, Florida",
    eyebrow: "Resources · Kissimmee permits",
    intro:
      "Kissimmee and Osceola County fence rules can differ by city limits versus unincorporated parcels. Height, commercial work, pool barriers, easements, corner lots, powered gates, and floodplain conditions may require permits or plan review. HOAs around Kissimmee, Celebration, Poinciana, and nearby communities often add design restrictions. FenceLine Florida installs residential and commercial vinyl and chain-link in Kissimmee and helps with permit and HOA documentation. Confirm requirements with the city or county—this is not legal advice.",
    body: [
      {
        h2: "City of Kissimmee vs Osceola County",
        paragraphs: [
          "Your property’s jurisdiction matters. Parcels inside Kissimmee city limits typically work with the City of Kissimmee building department; unincorporated Osceola County properties use county permitting. Confirm jurisdiction with your tax parcel or the local permit desk before you apply.",
          "HOA rules (if any) sit on top of public code and still apply when the association requires architectural approval.",
        ],
      },
      {
        h2: "Common permit and review triggers",
        paragraphs: [
          "As with other Central Florida cities, projects often need closer review for taller fences, commercial perimeters, pool and spa barriers, easements, corner visibility, powered gates, and floodplain locations. Thresholds change—always verify current city or county guidance for your address.",
        ],
        list: [
          "Height and setback limits by zoning",
          "Commercial and multi-unit sites",
          "Pool barrier compliance",
          "Easements and utility corridors",
          "Corner lots and sight triangles",
          "Powered gate equipment",
          "Floodplain and drainage considerations",
        ],
      },
      {
        h2: "HOA communities near Kissimmee",
        paragraphs: [
          "Master-planned and HOA neighborhoods near Kissimmee frequently specify vinyl colors and styles, limit chain-link in certain elevations, and control gate design. Submit complete packages—site sketch, material samples, height, and neighbor-facing elevations—to reduce revision cycles.",
        ],
      },
      {
        h2: "Vinyl and chain-link for Kissimmee homes and businesses",
        paragraphs: [
          "Residential customers often prefer vinyl privacy for low maintenance in Central Florida heat. Chain-link suits pet runs, side yards, and commercial security. FenceLine Florida builds both systems for Florida soil and weather once approvals are in place.",
        ],
      },
      {
        h2: "How FenceLine Florida helps in Kissimmee",
        paragraphs: [
          "We serve Kissimmee homeowners and commercial properties with vinyl and chain-link installation plus help preparing permit and HOA documentation. The city, county, and HOA remain the final decision-makers on approvals.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who issues fence permits in Kissimmee?",
        a: "It depends on whether your parcel is inside Kissimmee city limits or unincorporated Osceola County. Confirm jurisdiction before applying. This is not legal advice.",
      },
      {
        q: "Do HOAs near Kissimmee still review fences if no city permit is needed?",
        a: "Often yes. Many associations require architectural approval for vinyl or chain-link regardless of city permit status. Get written approval before install when your covenants require it.",
      },
      {
        q: "Can FenceLine Florida help with Kissimmee permit paperwork?",
        a: "Yes. We help with documentation for residential and commercial vinyl and chain-link projects in Kissimmee and nearby communities such as St. Cloud, Poinciana, and Celebration.",
      },
      {
        q: "What materials do you install in Kissimmee?",
        a: "Vinyl and chain-link only—for residential privacy and commercial perimeter or security applications.",
      },
    ],
    relatedLinks: [
      {
        href: "/resources/fence-permits-hoa-florida",
        label: "Fence permits & HOA hub (Florida)",
      },
      {
        href: "/resources/hoa-fence-approval-checklist",
        label: "HOA fence approval checklist",
      },
      { href: "/areas/kissimmee", label: "Fence installation in Kissimmee" },
      { href: "/services/vinyl-fence", label: "Vinyl fence installation" },
      {
        href: "/services/chain-link-fence",
        label: "Chain-link fence installation",
      },
    ],
    cta: "Ready for a vinyl or chain-link fence in Kissimmee? Get a free FenceLine Florida quote—including permit and HOA documentation help when needed.",
    externalLinks: [],
  },
  {
    slug: "hoa-fence-approval-checklist",
    title:
      "HOA Fence Approval Checklist | Vinyl & Chain Link | FenceLine Florida",
    description:
      "Step-by-step HOA fence approval checklist for vinyl and chain-link in Florida. What to submit, what to avoid, and how FenceLine Florida helps.",
    h1: "HOA fence approval checklist",
    eyebrow: "Resources · HOA",
    intro:
      "HOA fence approval is usually an architectural review process separate from any city or county building permit. Use this checklist to prepare a complete vinyl or chain-link submittal for Florida communities—especially in Jacksonville, Orlando, and Kissimmee. FenceLine Florida helps assemble layouts and product specs for residential and commercial projects. Association rules vary; this is not legal advice.",
    body: [
      {
        h2: "Before you apply",
        paragraphs: [
          "Read your community’s architectural guidelines and covenants for fences: allowed materials, maximum height, colors, front-yard restrictions, setbacks from sidewalks, and neighbor notification rules. Confirm whether chain-link is allowed, limited to rear yards, or required to be vinyl-coated.",
          "Identify whether you also need a city or county permit. HOA approval never replaces a required building permit.",
        ],
        list: [
          "Locate fence guidelines in the HOA documents or portal",
          "Note allowed materials (vinyl privacy, coated chain-link, etc.)",
          "Record max height and setback rules",
          "Check front-yard and corner-lot restrictions",
          "Confirm application fees and review timelines",
          "Ask if a survey or plot plan is required",
        ],
      },
      {
        h2: "Documents to include in your packet",
        paragraphs: [
          "Incomplete packets cause the most delays. Aim for a package a reviewer can approve without a second request.",
        ],
        list: [
          "Completed HOA / ARC application form",
          "Property sketch or survey showing proposed fence line",
          "Height of fence and gates (note grade changes)",
          "Vinyl style and color (or chain-link mesh, gauge, and coating color)",
          "Gate locations, swing direction, and hardware notes",
          "Neighbor-facing elevations if required by your HOA",
          "Photos of the install area (helpful for existing conditions)",
          "Contractor contact info and insurance certificate if requested",
        ],
      },
      {
        h2: "Vinyl-specific tips for HOA success",
        paragraphs: [
          "Specify style (full privacy, semi-privacy), color (white, tan, gray, etc.), post caps, and whether lattice or decorative tops are included. Match neighboring fences when guidelines require consistency. Call out any stepped runs on slopes so height is measured the way your HOA defines it.",
        ],
      },
      {
        h2: "Chain-link-specific tips for HOA success",
        paragraphs: [
          "State mesh size, top rail type, post schedule, and coating (galvanized vs vinyl-coated color). If privacy slats are proposed, include color and coverage percentage. Note that many HOAs restrict barbed wire, razor ribbon, and front-yard chain-link—do not assume commercial security hardware is allowed on a home lot.",
        ],
      },
      {
        h2: "After you submit",
        paragraphs: [
          "Do not start install until you have written approval (email or stamped plans as your HOA requires). Track conditions of approval—height reductions, color changes, or setback adjustments—and share them with your installer.",
          "If a city permit is also required, keep both approval sets on site during construction. Schedule inspections when the permit demands them.",
        ],
      },
      {
        h2: "How FenceLine Florida supports HOA submittals",
        paragraphs: [
          "FenceLine Florida installs residential and commercial vinyl and chain-link in Jacksonville, Orlando, and Kissimmee. We help prepare clear drawings and material specifications for HOA packets and coordinate with any required city permit documentation. Final HOA and municipal approvals remain with those authorities.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does HOA fence approval take?",
        a: "Many associations target 2–4 weeks, but some take longer or meet monthly. Submit early and follow up with a complete packet. Timelines are set by each HOA—not by FenceLine Florida.",
      },
      {
        q: "Can I install if my HOA is silent on fences?",
        a: "Silence is not always permission. Check for general exterior improvement rules, and still verify city or county permit needs. When in doubt, ask the management company in writing.",
      },
      {
        q: "Will FenceLine Florida submit my HOA application for me?",
        a: "We help prepare documentation—layouts and product details—for vinyl and chain-link projects. Some associations require the owner to be the applicant; others accept contractor-assisted packets. We work with either process.",
      },
      {
        q: "Does HOA approval cover city permits in Orlando, Jacksonville, or Kissimmee?",
        a: "No. Treat HOA and city/county permits as separate. Use our city guides and the official municipal portals for permit questions.",
      },
    ],
    relatedLinks: [
      {
        href: "/resources/fence-permits-hoa-florida",
        label: "Fence permits & HOA hub (Florida)",
      },
      {
        href: "/resources/fence-permit-orlando",
        label: "Fence permits in Orlando",
      },
      {
        href: "/resources/fence-permit-jacksonville",
        label: "Fence permits in Jacksonville",
      },
      {
        href: "/resources/fence-permit-kissimmee",
        label: "Fence permits in Kissimmee",
      },
      {
        href: "/services/residential-fence",
        label: "Residential fence installation",
      },
      { href: "/services/vinyl-fence", label: "Vinyl fence installation" },
    ],
    cta: "Need HOA-ready vinyl or chain-link specs for Jacksonville, Orlando, or Kissimmee? Get a free FenceLine Florida quote.",
    externalLinks: [],
  },
];

export const RESOURCE_PAGES = [...BASE_RESOURCE_PAGES, ...EXTRA_RESOURCE_PAGES];

export function getResourceBySlug(slug) {
  return RESOURCE_PAGES.find((r) => r.slug === slug) || null;
}

export function resourcePath(slug) {
  return `/resources/${slug}`;
}

export function allResourcePaths() {
  return RESOURCE_PAGES.map((r) => resourcePath(r.slug));
}

export function resourceJsonLd(resource) {
  return pageEntityGraph({
    path: resourcePath(resource.slug),
    title: resource.title,
    description: resource.description,
    serviceName:
      "Vinyl and chain-link fence installation with permit and HOA documentation help",
    serviceDescription: resource.description,
    faqs: resource.faqs,
  });
}

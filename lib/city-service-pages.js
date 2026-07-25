import { pageEntityGraph } from "@/lib/seo-entity";
import { SITE } from "@/lib/site";

/**
 * City × material SEO pages:
 * /areas/{city}/{service}  e.g. /areas/orlando/vinyl-fence
 * Sitewide rules: docs/seo-sitewide-rules.md
 */

export const CITY_SERVICE_PAGES = [
  // ─── Jacksonville · Vinyl ─────────────────────────────────────────────
  {
    citySlug: "jacksonville",
    cityName: "Jacksonville",
    serviceSlug: "vinyl-fence",
    title: "Vinyl Fence Installation in Jacksonville, FL | FenceLine Florida",
    description:
      "FenceLine Florida installs residential and commercial vinyl privacy fences in Jacksonville and Duval County. Low maintenance, HOA-friendly, Florida posts. Free quote.",
    h1: "Vinyl fence installation in Jacksonville",
    eyebrow: "Jacksonville · Vinyl",
    intro:
      "FenceLine Florida installs residential and commercial vinyl (PVC) fences across Jacksonville for backyard privacy, HOA curb appeal, and clean commercial screening—posts set for North Florida sand, sun, and wind, with clear quotes and permit or HOA documentation help when needed.",
    body: [
      {
        h2: "Where vinyl fits Jacksonville homes and businesses",
        paragraphs: [
          "Jacksonville’s spread—from Mandarin and the Southside to Arlington, the Beaches corridor, and commercial corridors off I-95 and I-10—creates different fence priorities on every lot. Homeowners often choose vinyl when they want full privacy from neighbors or the street, a finished look that holds color in humid heat, and less painting or staining than wood-style upkeep. Larger North Florida lots still use vinyl for rear and side runs when screening pools, outdoor living, or pet areas without an open mesh look.",
          "Commercial clients in Jacksonville use vinyl when a street-facing elevation needs screening—office yards, multi-unit common areas, equipment pads, or dumpster screening—rather than a pure security mesh. Residential and commercial installs share the same specialty: vinyl and chain link only, done with straight lines and Florida-appropriate post work. Nearby communities we commonly serve with Jacksonville jobs include Orange Park, Fleming Island, Ponte Vedra, Mandarin, and St. Augustine-area properties.",
        ],
        list: [
          "Backyard privacy and pool-adjacent screening on suburban lots",
          "HOA-friendly solid or semi-privacy styles for planned communities",
          "Commercial vinyl for offices, multi-unit, and street-facing screening",
          "Matching gates where access and curb appeal both matter",
        ],
      },
      {
        h2: "Permits and HOA rules in Jacksonville (careful guidance)",
        paragraphs: [
          "Fence permit and HOA requirements in Jacksonville and Duval County are not identical on every property. Needs often depend on fence height, location on the lot, residential vs commercial use, corner lots, easements, pool barriers, and whether powered gates are involved. HOA design approval is frequently required even when a city permit is not—planned communities often control color, height, and style.",
          "FenceLine Florida helps review what is often needed and manages permitting and HOA documentation for most residential and commercial vinyl jobs. This is not legal advice: always confirm final requirements with the City of Jacksonville (or relevant jurisdiction) and your association before install. For a fuller overview of common Florida triggers and paperwork, see our hub at /resources/fence-permits-hoa-florida.",
        ],
      },
      {
        h2: "Vinyl installs built for North Florida conditions",
        paragraphs: [
          "Jacksonville heat, humidity, coastal influence, and storm-season wind put real stress on posts and panels. We set posts for Florida sand and wind so vinyl lines stay straight instead of leaning after wet seasons or tropical weather. Privacy and semi-privacy systems are chosen for sun exposure and the look your property needs—not a one-size panel dump.",
          "Quotes spell out material and style, height, linear footage, gates, post setting, and labor so you know what is included before crews arrive. We do not claim every fence type; vinyl is the privacy and low-maintenance path, while chain link remains the better pick when open sight lines, pets, or security mesh are the priority.",
        ],
      },
      {
        h2: "After your free Jacksonville quote",
        paragraphs: [
          "A typical path after you request a free quote: site measure or plan review, material and height recommendations for your lot, itemized pricing, then permit or HOA package support when the job needs it. Scheduling follows documentation and material lead times so install day is not a surprise.",
          "Whether you are fencing a Mandarin backyard or screening a commercial lot, you get the same process: clear scope, Florida-ready install, and residential or commercial vinyl focused on privacy and finish. Call or request a quote to start.",
        ],
      },
    ],
    bullets: [
      "Residential vinyl privacy for Jacksonville & Duval lots",
      "Commercial vinyl screening for offices and multi-unit sites",
      "HOA-friendly styles and documentation help",
      "Posts set for Florida sand, sun, and wind",
      "Clear quotes: material, footage, gates, labor",
    ],
    faqs: [
      {
        q: "Do I need a permit for a vinyl fence in Jacksonville?",
        a: "It depends. Permit needs in Jacksonville often turn on height, lot location, commercial use, corner lots, easements, pool barriers, or powered gates—not every residential vinyl line requires the same paperwork. Confirm with the city for your address; we help review what is often required and manage documentation for most jobs.",
      },
      {
        q: "Is vinyl a good choice for Jacksonville HOAs?",
        a: "Often yes. Many Jacksonville-area associations prefer vinyl for privacy and curb appeal because it holds a clean look with low maintenance. Your HOA may still control color, height, and style even when a city permit is not required—we can help assemble design packets when needed.",
      },
      {
        q: "What does a Jacksonville vinyl fence quote include?",
        a: "A clear FenceLine Florida quote typically covers vinyl material and style, height, linear footage, gates, post setting for Florida soil, and labor. Permit or HOA documentation support is called out when it is part of the job so pricing stays transparent.",
      },
      {
        q: "Do you install commercial vinyl in Jacksonville?",
        a: "Yes. We install commercial vinyl for screening and finished street-facing runs on offices, multi-unit properties, and facilities, as well as residential privacy. We specialize in vinyl and chain link only—not a full multi-material catalog.",
      },
    ],
  },

  // ─── Jacksonville · Chain link ────────────────────────────────────────
  {
    citySlug: "jacksonville",
    cityName: "Jacksonville",
    serviceSlug: "chain-link-fence",
    title: "Chain Link Fence Installation in Jacksonville, FL | FenceLine Florida",
    description:
      "FenceLine Florida installs residential and commercial chain-link fences in Jacksonville and Duval County. Yards, pets, security perimeters. Free quote.",
    h1: "Chain-link fence installation in Jacksonville",
    eyebrow: "Jacksonville · Chain link",
    intro:
      "FenceLine Florida installs residential and commercial chain-link fences across Jacksonville for pet containment, property lines, and security perimeters—galvanized or color-coated options, Florida post setting, and help with permits or HOA documentation when the job requires it.",
    body: [
      {
        h2: "Chain link for Jacksonville yards, lots, and facilities",
        paragraphs: [
          "Jacksonville’s large metro footprint means more deep lots, industrial edges, and multi-acre residential parcels than many Florida markets. Chain link is often the practical choice when you need durable containment for dogs, a clear property boundary, or a cost-effective commercial security line around warehouses, equipment yards, schools, and multi-unit sites.",
          "Homeowners pick chain link when open sight lines and strength matter more than solid privacy; businesses pick it for site control and long runs that still need gates and terminals done correctly. Residential and commercial work stays in our two-material focus—chain link for containment and security, vinyl when full privacy is the goal. We regularly work jobs tied to Orange Park, Fleming Island, Mandarin, Ponte Vedra, and greater Jacksonville corridors.",
        ],
        list: [
          "Residential chain link for pets, side yards, and property lines",
          "Commercial perimeters for warehouses, lots, and facilities",
          "Galvanized or color-coated mesh for a cleaner look",
          "Walk gates, drive gates, and properly set terminals",
        ],
      },
      {
        h2: "Permits, easements, and HOAs in the Jacksonville area",
        paragraphs: [
          "Commercial chain-link projects in Jacksonville often face different permit expectations than a simple backyard run. Height, use, corner lots, easements, floodplain conditions, and powered gates can all affect what the city expects. On residential lots, HOA rules may still apply even when a municipal permit is not required.",
          "We help sort what is often needed and manage documentation for most installs, but final approval always rests with the city and your association. Treat this as practical guidance, not legal advice. Step-by-step permit and HOA context for Florida markets is at /resources/fence-permits-hoa-florida.",
        ],
      },
      {
        h2: "Florida-grade chain-link installs, not a patch job",
        paragraphs: [
          "North Florida sand, wet seasons, and wind load the posts and terminals first. We install full runs with correct tensioning, terminal posts, and foundations suited to local soil—not a weekend box-store patch that fails after the first hard storm season. Mesh gauge, height, and coating are matched to residential pet yards or commercial security specs as needed.",
          "Your quote lists mesh type, height, linear footage, gates, post work, and labor so residential and commercial buyers can compare scope fairly. If privacy becomes the priority later, we also install vinyl; we do not expand into wood or aluminum as primary services.",
        ],
      },
      {
        h2: "From quote to install in Jacksonville",
        paragraphs: [
          "After you request a free quote, we measure or review plans, recommend height and mesh for the use case, and itemize materials and labor. If permits or HOA packets apply, that work is sequenced before crew scheduling so install day is planned, not rushed.",
          "Whether the job is a pet yard in Mandarin or a commercial lot near a Jacksonville industrial corridor, the process stays the same: clear price, Florida post setting, and professional terminals and gates.",
        ],
      },
    ],
    bullets: [
      "Residential chain link for Jacksonville yards & pets",
      "Commercial security and lot perimeters",
      "Galvanized or color-coated options",
      "Florida post setting for sand and wind",
      "Transparent quotes with footage, gates, and labor",
    ],
    faqs: [
      {
        q: "Is chain link allowed in Jacksonville HOAs?",
        a: "It depends on the association. Some Jacksonville-area HOAs allow chain link in rear yards or with specific coatings and heights; others prefer vinyl for street visibility. Confirm design rules with your HOA—we can help with documentation when approval is required.",
      },
      {
        q: "Do commercial chain-link jobs in Jacksonville need permits?",
        a: "Often they do, especially when height, site use, easements, corner lots, or powered gates are involved. Requirements vary by property. We help coordinate documentation for most commercial installs; always confirm final rules with the city.",
      },
      {
        q: "What mesh options do you install in Jacksonville?",
        a: "We install residential and commercial chain-link systems in galvanized or color-coated finishes, with appropriate height, terminals, and gates for the site. Quotes spell out mesh, height, footage, gates, and labor.",
      },
      {
        q: "Can you fence a large Jacksonville lot with chain link?",
        a: "Yes. Chain link is well suited to longer residential property lines and commercial perimeters common in the Jacksonville metro. We focus on correct posts, tension, and gates so long runs stay square and secure.",
      },
    ],
  },

  // ─── Orlando · Vinyl ──────────────────────────────────────────────────
  {
    citySlug: "orlando",
    cityName: "Orlando",
    serviceSlug: "vinyl-fence",
    title: "Vinyl Fence Installation in Orlando, FL | FenceLine Florida",
    description:
      "FenceLine Florida installs residential and commercial vinyl fences in Orlando and Orange County. HOA-friendly privacy, Florida installs. Free quote.",
    h1: "Vinyl fence installation in Orlando",
    eyebrow: "Orlando · Vinyl",
    intro:
      "FenceLine Florida installs residential and commercial vinyl privacy fences across Orlando and Orange County—HOA-friendly styles for planned communities, low-maintenance screening for homes and businesses, and posts set for Central Florida soil, sun, and storms.",
    body: [
      {
        h2: "Vinyl privacy for Orlando HOAs, homes, and commercial sites",
        paragraphs: [
          "Orlando’s housing stock is heavy on planned communities, lakeside lots, and infill neighborhoods where privacy and curb appeal matter as much as the fence itself. Homeowners choose vinyl when they want solid or semi-privacy lines that look finished from the street, resist Florida sun fade better than constant paint cycles, and keep backyard living screened from neighbors.",
          "Commercial vinyl shows up where Orange County businesses and multi-unit properties need screening rather than open mesh—office courtyards, amenity areas, equipment enclosures, and street-facing runs that still need a professional finish. We install residential and commercial vinyl only alongside chain link, so you get a specialist crew rather than a multi-material generalist. Nearby areas often served with Orlando work include Winter Park, Altamonte Springs, Apopka, Ocoee, and Winter Garden.",
        ],
        list: [
          "HOA community privacy and rear-yard screening",
          "Pool and outdoor-living privacy without wood upkeep",
          "Commercial vinyl for offices, multi-unit, and amenity areas",
          "Color and style choices that match association guidelines when required",
        ],
      },
      {
        h2: "Orlando permits and HOA approval (read carefully)",
        paragraphs: [
          "In Orlando and Orange County, whether you need a fence permit often depends on height, use, and site conditions. Situations that commonly trigger closer review include taller fences (often over common residential heights such as 6 ft—confirm locally), commercial projects, pool barriers, corner lots, easements, powered gates, or floodplain work. HOA design approval is frequently required even when a city permit is not.",
          "FenceLine Florida helps review what is often needed and handles permitting and HOA paperwork for most residential and commercial vinyl jobs. Rules vary by property—always confirm with the City of Orlando or county jurisdiction and your association. Educational detail lives on our permit and HOA hub: /resources/fence-permits-hoa-florida. That guide is not legal advice.",
        ],
      },
      {
        h2: "Central Florida install details that keep vinyl straight",
        paragraphs: [
          "Central Florida sand, afternoon storms, and long sun exposure punish shallow posts and weak layouts. We set posts for Florida soil and wind so privacy panels stay aligned through wet seasons and tropical weather. Material selection stays practical: vinyl for privacy and low maintenance; chain link when pets, open yards, or security mesh are the better fit.",
          "Quotes itemize style, height, linear footage, gates, post setting, and labor. You see residential or commercial scope clearly before install—no vague “call for pricing only” approach as the whole answer.",
        ],
      },
      {
        h2: "What happens after your Orlando quote",
        paragraphs: [
          "After a free quote request we measure or review the plan, recommend vinyl style and height for your lot and any HOA constraints, and provide an itemized price. If permit or association packets apply, that documentation is handled as part of the path to a scheduled install.",
          "Homeowners in Winter Park-area neighborhoods and commercial managers on Orange County corridors get the same specialist process: vinyl privacy done right, Florida posts, and transparent inclusions.",
        ],
      },
    ],
    bullets: [
      "HOA-friendly vinyl for Orlando planned communities",
      "Residential privacy built for Central Florida sun",
      "Commercial vinyl screening for offices & multi-unit",
      "Permit and HOA documentation help when needed",
      "Clear quotes with footage, gates, and labor",
    ],
    faqs: [
      {
        q: "Is vinyl preferred by Orlando HOAs?",
        a: "Often yes. Many Orlando and Orange County associations favor vinyl for privacy and a consistent street look. Exact rules for color, height, and style still vary by community—confirm with your HOA. We help with design documentation for most jobs.",
      },
      {
        q: "When does an Orlando vinyl fence need a permit?",
        a: "Permit needs typically depend on height, commercial vs residential use, pool barriers, corner lots, easements, powered gates, and similar site factors. Not every yard project is the same. Confirm with the city; we help review what is often required.",
      },
      {
        q: "How does vinyl compare to chain link in Orlando?",
        a: "Vinyl is the privacy and curb-appeal choice with low maintenance. Chain link is usually better for pets, open sight lines, and many commercial security perimeters. FenceLine Florida installs both so you can match material to the job.",
      },
      {
        q: "Do you serve Orange County communities outside city limits?",
        a: "Yes. Orlando-area vinyl work commonly includes nearby communities such as Winter Park, Altamonte Springs, Apopka, Ocoee, and Winter Garden, with the same residential and commercial focus.",
      },
    ],
  },

  // ─── Orlando · Chain link ─────────────────────────────────────────────
  {
    citySlug: "orlando",
    cityName: "Orlando",
    serviceSlug: "chain-link-fence",
    title: "Chain Link Fence Installation in Orlando, FL | FenceLine Florida",
    description:
      "FenceLine Florida installs residential and commercial chain-link fences in Orlando and Orange County. Pets, yards, security perimeters. Free quote.",
    h1: "Chain-link fence installation in Orlando",
    eyebrow: "Orlando · Chain link",
    intro:
      "FenceLine Florida installs residential and commercial chain-link fences in Orlando and Orange County for pet yards, property lines, and security perimeters—correct tensioning and Florida post setting, with permit and HOA documentation help when the site requires it.",
    body: [
      {
        h2: "Where Orlando properties use chain link",
        paragraphs: [
          "Not every Orlando lot is an HOA privacy project. Homeowners use chain link for dogs, side-yard containment, and cost-effective boundaries where open mesh is acceptable. Commercial and institutional sites across Orange County use chain link for parking lots, storage yards, schools, facilities, and multi-unit perimeters that need visible security and long, reliable runs.",
          "Tourism-adjacent and industrial corridors around the metro often need gates, height, and terminals specified for operations—not a decorative-only install. We keep residential and commercial chain-link work inside our specialist line: chain link for containment and security, vinyl when full privacy is required. Nearby service areas frequently include Winter Park, Altamonte Springs, Apopka, Ocoee, and Winter Garden.",
        ],
        list: [
          "Residential pet and yard containment",
          "Commercial and facility security perimeters",
          "Galvanized or color-coated mesh options",
          "Walk and drive gates with proper terminals",
        ],
      },
      {
        h2: "Orange County permit and HOA caveats",
        paragraphs: [
          "Commercial chain-link work in the Orlando area often has different documentation expectations than a basic residential yard fence. Height, commercial use, easements, corner lots, floodplain conditions, and powered gates can all change what is required. Residential HOAs may restrict chain link on street-facing elevations even when a city permit is not needed.",
          "We help review common requirements and manage paperwork for most jobs, but final confirmation is always with the city or county and your association. For structured guidance on Florida fence permits and HOA packets, use /resources/fence-permits-hoa-florida. Content there is educational, not legal advice.",
        ],
      },
      {
        h2: "Install quality for Central Florida soil and storms",
        paragraphs: [
          "Shallow posts fail in Central Florida sand after wet seasons and wind events. Our chain-link installs use terminal posts, tensioning, and foundations suited to local conditions so lines stay straight and gates work after storm season—not a temporary patch. Specs are matched to residential pet yards or commercial security as the site demands.",
          "Quotes list mesh, height, linear footage, gates, post setting, and labor for residential and commercial buyers. If the property later needs privacy screening, we install vinyl on the same focused material set—no wood or aluminum catalog expansion.",
        ],
      },
      {
        h2: "Process after your free Orlando quote",
        paragraphs: [
          "You request a free quote; we measure or review plans; we recommend height and mesh for the use case; you receive an itemized price. Permit or HOA steps, when they apply, are coordinated before crews are scheduled so the install is planned against real constraints.",
          "From a residential dog run to a commercial Orange County lot line, the path stays direct: clear scope, Florida-ready posts, and professional gates.",
        ],
      },
    ],
    bullets: [
      "Residential chain link for Orlando yards & pets",
      "Commercial security for lots, schools & facilities",
      "Galvanized or color-coated mesh",
      "Posts set for Central Florida sand and wind",
      "Itemized quotes: mesh, footage, gates, labor",
    ],
    faqs: [
      {
        q: "Will my Orlando HOA allow chain link?",
        a: "It varies. Some Orange County associations allow chain link only in rear yards or with specific coatings; others require vinyl for visible elevations. Check your documents early. We can help with HOA packets when design approval is required.",
      },
      {
        q: "What makes a commercial chain-link quote different in Orlando?",
        a: "Commercial quotes typically emphasize height, mesh gauge, gate types, linear footage, and any site constraints that affect posts or permits. Timeline and operations access matter more on active facilities. We itemize materials and labor so scope is clear.",
      },
      {
        q: "Do you install color-coated chain link in Orlando?",
        a: "Yes. Galvanized and color-coated options are available for homes that want a cleaner look and businesses that need a more finished perimeter while keeping chain-link function.",
      },
      {
        q: "How do you handle Florida post setting on Orlando lots?",
        a: "Posts and terminals are set for Central Florida sand and wind so long runs and gates stay true through wet seasons and storm weather. Correct foundations matter as much as mesh choice.",
      },
    ],
  },

  // ─── Kissimmee · Vinyl ────────────────────────────────────────────────
  {
    citySlug: "kissimmee",
    cityName: "Kissimmee",
    serviceSlug: "vinyl-fence",
    title: "Vinyl Fence Installation in Kissimmee, FL | FenceLine Florida",
    description:
      "FenceLine Florida installs residential and commercial vinyl fences in Kissimmee and Osceola County. Privacy, HOA help, Florida installs. Free quote.",
    h1: "Vinyl fence installation in Kissimmee",
    eyebrow: "Kissimmee · Vinyl",
    intro:
      "FenceLine Florida installs residential and commercial vinyl fences in Kissimmee and Osceola County for backyard privacy, planned-community curb appeal, and commercial screening—built for Central Florida soil, sun, and storms with clear quotes and careful permit or HOA support.",
    body: [
      {
        h2: "Vinyl use cases across Kissimmee and Osceola County",
        paragraphs: [
          "Kissimmee’s mix of growing residential neighborhoods, resort-adjacent housing, and planned communities makes vinyl a frequent privacy choice. Homeowners pick solid or semi-privacy vinyl when they want to screen outdoor living, pools, and rear lots without annual paint or stain cycles under Central Florida sun.",
          "Commercial vinyl appears on multi-unit properties, office pads, and amenity or equipment screening where a finished look matters more than open mesh security. We install residential and commercial vinyl as a focused specialty—pair it with our chain-link work when a site needs both privacy and open containment. Nearby communities often tied to Kissimmee jobs include St. Cloud, Poinciana, Celebration, and Davenport-area properties.",
        ],
        list: [
          "Privacy for new and established residential neighborhoods",
          "HOA-style curb appeal in planned communities",
          "Commercial screening for multi-unit and amenity areas",
          "Matching gates for access without breaking the line",
        ],
      },
      {
        h2: "Kissimmee permits and HOA documentation (careful language)",
        paragraphs: [
          "In Kissimmee and Osceola County, permit and HOA requirements depend on height, location, property type, and association rules. Planned communities often require design approval even when a city permit is not required. Commercial work, taller fences, pool barriers, corner lots, easements, and powered gates are situations where documentation is more often needed—confirm for your exact address.",
          "FenceLine Florida helps sort what is often required and manages documentation for most residential and commercial vinyl installs. Always verify final rules with the city and your HOA; we do not give absolute legal guarantees. Start with the educational hub at /resources/fence-permits-hoa-florida for common Florida triggers and packet tips.",
        ],
      },
      {
        h2: "Florida install standards for Osceola County soil and weather",
        paragraphs: [
          "Osceola County sand, humidity, and storm-season wind reward deep, correct post work. Vinyl panels stay straighter when posts are set for Florida conditions rather than rushed shallow sets. We build for privacy and low maintenance first; if open containment or commercial security mesh is a better fit, we recommend chain link instead of forcing vinyl into the wrong job.",
          "Every quote lists material and style, height, linear footage, gates, post setting, and labor so residential and commercial buyers see the same transparency.",
        ],
      },
      {
        h2: "After the free Kissimmee quote",
        paragraphs: [
          "Request a free quote, get a measure or plan review, receive style recommendations that respect HOA constraints when they apply, and lock an itemized price. Permit or association paperwork is sequenced before install scheduling when the property needs it.",
          "From a Poinciana backyard privacy line to a multi-unit screening run near the Kissimmee corridor, the process stays specialist and plain: vinyl done right, Florida posts, clear inclusions.",
        ],
      },
    ],
    bullets: [
      "Residential vinyl privacy for Kissimmee & Osceola",
      "Planned-community and HOA-friendly styles",
      "Commercial vinyl screening where finish matters",
      "Permit and HOA documentation help",
      "Posts set for Central Florida sand and wind",
    ],
    faqs: [
      {
        q: "Do Kissimmee HOAs usually approve vinyl fences?",
        a: "Many Osceola County planned communities accept or prefer vinyl for privacy and a consistent look, but each association sets its own color, height, and style rules. Confirm early; we help with documentation for most residential jobs.",
      },
      {
        q: "Is a permit always required for vinyl in Kissimmee?",
        a: "No—not always. Needs typically depend on height, lot conditions, commercial vs residential use, pool barriers, and similar factors. Confirm with the city for your property. We help review what is often required without treating guidance as legal advice.",
      },
      {
        q: "What nearby areas do you cover with Kissimmee vinyl installs?",
        a: "Kissimmee-area vinyl work commonly includes St. Cloud, Poinciana, Celebration, and Davenport-area properties, with the same residential and commercial focus.",
      },
      {
        q: "Why choose vinyl over chain link in Kissimmee?",
        a: "Choose vinyl when privacy, curb appeal, and low maintenance matter most. Choose chain link when pets, open sight lines, budget containment, or commercial security mesh are the priority. We install both.",
      },
    ],
  },

  // ─── Kissimmee · Chain link ───────────────────────────────────────────
  {
    citySlug: "kissimmee",
    cityName: "Kissimmee",
    serviceSlug: "chain-link-fence",
    title: "Chain Link Fence Installation in Kissimmee, FL | FenceLine Florida",
    description:
      "FenceLine Florida installs residential and commercial chain-link fences in Kissimmee and Osceola County. Pets, yards, security perimeters. Free quote.",
    h1: "Chain-link fence installation in Kissimmee",
    eyebrow: "Kissimmee · Chain link",
    intro:
      "FenceLine Florida installs residential and commercial chain-link fences across Kissimmee and Osceola County for pet containment, property lines, and security perimeters—Florida post setting, galvanized or color-coated options, and careful help with permits or HOA paperwork when needed.",
    body: [
      {
        h2: "Chain link for Kissimmee homes, lots, and commercial sites",
        paragraphs: [
          "Kissimmee and greater Osceola County include larger residential lots, agricultural-edge parcels, storage and service businesses, and multi-unit properties that need practical containment. Homeowners often choose chain link for dogs, side-yard security, and cost-effective boundaries where solid privacy is not required.",
          "Commercial clients use chain link for lot lines, equipment yards, facility perimeters, and sites along busier corridors that need visible security and reliable gates. Residential and commercial installs stay inside our two-material specialty—chain link for strength and open mesh, vinyl when full privacy screening is the goal. Nearby communities frequently served include St. Cloud, Poinciana, Celebration, and Davenport.",
        ],
        list: [
          "Residential chain link for pets and property lines",
          "Commercial perimeters for lots and facilities",
          "Galvanized or color-coated mesh finishes",
          "Walk and drive gates with correct terminal posts",
        ],
      },
      {
        h2: "Osceola County permits and association rules",
        paragraphs: [
          "Permit expectations for chain link in Kissimmee often differ between a simple residential yard and a commercial perimeter. Height, commercial use, corner lots, easements, floodplain conditions, and powered gates can all affect what is required. In planned communities, HOA rules may limit chain link on certain elevations even when a municipal permit is not required.",
          "We help review what is often needed and manage documentation for most jobs. Confirm final requirements with the city and your association—this is practical guidance, not legal advice. For broader Florida permit and HOA context, see /resources/fence-permits-hoa-florida.",
        ],
      },
      {
        h2: "Built for Central Florida soil, humidity, and wind",
        paragraphs: [
          "Long chain-link runs fail first at the posts and terminals when foundations ignore Florida sand and storm wind. We install with proper tensioning and post work so residential pet fences and commercial security lines stay square and usable after wet seasons—not a temporary fix.",
          "Quotes itemize mesh, height, linear footage, gates, post setting, and labor for both residential and commercial buyers. If a portion of the site later needs privacy, vinyl can cover that need without changing companies or expanding into unrelated materials.",
        ],
      },
      {
        h2: "From free quote to scheduled install in Kissimmee",
        paragraphs: [
          "After you request a free quote, we measure or review plans, match height and mesh to residential or commercial use, and deliver an itemized price. When permits or HOA packets apply, that work is completed before crew scheduling so install day accounts for real constraints.",
          "Whether the job is a pet yard in St. Cloud or a commercial lot near Kissimmee, you get straight process: clear scope, Florida-ready posts, and professional gates.",
        ],
      },
    ],
    bullets: [
      "Residential chain link for Kissimmee yards & pets",
      "Commercial security for Osceola lots & facilities",
      "Galvanized or color-coated options",
      "Florida post setting for sand and storm season",
      "Transparent quotes with mesh, footage, gates, labor",
    ],
    faqs: [
      {
        q: "Can I install chain link in a Kissimmee HOA community?",
        a: "Sometimes. Many planned communities in Osceola County restrict street-facing chain link or require specific coatings and heights. Rear-yard rules can differ. Confirm with your association; we help with design documentation when approval is needed.",
      },
      {
        q: "Do commercial chain-link projects in Kissimmee need permits?",
        a: "They often do, especially with taller heights, commercial use, easements, corner lots, or powered gates. Requirements vary by site. We help coordinate documentation for most commercial installs; always confirm with the city.",
      },
      {
        q: "What is included in a Kissimmee chain-link quote?",
        a: "A FenceLine Florida quote typically lists mesh type and coating, height, linear footage, gates, post setting for Florida soil, and labor. Permit or HOA support is called out when it is part of the job.",
      },
      {
        q: "Do you serve St. Cloud and Poinciana for chain link?",
        a: "Yes. Kissimmee-area chain-link work commonly includes St. Cloud, Poinciana, Celebration, and Davenport-area properties for residential and commercial installs.",
      },
    ],
  },
];

/** Allowed service slugs on city pages */
export const CITY_SERVICE_SLUGS = ["vinyl-fence", "chain-link-fence"];

export const CITY_SERVICE_CITIES = [
  { citySlug: "jacksonville", cityName: "Jacksonville" },
  { citySlug: "orlando", cityName: "Orlando" },
  { citySlug: "kissimmee", cityName: "Kissimmee" },
];

export function getCityServicePage(citySlug, serviceSlug) {
  return (
    CITY_SERVICE_PAGES.find(
      (p) => p.citySlug === citySlug && p.serviceSlug === serviceSlug,
    ) || null
  );
}

export function cityServicePath(citySlug, serviceSlug) {
  return `/areas/${citySlug}/${serviceSlug}`;
}

export function allCityServicePaths() {
  return CITY_SERVICE_PAGES.map((p) =>
    cityServicePath(p.citySlug, p.serviceSlug),
  );
}

export function cityServiceJsonLd(page) {
  return pageEntityGraph({
    path: cityServicePath(page.citySlug, page.serviceSlug),
    title: page.title,
    description: page.description,
    serviceName: page.h1,
    serviceDescription: page.description,
    faqs: page.faqs,
    areaServed: {
      "@type": "City",
      name: page.cityName,
      containedInPlace: { "@type": "State", name: "Florida" },
    },
  });
}

// Re-export SITE for templates if needed
export { SITE };

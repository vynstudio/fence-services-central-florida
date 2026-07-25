# FenceLine Florida — Sitewide SEO, AEO & Voice Rules

**Status:** Canonical rule set for all indexable templates and public copy  
**Last updated:** 2026-07-25  
**Code source of truth:** `lib/seo-entity.js` + `lib/site.js`  
**Homepage brief:** `docs/fenceline-florida-seo-aeo-implementation-brief.md`  
**Permit cluster brief:** `docs/content-briefs/permit-hoa-hub.md`

This document is the single place for **entity**, **voice**, **geography wording**, **meta/FAQ/schema**, and **template checklists**. Do not maintain a separate brand-voice file unless it only points here.

---

## 1. Purpose

Every indexable page must signal the **same business entity**, the **same service focus**, the **same geographic coverage language**, and the **same voice**. Do not invent alternate brand names, materials, markets, or tone page by page.

Goals:

1. Shared **entity schema** on every indexable page where the business appears  
2. **County language** consistent across service and area templates  
3. **Standardized FAQ + meta** patterns  
4. **Reuse approved wording** — do not rewrite coverage copy ad hoc  
5. **Consistent voice** — specialist, plain, Florida-practical, legally careful  

---

## 2. Entity (fixed)

| Field | Value |
|--------|--------|
| Public name | **FenceLine Florida** (one word: FenceLine) |
| Alternate | Fence Line Florida, FenceLine, fencelineflorida.com |
| Legal | Diler Dynamics Group LLC |
| Legal line | FenceLine Florida is a DBA of Diler Dynamics Group LLC. |
| Tagline | Straight lines. Strong fences. |
| URL | https://fencelineflorida.com |
| Phone | From env or `(689) 600-2720` |
| Email | hello@fencelineflorida.com |
| Street address on site | **None** (`hasStreetAddress: false`) |

### Materials (only)

- Vinyl (PVC) fence  
- Chain-link fence  
- Residential and commercial for both  

**Do not** add wood, aluminum, steel, gates-as-primary-service, or “all fence types” positioning.

### Services (entity serviceType)

- Vinyl Fence Installation  
- Chain-Link Fence Installation  
- Residential Fence Installation  
- Commercial Fence Installation  
- Fence Permit Coordination  
- HOA Fence Documentation  

### Differentiators (use in copy; do not invent new ones)

1. Vinyl + chain-link only (focused specialist)  
2. Permits + HOA documentation help  
3. Built for Florida soil, sun, humidity, wind  
4. Clear quotes (what’s included)  
5. Jacksonville & Central Florida counties — not “all of Florida”  

---

## 3. Voice & tone

### 3.1 Who we sound like

**Professional local fence installer** — straight talk, trade-credible, homeowner-accessible. Not a marketplace, not big-box, not corporate PR, not hype SEO.

### 3.2 Voice traits

| Trait | Do | Don’t |
|--------|-----|--------|
| **Direct** | Lead with the answer in the first sentence | Bury the point under intros |
| **Specialist** | “Two materials done right” | “We install every fence type” |
| **Florida-specific** | Soil, sand, humidity, sun, wind, posts, storm season | Generic national fence boilerplate |
| **Process-helpful** | Permits & HOA as included help | Scare tactics or legal lecture |
| **Careful on rules** | often / typically / depend on / confirm with city or HOA | Absolute legal claims |
| **Transparent** | Itemize what a quote includes | Vague “call for pricing” only |
| **Trade-credible** | Wholesale-grade; Master Halco *where available* + not a retail store | Overclaim brand partnerships |
| **Low hype** | Clean, confident, factual | “#1”, “best in Florida”, emoji spam |

### 3.3 Register by audience

| Audience | Intent | Tone adjustment |
|----------|--------|------------------|
| Homeowners / HOA | Privacy, pets, curb appeal, paperwork | Reassure; simplify process; plain language |
| Commercial | Security, lots, warehouses, schools, timeline | Direct; specs; durability; schedule |
| AI / search (AEO) | Entity + local facts | Short quotable answer first, then detail |

### 3.4 Sentence & structure habits

- Prefer short sentences and concrete nouns.  
- First paragraph (and FAQ answers) should be **citation-ready** for AI/search.  
- Use **you** for the reader; **we** for FenceLine Florida.  
- CTAs stay practical: **Get free quote**, **Call**, **Text us**.  
- Tagline only where it earns space (footer, about) — not every H1.

### 3.5 Approved phrase bank (prefer these)

- Straight lines. Strong fences.  
- Vinyl for privacy, low maintenance, and HOA curb appeal.  
- Chain link for pets, yards, and commercial security perimeters.  
- Built for Florida soil, sun, and storms.  
- Posts set for Florida sand and wind.  
- Permits and HOA packages / documentation help.  
- Confirm final requirements with your city and HOA.  
- Clear price — material, style, height, linear footage, gates, labor.  
- No shortcuts, no weak installs.  
- Residential and commercial.

### 3.6 Do not say / avoid

- “All fence types” / full multi-material catalog positioning  
- Invented public street HQ address  
- “You never need a permit” / absolute legal guarantees  
- Aggressive competitor-bashing by name  
- Generic spam H1s only (“Best fence company near me”) without entity + market  
- Over-casual slang, hype adjectives, or emoji-heavy marketing  
- Claiming Master Halco retail store status  

### 3.7 Legal & permit language (voice rule)

Permit, zoning, HOA, height, and statewide-statute claims must stay **careful**:

- Prefer: *often*, *typically*, *can depend*, *may still apply*, *confirm with*  
- When citing figures (e.g. height limits, HB 803 thresholds), treat as **guidance from public sources as of brief date** — not legal advice  
- Always leave room: city, county, HOA, property type, and site conditions vary  
- Point readers to official city/county portals when specific  

Educational guides (resources) should say content is **not legal advice**.

### 3.8 Master Halco / suppliers

Allowed: materials from professional wholesale lines, including Master Halco product lines **where available**.  
Required disclaimer when named: FenceLine Florida sells and installs to homeowners and businesses; **not** a Master Halco retail store.

---

## 4. Geography (approved wording)

### Two-layer model

| Layer | Role | Labels |
|-------|------|--------|
| **Counties** | Coverage language in meta, schema, body | Duval (JAX), Orange, Seminole, Osceola |
| **Cities** | Landing URLs + local H1s | Jacksonville, Orlando, Kissimmee |

Mapping: Orlando ⊂ Orange · Kissimmee ⊂ Osceola · Jacksonville ⊂ Duval.  
Region phrase: **Jacksonville & Central Florida**.

### Approved coverage strings (reuse; do not invent)

Import from `lib/seo-entity.js` → `COVERAGE`:

| Key | Use |
|-----|-----|
| `COVERAGE.short` | UI chips, trust lines |
| `COVERAGE.long` | Meta descriptions, body intros |
| `COVERAGE.servingLine` | Footer / service line |
| `COVERAGE.marketLine` | Secondary market one-liner |
| `COVERAGE.region` | Region label |
| `COVERAGE_AREA_SERVED_SCHEMA` | JSON-LD `areaServed` |

**Examples:**

- short: `Jacksonville · Orange · Seminole · Osceola County`  
- long: `Jacksonville, Orange, Seminole, and Osceola County`  
- servingLine: `Serving Jacksonville, Orange, Seminole & Osceola County`  

City pages: **lead with the city**, then tie to county + regional coverage.  
Do not expand to “all of Florida” without product decision.

Keep `public/llms.txt` in sync with these strings when coverage changes.

---

## 5. Meta pattern (every indexable page)

Use `buildPageMetadata()` from `lib/seo-entity.js` (or mirror it exactly).

| Element | Rule |
|---------|------|
| `title` | Primary intent + market/service + `\| FenceLine Florida` |
| `description` | Material (vinyl/chain) + audience (home/business) + market + permits/HOA when relevant + CTA |
| `canonical` | Absolute `https://fencelineflorida.com{path}` with trailing slash only for home `/` |
| `robots` | `index, follow` on public content; keep thank-you / deposit success / API out of sitemap |
| `openGraph` | Same title + description (or `HOME_OG_DESCRIPTION` on home); siteName FenceLine Florida |
| `twitter` | `summary_large_image` + same title/description |

### Title formula

```
{Primary intent} | FenceLine Florida
```

or

```
{Primary intent} in {City/Market} | FenceLine Florida
```

### Description formula

```
{Entity} installs {materials} for {audience} in {market}. {differentiators}. {CTA}.
```

Voice in meta: plain, factual, no hype superlatives.

---

## 6. Heading hierarchy

| Level | Rule |
|-------|------|
| **One H1** | Visible, first primary heading, matches page intent (not hidden) |
| **H2** | Major sections only |
| **H3** | FAQ questions, card titles under H2 |

Do not use multiple H1s. Do not skip levels for styling alone.  
H1 voice: market + service intent (e.g. fence installation + Jacksonville & Central Florida), not a slogan dump.

---

## 7. FAQ pattern

### When to include FAQ

| Page type | FAQ source |
|-----------|------------|
| Homepage | `HOME_FAQS` in `lib/seo.js` (AEO brief set — permits/HOA/local) |
| Resource / guides | Page-specific FAQs in `lib/resources.js` |
| Service / area | Optional 3–5 Qs **or** link to permit hub; if present, same schema helper |

### Rules

1. On-page FAQ text **must match** FAQPage JSON-LD (same Q/A source array).  
2. Voice: careful legal language (see §3.7).  
3. Build schema with `faqPageNode(faqs, pageUrl)` or `pageEntityGraph({ faqs })`.  
4. Questions as **H3** inside the FAQ UI.  
5. First sentence of each answer should stand alone as a citation.

---

## 8. JSON-LD / entity schema (every indexable page)

### Required graph pieces

Use `pageEntityGraph()` from `lib/seo-entity.js`:

1. **LocalBusiness** (`@id`: `{SITE.url}/#localbusiness`) — shared entity node (same IDs sitewide)  
2. **Organization** (`@id`: `{SITE.url}/#organization`) — legal + logo  
3. **WebSite** (`@id`: `{SITE.url}/#website`)  
4. **WebPage** — this URL  
5. **Service** (when page is service/area/resource about installation) — `provider` → `#localbusiness`  
6. **FAQPage** — only if page has FAQs  

### Rules

- Reference the **same `@id`s** for LocalBusiness / Organization / WebSite on every page (do not invent parallel entities).  
- **No street address** in schema while `hasStreetAddress` is false.  
- `areaServed` comes from `COVERAGE_AREA_SERVED_SCHEMA` unless the page is strictly one city (then city-level on Service; provider still full coverage).  
- Homepage may expand with OfferCatalog (see homepage brief).  
- Entity `name` is **FenceLine Florida**; include alternateName “Fence Line Florida”.

### Indexable vs non-indexable

| Index | Noindex / no sitemap |
|-------|----------------------|
| `/`, services, areas, resources | `/api/*`, `/thank-you`, `/deposit/success` |

---

## 9. Internal linking (entity + cluster)

Every major template should reach:

- `/services/vinyl-fence`  
- `/services/chain-link-fence`  
- `/areas/jacksonville`, `/areas/orlando`, `/areas/kissimmee`  
- `/resources/fence-permits-hoa-florida` (permit/HOA hub)  
- `/resources`  

Do not orphan new guides. Link language stays in brand voice (clear, not keyword-stuffed).

---

## 10. Content types & tone mapping

| Content type | Primary job | Voice emphasis |
|--------------|-------------|----------------|
| Homepage | Entity + convert | Specialist focus, counties, permits/HOA, clear CTA |
| Service pages | Material/segment | Decision language (vinyl vs chain, res vs comm) |
| Area pages | City + local trust | City lead + county tie-in + permit care |
| Resource guides | AEO citations | Direct answers, tables, careful rules, process |
| CTAs / sticky bar | Action | Short verbs: Quote, Call, Text |

AI visibility goal: teach reusable facts (permits, materials, Florida install, quotes) — not “best company” roundups.

---

## 11. Template checklist (PR / agent)

Before shipping any new indexable page:

- [ ] Voice matches §3 (direct, specialist, careful, low hype)  
- [ ] Uses `buildPageMetadata` or equivalent title/description/canonical/OG  
- [ ] Single visible H1  
- [ ] Emits `pageEntityGraph` (or homepage `getHomeJsonLd`)  
- [ ] Coverage language from `COVERAGE` only  
- [ ] Materials only vinyl + chain-link  
- [ ] FAQ Q/A shared with schema if FAQs present  
- [ ] Legal/permit caveats if rules are discussed  
- [ ] In `sitemap.js`  
- [ ] No street address  
- [ ] `llms.txt` updated if entity/markets/services changed  

---

## 12. Code map

| File | Role |
|------|------|
| `docs/seo-sitewide-rules.md` | **This file** — SEO + voice (canonical) |
| `lib/seo-entity.js` | Shared entity, coverage strings, meta builder, JSON-LD helpers |
| `lib/site.js` | Brand, phone, homepage copy keys |
| `lib/seo.js` | Homepage FAQs + `getHomeJsonLd` |
| `lib/service-pages.js` | Service content + `serviceJsonLd` |
| `lib/locations.js` | City content + `cityJsonLd` |
| `lib/resources.js` | Guides + `resourceJsonLd` |
| `public/llms.txt` | AI crawler entity card (keep in sync) |
| `app/sitemap.js` | Indexable URLs |
| `app/robots.js` | Allow crawlers + AI bots |

---

## 13. Anti-patterns (do not)

### Entity / SEO

- “We install all fence types”  
- Inventing a street HQ on the site  
- Different legal names without FenceLine Florida public name  
- “We serve all of Florida” without county focus  
- FAQ schema that doesn’t match visible FAQ text  
- Multiple LocalBusiness entities with different names/IDs per page  

### Voice

- Hype superlatives and empty claims  
- Absolute legal advice  
- Generic national tone with no Florida install detail  
- Keyword stuffing that breaks plain-language answers  
- Casual slang that undercuts trade credibility  

---

*These rules apply to human and agent contributors. Prefer editing `lib/seo-entity.js` and `lib/site.js` over copy-pasting schema or reinventing coverage/voice page by page.*

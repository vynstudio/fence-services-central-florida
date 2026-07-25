# Resource entry schema

Each file in this folder must:

```js
/** @type {import('../types').ResourcePage} */
const page = {
  slug: "kebab-case-unique",
  title: "... | FenceLine Florida",
  description: "…",
  h1: "…",
  eyebrow: "Resources · …",
  intro: "Direct answer first (AEO). …",
  body: [
    { h2: "…", paragraphs: ["…"], list?: ["…"] },
  ],
  faqs: [{ q: "…", a: "…" }],
  relatedLinks: [{ href: "/…", label: "…" }],
  cta: "…",
  externalLinks: [], // optional [{ href, label }]
};
export default page;
```

Rules: `docs/seo-sitewide-rules.md`  
Materials: vinyl + chain-link only. Cities: Jacksonville, Orlando, Kissimmee. No street address. Careful permit language.

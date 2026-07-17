import { SITE } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();

  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    {
      path: "/residential-fence-repair",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/commercial-fence-installation",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    { path: "/contact-us", priority: 0.7, changeFrequency: "monthly" },
    { path: "/deposit", priority: 0.4, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

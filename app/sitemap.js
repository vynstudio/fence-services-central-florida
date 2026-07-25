import { allCityPaths } from "@/lib/locations";
import { allResourcePaths } from "@/lib/resources";
import { allServicePaths } from "@/lib/service-pages";
import { SITE } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();

  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    ...allServicePaths().map((path) => ({
      path,
      priority: 0.85,
      changeFrequency: "monthly",
    })),
    ...allCityPaths().map((path) => ({
      path,
      priority: 0.85,
      changeFrequency: "monthly",
    })),
    { path: "/resources", priority: 0.8, changeFrequency: "monthly" },
    ...allResourcePaths().map((path) => ({
      path,
      priority: 0.8,
      changeFrequency: "monthly",
    })),
    { path: "/deposit", priority: 0.2, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

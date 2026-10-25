import { MetadataRoute } from "next";
import { calculators, CATEGORIES } from "@/lib/calculators";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mycalculatorhub.pro";

  // 1. Static Pages
  // Note: lastModified is intentionally omitted for static and calculator
  // pages. Previously every URL was stamped with the current date on every
  // build, which made every page look freshly changed even when it was not.
  // Only articles carry a real updated date from their data.
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/author`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/category`,
      changeFrequency: "daily",
      priority: 0.85,
    },
  ];

  // 2. Article Guides
  const uniqueArticles = Array.from(
    new Map(articles.map((art) => [art.slug, art])).values()
  );

  const articleRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/articles`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...uniqueArticles.map((art) => ({
      url: `${baseUrl}/articles/${art.slug}`,
      lastModified: art.updated ? new Date(art.updated) : undefined,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];

  // 3. Dynamic Calculator Pages (Deduplicated)
  const uniqueCalculators = Array.from(
    new Map(calculators.map((calc) => [calc.slug, calc])).values()
  );

  const calcRoutes: MetadataRoute.Sitemap = uniqueCalculators.map((calc) => ({
    url: `${baseUrl}/${calc.slug}`,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 4. Dynamic Category Hub Pages (Deduplicated)
  const uniqueCategorySlugs = Array.from(
    new Set(
      CATEGORIES.map((category) =>
        category.toLowerCase().replace(/ /g, "-").replace(/&/g, "and")
      )
    )
  );

  const categoryRoutes: MetadataRoute.Sitemap = uniqueCategorySlugs.map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...articleRoutes, ...calcRoutes, ...categoryRoutes];
}

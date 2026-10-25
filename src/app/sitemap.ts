import { MetadataRoute } from "next";
import { calculators, CATEGORIES } from "@/lib/calculators";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mycalculatorhub.pro";
  const now = new Date();

  // 1. Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/author`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/category`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
  ];

  // 2. Article Guides (Dynamic for all 100+ articles)
  const uniqueArticles = Array.from(
    new Map(articles.map((art) => [art.slug, art])).values()
  );

  const articleRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/articles`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...uniqueArticles.map((art) => ({
      url: `${baseUrl}/articles/${art.slug}`,
      lastModified: now,
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
    lastModified: now,
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
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...articleRoutes, ...calcRoutes, ...categoryRoutes];
}
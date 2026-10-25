import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://mycalculatorhub.pro/sitemap.xml",
    host: "https://mycalculatorhub.pro",
  };
}
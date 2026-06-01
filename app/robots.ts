import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Dev/internal pages — not for indexing.
      disallow: ["/all-pages"],
    },
    sitemap: "https://cryptoandcoffee.show/sitemap.xml",
  };
}

import type { MetadataRoute } from "next";
import { EPISODES, GUESTS, BLOG_POSTS } from "@/lib/content";

const BASE = "https://cryptoandcoffee.show";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/episodes",
    "/about",
    "/partner",
    "/guests",
    "/contact",
    "/links",
    "/events",
    "/blog",
    "/newsletter",
    "/shop",
    "/privacy",
    "/terms",
  ];

  const dynamicRoutes = [
    ...EPISODES.filter((e) => !e.comingSoon).map((e) => `/episodes/${e.slug}`),
    ...GUESTS.map((g) => `/guests/${g.slug}`),
    ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
  ];

  const now = new Date();
  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
  }));
}

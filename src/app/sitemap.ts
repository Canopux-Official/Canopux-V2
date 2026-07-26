import type { MetadataRoute } from "next";
import { getAllPosts } from "@/content/blog";
import { siteConfig } from "@/lib/site";

const SITE_LAUNCH = new Date("2026-01-01T00:00:00+05:30");

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latestPostDate = posts.reduce((latest, post) => {
    const date = new Date(`${post.updatedAt ?? post.publishedAt}T00:00:00+05:30`);
    return date > latest ? date : latest;
  }, SITE_LAUNCH);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/products`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/portfolio`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(
      `${post.updatedAt ?? post.publishedAt}T00:00:00+05:30`,
    ),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticRoutes, ...blogRoutes];
}

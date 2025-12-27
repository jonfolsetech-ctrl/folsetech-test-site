import { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const cities = {
  gonzales: "Gonzales, Louisiana",
  prairieville: "Prairieville, Louisiana",
  "baton-rouge": "Baton Rouge, Louisiana",
  "denham-springs": "Denham Springs, Louisiana",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://folsetech.net";
  const today = new Date().toISOString().split("T")[0];

  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1, lastModified: today, changeFrequency: "weekly" },
    { url: `${baseUrl}/blog`, priority: 0.8, lastModified: today, changeFrequency: "weekly" },
  ];

  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    priority: 0.7,
    lastModified: post.date || today,
    changeFrequency: "monthly" as const,
  }));

  const cityPages: MetadataRoute.Sitemap = Object.keys(cities).map((city) => ({
    url: `${baseUrl}/${city}`,
    priority: 0.8,
    lastModified: today,
    changeFrequency: "monthly" as const,
  }));

  return [...corePages, ...blogPosts, ...cityPages];
}

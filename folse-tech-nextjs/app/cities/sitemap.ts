import { MetadataRoute } from "next";

const cities = [
  "gonzales",
  "prairieville",
  "baton-rouge",
  "denham-springs",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.folsetech.net";

  return cities.map(city => ({
    url: `${baseUrl}/${city}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));
}

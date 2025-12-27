import { Metadata } from "next";

interface SeoMetaProps {
  title: string;
  description: string;
  city: string;
  canonical?: string;
  keywords?: string[];
}

export function generateSeoMeta({
  title,
  description,
  city,
  canonical,
  keywords = [],
}: SeoMetaProps): Metadata {
  const defaultKeywords = [
    `AI Web Design ${city} LA`,
    `Web Design ${city} Louisiana`,
    `SEO Services ${city} LA`,
    `AI SEO ${city}`,
    `Local SEO ${city}`,
    `Google Business Profile Optimization ${city}`,
    "Next.js Web Design",
    "React Web Design",
    "Local SEO Louisiana",
    "FolseTech AI Web Design",
    "Google Maps Optimization",
  ];

  const allKeywords = [...new Set([...keywords, ...defaultKeywords])];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: canonical
      ? { canonical }
      : undefined,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "FolseTech AI Solutions",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

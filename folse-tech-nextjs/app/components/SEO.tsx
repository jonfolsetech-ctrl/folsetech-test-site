import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  city: string;
}

export function generateSEOMetadata({
  title,
  description,
  city,
}: SEOProps): Metadata {
  const citySlug = city.toLowerCase().replace(/\s+/g, "-");
  
  return {
    title,
    description,
    keywords: [
      `AI web design ${city}`,
      `SEO web design ${city}`,
      `local SEO ${city}`,
    ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://folsetech.net/${citySlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://folsetech.net/${citySlug}`,
      siteName: "Folsetech AI Solutions LLC",
      locale: "en_US",
      type: "website",
    },
  };
}

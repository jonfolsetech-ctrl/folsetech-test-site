interface LocalJsonLdProps {
  city: string;
  citySlug: string;
}

export default function LocalJsonLd({ city, citySlug }: LocalJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FolseTech AI Solutions",
    "image": "https://folsetech.net/logo.png",
    "url": `https://folsetech.net/${citySlug}`,
    "telephone": "225-313-1914",
    "email": "jon@folsetech.net",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "LA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.2383,
      "longitude": -90.9201
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": city + ", Louisiana"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/folsetech",
      "https://www.linkedin.com/company/folsetech",
      "https://www.google.com/maps"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Web Design & Local SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Web Design",
            "areaServed": city,
            "description":
              "AI-powered web design using React and Next.js optimized for local search."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO Optimization",
            "areaServed": city,
            "description":
              "Google Business Profile optimization and local SEO for Maps and organic rankings."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

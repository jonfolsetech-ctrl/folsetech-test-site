export default function SEOJsonLd({ city }: { city?: string }) {
  const baseUrl = "https://www.folsetech.net";

  const services = [
    "AI Web Design – Gonzales, LA",
    "SEO Optimization Services",
    "Local SEO Consulting",
    "SQL Optimization & Performance Tuning",
    "Website Speed Optimization",
    "Technical SEO Services",
  ];

  const serviceAreas = [
    "Gonzales, LA",
    "Prairieville, LA",
    "Baton Rouge, LA",
    "Denham Springs, LA",
    "Ascension Parish, LA",
    "East Baton Rouge Parish, LA",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Folsetech",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        "name": "Folsetech",
        "image": `${baseUrl}/og-image.png`,
        "telephone": "+1-225-313-1914",
        "email": "jon@folsetech.net",
        "url": baseUrl,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city || "Gonzales",
          "addressRegion": "LA",
          "addressCountry": "US"
        },
        "areaServed": serviceAreas
      },
      ...services.map((serviceName) => ({
        "@type": "Service",
        "name": serviceName,
        "provider": { "@id": `${baseUrl}/#localbusiness` },
        "areaServed": serviceAreas
      }))
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

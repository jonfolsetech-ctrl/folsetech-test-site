export default function SEOJsonLd({ city }: { city?: string }) {
  const baseUrl = "https://folsetech.net";

  const services = [
    "AI-Powered Web Design",
    "Performance Optimization",
    "Enterprise Security",
    "Responsive Development",
    "Local SEO Optimization",
    "Data-Driven Strategy",
  ];

  const serviceAreas = [
    "Gonzales, LA",
    "Ascension Parish, LA",
    "East Baton Rouge Parish, LA",
    "Baton Rouge, LA",
    "Louisiana",
    "United States",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Folse Tech",
        "description": "Professional AI-powered web design and development services",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        },
        "isPartOf": {
          "@id": `${baseUrl}/#organization`
        }
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Folse Tech",
        "url": baseUrl,
        "logo": `${baseUrl}/folsetechlogo1finalfinal.PNG`,
        "description": "AI-powered web design and development agency based in Gonzales, Louisiana",
        "sameAs": [
          "https://www.facebook.com/folsetech",
          "https://www.linkedin.com/company/folsetech",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "telephone": "+1-225-313-1914",
          "email": "jon@folsetech.net"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Gonzales",
          "addressRegion": "LA",
          "postalCode": "70737",
          "addressCountry": "US"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        "name": "Folse Tech",
        "image": `${baseUrl}/folsetechlogo1finalfinal.PNG`,
        "telephone": "+1-225-313-1914",
        "email": "jon@folsetech.net",
        "url": baseUrl,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city || "Gonzales",
          "addressRegion": "LA",
          "addressCountry": "US"
        },
        "areaServed": serviceAreas,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "10"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#service`,
        "name": "Web Design & Development Services",
        "provider": {
          "@id": `${baseUrl}/#organization`
        },
        "areaServed": serviceAreas,
        "serviceType": ["Web Design", "Web Development", "SEO", "Performance Optimization", "Security"]
      },
      ...services.map((serviceName) => ({
        "@type": "Service",
        "name": serviceName,
        "provider": { "@id": `${baseUrl}/#organization` },
        "areaServed": serviceAreas,
        "serviceType": serviceName
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

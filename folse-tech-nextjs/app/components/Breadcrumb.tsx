"use client";

interface BreadcrumbItem {
  label: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const baseUrl = "https://www.folsetech.net";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `${baseUrl}${item.url}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="bg-gray-50 border-b border-gray-200 pt-16 md:pt-0">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 md:py-3">
          <ol className="flex items-center gap-1 md:gap-2 text-xs md:text-sm flex-wrap">
            {items.map((item, index) => (
              <li key={item.url} className="flex items-center gap-1 md:gap-2">
                <a
                  href={item.url}
                  className="text-blue-600 hover:text-blue-800 transition font-medium truncate"
                >
                  {item.label}
                </a>
                {index < items.length - 1 && (
                  <span className="text-gray-400">/</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}

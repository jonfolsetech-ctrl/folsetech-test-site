import SEOJsonLd from "@/components/SEOJsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

const cities = {
  gonzales: "Gonzales, Louisiana",
  prairieville: "Prairieville, Louisiana",
  "baton-rouge": "Baton Rouge, Louisiana",
  "denham-springs": "Denham Springs, Louisiana",
};

export function generateStaticParams() {
  return Object.keys(cities).map(city => ({ city }));
}

type Props = {
  params: { city: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const cityName = cities[params.city as keyof typeof cities];
  return {
    title: `AI Web Design in ${cityName} | Folse Tech`,
    description: `Professional AI web design and development services in ${cityName}. SEO optimization, SQL performance tuning, and more.`,
  };
}

export default function CityPage({ params }: Props) {
  const cityName = cities[params.city as keyof typeof cities];

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Cities", url: "/#portfolio" },
    { label: cityName, url: `/${params.city}` }
  ];

  return (
    <>
      <SEOJsonLd city={cityName} />
      <Breadcrumb items={breadcrumbs} />
      <section className="px-4 md:px-6 py-12 md:py-20 max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
          AI Web Design in {cityName}
        </h1>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
          Folsetech is the trusted {cityName} expert for AI web design,
          SEO optimization, and SQL performance tuning.
        </p>

        <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">AI-Powered Web Solutions for {cityName}</h2>
            <p className="text-sm md:text-base text-slate-600">We deliver enterprise-grade web design and development services tailored to local businesses in {cityName} looking to dominate search results and convert more customers online.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">Local SEO Optimization</h2>
            <p className="text-sm md:text-base text-slate-600">Our SEO strategies help {cityName} businesses achieve top rankings in Google Search, Google Maps, and local pack listings. We target local keywords that convert.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">Performance & Speed</h2>
            <p className="text-sm md:text-base text-slate-600">Fast websites rank better and convert more. We optimize every aspect of your digital presence for speed, reliability, and user experience.</p>
          </div>
        </div>
      </section>
    </>
  );
}

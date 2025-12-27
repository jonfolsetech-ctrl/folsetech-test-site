import LocalJsonLd from "@/components/LocalJsonLd";
import { generateSeoMeta } from "@/lib/seo";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

const cities = {
  gonzales: { 
    name: "Gonzales, Louisiana", 
    slug: "gonzales-la",
    description: "FolseTech AI Solutions offers AI-powered web design and local SEO services in Gonzales, Louisiana. We build fast, mobile-optimized websites using React and Next.js, designed to rank in Google search and Google Maps.",
    additionalInfo: "Our local SEO strategies help Gonzales businesses increase visibility, attract local customers, and convert website visitors into leads. From AI-driven design to performance optimization and Google Business Profile SEO, we help businesses stand out locally and grow online."
  },
  prairieville: { 
    name: "Prairieville, Louisiana", 
    slug: "prairieville-la",
    description: "FolseTech AI Solutions delivers AI-powered web design and local SEO services in Prairieville, Louisiana. Our websites are engineered for search engine recognition, mobile performance, and high conversion rates.",
    additionalInfo: "We help Prairieville businesses rank higher on Google through strategic local SEO, Google Business Profile optimization, and AI-enhanced website development. Whether you're a small business or growing brand, we build digital platforms that drive measurable growth."
  },
  "baton-rouge": { 
    name: "Baton Rouge, Louisiana", 
    slug: "baton-rouge-la",
    description: "FolseTech AI Solutions provides professional AI web design and SEO services in Baton Rouge, Louisiana. We create high-performance websites optimized for speed, search visibility, and conversions using modern frameworks like Next.js and React.",
    additionalInfo: "Our Baton Rouge local SEO solutions are built to improve Google Maps rankings, increase inbound calls, and generate qualified leads. We help businesses compete and win online with intelligent design, clean code, and data-driven optimization."
  },
  "denham-springs": { 
    name: "Denham Springs, Louisiana", 
    slug: "denham-springs-la",
    description: "FolseTech AI Solutions offers AI-powered web design and local SEO services in Denham Springs, Louisiana. We build fast, high-performance websites using React and Next.js, designed to rank in Google search and Google Maps.",
    additionalInfo: "Our local SEO strategies help Denham Springs businesses increase visibility, attract local customers, and convert website visitors into leads. From AI-driven design to performance optimization and Google Business Profile SEO, we help businesses stand out locally and grow online."
  },
};

export function generateStaticParams() {
  return Object.keys(cities).map(city => ({ city }));
}

type Props = {
  params: { city: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const cityData = cities[params.city as keyof typeof cities];
  const cityName = cityData.name.split(",")[0];
  return generateSeoMeta({
    title: `AI Web Design & Local SEO in ${cityData.name} | FolseTech`,
    description: `Top AI-powered web design and local SEO services in ${cityData.name}. Built with Next.js for fast ranking, high conversions, and Google Maps visibility.`,
    city: cityName,
    canonical: `https://folsetech.net/${cityData.slug}`,
  });
}

export default function CityPage({ params }: Props) {
  const cityData = cities[params.city as keyof typeof cities];
  const cityName = cityData.name.split(",")[0];

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Cities", url: "/#portfolio" },
    { label: cityData.name, url: `/${params.city}` }
  ];

  return (
    <>
      <LocalJsonLd city={cityName} citySlug={cityData.slug} />
      <Breadcrumb items={breadcrumbs} />
      <section className="px-4 md:px-6 py-12 md:py-20 max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
          AI Web Design & Local SEO in {cityData.name}
        </h1>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
          {cityData.description}
        </p>

        <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
          {cityData.additionalInfo}
        </p>

        <GoogleMapEmbed city={cityName} query={`${cityName}, Louisiana`} />

        <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">Why Choose FolseTech for {cityData.name}?</h2>
            <p className="text-sm md:text-base text-slate-600">We combine AI-driven design with proven local SEO strategies to help {cityName} businesses rank higher on Google, appear in Google Maps, and convert more customers online.</p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">Our Services in {cityData.name}</h2>
            <ul className="text-sm md:text-base text-slate-600 space-y-2">
              <li>✔ <strong>AI Web Design</strong> - Modern, fast websites built with React and Next.js</li>
              <li>✔ <strong>Local SEO Optimization</strong> - Google Search and Google Maps rankings</li>
              <li>✔ <strong>Google Business Profile Optimization</strong> - Increase visibility and customer calls</li>
              <li>✔ <strong>Performance Optimization</strong> - Lightning-fast load times and mobile optimization</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">Ready to Dominate Local Search?</h2>
            <p className="text-sm md:text-base text-slate-600">Let's talk about how AI-powered web design and strategic local SEO can help your {cityName} business grow online.</p>
            <a href="mailto:jon@folsetech.net" className="inline-block mt-4 px-6 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors">
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

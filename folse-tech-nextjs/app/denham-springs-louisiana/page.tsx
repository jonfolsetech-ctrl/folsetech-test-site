import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LocalJsonLd from "@/components/LocalJsonLd";

export const metadata: Metadata = {
  title: "AI Web Design & SEO in Denham Springs, Louisiana | Folsetech AI Solutions LLC",
  description: "Folsetech AI Solutions LLC provides AI-powered web design and full SEO integration for businesses in Denham Springs, Louisiana. High-performance websites engineered to rank on Google.",
  keywords: ["AI web design Denham Springs LA", "SEO Denham Springs Louisiana", "web design Denham Springs", "local SEO Denham Springs"],
};

export default function DenhamSpringsPage() {
  return (
    <>
      <LocalJsonLd city="Denham Springs" citySlug="denham-springs-louisiana" />
      <Navigation />
      
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            AI Web Design & SEO in Denham Springs, Louisiana
          </h1>
        </div>
      </section>

      <section className="px-4 md:px-6 py-12 md:py-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p className="text-slate-700 leading-relaxed mb-6">
            Folsetech AI Solutions LLC provides AI-powered web design and full SEO integration for businesses in Denham Springs, Louisiana. We build high-performance websites engineered to rank on Google, attract qualified traffic, and convert visitors into customers.
          </p>

          <p className="text-slate-700 leading-relaxed mb-6">
            Our AI-driven design process combines responsive layouts, technical SEO foundations, and intelligent keyword targeting to ensure your website is search-engine ready from day one. Whether you're a local service provider, small business, or growing e-commerce brand, we create websites that load fast, look professional, and dominate local search results.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Services in Denham Springs Include:</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3 items-start">
              <span className="text-amber-500 font-bold">✓</span>
              <span className="text-slate-700">AI-powered responsive web design</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-500 font-bold">✓</span>
              <span className="text-slate-700">Local SEO optimization for Denham Springs searches</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-500 font-bold">✓</span>
              <span className="text-slate-700">SEO-optimized e-commerce websites</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-amber-500 font-bold">✓</span>
              <span className="text-slate-700">Conversion-focused landing pages</span>
            </li>
          </ul>

          <p className="text-slate-700 leading-relaxed mb-6">
            We understand Denham Springs search intent and local competition. That's why our sites are built with structured data, clean code, and city-specific SEO signals that help your business appear before competitors.
          </p>

          <div className="bg-amber-50 border-2 border-amber-500 rounded-lg p-6 md:p-8 text-center mt-12">
            <p className="text-lg font-semibold text-slate-900 mb-4">
              📧 Contact Jon Folse at <a href="mailto:jon@folsetech.net" className="text-blue-600 hover:text-amber-600">jon@folsetech.net</a> to grow your online visibility in Denham Springs, LA.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

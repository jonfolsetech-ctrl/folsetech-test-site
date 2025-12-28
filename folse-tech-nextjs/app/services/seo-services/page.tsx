import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "SEO Services for Local Businesses | Folse Tech",
  description: "Professional SEO services for businesses in Gonzales, Baton Rouge, and Prairieville, Louisiana. Increase rankings, drive organic traffic, and grow your business online.",
  keywords: ["SEO services", "local SEO", "search engine optimization", "Gonzales SEO", "Baton Rouge SEO", "Prairieville SEO", "organic traffic", "local search optimization"],
  openGraph: {
    title: "SEO Services for Local Businesses | Folse Tech",
    description: "Professional SEO services for Louisiana businesses",
  },
};

export default function SEOServicesPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "#services" },
    { label: "SEO Services", url: "/services/seo-services" }
  ];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />
      
      {/* Hero Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Professional SEO Services
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Full-service SEO optimization to increase rankings, drive organic traffic, and grow your business online.
          </p>
          <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors">
            Schedule Free SEO Consultation
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 md:px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Importance of SEO</h2>
          <p className="text-slate-700 mb-6 text-lg leading-relaxed">
            Organic search is where most website traffic comes from. If your website doesn't rank for keywords your customers are searching for, you're missing sales opportunities. Our comprehensive SEO services help businesses in Gonzales, Baton Rouge, and Prairieville dominate local search results and attract customers actively seeking their services.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Our Comprehensive SEO Services</h2>
          
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 my-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Technical SEO</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Site Speed Optimization:</strong> Fast-loading pages rank higher and convert better</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Mobile Optimization:</strong> Google prioritizes mobile-friendly websites in search results</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Site Architecture:</strong> Proper structure helps search engines crawl and index your content</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Core Web Vitals:</strong> Optimization for Google's ranking factors</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>XML Sitemaps & Robots.txt:</strong> Ensure search engines can discover all your content</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 my-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">On-Page SEO</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Keyword Research:</strong> Identify high-value keywords your customers are searching for</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Content Optimization:</strong> Strategic keyword placement and compelling content that ranks</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Meta Tags & Descriptions:</strong> Optimize title tags and meta descriptions for click-through rates</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Header Tag Optimization:</strong> Proper H1, H2, H3 structure for content hierarchy</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Internal Linking:</strong> Strategic linking structure to distribute authority and guide users</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 my-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Local SEO Optimization</h3>
            <p className="text-slate-700 mb-4">Dominate local search results in your area:</p>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Google Business Profile Optimization:</strong> Complete, accurate listings that drive calls and visits</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Local Citation Building:</strong> Consistent NAP (Name, Address, Phone) across directories</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Local Keyword Targeting:</strong> Rank for "near me" searches and location-specific queries</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Review Management:</strong> Encourage positive reviews that build trust and improve rankings</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Local Schema Markup:</strong> Proper markup for local business information</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 my-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Content Strategy & Creation</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>SEO Content Creation:</strong> Informative, keyword-rich content that answers customer questions</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Blog Strategy:</strong> Regular content that builds authority and attracts organic traffic</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Content Calendar:</strong> Strategic planning for consistent, relevant content publication</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Multimedia Optimization:</strong> Images, videos, and other content optimized for search</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 my-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Link Building & Off-Page SEO</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Quality Backlink Building:</strong> Earn links from reputable, relevant websites</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Brand Mentions:</strong> Increase online visibility and brand authority</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Social Signals:</strong> Support content distribution through social media</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-amber-500 flex-shrink-0">◆</span>
                <span><strong>Competitor Analysis:</strong> Understand what's working for your competition</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">SEO Services for Different Industries</h2>
          <p className="text-slate-700 mb-4">We tailor our SEO strategies to your specific industry and audience:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <li className="flex items-center gap-3"><span className="text-amber-500">◆</span> <strong>E-Commerce & Retail</strong></li>
            <li className="flex items-center gap-3"><span className="text-amber-500">◆</span> <strong>Professional Services</strong></li>
            <li className="flex items-center gap-3"><span className="text-amber-500">◆</span> <strong>Healthcare & Medical</strong></li>
            <li className="flex items-center gap-3"><span className="text-amber-500">◆</span> <strong>Real Estate & Property</strong></li>
            <li className="flex items-center gap-3"><span className="text-amber-500">◆</span> <strong>Hospitality & Tourism</strong></li>
            <li className="flex items-center gap-3"><span className="text-amber-500">◆</span> <strong>Manufacturing & B2B</strong></li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Our SEO Process</h2>
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-xl p-8 my-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">SEO Audit</h4>
                  <p className="text-blue-100">Complete analysis of your current SEO performance, technical issues, and opportunities</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Strategy Development</h4>
                  <p className="text-blue-100">Customized SEO strategy based on industry, competition, and your business goals</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Implementation</h4>
                  <p className="text-blue-100">Execute on-page, technical, and off-page optimizations according to the strategy</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900">4</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Monitoring & Reporting</h4>
                  <p className="text-blue-100">Monthly reports tracking rankings, traffic, conversions, and ROI</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900">5</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Continuous Optimization</h4>
                  <p className="text-blue-100">Ongoing refinement based on data, algorithm updates, and performance metrics</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Why Choose Folse Tech for SEO?</h2>
          <ul className="space-y-4 my-8">
            <li className="flex gap-4 items-start">
              <span className="text-amber-500">◆</span>
              <span className="text-slate-700"><strong>Proven Results:</strong> Track record of improving rankings and driving organic traffic for Louisiana businesses</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500">◆</span>
              <span className="text-slate-700"><strong>White Hat Methods:</strong> Ethical, sustainable SEO practices that build long-term rankings</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500">◆</span>
              <span className="text-slate-700"><strong>Transparency:</strong> Clear reporting and communication of results and strategies</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500">◆</span>
              <span className="text-slate-700"><strong>Holistic Approach:</strong> Complete SEO optimization, not just one area</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500">◆</span>
              <span className="text-slate-700"><strong>Local Expertise:</strong> Deep knowledge of Gonzales, Baton Rouge, and Prairieville markets</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500">◆</span>
              <span className="text-slate-700"><strong>Personalized Strategy:</strong> Tailored approach for your specific business and goals</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-amber-50 rounded-xl p-8 md:p-12 border-2 border-amber-500 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Ready to Dominate Local Search Results?
          </h3>
          <p className="text-slate-700 mb-8 text-lg">
            Let's discuss how our SEO services can increase your rankings, drive qualified traffic, and grow your business.
          </p>
          <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-lg">
            Schedule Your Free SEO Consultation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

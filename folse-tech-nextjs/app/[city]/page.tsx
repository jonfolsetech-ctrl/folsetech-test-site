import LocalJsonLd from "@/components/LocalJsonLd";
import { generateSeoMeta } from "@/lib/seo";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

const cities = {
  gonzales: { 
    name: "Gonzales, Louisiana", 
    slug: "gonzales-la",
    description: "Folse Tech delivers premium responsive web design, ecommerce solutions, and full-service SEO services in Gonzales, Louisiana. Our custom web design services help small to medium-sized businesses establish a powerful online presence and attract qualified customers.",
    additionalInfo: "We specialize in responsive web design Gonzales LA that converts visitors into customers. Our comprehensive approach combines strategic web development, local SEO optimization, and conversion-focused design to help your Gonzales business dominate online search results and grow your customer base.",
    heroTagline: "Premium Web Design & SEO Services for Gonzales Businesses",
    keyServices: [
      { title: "Responsive Web Design Gonzales LA", desc: "Mobile-first websites that look perfect on every device and rank high in search results" },
      { title: "Custom Web Solutions", desc: "Tailored websites built specifically for your Gonzales business goals and target audience" },
      { title: "Local SEO Optimization", desc: "Strategic SEO services to dominate local search and attract customers actively seeking your services" },
      { title: "Website Maintenance & Support", desc: "Ongoing optimization and technical support to keep your site performing at peak efficiency" }
    ]
  },
  prairieville: { 
    name: "Prairieville, Louisiana", 
    slug: "prairieville-la",
    description: "Folse Tech provides professional web design, responsive development, and SEO services in Prairieville, Louisiana. We create conversion-optimized websites that help small and medium-sized businesses increase visibility and attract more qualified leads.",
    additionalInfo: "Our SEO services Prairieville LA are designed to improve your local search rankings and drive qualified traffic to your website. From responsive web design to comprehensive SEO optimization, we provide the complete digital solutions your Prairieville business needs to compete and win online.",
    heroTagline: "Strategic Web Design & Full-Service SEO for Prairieville Success",
    keyServices: [
      { title: "SEO Services Prairieville LA", desc: "Comprehensive SEO strategies to increase visibility and drive qualified customer traffic" },
      { title: "Responsive Web Design", desc: "Modern, mobile-optimized websites designed for conversions and search engine performance" },
      { title: "E-Commerce Solutions", desc: "Complete online store development with payment processing and inventory management" },
      { title: "Local Business Growth", desc: "Integrated digital services to help your Prairieville business achieve sustainable online growth" }
    ]
  },
  "baton-rouge": { 
    name: "Baton Rouge, Louisiana", 
    slug: "baton-rouge-la",
    description: "Folse Tech offers comprehensive ecommerce website development, responsive web design, and professional SEO services in Baton Rouge, Louisiana. We help growing businesses establish powerful online presence and increase revenue through strategic digital solutions.",
    additionalInfo: "Our ecommerce website Baton Rouge LA services include complete platform development, payment integration, and conversion optimization. We combine responsive web design with proven SEO strategies to help your Baton Rouge business reach more customers, increase online sales, and achieve sustainable growth.",
    heroTagline: "E-Commerce, Web Design & SEO Services for Baton Rouge Businesses",
    keyServices: [
      { title: "E-Commerce Website Development", desc: "Fully featured online stores with secure payments, inventory management, and marketing integration" },
      { title: "Professional Web Design", desc: "High-converting websites optimized for search engines and built to drive results" },
      { title: "Full-Service SEO", desc: "Comprehensive SEO optimization to increase visibility and attract qualified customers" },
      { title: "Digital Growth Strategy", desc: "Strategic digital solutions designed for sustainable business growth and competitive advantage" }
    ]
  },
  "denham-springs": { 
    name: "Denham Springs, Louisiana", 
    slug: "denham-springs-la",
    description: "Folse Tech provides professional web design, responsive development, and local SEO services in Denham Springs, Louisiana. Our custom web solutions help local businesses establish credibility, increase visibility, and attract more qualified customers.",
    additionalInfo: "We specialize in responsive web design and SEO services that help Denham Springs businesses rank higher in local search results and convert more visitors into paying customers. Our proven approach combines beautiful design, technical excellence, and strategic SEO optimization.",
    heroTagline: "Custom Web Design & SEO Services for Denham Springs Businesses",
    keyServices: [
      { title: "Responsive Web Design", desc: "Mobile-first websites that provide excellent user experience and rank higher in search" },
      { title: "Local SEO Services", desc: "Proven SEO strategies to increase local visibility and attract customers in your area" },
      { title: "Custom Web Development", desc: "Tailored solutions built to meet your specific business needs and goals" },
      { title: "Conversion Optimization", desc: "Strategic optimization to turn website visitors into paying customers" }
    ]
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
      
      {/* Hero Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {cityData.heroTagline}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              {cityData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors">
                Schedule Free Consultation
              </a>
              <a href="#services" className="inline-block px-8 py-3 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-colors">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 md:px-6 py-16 md:py-20 max-w-5xl mx-auto">
        <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
          {cityData.additionalInfo}
        </p>

        <GoogleMapEmbed city={cityName} query={`${cityName}, Louisiana`} />

        {/* Services Grid */}
        <div id="services" className="mt-16 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Web Design & SEO Services for {cityData.name}
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to help your {cityName} business grow online
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cityData.keyServices.map((service, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-700">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mt-16 md:mt-24 bg-gradient-to-r from-slate-900 to-blue-900 rounded-xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Why Choose Folse Tech for {cityData.name}?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold text-xl">✓</span>
              <span className="text-lg">Local expertise with deep understanding of {cityName} business community</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold text-xl">✓</span>
              <span className="text-lg">Premium web design and development at competitive pricing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold text-xl">✓</span>
              <span className="text-lg">Proven track record helping {cityName} businesses increase online visibility</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold text-xl">✓</span>
              <span className="text-lg">Responsive, personalized service from experienced professionals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold text-xl">✓</span>
              <span className="text-lg">Transparent communication and data-driven results</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold text-xl">✓</span>
              <span className="text-lg">Free consultation—no obligation, just strategic advice</span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-24 text-center bg-amber-50 rounded-xl p-8 md:p-12 border-2 border-amber-500">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Elevate Your {cityName} Business Online?
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-8">
            Schedule a free, no-obligation consultation with our team. We'll assess your current online presence, discuss your business goals, and recommend tailored web design and SEO solutions for your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-lg">
              Schedule Your Free Consultation
            </a>
            <a href="tel:+1-800-123-4567" className="inline-block px-8 py-3 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-colors text-lg">
              Call Us Today
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <details className="bg-slate-50 rounded-lg p-6 cursor-pointer hover:bg-slate-100 transition-colors">
              <summary className="font-bold text-slate-900 text-lg">How much does responsive web design cost in {cityName}?</summary>
              <p className="text-slate-700 mt-4">Website costs vary based on complexity and features. Our responsive web design solutions range from custom websites to full ecommerce platforms. We offer transparent pricing and flexible options for businesses of all sizes. Schedule a consultation for a personalized quote.</p>
            </details>
            <details className="bg-slate-50 rounded-lg p-6 cursor-pointer hover:bg-slate-100 transition-colors">
              <summary className="font-bold text-slate-900 text-lg">How long does it take to see SEO results?</summary>
              <p className="text-slate-700 mt-4">Most businesses see noticeable improvements in 3-6 months. Our comprehensive SEO services focus on sustainable, long-term rankings through strategic optimization, quality content, and technical excellence. We provide monthly reports tracking your progress.</p>
            </details>
            <details className="bg-slate-50 rounded-lg p-6 cursor-pointer hover:bg-slate-100 transition-colors">
              <summary className="font-bold text-slate-900 text-lg">Do you provide ongoing website maintenance and support?</summary>
              <p className="text-slate-700 mt-4">Yes! We offer comprehensive website maintenance packages including security updates, performance monitoring, and optimization. Our support ensures your site stays current, secure, and performing at peak efficiency.</p>
            </details>
            <details className="bg-slate-50 rounded-lg p-6 cursor-pointer hover:bg-slate-100 transition-colors">
              <summary className="font-bold text-slate-900 text-lg">Can you help my business launch an ecommerce website?</summary>
              <p className="text-slate-700 mt-4">Absolutely! We specialize in ecommerce website development with full payment processing, inventory management, and conversion optimization. Our platforms are built for sales and designed to convert browsers into buyers.</p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}

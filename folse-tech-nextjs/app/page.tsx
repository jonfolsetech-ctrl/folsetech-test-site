"use client";

import { useState, lazy, Suspense } from "react";
import { Metadata } from "next";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FeatureCard from "./components/FeatureCard";
import ProjectCard from "./components/ProjectCard";
import { Button } from "./components/ui/button";

const ExpandedFeatureModal = lazy(() => import("./components/ExpandedFeatureModal"));

const features = [
  { 
    title: "Responsive Web Design", 
    description: "Mobile-first websites optimized for every device. Built to rank higher in search and convert more visitors into customers.",
    id: "responsive-design",
    fullContent: {
      tagline: "Mobile-Optimized • Conversion-Focused • SEO-Ready",
      description: "In today's mobile-first world, your website must look perfect on phones, tablets, and desktops. Our responsive web design services deliver beautiful, fast-loading websites that provide excellent user experience and rank higher in Google. Every design is strategically built to convert visitors into customers.",
      features: [
        { title: "Mobile-First Design", description: "Optimized for the 60%+ of traffic coming from mobile devices. Your customers browse on phones—impress them." },
        { title: "SEO Optimization", description: "Built-in SEO best practices help your site rank higher in local search results and attract qualified customers." },
        { title: "Fast Loading Times", description: "Optimized performance means visitors stay engaged. Speed is critical for both user experience and search rankings." },
        { title: "Conversion Optimized", description: "Strategic design that guides visitors toward action—calls, forms, purchases. Your website should be your best salesperson." },
      ],
      perfectFor: ["Local Businesses", "Service Providers", "E-Commerce", "Professional Services", "Healthcare"],
      cta: "Get a responsive website that ranks and converts. Schedule your free consultation."
    }
  },
  { 
    title: "E-Commerce Solutions", 
    description: "Secure online stores with payment processing, inventory management, and conversion optimization built-in.",
    id: "ecommerce-solutions",
    fullContent: {
      tagline: "Sales-Focused • Secure • Scalable",
      description: "An ecommerce website opens doors to customers far beyond your local area. We build professional online stores with everything you need—secure payments, inventory management, marketing integration, and SEO optimization. Your store works 24/7 to generate revenue.",
      features: [
        { title: "Complete Store Platform", description: "Modern, scalable ecommerce technology with product management, shopping cart, and order fulfillment." },
        { title: "Secure Payments", description: "Industry-standard encryption and fraud protection. Your customers' information and transactions stay secure." },
        { title: "Inventory Management", description: "Automated tracking and management so you always have accurate stock information." },
        { title: "Marketing Integration", description: "Built-in tools for email marketing, promotions, customer retention, and sales growth." },
      ],
      perfectFor: ["Retail", "E-Commerce", "Product-Based Businesses", "Online Services", "Scaling Businesses"],
      cta: "Launch your online store and start selling online. Let's discuss your ecommerce strategy."
    }
  },
  { 
    title: "Full-Service SEO", 
    description: "Comprehensive search engine optimization to increase rankings, drive organic traffic, and grow revenue.",
    id: "seo-services",
    fullContent: {
      tagline: "Local Search • Organic Growth • Measurable Results",
      description: "Organic search is where most website traffic comes from. If your business isn't ranking for the keywords your customers search for, you're losing sales. Our comprehensive SEO services combine technical optimization, strategic content creation, and local search focus to increase rankings and drive qualified traffic.",
      features: [
        { title: "Technical SEO", description: "Optimize site speed, mobile performance, structure, and crawlability for search engine success." },
        { title: "Local Search Optimization", description: "Dominate 'near me' searches and local directories. Critical for businesses in Gonzales, Baton Rouge, Prairieville." },
        { title: "Content Strategy", description: "Create and optimize content that ranks for high-value keywords and answers customer questions." },
        { title: "Transparent Reporting", description: "Monthly reports showing rankings, traffic, conversions, and ROI. You always know what's working." },
      ],
      perfectFor: ["Local Businesses", "E-Commerce", "Service Providers", "Professional Services", "B2B"],
      cta: "Dominate local search results. Schedule your free SEO consultation."
    }
  },
  { 
    title: "Local Expertise", 
    description: "Based in Louisiana serving Gonzales, Baton Rouge, and Prairieville with deep market understanding.",
    id: "local-expertise",
    fullContent: {
      tagline: "Community-Focused • Market-Specific • Results-Driven",
      description: "We're not a distant agency—we're based in Louisiana and understand your local markets. Whether you're in Gonzales, Baton Rouge, or Prairieville, we know your competition, your customers, and what works in your area. We're invested in your local success.",
      features: [
        { title: "Local Market Knowledge", description: "Deep understanding of Gonzales, Baton Rouge, and Prairieville business landscapes and customer behavior." },
        { title: "Personalized Partnership", description: "Direct communication with experienced professionals who care about your success, not a project manager in another state." },
        { title: "Responsive Service", description: "Quick turnaround, accessible communication, and genuine investment in your business growth." },
        { title: "Proven Results", description: "Track record helping Louisiana businesses increase visibility, attract customers, and grow revenue online." },
      ],
      perfectFor: ["Local Businesses", "Service Providers", "Retailers", "Professional Services", "Growing Businesses"],
      cta: "Work with a Louisiana web design team that understands your market. Let's talk."
    }
  },
  { 
    title: "Performance & Speed", 
    description: "Lightning-fast load times and optimization for superior user experience and search rankings.",
    id: "performance-optimization",
    fullContent: {
      tagline: "Speed • Reliability • Scalability",
      description: "Website speed matters. Users abandon slow sites, and Google prioritizes fast websites in search results. Every website we build is optimized for speed and performance. We implement best practices for load times, server response, image optimization, and caching.",
      features: [
        { title: "Optimized Load Times", description: "Fast-loading pages reduce bounce rate, increase engagement, and improve search rankings." },
        { title: "Mobile Performance", description: "Optimized performance on all connection speeds so visitors have excellent experience everywhere." },
        { title: "SEO-Focused Speed", description: "Google's Core Web Vitals are ranking factors. We optimize for these metrics to boost visibility." },
        { title: "Scalable Infrastructure", description: "Built to handle traffic growth without performance degradation." },
      ],
      perfectFor: ["Websites", "E-Commerce", "SaaS", "High-Traffic Sites", "Conversion-Focused Businesses"],
      cta: "Speed up your website. Improve rankings. Convert more visitors."
    }
  },
  { 
    title: "Conversion Optimization", 
    description: "Strategic design and optimization to convert more visitors into customers and increase revenue.",
    id: "conversion-optimization",
    fullContent: {
      tagline: "Results • Revenue • Growth",
      description: "Traffic is only valuable if it converts. We design and optimize websites strategically to guide visitors toward action—whether that's calls, form submissions, or purchases. Our conversion-focused approach combines beautiful design with strategic optimization.",
      features: [
        { title: "User Experience Design", description: "Intuitive, professional design that builds trust and guides visitors toward action." },
        { title: "Strategic CTAs", description: "Well-placed calls-to-action that encourage visitors to take the next step." },
        { title: "Form Optimization", description: "Streamlined contact forms and checkout processes that minimize friction and maximize conversions." },
        { title: "Data-Driven Optimization", description: "Continuous improvement based on user behavior, analytics, and testing." },
      ],
      perfectFor: ["Service Providers", "E-Commerce", "Lead Generation", "B2B", "High-Value Transactions"],
      cta: "Turn more visitors into customers. Let's optimize for conversions."
    }
  },
];

const projects = [
  { title: "E-Commerce Platform", tech: "Responsive Design • SEO • Payment Integration", description: "Complete online store for Louisiana retailer with mobile optimization and local search ranking improvements" },
  { title: "Service Provider Website", tech: "Responsive Design • Local SEO • Lead Generation", description: "Professional website for Baton Rouge service business with increased local visibility and customer inquiries" },
  { title: "Professional Services Site", tech: "Responsive Design • Conversion Optimization", description: "High-converting website for Gonzales professional services with clear messaging and easy contact options" },
  { title: "Local Business Growth", tech: "SEO • Responsive Design • Local Optimization", description: "Integrated web and SEO solution helping Prairieville business dominate local search results" },
];

export default function Home() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-32 px-4 md:px-6 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="inline-block mb-4 px-3 md:px-4 py-2 bg-amber-500 rounded-full">
              <span className="text-slate-900 font-semibold text-xs md:text-sm">Serving Gonzales, Baton Rouge & Prairieville, Louisiana</span>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                Premium Web Design & Development for Louisiana Businesses
              </h1>
              <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
                Professional responsive web design, ecommerce solutions, and full-service SEO optimization. Help your Louisiana business attract more customers and increase online revenue.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center pt-4 md:pt-8">
              <a href="mailto:jon@folsetech.net" className="inline-flex items-center justify-center">
                <Button size="lg" className="bg-amber-500 text-slate-900 hover:bg-amber-400 font-semibold w-full sm:w-auto">Schedule Free Consultation</Button>
              </a>
              <a href="#services" className="inline-flex items-center justify-center">
                <Button variant="outline" size="lg" className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 w-full sm:w-auto">View Services</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-16 md:py-32 px-4 md:px-6 bg-white border-t-4 border-amber-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Web Design & Development Services</h2>
            <div className="h-1 w-16 md:w-20 bg-amber-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">Premium web solutions designed to help your Louisiana business establish credibility, increase visibility, and grow revenue online.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {features.map((feature) => (
              <FeatureCard 
                key={feature.title} 
                {...feature} 
                onClick={feature.fullContent ? () => setExpandedFeature(feature.id) : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Louisiana Business Success Stories</h2>
            <div className="h-1 w-16 md:w-20 bg-amber-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">Real results for businesses in Gonzales, Baton Rouge, and Prairieville. Responsive web design and SEO that increase visibility and drive growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-r from-slate-900 to-blue-900 border-t-4 border-amber-500">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to Transform Your Louisiana Business Online?</h2>
          <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto font-light">Schedule a free consultation with our team. We'll assess your current online presence, discuss your business goals, and recommend a tailored web design and SEO strategy that drives real results.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="mailto:jon@folsetech.net">
              <Button size="lg" className="bg-amber-500 text-slate-900 hover:bg-amber-400 font-semibold text-base md:text-lg px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto">Schedule Your Free Consultation</Button>
            </a>
            <a href="tel:+1-225-000-0000">
              <Button variant="outline" size="lg" className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 font-semibold text-base md:text-lg px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto">Call Us Today</Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Expanded Feature Modal */}
      {expandedFeature && (
        <Suspense fallback={null}>
          <ExpandedFeatureModal
            isOpen={true}
            onClose={() => setExpandedFeature(null)}
            title={features.find(f => f.id === expandedFeature)?.title || ""}
            content={features.find(f => f.id === expandedFeature)?.fullContent || { tagline: "", description: "", features: [], perfectFor: [], cta: "" }}
          />
        </Suspense>
      )}
    </main>
  );
}
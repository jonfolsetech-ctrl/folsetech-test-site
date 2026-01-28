import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Responsive Web Design Services | Folse Tech",
  description: "Professional responsive web design for businesses in Gonzales, Baton Rouge, and Prairieville, Louisiana. Mobile-first design that converts visitors into customers.",
  keywords: ["responsive web design", "mobile-friendly websites", "web design services", "Gonzales web design", "Baton Rouge web design", "Prairieville web design"],
  openGraph: {
    title: "Responsive Web Design Services | Folse Tech",
    description: "Professional responsive web design for Louisiana businesses",
  },
};

export default function ResponsiveWebDesignPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "#services" },
    { label: "Responsive Web Design", url: "/services/responsive-web-design" }
  ];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />
      
      {/* Hero Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-brand-navy to-brand-navy-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight">
            Professional Responsive Web Design
          </h1>
          <p className="text-lg md:text-xl text-brand-cyan-50">
            Mobile-first websites optimized for every device. Built to rank, built to convert.
          </p>
          <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-brand-gold-500 text-slate-900 font-semibold rounded-lg hover:bg-brand-gold-400 transition-colors">
            Schedule Free Consultation
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 md:px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-slate-100 mb-6">Why Responsive Design Matters</h2>
          <p className="text-slate-300 mb-6 text-lg leading-relaxed">
            Over 60% of web traffic comes from mobile devices. If your website isn't mobile-friendly, you're losing customers. Our responsive web design services ensure your site looks perfect and functions flawlessly on desktops, tablets, and smartphones.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Our Responsive Web Design Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-brand-navy-800 rounded-lg p-6 border border-brand-navy-700">
              <h3 className="text-xl font-bold text-slate-100 mb-3">Mobile-First Design</h3>
              <p className="text-slate-300">We start with mobile and scale up. This ensures optimal performance on devices where most of your customers are browsing.</p>
            </div>
            <div className="bg-brand-navy-800 rounded-lg p-6 border border-brand-navy-700">
              <h3 className="text-xl font-bold text-slate-100 mb-3">Adaptive Layouts</h3>
              <p className="text-slate-300">Intelligent layouts that adapt to any screen size, maintaining usability and aesthetics across all devices.</p>
            </div>
            <div className="bg-brand-navy-800 rounded-lg p-6 border border-brand-navy-700">
              <h3 className="text-xl font-bold text-slate-100 mb-3">SEO Optimization</h3>
              <p className="text-slate-300">Built-in SEO best practices ensure your responsive site ranks higher in search results and attracts qualified traffic.</p>
            </div>
            <div className="bg-brand-navy-800 rounded-lg p-6 border border-brand-navy-700">
              <h3 className="text-xl font-bold text-slate-100 mb-3">Performance Focused</h3>
              <p className="text-slate-300">Fast loading times, optimized images, and clean code deliver excellent user experience on any connection speed.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Key Features of Our Responsive Websites</h2>
          <ul className="space-y-4 my-8">
            <li className="flex gap-4 items-start">
              <span className="text-brand-gold-500 font-bold text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-slate-100">Fluid Typography:</strong> Text automatically scales perfectly for readability on any device
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-brand-gold-500 font-bold text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-slate-100">Flexible Images:</strong> Images adjust smoothly to fit any screen size without quality loss
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-brand-gold-500 font-bold text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-slate-100">Touch-Friendly Navigation:</strong> Easy navigation optimized for touch screens and mouse interactions
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-brand-gold-500 font-bold text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-slate-100">Fast Load Times:</strong> Optimized performance ensures visitors stay engaged, not frustrated
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-brand-gold-500 font-bold text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-slate-100">Cross-Browser Compatibility:</strong> Works flawlessly across all major browsers and devices
              </div>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Industries We Serve</h2>
          <p className="text-slate-700 mb-4">Our responsive web design expertise spans multiple industries:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <li className="flex items-center gap-3"><span className="text-brand-gold-500">◆</span> E-Commerce & Retail</li>
            <li className="flex items-center gap-3"><span className="text-brand-gold-500">◆</span> Professional Services</li>
            <li className="flex items-center gap-3"><span className="text-brand-gold-500">◆</span> Real Estate</li>
            <li className="flex items-center gap-3"><span className="text-amber-500">◆</span> Healthcare & Medical</li>
            <li className="flex items-center gap-3"><span className="text-amber-500">◆</span> Hospitality & Tourism</li>
            <li className="flex items-center gap-3"><span className="text-amber-500">◆</span> Manufacturing & B2B</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Responsive Design for Local Businesses</h2>
          <p className="text-slate-700 mb-4">
            For businesses in Gonzales, Baton Rouge, and Prairieville, Louisiana, responsive design is essential:
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Mobile Search Dominance:</strong> Local searches happen on mobile devices. Your responsive website needs to impress mobile users who are ready to buy.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Local SEO Ranking:</strong> Google prioritizes mobile-friendly websites in local search results. A responsive design improves your rankings for "near me" searches.
          </p>
          <p className="text-slate-700 mb-4">
            <strong>Call & Contact Optimization:</strong> Easy-to-use contact forms, click-to-call buttons, and clear location information on mobile drive conversions.
          </p>
          <p className="text-slate-700">
            <strong>Competitive Advantage:</strong> If competitors' sites aren't mobile-optimized, you'll stand out and capture their frustrated customers.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-brand-navy-800 rounded-xl p-8 md:p-12 border-2 border-brand-gold-500 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
            Ready for a Responsive Website That Converts?
          </h3>
          <p className="text-slate-300 mb-8 text-lg">
            Schedule a free consultation to discuss your responsive web design needs and learn how we can help your business.
          </p>
          <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-brand-gold-500 text-slate-900 font-semibold rounded-lg hover:bg-brand-gold-400 transition-colors text-lg">
            Schedule Your Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

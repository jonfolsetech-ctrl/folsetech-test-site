import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "E-Commerce Website Development | Folse Tech",
  description: "Professional ecommerce website design and development for businesses in Baton Rouge, Gonzales, and Prairieville, Louisiana. Secure online stores that drive sales.",
  keywords: ["ecommerce website design", "online store development", "ecommerce solutions", "Baton Rouge ecommerce", "Gonzales ecommerce", "Prairieville ecommerce", "online shopping platform"],
  openGraph: {
    title: "E-Commerce Website Development | Folse Tech",
    description: "Professional ecommerce website design and development for Louisiana businesses",
  },
};

export default function EcommercePage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "#services" },
    { label: "E-Commerce Solutions", url: "/services/ecommerce-website-development" }
  ];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />
      
      {/* Hero Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            E-Commerce Website Development
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Profitable online stores built to convert shoppers into customers. Complete ecommerce solutions for your business.
          </p>
          <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors">
            Launch Your Online Store
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 md:px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Power of Ecommerce</h2>
          <p className="text-slate-700 mb-6 text-lg leading-relaxed">
            E-commerce represents a massive opportunity for businesses ready to reach customers beyond their local area. An ecommerce website Baton Rouge LA, Gonzales, and Prairieville businesses can expand their market, increase revenue, and build a scalable business model. We help companies launch professional online stores that drive sales.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Complete Ecommerce Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Store Platform Setup</h3>
              <p className="text-slate-700">Modern, scalable ecommerce platforms built with technology that grows with your business.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Secure Payments</h3>
              <p className="text-slate-700">Industry-standard payment processing with encryption and fraud protection for customer confidence.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Inventory Management</h3>
              <p className="text-slate-700">Automated inventory tracking, stock management, and order fulfillment integration.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Conversion Optimization</h3>
              <p className="text-slate-700">Strategic design and functionality to reduce cart abandonment and maximize sales.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Analytics & Reporting</h3>
              <p className="text-slate-700">Detailed insights into customer behavior, sales performance, and opportunities for growth.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Marketing Integration</h3>
              <p className="text-slate-700">Built-in tools for email marketing, promotions, and customer retention strategies.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Key Ecommerce Features</h2>
          <ul className="space-y-4 my-8">
            <li className="flex gap-4 items-start">
              <span className="text-amber-500 font-bold text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-slate-900">Product Catalog Management:</strong> Easy-to-use tools to manage thousands of products with descriptions, pricing, and images
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500 font-bold text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-slate-900">Shopping Cart & Checkout:</strong> Streamlined checkout process that minimizes cart abandonment and increases conversions
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500 font-bold text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-slate-900">Multiple Payment Options:</strong> Credit cards, digital wallets, and alternative payment methods for customer convenience
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500 font-bold text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-slate-900">Customer Accounts:</strong> Secure login, order history, and personalized recommendations for returning customers
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500 font-bold text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-slate-900">Shipping Integration:</strong> Automated shipping calculation, tracking, and carrier integration
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500 font-bold text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-slate-900">SEO Optimization:</strong> Built-in features to help your products rank in search engines
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500 font-bold text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-slate-900">Mobile Responsive:</strong> Perfect shopping experience on phones, tablets, and desktops
              </div>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Ecommerce Website Development Process</h2>
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-xl p-8 my-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900">1</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Discovery & Strategy</h4>
                  <p className="text-blue-100">We understand your business model, target customers, and sales goals to create the right ecommerce strategy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900">2</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Design & Planning</h4>
                  <p className="text-blue-100">We design a user experience optimized for conversions, with intuitive navigation and compelling product presentation.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900">3</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Development & Integration</h4>
                  <p className="text-blue-100">We build your ecommerce platform with secure payment processing, inventory management, and marketing tools integrated.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900">4</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Testing & Optimization</h4>
                  <p className="text-blue-100">Thorough testing ensures everything works perfectly. We optimize for speed, security, and conversion performance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900">5</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Launch & Support</h4>
                  <p className="text-blue-100">We handle the launch and provide ongoing support, monitoring, and optimization to maximize your sales.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Why Choose Folse Tech for Ecommerce?</h2>
          <ul className="space-y-4 my-8">
            <li className="flex gap-4 items-start">
              <span className="text-amber-500">◆</span>
              <span className="text-slate-700"><strong>Conversion-Focused Design:</strong> We build stores that sell, not just look pretty</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500">◆</span>
              <span className="text-slate-700"><strong>Security First:</strong> Industry-standard encryption and compliance for customer data protection</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500">◆</span>
              <span className="text-slate-700"><strong>Scalability:</strong> Built to grow from launch to thousands of products and customers</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500">◆</span>
              <span className="text-slate-700"><strong>SEO Optimized:</strong> Help customers find your products through organic search</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-amber-500">◆</span>
              <span className="text-slate-700"><strong>Local Expertise:</strong> Understanding Baton Rouge, Gonzales, and Prairieville markets</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-amber-50 rounded-xl p-8 md:p-12 border-2 border-amber-500 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Ready to Launch Your Ecommerce Website?
          </h3>
          <p className="text-slate-700 mb-8 text-lg">
            Let's discuss your products, business goals, and ecommerce strategy. Schedule a free consultation today.
          </p>
          <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-lg">
            Schedule Your Ecommerce Consultation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

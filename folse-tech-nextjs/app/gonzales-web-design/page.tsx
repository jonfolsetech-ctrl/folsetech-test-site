import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Web Design Gonzales LA | Professional Responsive Design Services",
  description: "Premium web design Gonzales LA services for local businesses. Responsive websites, ecommerce solutions, and SEO optimization. Free consultation for Gonzales area businesses.",
  keywords: ["web design Gonzales LA", "Gonzales LA web design company", "responsive web design Gonzales Louisiana", "ecommerce web design Gonzales LA", "SEO services Gonzales", "professional web design 70737"],
  openGraph: {
    title: "Web Design Gonzales LA | Professional Responsive Design",
    description: "Trusted web design services for Gonzales businesses - responsive websites, ecommerce, and SEO",
    url: "https://folsetech.net/gonzales-web-design",
  },
};

export default function GonzalesWebDesignPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/#services" },
    { label: "Web Design Gonzales LA", url: "/gonzales-web-design" }
  ];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero Section */}
      <section className="px-4 md:px-6 py-16 md:py-28 bg-gradient-to-b from-brand-navy to-brand-navy-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 leading-tight">
              Web Design Gonzales LA — Professional Responsive Websites for Local Businesses
            </h1>
            <p className="text-lg md:text-xl text-brand-cyan-50 max-w-3xl mx-auto leading-relaxed">
              Folse Tech delivers premium web design Gonzales LA services to help your business establish credibility, attract customers, and grow revenue online. We specialize in responsive websites, ecommerce solutions, and full-service SEO optimization for companies throughout the 70737 area and surrounding regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-brand-gold-500 text-slate-900 font-semibold rounded-lg hover:bg-brand-gold-600 transition-colors">
                Schedule Free Consultation
              </a>
              <a href="#services" className="inline-block px-8 py-3 border-2 border-brand-gold-500 text-brand-gold-500 font-semibold rounded-lg hover:bg-brand-gold-500 hover:text-slate-900 transition-colors">
                View Web Design Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Web Design */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-brand-navy-800 border-t-4 border-brand-gold-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 text-center">
            Why Choose Our Web Design Services in Gonzales?
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
          
          <p className="text-lg text-slate-700 mb-12 leading-relaxed">
            When you need professional web design Gonzales LA businesses can trust, Folse Tech is your local partner. We understand the Gonzales business community, the competitive landscape, and what works to attract and convert customers in your market. Our responsive web design expertise has helped numerous companies throughout the 70737 area establish powerful online presence and achieve measurable growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-navy-800 rounded-lg p-6 border border-brand-navy-700 hover:border-brand-gold-500 transition-all">
              <h3 className="text-xl font-bold text-slate-100 mb-3">Local Expertise</h3>
              <p className="text-slate-300">Based in Louisiana with deep understanding of the Gonzales market, local competition, and what drives results for businesses in your area.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Responsive Design</h3>
              <p className="text-slate-700">Every website we create is mobile-first, fully responsive, and optimized for every device—ensuring your customers have an excellent experience.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">SEO Optimized</h3>
              <p className="text-slate-700">Built-in local SEO optimization helps your Gonzales business rank higher in Google search results and attract customers actively seeking your services.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Conversion Focused</h3>
              <p className="text-slate-700">Strategic design that guides visitors toward action—calls, contact forms, purchases. Your website should be your best salesperson.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ecommerce Solutions</h3>
              <p className="text-slate-700">Launch secure online stores with payment processing, inventory management, and conversion optimization built specifically for sales.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Responsive Service</h3>
              <p className="text-slate-700">Direct communication, quick turnaround, and genuine partnership. We're invested in your Gonzales business success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design Services */}
      <section id="services" className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Professional Web Design & Development Services
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
          
          <p className="text-lg text-slate-700 mb-12 leading-relaxed">
            We offer comprehensive web design solutions tailored specifically for Gonzales businesses. From responsive web design to complete ecommerce platforms and SEO services, we provide everything needed to establish and grow your online presence.
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Responsive Web Design for Gonzales Businesses</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Your website is often customers' first impression. We create beautiful, professional responsive websites that work flawlessly on phones, tablets, and desktops. Every design is strategically built to impress visitors and convert them into customers.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Mobile-First Design:</strong> Optimized for the 60%+ of traffic coming from mobile devices</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Fast Loading Times:</strong> Optimized performance for better user experience and search rankings</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-brand-gold-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-300"><strong>Professional Appearance:</strong> Beautiful, modern design that builds trust and reflects your brand quality</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-brand-gold-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-300"><strong>SEO Built-In:</strong> Search engine optimized to help you rank in Google for local keywords</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-navy-800 rounded-lg p-8 border border-brand-navy-700 hover:border-brand-gold-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Ecommerce Web Design Gonzales LA</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Ready to sell online? Our ecommerce web design solutions help Gonzales businesses launch professional online stores that convert shoppers into customers. We handle everything from platform setup to payment processing to conversion optimization.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Secure Payment Processing:</strong> Industry-standard encryption and fraud protection</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Product Catalog Management:</strong> Easy-to-use tools to manage inventory and pricing</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Conversion Optimization:</strong> Strategic design to reduce cart abandonment and increase sales</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Marketing Integration:</strong> Built-in email marketing and promotional tools</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-navy-800 rounded-lg p-8 border border-brand-navy-700 hover:border-brand-gold-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">SEO Services for Gonzales LA Businesses</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                A beautiful website isn't enough—customers need to find you. Our comprehensive SEO services help your Gonzales business dominate local search results, attract qualified traffic, and grow revenue through organic search.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Local SEO Optimization:</strong> Rank for "web design Gonzales LA" and related local searches</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Keyword Research & Targeting:</strong> Strategic targeting of high-value local keywords</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Content Optimization:</strong> Keyword-rich, valuable content that ranks and converts</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Monthly Reporting:</strong> Transparent tracking of rankings, traffic, and results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-white border-t-4 border-amber-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Web Design Services for Gonzales LA and Surrounding Areas
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            We proudly serve businesses throughout Gonzales, Louisiana (70737 zip code) and surrounding communities including Baton Rouge and Prairieville. Whether you're in downtown Gonzales or the surrounding areas, we provide professional web design services tailored to your local market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-brand-navy-800 rounded-lg p-6 border border-brand-navy-700">
              <h3 className="text-lg font-bold text-slate-100 mb-3">Gonzales, LA (70737)</h3>
              <p className="text-slate-300">Professional web design services for Gonzales businesses including responsive design, ecommerce, and SEO optimization.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Baton Rouge, LA</h3>
              <p className="text-slate-700">Comprehensive web design and development for Baton Rouge companies seeking professional online presence and growth.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Prairieville, LA</h3>
              <p className="text-slate-700">Strategic web design solutions for Prairieville businesses ready to establish credibility and attract customers online.</p>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            No matter where your Gonzales business is located, we provide the same premium web design Gonzales LA services with local expertise, responsive design, and proven results. Our commitment to excellence means your website will help you compete and win in your local market.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Our Web Design Process
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
          
          <div className="bg-gradient-to-r from-brand-navy to-brand-cyan-400 text-slate-100 rounded-xl p-8 md:p-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gold-500 flex items-center justify-center font-bold text-slate-900 text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Discovery & Strategy</h3>
                  <p className="text-brand-cyan-50">We understand your business, goals, target customers, and competitive landscape to create the right web design strategy for Gonzales.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Design & Planning</h3>
                  <p className="text-blue-100">We create wireframes and design mockups showing exactly how your responsive website will look and function across all devices.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Development & Integration</h3>
                  <p className="text-blue-100">Our developers build your website using modern frameworks, integrate necessary tools, and optimize for speed and SEO.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Testing & Optimization</h3>
                  <p className="text-blue-100">Thorough testing across devices and browsers ensures everything works perfectly. We optimize for performance, security, and conversions.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Launch & Support</h3>
                  <p className="text-blue-100">We handle the launch and provide ongoing support, monitoring, and optimization to maximize your results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-white border-t-4 border-amber-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready for Professional Web Design in Gonzales?
          </h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Let's schedule a free consultation to discuss your web design needs, assess your current online presence, and recommend the perfect solution for your Gonzales business. No obligation, just expert advice on growing your business online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-brand-gold-500 text-slate-900 font-semibold rounded-lg hover:bg-brand-gold-400 transition-colors text-lg">
              Schedule Free Consultation
            </a>
            <a href="tel:+1-225-000-0000" className="inline-block px-8 py-3 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-colors text-lg">
              Call Us Today
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions About Web Design in Gonzales
          </h2>
          
          <div className="space-y-4">
            <details className="bg-brand-navy-800 rounded-lg p-6 border border-brand-navy-700 cursor-pointer hover:border-brand-gold-500 transition-all">
              <summary className="font-bold text-slate-100 text-lg">How much does responsive web design cost in Gonzales?</summary>
              <p className="text-slate-300 mt-4">Responsive web design costs vary based on complexity, features, and functionality. A custom responsive website for a Gonzales business typically ranges from $3,000 to $10,000+. We offer flexible pricing options and transparent quotes. Schedule a free consultation for a personalized estimate.</p>
            </details>

            <details className="bg-white rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">How long does it take to build a website in Gonzales?</summary>
              <p className="text-slate-700 mt-4">Most responsive websites take 4-8 weeks from start to finish, depending on complexity and content readiness. Ecommerce sites typically take 8-12 weeks. We prioritize quality over speed and maintain clear communication throughout the process.</p>
            </details>

            <details className="bg-white rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">Will web design help my Gonzales business rank in Google?</summary>
              <p className="text-slate-700 mt-4">Yes! Our responsive web design includes built-in SEO optimization specifically targeting Gonzales and local keywords. We optimize site speed, mobile performance, structure, and content to help you rank higher in Google search results for "web design Gonzales LA" and related searches.</p>
            </details>

            <details className="bg-white rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">Can you help with ecommerce web design in Gonzales?</summary>
              <p className="text-slate-700 mt-4">Absolutely! We specialize in ecommerce web design for Gonzales businesses. We handle everything from platform selection and product setup to payment processing integration, inventory management, and conversion optimization.</p>
            </details>

            <details className="bg-white rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">What makes your web design different from other Gonzales designers?</summary>
              <p className="text-slate-700 mt-4">We combine professional responsive design with proven SEO expertise and local market knowledge. We're not just building beautiful websites—we're building websites that rank in Google, convert visitors into customers, and drive real business results for Gonzales companies.</p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

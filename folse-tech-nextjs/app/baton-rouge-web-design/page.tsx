import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Web Design Baton Rouge LA | Premium Responsive Website Services",
  description: "Professional web design Baton Rouge LA for local businesses. Responsive websites, ecommerce development, and SEO services. Free consultation for Baton Rouge area companies.",
  keywords: ["web design Baton Rouge LA", "Baton Rouge web designers", "professional website development Baton Rouge", "ecommerce web design Baton Rouge LA", "SEO experts Baton Rouge Louisiana", "responsive web design Baton Rouge"],
  openGraph: {
    title: "Web Design Baton Rouge LA | Premium Responsive Websites",
    description: "Professional web design and development services for Baton Rouge businesses",
    url: "https://folsetech.net/baton-rouge-web-design",
  },
};

export default function BatonRougeWebDesignPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/#services" },
    { label: "Web Design Baton Rouge LA", url: "/baton-rouge-web-design" }
  ];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero Section */}
      <section className="px-4 md:px-6 py-16 md:py-28 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 leading-tight">
              Web Design Baton Rouge LA — Premium Responsive Websites for Growing Businesses
            </h1>
            <p className="text-lg md:text-xl text-brand-cyan-50 max-w-3xl mx-auto leading-relaxed">
              Folse Tech specializes in professional web design Baton Rouge LA for ambitious businesses ready to establish powerful online presence. We deliver responsive websites, ecommerce platforms, and comprehensive SEO services that increase visibility, attract qualified customers, and drive measurable business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-brand-gold-500 text-slate-900 font-semibold rounded-lg hover:bg-brand-gold-400 transition-colors">
                Schedule Free Consultation
              </a>
              <a href="#services" className="inline-block px-8 py-3 border-2 border-brand-gold-500 text-brand-gold-500 font-semibold rounded-lg hover:bg-brand-gold-500 hover:text-slate-900 transition-colors">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-brand-navy-800 border-t-4 border-brand-gold-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 text-center">
            Why Baton Rouge Businesses Choose Our Web Design Services
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
          
          <p className="text-lg text-slate-700 mb-12 leading-relaxed">
            Finding the right web designer in Baton Rouge requires more than just someone who can build a website. You need a partner who understands your business, your market, and what drives results. Folse Tech brings extensive experience delivering professional web design Baton Rouge LA companies trust. We've helped local businesses establish credibility, increase visibility, and grow revenue through strategic web design and digital solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-navy-800 rounded-lg p-6 border border-brand-navy-700 hover:border-brand-gold-500 transition-all">
              <h3 className="text-xl font-bold text-slate-100 mb-3">Experience & Expertise</h3>
              <p className="text-slate-300">Years of experience designing responsive websites for diverse Baton Rouge industries. We know what works and what doesn't.</p>
            </div>
            <div className="bg-brand-navy-800 rounded-lg p-6 border border-brand-navy-700 hover:border-brand-gold-500 transition-all">
              <h3 className="text-xl font-bold text-slate-100 mb-3">Strategic Design Approach</h3>
              <p className="text-slate-300">Every design decision is made with your business goals in mind. We create websites that rank, convert, and grow your bottom line.</p>
            </div>
            <div className="bg-brand-navy-800 rounded-lg p-6 border border-brand-navy-700 hover:border-brand-gold-500 transition-all">
              <h3 className="text-xl font-bold text-slate-100 mb-3">Responsive Web Design</h3>
              <p className="text-slate-300">Every website we create is mobile-first and fully responsive. Perfect experience on every device, every time.</p>
            </div>
            <div className="bg-brand-navy-800 rounded-lg p-6 border border-brand-navy-700 hover:border-brand-gold-500 transition-all">
              <h3 className="text-xl font-bold text-slate-100 mb-3">Proven Results</h3>
              <p className="text-slate-300">Our Baton Rouge clients see increased rankings, more qualified traffic, and higher conversion rates from their websites.</p>
            </div>
            <div className="bg-brand-navy-800 rounded-lg p-6 border border-brand-navy-700 hover:border-brand-gold-500 transition-all">
              <h3 className="text-xl font-bold text-slate-100 mb-3">Complete Solutions</h3>
              <p className="text-slate-300">From responsive design to ecommerce to SEO—we provide comprehensive services under one trusted partnership.</p>
            </div>
            <div className="bg-brand-navy-800 rounded-lg p-6 border border-brand-navy-700 hover:border-brand-gold-500 transition-all">
              <h3 className="text-xl font-bold text-slate-100 mb-3">Local Understanding</h3>
              <p className="text-slate-300">Based in Louisiana with deep understanding of Baton Rouge market dynamics and what resonates with local customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Comprehensive Web Design & Development Services for Baton Rouge
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
          
          <p className="text-lg text-slate-700 mb-12 leading-relaxed">
            Our professional web design Baton Rouge LA services cover everything your business needs to succeed online. Whether you need a simple responsive website, a sophisticated ecommerce platform, or full-service SEO, we deliver premium solutions that drive real results.
          </p>

          <div className="space-y-8">
            <div className="bg-brand-navy-800 rounded-lg p-8 border border-brand-navy-700 hover:border-brand-gold-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Professional Website Development in Baton Rouge</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                We create stunning, high-performance websites that represent your Baton Rouge business professionally and convert visitors into customers. Our responsive web design approach ensures your website looks and functions perfectly on every device.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-brand-gold-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-300"><strong>Modern Responsive Design:</strong> Mobile-first approach optimized for phones, tablets, and desktops</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-brand-gold-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-300"><strong>Professional Appearance:</strong> Beautiful, modern design that builds trust and reflects your brand quality</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-brand-gold-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-300"><strong>Conversion Optimization:</strong> Strategic design that guides visitors toward action</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-brand-gold-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-300"><strong>SEO Foundation:</strong> Built-in optimization to help you rank in Google for Baton Rouge keywords</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-navy-800 rounded-lg p-8 border border-brand-navy-700 hover:border-brand-gold-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">Ecommerce Web Design Baton Rouge LA</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Launch a professional online store that sells 24/7. Our ecommerce web design expertise helps Baton Rouge businesses go online with secure platforms, seamless shopping experiences, and built-in sales optimization.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Complete Platform Setup:</strong> Professional ecommerce infrastructure built for growth</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Secure Payment Processing:</strong> Industry-standard encryption and fraud protection</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Inventory Management:</strong> Automated tracking and order fulfillment systems</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Sales Optimization:</strong> Conversion-focused design to maximize revenue</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-navy-800 rounded-lg p-8 border border-brand-navy-700 hover:border-brand-gold-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">SEO Experts in Baton Rouge Louisiana</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                A beautiful website means nothing if customers can't find you. As SEO experts in Baton Rouge Louisiana, we implement comprehensive strategies to increase your visibility in Google search results and attract qualified local traffic.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Local SEO Optimization:</strong> Dominate "web design Baton Rouge LA" and related searches</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Keyword Research & Strategy:</strong> Target high-value local keywords your customers search</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Technical SEO:</strong> Optimize site speed, mobile performance, and search indexing</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Monthly Reporting:</strong> Transparent tracking of rankings, traffic, and ROI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-white border-t-4 border-amber-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Serving Baton Rouge and Surrounding Louisiana Communities
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            While we specialize in professional web design Baton Rouge LA, we also serve businesses throughout surrounding communities. Whether your company is in downtown Baton Rouge, Gonzales, Prairieville, or other Louisiana areas, we bring the same premium web design expertise and local market understanding.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Baton Rouge</h3>
              <p className="text-slate-700">Louisiana's capital city. We serve diverse Baton Rouge businesses seeking professional web design, ecommerce, and SEO expertise.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Gonzales, LA</h3>
              <p className="text-slate-700">Nearby Gonzales businesses benefit from our responsive web design and local SEO services tailored to their market.</p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Prairieville, LA</h3>
              <p className="text-slate-700">Growing Prairieville area businesses partner with us for professional websites and digital growth strategies.</p>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Our web design Baton Rouge LA services combine professional design excellence with proven SEO expertise. We understand the Louisiana market and create websites specifically designed to help local businesses compete and win online.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Our Professional Web Design Process
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
          
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-xl p-8 md:p-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gold-500 flex items-center justify-center font-bold text-slate-900 text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Consultation & Discovery</h3>
                  <p className="text-blue-100">We meet with you to understand your business, goals, target audience, and competitive landscape. This foundation guides all design decisions.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gold-500 flex items-center justify-center font-bold text-slate-900 text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategy & Planning</h3>
                  <p className="text-blue-100">We develop a web design strategy including site structure, user experience flow, and SEO approach specific to your Baton Rouge market.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Design & Development</h3>
                  <p className="text-blue-100">Our design team creates beautiful mockups. Our developers build responsive, fast-loading code with SEO optimization built-in.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Testing & Optimization</h3>
                  <p className="text-blue-100">Comprehensive testing across devices ensures perfect functionality. We optimize for speed, security, conversions, and search performance.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Launch & Growth</h3>
                  <p className="text-blue-100">We handle the launch and provide ongoing monitoring, optimization, and support to ensure your Baton Rouge website succeeds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Authority */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-white border-t-4 border-amber-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Why Baton Rouge Businesses Trust Folse Tech
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold">✓</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Local Expertise</h3>
                <p className="text-slate-700">Based in Louisiana with deep understanding of Baton Rouge market dynamics and what drives success for local businesses.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold">✓</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Proven Results</h3>
                <p className="text-slate-700">Track record of helping Baton Rouge companies increase visibility, rankings, and revenue through professional web design.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold">✓</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Professional Standards</h3>
                <p className="text-slate-700">We adhere to industry best practices, modern web standards, and Google's E-E-A-T principles for authority and trustworthiness.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold">✓</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Transparent Partnership</h3>
                <p className="text-slate-700">Clear communication, straightforward pricing, regular reporting, and genuine investment in your success.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold">✓</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Complete Solutions</h3>
                <p className="text-slate-700">From responsive design to ecommerce to SEO—everything you need under one trusted partnership.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold">✓</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Ongoing Support</h3>
                <p className="text-slate-700">Continued maintenance, monitoring, optimization, and support to ensure long-term success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-white border-t-4 border-amber-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Transform Your Baton Rouge Business With Professional Web Design
          </h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Schedule a free consultation to discuss your web design needs, review your current online presence, and learn how professional web design Baton Rouge LA can drive growth for your business. No obligation—just expert advice from experienced designers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-lg">
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
            Frequently Asked Questions About Web Design in Baton Rouge
          </h2>
          
          <div className="space-y-4">
            <details className="bg-brand-navy-800 rounded-lg p-6 border border-brand-navy-700 cursor-pointer hover:border-brand-gold-500 transition-all">
              <summary className="font-bold text-slate-100 text-lg">What is responsive web design and why does my Baton Rouge business need it?</summary>
              <p className="text-slate-300 mt-4">Responsive web design means your website automatically adjusts to look perfect on phones, tablets, and desktops. It's essential because over 60% of web traffic comes from mobile devices. Google also prioritizes mobile-friendly websites in search results. If your Baton Rouge business website isn't responsive, you're losing customers and rankings.</p>
            </details>

            <details className="bg-white rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">How much does professional web design cost in Baton Rouge?</summary>
              <p className="text-slate-700 mt-4">Web design costs vary based on complexity, features, and functionality. A custom responsive website for a Baton Rouge business typically ranges from $3,000 to $15,000+. Ecommerce sites cost more. We offer flexible pricing and transparent quotes based on your specific needs.</p>
            </details>

            <details className="bg-white rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">Will professional web design help my Baton Rouge company rank in Google?</summary>
              <p className="text-slate-700 mt-4">Yes! Our professional web design includes built-in SEO optimization targeting Baton Rouge keywords. We optimize site speed, mobile performance, structure, and content to help you rank higher for "web design Baton Rouge LA" and related searches. Combined with ongoing SEO services, this drives long-term organic traffic.</p>
            </details>

            <details className="bg-white rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">Can you build an ecommerce website for my Baton Rouge business?</summary>
              <p className="text-slate-700 mt-4">Absolutely. We specialize in ecommerce web design for Baton Rouge businesses. We handle everything—platform selection, product setup, payment processing, inventory management, and conversion optimization. Your online store will work 24/7 to generate revenue.</p>
            </details>

            <details className="bg-white rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">How long does web design take for a Baton Rouge company?</summary>
              <p className="text-slate-700 mt-4">Most responsive websites take 4-8 weeks from discovery to launch. Ecommerce sites typically take 8-12 weeks. The timeline depends on complexity and content readiness. We maintain clear communication and realistic timelines throughout the process.</p>
            </details>

            <details className="bg-white rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">What makes your web design different from other Baton Rouge designers?</summary>
              <p className="text-slate-700 mt-4">We combine professional responsive design with proven SEO expertise and genuine understanding of the Baton Rouge market. We don't just build beautiful websites—we build websites that rank in Google, convert visitors into customers, and deliver measurable business results.</p>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

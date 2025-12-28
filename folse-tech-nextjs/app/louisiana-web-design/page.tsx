import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Professional Web Design for Baton Rouge, Gonzales & the River Parishes LA",
  description: "Expert web design, ecommerce, and SEO services across Baton Rouge, Gonzales, Prairieville, and Louisiana's River Parishes. Responsive websites that rank and convert. Free consultation.",
  keywords: [
    "web design Gonzales LA",
    "web design Baton Rouge LA",
    "web design Prairieville LA",
    "River Parishes web design",
    "website design New Orleans to Baton Rouge",
    "SEO services Gonzales LA",
    "ecommerce websites Baton Rouge LA",
    "digital marketing River Parishes",
    "responsive web design Louisiana",
    "Ascension Parish web design",
    "St. James Parish website design",
    "professional web designer Louisiana"
  ],
  openGraph: {
    title: "Web Design & Digital Marketing for South Louisiana Businesses",
    description: "Professional web design serving Baton Rouge, Gonzales, Prairieville, and the River Parishes",
    url: "https://folsetech.net/louisiana-web-design",
  },
};

export default function LouisianaWebDesignPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/#services" },
    { label: "Louisiana Web Design", url: "/louisiana-web-design" }
  ];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbs} />

      {/* Hero Section */}
      <section className="px-4 md:px-6 py-16 md:py-28 bg-gradient-to-b from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Professional Web Design for Baton Rouge, Gonzales & the River Parishes
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Responsive web design, ecommerce solutions, and comprehensive SEO services for ambitious businesses across South Louisiana. From Gonzales to Baton Rouge, serving the entire River Parishes region and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors">
                Schedule Free Consultation
              </a>
              <a href="#services" className="inline-block px-8 py-3 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-colors">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-white border-t-4 border-amber-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Serving Businesses from New Orleans to Baton Rouge
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Folse Tech is your trusted web design and digital marketing partner for South Louisiana. While based in Gonzales, we proudly serve businesses across the entire region—from Ascension Parish to Baton Rouge, throughout the River Parishes, and beyond. Whether you're in Gonzales, Prairieville, Baton Rouge, or any surrounding parish, we have the expertise to establish your online presence and drive measurable growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Primary Service Areas</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2"><span className="text-amber-500 font-bold">✓</span> <strong>Gonzales, LA</strong> - Ascension Parish</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">✓</span> <strong>Baton Rouge, LA</strong> - East Baton Rouge Parish</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">✓</span> <strong>Prairieville, LA</strong> - Ascension Parish</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">✓</span> <strong>Denham Springs, LA</strong> - Livingston Parish</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">River Parishes Region</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-2"><span className="text-amber-500 font-bold">✓</span> St. James Parish</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">✓</span> St. John Parish</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">✓</span> St. Charles Parish</li>
                <li className="flex gap-2"><span className="text-amber-500 font-bold">✓</span> Iberville Parish & Beyond</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Web Design & Digital Marketing Services
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>

          {/* Service 1: Responsive Web Design */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Responsive Web Design in Baton Rouge & Gonzales</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Your website is often the first impression potential customers have of your business. Whether you're in Baton Rouge, Gonzales, Prairieville, or throughout the River Parishes, our professional web design services deliver stunning, high-performance websites optimized for every device.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Mobile-First Design:</strong> Over 60% of web traffic comes from mobile devices. We optimize for phones first, ensuring perfect experience across all screen sizes.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>SEO Foundation:</strong> Built-in search engine optimization helps your Gonzales web design or Baton Rouge website rank higher in Google for local keywords.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Fast & Secure:</strong> Speed impacts both user experience and rankings. We optimize performance and implement security best practices.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Conversion Optimized:</strong> Strategic design that guides visitors toward action—calls, emails, purchases.</span>
              </li>
            </ul>
          </div>

          {/* Service 2: Ecommerce */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ecommerce Websites for Baton Rouge & South Louisiana</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Expand your market beyond local Baton Rouge and Gonzales customers. Our ecommerce website experts build professional online stores that work 24/7, accepting payments, managing inventory, and generating revenue while you sleep.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Complete Platform:</strong> Secure shopping carts, payment processing, inventory management, and order fulfillment systems.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Conversion Focus:</strong> Ecommerce websites designed to maximize sales with strategic layouts and optimization.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Marketing Ready:</strong> Integrated email marketing, analytics, and tools to grow your online business.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Scalable Solutions:</strong> Grow from startup to established online retailer. Our platforms scale with your success.</span>
              </li>
            </ul>
          </div>

          {/* Service 3: SEO */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">SEO Services Across Gonzales, Baton Rouge & the River Parishes</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              A beautiful website means nothing if customers can't find you. Our comprehensive SEO services help businesses in Baton Rouge, Gonzales, Prairieville, and throughout Ascension, St. James, and other River Parishes dominate local search results.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Local Search Domination:</strong> Rank for "web design Baton Rouge LA," "SEO services Gonzales," and other high-intent local keywords.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Technical SEO:</strong> Optimize site speed, mobile performance, structure, and crawlability for search engines.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Content Strategy:</strong> Create and optimize content that ranks and drives qualified traffic from the Baton Rouge to New Orleans corridor.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Monthly Reporting:</strong> Transparent tracking of rankings, traffic, and ROI so you always understand your SEO performance.</span>
              </li>
            </ul>
          </div>

          {/* Service 4: Digital Marketing */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Digital Marketing in the River Parishes</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Beyond web design and SEO, we offer comprehensive digital marketing services to help your Gonzales, Baton Rouge, or River Parishes business reach more customers and grow revenue online.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Paid Advertising:</strong> Strategic Google Ads and social media campaigns targeting your local market.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Email Marketing:</strong> Build and nurture customer relationships with professional email campaigns.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Social Media:</strong> Engaging content and strategy across Facebook, Instagram, and LinkedIn.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700"><strong>Analytics & Optimization:</strong> Data-driven insights and continuous improvement for maximum ROI.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-white border-t-4 border-amber-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Why Choose Folse Tech for Web Design & Digital Marketing?
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold">✓</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Local Expertise</h3>
                <p className="text-slate-700">Based in Louisiana with deep understanding of the Baton Rouge, Gonzales, and River Parishes markets. We know your competitors and your customers.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold">✓</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Proven Results</h3>
                <p className="text-slate-700">Track record of helping South Louisiana businesses increase visibility, rankings, traffic, and revenue through professional web design and SEO.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold">✓</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Expert Team</h3>
                <p className="text-slate-700">Experienced web designers, developers, and SEO specialists committed to your success. Direct communication with professionals who care.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold">✓</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Transparent Partnership</h3>
                <p className="text-slate-700">Clear communication, straightforward pricing, monthly reporting, and genuine investment in your business growth and long-term success.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold">✓</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Comprehensive Services</h3>
                <p className="text-slate-700">From responsive web design to ecommerce to SEO to digital marketing—everything your business needs under one trusted partnership.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold">✓</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Ongoing Support</h3>
                <p className="text-slate-700">We don't disappear after launch. Continuous maintenance, optimization, monitoring, and support ensure your website succeeds long-term.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Our Web Design & Digital Marketing Process
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>

          <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-xl p-8 md:p-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Discovery & Consultation</h3>
                  <p className="text-blue-100">We meet with you (free consultation) to understand your business, goals, target audience, and current challenges. This foundation guides all our work.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategy & Planning</h3>
                  <p className="text-blue-100">We develop a customized strategy including site structure, SEO approach, content plan, and digital marketing roadmap specific to your Gonzales, Baton Rouge, or River Parishes market.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Design & Development</h3>
                  <p className="text-blue-100">Our team creates beautiful, responsive website design with SEO optimization built-in. Fast, secure, and ready to rank in search results.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Testing & Launch</h3>
                  <p className="text-blue-100">Comprehensive testing across devices and browsers. We optimize for performance, security, and conversions before launch.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Growth & Optimization</h3>
                  <p className="text-blue-100">After launch, we provide ongoing monitoring, maintenance, SEO optimization, and digital marketing to ensure sustained growth and measurable results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-white border-t-4 border-amber-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Common Questions About Web Design & SEO in Louisiana
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-50 rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">How much does professional web design cost in Baton Rouge or Gonzales?</summary>
              <p className="text-slate-700 mt-4">Web design costs vary based on complexity, features, and functionality. A custom responsive website typically ranges from $3,000 to $15,000+. Ecommerce sites and comprehensive digital marketing packages may cost more. We offer flexible pricing and transparent quotes for your specific needs.</p>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">Will SEO services help my Baton Rouge or Gonzales business rank in Google?</summary>
              <p className="text-slate-700 mt-4">Yes! Our professional web design includes built-in SEO optimization. We optimize for local keywords like "web design Baton Rouge LA" and "SEO services Gonzales." Combined with ongoing SEO services, this drives long-term organic traffic and qualified leads to your site.</p>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">Do you design ecommerce websites for River Parishes businesses?</summary>
              <p className="text-slate-700 mt-4">Absolutely. We specialize in ecommerce website design for Baton Rouge, Gonzales, Prairieville, and throughout the River Parishes. We handle everything—platform selection, product setup, payment processing, inventory management, and conversion optimization.</p>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">How long does it take to design a website?</summary>
              <p className="text-slate-700 mt-4">Most responsive websites take 4-8 weeks from discovery to launch. Ecommerce sites typically take 8-12 weeks. Timeline depends on complexity and content readiness. We maintain clear communication and realistic timelines throughout the process.</p>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">What makes your web design services different from other Louisiana designers?</summary>
              <p className="text-slate-700 mt-4">We combine professional responsive design with proven SEO expertise and genuine understanding of the Baton Rouge, Gonzales, and River Parishes markets. We don't just build beautiful websites—we build websites that rank in Google, convert visitors into customers, and deliver measurable business results.</p>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">Do you serve businesses outside Baton Rouge and Gonzales?</summary>
              <p className="text-slate-700 mt-4">Yes! While we specialize in web design and SEO services for the Baton Rouge to Gonzales corridor, we proudly serve businesses throughout the River Parishes including Ascension, St. James, St. John, St. Charles, Iberville, and beyond. Our services are tailored to your local market.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Whether you're in Baton Rouge, Gonzales, Prairieville, or anywhere across Louisiana's River Parishes, let's discuss how professional web design and SEO can transform your business. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-lg">
              Schedule Free Consultation
            </a>
            <a href="tel:+1-225-313-1914" className="inline-block px-8 py-3 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-colors text-lg">
              Call Us Today
            </a>
          </div>
          <p className="text-blue-100 text-sm md:text-base">
            Serving Baton Rouge • Gonzales • Prairieville • Denham Springs • St. James Parish • St. John Parish • St. Charles Parish • Iberville Parish & All River Parishes
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Professional Web Design for Baton Rouge, Gonzales & the River Parishes | Local SEO Services",
  description: "Expert web design and digital marketing services across Baton Rouge, Gonzales, Prairieville & River Parishes. Responsive websites, ecommerce solutions, and SEO optimization for Louisiana businesses.",
  keywords: [
    "web design Gonzales LA",
    "web design Baton Rouge LA",
    "web design Prairieville LA",
    "River Parishes web design",
    "website design New Orleans to Baton Rouge",
    "SEO services Gonzales LA",
    "ecommerce websites Baton Rouge LA",
    "digital marketing River Parishes",
    "web design Louisiana",
    "local SEO Baton Rouge"
  ],
  openGraph: {
    title: "Professional Web Design for Baton Rouge, Gonzales & the River Parishes",
    description: "Expert web design, ecommerce development, and SEO services serving South Louisiana businesses",
    url: "https://folsetech.net/web-design-louisiana",
  },
};

export default function LouisianaWebDesignPage() {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/#services" },
    { label: "Louisiana Web Design", url: "/web-design-louisiana" }
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
              Serving ambitious South Louisiana businesses with expert web design, responsive websites, ecommerce solutions, and SEO services across Ascension, St. James, St. John, and St. Charles parishes. Grow your online presence from New Orleans to Baton Rouge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors">
                Schedule Free Consultation
              </a>
              <a href="#services" className="inline-block px-8 py-3 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-colors">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Regions Overview */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-white border-t-4 border-amber-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Web Design Services Across South Louisiana
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
          
          <p className="text-lg text-slate-700 mb-12 leading-relaxed">
            Whether you're based in Baton Rouge, Gonzales, Prairieville, or anywhere across the River Parishes and New Orleans to Baton Rouge corridor, Folse Tech delivers the same professional, results-driven web design and digital marketing expertise. We understand the unique needs of South Louisiana businesses and create websites that rank, convert, and grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Baton Rouge</h3>
              <p className="text-slate-700 mb-3">Louisiana's capital and the region's commerce hub. We serve diverse Baton Rouge businesses with responsive web design Baton Rouge LA and local SEO services.</p>
              <p className="text-sm text-slate-600"><strong>Focus:</strong> web design Baton Rouge LA, ecommerce websites Baton Rouge LA, SEO services</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Gonzales, LA</h3>
              <p className="text-slate-700 mb-3">Growing business hub in Ascension Parish. Gonzales businesses trust us for web design Gonzales LA and digital marketing strategies tailored to their market.</p>
              <p className="text-sm text-slate-600"><strong>Focus:</strong> web design Gonzales LA, SEO services Gonzales LA, local presence</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Prairieville, LA</h3>
              <p className="text-slate-700 mb-3">Rapidly expanding Ascension Parish community. Prairieville companies work with us for professional web design and digital growth in a competitive market.</p>
              <p className="text-sm text-slate-600"><strong>Focus:</strong> web design Prairieville LA, responsive design, online growth</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-3">River Parishes</h3>
              <p className="text-slate-700 mb-3">St. James, St. John, St. Charles parishes. River Parishes web design services connecting businesses from the corridor to regional customers.</p>
              <p className="text-sm text-slate-600"><strong>Focus:</strong> River Parishes web design, multi-parish reach, regional SEO</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-3">New Orleans to Baton Rouge Corridor</h3>
              <p className="text-slate-700 mb-3">The entire I-10 corridor and surrounding region. Website design New Orleans to Baton Rouge connecting the greater metropolitan area and beyond.</p>
              <p className="text-sm text-slate-600"><strong>Focus:</strong> Regional SEO, multi-location reach, corridor marketing</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-3">All of Louisiana</h3>
              <p className="text-slate-700 mb-3">Our services extend statewide. We bring the same premium web design and digital marketing expertise to any Louisiana business ready to establish powerful online presence.</p>
              <p className="text-sm text-slate-600"><strong>Focus:</strong> Statewide reach, local expertise, digital transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Why South Louisiana Businesses Choose Folse Tech
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
          
          <p className="text-lg text-slate-700 mb-12 leading-relaxed">
            Professional web design requires more than beautiful aesthetics. It demands strategic thinking, technical expertise, local market knowledge, and genuine commitment to your success. Folse Tech brings all of that to every project across Baton Rouge, Gonzales, Prairieville, and the River Parishes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all hover:shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                <span className="text-amber-500 text-2xl">🎯</span>
                <span>Deep Local Expertise</span>
              </h3>
              <p className="text-slate-700">We understand the Baton Rouge, Gonzales, Prairieville, and River Parishes markets. We know what resonates with Louisiana customers and how to position your business for success.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all hover:shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                <span className="text-amber-500 text-2xl">📊</span>
                <span>Results-Driven Strategy</span>
              </h3>
              <p className="text-slate-700">Every decision is guided by your business goals. From responsive design to SEO optimization, we focus on increasing visibility, attracting qualified customers, and driving measurable growth.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all hover:shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                <span className="text-amber-500 text-2xl">🚀</span>
                <span>Mobile-First Design</span>
              </h3>
              <p className="text-slate-700">Over 65% of web traffic comes from mobile devices. Our responsive web design ensures perfect functionality and beautiful appearance on every device—phones, tablets, desktops.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all hover:shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                <span className="text-amber-500 text-2xl">🔍</span>
                <span>SEO Built-In</span>
              </h3>
              <p className="text-slate-700">We optimize for web design Gonzales LA, web design Baton Rouge LA, and other local keywords from day one. Technical SEO, content optimization, and local signals drive organic visibility.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all hover:shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                <span className="text-amber-500 text-2xl">🛒</span>
                <span>Complete Solutions</span>
              </h3>
              <p className="text-slate-700">Responsive web design, ecommerce websites, digital marketing, and SEO—we provide comprehensive solutions. No need to juggle multiple vendors for different services.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-amber-500 transition-all hover:shadow-md">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                <span className="text-amber-500 text-2xl">⭐</span>
                <span>E-E-A-T Standards</span>
              </h3>
              <p className="text-slate-700">We adhere to Google's Experience, Expertise, Authority, and Trustworthiness principles. Professional websites that build credibility with customers and search engines alike.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="px-4 md:px-6 py-16 md:py-24 bg-white border-t-4 border-amber-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Web Design & Digital Marketing Services
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
          
          <p className="text-lg text-slate-700 mb-12 leading-relaxed">
            Our comprehensive service offerings are designed to help South Louisiana businesses establish powerful online presence, attract customers, and grow revenue. Whether you need responsive web design in Baton Rouge, ecommerce solutions in Gonzales, or digital marketing across the River Parishes, we deliver professional results.
          </p>

          <div className="space-y-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-8 border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Responsive Web Design in Baton Rouge & Gonzales</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Build a powerful online presence with professional responsive web design that works flawlessly on every device. Our web design Baton Rouge LA and web design Gonzales LA services create beautiful, high-performing websites that represent your business professionally and convert visitors into customers.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Custom Design:</strong> Tailored to your brand identity and Baton Rouge market positioning</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Mobile-First Approach:</strong> Perfect on smartphones, tablets, desktops—all screen sizes</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Fast Loading:</strong> Optimized performance for best user experience and rankings</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>SEO Foundation:</strong> Built-in optimization for web design Baton Rouge LA keywords</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Conversion Optimization:</strong> Strategic design that guides visitors toward action</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-8 border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ecommerce Website Development Across the Region</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Launch a professional online store selling 24/7. Our ecommerce websites Baton Rouge LA expertise helps businesses across Prairieville, Gonzales, and the River Parishes establish secure, professional online retail operations that drive consistent revenue.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Complete Platform Setup:</strong> Professional infrastructure built for scalability and growth</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Secure Payment Processing:</strong> Industry-standard encryption and fraud protection</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Inventory Management:</strong> Real-time tracking and automated order fulfillment</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Sales Optimization:</strong> Conversion-focused design to maximize revenue potential</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Customer Tools:</strong> Shopping cart, product reviews, wishlists, and more</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-8 border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">SEO Services Gonzales LA & Across South Louisiana</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                A beautiful website means nothing if customers can't find you. Our SEO services Gonzales LA and regional SEO expertise ensure your Baton Rouge, Prairieville, and River Parishes business dominates local search results for relevant keywords like "web design Gonzales LA" and "digital marketing River Parishes."
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Local SEO Optimization:</strong> Rank for Baton Rouge, Gonzales, Prairieville, and River Parishes keywords</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Keyword Research:</strong> Identify high-value local search terms your customers use</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Technical SEO:</strong> Site speed, mobile performance, indexing, and crawlability optimization</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Content Optimization:</strong> Strategic keyword integration and fresh content strategies</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Monthly Reporting:</strong> Transparent tracking of rankings, traffic, and ROI improvement</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-8 border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Digital Marketing in the River Parishes</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Get your South Louisiana business noticed with comprehensive digital marketing strategies. Whether you're serving New Orleans to Baton Rouge or focusing on specific parishes, our digital marketing expertise drives awareness, engagement, and customer growth across the region.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Local Social Media:</strong> Facebook, Instagram, and LinkedIn strategies for Baton Rouge area businesses</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Google Local Services:</strong> Dominate local search results in Gonzales, Prairieville, River Parishes</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Email Marketing:</strong> Build customer relationships and drive repeat business</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-slate-700"><strong>Content Marketing:</strong> Establish authority and attract customers through valuable content</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Businesses Section */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Serving Businesses Across South Louisiana Parishes
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
          
          <p className="text-lg text-slate-700 mb-12 leading-relaxed">
            Our service area encompasses Ascension, St. James, St. John, and St. Charles parishes, plus the entire New Orleans to Baton Rouge corridor. We understand the unique characteristics of each region and tailor our web design, ecommerce, and digital marketing services accordingly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ascension Parish */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ascension Parish</h3>
              <p className="text-slate-700 mb-4">
                Home to Gonzales, Prairieville, and St. Amant. We serve growing Ascension Parish businesses with responsive web design, ecommerce solutions, and local SEO targeting "web design Gonzales LA" and "web design Prairieville LA."
              </p>
              <p className="text-sm text-slate-600"><strong>Key Services:</strong> Local web design, parish-specific SEO, small business growth</p>
            </div>

            {/* St. James Parish */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">St. James Parish</h3>
              <p className="text-slate-700 mb-4">
                Industrial and agricultural hub along River Parishes corridor. We support St. James Parish companies with professional web design and digital marketing to reach customers across the region.
              </p>
              <p className="text-sm text-slate-600"><strong>Key Services:</strong> River Parishes web design, regional marketing, industrial web solutions</p>
            </div>

            {/* St. John Parish */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">St. John Parish</h3>
              <p className="text-slate-700 mb-4">
                Growing community in the River Parishes region. St. John Parish businesses benefit from our web design expertise and digital marketing strategies tailored to regional growth.
              </p>
              <p className="text-sm text-slate-600"><strong>Key Services:</strong> Parish web design, River Parishes marketing, local growth solutions</p>
            </div>

            {/* St. Charles Parish */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">St. Charles Parish</h3>
              <p className="text-slate-700 mb-4">
                Strategic location between New Orleans and Baton Rouge. We serve St. Charles Parish companies with web design and SEO strategies that capture customers across the entire corridor.
              </p>
              <p className="text-sm text-slate-600"><strong>Key Services:</strong> Corridor web design, regional SEO, New Orleans-Baton Rouge marketing</p>
            </div>

            {/* New Orleans to Baton Rouge */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 md:col-span-2">
              <h3 className="text-xl font-bold text-slate-900 mb-3">New Orleans to Baton Rouge Corridor</h3>
              <p className="text-slate-700 mb-4">
                The entire I-10 corridor and surrounding region connecting southeast Louisiana's largest metropolitan areas. We help corridor businesses establish powerful online presence that reaches customers throughout the greater region—from website design New Orleans to Baton Rouge and beyond.
              </p>
              <p className="text-sm text-slate-600"><strong>Key Services:</strong> Regional web design, multi-location SEO, corridor-wide digital marketing, metropolitan reach</p>
            </div>
          </div>

          <div className="mt-12 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-6">
            <p className="text-slate-800">
              <strong>Serving All of Louisiana:</strong> While we specialize in Baton Rouge, Gonzales, Prairieville, River Parishes, and the New Orleans to Baton Rouge corridor, our professional web design and digital marketing services are available statewide. If you're a Louisiana business looking for expert web design, ecommerce solutions, or SEO services, we're ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-white border-t-4 border-amber-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Our Professional Web Design Process
          </h2>
          <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
          
          <p className="text-lg text-slate-700 mb-12 leading-relaxed">
            Every project follows our proven process—from initial discovery through launch and ongoing optimization. This strategic approach ensures we understand your business, set realistic goals, and deliver results that exceed expectations.
          </p>

          <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-xl p-8 md:p-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Consultation & Discovery</h3>
                  <p className="text-blue-100">We learn about your Baton Rouge, Gonzales, or River Parishes business—goals, target audience, competitive landscape, and current online presence. This foundation guides all strategic decisions.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Strategy & Planning</h3>
                  <p className="text-blue-100">We develop a comprehensive strategy including site structure, user experience flow, SEO approach, keyword targeting, and competitive positioning for your specific region and industry.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Design & Development</h3>
                  <p className="text-blue-100">Our design team creates stunning mockups. Our developers build responsive, fast-loading, secure code with SEO optimization built into every page, targeting web design Baton Rouge LA and regional keywords.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Testing & Optimization</h3>
                  <p className="text-blue-100">Comprehensive testing across all devices, browsers, and functionality. We optimize for speed, security, conversion rates, mobile performance, and search engine visibility.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-slate-900 text-lg">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Launch & Growth</h3>
                  <p className="text-blue-100">We handle launch, monitoring, and ongoing optimization. Your Baton Rouge, Gonzales, or River Parishes website continues to improve, ranking better and converting more visitors over time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Authority - E-E-A-T */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Professional Standards & Google E-E-A-T Alignment
          </h2>
          
          <p className="text-lg text-slate-700 mb-12 leading-relaxed text-center">
            We adhere to the highest standards of Experience, Expertise, Authority, and Trustworthiness—principles that matter to both customers and Google's search algorithms. Your website will reflect professional credibility that builds customer confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold text-lg">E</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Experience</h3>
                <p className="text-slate-700">Years of web design, ecommerce, and SEO experience across diverse South Louisiana industries. We know what works and what doesn't.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold text-lg">E</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Expertise</h3>
                <p className="text-slate-700">Deep technical expertise in responsive design, SEO, ecommerce, and digital marketing. Every recommendation is backed by knowledge and proven results.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold text-lg">A</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Authority</h3>
                <p className="text-slate-700">Recognized expertise in Baton Rouge, Gonzales, and River Parishes web design. Our work speaks for itself through client results and industry standards.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold text-lg">T</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Trustworthiness</h3>
                <p className="text-slate-700">Transparent communication, straightforward pricing, genuine accountability. We're invested in your success and committed to long-term partnership.</p>
              </div>
            </div>

            <div className="flex gap-4 md:col-span-2">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white font-bold text-lg">✓</div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Complete Portfolio</h3>
                <p className="text-slate-700">Our web design, ecommerce, and SEO services create comprehensive solutions. You're not piecing together multiple vendors—you have one trusted partner managing all aspects of your digital success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Baton Rouge FAQ */}
      <section className="px-4 md:px-6 py-16 md:py-24 bg-white border-t-4 border-amber-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Web Design Questions for Baton Rouge, Gonzales & River Parishes Businesses
          </h2>
          
          <div className="space-y-4">
            <details className="bg-slate-50 rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">Why is responsive web design important for Baton Rouge businesses?</summary>
              <p className="text-slate-700 mt-4">Over 65% of web traffic comes from mobile devices. If your website doesn't work perfectly on phones and tablets, you're losing customers. Google also ranks mobile-responsive websites higher. Whether you're a Baton Rouge, Gonzales, or River Parishes business, responsive web design is essential for visibility and conversions.</p>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">How does web design Gonzales LA pricing compare across the region?</summary>
              <p className="text-slate-700 mt-4">Professional responsive web design for a South Louisiana business typically ranges from $3,000 to $15,000+, depending on complexity, features, and functionality. Ecommerce websites cost more. We provide transparent, customized quotes based on your specific needs—whether you're in Baton Rouge, Gonzales, Prairieville, or River Parishes.</p>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">Will your web design services help me rank for "web design Baton Rouge LA" and local searches?</summary>
              <p className="text-slate-700 mt-4">Absolutely. Our responsive web design includes built-in SEO optimization targeting "web design Baton Rouge LA," "web design Gonzales LA," "SEO services," and other local keywords. We optimize site structure, speed, mobile performance, and content. Combined with our SEO services, this drives long-term organic visibility and customer growth.</p>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">Can you build an ecommerce website for my Baton Rouge or Gonzales business?</summary>
              <p className="text-slate-700 mt-4">Yes. We specialize in ecommerce websites Baton Rouge LA and ecommerce solutions across the region. We handle everything—platform selection, product setup, payment processing, inventory management, and conversion optimization. Your online store will work 24/7 to generate revenue for your Baton Rouge, Gonzales, Prairieville, or River Parishes business.</p>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">How long does a professional web design project take?</summary>
              <p className="text-slate-700 mt-4">Most responsive websites take 4-8 weeks from discovery to launch. Ecommerce sites typically take 8-12 weeks. The timeline depends on complexity, functionality, and content readiness. We maintain clear communication and realistic timelines throughout. Your Baton Rouge, Gonzales, or River Parishes business stays informed every step.</p>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">What makes Folse Tech different from other web designers in Louisiana?</summary>
              <p className="text-slate-700 mt-4">We combine professional responsive design with proven SEO expertise and deep understanding of South Louisiana markets—Baton Rouge, Gonzales, Prairieville, River Parishes, and the New Orleans to Baton Rouge corridor. We don't just build beautiful websites; we build websites that rank in Google, convert visitors, and deliver measurable business results. Your success is our success.</p>
            </details>

            <details className="bg-slate-50 rounded-lg p-6 border border-slate-200 cursor-pointer hover:border-amber-500 transition-all">
              <summary className="font-bold text-slate-900 text-lg">Do you serve businesses outside Baton Rouge and Gonzales?</summary>
              <p className="text-slate-700 mt-4">Yes! Our services extend across Prairieville, the River Parishes (St. James, St. John, St. Charles), the New Orleans to Baton Rouge corridor, and all of Louisiana. Whether you're a small business in Prairieville, an industrial company in the River Parishes, or anywhere else in South Louisiana, we bring the same professional web design, ecommerce, and digital marketing expertise.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA - Strong Local Focus */}
      <section className="px-4 md:px-6 py-16 md:py-28 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Grow Your South Louisiana Business With Professional Web Design
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100 mb-4 leading-relaxed max-w-2xl mx-auto">
            Whether you're in Baton Rouge, Gonzales, Prairieville, the River Parishes, or anywhere in the New Orleans to Baton Rouge corridor, your business deserves a professional website that ranks, converts, and grows.
          </p>

          <p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Schedule a free consultation to discuss your web design needs, review your current online presence, and discover how responsive web design, ecommerce solutions, and SEO services can transform your business.
          </p>

          <p className="text-base text-blue-200 mb-10">No pressure. Just expert advice from South Louisiana web design professionals who understand your market.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:jon@folsetech.net" className="inline-block px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors text-lg">
              Schedule Free Consultation
            </a>
            <a href="tel:+1-225-000-0000" className="inline-block px-8 py-4 border-2 border-amber-500 text-amber-500 font-bold rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-colors text-lg">
              Call Us Today
            </a>
          </div>

          <p className="text-sm text-blue-200 mt-8">
            Serving Baton Rouge • Gonzales • Prairieville • River Parishes • New Orleans to Baton Rouge Corridor • All of Louisiana
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

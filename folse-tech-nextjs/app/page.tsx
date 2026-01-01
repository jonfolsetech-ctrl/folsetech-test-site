import { Metadata } from "next";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Button } from "./components/ui/button";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = {
  title: "Folsetech AI Solutions LLC - AI Web Design & SEO | Louisiana",
  description: "Folsetech AI Solutions LLC specializes in AI-powered web design and full SEO integration for Louisiana businesses. We build fast, responsive, search-optimized websites designed to rank on Google and generate real traffic. Serving Gonzales, Prairieville, Baton Rouge, New Orleans, LaPlace, and Denham Springs.",
  keywords: ["AI web design", "Louisiana web design", "local SEO", "Gonzales LA", "Baton Rouge", "responsive design", "SEO optimization", "web development Louisiana"],
};

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
      imageUrl: "https://images.unsplash.com/photo-1460925895917-adf4e5f2a9f6?w=800&h=500&fit=crop",
      features: [
        { title: "Technical SEO", description: "Optimize site speed, mobile performance, structure, and crawlability for search engine success." },
        { title: "Local Search Optimization", description: "Dominate 'near me' searches and local directories. Critical for businesses in Gonzales, Baton Rouge, Prairieville." },
        { title: "Keyword Research & Strategy", description: "Data-driven keyword analysis to target high-intent searches your customers are actually making." },
        { title: "On-Page Optimization", description: "Strategic optimization of titles, meta descriptions, headings, and content for maximum search visibility." },
        { title: "Content Strategy & Creation", description: "Create and optimize blog posts, service pages, and resources that rank for high-value keywords." },
        { title: "Link Building & Authority", description: "Earn quality backlinks and build domain authority through strategic partnerships and content." },
        { title: "Structured Data & Schema", description: "Implement JSON-LD schema markup so Google understands your content and displays rich snippets." },
        { title: "Monthly Analytics & Reporting", description: "Transparent reports showing rankings, traffic growth, conversions, and measurable ROI from SEO efforts." },
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
  { title: "E-Commerce Platform", tech: "Responsive Design • SEO • Payment Integration • Inventory Management • Analytics", description: "Complete e-commerce solution for Louisiana retailer featuring mobile-optimized responsive design, integrated secure payment processing, real-time inventory management, and comprehensive analytics. Implemented technical SEO, keyword optimization, and structured data to improve search rankings and drive qualified traffic to product pages, resulting in increased visibility and sales.", imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" },
  { title: "Service Provider Website", tech: "Responsive Design • Local SEO • Lead Generation", description: "Professional website for Baton Rouge service business with increased local visibility and customer inquiries", imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop" },
  { title: "Professional Services Site", tech: "Responsive Design • Conversion Optimization", description: "High-converting website for Gonzales professional services with clear messaging and easy contact options" },
  { title: "Local Business Growth", tech: "SEO • Responsive Design • Local Optimization", description: "Integrated web and SEO solution helping Prairieville business dominate local search results" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 bg-white border border-blue-200 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-slate-700 font-medium text-xs md:text-sm">Serving Louisiana Businesses</span>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                AI-Powered Web Design <br className="hidden md:block"/>
                <span className="text-blue-600">& Full SEO Integration</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We build fast, responsive, search-optimized websites designed to rank on Google and generate real traffic. Serving businesses in Gonzales, Prairieville, Baton Rouge, New Orleans, LaPlace, and Denham Springs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4 md:pt-8">
              <a href="mailto:jon@folsetech.net" className="inline-flex items-center justify-center">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-medium w-full sm:w-auto shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300">
                  Schedule Free Consultation
                </Button>
              </a>
              <a href="#services" className="inline-flex items-center justify-center">
                <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 w-full sm:w-auto font-medium transition-all duration-300">
                  View Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <HomeClient features={features} projects={projects} />

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to Transform Your Louisiana Business Online?</h2>
          <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">Schedule a free consultation with our team. We'll assess your current online presence, discuss your business goals, and recommend a tailored web design and SEO strategy that drives real results.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="mailto:jon@folsetech.net">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-medium text-base md:text-lg px-8 md:px-10 py-5 md:py-6 w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all duration-300">
                Schedule Your Free Consultation
              </Button>
            </a>
            <a href="tel:+1-225-000-0000">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium text-base md:text-lg px-8 md:px-10 py-5 md:py-6 w-full sm:w-auto transition-all duration-300">
                Call Us Today
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

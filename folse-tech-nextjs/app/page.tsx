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
    title: "AI-Powered Design", 
    description: "Intelligent design solutions leveraging advanced artificial intelligence technology for competitive advantage",
    id: "ai-design",
    fullContent: {
      tagline: "Intelligent • Adaptive • High-Performance",
      description: "Leverage advanced artificial intelligence to create smarter, faster, and more effective designs. Our AI-Powered Design solutions analyze user behavior, performance data, and industry trends to deliver visually stunning, conversion-optimized experiences that give your business a true competitive advantage.",
      features: [
        { title: "Data-Driven Aesthetics", description: "AI analyzes which design elements, colors, typography, and layouts perform best with your target audience for maximum engagement and conversion." },
        { title: "Faster Design Iteration", description: "Generate design variations, test ideas, and refine layouts in minutes instead of weeks. AI accelerates the creative process without compromising quality." },
        { title: "Personalized User Experiences", description: "Designs that adapt dynamically based on user behavior, device type, preferences, and context for truly personalized interactions." },
        { title: "Conversion Optimization", description: "Every design decision is backed by AI insights into user psychology, behavior patterns, and conversion funnels to maximize results." },
      ],
      perfectFor: ["Websites", "Landing Pages", "SaaS Platforms", "E-Commerce", "Branding"],
      cta: "Design smarter. Outperform competitors. Let's transform your brand with AI-Powered Design."
    }
  },
  { 
    title: "Performance Optimization", 
    description: "Lightning-fast load times and SEO-optimized architecture for superior user experience",
    id: "performance-optimization",
    fullContent: {
      tagline: "Speed • Stability • Scalability",
      description: "Maximize speed, efficiency, and reliability across your digital platforms. Our Performance Optimization services fine-tune code, databases, servers, and front-end delivery to eliminate bottlenecks, reduce load times, and ensure flawless performance under real-world traffic.",
      features: [
        { title: "Faster Page Loads", description: "Improved Core Web Vitals, optimized code, queries, and asset delivery to ensure lightning-fast performance." },
        { title: "Reduced Bounce Rates", description: "Every millisecond counts. Users abandon slow sites. We optimize for speed to keep visitors engaged and increase conversions." },
        { title: "Scalable Performance", description: "Built to handle traffic growth. Our optimization strategies ensure your site maintains peak performance as your business scales." },
        { title: "Optimized Infrastructure", description: "Database tuning, server optimization, CDN deployment, and caching strategies to maximize efficiency across all systems." },
      ],
      perfectFor: ["Websites", "Web Apps", "SaaS", "E-Commerce", "Enterprise Systems"],
      cta: "Run faster. Convert better. Scale confidently."
    }
  },
  { 
    title: "Enterprise Security", 
    description: "Bank-grade security protocols and scalable infrastructure for enterprise-level reliability",
    id: "enterprise-security",
    fullContent: {
      tagline: "Protection • Compliance • Resilience",
      description: "Safeguard your business with enterprise-level security architecture designed to protect data, infrastructure, and users at every layer. Our security solutions combine advanced threat prevention, secure system design, and compliance best practices to reduce risk and ensure operational continuity.",
      features: [
        { title: "Secure Architecture", description: "Secure application & infrastructure architecture designed with security-first principles to protect against attacks and vulnerabilities." },
        { title: "Data Protection", description: "Data protection, encryption, and access controls to ensure sensitive information remains secure and compliant with regulations." },
        { title: "Threat Prevention", description: "Vulnerability mitigation & threat prevention strategies to identify and eliminate security risks before they become problems." },
        { title: "Compliance Frameworks", description: "Compliance-ready security frameworks aligned with industry standards and regulatory requirements for your peace of mind." },
      ],
      perfectFor: ["Enterprises", "SaaS Platforms", "E-Commerce", "Government", "Regulated Industries"],
      cta: "Secure your systems. Protect your future."
    }
  },
  { 
    title: "Local Expertise", 
    description: "Direct partnership with experienced team based in Gonzales, Louisiana",
    id: "local-expertise",
    fullContent: {
      tagline: "Community-Focused • Market-Specific • Results-Driven",
      description: "Work with a team that understands your local market. Our Local Expertise ensures your digital presence is strategically built for your region — from local search visibility and customer behavior to industry competition and regional growth opportunities.",
      features: [
        { title: "Local Market Knowledge", description: "Deep understanding of local markets, audiences, and community dynamics that inform every strategic decision." },
        { title: "Local SEO Optimization", description: "Local search visibility and geo-targeted optimization to ensure customers in your region find you online." },
        { title: "Region-Specific Strategies", description: "Conversion strategies tailored to regional behavior, preferences, and competitive landscape for maximum local impact." },
        { title: "Personalized Partnership", description: "Personalized service and direct communication with a team that's invested in your local success." },
      ],
      perfectFor: ["Local Businesses", "Service Providers", "Regional Brands", "Multi-Location Companies"],
      cta: "Built locally. Designed to win locally."
    }
  },
  { 
    title: "Responsive Development", 
    description: "Seamless experience across all devices and screen sizes with mobile-first methodology",
    id: "responsive-development",
    fullContent: {
      tagline: "Mobile-First • Adaptive • Consistent",
      description: "Deliver seamless digital experiences on every screen. Our Responsive Development approach ensures your website or application looks, loads, and performs flawlessly across desktops, tablets, and mobile devices using modern, mobile-first frameworks.",
      features: [
        { title: "Mobile-First Design", description: "Start with mobile experiences and scale up to larger screens, ensuring optimal performance and usability on devices where most traffic happens." },
        { title: "Adaptive Layouts", description: "Layouts that intelligently adapt to any screen size, resolution, or orientation without compromising functionality or aesthetics." },
        { title: "Consistent UX", description: "Deliver a consistent user experience across all devices and platforms, maintaining brand identity and usability standards." },
        { title: "Device Optimization", description: "Optimized performance on every device including desktops, tablets, and mobile phones for improved engagement and conversions." },
      ],
      perfectFor: ["Websites", "Web Apps", "SaaS", "E-Commerce", "Enterprise Platforms"],
      cta: "One experience. Every device."
    }
  },
  { 
    title: "Data-Driven Strategy", 
    description: "Analytics-focused approach to maximize conversion rates and business outcomes",
    id: "data-driven-strategy",
    fullContent: {
      tagline: "Insights • Precision • Growth",
      description: "Make smarter decisions backed by real data. Our Data-Driven Strategy transforms analytics, user behavior, and performance metrics into actionable insights that guide design, development, and marketing decisions for maximum impact and competitive advantage.",
      features: [
        { title: "Actionable Insights", description: "Extract meaningful insights from real user data to understand behavior, preferences, and conversion patterns." },
        { title: "Smarter Optimization", description: "Every design and development decision is informed by data, leading to measurable performance improvements and results." },
        { title: "Measurable Improvements", description: "Track, analyze, and optimize continuously based on real-world metrics and performance data." },
        { title: "Goal-Aligned Strategy", description: "Strategy and tactics aligned with your specific business goals and KPIs for maximum ROI." },
      ],
      perfectFor: ["Businesses", "SaaS", "E-Commerce", "Enterprises", "Growth-Focused Teams"],
      cta: "Decide with data. Scale with confidence."
    }
  },
];

const projects = [
  { title: "E-Commerce Platform", tech: "React • Next.js • AI", description: "Full-featured online store with AI-powered product recommendations and conversion optimization" },
  { title: "SaaS Analytics Dashboard", tech: "TypeScript • React • Analytics", description: "Enterprise-grade analytics platform with real-time reporting and performance insights" },
  { title: "Corporate Website", tech: "Next.js • Google Maps API • Local SEO", description: "High-performance corporate site with location-based services and local search optimization" },
  { title: "Progressive Web Application", tech: "React Native Web • PWA", description: "Cross-platform application delivering native app experience through the web" },
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
              <span className="text-slate-900 font-semibold text-xs md:text-sm">Enterprise AI Solutions</span>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                AI-Powered Web Design & Development
              </h1>
              <p className="text-base md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
                Enterprise-grade web solutions that drive growth. Strategic partnerships built on performance, security, and innovation. Serving businesses across Louisiana and nationwide.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center pt-4 md:pt-8">
              <a href="mailto:jon@folsetech.net" className="inline-flex items-center justify-center">
                <Button size="lg" className="bg-amber-500 text-slate-900 hover:bg-amber-400 font-semibold w-full sm:w-auto">Request Consultation</Button>
              </a>
              <Button variant="outline" size="lg" className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 w-full sm:w-auto">View Our Work</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-16 md:py-32 px-4 md:px-6 bg-white border-t-4 border-amber-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Why Partner With Folsetech</h2>
            <div className="h-1 w-16 md:w-20 bg-amber-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">Strategic web solutions built for enterprise-level performance, security, and growth.</p>
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Recent Projects</h2>
            <div className="h-1 w-16 md:w-20 bg-amber-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">Proven results across diverse industries and enterprise clients.</p>
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
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to Elevate Your Business?</h2>
          <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto font-light">Schedule a confidential consultation with our team. Let's discuss how our AI solutions can transform your competitive advantage.</p>
          <a href="mailto:jon@folsetech.net">
            <Button size="lg" className="bg-amber-500 text-slate-900 hover:bg-amber-400 font-semibold text-base md:text-lg px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto">Schedule Your Consultation</Button>
          </a>
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
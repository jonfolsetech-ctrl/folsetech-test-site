import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FeatureCard from "./components/FeatureCard";
import ProjectCard from "./components/ProjectCard";
import { Button } from "./components/ui/button";

const features = [
  { title: "AI-Powered Design", description: "Intelligent design solutions leveraging advanced artificial intelligence technology for competitive advantage" },
  { title: "Performance Optimization", description: "Lightning-fast load times and SEO-optimized architecture for superior user experience" },
  { title: "Enterprise Security", description: "Bank-grade security protocols and scalable infrastructure for enterprise-level reliability" },
  { title: "Responsive Development", description: "Seamless experience across all devices and screen sizes with mobile-first methodology" },
  { title: "Local Expertise", description: "Direct partnership with experienced team based in Gonzales, Louisiana" },
  { title: "Data-Driven Strategy", description: "Analytics-focused approach to maximize conversion rates and business outcomes" },
];

const projects = [
  { title: "E-Commerce Platform", tech: "React • Next.js • AI", description: "Full-featured online store with AI-powered product recommendations and conversion optimization" },
  { title: "SaaS Analytics Dashboard", tech: "TypeScript • React • Analytics", description: "Enterprise-grade analytics platform with real-time reporting and performance insights" },
  { title: "Corporate Website", tech: "Next.js • Google Maps API • Local SEO", description: "High-performance corporate site with location-based services and local search optimization" },
  { title: "Progressive Web Application", tech: "React Native Web • PWA", description: "Cross-platform application delivering native app experience through the web" },
];

export default function Home() {
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
              <FeatureCard key={feature.title} {...feature} />
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
    </main>
  );
}
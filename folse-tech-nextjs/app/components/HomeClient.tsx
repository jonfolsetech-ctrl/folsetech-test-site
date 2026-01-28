'use client';

import { useState, lazy, Suspense } from "react";
import FeatureCard from "./FeatureCard";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";

const ExpandedFeatureModal = lazy(() => import("./ExpandedFeatureModal"));

interface Feature {
  title: string;
  description: string;
  id: string;
  fullContent: {
    tagline: string;
    description: string;
    features: Array<{ title: string; description: string }>;
    perfectFor: string[];
    cta: string;
  };
}

interface Project {
  title: string;
  tech: string;
  description: string;
  imageUrl?: string;
}

interface HomeClientProps {
  features: Feature[];
  projects: Project[];
}

export default function HomeClient({ features, projects }: HomeClientProps) {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  return (
    <>
      {/* Features Section */}
      <section id="services" className="py-16 md:py-24 px-4 md:px-6 bg-brand-navy-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-yellow-50 text-transparent bg-clip-text rounded-full text-sm font-medium mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Web Design & <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Development</span> Services</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">Premium web solutions designed to help your Louisiana business establish credibility, increase visibility, and grow revenue online.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
      <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-yellow-50 text-transparent bg-clip-text rounded-full text-sm font-medium mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Case Studies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Louisiana Business <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Success Stories</span></h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">Real results for businesses in Gonzales, Baton Rouge, and Prairieville. Responsive web design and SEO that increase visibility and drive growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
}

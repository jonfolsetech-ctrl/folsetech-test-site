'use client';

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  imageUrl?: string;
}

export default function ProjectCard({ title, tech, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
      <div className="w-full h-48 md:h-56 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}
        {!imageUrl && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.split('•').map((item, idx) => (
            <span key={idx} className="text-xs px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
              {item.trim()}
            </span>
          ))}
        </div>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

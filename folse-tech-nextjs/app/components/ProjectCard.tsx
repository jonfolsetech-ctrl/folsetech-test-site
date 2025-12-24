interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
}

export default function ProjectCard({ title, tech, description }: ProjectCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transition-all bg-white">
      <div className="w-full h-40 md:h-48 bg-gradient-to-br from-slate-900 to-blue-900"></div>
      <div className="p-6 md:p-8 border-t-4 border-amber-500">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-xs md:text-sm text-amber-600 font-semibold mb-3 md:mb-4 uppercase tracking-wide">{tech}</p>
        <p className="text-sm md:text-base text-slate-600 font-light">{description}</p>
      </div>
    </div>
  );
}

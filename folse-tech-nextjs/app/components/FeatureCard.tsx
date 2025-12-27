interface FeatureCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export default function FeatureCard({ title, description, onClick }: FeatureCardProps) {
  return (
    <div
      onClick={onClick}
      className={`p-5 md:p-8 border-l-4 border-amber-500 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow ${
        onClick ? "cursor-pointer md:hover:shadow-2xl" : ""
      }`}
    >
      <div className="w-10 md:w-14 h-10 md:h-14 bg-gradient-to-br from-slate-900 to-blue-900 rounded-lg mb-3 md:mb-6 flex items-center justify-center flex-shrink-0">
        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
      </div>
      <h3 className="text-base md:text-xl font-bold text-slate-900 mb-2 md:mb-3 line-clamp-2">{title}</h3>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light">{description}</p>
      {onClick && (
        <div className="mt-4 text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors">
          Learn More →
        </div>
      )}
    </div>
  );
}

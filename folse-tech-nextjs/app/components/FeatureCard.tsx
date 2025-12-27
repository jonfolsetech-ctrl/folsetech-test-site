interface FeatureCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export default function FeatureCard({ title, description, onClick }: FeatureCardProps) {
  return (
    <div
      onClick={onClick}
      className={`p-6 md:p-8 border-l-4 border-amber-500 bg-white rounded-lg shadow-md hover:shadow-xl transition-all ${
        onClick ? "cursor-pointer hover:scale-105" : ""
      }`}
    >
      <div className="w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br from-slate-900 to-blue-900 rounded-lg mb-4 md:mb-6 flex items-center justify-center">
        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
      </div>
      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{title}</h3>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light">{description}</p>
      {onClick && (
        <div className="mt-4 text-amber-600 font-semibold text-sm hover:text-amber-700">
          Learn More →
        </div>
      )}
    </div>
  );
}

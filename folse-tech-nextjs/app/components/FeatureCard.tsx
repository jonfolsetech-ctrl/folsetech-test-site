interface FeatureCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export default function FeatureCard({ title, description, onClick }: FeatureCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group p-6 md:p-8 bg-white border border-slate-200 rounded-2xl hover:border-yellow-300 transition-all duration-300 ${
        onClick ? "cursor-pointer hover:shadow-xl hover:shadow-yellow-100/50 hover:-translate-y-1" : "hover:shadow-lg"
      }`}
    >
      <div className="w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-xl mb-4 md:mb-5 flex items-center justify-center flex-shrink-0 group-hover:from-blue-600 group-hover:to-yellow-400 transition-all duration-300">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed">{description}</p>
      {onClick && (
        <div className="mt-5 flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
          <span>Learn More</span>
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
}

"use client";

interface ExpandedFeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: {
    tagline: string;
    description: string;
    imageUrl?: string;
    features: { title: string; description: string }[];
    perfectFor: string[];
    cta: string;
  };
}

export default function ExpandedFeatureModal({
  isOpen,
  onClose,
  title,
  content,
}: ExpandedFeatureModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full my-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-6 md:p-8 flex justify-between items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {title}
            </h2>
            <p className="text-xl text-amber-400 font-semibold">{content.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-brand-gold-500 text-3xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Image */}
          {content.imageUrl && (
            <img
              src={content.imageUrl}
              alt={title}
              className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
              loading="lazy"
            />
          )}

          {/* Description */}
          <p className="text-base md:text-lg text-slate-600 font-light mb-8 leading-relaxed">
            {content.description}
          </p>

          {/* Features Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.features.map((feature, idx) => (
                <div key={idx} className="border-l-4 border-brand-gold-500 pl-4">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-slate-600 font-light">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Perfect For */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Perfect For
            </h3>
            <div className="flex flex-wrap gap-2">
              {content.perfectFor.map((item, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border-t-2 border-brand-gold-500 pt-6">
            <p className="text-base text-slate-600 mb-4 font-light">
              {content.cta}
            </p>
            <div className="flex gap-4">
              <a href="mailto:jon@folsetech.net">
                <button className="px-6 py-3 bg-brand-gold-500 text-slate-900 font-semibold rounded-lg hover:bg-brand-gold-400 transition-colors">
                  Get Started
                </button>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 border-2 border-slate-700 text-slate-100 font-semibold rounded-lg hover:border-brand-gold-500 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

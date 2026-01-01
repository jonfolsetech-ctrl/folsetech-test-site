export default function Footer() {
  const footerSections = [
    {
      title: "Folsetech AI Solutions LLC",
      content: "AI-powered web design and full SEO integration for Louisiana businesses. Fast, responsive, search-optimized websites that rank on Google and generate real traffic.",
      isDescription: true,
    },
    {
      title: "Services",
      links: ["Web Design", "Web Development", "SEO Optimization", "AI Solutions"],
    },
    {
      title: "Company",
      links: ["About Us", "Blog", "Case Studies", "Careers"],
    },
    {
      title: "Connect",
      content: "Serving Gonzales, Prairieville, Baton Rouge, New Orleans, LaPlace & Denham Springs, LA",
      email: "jon@folsetech.net",
    },
  ];

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-4 text-white text-sm">{section.title}</h4>
              {section.isDescription && (
                <p className="text-slate-400 text-sm leading-relaxed">{section.content}</p>
              )}
              {section.links && (
                <ul className="space-y-2.5 text-sm">
                  {section.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">{link}</a>
                    </li>
                  ))}
                </ul>
              )}
              {section.email && (
                <>
                  <p className="text-slate-400 text-sm mb-3 leading-relaxed">{section.content}</p>
                  <a href={`mailto:${section.email}`} className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                    {section.email}
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">&copy; 2026 Folsetech AI Solutions LLC. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

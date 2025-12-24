export default function Footer() {
  const footerSections = [
    {
      title: "Folsetech",
      content: "Enterprise web design and AI-powered development solutions for ambitious businesses.",
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
      content: "Gonzales, Louisiana",
      email: "info@folsetech.com",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-blue-900 border-t-4 border-amber-500 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold mb-3 md:mb-6 text-amber-400 uppercase tracking-wide text-xs md:text-sm">{section.title}</h4>
              {section.isDescription && (
                <p className="text-blue-100 text-xs md:text-sm leading-relaxed font-light">{section.content}</p>
              )}
              {section.links && (
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                  {section.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-blue-100 hover:text-amber-400 transition font-light">{link}</a>
                    </li>
                  ))}
                </ul>
              )}
              {section.email && (
                <>
                  <p className="text-blue-100 text-xs md:text-sm mb-2 md:mb-3 font-light">{section.content}</p>
                  <a href={`mailto:${section.email}`} className="text-blue-100 hover:text-amber-400 transition text-xs md:text-sm font-light">
                    {section.email}
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-blue-800 pt-6 md:pt-8 text-center text-blue-100 text-xs md:text-sm font-light">
          <p>&copy; 2025 Folsetech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

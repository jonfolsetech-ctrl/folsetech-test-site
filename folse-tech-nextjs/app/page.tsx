export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold">FT</div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Folse Tech</span>
          </div>
          <div className="flex gap-8 items-center">
            <a href="#services" className="text-gray-300 hover:text-blue-400 transition">Services</a>
            <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition">Portfolio</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition">Contact</a>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI-Powered Web Design</span>
                <br />
                <span className="text-gray-300">for Modern Businesses</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Transform your online presence with cutting-edge AI web design. Located in Gonzales, Louisiana, serving businesses nationwide.
              </p>
            </div>
            <div className="flex gap-4 justify-center pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold text-lg transition transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-4 border border-gray-600 hover:border-blue-500 rounded-lg font-semibold text-lg transition">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Folse Tech?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "AI-Powered Design", desc: "Intelligent design solutions powered by advanced AI technology" },
              { icon: "🎨", title: "Modern Aesthetics", desc: "Beautiful, responsive designs that work on all devices" },
              { icon: "⚙️", title: "Fast Performance", desc: "Optimized for speed with lightning-fast load times" },
              { icon: "🔐", title: "Secure & Scalable", desc: "Enterprise-grade security with scalable infrastructure" },
              { icon: "📱", title: "Mobile First", desc: "Perfect experience on every screen size" },
              { icon: "💼", title: "Local Support", desc: "Direct support from our Gonzales, LA team" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 hover:border-blue-500 p-8 rounded-xl transition group hover:shadow-lg hover:shadow-blue-500/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Recent Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "E-Commerce Platform", tech: "React • Next.js • AI", desc: "Full-featured online store with AI recommendations" },
              { title: "SaaS Dashboard", tech: "TypeScript • Tailwind • Analytics", desc: "Enterprise analytics platform with real-time data" },
              { title: "Corporate Website", tech: "Next.js • CMS • SEO", desc: "High-performance corporate site with dynamic content" },
              { title: "Mobile App Web", tech: "React Native Web • Progressive", desc: "Cross-platform web application for mobile users" },
            ].map((project, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 hover:border-purple-500 p-8 rounded-xl transition hover:shadow-lg hover:shadow-purple-500/20 group">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-6 group-hover:from-blue-500/40 group-hover:to-purple-600/40 transition"></div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-blue-400 text-sm font-mono mb-3">{project.tech}</p>
                <p className="text-gray-400">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-y border-slate-700">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Transform Your Web Presence?</h2>
          <p className="text-xl text-gray-300">Let's create something amazing together. Contact us today for a free consultation.</p>
          <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold text-lg transition transform hover:scale-105">
            Get Your Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 text-white">Folse Tech</h4>
              <p className="text-gray-400 text-sm">AI-powered web design in Gonzales, Louisiana</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">Services</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Web Design</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Web Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">AI Solutions</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">Company</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">Contact</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Gonzales, Louisiana</li>
                <li><a href="mailto:info@folsetech.com" className="hover:text-blue-400 transition">info@folsetech.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Folse Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
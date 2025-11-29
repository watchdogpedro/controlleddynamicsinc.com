export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Controlled Dynamics Inc.
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 leading-relaxed">
            Precision Engineering & Advanced Motion Control Solutions
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Service Card 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Precision Control</h3>
              <p className="text-blue-200">
                Advanced motion control systems for industrial applications
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold text-white mb-3">Engineering Excellence</h3>
              <p className="text-blue-200">
                Custom solutions tailored to your specific requirements
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-blue-200">
                Cutting-edge technology for tomorrow's challenges
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors duration-300 border border-white/30"
            >
              Learn More
            </a>
          </div>

          {/* Footer */}
          <div className="mt-24 text-blue-300 text-sm">
            <p>&copy; 2024 Controlled Dynamics Inc. All rights reserved.</p>
            <p className="mt-2">controlleddynamicsinc.com</p>
          </div>
        </div>
      </main>
    </div>
  );
}

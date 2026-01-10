import Logo from './Logo';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark-950 pt-20 overflow-hidden">
      {/* Background texture effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,140,0,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Modern gradient overlays with #f59e41 */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-400/10 via-transparent to-primary-600/5"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary-400/15 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,65,0.1),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Logo Section with Text */}
          <div className="flex justify-center mb-8">
            <Logo size="xl" variant="full" className="drop-shadow-glow-primary-lg" />
          </div>

          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 mb-4">
            AI-Powered Talent Acquisition Outsourcing
          </p>
          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            for the MENA Region
          </p>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Hiring in the MENA region is still heavily manual, relationship-driven, and interview-heavy.
              Founders and SMEs waste weeks sourcing, screening, and interviewing candidates — only to end up with mis-hires, slow onboarding, and performance gaps.
            </p>
            <div className="bg-gradient-to-br from-dark-900/90 via-dark-800/80 to-dark-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-primary-400/20 shadow-glow-primary">
              <p className="text-2xl font-bold text-white mb-4 bg-gradient-primary bg-clip-text text-transparent">
                TAMAKKUN AI removes the hiring burden entirely.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                TAMAKKUN AI is an end-to-end Talent Acquisition outsourcing platform, fully powered by artificial intelligence, 
                that delivers fully vetted, assessed, and role-matched candidates to SMEs and startups across MENA.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="bg-gradient-primary text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-glow-primary hover:shadow-glow-primary-lg transition-all cursor-pointer transform hover:scale-105">
              Clients no longer search.
            </div>
            <div className="bg-gradient-primary text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-glow-primary hover:shadow-glow-primary-lg transition-all cursor-pointer transform hover:scale-105">
              Clients no longer interview.
            </div>
          </div>
          <p className="text-xl text-gray-300 font-semibold">
            Clients receive ready-to-hire talent with full intelligence reports
          </p>
        </div>
      </div>
    </section>
  );
}

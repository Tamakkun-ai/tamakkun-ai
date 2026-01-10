import { IconShield, IconChart, IconUsers } from './icons';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function CompetitiveAdvantage() {
  return (
    <section className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Competitive Advantage
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-primary rounded-xl p-8 text-white shadow-glow-primary transform hover:scale-105 transition-all hover:shadow-glow-primary-lg group">
              <div className="flex justify-center mb-4">
                <SparklesIcon className="w-14 h-14 text-white group-hover:scale-110 transition-transform" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                First AI-Native Platform
              </h3>
              <p className="text-lg opacity-90">
                The first AI-native Talent Acquisition outsourcing platform in MENA
              </p>
            </div>

            <div className="bg-gradient-primary rounded-xl p-8 text-white shadow-glow-primary transform hover:scale-105 transition-all hover:shadow-glow-primary-lg group">
              <div className="flex justify-center mb-4">
                <IconShield className="w-14 h-14 text-white group-hover:scale-110 transition-transform" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Competitive Moat
              </h3>
              <p className="text-lg opacity-90">
                A system competitors cannot easily replicate
              </p>
            </div>

            <div className="bg-gradient-primary rounded-xl p-8 text-white shadow-glow-primary transform hover:scale-105 transition-all hover:shadow-glow-primary-lg group">
              <div className="flex justify-center mb-4">
                <IconChart className="w-14 h-14 text-white group-hover:scale-110 transition-transform" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Data-Powered Intelligence
              </h3>
              <p className="text-lg opacity-90">
                A data-powered talent intelligence moat
              </p>
            </div>

            <div className="bg-gradient-primary rounded-xl p-8 text-white shadow-glow-primary transform hover:scale-105 transition-all hover:shadow-glow-primary-lg group">
              <div className="flex justify-center mb-4">
                <IconUsers className="w-14 h-14 text-white group-hover:scale-110 transition-transform" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Trusted Authority
              </h3>
              <p className="text-lg opacity-90">
                A trusted hiring authority for SMEs and startups
              </p>
            </div>
          </div>

          <div className="bg-dark-800/80 backdrop-blur-sm rounded-xl p-8 border border-primary-800/30 shadow-xl">
            <h3 className="text-2xl font-bold text-center text-white mb-6">
              Implementation Plan
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-glow-primary">
                  1
                </div>
                <h4 className="font-bold text-white mb-2">Phase 1</h4>
                <p className="text-sm text-gray-400">Core assessment + matching engine</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-glow-primary">
                  2
                </div>
                <h4 className="font-bold text-white mb-2">Phase 2</h4>
                <p className="text-sm text-gray-400">Pilot with first MENA clients</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-glow-primary">
                  3
                </div>
                <h4 className="font-bold text-white mb-2">Phase 3</h4>
                <p className="text-sm text-gray-400">Expand roles and industries</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-glow-primary">
                  4
                </div>
                <h4 className="font-bold text-white mb-2">Phase 4</h4>
                <p className="text-sm text-gray-400">Advanced adaptive intelligence & analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

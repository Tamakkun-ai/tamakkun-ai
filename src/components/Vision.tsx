import { IconSearch, IconCheck, IconChart, IconTarget, IconRocket } from './icons';

export default function Vision() {
  return (
    <section id="vision" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          TAMAKKUN AI Vision
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-2xl md:text-3xl font-bold text-center text-primary-500 mb-8">
            Build the first AI-native Talent Acquisition Outsourcing platform for MENA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <div className="bg-gradient-primary rounded-xl p-6 text-white text-center shadow-glow-primary transform hover:scale-105 transition-all hover:shadow-glow-primary-lg group">
            <div className="flex justify-center mb-4">
              <IconSearch className="w-12 h-12 text-white group-hover:scale-110 transition-transform" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold mb-2">Sources</h3>
          </div>
          <div className="bg-gradient-primary rounded-xl p-6 text-white text-center shadow-glow-primary transform hover:scale-105 transition-all hover:shadow-glow-primary-lg group">
            <div className="flex justify-center mb-4">
              <IconCheck className="w-12 h-12 text-white group-hover:scale-110 transition-transform" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold mb-2">Screens</h3>
          </div>
          <div className="bg-gradient-primary rounded-xl p-6 text-white text-center shadow-glow-primary transform hover:scale-105 transition-all hover:shadow-glow-primary-lg group">
            <div className="flex justify-center mb-4">
              <IconChart className="w-12 h-12 text-white group-hover:scale-110 transition-transform" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold mb-2">Assesses</h3>
          </div>
          <div className="bg-gradient-primary rounded-xl p-6 text-white text-center shadow-glow-primary transform hover:scale-105 transition-all hover:shadow-glow-primary-lg group">
            <div className="flex justify-center mb-4">
              <IconTarget className="w-12 h-12 text-white group-hover:scale-110 transition-transform" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold mb-2">Matches</h3>
          </div>
          <div className="bg-gradient-primary rounded-xl p-6 text-white text-center shadow-glow-primary transform hover:scale-105 transition-all hover:shadow-glow-primary-lg group">
            <div className="flex justify-center mb-4">
              <IconRocket className="w-12 h-12 text-white group-hover:scale-110 transition-transform" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold mb-2">Delivers</h3>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-gray-400 mb-8">
            ...all powered by one unified Talent Intelligence Engine.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 border border-primary-800/30 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">The outsourced TA partner</h3>
            </div>
            <div className="bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 border border-primary-800/30 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">The assessment authority</h3>
            </div>
            <div className="bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 border border-primary-800/30 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">The matching intelligence layer</h3>
            </div>
            <div className="bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 border border-primary-800/30 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">The trust bridge between talent and opportunity</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

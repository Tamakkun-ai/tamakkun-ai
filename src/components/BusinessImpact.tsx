import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function BusinessImpact() {
  return (
    <section id="impact" className="py-20 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Business Impact
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-dark-800/80 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-primary-800/30">
            <h3 className="text-2xl font-bold text-primary-500 mb-6">
              Client Value
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-lg text-gray-300">Faster hiring cycles</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-lg text-gray-300">Lower mis-hire risk</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-lg text-gray-300">Reduced leadership time spent interviewing</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-lg text-gray-300">Higher-quality talent</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-lg text-gray-300">Transparent hiring decisions</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-800/80 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-primary-800/30">
            <h3 className="text-2xl font-bold text-primary-500 mb-6">
              TAMAKKUN AI Value
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ArrowRightIcon className="w-6 h-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-lg text-gray-300">Scalable TA operations</span>
              </li>
              <li className="flex items-start">
                <ArrowRightIcon className="w-6 h-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-lg text-gray-300">Standardized quality across MENA</span>
              </li>
              <li className="flex items-start">
                <ArrowRightIcon className="w-6 h-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-lg text-gray-300">Strong differentiation vs agencies</span>
              </li>
              <li className="flex items-start">
                <ArrowRightIcon className="w-6 h-6 text-primary-400 mr-3 flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-lg text-gray-300">Data-driven hiring authority</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-primary rounded-xl p-8 text-white shadow-glow-primary-lg">
          <h3 className="text-2xl font-bold text-center mb-6">
            Revenue Model
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm text-center border border-white/30">
              <h4 className="font-bold text-lg mb-2">Per-Hire Pricing</h4>
              <p className="text-sm opacity-90">Pay per successful placement</p>
            </div>
            <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm text-center border border-white/30">
              <h4 className="font-bold text-lg mb-2">Subscription TA</h4>
              <p className="text-sm opacity-90">Ongoing talent acquisition support</p>
            </div>
            <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm text-center border border-white/30">
              <h4 className="font-bold text-lg mb-2">AI Assessment Add-ons</h4>
              <p className="text-sm opacity-90">Standalone assessment services</p>
            </div>
            <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm text-center border border-white/30">
              <h4 className="font-bold text-lg mb-2">Enterprise Packages</h4>
              <p className="text-sm opacity-90">Full talent intelligence solutions</p>
            </div>
          </div>
          <p className="text-center mt-6 text-lg font-semibold">
            High-margin. Scalable. Repeatable.
          </p>
        </div>
      </div>
    </section>
  );
}

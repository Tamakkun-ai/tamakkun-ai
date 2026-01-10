import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Workflow() {
  const steps = [
    {
      number: '1',
      title: 'Client submits role requirements',
      description: 'Tell us what you need'
    },
    {
      number: '2',
      title: 'TAMAKKUN AI activates talent search',
      description: 'Our AI starts sourcing'
    },
    {
      number: '3',
      title: 'Candidates go through full AI assessment',
      description: '9-layer intelligence pipeline'
    },
    {
      number: '4',
      title: 'AI matches and ranks candidates',
      description: 'Intelligent matching algorithm'
    },
    {
      number: '5',
      title: 'Client receives vetted shortlist + reports',
      description: 'Ready-to-hire talent with full intelligence'
    },
    {
      number: '6',
      title: 'Hire decision made with confidence',
      description: 'No interviews needed'
    }
  ];

  return (
    <section className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          End-to-End Workflow
        </h2>
        <p className="text-xl text-center text-gray-400 mb-12">
          Simple. Fast. Intelligent.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-glow-primary">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-16 bg-primary-600/30 mx-auto mt-2"></div>
                  )}
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-dark-800/80 backdrop-blur-sm rounded-xl p-8 border border-primary-800/30 shadow-xl">
          <h3 className="text-2xl font-bold text-center text-white mb-6">
            What Clients Get
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-lg font-semibold text-gray-300 flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" strokeWidth={2} />
                No sourcing work
              </p>
              <p className="text-lg font-semibold text-gray-300 flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" strokeWidth={2} />
                No CV screening
              </p>
              <p className="text-lg font-semibold text-gray-300 flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" strokeWidth={2} />
                No interview rounds
              </p>
              <p className="text-lg font-semibold text-gray-300 flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" strokeWidth={2} />
                No guesswork
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-lg font-semibold text-primary-400 flex items-center">
                <ArrowRightIcon className="w-6 h-6 text-primary-400 mr-3 flex-shrink-0" strokeWidth={2} />
                Pre-assessed candidates
              </p>
              <p className="text-lg font-semibold text-primary-400 flex items-center">
                <ArrowRightIcon className="w-6 h-6 text-primary-400 mr-3 flex-shrink-0" strokeWidth={2} />
                Ranked shortlists
              </p>
              <p className="text-lg font-semibold text-primary-400 flex items-center">
                <ArrowRightIcon className="w-6 h-6 text-primary-400 mr-3 flex-shrink-0" strokeWidth={2} />
                Clear intelligence reports
              </p>
              <p className="text-lg font-semibold text-primary-400 flex items-center">
                <ArrowRightIcon className="w-6 h-6 text-primary-400 mr-3 flex-shrink-0" strokeWidth={2} />
                Role and business context matched
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

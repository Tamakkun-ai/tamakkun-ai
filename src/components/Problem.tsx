export default function Problem() {
  return (
    <section id="problem" className="py-20 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          The Problem
          <span className="block text-2xl text-gray-400 mt-2 font-normal">
            Market Reality in MENA
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-dark-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-primary-800/30">
            <h3 className="text-2xl font-bold text-white mb-6">
              Client-Side Hiring Challenges
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 text-xl">•</span>
                <span className="text-gray-300">Talent search is slow and fragmented</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 text-xl">•</span>
                <span className="text-gray-300">Heavy dependence on CVs and referrals</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 text-xl">•</span>
                <span className="text-gray-300">Interviews consume founder and leadership time</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 text-xl">•</span>
                <span className="text-gray-300">No standardized way to assess communication quality, resilience, or cultural fit</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 text-xl">•</span>
                <span className="text-gray-300">Hiring decisions are subjective and inconsistent</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 text-xl">•</span>
                <span className="text-gray-300">Mis-hires lead to lost time, increased churn, and operational instability</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-800/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-primary-800/30">
            <h3 className="text-2xl font-bold text-white mb-6">
              Recruitment Market Gaps
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 text-xl">•</span>
                <span className="text-gray-300">Traditional agencies rely on CV screening</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 text-xl">•</span>
                <span className="text-gray-300">Assessment quality varies by recruiter</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 text-xl">•</span>
                <span className="text-gray-300">No explainability behind candidate selection</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 text-xl">•</span>
                <span className="text-gray-300">No predictive indicators of performance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-primary rounded-xl p-8 text-center shadow-glow-primary-lg">
          <p className="text-2xl md:text-3xl font-bold text-white">
            The region doesn't lack talent.
          </p>
          <p className="text-xl md:text-2xl text-white/90 mt-2">
            It lacks intelligence in how talent is selected.
          </p>
        </div>
      </div>
    </section>
  );
}

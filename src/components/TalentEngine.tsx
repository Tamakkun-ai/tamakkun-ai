import { 
  IconBrain, 
  IconHeart, 
  IconMicrophone, 
  IconVideo, 
  IconTarget, 
  IconGear, 
  IconFire, 
  IconChartSquare, 
  IconCheck 
} from './icons';

export default function TalentEngine() {
  const assessments = [
    {
      number: '4.1',
      title: 'Cognitive Ability (IQ)',
      Icon: IconBrain,
      measures: [
        'Analytical reasoning',
        'Problem-solving speed',
        'Logical decision-making',
        'Role-relevant thinking patterns'
      ]
    },
    {
      number: '4.2',
      title: 'Emotional Intelligence (EQ)',
      Icon: IconHeart,
      measures: [
        'Empathy and self-awareness',
        'Conflict navigation',
        'Communication adaptability',
        'Emotional regulation in work scenarios'
      ]
    },
    {
      number: '4.3',
      title: 'Communication & Presence',
      Icon: IconMicrophone,
      measures: [
        'Clarity and articulation',
        'Tone control and confidence',
        'Pacing and professionalism',
        'Client- and stakeholder-readiness'
      ]
    },
    {
      number: '4.4',
      title: 'AI-Driven Video Interviews',
      Icon: IconVideo,
      measures: [
        'Adaptive follow-up questions',
        'Stress and hesitation detection',
        'Benchmarking against top performers',
        'Role readiness scoring'
      ]
    },
    {
      number: '4.5',
      title: 'AI Screening & ICP Matching',
      Icon: IconTarget,
      measures: [
        'Role-specific ICP matching',
        'Industry context analysis',
        'High-performance behavioral markers',
        'Failure and churn indicators'
      ]
    },
    {
      number: '4.6',
      title: 'Role Competency Assessments',
      Icon: IconGear,
      measures: [
        'Technical capability evaluation',
        'Operational execution',
        'Decision-making under constraints',
        'Client and stakeholder handling'
      ]
    },
    {
      number: '4.7',
      title: 'Adversity Quotient (AQ)',
      Icon: IconFire,
      measures: [
        'Pressure response',
        'Ambiguity handling',
        'Client pushback resilience',
        'Changing requirements adaptation'
      ]
    },
    {
      number: '4.8',
      title: 'Reliability & Risk Scoring',
      Icon: IconChartSquare,
      measures: [
        'Consistency prediction',
        'Work ethic assessment',
        'Responsiveness evaluation',
        'Long-term stability indicators'
      ]
    },
    {
      number: '4.9',
      title: 'AI Hiring Recommendation',
      Icon: IconCheck,
      measures: [
        'Fit score calculation',
        'Strengths & weaknesses analysis',
        'Risk indicators identification',
        'Clear explanation of selection logic'
      ]
    }
  ];

  return (
    <section id="engine" className="py-20 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          TAMAKKUN AI
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-center text-primary-500 mb-16">
          Talent Intelligence Engine
        </h3>

        <p className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          All candidates entering TAMAKKUN AI (across MENA) pass through a multi-layered AI assessment pipeline before ever reaching a client.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assessments.map((assessment) => {
            const IconComponent = assessment.Icon;
            return (
            <div
              key={assessment.number}
              className="bg-dark-800/80 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-primary-800/30 hover:shadow-2xl hover:border-primary-600/50 transition-all group"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 bg-primary-400/10 rounded-lg group-hover:bg-primary-400/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <span className="text-sm text-primary-400 font-semibold block mb-1">{assessment.number}</span>
                  <h4 className="text-xl font-bold text-white">{assessment.title}</h4>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-2">
                  {assessment.title.includes('IQ') || assessment.title.includes('EQ') || assessment.title.includes('AQ')
                    ? 'Measures:'
                    : assessment.title.includes('Communication')
                    ? 'AI analyzes:'
                    : assessment.title.includes('Interviews')
                    ? 'Candidates complete structured AI-led interviews where TAMAKKUN AI:'
                    : assessment.title.includes('Screening')
                    ? 'The system automatically flags:'
                    : assessment.title.includes('Competency')
                    ? 'Scenario-based simulations measuring:'
                    : assessment.title.includes('Reliability')
                    ? 'Predicts:'
                    : 'Each candidate receives:'}
                </p>
                <ul className="space-y-2">
                  {assessment.measures.map((measure, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-400">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
          })}
        </div>

        <div className="mt-12 bg-gradient-primary rounded-xl p-8 text-center text-white shadow-glow-primary-lg">
          <p className="text-xl font-semibold mb-2">
            Talent Intelligence Report Includes:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm border border-white/30">
              <p className="font-bold">Fit Score</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm border border-white/30">
              <p className="font-bold">Strengths & Weaknesses</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm border border-white/30">
              <p className="font-bold">Risk Indicators</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm border border-white/30">
              <p className="font-bold">Selection Logic Explanation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

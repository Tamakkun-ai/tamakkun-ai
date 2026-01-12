export default function CTA() {

  return (
    <section id="contact" className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-primary-radial opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,65,0.3),transparent_70%)] animate-pulse"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Final Positioning
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-white mb-12 leading-relaxed">
          TAMAKKUN AI doesn't help you hire.
        </p>
        <p className="text-4xl md:text-5xl font-bold text-white mb-12 drop-shadow-2xl">
          It hires for you — intelligently.
        </p>

        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/30 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready to Transform Your Hiring Process?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:tasnim@tamakkun.ai?subject=Get Started with TAMAKKUN AI&body=Hello, I would like to learn more about TAMAKKUN AI and how it can help with our talent acquisition needs."
              className="bg-white text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl transform hover:scale-105 active:scale-95 text-center"
            >
              Get Started Today
            </a>
            <a 
              href="mailto:tasnim@tamakkun.ai?subject=Schedule a Demo - TAMAKKUN AI&body=Hello, I would like to schedule a demo to see TAMAKKUN AI in action."
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors shadow-xl transform hover:scale-105 active:scale-95 text-center"
            >
              Schedule a Demo
            </a>
          </div>
        </div>

        <p className="text-white/90 text-lg">
          Contact us to learn how TAMAKKUN AI can revolutionize your talent acquisition
        </p>
      </div>
    </section>
  );
}

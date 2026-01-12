import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-gray-400 py-12 border-t border-primary-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo size="md" variant="full" />
            </div>
            <p className="text-sm text-gray-400">
              AI-Powered Talent Acquisition Outsourcing for the MENA Region
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#problem" className="hover:text-primary-400 transition-colors">The Problem</a></li>
              <li><a href="#vision" className="hover:text-primary-400 transition-colors">Vision</a></li>
              <li><a href="#engine" className="hover:text-primary-400 transition-colors">Talent Engine</a></li>
              <li><a href="#impact" className="hover:text-primary-400 transition-colors">Business Impact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <p className="text-sm text-gray-400">Empowerment through Intelligence</p>
            <p className="text-sm mt-2 text-gray-400">Serving SMEs and Startups across MENA</p>
          </div>
        </div>
        <div className="border-t border-primary-900/30 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TAMAKKUN AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5 py-12 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16">
        
        {/* Brand / Logo Area */}
        <div className="flex flex-col flex-1">
          <Link href="/" className="text-xl font-bold text-white mb-4 tracking-tight">
            GNNIS<span className="text-teal-500">AI</span>
          </Link>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            数字化创造时代的崛起：智能化工具唤醒创造新力，提升您的创作效率。
          </p>
        </div>

        {/* Links Grid */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          
          {/* Company Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <Link href="/about" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
              About Us
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
          </div>
          
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col items-center sm:flex-row sm:justify-between text-xs text-gray-500 gap-4">
        <p>&copy; 2026 ai.gnnis.com. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">Twitter</a>
          <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

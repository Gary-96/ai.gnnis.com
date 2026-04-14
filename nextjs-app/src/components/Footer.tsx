import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/5 mt-16 bg-black z-10 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
        <div>
          <p>© {new Date().getFullYear()} JianHui AI. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-teal-400 transition-colors">About Us</Link>
          <Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
          <Link href="/" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center">
              <span className="text-navy-900 font-bold text-sm">V</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              Versewell
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/presenter"
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              SermonFlow
            </Link>
            <Link
              href="/study"
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              Study
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/presenter"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/presenter"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-semibold transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

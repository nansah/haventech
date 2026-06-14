import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center">
                <span className="text-navy-900 font-bold text-sm">V</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Versewell
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Building powerful, beautiful tools for the modern church and
              ministry leader.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium text-sm mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/presenter"
                  className="text-white/50 hover:text-white/80 text-sm transition-colors"
                >
                  SermonFlow
                </Link>
              </li>
              <li>
                <Link
                  href="/study"
                  className="text-white/50 hover:text-white/80 text-sm transition-colors"
                >
                  Versewell Study
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@versewell.io"
                  className="text-white/50 hover:text-white/80 text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/50 hover:text-white/80 text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/50 hover:text-white/80 text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Haventech. All rights reserved.
          </p>
          <p className="text-white/30 text-sm">
            Built with care for ministry leaders everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}

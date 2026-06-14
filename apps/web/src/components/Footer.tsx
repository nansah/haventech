import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gold-500">
              <span className="text-xs font-bold text-navy-950">V</span>
            </div>
            <span className="font-semibold text-white">Versewell</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/presenter"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              SermonFlow
            </Link>
            <Link
              href="/study"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Study
            </Link>
            <a
              href="https://presenter.versewell.io"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              presenter.versewell.io
            </a>
            <a
              href="https://study.versewell.io"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              study.versewell.io
            </a>
          </nav>

          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Versewell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

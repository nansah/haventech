import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-navy-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-500">
            <span className="text-sm font-bold text-navy-950">V</span>
          </div>
          <span className="text-lg font-bold text-white">Versewell</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/presenter"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            SermonFlow
          </Link>
          <Link
            href="/study"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            Study
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/presenter"
            className="hidden text-sm text-white/70 transition-colors hover:text-white md:block"
          >
            Sign in
          </Link>
          <Link href="/presenter" className="btn-primary py-2 text-xs">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

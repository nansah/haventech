import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SermonFlow — Craft and Present Sermons with Confidence",
  description:
    "SermonFlow is a complete sermon preparation and presentation platform for pastors and church leaders. Build outlines, integrate scripture, and deliver with a distraction-free teleprompter.",
};

const features = [
  {
    title: "Outline Builder",
    description:
      "Build structured sermon outlines with drag-and-drop ease. Organize your points, subpoints, and illustrations in a clean, focused editor.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
      </svg>
    ),
  },
  {
    title: "Teleprompter Mode",
    description:
      "Deliver your message with confidence. A distraction-free, scrolling presentation view keeps your notes front and center on any screen.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Scripture Integration",
    description:
      "Search and insert Bible verses inline as you write. Supports multiple translations — scripture fits naturally into your sermon flow.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Notes & Annotations",
    description:
      "Add speaker notes, reminders, and personal annotations to any section. Your private notes stay private — never visible to the audience.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Sermon Library",
    description:
      "Every sermon you write is saved, searchable, and ready to revisit. Build a library of your ministry's messages over time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Offline-Ready",
    description:
      "Sunday morning is not the time for connectivity issues. SermonFlow works offline so your presentation never depends on Wi-Fi.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const steps = [
  {
    step: "01",
    title: "Build your outline",
    description:
      "Start from a blank canvas or a template. Add your sermon title, main points, supporting scripture, and illustrations in a structured outline editor.",
  },
  {
    step: "02",
    title: "Refine and annotate",
    description:
      "Add private speaker notes to each section. Search and embed scripture inline. Rearrange sections until the flow feels right.",
  },
  {
    step: "03",
    title: "Present with confidence",
    description:
      "Switch to Teleprompter Mode when you step on stage. Your outline scrolls smoothly — you stay focused on your congregation, not your notes.",
  },
];

export default function PresenterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold-500/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Versewell
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              <span className="text-gold-500 text-xs font-semibold uppercase tracking-wider">
                SermonFlow
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Craft and present
              <br />
              <span className="text-gold-500">sermons with confidence</span>
            </h1>

            <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              SermonFlow is a complete sermon preparation and presentation
              platform. Build outlines, integrate scripture, and deliver your
              message with a distraction-free teleprompter — all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://presenter.versewell.io"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-base transition-all hover:shadow-lg hover:shadow-gold-500/25"
              >
                Open SermonFlow
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/study"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white font-medium text-base transition-colors"
              >
                See Versewell Study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              How SermonFlow works
            </h2>
            <p className="text-navy-500 text-lg max-w-xl mx-auto">
              From first draft to final delivery — a simple, focused workflow
              built around the way pastors actually prepare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <div className="text-6xl font-black text-gold-500/15 mb-4 leading-none">
                  {s.step}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{s.title}</h3>
                <p className="text-navy-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Everything you need to preach well
            </h2>
            <p className="text-navy-500 text-lg max-w-xl mx-auto">
              Every feature in SermonFlow exists to remove friction between you
              and your message.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-gray-100 hover:border-gold-200 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-500 flex items-center justify-center mb-5 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to prepare your next sermon?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Join pastors and church leaders using SermonFlow to prepare deeper,
            more organized messages every week.
          </p>
          <a
            href="https://presenter.versewell.io"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-base transition-all hover:shadow-lg hover:shadow-gold-500/25"
          >
            Open SermonFlow
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

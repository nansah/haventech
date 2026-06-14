import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Versewell Study — Deep Bible Study, Beautifully Organized",
  description:
    "Versewell Study is a modern Bible study environment with reading plans, cross-reference tools, personal annotations, and community discussion.",
};

const features = [
  {
    title: "Reading Plans",
    description:
      "Follow curated reading plans or build your own. Track your progress, get daily reminders, and never lose your place in your study journey.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Study Notes",
    description:
      "Highlight, annotate, and write study notes directly on any verse. Your notes are organized and searchable so you can build on them over time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Cross-Reference Tools",
    description:
      "Explore how scripture speaks to scripture. Cross-reference tools surface related verses, parallel passages, and thematic connections instantly.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Multiple Translations",
    description:
      "Read and compare across dozens of Bible translations side by side. Switch versions with a single tap to deepen your understanding of any passage.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Community Discussion",
    description:
      "Study with others. Join passage discussions, share insights, and learn from how your church community interprets and applies scripture.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: "Organized Collections",
    description:
      "Group verses, notes, and passages into named collections by topic, series, or season. Your study library grows with you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const steps = [
  {
    step: "01",
    title: "Choose your plan",
    description:
      "Select from curated reading plans for beginners through advanced students, or create a custom plan around a book, theme, or passage series.",
  },
  {
    step: "02",
    title: "Read, highlight, annotate",
    description:
      "Open any passage and study deeply. Highlight key verses, write study notes, explore cross-references, and compare translations — all inline.",
  },
  {
    step: "03",
    title: "Connect with community",
    description:
      "Share insights with your church group or study circle. Discuss passages together, ask questions, and grow through collective understanding.",
  },
];

export default function StudyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-3xl" />
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

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                Versewell Study
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Deep Bible study,
              <br />
              <span className="text-blue-400">beautifully organized</span>
            </h1>

            <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              Versewell Study is a modern Bible study environment built for
              serious students of scripture. Reading plans, cross-reference
              tools, personal annotations, and community discussion — all in one
              place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://study.versewell.io"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-base transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                Open Versewell Study
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/presenter"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white font-medium text-base transition-colors"
              >
                See SermonFlow →
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
              How Versewell Study works
            </h2>
            <p className="text-navy-500 text-lg max-w-xl mx-auto">
              A simple, distraction-free flow designed to help you go deeper in
              God&apos;s word — whether you&apos;re studying alone or with others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <div className="text-6xl font-black text-blue-500/15 mb-4 leading-none">
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
              Tools for serious students of scripture
            </h2>
            <p className="text-navy-500 text-lg max-w-xl mx-auto">
              Everything you need to study deeply, remember what you learn, and
              grow in community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-500 group-hover:text-white transition-colors">
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
            Start studying more deeply today
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Join Bible students and small group leaders using Versewell Study to
            go deeper in scripture every day.
          </p>
          <a
            href="https://study.versewell.io"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-base transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            Open Versewell Study
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

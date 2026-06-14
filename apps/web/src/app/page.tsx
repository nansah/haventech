import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Versewell — Powerful Tools Built for Ministry",
  description:
    "Versewell builds powerful, beautiful tools for the modern church — SermonFlow for sermon presentation and Versewell Study for deep Bible study.",
};

const products = [
  {
    name: "SermonFlow",
    tagline: "Craft and present sermons with confidence",
    description:
      "A complete sermon preparation and presentation platform. Build outlines, integrate scripture, and deliver your message with a distraction-free teleprompter mode.",
    href: "/presenter",
    cta: "Explore SermonFlow",
    accent: "from-gold-500/20 to-gold-600/5",
    iconBg: "bg-gold-500",
    icon: "✦",
    features: ["Outline builder", "Teleprompter mode", "Scripture integration", "Audience notes"],
  },
  {
    name: "Versewell Study",
    tagline: "Deep Bible study, beautifully organized",
    description:
      "A modern Bible study environment built for serious students of scripture. Reading plans, cross-reference tools, personal annotations, and community discussion — all in one place.",
    href: "/study",
    cta: "Explore Study",
    accent: "from-blue-500/20 to-blue-600/5",
    iconBg: "bg-blue-500",
    icon: "✦",
    features: ["Reading plans", "Study notes", "Cross-references", "Community discussion"],
  },
];

const values = [
  {
    title: "Built for focus",
    description:
      "Every interface decision we make is about removing friction so you can spend more time on what matters — the message.",
  },
  {
    title: "Scripture-first",
    description:
      "The Bible is at the center of everything we build. Scripture integration is never an afterthought.",
  },
  {
    title: "Ministry-grade reliability",
    description:
      "Whether you're presenting on Sunday morning or studying at midnight, our tools are there when you need them.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold-500/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 mb-8">
            <span className="text-gold-500 text-xs font-semibold uppercase tracking-wider">
              Now in early access
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Powerful tools built
            <br />
            <span className="text-gold-500">for ministry</span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Versewell is a suite of purpose-built tools for church leaders,
            pastors, and Bible students — designed to help you prepare deeply
            and communicate clearly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/presenter"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-base transition-all hover:shadow-lg hover:shadow-gold-500/25"
            >
              Explore SermonFlow
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/study"
              className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white font-medium text-base transition-all"
            >
              Explore Study App
            </Link>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="bg-navy-900 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group relative rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 p-8 transition-all hover:border-white/20 hover:shadow-xl hover:shadow-black/20"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="relative">
                  <div className={`w-10 h-10 rounded-xl ${product.iconBg} flex items-center justify-center mb-6`}>
                    <span className="text-white text-lg">{product.icon}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gold-400 font-medium text-sm mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-white/60 text-base leading-relaxed mb-8">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/70 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-white font-medium text-sm group-hover:text-gold-400 transition-colors">
                    {product.cta}
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Why Versewell?
            </h2>
            <p className="text-navy-500 text-lg max-w-2xl mx-auto">
              Ministry tools should be as thoughtfully crafted as the work they
              support. Here&apos;s what guides everything we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="relative">
                <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center mb-5">
                  <span className="text-gold-500 font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-navy-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to elevate your ministry?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Join ministry leaders who are using Versewell tools to prepare
            better sermons and go deeper in God&apos;s word.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/presenter"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-base transition-all hover:shadow-lg hover:shadow-gold-500/25"
            >
              Get started with SermonFlow
            </Link>
            <Link
              href="/study"
              className="inline-flex items-center px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 text-white font-medium text-base transition-colors"
            >
              Try Versewell Study
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

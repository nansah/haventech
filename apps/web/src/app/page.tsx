import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Versewell — Powerful tools built for ministry",
};

const products = [
  {
    id: "presenter",
    href: "/presenter",
    externalHref: "https://presenter.versewell.io",
    label: "Sermon Preparation & Presentation",
    name: "SermonFlow",
    tagline: "Craft and present sermons with confidence",
    description:
      "A thoughtfully designed workspace for sermon preparation, structuring, and live presentation. From first draft to final delivery, SermonFlow keeps you focused on the message that matters.",
    color: "from-blue-500/20 to-indigo-500/10",
    iconBg: "bg-blue-500",
    icon: "✦",
    features: ["Outline builder", "Teleprompter mode", "Scripture lookup", "Presentation view"],
    cta: "Explore SermonFlow",
  },
  {
    id: "study",
    href: "/study",
    externalHref: "https://study.versewell.io",
    label: "Bible Study & Discipleship",
    name: "Versewell Study",
    tagline: "Deep Bible study, beautifully organized",
    description:
      "Tools for serious students of Scripture. Reading plans, layered annotations, cross-references, and community discussion — everything you need to go deeper in the Word.",
    color: "from-gold-500/20 to-amber-500/10",
    iconBg: "bg-gold-500",
    icon: "✧",
    features: ["Reading plans", "Study notes", "Cross-references", "Community"],
    cta: "Explore Versewell Study",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 text-center">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full bg-gold-500/5 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
              Built for ministry leaders
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Powerful tools{" "}
            <span className="text-gold-500">built for ministry</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
            Versewell creates focused, beautiful software for pastors, teachers,
            and students of the Word — so you can spend less time on logistics
            and more time on what matters.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/presenter" className="btn-primary px-8 py-3 text-sm">
              Explore SermonFlow →
            </Link>
            <Link href="/study" className="btn-secondary px-8 py-3 text-sm">
              Explore Study App
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
            <div className="h-2 w-0.5 animate-bounce rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="section-label mb-3">Our products</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Two tools. One mission.
            </h2>
            <p className="mt-4 text-white/50">
              Each product is purpose-built for a specific need in the ministry
              lifecycle.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${product.color} p-8 transition-all hover:border-white/20 hover:scale-[1.01]`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${product.iconBg} text-lg`}
                  >
                    {product.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      {product.label}
                    </p>
                    <h3 className="font-bold text-white text-xl">
                      {product.name}
                    </h3>
                  </div>
                </div>

                <p className="mb-4 text-lg font-semibold text-white">
                  {product.tagline}
                </p>

                <p className="mb-6 text-sm leading-relaxed text-white/60">
                  {product.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-sm font-semibold text-gold-400 group-hover:gap-2 transition-all">
                  {product.cta}
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Versewell */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="section-label mb-3">Our approach</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Software with a deeper purpose
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "◈",
                title: "Focused by design",
                body: "Every feature earns its place. We build tools that help you concentrate on the work of ministry, not the mechanics of software.",
              },
              {
                icon: "◉",
                title: "Built for real workflows",
                body: "Shaped by the actual rhythms of pastors and teachers — Sunday preparation cycles, weekly study, and long-term discipleship.",
              },
              {
                icon: "◎",
                title: "Beautiful and accessible",
                body: "Great design isn't a luxury. Clarity and beauty help you stay present to what you're preparing — and help your congregation receive it.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 text-2xl text-gold-500">{item.icon}</div>
                <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to transform your ministry workflow?
          </h2>
          <p className="mb-8 text-white/50">
            Start with SermonFlow for your sermon preparation, or dive into
            Versewell Study for deeper Scripture engagement. Both are built to
            serve the mission.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/presenter" className="btn-primary px-8 py-3">
              Start with SermonFlow
            </Link>
            <Link href="/study" className="btn-secondary px-8 py-3">
              Start with Study
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

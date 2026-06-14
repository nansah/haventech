import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Versewell Study — Deep Bible Study, Beautifully Organized",
  description:
    "Versewell Study is the Bible study tool for serious students of Scripture. Reading plans, layered annotations, cross-references, and community discussion.",
};

const features = [
  {
    icon: "◉",
    title: "Bible Reading Plans",
    description:
      "Follow structured reading plans designed for individuals, small groups, and congregations. Track your progress, stay consistent, and receive gentle reminders that keep you engaged day after day.",
  },
  {
    icon: "✧",
    title: "Study Notes & Annotations",
    description:
      "Layer your own insights directly onto the text. Highlight, underline, and write notes that stay attached to the passage. Your notes build into a personal commentary over years of study.",
  },
  {
    icon: "◎",
    title: "Cross-Reference Tools",
    description:
      "Surface thematic connections across the whole canon. Click any verse to see where related themes, prophecies, and echoes appear elsewhere in Scripture — and follow the thread wherever it leads.",
  },
  {
    icon: "❖",
    title: "Community Discussion",
    description:
      "Study together. Share reflections on passages, respond to others' insights, and see how your community is engaging with the same text. Iron sharpening iron, at your own pace.",
  },
];

const steps = [
  {
    step: "01",
    title: "Choose your plan",
    body: "Select a reading plan that fits your season — chronological, topical, book-by-book, or a custom track. Start at any time.",
  },
  {
    step: "02",
    title: "Read and reflect",
    body: "Open the day's passage in a clean, distraction-free reading environment. Multiple translations available at a tap.",
  },
  {
    step: "03",
    title: "Annotate and connect",
    body: "Highlight key verses, add your reflections, and explore cross-references that deepen your understanding of the text.",
  },
  {
    step: "04",
    title: "Share and discuss",
    body: "Post a reflection to your community, respond to others, and grow together through the Word.",
  },
];

export default function StudyPage() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-32 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[800px] rounded-full bg-gold-500/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-gold-500 text-xs font-bold text-navy-950">
              V
            </div>
            <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
              Versewell Study
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Deep Bible study,{" "}
            <span className="text-gold-500">beautifully organized</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
            Versewell Study gives serious students of Scripture the tools to go
            deeper — without the complexity. Clean reading experience, powerful
            annotation, and community built right in.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://study.versewell.io"
              className="btn-primary px-8 py-3 text-sm"
            >
              Go to App →
            </a>
            <Link href="/" className="btn-secondary px-8 py-3 text-sm">
              ← Back to Versewell
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="section-label mb-3">Features</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Built for every kind of student
            </h2>
            <p className="mt-4 text-white/50">
              Whether you&apos;re a daily reader, a small group leader, or a
              lifelong learner — Versewell Study meets you where you are.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20"
              >
                <div className="mb-4 text-3xl text-gold-500">{feature.icon}</div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="section-label mb-3">How it works</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              A rhythm that fits your life
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                <div className="mb-4 text-4xl font-bold text-white/10">
                  {step.step}
                </div>
                <h3 className="mb-2 font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-light italic leading-relaxed text-white/70">
            &ldquo;Your word is a lamp to my feet and a light to my path.&rdquo;
          </p>
          <p className="mt-4 text-sm text-white/30">Psalm 119:105</p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gold-500/20 bg-gold-500/10 p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Start studying with clarity today
          </h2>
          <p className="mb-8 text-white/60">
            Versewell Study is available now at study.versewell.io. Open a
            reading plan, annotate your first passage, and discover what it
            feels like to truly engage with Scripture.
          </p>
          <a
            href="https://study.versewell.io"
            className="btn-primary inline-flex px-10 py-3"
          >
            Go to App →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

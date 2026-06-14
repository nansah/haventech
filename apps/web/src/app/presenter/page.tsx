import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SermonFlow — Craft and Present Sermons with Confidence",
  description:
    "SermonFlow is the sermon preparation and presentation tool built for pastors. Outline builder, teleprompter, scripture integration, and live presentation mode.",
};

const features = [
  {
    icon: "❖",
    title: "Sermon Outline Builder",
    description:
      "Structure your message with an intuitive drag-and-drop outline builder. Organize points, sub-points, and illustrations in a clean, focused workspace that keeps your train of thought clear from start to finish.",
  },
  {
    icon: "◎",
    title: "Presentation Mode & Teleprompter",
    description:
      "Deliver with confidence. SermonFlow's full-screen presentation mode displays your notes at a readable pace, with an integrated teleprompter so you can maintain eye contact while staying on message.",
  },
  {
    icon: "✦",
    title: "Scripture Integration",
    description:
      "Search and insert Bible passages from multiple translations inline as you write. Verses flow naturally into your outline with proper attribution, so you're never copying and pasting from another tab.",
  },
  {
    icon: "◈",
    title: "Notes & Annotations",
    description:
      "Add private notes, delivery cues, and timing markers to any section. Highlight key phrases, add speaker notes visible only to you, and build a living document that improves with every message.",
  },
];

const steps = [
  {
    step: "01",
    title: "Start your outline",
    body: "Open a new sermon, set your passage and title, and begin building your structure. SermonFlow's blank canvas keeps distractions away.",
  },
  {
    step: "02",
    title: "Write and develop",
    body: "Flesh out each point with scripture, illustrations, and your own words. The integrated Bible search means you never leave the page.",
  },
  {
    step: "03",
    title: "Rehearse and refine",
    body: "Use presentation preview to walk through your message before Sunday. Adjust timing, add delivery notes, and feel fully prepared.",
  },
  {
    step: "04",
    title: "Present with confidence",
    body: "Launch presentation mode on Sunday morning. Your full outline and teleprompter are ready. Focus on your congregation, not your screen.",
  },
];

export default function PresenterPage() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-32 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[800px] rounded-full bg-blue-500/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-500 text-xs font-bold text-white">
              S
            </div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              SermonFlow by Versewell
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
            Craft and present sermons{" "}
            <span className="text-blue-400">with confidence</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
            SermonFlow is the end-to-end sermon workspace for pastors and
            teachers — from the first outline to the final amen. Prepare
            clearly, present boldly.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://presenter.versewell.io"
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
              Everything your sermon needs
            </h2>
            <p className="mt-4 text-white/50">
              A complete toolkit — no juggling between apps.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20"
              >
                <div className="mb-4 text-3xl text-blue-400">{feature.icon}</div>
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
              From blank page to pulpit
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

      {/* CTA */}
      <section className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-blue-500/20 bg-blue-500/10 p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to level up your sermon prep?
          </h2>
          <p className="mb-8 text-white/60">
            SermonFlow is waiting for you at presenter.versewell.io. Open it,
            create your first sermon, and see how much clearer Sunday feels.
          </p>
          <a
            href="https://presenter.versewell.io"
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

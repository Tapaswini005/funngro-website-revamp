import Link from "next/link";
import Navbar from "@/components/Navbar";

const audiences = [
  {
    label: "FOR TEENS",
    title: "Turn your skills into real experience.",
    description:
      "Discover real projects from brands, earn while you learn, and build a portfolio that shows what you can actually do.",
    benefits: [
      "Work on real brand projects",
      "Earn while developing your skills",
      "Build experience for your future",
    ],
    button: "Explore Teen Opportunities",
  },
  {
    label: "FOR COMPANIES",
    title: "Connect with the next generation.",
    description:
      "Reach young talent for campaigns, content, insights, testing, promotion, and other projects that need fresh perspectives.",
    benefits: [
      "Access a large young talent community",
      "Run campaigns across multiple categories",
      "Get fresh ideas from Gen Z",
    ],
    button: "Work With Young Talent",
  },
];

export default function AudiencePage() {
  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      <Navbar />

      <section className="px-6 pb-24 pt-16 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#45d483]">
              The Funngro ecosystem
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              One platform.
              <span className="text-[#45d483]"> Two sides.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Funngro brings ambitious young people and forward-thinking
              companies together to create opportunities that work for both.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {audiences.map((audience) => (
              <article
                id={audience.label === "FOR TEENS" ? "teens" : "companies"}
                key={audience.label}
                className="rounded-[2rem] border border-white/10 bg-[#0d1828] p-8 sm:p-10"
              >
                <p className="text-sm font-semibold tracking-widest text-[#45d483]">
                  {audience.label}
                </p>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white">
                  {audience.title}
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                  {audience.description}
                </p>

                <div className="mt-8 space-y-4">
                  {audience.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#45d483]/10 text-sm text-[#45d483]">
                        ✓
                      </span>

                      <span className="text-sm text-slate-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="mt-10 rounded-full bg-[#45d483] px-6 py-3 text-sm font-semibold text-[#08111f] transition-all hover:bg-[#5ee396] hover:shadow-lg hover:shadow-[#45d483]/20"
                >
                  {audience.button} →
                </button>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-[#0d1828] p-8 text-center sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#45d483]">
              Start your journey
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to turn opportunity into action?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
              Choose your path and take the next step with Funngro.
            </p>

            <Link
              href="/"
              className="mt-7 inline-flex rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#45d483]/40 hover:text-[#45d483]"
            >
              Back to homepage →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
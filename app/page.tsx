import Navbar from "@/components/Navbar";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import AudienceSection from "@/components/AudienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#08111f] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#45d483]/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-96px)] w-full max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          {/* Hero content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#45d483]" />
              Real projects. Real experience.
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Turn your skills
              <br />
              into{" "}
              <span className="text-[#45d483]">opportunities.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400 sm:text-xl">
              Funngro connects young talent with real companies and
              meaningful projects — helping you build skills, experience and
              your future.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/audience#teens"
                className="rounded-full bg-[#45d483] px-7 py-3.5 text-center font-semibold text-[#08111f] transition-all hover:-translate-y-0.5 hover:bg-[#5ee396] hover:shadow-xl hover:shadow-[#45d483]/20"
              >
                I&apos;m a Teen →
              </a>

              <a
                href="/audience#companies"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-center font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                I&apos;m a Company →
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-8 text-sm text-slate-500">
              Learn. Work. Earn. Grow.
            </p>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto hidden w-full max-w-lg md:block">
            {/* Main project card */}
            <div className="relative rounded-3xl border border-white/10 bg-[#111c2c] p-6 shadow-2xl shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-[#45d483]/30 hover:shadow-[#45d483]/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Featured project</p>
                  <h2 className="mt-1 text-xl font-semibold">
                    UI/UX Designer
                  </h2>
                </div>

                <div className="rounded-full bg-[#45d483]/10 px-3 py-1.5 text-xs font-medium text-[#45d483]">
                  New
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-[#0b1625] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Landing page design</p>
                    <p className="mt-2 text-2xl font-bold">₹5,000</p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#45d483]/10 text-xl">
                    ✦
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                    UI/UX
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                    Remote
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                    Beginner
                  </span>
                </div>

                <button className="mt-6 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#08111f] transition hover:bg-slate-200">
                  View Project
                </button>
              </div>
            </div>

            {/* Floating earnings card */}
            <div className="absolute -bottom-8 -left-6 rounded-2xl border border-white/10 bg-[#162235] p-4 shadow-xl sm:-left-10">
              <p className="text-xs text-slate-400">Skills → Experience</p>
              <p className="mt-1 text-lg font-bold text-[#45d483]">
                Keep growing 🚀
              </p>
            </div>

            {/* Floating status card */}
            <div className="absolute -right-4 -top-6 rounded-2xl border border-white/10 bg-[#162235] px-5 py-4 shadow-xl sm:-right-8">
              <p className="text-xs text-slate-400">Opportunity</p>
              <p className="mt-1 text-sm font-semibold text-white">
                Matched for you ✓
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <HowItWorks />
      <AudienceSection />
      <ProjectsSection />
      <CTASection />
    </main>
    <Footer />
    </>
  );
}
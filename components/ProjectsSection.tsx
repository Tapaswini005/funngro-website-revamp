const projects = [
  {
    category: "UI/UX DESIGN",
    title: "Design a modern landing page",
    description:
      "Create a clean and engaging landing page experience for a growing brand.",
    skills: "Figma · UI/UX · Creativity",
    payout: "₹5,000",
  },
  {
    category: "CONTENT",
    title: "Create social media content",
    description:
      "Help a brand create short-form content that connects with young audiences.",
    skills: "Instagram · Writing · Creativity",
    payout: "₹3,000",
  },
  {
    category: "MARKETING",
    title: "Build a brand awareness campaign",
    description:
      "Come up with fresh ideas to help a brand reach and engage new customers.",
    skills: "Marketing · Ideas · Research",
    payout: "₹4,000",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-[#08111f] py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#45d483]">
              Featured opportunities
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Find work that fits your skills.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              Explore opportunities across design, content, marketing and more.
              Pick projects that help you learn, earn and grow.
            </p>
          </div>

          <a
            href="#all-projects"
            className="inline-flex w-fit items-center rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#45d483]/40 hover:text-[#45d483]"
          >
            View all projects →
          </a>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-3xl border border-white/10 bg-[#0d1828] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#45d483]/30 hover:shadow-2xl hover:shadow-black/20"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#45d483]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#45d483]">
                  {project.category}
                </span>

                <span className="text-sm font-semibold text-white">
                  {project.payout}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Skills
                </p>

                <p className="mt-2 text-sm text-slate-300">
                  {project.skills}
                </p>
              </div>

              <a
                href="#project-details"
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#45d483] transition-transform group-hover:translate-x-1"
              >
                View opportunity →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
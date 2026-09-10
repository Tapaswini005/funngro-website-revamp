const audiences = [
  {
    id: "teens",
    label: "FOR TEENS",
    title: "Your skills can take you places.",
    description:
      "Work on real projects for real brands, earn while you learn, and turn your skills into experience that stands out.",
    points: [
      "Find projects that match your skills",
      "Build real-world experience",
      "Earn while you learn",
    ],
    button: "Explore Teen Opportunities",
  },
  {
    id: "companies",
    label: "FOR COMPANIES",
    title: "Young talent. Real impact.",
    description:
      "Connect with a community of young Indians ready to help your brand with promotion, content, insights, testing, and more.",
    points: [
      "Reach young talent at scale",
      "Launch campaigns quickly",
      "Get fresh ideas and perspectives",
    ],
    button: "Work With Young Talent",
  },
];

export default function AudienceSection() {
  return (
    <section className="bg-[#0d1828] py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#45d483]">
            One platform. Two possibilities.
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built for ambitious teens and forward-thinking companies.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Whether you want to build your career or find the next generation
            of talent, Funngro helps you get started.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {audiences.map((audience) => (
            <div
              id={audience.id}
              key={audience.id}
              className="group rounded-3xl border border-white/10 bg-[#08111f] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#45d483]/40 hover:shadow-2xl hover:shadow-black/20 sm:p-10"
            >
              <p className="text-sm font-semibold tracking-widest text-[#45d483]">
                {audience.label}
              </p>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {audience.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {audience.description}
              </p>

              <div className="mt-8 space-y-4">
                {audience.points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#45d483]/10 text-sm text-[#45d483]">
                      ✓
                    </span>

                    <span className="text-sm text-slate-300">{point}</span>
                  </div>
                ))}
              </div>

              <a
                href={`#${audience.id}-cta`}
                className="mt-8 inline-flex items-center rounded-full bg-[#45d483] px-6 py-3 text-sm font-semibold text-[#08111f] transition-all hover:bg-[#5ee396] hover:shadow-lg hover:shadow-[#45d483]/20"
              >
                {audience.button}
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
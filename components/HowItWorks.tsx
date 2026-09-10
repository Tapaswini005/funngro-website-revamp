const steps = [
  {
    number: "01",
    title: "Download & Sign Up",
    description:
      "Create your Funngro account and verify your details to get started.",
  },
  {
    number: "02",
    title: "Pick a Brand Campaign",
    description:
      "Choose real projects and campaigns that match your skills and interests.",
  },
  {
    number: "03",
    title: "Complete & Get Paid",
    description:
      "Finish the project, build real experience, and get paid for your work.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#08111f] py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#45d483]">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            From your first project to your next opportunity.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Getting started with Funngro is simple. Find the right opportunity,
            do meaningful work, and grow your experience.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-[#0d1828] p-8 transition-all hover:-translate-y-1 hover:border-[#45d483]/30"
            >
              <span className="text-sm font-bold text-[#45d483]">
                {step.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function CTASection() {
  return (
    <section id="get-started" className="bg-[#0d1828] py-24">
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#45d483]/20 bg-[#08111f] px-6 py-16 text-center sm:px-12 lg:px-20">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#45d483]/10 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#45d483]/5 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#45d483]">
              Get started today
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your next opportunity could be one click away.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Whether you&apos;re ready to earn your first income or looking
              for young talent, start your Funngro journey today.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#teens-cta"
                className="rounded-full bg-[#45d483] px-7 py-3.5 text-sm font-semibold text-[#08111f] transition-all hover:bg-[#5ee396] hover:shadow-lg hover:shadow-[#45d483]/20"
              >
                I&apos;m a Teen →
              </a>

              <a
                href="#companies-cta"
                className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#45d483]/40 hover:text-[#45d483]"
              >
                I&apos;m a Company →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
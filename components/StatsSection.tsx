const stats = [
  {
    value: "70 Lakh+",
    label: "Young Indians",
  },
  {
    value: "5,000+",
    label: "Brands",
  },
  {
    value: "1,000+",
    label: "Live Projects",
  },
];

export default function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-[#0d1828]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 px-6 py-12 sm:grid-cols-3 lg:px-8">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center px-6 py-4 text-center ${
              index !== 0 ? "border-white/10 sm:border-l" : ""
            }`}
          >
            <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {stat.value}
            </p>

            <p className="mt-2 text-sm font-medium text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
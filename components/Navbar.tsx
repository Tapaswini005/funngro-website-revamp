import Link from "next/link";

const navItems = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Teens", href: "#teens" },
  { label: "For Companies", href: "#companies" },
];

export default function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold tracking-tight">
        funngro<span className="text-[#45d483]">.</span>
      </Link>

      {/* Navigation links */}
      <div className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center gap-3">
        <a
          href="#login"
          className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white sm:block"
        >
          Log in
        </a>

        <a
          href="#get-started"
          className="rounded-full bg-[#45d483] px-5 py-2.5 text-sm font-semibold text-[#08111f] transition-all hover:bg-[#5ee396] hover:shadow-lg hover:shadow-[#45d483]/20"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
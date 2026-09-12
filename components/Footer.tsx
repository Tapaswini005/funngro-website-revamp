import Link from "next/link";

const footerLinks = {
  Platform: [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "For Teens", href: "/audience#teens" },
    { label: "For Companies", href: "/audience#companies" },
  ],
  Company: [
    { label: "About Funngro", href: "/#about" },
    { label: "Contact", href: "/#contact" },
    { label: "Get Started", href: "/#get-started" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060d18]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              funngro<span className="text-[#45d483]">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Connecting young talent with real companies, meaningful
              projects, and opportunities to grow.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white">{title}</h3>

              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-[#45d483]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Funngro. All rights reserved.</p>

          <p>Built for the next generation.</p>
        </div>
      </div>
    </footer>
  );
}
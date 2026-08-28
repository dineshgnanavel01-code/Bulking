import { useState } from "react";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080a09]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d7ff35] text-[#080a09]">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path
                d="M14.4 14.4 9.6 9.6M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767-1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829zM2.515 5.343l6.364 6.364a2 2 0 1 1 2.829-2.829L9.94 7.11a2 2 0 1 1-2.829-2.828L5.343 2.515a2 2 0 1 1-2.828 2.828z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-xl font-black tracking-tight text-white">
            BULK<span className="text-[#d7ff35]">LAB</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition hover:text-[#d7ff35]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#start"
          className="hidden rounded-full bg-[#d7ff35] px-6 py-2.5 text-sm font-bold text-[#080a09] transition hover:bg-white lg:inline-block"
        >
          Start Training
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-zinc-300 lg:hidden"
          aria-label="Toggle Navigation"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#080a09] px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-[#d7ff35]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#start"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center rounded-xl bg-[#d7ff35] py-3 text-sm font-bold text-[#080a09]"
            >
              Start Training
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
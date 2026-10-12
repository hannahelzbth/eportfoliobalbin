
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-[#25231F]/10 bg-[#FFF8EE]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D7F36A] text-lg font-black text-[#25231F] transition duration-200 group-hover:-rotate-6">
            H
          </span>

          <span className="font-mono text-sm font-black uppercase leading-tight tracking-tight text-[#25231F] sm:text-base">
            Hannah Elizabeth
            <span className="block text-[#7652D4]">Balbin.</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider transition duration-200 hover:-translate-y-0.5 hover:bg-[#D7F36A] ${
                index === 0
                  ? "bg-[#25231F] text-white hover:bg-[#7652D4]"
                  : "text-[#5D554C] hover:text-[#25231F]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#25231F] bg-[#FFC6A8] text-xl font-bold text-[#25231F] transition duration-200 hover:-rotate-6 hover:bg-[#D7F36A] md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#25231F]/10 bg-[#FFF8EE] px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`rounded-xl px-5 py-4 font-mono text-sm font-bold uppercase tracking-widest transition duration-200 ${
                  index === 0
                    ? "bg-[#D7F36A] text-[#25231F]"
                    : "text-[#5D554C] hover:bg-[#FFC6A8] hover:text-[#25231F]"
                }`}
              >
                <span className="mr-3 text-[#7652D4]">
                  0{index + 1}
                </span>
                {link.label}
                <span className="float-right">↗</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

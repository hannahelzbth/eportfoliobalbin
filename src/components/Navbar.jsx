
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-[#D8C4AD] bg-[#F5EFE6]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="font-mono text-xl font-bold uppercase text-[#3E2B23]"
        >
          (Julius) JulyoGit E-Portfolio
        </a>

        <div className="hidden gap-6 md:flex">
          <a
            href="#home"
            className="font-mono font-bold uppercase tracking-widest text-[#5C4033] transition hover:text-[#A07855]"
          >
            Home
          </a>

          <a
            href="#about"
            className="font-mono font-bold uppercase tracking-widest text-[#5C4033] transition hover:text-[#A07855]"
          >
            About
          </a>

          <a
            href="#projects"
            className="font-mono font-bold uppercase tracking-widest text-[#5C4033] transition hover:text-[#A07855]"
          >
            Projects
          </a>

          <a
            href="#resume"
            className="font-mono font-bold uppercase tracking-widest text-[#5C4033] transition hover:text-[#A07855]"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="font-mono font-bold uppercase tracking-widest text-[#5C4033] transition hover:text-[#A07855]"
          >
            Contact
          </a>
        </div>

        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="rounded-lg border border-[#5C4033] px-3 py-2 text-xl text-[#5C4033] transition hover:bg-[#E8D8C4] md:hidden"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#D8C4AD] bg-[#F5EFE6] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 font-mono uppercase tracking-widest">
            <a
              href="#home"
              onClick={closeMenu}
              className="text-[#5C4033] transition hover:text-[#A07855]"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-[#5C4033] transition hover:text-[#A07855]"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-[#5C4033] transition hover:text-[#A07855]"
            >
              Projects
            </a>

            <a
              href="#resume"
              onClick={closeMenu}
              className="text-[#5C4033] transition hover:text-[#A07855]"
            >
              Resume
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-[#5C4033] transition hover:text-[#A07855]"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

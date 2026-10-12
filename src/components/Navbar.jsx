
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
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold text-black font-mono uppercase"
        >
          (Julius) JulyoGit E-Portfolio
        </a>

        <div className="hidden gap-6 md:flex">
          <a
            href="#home"
            className="text-black transition hover:text-green-600 font-bold uppercase font-mono tracking-widest"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-black transition hover:text-green-600 font-bold uppercase font-mono tracking-widest"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-black transition hover:text-green-600 font-bold uppercase font-mono tracking-widest"
          >
            Projects
          </a>

          <a
            href="#resume"
            className="text-black transition hover:text-green-600 font-bold uppercase font-mono tracking-widest"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="text-black transition hover:text-green-600 font-bold uppercase font-mono tracking-widest"
          >
            Contact
          </a>
        </div>

        <button
          onClick={toggleMenu}
          className="rounded-lg border border-black px-3 py-2 text-xl text-black md:hidden"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 font-mono uppercase tracking-widest">
            <a
              href="#home"
              onClick={closeMenu}
              className="text-black hover:text-green-600"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-black hover:text-green-600"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-black hover:text-green-600"
            >
              Projects
            </a>

            <a
              href="#resume"
              onClick={closeMenu}
              className="text-black hover:text-green-600"
            >
              Resume
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-black hover:text-green-600"
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
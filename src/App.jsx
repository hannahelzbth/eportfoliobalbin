
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowTopButton(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function returnToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="min-h-screen bg-[#FFF8EE] text-[#25231F]">
      <Navbar />

      <main>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <footer className="border-t-2 border-[#25231F] bg-[#D7F36A] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-mono text-sm font-black uppercase tracking-[0.2em]">
              Hannah Elizabeth Balbin.
            </p>

            <p className="mt-2 font-mono text-xs text-[#5D554C]">
              BS Information Technology Student
            </p>
          </div>

          <a
            href="#home"
            className="rounded-full border-2 border-[#25231F] bg-[#FFF8EE] px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest transition duration-200 hover:-translate-y-1 hover:bg-[#7652D4] hover:text-white"
          >
            Back to the beginning ↗
          </a>
        </div>

        <div className="mx-auto mt-6 max-w-7xl border-t border-[#25231F]/20 pt-5 text-center">
          <p className="font-mono text-xs text-[#5D554C]">
            © {new Date().getFullYear()} Hannah Elizabeth Balbin. Built with
            creativity, code, and curiosity.
          </p>
        </div>
      </footer>

      {showTopButton && (
        <button
          type="button"
          onClick={returnToTop}
          aria-label="Return to top of page"
          className="fixed bottom-6 right-6 z-50 flex h-14 items-center gap-2 rounded-full border-2 border-[#25231F] bg-[#7652D4] px-5 font-mono text-sm font-bold text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-[#D7F36A] hover:text-[#25231F]"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}

export default App;

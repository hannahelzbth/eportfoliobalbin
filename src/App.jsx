
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
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

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
    <div className="min-h-screen bg-[#F5EFE6]">
      <Navbar />

      <main>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <footer className="border-t border-[#D8C4AD] bg-[#E8D8C4] px-6 py-6 text-center font-mono text-sm text-[#5C4033]">
        <p>H A N N A H E - P O R T F O L I O</p>
      </footer>

      {showTopButton && (
        <button
          onClick={returnToTop}
          className="fixed bottom-6 right-6 rounded-lg border border-[#5C4033] bg-[#5C4033] px-4 py-3 font-mono text-sm font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-[#F5EFE6] hover:text-[#5C4033]"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}

export default App;

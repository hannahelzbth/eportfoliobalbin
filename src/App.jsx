import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectCard from "./components/ProjectCard";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    function handleScroll(){
      if (window.scrollY > 300){
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

  function returnToTop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
          <Home />
          <About />
          <Projects />
          <Resume />
          <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 px-6 py-6 text-center text-sm text-slate-500 font-mono">
        <p>@ (Julius) JulyoGit E-Portfolio</p>
      </footer>

      {showTopButton && (
        <button onClick={returnToTop} className="fixed bottom-6 right-6 rounded-lg bg-black px-4 py-3 text-sm font-bold text-white shadow-md transition hover:bg-white hover:text-black border border-black hover:-translate-y-1 font-mono"
        >
          ↑ Top
        </button>
      )}

    </div>
  );
}

export default App;

import { useState } from "react";

function Home() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [
    "/images/instant1.jpg",
    "/images/instant2.jpg",
    "/images/instant3.jpg",
    "/images/instant4.jpg",
    "/images/instant5.jpg",
  ];

  function nextPhoto() {
    setCurrentPhoto((current) => {
      if (current === photos.length - 1) {
        return 0;
      }

      return current + 1;
    });
  }

  return (
    <section
      id="home"
      className="min-h-[85vh] bg-[#F5EFE6] px-6 py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-lg font-bold uppercase text-[#795548]">
            Welcome to my e-portfolio
          </p>

          <h1 className="mb-5 font-mono text-3xl font-bold text-[#3E2B23] md:text-6xl">
            Hello, I'm Julius A. Pansoy Jr.
          </h1>

          <p className="mb-6 max-w-xl font-mono text-lg leading-relaxed text-[#5C4033]">
            I’m currently in my third year of college, studying Information Technology,
            interested in learning new technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg border border-[#5C4033] bg-[#5C4033] px-6 py-3 font-mono font-medium text-white transition hover:-translate-y-1 hover:bg-[#795548]"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-[#5C4033] px-6 py-3 font-mono font-medium text-[#5C4033] transition hover:-translate-y-1 hover:bg-[#5C4033] hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative h-72 w-72 md:h-96 md:w-96">
            <img
              src={photos[(currentPhoto + 1) % photos.length]}
              alt=""
              className="absolute left-3 top-3 h-72 w-72 rounded-2xl border border-[#D8C4AD] object-cover opacity-70 shadow-md md:left-4 md:top-4 md:h-96 md:w-96"
            />

            <div
              onClick={nextPhoto}
              className="relative cursor-pointer overflow-hidden rounded-2xl border border-[#C5A582] bg-[#E8D8C4] shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={photos[currentPhoto]}
                alt={`Instant ${currentPhoto + 1}`}
                className="h-72 w-72 object-cover md:h-96 md:w-96"
              />
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            {photos.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentPhoto
                    ? "bg-[#5C4033]"
                    : "bg-[#D8C4AD]"
                }`}
              ></div>
            ))}
          </div>

          <p className="mt-3 font-mono text-sm text-[#795548]">
            Julius and friends :D Click photo to see the next instant!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;


import { useState } from "react";

function Home() {
  // Keeps track of which photo is currently being displayed
  const [currentPhoto, setCurrentPhoto] = useState(0);

  // List of photos for the Instants feature
  const photos = [
    "/images/instant1.jpg",
    "/images/instant2.jpg",
    "/images/instant3.jpg",
    "/images/instant4.jpg",
    "/images/instant5.jpg",
  ];

  // Changes to the next photo when clicked
  function nextPhoto() {
    setCurrentPhoto((current) => {
      // Go back to the first photo after the last photo
      if (current === photos.length - 1) {
        return 0;
      }

      return current + 1;
    });
  }

  return (
    <section
      id="home"
      className="min-h-[85vh] bg-white px-6 py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">

        <div>
          <p className="mb-3 font-mono text-lg font-bold uppercase text-black">
            Welcome to my e-portfolio
          </p>

          <h1 className="mb-5 text-3xl font-mono font-bold text-black md:text-6xl">
            Hello, I'm Julius A. Pansoy Jr.
          </h1>

          <p className="mb-6 max-w-xl font-mono text-lg leading-8 text-black leading-relaxed">
            I’m currently in my third year of college, studying Information Technology,
            Interested in learning new technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-black px-6 py-3 font-mono font-medium text-white transition hover:-translate-y-1 hover:bg-white hover:text-black border border-black"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-black px-6 py-3 font-mono font-medium text-black transition hover:bg-black hover:text-white hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">

          {/* Photo stack */}
          <div className="relative h-72 w-72 md:h-96 md:w-96">

            {/* Next photo behind the current photo */}
            <img
              src={photos[(currentPhoto + 1) % photos.length]}
              alt=""
              className="absolute left-3 top-3 h-72 w-72 rounded-2xl object-cover opacity-70 shadow-md md:left-4 md:top-4 md:h-96 md:w-96"
            />

            {/* Current photo */}
            <div
              onClick={nextPhoto}
              className="relative cursor-pointer overflow-hidden rounded-2xl bg-slate-100 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={photos[currentPhoto]}
                alt={`Instant ${currentPhoto + 1}`}
                className="h-72 w-72 object-cover md:h-96 md:w-96"
              />
            </div>

          </div>

          {/* Photo indicators */}
          <div className="mt-6 flex gap-2">
            {photos.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentPhoto
                    ? "bg-black"
                    : "bg-slate-300"
                }`}
              ></div>
            ))}
          </div>

          <p className="mt-3 font-mono text-sm text-slate-500">
            Julius and friends :D click photo to see the next instant!
          </p>

        </div>
        </div>
    </section>
  );
}

export default Home;
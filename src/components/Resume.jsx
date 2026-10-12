
function Resume() {
  return (
    <section
      id="resume"
      className="bg-slate-50 px-6 py-20"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-black font-mono">
          Resume / CV
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-black bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold text-black font-mono">
              Education
            </h3>

            <h4 className="font-semibold text-black font-mono">
              Bachelor of Science in Information Technology
            </h4>

            <p className="mt-2 text-black font-mono">
              Cavite State University - Tanza Campus
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Present
            </p>

            <br />
                        <h4 className="font-semibold text-black font-mono">
              Computer Programming - TVL
            </h4>

            <p className="mt-2 text-black font-mono">
              Tanza National Trade School - Main
            </p>

            <p className="mt-1 text-sm text-slate-500">
              2023 - Graduate
            </p>

          </div>

          <div className="rounded-xl border border-black bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold text-black font-mono">
              Experience
            </h3>

            <h4 className="font-semibold text-black font-mono">
              Student Developer
            </h4>

            <p className="mt-2 text-black font-mono">
              Worked on school projects involving web development,
              programming, and responsive web design.
            </p>
          </div>

          <div className="rounded-xl border border-black font-mono bg-white p-6 shadow-sm md:col-span-2">
            <h3 className="mb-4 text-xl font-semibold text-black">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-white border border-black px-4 py-2 text-sm text-black shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                Basic ReactJS
              </span>

              <span className="rounded-full bg-white border border-black px-4 py-2 text-sm text-black shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                Java
              </span>

              <span className="rounded-full bg-white border border-black px-4 py-2 text-sm text-black shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                JavaScript
              </span>

              <span className="rounded-full bg-white border border-black px-4 py-2 text-sm text-black shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                HTML
              </span>

              <span className="rounded-full bg-white border border-black px-4 py-2 text-sm text-black shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                CSS
              </span>

              <span className="rounded-full bg-white border border-black px-4 py-2 text-sm text-black shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                Basic Tailwind CSS
              </span>

              <span className="rounded-full bg-white border border-black px-4 py-2 text-sm text-black shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
               (Learning) Git & GitHub
              </span>

              <span className="rounded-full bg-white border border-black px-4 py-2 text-sm text-black shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                Basic MySql database
              </span>

              <span className="rounded-full bg-white border border-black px-4 py-2 text-sm text-black shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                Basic Python
              </span>

              <span className="rounded-full bg-white border border-black px-4 py-2 text-sm text-black shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                Basic Terminal Proficiency
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
          href="/Julius-Pansoy-CV.pdf"
          download
          className="inline-block rounded-lg border border-black bg-black px-6 py-3 font-bold leading-relaxed text-white transition hover:bg-white hover:text-black"
          >
          Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
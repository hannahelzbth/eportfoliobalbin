
function Resume() {
  const skills = [
    "HTML",
    "CSS",
    "Java",
    "JavaScript",
    "Basic ReactJS",
    "Basic Tailwind CSS",
    "Learning Git & GitHub",
    "Basic MySQL Database",
    "Basic Python",
    "Basic Terminal Proficiency",
  ];

  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-[#FFC6A8] px-6 py-24 text-[#25231F]"
    >
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-[#D7F36A] opacity-70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.3em] text-[#7652D4]">
              03 / My background
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              RESUME
              <br />
              <span className="text-[#7652D4]">/ CV.</span>
            </h2>
          </div>

          <p className="max-w-md border-l-4 border-[#7652D4] pl-5 font-mono text-sm leading-7 text-[#5D554C] md:justify-self-end">
            My educational background, project experience, and technical
            skills as I continue growing as an Information Technology student
            and aspiring developer.
          </p>
        </div>

        <div className="mb-6 rounded-[2rem] border-2 border-[#25231F] bg-[#FFF8EE] p-7 sm:p-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#7652D4]">
                Curriculum Vitae
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Hannah Elizabeth Balbin
              </h3>

              <p className="mt-3 font-mono text-sm font-bold uppercase tracking-widest text-[#5D554C]">
                Bachelor of Science in Information Technology
              </p>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#D7F36A] text-3xl font-black">
              H.
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border-2 border-[#25231F] bg-[#FFF8EE] p-7 sm:p-9">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#7652D4]">
              01 / Academic history
            </p>

            <h3 className="mb-7 text-2xl font-black tracking-tight">
              Education<span className="text-[#7652D4]">.</span>
            </h3>

            <div className="border-l-2 border-[#D7F36A] pl-5">
              <span className="rounded-full bg-[#D7F36A] px-3 py-1 font-mono text-xs font-bold">
                Present
              </span>

              <h4 className="mt-4 text-lg font-black leading-snug">
                Bachelor of Science in Information Technology
              </h4>

              <p className="mt-2 font-mono text-sm leading-6 text-[#5D554C]">
                Cavite State University - Tanza Campus
              </p>
            </div>

            <div className="mt-8 border-l-2 border-[#FFC6A8] pl-5">
              <span className="rounded-full bg-[#FFC6A8] px-3 py-1 font-mono text-xs font-bold">
                Graduated 2023
              </span>

              <h4 className="mt-4 text-lg font-black leading-snug">
                Computer Programming - TVL
              </h4>

              <p className="mt-2 font-mono text-sm leading-6 text-[#5D554C]">
                Tanza National Trade School - Main
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#7652D4] p-7 text-white sm:p-9">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#E5DBFF]">
              02 / Practical learning
            </p>

            <h3 className="mb-7 text-2xl font-black tracking-tight">
              Experience<span className="text-[#D7F36A]">.</span>
            </h3>

            <div className="rounded-2xl bg-[#6241BD] p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h4 className="text-lg font-black">Student Developer</h4>
                <span className="text-2xl text-[#D7F36A]">↗</span>
              </div>

              <p className="font-mono text-sm leading-7 text-white/90">
                Developed academic and personal projects involving web
                development, programming, and responsive user interfaces.
                Practiced building applications and improving problem-solving
                skills through hands-on learning.
              </p>
            </div>

            <p className="mt-6 font-mono text-xs leading-6 text-white/75">
              Focus areas: web development, application development, and
              continuous technical learning.
            </p>
          </div>

          <div className="rounded-[2rem] border-2 border-[#25231F] bg-[#D7F36A] p-7 sm:p-9 md:col-span-2">
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#5D554C]">
                  03 / My technical toolkit
                </p>

                <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Skills & Technologies
                </h3>
              </div>

              <span className="self-start rounded-full border border-[#25231F]/30 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest sm:self-auto">
                Always learning ✳
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className={`rounded-full border border-[#25231F]/20 px-4 py-3 font-mono text-sm font-bold transition duration-200 hover:-translate-y-1 hover:shadow-md ${
                    index % 3 === 0
                      ? "bg-[#FFF8EE]"
                      : index % 3 === 1
                        ? "bg-[#FFC6A8]"
                        : "bg-white"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[2rem] bg-[#25231F] p-7 text-center text-white sm:flex-row sm:text-left sm:p-9">
          <div>
            <h3 className="text-2xl font-black tracking-tight">
              Interested in my background?
            </h3>

            <p className="mt-2 font-mono text-sm leading-6 text-white/70">
              Get in touch to learn more about my skills and projects.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#D7F36A] px-6 py-4 font-mono text-sm font-bold text-[#25231F] transition duration-200 hover:-translate-y-1 hover:bg-[#FFC6A8]"
          >
            Contact Me ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;

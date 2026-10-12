
function About() {
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

  const interests = [
    "Web Development",
    "Programming",
    "UI Design",
    "Learning New Technologies",
    "Gaming",
    "Drawing",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFF8EE] px-6 py-24 text-[#25231F]"
    >
      <div className="pointer-events-none absolute -right-16 top-10 h-48 w-48 rounded-full bg-[#D7F36A] opacity-70 blur-2xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-48 w-48 rounded-full bg-[#FFC6A8] opacity-60 blur-2xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.3em] text-[#7652D4]">
              01 / Get to know me
            </p>

            <h2 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              A LITTLE
              <br />
              ABOUT <span className="text-[#7652D4]">ME.</span>
            </h2>
          </div>

          <p className="max-w-md border-l-4 border-[#FF916B] pl-5 font-mono text-sm leading-7 text-[#5D554C] md:justify-self-end">
            Curious mind, creative hands, and a growing passion for
            technology. This is a little look at who I am and what I love
            learning.
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-12">
          <div className="relative rounded-[2rem] bg-[#D7F36A] p-7 sm:p-10 md:col-span-7">
            <span className="inline-block rounded-full border border-[#25231F]/20 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest">
              Hello, I'm
            </span>

            <h3 className="mt-8 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Hannah Elizabeth
              <br />
              Balbin<span className="text-[#7652D4]">.</span>
            </h3>

            <p className="mt-3 font-mono text-sm font-bold uppercase tracking-widest">
              BS Information Technology Student
            </p>

            <div className="mt-8 max-w-xl space-y-4 text-base leading-7 text-[#34352B]">
              <p>
                I am a Bachelor of Science in Information Technology student
                who enjoys exploring web development and application
                development.
              </p>

              <p>
                I like building simple projects that help me improve my
                programming, creativity, and problem-solving skills. I am
                continuously learning new technologies and working toward
                becoming a better developer.
              </p>

              <p>
                Outside of coding, I enjoy gaming and drawing. I believe that
                creativity and curiosity can turn even small ideas into
                something meaningful.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#25231F] px-4 py-2 font-mono text-xs font-bold text-white">
                Curious by nature
              </span>
              <span className="rounded-full border border-[#25231F]/30 px-4 py-2 font-mono text-xs font-bold">
                Always learning
              </span>
            </div>

            <span className="absolute right-6 top-5 text-4xl font-black text-[#7652D4] sm:right-10 sm:top-8">
              ✳
            </span>
          </div>

          <div className="rounded-[2rem] bg-[#7652D4] p-7 text-white sm:p-9 md:col-span-5">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#E5DBFF]">
              Things I enjoy
            </p>

            <h3 className="mb-7 mt-4 text-3xl font-black tracking-tight">
              My Interests<span className="text-[#D7F36A]">.</span>
            </h3>

            <ul className="space-y-3">
              {interests.map((interest, index) => (
                <li
                  key={interest}
                  className="flex items-center gap-3 border-b border-white/20 pb-3 font-mono text-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D7F36A] text-xs font-black text-[#25231F]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {interest}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-[#6241BD] p-5">
              <p className="font-mono text-sm leading-6 text-white/90">
                "Small steps, new skills, better projects."
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border-2 border-[#25231F] bg-[#FFC6A8] p-7 sm:p-9 md:col-span-12">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#68402F]">
                  My current toolkit
                </p>
                <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Skills & Technologies
                </h3>
              </div>

              <span className="rounded-full bg-[#25231F] px-4 py-2 font-mono text-xs font-bold text-white">
                Learning in progress ↗
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
                        ? "bg-[#D7F36A]"
                        : "bg-white"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

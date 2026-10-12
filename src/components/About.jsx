
function About() {
  const skills = [
    "HTML",
    "CSS",
    "Java",
    "JavaScript",
    "Basic ReactJS",
    "Basic Tailwind CSS",
    "(Learning) Git & GitHub",
    "Basic MySql database",
    "Basic Python",
    "Basic Terminal Proficiency"
  ];

  const interests = [
    "Web Development",
    "Programming",
    "UI Design",
    "Learning New Technologies",
    "Gaming",
    "Drawing"
  ];

  return (
    <section
      id="about"
      className="bg-slate-50 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-black font-mono leading-relaxed">
          About Me
        </h2>

        <p className="mx-auto max-w-3xl text-center text-black leading-relaxed text-lg font-mono">
          I am a Bachelor of Science in Information Technology student who is interested in
          learning about web development and application development.
          I enjoy creating simple projects that help me improve my
          programming and problem-solving skills. I also love gaming and I can draw a little too! :P
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 ">
          <div className="rounded-xl border border-black bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold text-black font-mono">
              My Skills
            </h3>

            <div className="flex flex-wrap gap-3 ">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-black font-mono shadow-md hover:bg-gray-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-black bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold text-black font-mono">
              My Interests
            </h3>

            <ul className="space-y-3 text-black font-mono">
              {interests.map((interest) => (
                <li key={interest}>
                  • {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
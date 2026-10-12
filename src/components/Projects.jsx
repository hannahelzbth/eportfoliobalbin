
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Functional Calculator",
      description:
        "A functional calculator application developed to perform basic mathematical operations using ReactJS and Tailwind CSS.",
      image: "/images/calculator.jpg",
      technologies: "ReactJS, JavaScript, Tailwind CSS",
      link: "https://functional-calculator-balbin1.vercel.app/",
    },
    {
      title: "To-Do List",
      description:
        "A task management application that allows users to add tasks, mark them as complete, and delete tasks.",
      image: "/images/Todo.jpg",
      technologies: "ReactJS, JavaScript, Tailwind CSS",
      link: "https://to-do-list-balbin.vercel.app/",
    },
    {
      title: "More Projects Soon",
      description:
        "I am continuously learning and developing new projects to improve my programming skills and creativity.",
      image: "/images/soon.jpg",
      technologies: "More technologies coming soon",
      link: undefined,
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#FFF8EE] px-6 py-24 text-[#25231F]"
    >
      <div className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-[#FFC6A8] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#D7F36A] opacity-60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.3em] text-[#7652D4]">
              02 / Things I've created
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              MY
              <br />
              <span className="text-[#7652D4]">PROJECTS.</span>
            </h2>
          </div>

          <p className="max-w-md border-l-4 border-[#FF916B] pl-5 font-mono text-sm leading-7 text-[#5D554C] md:justify-self-end">
            A collection of my projects as I continue learning web
            development, improving my programming skills, and turning ideas
            into working applications.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-[#D7F36A] px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest">
            Hannah Elizabeth Balbin
          </span>

          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5D554C]">
            Selected work · 2026
          </span>
        </div>

        <div className="grid gap-6 font-mono md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`relative ${
                index === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              <div
                className={`absolute inset-0 translate-x-2 translate-y-2 rounded-[1.5rem] ${
                  index === 0
                    ? "bg-[#D7F36A]"
                    : index === 1
                      ? "bg-[#FFC6A8]"
                      : "bg-[#7652D4]"
                }`}
              />

              <div className="relative h-full overflow-hidden rounded-[1.5rem] border-2 border-[#25231F] bg-white transition duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between border-b border-[#25231F]/10 px-5 py-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#5D554C]">
                    Project 0{index + 1}
                  </span>

                  <span className="text-xl text-[#7652D4]">✳</span>
                </div>

                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  link={project.link}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-[#25231F] p-7 text-white sm:p-10 lg:mt-24">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#D7F36A]">
                Always in progress
              </p>

              <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
                More ideas. More projects.
              </h3>

              <p className="mt-3 max-w-xl font-mono text-sm leading-7 text-white/70">
                Every project is an opportunity to learn something new,
                practice my skills, and grow as an aspiring developer.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#D7F36A] px-6 py-4 font-mono text-sm font-bold text-[#25231F] transition duration-200 hover:-translate-y-1 hover:bg-[#FFC6A8]"
            >
              Contact Me ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

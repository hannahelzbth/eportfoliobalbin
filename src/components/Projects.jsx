
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "React Calculator",
      description:
        "A simple calculator application created using ReactJS and Tailwind CSS.",
      image: "/images/calculator.jpg",
      technologies: "ReactJS, JavaScript, Tailwind CSS",
      link: "https://dcit26-calculator.vercel.app/",
    },
    {
      title: "To-Do List",
      description:
        "A task management application that allows users to add, complete, and delete tasks.",
      image: "/images/Todo.jpg",
      technologies: "ReactJS, JavaScript, Tailwind CSS",
      link: "https://to-do-list-julyo-git.vercel.app/",
    },
    {
      title: "More Projects Soon",
      description:
        "More projects soon.",
      image: "/images/soon.jpg",
      technologies: "N/A",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-black font-mono">
          Projects / Work Samples
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-center text-black font-mono text-lg">
          Here are my recent activities.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 font-mono">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
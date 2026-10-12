
function Home() {
  return (
    <section
      id="home"
      className="min-h-[85vh] bg-[#F5EFE6] px-6 py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10">
        <div>
          <p className="mb-3 font-mono text-lg font-bold uppercase text-[#795548]">
            Welcome to my e-portfolio
          </p>

          <h1 className="mb-5 font-mono text-3xl font-bold text-[#3E2B23] md:text-6xl">
            Hello, This is Hannah Elizabeth Balbin
          </h1>

          <p className="mb-6 max-w-xl font-mono text-lg leading-relaxed text-[#5C4033]">
            Taking Bachelor of Information Technology in Cavite State University - Tanza
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
      </div>
    </section>
  );
}

export default Home;

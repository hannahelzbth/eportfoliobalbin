
function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FFF8EE] px-6 py-20 text-[#25231F] sm:py-28"
    >
      <div className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-[#D7F36A] opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#FFC6A8] opacity-60 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-8">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#25231F]/20 bg-white/70 px-4 py-2">
            <span className="h-3 w-3 rounded-full bg-[#7652D4]" />
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
              Welcome to my e-portfolio
            </p>
          </div>

          <p className="mb-4 font-mono text-sm font-bold uppercase tracking-[0.3em] text-[#7652D4]">
            Hello, I'm
          </p>

          <h1 className="max-w-4xl text-6xl font-black leading-[0.88] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-9xl">
            Hannah
            <br />
            Elizabeth
            <br />
            <span className="text-[#7652D4]">Balbin</span>
            <span className="text-[#FF916B]">.</span>
          </h1>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="h-1 w-16 shrink-0 bg-[#FF916B] sm:mt-3" />

            <p className="max-w-xl font-mono text-base leading-8 text-[#5D554C] sm:text-lg">
              An Information Technology student passionate about web
              development, programming, and exploring new technologies.
              I'm here to turn ideas into projects while learning something
              new along the way.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full bg-[#25231F] px-7 py-4 font-mono text-sm font-bold text-white transition duration-200 hover:-translate-y-1 hover:bg-[#7652D4]"
            >
              Explore My Projects <span>↗</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border-2 border-[#25231F] px-7 py-4 font-mono text-sm font-bold transition duration-200 hover:-translate-y-1 hover:bg-[#D7F36A]"
            >
              Get in Touch <span>✳</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:col-span-4 md:mt-12">
          <div className="absolute -right-3 -top-4 h-full w-full rotate-6 rounded-[2rem] bg-[#7652D4] sm:-right-5 sm:-top-5" />

          <div className="relative rotate-[-3deg] rounded-[2rem] border-2 border-[#25231F] bg-[#D7F36A] p-7 shadow-xl transition duration-300 hover:rotate-0">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest">
                Portfolio / 2026
              </span>
              <span className="text-2xl">✳</span>
            </div>

            <div className="my-10 flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-[#25231F]/30 bg-[#FFF8EE]/70">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFC6A8] text-4xl font-black text-[#25231F]">
                  H
                </div>
                <p className="mt-4 font-mono text-xs font-bold uppercase tracking-widest">
                  Creative mind in progress
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-black tracking-tight">
              Learning. Creating. Growing.
            </h2>

            <p className="mt-3 font-mono text-sm leading-6 text-[#454438]">
              Building my skills one project at a time.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#25231F] px-3 py-2 font-mono text-xs font-bold text-white">
                Developer
              </span>
              <span className="rounded-full border border-[#25231F]/30 px-3 py-2 font-mono text-xs font-bold">
                Creative
              </span>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-5 flex h-16 w-16 rotate-12 items-center justify-center rounded-2xl border-2 border-[#25231F] bg-[#FFC6A8] text-3xl shadow-md">
            ✦
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-24 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-[#25231F]/20 pt-6">
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#5D554C]">
          Web Development · Programming · Creativity
        </p>

        <a
          href="#about"
          className="font-mono text-xs font-bold uppercase tracking-widest transition hover:text-[#7652D4]"
        >
          Discover More ↓
        </a>
      </div>
    </section>
  );
}

export default Home;

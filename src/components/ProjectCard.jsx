
function ProjectCard({
  title,
  description,
  image,
  technologies,
  link,
}) {
  const technologyList =
    technologies && technologies !== "N/A"
      ? technologies.split(",").map((technology) => technology.trim())
      : [];

  return (
    <article className="flex h-full flex-col bg-white text-[#25231F]">
      <div className="relative overflow-hidden bg-[#FFF8EE]">
        {image ? (
          <img
            src={image}
            alt={`${title} project preview`}
            className="h-52 w-full object-cover transition duration-500 hover:scale-105"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="flex h-52 items-center justify-center bg-[#D7F36A]">
            <span className="text-6xl font-black text-[#7652D4]">✳</span>
          </div>
        )}

        <span className="absolute right-4 top-4 rounded-full border border-[#25231F]/10 bg-[#FFF8EE] px-3 py-2 font-mono text-xs font-bold uppercase tracking-widest">
          {link ? "Live Project" : "Coming Soon"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-black tracking-tight">
          {title}
          <span className="text-[#7652D4]">.</span>
        </h3>

        <p className="mt-3 flex-1 font-mono text-sm leading-7 text-[#5D554C]">
          {description}
        </p>

        {technologyList.length > 0 && (
          <div className="mt-5">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-[#7652D4]">
              Built with
            </p>

            <div className="flex flex-wrap gap-2">
              {technologyList.map((technology, index) => (
                <span
                  key={technology}
                  className={`rounded-full border border-[#25231F]/10 px-3 py-2 font-mono text-xs font-bold ${
                    index % 3 === 0
                      ? "bg-[#D7F36A]"
                      : index % 3 === 1
                        ? "bg-[#FFC6A8]"
                        : "bg-[#FFF8EE]"
                  }`}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-between rounded-full bg-[#25231F] px-5 py-4 font-mono text-sm font-bold text-white transition duration-200 hover:-translate-y-1 hover:bg-[#7652D4]"
          >
            <span>View Project</span>
            <span aria-hidden="true" className="text-lg">
              ↗
            </span>
          </a>
        )}

        {!link && (
          <div className="mt-6 rounded-full border border-dashed border-[#25231F]/30 px-5 py-4 text-center font-mono text-xs font-bold uppercase tracking-widest text-[#5D554C]">
            More projects on the way 
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;

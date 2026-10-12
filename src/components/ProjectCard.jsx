
import { useState } from "react";

function ProjectCard({ title, description, image, technologies, link }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-[#D8C4AD] bg-[#FFFDF9] shadow-md transition hover:-translate-y-1 hover:shadow-lg">

      <div className="h-48 bg-[#E8D8C4]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-[#3E2B23]">
          {title}
        </h3>

        <p className="text-[#795548]">
          {description}
        </p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-4 rounded-lg border border-[#5C4033] bg-[#5C4033] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#795548]"
        >
          {showDetails ? "Hide Details" : "View More"}
        </button>

        {showDetails && (
          <div className="mt-4 border-t border-[#D8C4AD] pt-4">
            <p className="text-sm font-semibold text-[#3E2B23]">
              Technologies Used
            </p>

            <p className="mt-1 text-sm text-[#795548]">
              {technologies}
            </p>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-lg border border-[#5C4033] bg-[#5C4033] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#795548]"
              >
                View Project
              </a>
            )}
          </div>
        )}
      </div>

    </div>
  );
}

export default ProjectCard;

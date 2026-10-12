
import { useState } from "react";

function ProjectCard({ title, description, image, technologies, link }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-black bg-white shadow-md transition hover:-translate-y-1 hover:shadow-md">

      <div className="h-48 bg-slate-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-slate-800">
          {title}
        </h3>

        <p className="text-slate-600">
          {description}
        </p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-4 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white border border-black transition hover:bg-white hover:text-black"
        >
          {showDetails ? "Hide Details" : "View More"}
        </button>

        {showDetails && (
          <div className="mt-4 border-t border-slate-200 pt-4">
            <p className="text-sm font-semibold text-slate-800">
              Technologies Used
            </p>

            <p className="mt-1 text-sm text-slate-600">
              {technologies}
            </p>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-lg bg-black px-4 py-2 text-sm font-medium text-white border border-black transition hover:bg-white hover:text-black"
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
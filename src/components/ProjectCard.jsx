import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="bg-white/90 rounded-lg shadow-lg overflow-hidden flex flex-col">
      <img src={project.image} alt={project.name} className="h-48 w-full object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-indigo-900 mb-2">{project.name}</h3>
        <Link
          to={`/project/${project.id}`}
          className="mt-auto inline-block px-4 py-2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-white rounded font-medium hover:scale-105 transition"
        >
          View More / Details
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
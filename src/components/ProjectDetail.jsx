import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  if (!project) return <div className="text-center py-16 text-2xl">Project not found</div>;

  return (
    <div className="py-16 px-4 max-w-3xl mx-auto">
      <Link to="/" className="inline-block mb-6 px-4 py-2 bg-indigo-100 text-indigo-800 rounded hover:bg-cyan-200 transition">← Back</Link>
      <h2 className="text-3xl font-bold text-indigo-900 mb-4">{project.name}</h2>
      <img src={project.image} alt={project.name} className="rounded-lg shadow mb-6 w-full max-h-64 object-cover" />
      <h3 className="text-xl font-semibold text-cyan-600 mb-2">Tech Stack</h3>
      <ul className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech, idx) => (
          <li key={idx} className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">{tech}</li>
        ))}
      </ul>
      <p className="mb-4 text-gray-800">{project.description}</p>
      <div className="flex gap-4 mb-4">
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline hover:text-indigo-700">Live Project</a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline hover:text-indigo-700">GitHub</a>
      </div>
      <div className="mb-2">
        <h4 className="font-semibold text-indigo-800">Challenges</h4>
        <p className="text-gray-700">{project.challenges}</p>
      </div>
      <div>
        <h4 className="font-semibold text-indigo-800">Future Plans</h4>
        <p className="text-gray-700">{project.improvements}</p>
      </div>
    </div>
  );
}

export default ProjectDetail;
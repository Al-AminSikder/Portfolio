import React from "react";
import { FaReact, FaCss3Alt, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import projects from "../data/projects";

// Mapping for stack icons
const stackIcons = {
  React: <FaReact size={28} className="text-[#61dafb]" title="React" />,
  CSS: <FaCss3Alt size={28} className="text-[#1572b6]" title="CSS3" />,
  Netlify: <SiNetlify size={28} className="text-[#38af8e]" title="Netlify" />,
};

function Projects() {
  return (
    <section id="projects" className="bg-[#181f26] py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-10 text-[#ff7867] text-center">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-[#232b35] rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.name}
              </h3>
              <div className="flex gap-3 mb-3">
                {project.stack.map(tool =>
                  <span key={tool}>{stackIcons[tool]}</span>
                )}
              </div>
              <p className="text-gray-300 mb-2">{project.description}</p>
              <p className="text-gray-400 text-sm mb-1">
                <span className="font-semibold text-white">Challenges:</span> {project.challenges}
              </p>
              <p className="text-gray-400 text-sm mb-4">
                <span className="font-semibold text-white">Improvements:</span> {project.improvements}
              </p>
              <div className="mt-auto flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ff7867] transition"
                  aria-label="GitHub Repository"
                >
                  <FaGithub size={25} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ff7867] transition"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt size={23} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
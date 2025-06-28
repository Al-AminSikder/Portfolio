import React from "react";

const projects = [
  {
    name: "Colorful Portfolio",
    image: "/assets/project1.png",
    description: "A modern, colorful developer portfolio template.",
    stack: ["React", "CSS", "Netlify"],
    live: "#",
    github: "#"
  },
  {
    name: "Task Tracker App",
    image: "/assets/project2.png",
    description: "A MERN stack task tracker app.",
    stack: ["React", "Node.js", "MongoDB"],
    live: "#",
    github: "#"
  },
  {
    name: "E-commerce Demo",
    image: "/assets/project3.png",
    description: "A demo e-commerce website with cart and auth.",
    stack: ["React", "Redux", "Firebase"],
    live: "#",
    github: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="bg-[#181f26] py-20 text-white max-w-6xl mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-[#ff7867]">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-[#222c36] rounded-lg overflow-hidden shadow-md flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-300 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-[#ff7867] text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#ff7867] px-4 py-2 rounded text-white font-medium hover:bg-[#ff5c4a] transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white px-4 py-2 rounded text-white font-medium hover:bg-white hover:text-[#181f26] transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";

const skillIcons = [
  { name: "HTML5", icon: <FaHtml5 size={32} className="text-[#ff7867]" /> },
  { name: "CSS", icon: <FaCss3Alt size={32} className="text-[#ff7867]" /> },
  { name: "Javascript", icon: <FaJs size={32} className="text-[#ff7867]" /> },
  { name: "Node.js", icon: <FaNodeJs size={32} className="text-[#ff7867]" /> },
  { name: "React", icon: <FaReact size={32} className="text-[#ff7867]" /> },
  { name: "Git", icon: <FaGitAlt size={32} className="text-[#ff7867]" /> },
  { name: "Github", icon: <FaGithub size={32} className="text-[#ff7867]" /> },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#1f232a] py-16 max-w-6xl mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-[#ff7867]">Skills</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {skillIcons.map(skill => (
            <div key={skill.name} className="flex flex-col items-center">
              {skill.icon}
              <span className="mt-2 text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
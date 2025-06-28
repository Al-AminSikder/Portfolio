import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#e34c26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
  { name: "Javascript", icon: FaJs, color: "#f7df1e" },
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "Node.js", icon: FaNodeJs, color: "#539e43" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "Git", icon: FaGitAlt, color: "#f34f29" },
  { name: "Github", icon: FaGithub, color: "#181717" },
];

function Skills() {
  // Split into two rows: first 4, then 5
  const firstRow = skills.slice(0, 4);
  const secondRow = skills.slice(4);

  return (
    <section id="skills" className="bg-[#1f232a] py-16 max-w-7xl mx-auto px-2">
      <h2 className="text-3xl font-semibold mb-10 text-[#ff7867] text-center">
        Skills
      </h2>
      {/* Mobile: 2 rows, Desktop: horizontal row */}
      <div className="block sm:hidden">
        <div className="flex justify-center gap-6 mb-8">
          {firstRow.map(skill => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="flex flex-col items-center min-w-[60px]">
                <Icon size={60} style={{ color: skill.color }} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-6">
          {secondRow.map(skill => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="flex flex-col items-center min-w-[60px]">
                <Icon size={60} style={{ color: skill.color }} />
              </div>
            );
          })}
        </div>
      </div>
      {/* Desktop: single horizontal row */}
      <div className="hidden sm:flex sm:flex-nowrap sm:overflow-x-auto sm:gap-4 sm:justify-center">
        {skills.map(skill => {
          const Icon = skill.icon;
          return (
            <div key={skill.name} className="flex flex-col items-center min-w-[100px]">
              <Icon size={100} style={{ color: skill.color }} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
import React from "react";

const tools = [
  "HTML5",
  "CSS3",
  "Javascript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "Github",
];

function ToolsBar() {
  return (
    <section className="bg-[#1f232a] border-t border-b border-[#232b33] w-full">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex flex-nowrap overflow-x-auto justify-center gap-x-6 sm:gap-x-8">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-gray-400 text-sm justify-between sm:text-lg font-medium hover:text-white transition cursor-pointer whitespace-nowrap"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsBar;
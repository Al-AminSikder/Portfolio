import React from "react";
import skills from "../data/skills";

function SkillsBar({ name, level }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="skills">
      <h2 className="text-3xl font-bold text-indigo-900 mb-8">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="bg-white/80 rounded-lg p-6 shadow">
            <h3 className="font-semibold text-cyan-600 mb-4 capitalize">{category}</h3>
            {list.map((skill, idx) => (
              <SkillsBar key={idx} {...skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
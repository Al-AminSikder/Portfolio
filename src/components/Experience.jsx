import React from "react";
import experience from "../data/experience";

function Experience() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto" id="experience">
      <h2 className="text-3xl font-bold text-indigo-900 mb-8">Experience</h2>
      {experience.map((exp, idx) => (
        <div key={idx} className="mb-6 p-6 bg-white/80 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-cyan-600">{exp.title}</h3>
          <p className="text-gray-700">{exp.company} <span className="text-gray-500">({exp.year})</span></p>
          <p className="mt-2 text-gray-800">{exp.details}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
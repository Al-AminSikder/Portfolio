import React from "react";
import education from "../data/education";

function Education() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto" id="education">
      <h2 className="text-3xl font-bold text-indigo-900 mb-8">Education</h2>
      {education.map((ed, idx) => (
        <div key={idx} className="mb-6 p-6 bg-white/80 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-cyan-600">{ed.degree}</h3>
          <p className="text-gray-700">{ed.institution} <span className="text-gray-500">({ed.year})</span></p>
          <p className="mt-2 text-gray-800">{ed.details}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;
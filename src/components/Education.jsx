import React from "react";
import education from "../data/education";

function Education() {
  return (
    <section id="education" className="bg-[#1f232a] py-12 max-w-7xl my-4 mx-auto">
      <h2 className="text-3xl font-semibold mb-10 text-[#ff7867] text-center">
        Education
      </h2>
      <div className="flex flex-col items-center">
        {education.map((item, idx) => (
          <div
            key={idx}
            className="w-full rounded-lg shadow p-8 mb-6"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              {item.degree}
            </h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <span className="text-gray-300 font-medium">{item.institution}</span>
              <span className="text-gray-400 text-sm mt-1 sm:mt-0">{item.year}</span>
            </div>
            <p className="text-gray-400 mt-2 text-base">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
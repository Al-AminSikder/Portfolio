import React from "react";

function Experience() {
  return (
    <section id="experience" className="bg-[#1f232a] py-20 text-white max-w-6xl mx-auto px-6">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold mb-6 text-[#ff7867]">Experience</h2>
        <div className="bg-[#181f26] p-6 rounded-lg shadow mb-4 border-l-4 border-[#ff7867]">
          <h3 className="text-xl font-bold mb-1">Frontend Intern</h3>
          <p className="text-gray-300">Tech Startup, 2023</p>
          <p className="text-gray-400 mt-2 text-sm">
            Worked on landing pages, fixed bugs, and contributed to UI improvements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
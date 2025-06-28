import React from "react";

function Education() {
  return (
    <section id="education" className="bg-[#181f26] py-20 text-white max-w-6xl mx-auto px-6">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold mb-6 text-[#ff7867]">Education</h2>
        <div className="bg-[#222c36] p-6 rounded-lg shadow mb-4">
          <h3 className="text-xl font-bold mb-1">BSc in Computer Science</h3>
          <p className="text-gray-300">Dummy University, 2020 - 2024</p>
          <p className="text-gray-400 mt-2 text-sm">Relevant coursework: Data Structures, Web Development, Algorithms.</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
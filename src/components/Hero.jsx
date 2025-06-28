import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[70vh] flex flex-col md:flex-row justify-between items-center py-16 max-w-6xl mx-auto px-6"
    >
      {/* Left: Text */}
      <div className="flex-1 flex flex-col items-start justify-center z-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2 flex items-center">
          Hello
          <span className="ml-2 text-[#ff7867] text-4xl">.</span>
        </h2>
        <div className="h-1 w-20 bg-[#ff7867] mb-7 mt-2" />
        <h3 className="text-2xl md:text-3xl text-white mb-1 font-light">
          I'm <span className="font-medium">Jensen</span>
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Software Developer
        </h1>
        <div className="flex gap-4">
          <button className="bg-[#ff7867] text-white font-medium px-7 py-3 rounded-md text-lg hover:bg-[#ff5c4a] transition-colors">
            Got a project?
          </button>
          <a
            href="#"
            className="border border-white px-7 py-3 rounded-md text-white font-medium text-lg hover:bg-white hover:text-[#181f26] transition-colors"
          >
            My resume
          </a>
        </div>
      </div>
      {/* Right: Image & Design */}
      <div className="flex-1 flex justify-center items-center relative mt-10 md:mt-0">
        {/* Circle/Glow effect */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-[#ff7867] via-transparent to-[#222c36] opacity-60 z-0" />
        {/* Left Arrow */}
        <div className="absolute left-8 md:left-0 top-1/2 -translate-y-1/2 z-10 text-[#ff7867] text-5xl select-none">
          &lt;
        </div>
        {/* Profile Image */}
        <img
          src="/assets/profile.jpg"
          alt="Profile"
          className="relative rounded-full w-64 h-64 object-cover z-10 border-8 border-[#222c36]"
        />
        {/* Right Arrow */}
        <div className="absolute right-8 md:right-0 top-1/2 -translate-y-1/2 z-10 text-[#ff7867] text-5xl select-none">
          &gt;
        </div>
      </div>
    </section>
  );
}

export default Hero;
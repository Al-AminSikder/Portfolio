import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[70vh] flex flex-col-reverse md:flex-row justify-between items-center py-12 max-w-7xl mx-auto px-4 md:px-0"
    >
      {/* Left: Text (on mobile, appears after image) */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center z-10 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2 flex items-center justify-center md:justify-start">
          Hello
          <span className="ml-2 text-[#ff7867] text-4xl">.</span>
        </h2>
        <div className="h-1 w-20 bg-[#ff7867] mb-7 mt-2 mx-auto md:mx-0" />
        <h3 className="text-2xl md:text-3xl text-white mb-1 font-light">
          I'm <span className="font-medium">Al-Amin Sikder</span>
        </h3>
        {/* Responsive Frontend Web Developer Title */}
        <h1
          className="text-2xl md:text-4xl font-bold text-white mb-4 whitespace-nowrap"
          style={{ lineHeight: "1.2" }}
        >
          Frontend Web Developer
        </h1>
        {/* Social Icons */}
        <div className="flex gap-6 mb-8 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} className="text-[#0a66c2] hover:scale-110 transition" />
          </a>
          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={32} className="text-white hover:scale-110 transition" />
          </a>
        </div>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#"
            className="border border-white px-7 py-3 rounded-md text-white font-medium text-lg hover:bg-[#ff7867] transition-colors"
          >
            My resume
          </a>
        </div>
      </div>
      {/* Right: Image & Design (on mobile, appears first) */}
      <div className="flex-1 flex justify-center items-center relative mb-8 md:mb-0 mt-10 md:mt-0 w-full">
        {/* Upper Left "<" */}
        <div className="absolute left-2 top-2 md:left-4 md:top-4 z-20 text-[#ff7867] text-4xl md:text-6xl select-none">
          &lt;
        </div>
        {/* Profile Image - slightly larger on mobile */}
        <img
          src="https://i.ibb.co/8n4g6tLD/IMG-0420.jpg"
          alt="Profile"
          className="relative rounded-full w-56 h-56 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] object-cover z-10 border-8 border-[#222c36] bg-[#181f26]"
          style={{ objectPosition: "center top" }}
        />
        {/* Lower Right "/>" */}
        <div className="absolute right-2 bottom-2 md:right-4 md:bottom-4 z-20 text-[#ff7867] text-3xl md:text-5xl select-none">
          /&gt;
        </div>
      </div>
    </section>
  );
}

export default Hero;
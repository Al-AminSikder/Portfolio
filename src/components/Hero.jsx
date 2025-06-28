import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

function Hero() {
  return (
    <section
      className="min-h-[60vh] flex flex-col-reverse md:flex-row items-center justify-center text-left py-16 max-w-6xl mx-auto"
      id="hero"
    >
      {/* Left: Text & Social Links */}
      <div className="w-full md:w-2/3 flex flex-col justify-center items-start px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900">Al-Amin Sikder</h1>
        <h2 className="mt-2 text-xl md:text-2xl font-semibold text-cyan-700">
          Junior Frontend Web Developer (MERN)
        </h2>
        <a
          className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-cyan-400 to-indigo-500 text-white rounded-lg font-bold shadow-lg hover:scale-105 transition"
          href="#"
          download
        >
          Download Resume
        </a>
        <div className="flex gap-6 mt-6 text-2xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-700"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 hover:text-cyan-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
      {/* Right: Profile Image */}
      <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
        <img
          src="/assets/profile.jpg"
          alt="Profile"
          className="rounded-full w-40 h-40 md:w-56 md:h-56 shadow-lg border-4 border-cyan-400 object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
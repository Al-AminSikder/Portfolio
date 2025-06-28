import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMenu = () => setOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-30 bg-indigo-900 text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <span className="font-bold text-xl tracking-wider text-cyan-300">Al-Amin Sikder</span>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#about" className="hover:text-cyan-200 transition">About</a>
          <a href="#skills" className="hover:text-cyan-200 transition">Skills</a>
          <a href="#education" className="hover:text-cyan-200 transition">Education</a>
          <a href="#experience" className="hover:text-cyan-200 transition">Experience</a>
          <a href="#projects" className="hover:text-cyan-200 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-200 transition">Contact</a>
        </div>
        <button className="md:hidden" onClick={handleMenu} aria-label="menu">
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-indigo-900 px-6 pb-4 flex flex-col gap-4 font-medium">
          <a href="#about" onClick={handleMenu}>About</a>
          <a href="#skills" onClick={handleMenu}>Skills</a>
          <a href="#education" onClick={handleMenu}>Education</a>
          <a href="#experience" onClick={handleMenu}>Experience</a>
          <a href="#projects" onClick={handleMenu}>Projects</a>
          <a href="#contact" onClick={handleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
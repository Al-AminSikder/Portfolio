import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#181f26] text-white py-6 border-b border-[#232b33] sticky top-0 z-50 w-full px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold tracking-wide bg-gradient-to-r from-[#ff7867] via-[#ffb86b] to-[#61dafb] bg-clip-text text-transparent transition-colors duration-300"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Al-Amin Sikder
        </a>
        <div className="hidden md:flex space-x-12 text-md font-normal">
          <a href="#about" className="hover:text-[#ff7867] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#ff7867] transition-colors">Projects</a>
          <a href="#contacts" className="hover:text-[#ff7867] transition-colors">Contacts</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#181f26] px-4 pb-4 flex flex-col space-y-4 text-base font-normal">
          <a href="#about" className="hover:text-[#ff7867] transition-colors" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" className="hover:text-[#ff7867] transition-colors" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contacts" className="hover:text-[#ff7867] transition-colors" onClick={() => setOpen(false)}>Contacts</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
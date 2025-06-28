import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#181f26] text-white py-6 border-b border-[#232b33] sticky top-0 z-50 w-full">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide">Md. Al-Amin Sikder</div>
        <div className="hidden md:flex space-x-10 text-base font-normal">
          <a href="#home" className="hover:text-[#ff7867] transition-colors">Home</a>
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
        <div className="md:hidden bg-[#181f26] px-6 pb-4 flex flex-col space-y-4 text-base font-normal">
          <a href="#home" className="hover:text-[#ff7867] transition-colors" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" className="hover:text-[#ff7867] transition-colors" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" className="hover:text-[#ff7867] transition-colors" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contacts" className="hover:text-[#ff7867] transition-colors" onClick={() => setOpen(false)}>Contacts</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
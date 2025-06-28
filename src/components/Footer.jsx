import React from "react";

function Footer() {
  return (
    <footer className="py-8 text-center bg-[#181f26] text-gray-400 text-sm border-t border-[#232b33] mt-12">
      <p>© {new Date().getFullYear()} Al-Amin Sikder. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
import React from "react";

function Footer() {
  return (
    <footer className="py-6 text-center bg-indigo-900 text-white mt-12">
      <p>© {new Date().getFullYear()} Al-Amin Sikder. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
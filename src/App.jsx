import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ToolsBar from "./components/ToolsBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#181f26] min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <ToolsBar />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
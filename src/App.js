import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Education from "./component/Education";
import Contact from "./component/Contact";
import "./index.css";

function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.className = lightMode ? "light" : "";
  }, [lightMode]);

  return (
    <>
   <Navbar 
  toggle={() => setLightMode(!lightMode)} 
  lightMode={lightMode} 
/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

export default App;
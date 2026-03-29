import React, { useState } from "react";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";

function Navbar({ toggle, lightMode }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">

      <h2 className="logo">Pranjali</h2>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-right">
        {/* Toggle */}
        <button className="toggle-btn" onClick={toggle}>
          {lightMode ? <FaMoon /> : <FaSun />}
        </button>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <FaBars />
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
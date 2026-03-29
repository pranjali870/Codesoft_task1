import React from "react";
import { FaCode, FaLaptopCode, FaPaintBrush } from "react-icons/fa";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>My Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <FaPaintBrush className="skill-icon" />
          <h3>UI/UX Design</h3>
          <p>
            Creating clean and user-friendly designs for web and mobile applications.
          </p>
          <p>Canva, Figma , Framer</p>
        </div>

        <div className="skill-card">
          <FaLaptopCode className="skill-icon" />
          <h3>App Development</h3>
          <p>
            Developing Android and desktop applications with Java and database integration.
          </p>
          <p>Java, MySQL, Firebase, JDBC</p>
        </div>

        <div className="skill-card">
          <FaCode className="skill-icon" />
          <h3>Web Development</h3>
          <p>
            Building responsive and interactive web applications using modern technologies.
          </p>
          <p>HTML, CSS, JavaScript, React,Bootstrap</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;
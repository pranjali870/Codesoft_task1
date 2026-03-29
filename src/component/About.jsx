import React from "react";
import { FaCode, FaDatabase, FaPaintBrush, FaTools } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <h2>
        About <span>Me</span>
      </h2>
      <p className="subtitle">
       I am currently pursuing a Master of Computer Applications (MCA) 
       with a strong interest in software development and web technologies. 
      </p>

      <div className="about-container">

        {/* LEFT */}
        <div className="about-left">
          <h3>Software Developer</h3>

          <p>
            I am an MCA student with skills in Java, MySQL,React, HTML, CSS, and JavaScript.
            I build clean and responsive web applications.
          </p>

          <p>
            I have developed projects like Employee Management System and 
            E-commerce website. I enjoy learning and building real-world projects.
          </p>
        </div>

        {/* RIGHT BOXES */}
        <div className="about-right">

          <div className="about-box">
            <FaCode className="icon" />
            <h4>Frontend</h4>
            <p>HTML, CSS, JavaScript, Bootstrap, React, Responsive UI</p>
          </div>

          <div className="about-box">
            <FaDatabase className="icon" />
            <h4>Backend</h4>
            <p>Java, MySQL, JDBC, OOP</p>
          </div>

          <div className="about-box">
            <FaPaintBrush className="icon" />
            <h4>Design</h4>
            <p>Canva, Figma,Framer</p>
          </div>

          <div className="about-box">
            <FaTools className="icon" />
            <h4>Tools</h4>
            <p>VS Code, XAMPP, IntelliJ,Android Studio</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
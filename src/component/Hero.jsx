import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-text">
        <h1>Hello, I'm <span class="name">Pranjali Chavan</span></h1>
       <h2>Full Stack Developer   | Web Developer</h2>
          <p>
            I build modern, responsive websites using  React,java, JavaScript, and MySQL.
            Passionate about creating clean UI and real-world projects.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <a href="#contact" className="btn">Hire Me</a>

           <a href="/PRANJALI_RESUME.pdf" download className="btn-outline">
                  Download CV
                  </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="socials">
            <a 
              href="https://github.com/pranjali870" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a 
              href="https://www.linkedin.com/in/pranjali-chavan-20319a314/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-img">
          <img src="/images/pranjalipic.png" alt="Pranjali" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
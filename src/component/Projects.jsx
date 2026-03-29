import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">
          <img src="/images/ecommerce.png" alt="Ecommerce" />
          <div className="project-content">
            <h3>E-commerce Website</h3>
            <p>
              A full-featured online shopping website with product listing, cart,
              and secure payment integration. Users can browse products, manage
              orders, and complete purchases easily.
            </p>

            <a href="https://github.com/pranjali870/E-COMMERCE-WEBSITE" target="_blank" rel="noreferrer">
              <FaGithub className="icon-btn" />
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="/images/employeemanagement.png" alt="Employee" />
          <div className="project-content">
            <h3>Employee Management System</h3>
            <p>
              A web-based application to manage employee records and attendance.
              Admin can add, update, delete, and view employee details with
              real-time database connectivity.
            </p>

            <a href="https://github.com/pranjali870/Codepranjali" target="_blank" rel="noreferrer">
              <FaGithub className="icon-btn" />
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src="/images/omelectrical.png" alt="Figma" />
          <div className="project-content">
            <h3>OM Electrical (Figma Design)</h3>
            <p>
              A modern UI design created in Figma for an electrical services
              website. Focused on clean layout, user-friendly navigation, and
              professional design experience.
            </p>

            <a href="https://omelectrical.framer.website/" target="_blank" rel="noreferrer">
              <FaArrowUpRightFromSquare className="icon-btn" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
import React from "react";
import "./../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills, experience, and projects.",
      link: "https://yourportfolio.com",
    },
    {
      title: "Machine Learning Model",
      description: "A machine learning model built to predict housing prices based on various factors.",
      link: "https://github.com/your-username/machine-learning-model",
    },
    {
      title: "E-commerce App",
      description: "An e-commerce application built with React and Node.js for online shopping.",
      link: "https://github.com/your-username/e-commerce-app",
    },
  ];

  return (
    <section id="projects" className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-items">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

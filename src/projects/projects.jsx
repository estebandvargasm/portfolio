import React from "react";
import "./projects.css";

const ProjectCard = ({ title, description, image, projectLink, codeLink }) => (
  <div className="project-card">
    <img src={image} alt={title} className="project-image" />
    <div className="project-info">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
          View Code
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "MIND SAS BIC",
      description: "This is the website of the company Mind SAS BIC, built with react.",
      image: "/MIND-SAS-BIC.png",
      projectLink: "https://www.metalmindsa.com/",
      codeLink: "https://github.com/LuisDavidFajardoH/Mind",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills, built with React.",
      image: "/portfolio.png",
      projectLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
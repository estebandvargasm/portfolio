import React from "react";
import "./projects.css";
import { ThreeDCardDemo } from '../test.jsx'

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
            <ThreeDCardDemo key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
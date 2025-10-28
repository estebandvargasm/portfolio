import React, { useState } from "react";
import "./about.css";

const About = () => {
  const [activeSection, setActiveSection] = useState('skills');

  const skills = [
    "React.js", "React Native", "HTML5", "CSS3", "JavaScript", "Git"
  ];

  const education = [
    "Universidad Distrital Francisco José de Caldas, Bogotá, 2018-2024",
  ];

  const renderList = (items) => (
    <ul className="info-list">
      {items.map((item, index) => (
        <li key={index} className="info-item">{item}</li>
      ))}
    </ul>
  );

  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <div className="about-main">
          <div className="about-text-container">
            <p className="about-text">
              I'm Esteban, a passionate frontend developer with a keen eye for design and a love for creating professional, user-friendly websites. With a strong foundation in modern web technologies and a commitment to continuous learning, I bring ideas to life through clean, efficient code and intuitive user interfaces.
            </p>
            <p className="about-text">
              My journey in web development began with a fascination for how technology can solve real-world problems. This drive led me to master a variety of tools and frameworks, always with the goal of delivering exceptional digital experiences. Whether it's building responsive layouts, optimizing performance, or implementing complex features, I approach each project with enthusiasm and attention to detail.
            </p>
          </div>
          <div className="about-image-container">
            <img src="/esteban-perfil.jpg" alt="Esteban" className="about-image" />
          </div>
        </div>
        <div className="info-section">
          <div className="info-buttons">
            <button 
              className={`info-button ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveSection('skills')}
            >
              Skills
            </button>
            <button 
              className={`info-button ${activeSection === 'education' ? 'active' : ''}`}
              onClick={() => setActiveSection('education')}
            >
              Education
            </button>
          </div>
          <div className="info-content">
            {activeSection === 'skills' && renderList(skills)}
            {activeSection === 'education' && renderList(education)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
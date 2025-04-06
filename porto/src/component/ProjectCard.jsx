import React from "react";
import "../views/css/ProjectCard.css";

const ProjectCard = ({ title, summary, technologies = [], link }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>

        {technologies.length > 0 && (
          <div className="tech-chips-container">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-chip">{tech}</span>
            ))}
          </div>
        )}

        <p className="project-summary">{summary}</p>

        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-button"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
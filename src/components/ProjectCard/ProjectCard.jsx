import React from "react";

const ProjectCard = ({ id, name, image, slug }) => {
  return (
    <div className="project-container">
      <div className="project-bg">
        <div className="project-bg-img">
          <img src={image} alt={name} />
        </div>

        <p>Project {id}</p>
      </div>

      <div className="project-details">
        <h3>{name}</h3>
        <a href={slug} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

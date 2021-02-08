import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import Projects from "../../../assets/data/proyects.json";

const ProjectCardList = () => {
  const renderProjectCardList = () => {
    return Projects.map((project, i) => (
      <div key={project.id} className="col-sm-12 col-md-12 col-lg-6 mt-2">
        <ProjectCard
          name={project.name}
          img={project.img}
          id={project.id}
          github={project.github}
          demo={project.demo}
          description={project.description}
        />
      </div>
    ));
  };
  return renderProjectCardList();
};

export default ProjectCardList;

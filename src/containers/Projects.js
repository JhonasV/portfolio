import React from "react";
import ProjectCardList from "../components/Project/ProjectCardList/";
const Projects = () => (
  <div>
    <div className="row">
      <div className="col">
        <h3>Projects</h3>
      </div>
    </div>
    <div className="row mt-2">
      <ProjectCardList />
    </div>
  </div>
);

export default Projects;

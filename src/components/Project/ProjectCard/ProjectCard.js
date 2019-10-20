import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ name, description, img, github, demo, id }) => {
  return (
    <div className="card bg-dark" style={{ height: "400px", width: "100%" }}>
      <div className="card-header">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-8 pb-2">
            <h3 className="text-white font-weight-bold">{name}</h3>
          </div>
        </div>
      </div>
      <div className="card-body ">
        <img src={img} className="w-100 h-100 ml-auto mr-auto" alt={name} />
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-weight-bold"
              href={github}
            >
              <i className="fab fa-github"></i> CODE
            </a>
          </div>
          <div className="col">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-weight-bold"
              href={demo}
            >
              <i className="fas fa-laptop"></i> DEMO
            </a>
          </div>
          <div className="col">
            <Link
              className="text-white font-weight-bold"
              to={{
                pathname: `project/${id}-${name}`
              }}
            >
              <i className="fab fa-readme"></i> INFO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

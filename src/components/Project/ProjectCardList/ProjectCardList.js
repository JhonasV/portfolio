import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const PROJECTS = [
  {
    id: 1,
    name: "GroupCon",
    img: "https://i.ibb.co/pWdBBct/groupcon.png",
    github: "https://github.com/JhonasV/groupcon",
    demo: "https://obscure-ridge-85508.herokuapp.com/",
    description: ""
  },
  {
    id: 2,
    name: "ProjectGram",
    img:
      "https://github.com/JhonasV/ProjectGram/raw/master/images/page_!.PNG?raw=true",
    github: "https://github.com/JhonasV/ProjectGram",
    demo: "http://projectgram.azurewebsites.net/",
    description: ""
  },
  {
    id: 3,
    name: "ChooseEm",
    img: "https://i.ibb.co/ZMjh8XJ/choosem.png",
    github: "https://github.com/JhonasV/chooseEm",
    demo: "https://still-hollows-07464.herokuapp.com/",
    description: ""
  },
  {
    id: 4,
    name: "RosaBlog",
    img: "https://i.ibb.co/Gk4KYkT/rosablog.png",
    github: "#",
    demo: "http://rosanelverasblog.azurewebsites.net/",
    description: ""
  }
];

const ProjectCardList = () => {
  const [projectId, setProjectId] = useState(null);

  const renderProjectCardList = () => {
    return PROJECTS.map((project, i) => (
      <div key={project.id} className="col-sm-12 col-md-12 col-lg-6 mt-2">
        <ProjectCard
          name={project.name}
          img={project.img}
          id={project.id}
          github={project.github}
          demo={project.demo}
          description={project.description}
          setProjectId={setProjectId}
        />
      </div>
    ));
  };
  return renderProjectCardList();
};

export default ProjectCardList;

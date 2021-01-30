import React from "react";
import ProjectItem from "./ProjectItem";
import projectsData from "./projectsData";

const ProjectList = () => {
  const renderdList = projectsData.map((project) => (
    <ProjectItem
      title={project.title}
      description={project.description}
      tags={project.tags}
      demo={project.demo}
      github={project.github}
      image={project.image}
      key={project.id}
    />
  ));

  return renderdList;
};

export default ProjectList;

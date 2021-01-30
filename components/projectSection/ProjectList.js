import React from "react";
import ProjectItem from "./ProjectItem";
import projectsData from "./projectsData";

const ProjectList = () => {
  console.log(projectsData);
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

  return <div>{renderdList}</div>;
};

export default ProjectList;

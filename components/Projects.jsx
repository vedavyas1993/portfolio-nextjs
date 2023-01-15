import React from "react";
import ProjectItem from "./projectItem";
import portfolio from "../public/images/projects/portfolioProject.png";

function Projects() {
  const projectsList = [
    { title: "NextJs portfolio", url: "/", backgroundImg: portfolio },
  ];
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 py-4>What I have built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsList.map((project) => {
            return (
              <ProjectItem
                title={project.title}
                backgroundImg={project.backgroundImg}
                projectUrl={project.url}
              />
            );
          })}
        </div>
        <div className="flex justify-center">
          <h3 className="uppercase text-xl tracking-widest text-[#5651e5] pt-16 text-center">
            More Projects Coming Soon...
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Projects;

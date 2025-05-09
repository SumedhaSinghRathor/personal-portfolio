import React from "react";
import projects from "../../assets/projects";
import Trigger from "./Trigger";

function Projects() {
  const projectsList = projects.map((project) => (
    <a href={project.link} target="_blank">
      <div className="project group flex flex-col p-5 border-1 border-blue text-blue hover:text-black hover:bg-blue transition-colors gap-3 w-72 shrink-0 h-fit rounded-3xl">
        <div className="thumbnail">
          <img
            src={project.thumbnail}
            alt=""
            className="w-full rounded-t-xl aspect-4/3"
          />
        </div>
        <div className="tags flex w-full gap-2 flex-nowrap overflow-scroll no-scrollbar whitespace-nowrap overflow-x-scroll">
          {project.tags.map((tag) => (
            <div className="tag border-1 border-blue group-hover:border-black px-2 py-1 rounded-4xl text-xs w-fit">
              {tag}
            </div>
          ))}
        </div>
        <div className="name text-2xl font-bold whitespace-nowrap group-hover:underline overflow-x-scroll no-scrollbar leading-6">
          {project.title}
        </div>
        <div className="desc text-sm line-clamp-3">{project.desc}</div>
      </div>
    </a>
  ));

  return (
    <>
      <Trigger />
      <div className="w-screen min-h-screen max-h-fit flex flex-wrap justify-start p-5 gap-7">
        {projectsList}
      </div>
    </>
  );
}

export default Projects;

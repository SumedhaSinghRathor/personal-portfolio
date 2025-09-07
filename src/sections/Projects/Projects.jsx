import projects from "../../assets/projects";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassChart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [showModal, setShowModal] = useState(false);

  const projectsList = projects.map((project) => (
    <a href={project.link} target="_blank">
      <div className="project group flex flex-col p-5 border border-blue text-blue hover:text-black hover:bg-blue transition-colors gap-3 w-72 shrink-0 h-fit rounded-2xl mx-auto">
        <div className="thumbnail">
          <img
            src={project.thumbnail}
            alt=""
            className="w-full rounded-t-xl aspect-4/3"
          />
        </div>
        <div className="tags flex w-full gap-2 flex-nowrap overflow-scroll no-scrollbar whitespace-nowrap overflow-x-scroll">
          {[
            ...(project.type || []),
            ...(project.frameworks || []),
            ...(project.language || []),
            ...(project.tools || []),
          ].map((tag) => (
            <div className="tag border border-blue group-hover:border-black px-2 py-0.5 rounded-4xl text-xs w-fit">
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
    <section className="w-screen min-h-screen p-8 max-h-fit">
      <div className="flex justify-end">
        <FontAwesomeIcon
          onClick={() => setShowModal(true)}
          icon={faMagnifyingGlassChart}
          className="text-xl p-2 text-black bg-blue rounded-lg mb-5 cursor-pointer"
        />
      </div>
      {showModal && <ProjectModal onClose={() => setShowModal(false)} />}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {projectsList}
      </div>
    </section>
  );
}

export default Projects;

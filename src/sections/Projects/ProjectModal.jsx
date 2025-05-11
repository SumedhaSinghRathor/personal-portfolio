import React, { useRef } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projects from "../../assets/projects";

function ProjectModal({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const projectList = projects.map((project) => (
    <div className="">
      <a href={project.link}>{project.title}</a>
      <hr />
    </div>
  ));

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 flex justify-center items-center p-5 bg-black-faint backdrop-blur-sm"
    >
      <div className="bg-blue text-black p-5 w-full h-full rounded-2xl">
        <div className="flex items-center justify-between w-full mb-3">
          <p className="text-2xl">All Projects | Project Analysis</p>
          <FontAwesomeIcon
            onClick={onClose}
            icon={faXmark}
            className="text-2xl"
          />
        </div>
        <div className="w-fit">{projectList}</div>
      </div>
    </div>
  );
}

export default ProjectModal;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import ProjectModal from "./ProjectModal";

function Trigger() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <FontAwesomeIcon
        icon={faChartPie}
        onClick={() => setShowModal(true)}
        className="float-right bg-blue text-black p-2 rounded-md mr-6 mt-28 cursor-pointer"
      />
      {showModal && <ProjectModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Trigger;

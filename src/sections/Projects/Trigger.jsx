import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";

function Trigger() {
  return (
    <>
      <FontAwesomeIcon
        icon={faChartPie}
        onClick={() => setShowModal(true)}
        className="float-right bg-blue text-black p-2 rounded-md mr-6 mt-40 cursor-pointer"
      />
    </>
  );
}

export default Trigger;

import React, { useState } from "react";
import experienceData from "../assets/experience";

function Experience({ experience = experienceData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const experienceList = experience.map((exp, index) => (
    <div
      key={exp.id || index}
      className="experience bg-red-500 text-black flex max-w-full min-w-fit h-108 m-0 p-0 rounded-lg gap-4"
    >
      <button
        className="designation text-2xl px-5 py-1 border border-black bg-red-500 rounded-lg cursor-pointer text-start"
        style={{ writingMode: "sideways-lr" }}
        onClick={() => handleClick(index)}
        aria-expanded={activeIndex === index}
        aria-controls={`content-${index}`}
      >
        {exp.designation}
      </button>
      <div
        id={`content-${index}`}
        className={`content my-4 ${
          activeIndex === index ? "block grow" : "hidden shrink-0"
        }`}
      >
        <h2 className="text-4xl">{exp.company}</h2>
        <h3>{exp.designation}</h3>
        <h4>{exp.duration}</h4>
        <ul className="list-disc mx-8">
          {exp.description.map((description, i) => (
            <li key={i}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  ));

  return (
    <section className="flex flex-wrap w-full h-full items-start p-5 gap-2 overflow-auto">
      {experienceList}
    </section>
  );
}

export default Experience;

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
      id={`experience-${index}`}
      className={`experience bg-red-500 text-black flex h-108 m-0 p-0 rounded-lg gap-4 ${
        activeIndex === index ? "flex-auto" : "w-fit"
      }`}
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
          activeIndex === index ? "block flex-auto" : "hidden w-fit"
        }`}
      >
        <h2 className="text-4xl font-bold">{exp.company}</h2>
        <h3 className="text-2xl">{exp.designation}</h3>
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
    <section className="flex w-full h-full items-start p-5 gap-2">
      {experienceList}
    </section>
  );
}

export default Experience;

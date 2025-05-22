import React, { useState } from "react";
import experienceData from "../../assets/experience";
import "./Experience.css";

function Experience({ experience = experienceData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const experienceList = experience.map((exp, index) => (
    <div
      key={exp.id || index}
      id={`experience-${index}`}
      className={`experience bg-red text-black flex h-108 m-0 p-0 rounded-lg gap-4 ${
        activeIndex === index ? "flex-auto" : "w-fit"
      }`}
    >
      <button
        className="designation text-2xl px-5 py-1 border border-black bg-red rounded-lg text-start whitespace-nowrap"
        onClick={() => handleClick(index)}
        aria-expanded={activeIndex === index}
        aria-controls={`content-${index}`}
      >
        {exp.designation}
      </button>
      <div
        id={`content-${index}`}
        className={`content my-4 selection:bg-black selection:text-red ${
          activeIndex === index ? "block flex-auto" : "hidden w-fit"
        }`}
      >
        <h2 className="text-4xl font-bold">{exp.company}</h2>
        <h3 className="text-2xl">{exp.designation}</h3>
        <h4>{exp.duration}</h4>
        <br />
        <ul className="list-disc mx-8">
          {exp.description.map((description, i) => (
            <li key={i}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  ));

  return (
    <section className="flex w-full h-screen items-end p-5 gap-2">
      {experienceList}
    </section>
  );
}

export default Experience;

import React from "react";
import skills from "../../assets/skills";
import Certificates from "./Certificates";

function Skills() {
  const skillList = skills.map((skill) => (
    <div className="border-1 border-yellow w-fit h-fit p-1.5 flex items-center gap-2 rounded-sm text-yellow hover:text-black hover:bg-yellow transition-colors">
      <img src={skill.url} className="w-10 h-10" alt={skill.name} />
      {skill.name}
    </div>
  ));

  return (
    <section className="w-screen h-screen flex flex-col justify-evenly items-center p-10 gap-8 select-none">
      <div className="skills flex flex-wrap justify-center gap-2 content-center p-4">
        {skillList}
      </div>
      <Certificates />
    </section>
  );
}

export default Skills;

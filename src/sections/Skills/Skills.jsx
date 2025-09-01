import skills from "../../assets/skills";
import Certificates from "./Certificates";

function Skills() {
  const skillList = skills.map((skill) => (
    <div className="border border-yellow w-fit h-fit p-1.5 flex items-center gap-2 rounded-sm text-yellow hover:text-black hover:bg-yellow transition-colors text-sm md:text-base">
      <img src={skill.url} className="size-8" alt={skill.name} />
      {skill.name}
    </div>
  ));

  return (
    <section className="w-screen min-h-screen max-h-fit flex flex-col justify-evenly items-center p-10 gap-8 select-none pt-28">
      <div className="skills flex flex-wrap justify-around md:justify-center gap-2 md:p-4">
        {skillList}
      </div>
      <Certificates />
    </section>
  );
}

export default Skills;

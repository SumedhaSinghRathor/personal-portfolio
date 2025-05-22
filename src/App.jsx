import { useRef } from "react";
import About from "./sections/About/About";
import Contacts from "./sections/Contacts/Contacts";
import Experience from "./sections/Experience/Experience";
import Landing from "./sections/Landing";
import More from "./sections/More/More";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  const sectionRefs = useRef({
    About: null,
    Experience: null,
    Skills: null,
    Projects: null,
    Contacts: null,
    More: null,
  });

  const scrollToSection = (sectionName) => {
    sectionRefs.current[sectionName]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="max-h-fit overflow-hidden">
      <Navbar onLinkClick={scrollToSection} />
      <Landing />
      <div ref={(el) => (sectionRefs.current.About = el)}>
        <About />
      </div>
      <div ref={(el) => (sectionRefs.current.Experience = el)}>
        <Experience />
      </div>
      <div ref={(el) => (sectionRefs.current.Skills = el)}>
        <Skills />
      </div>
      <div ref={(el) => (sectionRefs.current.Projects = el)}>
        <Projects />
      </div>
      <div ref={(el) => (sectionRefs.current.Contacts = el)}>
        <Contacts />
      </div>
      <div ref={(el) => (sectionRefs.current.More = el)}>
        <More />
      </div>
    </div>
  );
}

export default App;

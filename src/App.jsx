import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Landing from "./sections/Landing";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <div className="max-h-fit overflow-hidden">
      <Landing />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

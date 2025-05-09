import Navbar from "./components/Navbar";
import About from "./sections/About/About";
import Contacts from "./sections/Contacts/Contacts";
import Experience from "./sections/Experience";
import Landing from "./sections/Landing";
import More from "./sections/More";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <div className="max-h-fit overflow-y-hidden">
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contacts />
      <More />
    </div>
  );
}

export default App;

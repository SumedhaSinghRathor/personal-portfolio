import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Landing from "./sections/Landing";

function App() {
  return (
    <div className="max-h-fit overflow-hidden">
      <Landing />
      <About />
      <Experience />
    </div>
  );
}

export default App;

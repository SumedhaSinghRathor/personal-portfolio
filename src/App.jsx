import Navbar from "./components/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Landing from "./sections/Landing";

function App() {
  return (
    <div className="max-h-fit overflow-y-hidden">
      <Navbar />
      <Landing />
      <About />
      <Experience />
    </div>
  );
}

export default App;

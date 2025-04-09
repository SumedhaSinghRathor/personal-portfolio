import Navbar from "./components/Navbar";
import About from "./sections/About";
import Landing from "./sections/Landing";

function App() {
  return (
    <div className="max-h-fit overflow-y-hidden">
      <Navbar />
      <Landing />
      <About />
    </div>
  );
}

export default App;

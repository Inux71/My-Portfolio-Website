import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div className="text-city-lights">
      <Navbar></Navbar>

      <div className="
        mx-auto
        w-4/5
        flex
        flex-col">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
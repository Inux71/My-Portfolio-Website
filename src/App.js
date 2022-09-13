import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Icon from '@mdi/react'
import {mdiArrowDownThinCircleOutline} from '@mdi/js'


function App() {
  return (
    <div className="text-city-lights">
      <Navbar></Navbar>

      <div className="
        mx-auto
        w-4/5
        flex
        flex-col">
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>

      <div className="
        flex
        flex-col
        items-center
        w-full
        fixed 
        bottom-5 
        text-sour-lemon">
        <Icon path={mdiArrowDownThinCircleOutline} 
          size={2}
          className="animate-bounce"/>
      </div>
    </div>
  );
}

export default App;
// Hooks
import { useEffect, useState } from "react";
import useMediaQuery from './hooks/useMediaQuery';
// Components
import Navbar from './sections/Navbar'
import Home from "./sections/Home";
import LineGradient from "./components/LineGradient";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  // navbar position
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else if (window.scrollY !== 0) {
        setIsTop(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      {/* NAVBAR */}
      <Navbar
        isTop={isTop}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* HOME */}
      <div className="w-5/6 mx-auto md:h-full">
        <Home setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      {/* SKILLS */}
      <div className="w-5/6 mx-auto md:h-full">
        <Skills />
      </div>
      <LineGradient />
      {/* PORTFOLIO */}
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
    </div>
  );
}

export default App;

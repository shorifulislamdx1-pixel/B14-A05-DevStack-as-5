import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import type { ITechnology } from "./types/technology";

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  return (
    <>
      <Nav />
      <Hero />

      <Technologies
        selectedTechnologies={selectedTechnologies}
        setSelectedTechnologies={setSelectedTechnologies}
      />

      <ToastContainer />
    </>
  );
}

export default App;
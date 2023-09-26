import React from "react";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Gamemods from "./Components/Modes";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <Gamemods />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

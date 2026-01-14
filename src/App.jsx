import React from "react";

import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";

import Contact from "./section/Contact";
import Experience from "./section/Experience";
import Footer from "./section/Footer";
import Home from "./section/Home";
import Projects from "./section/Projects";
import Testimonials from "./section/Testimonials";
import Skills from "./section/Skills";
import About from "./section/About";

import IntroAnimation from "./components/IntroAnimation";

export default function App() {
  const [introDone, setIntroDone] = React.useState(false);

  return (
    <>
      {!introDone && (
        <IntroAnimation onFinish={() => setIntroDone(true)} />
      )}

      {introDone && (
        <div className="relative gradient text-white">
          <CustomCursor />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

import React, { useEffect } from "react";
import About from "./components/about/About.jsx";
import Experience from "./components/linetime/Experience.jsx";
import Proyect from "./components/proyect/Proyect.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./helper/Footer.jsx";
import { Head } from "./helper/Head.jsx";
import Skill from "./components/skill/Skill.jsx";

const App = () => {
  return (
    <>
      <Head />
      {""}
      <About />
      {""}
      <Skill />
      {""}
      <Proyect />
      {""}
      <Contact />
      {""}
      <Footer />
    </>
  );
};

export default App;

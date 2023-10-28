import React, { useEffect } from "react";
import About from "./components/about/About.jsx";
import Experience from "./components/linetime/Experience.jsx";
import Proyect from "./components/proyect/Proyect.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./helper/Footer.jsx";
import { Head } from "./helper/Head.jsx";

const App = () => {
  return (
    <>
      <Head />

      <About />
      {""}
      <Experience />
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

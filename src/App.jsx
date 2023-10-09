import React, { useEffect } from "react";
import About from "./components/about/About.jsx";
import Experience from "./components/linetime/Experience.jsx";
import Proyect from "./components/proyect/Proyect.jsx";
import Contact from "./components/contact/Contact.jsx";

const App = () => {
  useEffect(() => {
    let moon = document.getElementById("moon");
    let fuji = document.getElementById("fujiMe");
    let fujiMe = document.getElementById("fuji");
    let montan1 = document.getElementById("montan-1");
    let montan2 = document.getElementById("montan-2");

    const handleScroll = () => {
      const value = window.scrollY;

      if (window.innerWidth < 768) {
        //codigo para pantallas pequeñas
        moon.style.top = 8 + value * -0.2 + "%";
        fuji.style.top = value * 0.1 + "px";
        fujiMe.style.top = value * -0.1 + "px";
        montan1.style.top = value * 0.1 + "px";
        montan2.style.top = value * -0.04 + "px";
      } else {
        //codigo para pantallas grandes
        moon.style.top = 8 + value * -0.2 + "%";
        moon.style.left = value * 2 + "px";
        fuji.style.top = value * 0.2 + "px";
        fujiMe.style.left = value * 0.1 + "px";
        fujiMe.style.top = value * 0.1 + "px";
        montan2.style.top = value * 0 + "px";
        montan1.style.top = value * -0.05 + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []); // El segundo argumento vacío [] asegura que se ejecute solo una vez después del montaje inicial

  return (
    <>
      <section>
        <div className="paralax">
          <div className="paralax-item p-item1"></div>
        </div>

        <section>
          <img src="/src/assets/moon-1.png" id="moon" />
          <img src="/src/assets/fujiNew.png" id="fuji" />
          <img src="/src/assets/fuji-me.png" id="fujiMe" />
          <h2 id="text">
            <span>Hi. </span>
            <br />
            Thanks for being here
          </h2>
          <a href="index.html#about" id="btn">
            Explore
          </a>

          <img src="/src/assets/montan-1.png" id="montan-1" />
          <img src="/src/assets/montan2.png" id="montan-2" />
        </section>
      </section>

      <About />
      {""}
      <Experience />
      {""}
      <Proyect />
      {""}
      <Contact />
    </>
  );
};

export default App;

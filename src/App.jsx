import React, { useEffect } from "react";
import About from "./components/about/About.jsx";

const App = () => {
  useEffect(() => {
    let moon = document.getElementById("moon");
    let btn = document.getElementById("btn");
    let fuji = document.getElementById("fujiMe");
    let fujiMe = document.getElementById("fuji");
    let montan1 = document.getElementById("montan-1");
    let sombra1 = document.getElementById("sombra1");

    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      moon.style.top = 8 + value * -0.2 + "%";
      moon.style.left = value * 2 + "px";
      sombra1.style.left = value * 0.1 + "px";
      sombra1.style.top = value * 1 + "px";
      fuji.style.top = value * 0.25 + "px";
      fuji.style.left = value * -0.2 + "px";
      fujiMe.style.top = value * 0.25 + "px";
      fujiMe.style.left = value * -0.1 + "px";
      montan1.style.top = value * -0.1 + "px";
    });
  }, []); // El segundo argumento vacío [] asegura que se ejecute solo una vez después del montaje inicial

  return (
    <>
      <section>
        <div class="paralax">
          <div class="paralax-item p-item1"></div>
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
          <img src="/src/assets/sombra1.png" id="sombra1" />
          <img src="/src/assets/montan-1.png" id="montan-1" />
          <img src="/src/assets/montan2.png" id="montan-2" />
        </section>
      </section>

      <About />
    </>
  );
};

export default App;

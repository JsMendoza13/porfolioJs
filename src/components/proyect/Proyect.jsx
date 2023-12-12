import "./proyect.css";
import imgEpm from "../../assets/projectEpm.webp";
import imgMary from "../../assets/pagMaria.webp";
import imgDrink from "../../assets/api-drink.webp";

const Proyect = () => {
  return (
    <>
      <div className="div__proyect">
        <div className="BlogCards">
          <h2>Projects.</h2>
          <p>
            I have had the opportunity to participate in various projects and
            also to undertake some on my own. Below, I present a list of some of
            them.
          </p>
        </div>
        <div className="cardProject">
          <div className="contenCards">
            <img src={imgDrink} id="imgCards" alt="captura-aplicativo-api" />
            <div className="overlay">
              <h3>Project API Cocktails 🍷</h3>
              <p>
                In this project he interacted with a free API on cocktails,Using
                technologies such as Vite.js, HTML, CSS.
              </p>
              <a
                href="https://api-drink-js1312.netlify.app/"
                target="_blank"
                className="btnPages"
              >
                Visit site
              </a>
            </div>
          </div>

          <div className="contenCards">
            <img src={imgEpm} id="imgCards" alt="captura-aplicativo-epm" />
            <div className="overlay">
              <h3>Project created in EPM ⚡</h3>
              <p>
                This project it was developed using low-code tools such as
                PowerApps and Power Automate. It is an application designed for
                generating reports on assets.
              </p>
              <a
                href="https://drive.google.com/file/d/14s7MQFTTdXUYIPiUFyJuFvHamvxDx1K-/view?usp=share_link"
                target="_blank"
                className="btnPages"
              >
                View review
              </a>
            </div>
          </div>

          <div className="contenCards">
            <img src={imgMary} id="imgCards" alt="captura-wen-suculenta" />
            <div className="overlay">
              <h3> Mary Suculentas 🌱</h3>
              <p>
                I developed this project as a presentation prototype using
                technologies such as React, Vite, and Tailwind CSS. It is hosted
                on Netlify.
              </p>
              <a
                href="https://mary-suculenta.netlify.app/"
                target="_blank"
                className="btnPages"
              >
                Visit site
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyect;

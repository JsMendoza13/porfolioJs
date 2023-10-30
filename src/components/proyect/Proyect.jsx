import "./proyect.css";
import imgEpm from "../../assets/projectEpm.webp";
import imgJoly from "../../assets/pagJoly.webp";
import imgMaria from "../../assets/pagMaria.webp";

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
            <img src={imgEpm} id="imgCards" alt="" />
            <div className="overlay">
              <h3>Project created in EPM ⚡</h3>
              <p>
                This project was created within a multinational company in
                Colombia, 'EPM.' It was developed using low-code tools such as
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
            <img src={imgJoly} id="imgCards" alt="" />
            <div className="overlay">
              <h3> Project Joly 🥑</h3>
              <p>
                I developed this project as a presentation prototype using
                technologies such as React, Vite, and Tailwind CSS. It is hosted
                on Netlify.
              </p>
              <a
                href="https://joly-guacamole.netlify.app//"
                target="_blank"
                className="btnPages"
              >
                Visit site
              </a>
            </div>
          </div>
          <div className="contenCards">
            <img src={imgMaria} id="imgCards" alt="" />
            <div className="overlay">
              <h3>Project maria suculentas 🌱</h3>
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

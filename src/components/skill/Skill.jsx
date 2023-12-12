import React from "react";
import "./skill.css";
import { RiBracesFill, RiCodeSSlashLine } from "react-icons/ri";
import InfiniteScroll from "../sliderInfinite/InfiniteScroll";

const Skill = () => {
  return (
    <>
      <div className="seccion__skill">
        <h2>Skills. </h2>
        <div className="container__cards__skill">
          <div className="cards__skill">
            <div className="card__face face_uno">
              <div className="card__content">
                <div className="icons">
                  <RiBracesFill />
                </div>
                <h3>Web Development</h3>
              </div>
            </div>
            <div className="card__face face_dos">
              <div className="card__content">
                <p>
                  As a passionate web developer, my focus is on creating
                  exceptional digital experiences. My strongest domain is in the
                  use of React.js, in combination with design libraries such as
                  Bootstrap and Tailwind. This ensures an attractive design and
                  intuitive user experience.
                </p>
              </div>
            </div>
          </div>
          <div className="cards__skill">
            <div className="card__face face_uno">
              <div className="card__content">
                <div className="icons">
                  <RiCodeSSlashLine />
                </div>
                <h3>Backend Development</h3>
              </div>
            </div>
            <div className="card__face face_dos">
              <div className="card__content">
                <p>
                  I focus on creating robust and efficient systems. In languages
                  such as Java and the Spring Boot framework, which allows me to
                  design scalable, high performance applications. Regarding
                  database management, I have knowledge in relational databases
                  such as SQL and MySQL, as well as in non-relational databases.
                </p>
              </div>
            </div>
          </div>
        </div>
        <InfiniteScroll />
      </div>
    </>
  );
};

export default Skill;

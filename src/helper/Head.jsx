import React, { useEffect } from "react";
import { RiArrowUpCircleFill } from "react-icons/ri";

export const Head = () => {
  useEffect(() => {
    let buttonUp = document.getElementById("button-up");
    buttonUp.addEventListener("click", scrollUp);

    function scrollUp() {
      const currentScroll = document.documentElement.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - currentScroll / 10);
      }
    }

    window.onscroll = function () {
      const scroll = document.documentElement.scrollTop;

      if (scroll > 500) {
        buttonUp.style.transform = "scale(1)";
      } else if (scroll < 500) {
        buttonUp.style.transform = "scale(0)";
      }
    };
  }, []);

  return (
    <>
      <section className="section__head">
        <div className="content">
          <div className="visible">
            <p>Hello</p>
            <ul className="ul__letter_move">
              <li>world!</li>
              <li>everyone!</li>
              <li>friends!</li>
            </ul>
          </div>
        </div>
        <div className="div__content__typing">
          <h1 className="div__typing">Thanks for being here</h1>
          <p className="div__typing__p">
            I invite you to get to know me a little bit.
          </p>{" "}
        </div>
        <a href="#about" id="btn">
          Explore
        </a>{" "}
        <div id="button-up">
          <a className="RiArrowUpCircleFill">
            <RiArrowUpCircleFill />
          </a>
        </div>
        <div className="div__head"></div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </>
  );
};

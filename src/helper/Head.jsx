import React from "react";
import BtnUp from "../components/btnTop/BtnUp";

export const Head = () => {
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
        <BtnUp />
      </section>
    </>
  );
};

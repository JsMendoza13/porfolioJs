import React, { useEffect } from "react";
import "./time.css";

const Experience = () => {
  useEffect(() => {
    "use strict";

    function qs(selector, all = false) {
      return all
        ? document.querySelectorAll(selector)
        : document.querySelector(selector);
    }

    const sections = qs(".section", true);
    const timeline = qs(".timeline");
    const line = qs(".line");
    line.style.bottom = `calc(100% - 20px)`;
    let prevScrollY = window.scrollY;
    let up, down;
    let full = false;
    let set = 0;
    const targetY = window.innerHeight * 0.8;

    function scrollHandler(e) {
      const { scrollY } = window;
      up = scrollY < prevScrollY;
      down = !up;
      const timelineRect = timeline.getBoundingClientRect();
      const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

      const dist = targetY - timelineRect.top;
      console.log(dist);

      if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`;
      }

      if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
      }

      sections.forEach((item) => {
        // console.log(item);
        const rect = item.getBoundingClientRect(); //     console.log(rect);

        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add("show-me");
        }
      }); // console.log(up, down);

      prevScrollY = window.scrollY;
    }

    scrollHandler();
    line.style.display = "block";
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <div id="experienceSeccion">
        <div className="container">
          <h2 className="top-section">Experience</h2>
        </div>

        <div className="timeline">
          <div className="line"></div>
          <div className="section">
            <div className="dead"> </div>
            <div className="content">
              <a
                href="https://cu.epm.com.co/clientesyusuarios/"
                className="titleExp"
              >
                Empresas Publicas De Medellín
              </a>
              <span>6 month</span>
              <p>
                • Creation of a system for information and process management
                for the protection and maneuvering equipment laboratory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

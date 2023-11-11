import React, { useEffect, useState } from "react";
import { RiArrowUpCircleFill } from "react-icons/ri";
import "./btnUp.css";

function BtnUp() {
  const [btnUp, setBtnUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBtnUp(true);
      } else {
        setBtnUp(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="btnTop">
      {btnUp && (
        <button onClick={scrollUp}>
          <RiArrowUpCircleFill className="RiArrowUpCircleFill" />
        </button>
      )}
    </div>
  );
}

export default BtnUp;

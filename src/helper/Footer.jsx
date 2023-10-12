import React from "react";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer__seccion">
      <div className="footer__conten">
        <nav className="footer__nav">
          <a
            className="footer__nav__github "
            href="https://www.linkedin.com/in/jesus-mendoza-martinez/"
            target="_blank"
          >
            <RiGithubFill />
          </a>
          <a
            className="footer__nav__linnked"
            href="https://github.com/JsMendoza13"
            target="_blank"
          >
            <RiLinkedinBoxFill />
          </a>
        </nav>

        <p className="footer__p">© 2023 Jesús Mendoza</p>
      </div>
    </footer>
  );
};

export default Footer;

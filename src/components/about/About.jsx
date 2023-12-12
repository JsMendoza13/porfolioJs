import React from "react";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import "./styleAbout.css";

const About = () => {
  return (
    <div className="section-info" id="about">
      <div className="sec">
        <div className="info">
          <h2>About. </h2>
          <p>
            I am a multifaceted person who stands out for bringing a lot of
            knowledge and creative ideas to the teams in which I participate,
            with an excellent personality and empathy.
            <br />
            <br />
            I am someone who likes to keep learning, to keep challenging myself,
            looking for solutions in a creative and practical way.
            <br />
            <br />
            I am never satisfied with just coming up with ideas. Instead, I have
            an almost impulsive need to constantly put them into practice.
            <br />
            <br />
            If you want to know more about me, you can download my CV at the
            following link.
          </p>
          <div className="Links__cv">
            <a
              download="cvJsEs"
              href="https://drive.google.com/file/d/1J61wBe0t8WWM0fKxRaqFebdnbgNfQ27u/view?usp=sharing"
              target="_blank"
              className="linkCv"
            >
              CV Español
            </a>
            <a
              download="cvJsEng"
              href="https://drive.google.com/file/d/14aktG2JGnHU0awgO8yW3dNf_NbHgoaDy/view?usp=sharing"
              target="_blank"
              className="linkCv"
            >
              CV English
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <div className="img"></div>
          </div>
          <hr className="card-divider" />
          <div className="card-footer">
            <div className="card-contact">Contact:</div>
            <a className="card-btn" href="#contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="chat"
              >
                <path d="m21.75,12v8.26c0,.42-.21.8-.55,1.04-.21.14-.46.22-.7.22-.16,0-.32-.03-.46-.09l-3.1-1.64c-.26-.02-.94-.04-1.13-.04h-4.81c-1.52,0-2.75-1.23-2.75-2.75v-1.08h7c2.24,0,4-2.16,4-4.92v-1.74c1.4.13,2.5,1.3,2.5,2.74Zm-4-6.334v5.333c0,1.916-1.098,3.417-2.5,3.417H6.84l-2.575,2.943c-.224.255-.52.392-.824.392-.124,0-.248-.022-.37-.068-.498-.188-.82-.718-.82-1.351V5.666c0-1.915,1.098-3.416,2.5-3.416h10.5c1.402,0,2.5,1.501,2.5,3.416Zm-3,4.334c0-.414-.336-.75-.75-.75H6c-.414,0-.75.336-.75.75s.336.75.75.75h8c.414,0,.75-.336.75-.75Zm0-3c0-.414-.336-.75-.75-.75H6c-.414,0-.75.336-.75.75s.336.75.75.75h8c.414,0,.75-.336.75-.75Z"></path>
              </svg>
            </a>
            <a
              className="card-btn__github"
              href="https://github.com/JsMendoza13"
              target="_blank"
            >
              <RiGithubFill />
            </a>
            <a
              className="card-btn__linnked"
              href="https://www.linkedin.com/in/jesus-mendoza-martinez/"
              target="_blank"
            >
              <RiLinkedinBoxFill />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

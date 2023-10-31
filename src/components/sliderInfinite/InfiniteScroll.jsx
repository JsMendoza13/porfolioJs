import React from "https://cdn.skypack.dev/react";
import "./infinite.css";

const InfiniteScroll = () => {
  const TAGS = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind",
    "Bootstrap",
    "React",
    "Python",
    "GitHub",
    "Sql",
    "Java",
    "SpringBoot",
    "Firebase",
  ];
  const DURATION = 15000;
  const ROWS = 2;
  const TAGS_PER_ROW = 10;

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

  const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "loop-slider",
        style: {
          "--duration": `${duration}ms`,
          "--direction": reverse ? "reverse" : "normal",
        },
      } /*#__PURE__*/,

      React.createElement("div", { className: "inner" }, children, children)
    );
  };

  const Tag = ({ text, color } /*#__PURE__*/) =>
    React.createElement(
      "div",
      { className: "tag", style: { "--color": color } },
      /*#__PURE__*/ React.createElement("span", null, "#"),
      " ",
      text
    );

  const SliderMotion = () =>
    /*#__PURE__*/
    React.createElement(
      "div",
      { className: "SliderMotion" } /*#__PURE__*/,

      React.createElement(
        "div",
        { className: "tag-list" },
        [...new Array(ROWS)].map((_, i /*#__PURE__*/) =>
          React.createElement(
            InfiniteLoopSlider,
            {
              key: i,
              duration: random(DURATION - 5000, DURATION + 5000),
              reverse: i % 2,
            },
            shuffle(TAGS)
              .slice(0, TAGS_PER_ROW)
              .map((tag /*#__PURE__*/) =>
                React.createElement(Tag, { text: tag, key: tag })
              )
          )
        ) /*#__PURE__*/,

        React.createElement("div", { className: "fade" })
      )
    );

  return (
    <div>
      {" "}
      <SliderMotion />,
    </div>
  );
};

export default InfiniteScroll;

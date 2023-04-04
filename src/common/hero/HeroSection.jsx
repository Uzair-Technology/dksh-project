/* eslint-disable react/no-unescaped-entities */
import React, { FC, useEffect, useState } from "react";

const Buttons = [
  {
    id: 0,
    text: "About",
  },
  {
    id: 1,
    text: "Course",
  },
  {
    id: 2,
    text: "Notes",
  },
  {
    id: 3,
    text: "Project",
  },
  {
    id: 4,
    text: "Podcast",
  },
  {
    id: 5,
    text: "Book",
  },
  {
    id: 6,
    text: "Review",
  },
];

const HeroSection = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const theme = localStorage.getItem("theme");
  console.log(theme);
  // console.log(theme);

  // useEffect(() => {
  //   const theme = JSON.stringify(localStorage.getItem("theme"));
  //   if (theme) {
  //     setCurrentTheme(theme);
  //   }
  // }, []);

  // useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   setCurrentTheme(theme);
  // }, []);

  const [isActive, setIsActive] = useState(0);
  console.log(isActive);
  return (
    <div className="hero__section">
      <div className="container">
        <div className="hero__section--box">
          <div className="hero__section--container">
            <div className="hero__section--title">
              <h3>Welcome, john</h3>
              <p>Let's explore DKSH's top talent</p>
            </div>
            <div className="hero__section--buttons">
              <ul className="mb-2">
                {Buttons.map((item, index) => (
                  <li key={item.id}>
                    <button
                      className={index === isActive ? "active" : ""}
                      onClick={() => setIsActive(item.id)}
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hero__section--vectors">
            <div
              className="hero__section--left"
              style={
                theme === "dark"
                  ? { backgroundImage: "url(/images/leftDark.png)" }
                  : { backgroundImage: "url(/images/leftVector.png)" }
              }
            ></div>
            <div
              className="hero__section--right"
              style={
                theme === "dark"
                  ? { backgroundImage: "url(/images/rightDark.png)" }
                  : { backgroundImage: "url(/images/rightVector.png)" }
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

/* eslint-disable react/no-unescaped-entities */
import React, { FC, useEffect, useState, useRef } from "react";
import { getFromLocalStorage } from "../../hooks/hooks";

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
  //* states
  const [isActive, setIsActive] = useState(0);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setCurrentTheme(localStorage.getItem("theme"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="hero__section">
      <div className="container">
        <div className="hero__section--box">
          <div className="hero__section--container">
            <div className="hero__section--title">
              <h3>Welcome, John ✋</h3>
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
                currentTheme === "dark"
                  ? { backgroundImage: "url(/images/leftDark.png)" }
                  : { backgroundImage: "url(/images/leftVector.png)" }
              }
            ></div>
            <div
              className="hero__section--right"
              style={
                currentTheme === "dark"
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

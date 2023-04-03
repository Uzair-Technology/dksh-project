/* eslint-disable react/no-unescaped-entities */
import React, { FC, useState } from "react";

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
  const [isActive, setIsActive] = useState(0);
  console.log(isActive);
  return (
    <div className="hero__section">
      <div className="container">
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
      </div>
    </div>
  );
};

export default HeroSection;

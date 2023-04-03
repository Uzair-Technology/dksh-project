import React from "react";
import Navbar from "../common/navbar/Navbar";
import HeroSection from "../common/hero/HeroSection";
import { useState } from "react";
import { BiGridSmall, BiListUl } from "react-icons/bi";
import { FaMoneyBillWave, FaTags } from "react-icons/fa";
import { CgSortAz } from "react-icons/cg";

import { BiFilterAlt } from "react-icons/bi";
import GridSection from "../common/GridSection/GridSection";
import ListSection from "../common/listSection/ListSection";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Buttons = [
  {
    id: 0,
    text: "Grid",
    icon: BiGridSmall,
  },
  {
    id: 1,
    text: "List",
    icon: BiListUl,
  },
];

const Home = () => {
  //*states
  const [isActive, setIsActive] = useState(0);
  const [toggleButton, setToggleButton] = useState(false);
  console.log(toggleButton);
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);

  //* handle change for toggle
  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };
  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
  };

  //* handle change for price
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Navbar />
      <HeroSection />

      <div className="show__talent">
        <div className="container">
          <div className="show__talent--container">
            <div className="show__talent--bar flex-between">
              <div className="show__talent--title simple-flex">
                <h3>Talents</h3>
                <p>1234</p>
              </div>
              <div className="show__talent--buttons simple-flex">
                <div className="show__talent--options">
                  <ul>
                    {Buttons.map((item, index) => (
                      <li key={item.id}>
                        <button
                          className={index === isActive ? "active" : ""}
                          onClick={() => setIsActive(item.id)}
                        >
                          <item.icon /> {item.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="show__talent--filter">
                  <button
                    className={!toggleButton === false ? "active" : ""}
                    onClick={() => setToggleButton(!toggleButton)}
                  >
                    <BiFilterAlt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {toggleButton === true ? (
        <div className="search__section">
          <div className="container">
            <div className="search__section--list flex-between">
              <div className="search__section--right">
                <div className="search__section--price">
                  <div className="search__section--dropdown">
                    <label for="cars">
                      <FaMoneyBillWave /> Price per hr:
                    </label>
                    <button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      All
                    </button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                  </div>
                </div>
                <div className="search__section--services">
                  <div className="search__section--dropdown">
                    <label for="services">
                      <FaTags /> Services:
                    </label>

                    <select name="cars" id="cars">
                      <option value="all" selected>
                        All
                      </option>
                      <option value="desing">UI Design</option>
                      <option value="frontend">Frontend</option>
                      <option value="backend">Backend</option>
                      <option value="nft">NFt</option>
                    </select>
                  </div>
                </div>
                <div className="search__section--rate">
                  <div className="search__section--dropdown">
                    <label for="rating">
                      <CgSortAz size={20} /> Sort by:
                    </label>

                    <select name="cars" id="rating">
                      <option value="volvo" selected disabled>
                        Rating
                      </option>

                      <option value="hour">Price per hr</option>
                      <option value="top-rated">Top rated</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="search__section--right">
                <div className="search__section--toggles">
                  <div className="search__section--available search__section--toggle">
                    <Switch
                      checked={checked1}
                      onChange={handleChange1}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <p>Available to work</p>
                  </div>
                  <div className="search__section--tallent search__section--toggle">
                    <Switch
                      checked={checked2}
                      onChange={handleChange2}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <p>Pro tallent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {isActive === 0 ? (
        <GridSection />
      ) : isActive === 1 ? (
        <ListSection />
      ) : null}
    </div>
  );
};

export default Home;

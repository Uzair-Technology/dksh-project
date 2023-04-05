import { Avatar, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiHomeCircle } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { MdNotifications, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";

import { Link } from "react-router-dom";
import { CgFormatSlash } from "react-icons/cg";
import List from "../../components/list/List";
import jsonData from "../../assets/data/data.json";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const toggleTheme = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const Navbar = () => {
  const [inputText, setInputText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  let inputHandler = (e) => {
    setInputText(e.target.value);
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    //create a new array by filtering the original array
    const filteredData = jsonData.filter((el) => {
      //if no input the return the original
      if (e.target.value === "") {
        return el;
      }
      //return the item which contains the user input
      else {
        return el.personName.toLowerCase().includes(lowerCase);
      }
    });

    if (e.target.value === "") {
      return setFilteredList(jsonData.slice(0, 3));
    }
    setFilteredList(filteredData);
  };

  //** closing the search menu
  useEffect(() => {
    const closeDropdown = (e) => {
      // console.log(e);
      if (e.target.tagName !== "INPUT") {
        setShowMenu(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);

    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="navbar__container">
      <div className="navbar__container--list">
        <Grid container justifyContent="space-between">
          <Grid item xs={1.6} sm={1.6} md={1.6} lg={1.6} xl={1.6}>
            <div className="navbar__container--icon">
              <img src={`/images/Logo.svg`} alt="" />
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <div className="navbar__container--search">
              <input
                placeholder="Search here"
                value={inputText}
                onChange={inputHandler}
                onClick={() => setShowMenu(!showMenu)}
              />
              <AiOutlineSearch />
              <div className="navbar__container--slash">
                <CgFormatSlash />
              </div>
              {showMenu ? (
                <div className="navbar__container--menu">
                  {filteredList.length === 0 ? (
                    <List item={jsonData.slice(0, 3)} />
                  ) : (
                    <List item={filteredList} />
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </Grid>
          <Grid item xs={3} sm={4} md={4} lg={4} xl={4}>
            <div className="navbar__container--options">
              <div className="navbar__container--links">
                <ul>
                  <li>
                    <BiHomeCircle />
                    <Link hrefLang="/"> Home</Link>
                  </li>
                  <li>
                    <IoPeopleOutline />
                    <Link hrefLang="/">Network</Link>
                  </li>
                  <li>
                    <BiHomeCircle />
                    <Link hrefLang="/"> Jobs</Link>
                  </li>
                </ul>
              </div>
              <div className="toggle-theme-wrapper">
                <label className="toggle-theme" htmlFor="checkbox">
                  <input
                    type="checkbox"
                    id="checkbox"
                    onChange={toggleTheme}
                    defaultChecked={defaultDark}
                  />
                  <div className="slider round"></div>
                </label>
              </div>
            </div>
          </Grid>
          <Grid item xs={2.3} sm={2.3} md={2.3} lg={2.3} xl={2.3}>
            <div className="navbar__container--info">
              <div className="navbar__container--info1">
                <ul>
                  <li>
                    <Link hrefLang="/">
                      {" "}
                      <BsChatDots />
                    </Link>
                  </li>
                  <li>
                    <Link hrefLang="/">
                      {" "}
                      <MdNotifications />
                    </Link>
                  </li>
                  <li style={{ marginTop: "-10px" }}>
                    <span> John</span>
                    <Avatar
                      alt="Cindy Baker"
                      xs={{ innerHeight: 18 }}
                      src={`/images/male-02.png`}
                    />
                    <MdOutlineKeyboardArrowDown />
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Navbar;

import { Avatar, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiHomeCircle, BiShoppingBag } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { MdNotifications, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { AnimatePresence, motion, useCycle } from "framer-motion";

import { Link } from "react-router-dom";
import { CgFormatSlash } from "react-icons/cg";
import List from "../../components/list/List";
import jsonData from "../../assets/data/data.json";

import {
  GiFamilyHouse,
  GiHamburgerMenu,
  GiTireIronCross,
} from "react-icons/gi";

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
  window.dispatchEvent(new Event("storage"));
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
  window.dispatchEvent(new Event("storage"));
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

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const [inputText, setInputText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );

  //** for detecting the theme
  useEffect(() => {
    const handleStorageChange = () => {
      setCurrentTheme(localStorage.getItem("theme"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  //* Search filter input handler
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
              {currentTheme === "dark" ? (
                <img src={`/images/logoDark.png`} alt="" />
              ) : (
                <img src={`/images/Logo.svg`} alt="" />
              )}
            </div>
          </Grid>
          <Grid item xs={0} sm={8} md={2} lg={4} xl={4}>
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

          {/* animated hamburger */}
          <Grid item xs={0} sm={0} md={0} lg={0} xl={0}>
            <div>
              <div className="navbar__container--hamburger">
                <AnimatePresence>
                  {open && (
                    <motion.aside
                      initial={{ translateX: 300 }}
                      animate={{
                        width: "100%",
                        //x: "-300px"
                        translateX: 0,
                      }}
                      exit={{
                        //width: 0,
                        translateX: 300,
                        transition: { delay: 0.7, duration: 0.3 },
                      }}
                    >
                      <motion.div
                        className="hamburger__container"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sideVariants}
                      >
                        <div>
                          <ul>
                            <motion.li
                              whileHover={{ scale: 1.1 }}
                              variants={itemVariants}
                            >
                              <BiHomeCircle />
                              <Link hrefLang="/"> Home</Link>
                            </motion.li>
                            <motion.li>
                              <IoPeopleOutline />
                              <Link hrefLang="/">Network</Link>
                            </motion.li>
                            <motion.li>
                              <BiShoppingBag />
                              <Link hrefLang="/"> Jobs</Link>
                            </motion.li>
                            <div className="toggle-theme-wrapper">
                              <label
                                className="toggle-theme"
                                htmlFor="checkbox"
                              >
                                <input
                                  type="checkbox"
                                  id="checkbox"
                                  onChange={toggleTheme}
                                  defaultChecked={defaultDark}
                                />
                                <div className="slider round"></div>
                              </label>
                            </div>
                            <div
                              className="navbar__container--info"
                              style={{ display: "inline" }}
                            >
                              <div className="navbar__container--info1">
                                <ul>
                                  <li>
                                    <Link hrefLang="/">
                                      {" "}
                                      <BsChatDots />
                                      <div className="navbar__container--online">
                                        <div></div>
                                      </div>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link hrefLang="/">
                                      {" "}
                                      <MdNotifications size={23} />
                                      <div className="navbar__container--online">
                                        <div></div>
                                      </div>
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

                            <motion.li
                              whileHover={{ scale: 1.1 }}
                              variants={itemVariants}
                            ></motion.li>
                          </ul>
                        </div>
                      </motion.div>
                    </motion.aside>
                  )}
                </AnimatePresence>
                <button onClick={() => cycleOpen()}>
                  {open ? (
                    <GiTireIronCross size={22} />
                  ) : (
                    <GiHamburgerMenu size={25} />
                  )}
                </button>
              </div>
            </div>
          </Grid>

          <Grid item xs={0} sm={4} md={4} lg={4} xl={4}>
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
                    <BiShoppingBag />
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
          <Grid item xs={0} sm={2.3} md={2.3} lg={2.3} xl={2.3}>
            <div className="navbar__container--info">
              <div className="navbar__container--info1">
                <ul>
                  <li>
                    <Link hrefLang="/">
                      {" "}
                      <BsChatDots />
                      <div className="navbar__container--online">
                        <div></div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link hrefLang="/">
                      {" "}
                      <MdNotifications size={23} />
                      <div className="navbar__container--online">
                        <div></div>
                      </div>
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

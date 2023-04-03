import React, { useEffect } from "react";
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
import jsonData from "../assets/data/data.json";

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
  const [data, setData] = useState(jsonData);
  const [isActive, setIsActive] = useState(0);
  const [toggleButton, setToggleButton] = useState(false);
  const [available, setAvailable] = useState(true);
  const [talent, setTalent] = useState(true);
  const [service, setService] = useState("all");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");

  console.log(available, talent, service, price, sort);

  //* handle change for toggle
  const handleAvailable = (event) => {
    setAvailable(event.target.checked);
  };
  const handleTalent = (event) => {
    setTalent(event.target.checked);
  };

  //* handle change for price
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  //*code for filtration
  useEffect(() => {
    const result = jsonData
      //*filter for services
      .filter((data) => {
        return service === "all"
          ? data
          : service !== "all"
          ? data.skills.includes(service)
          : data;
      })

      //*filter for availability
      .filter((data) => {
        return available === true ? data.availability === true : data;
      })
      //*filter for talent
      .filter((data) => {
        return talent === true ? data.talent === true : data;
      })
      //*filter for sorting
      .filter((data) => {
        return sort === "topRated"
          ? data.topRated === true
          : sort === "perHour"
          ? data
          : data;
      });
    console.log("Results from new", result);
    setData(result);
  }, [price, sort, service, available, talent]);

  const ITEM_HEIGHT = 48;

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
                    <label htmlFor="prices">
                      <FaMoneyBillWave /> Price per hr:
                    </label>
                    {/* <button
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
                    </Menu> */}
                  </div>
                </div>
                <div className="search__section--services">
                  <div>
                    <label
                      for="services"
                      className="search__section--dropdown"
                      id="basic-button"
                      aria-controls={open2 ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open2 ? "true" : undefined}
                      onClick={handleClick2}
                    >
                      <FaTags />{" "}
                      <p className="search__section--label">Services:</p>{" "}
                      <span>{service}</span>
                    </label>

                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl2}
                      open={open2}
                      onClose={handleClose2}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "13ch",
                          marginTop: ".3ch",
                          marginLeft: "0ch",
                        },
                      }}
                    >
                      <select
                        name="cars"
                        id="cars"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                      >
                        <option value="all" selected>
                          All
                        </option>
                        <option value="UI">UI Design</option>
                        <option value="Front-end">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="NFT">Nft</option>
                      </select>
                    </Menu>
                  </div>
                </div>
                <div className="search__section--rate">
                  <div className="search__section--dropdow">
                    <label
                      for="sort"
                      className="search__section--dropdown"
                      id="basic-button"
                      aria-controls={open3 ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open3 ? "true" : undefined}
                      onClick={handleClick3}
                    >
                      <CgSortAz size={20} />
                      <p className="search__section--label">Sort by:</p>{" "}
                      <span>{sort}</span>
                    </label>

                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl3}
                      open={open3}
                      onClose={handleClose3}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "13ch",
                          marginTop: ".3ch",
                          marginRight: "5ch",
                          right: 0,
                        },
                      }}
                    >
                      <select
                        name="sort"
                        id="sort"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                      >
                        <option value="volvo" selected disabled>
                          Rating
                        </option>

                        <option value="perHour">Price per hr</option>
                        <option value="topRated">Top rated</option>
                      </select>
                    </Menu>
                  </div>
                </div>
              </div>
              <div className="search__section--right">
                <div className="search__section--toggles">
                  <div className="search__section--available search__section--toggle">
                    <Switch
                      checked={available}
                      onChange={handleAvailable}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <p>Available to work</p>
                  </div>
                  <div className="search__section--tallent search__section--toggle">
                    <Switch
                      checked={talent}
                      onChange={handleTalent}
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
        <GridSection data={data} />
      ) : isActive === 1 ? (
        <ListSection data={data} />
      ) : null}
    </div>
  );
};

export default Home;

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //*code for filtration
  useEffect(() => {
    const name = "";
    const lowerCaseValue = name.toLowerCase().trim();
    const city = "Barcelona";
    const rating = "3.0356909" * 1;
    console.log();
    console.log(name);
    console.log("i run again");
    //Filter options updated so apply all filters here

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
                  </div>
                </div>
                <div className="search__section--rate">
                  <div className="search__section--dropdown">
                    <label for="rating">
                      <CgSortAz size={20} /> Sort by:
                    </label>

                    <select
                      name="cars"
                      id="rating"
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                    >
                      <option value="volvo" selected disabled>
                        Rating
                      </option>

                      <option value="perHour">Price per hr</option>
                      <option value="topRated">Top rated</option>
                    </select>
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

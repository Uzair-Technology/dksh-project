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
import { RxCross2 } from "react-icons/rx";
import { styled, alpha, Box } from "@mui/system";
import SliderUnstyled, {
  sliderUnstyledClasses,
} from "@mui/base/SliderUnstyled";
import Footer from "../common/footer/Footer";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  GiFamilyHouse,
  GiHamburgerMenu,
  GiTireIronCross,
} from "react-icons/gi";
import { AiOutlineCheck } from "react-icons/ai";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { MdKeyboardArrowDown } from "react-icons/md";

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

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  300: "#66B2FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledSlider = styled(SliderUnstyled)(
  ({ theme }) => `
  color: ${theme.palette.mode === "light" ? blue[500] : blue[300]};
  height: 6px;
  width: 100%;
  padding: 16px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    opacity: 1;
  }

  &.${sliderUnstyledClasses.disabled} { 
    pointer-events: none;
    cursor: default;
    color: ${theme.palette.mode === "light" ? grey[300] : grey[600]};
    opacity: 0.5;
  }

  & .${sliderUnstyledClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
    opacity: 0.4;
  }

  & .${sliderUnstyledClasses.track} {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
  }

  & .${sliderUnstyledClasses.thumb} {
    position: absolute;
    width: 16px;
    height: 16px;
    margin-left: -6px;
    margin-top: -6px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 3px solid currentColor;
    background-color: #fff;

    :hover,
    &.${sliderUnstyledClasses.focusVisible} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === "light" ? blue[400] : blue[300],
        0.15
      )};
    }

    &.${sliderUnstyledClasses.active} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === "light" ? blue[200] : blue[300],
        0.3
      )};
    }
  }

  & .${sliderUnstyledClasses.mark} {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
    top: 50%;
    opacity: 0.7;
    transform: translateX(-50%);
  }

  & .${sliderUnstyledClasses.markActive} {
    background-color: #fff;
  }
`
);

function valuetext(value) {
  return `${value}°C`;
}

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

const Home = () => {
  const [age, setAge] = React.useState("");

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  //*states
  const [open, cycleOpen] = useCycle(false, true);
  const [data, setData] = useState(jsonData);
  const [isActive, setIsActive] = useState(0);
  const [toggleButton, setToggleButton] = useState(false);
  const [available, setAvailable] = useState(false);
  const [talent, setTalent] = useState(false);
  const [service, setService] = useState("all");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");
  const [value, setValue] = useState([300, 700]);

  //** handle change for range price
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //* handle change for toggle
  const handleAvailable = (event) => {
    setAvailable(event.target.checked);
  };
  const handleTalent = (event) => {
    setTalent(event.target.checked);
  };

  //* handle change for price
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  //**for second dropdown */
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  //**for third dropdown */
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  //* filter by price
  const handleFilterPrice = () => {
    const documents = jsonData.filter((data) => {
      const documentPrice = parseFloat(data.perHour);
      if (isNaN(documentPrice)) {
        return false;
      }
      return (
        documentPrice >= parseFloat(value?.[0]) &&
        documentPrice <= parseFloat(value?.[1])
      );
    });
    console.log("filter by price", documents);
    setData(documents);
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

  //** custom selection arrays
  const servicesArray = [
    { value: "all", label: "All" },
    { value: "Front-end", label: "Frontend" },
    { value: "Backend", label: "Backend" },
    { value: "NFT", label: "NFT" },
    { value: "UI", label: "UI" },
  ];

  const sortsArray = [
    { value: "perHour", label: "Price per hr" },
    { value: "topRated", label: "Top Rated" },
  ];

  return (
    <div>
      <Navbar />
      {/* checks if the total length of data changes means any filtration applied */}
      <HeroSection
        props={data.length < 16 ? [true, data.length] : [false, 0]}
      />

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
                    className={`show__talent--desktop ${
                      !toggleButton === false ? "active" : ""
                    }`}
                    onClick={() => {
                      setToggleButton(!toggleButton);
                    }}
                  >
                    <BiFilterAlt />
                  </button>
                  <button
                    className={`show__talent--mobile ${
                      !toggleButton === false ? "active" : ""
                    }`}
                    onClick={() => {
                      cycleOpen();
                    }}
                  >
                    <BiFilterAlt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hamburger for filtration */}
      <div className="filtration__container--hamburger">
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
                <div className="hamburger__container--card">
                  <div className="hamburger__container--button">
                    <h3>Filters</h3>
                    <button onClick={() => cycleOpen()}>
                      <GiTireIronCross size={22} />
                    </button>
                  </div>
                  <div className="search__section">
                    <div className="container">
                      <div className="search__section--list">
                        <div className="search__section--right">
                          <div
                            className="search__section--price"
                            style={{ width: "100%" }}
                          >
                            <div className="search__section--dropdown">
                              <Accordion
                                sx={{
                                  width: "100%",
                                }}
                              >
                                <AccordionSummary
                                  expandIcon={<MdKeyboardArrowDown />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                  sx={{
                                    boxShadow: "none",
                                    borderTop: "none",
                                    borderBottom: "none",
                                    width: "100%",
                                  }}
                                >
                                  <Typography>
                                    <div className="dropdown__label">
                                      <FaMoneyBillWave /> Price per hr: $
                                      {value?.[0]}
                                    </div>
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography>
                                    <div className="search__section--slider">
                                      <p>Price</p>
                                      <div className="search__section--range">
                                        {/* controlled: */}
                                        <StyledSlider
                                          value={value}
                                          onChange={handleChange}
                                          getAriaLabel={() =>
                                            "Temperature range"
                                          }
                                          getAriaValueText={valuetext}
                                          min={0}
                                          max={1000}
                                        />
                                      </div>
                                      <div className="search__section--prices flex-between">
                                        <span>{value?.[0]}$</span>
                                        <span>{value?.[1]}$</span>
                                      </div>
                                      <div className="search__section--input">
                                        <div className="search__section--from">
                                          <label htmlFor="from">From</label>
                                          <input
                                            type="text"
                                            disabled
                                            placeholder={`${value?.[0]}$`}
                                            value={value?.[0]}
                                            onChange={handleChange}
                                          />
                                        </div>
                                        <div className="search__section--to">
                                          <label htmlFor="from">To</label>
                                          <input
                                            type="text"
                                            disabled
                                            placeholder={`${value?.[1]}$`}
                                            value={value?.[1]}
                                            onChange={handleChange}
                                          />
                                        </div>
                                      </div>
                                      <div className="search__section--buttons">
                                        <div className="search__section--cancel">
                                          <button onClick={handleClose1}>
                                            Cancel
                                          </button>
                                        </div>
                                        <div className="search__section--apply">
                                          <button onClick={handleFilterPrice}>
                                            Apply
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                            </div>
                          </div>

                          <div
                            className="search__section--services"
                            style={{ width: "100%" }}
                          >
                            <div className="search__section--dropdown">
                              <Accordion
                                sx={{
                                  width: "100%",
                                }}
                              >
                                <AccordionSummary
                                  expandIcon={<MdKeyboardArrowDown />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                  sx={{
                                    boxShadow: "none",
                                    borderTop: "none",
                                    borderBottom: "1px solid #cdcdcd",
                                    width: "100%",
                                    // marginBottom: "1rem"
                                  }}
                                >
                                  <Typography>
                                    <div className="dropdown__label">
                                      <FaTags /> Services: {service}
                                    </div>
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography>
                                    <ul>
                                      {servicesArray.map((item) => (
                                        <li
                                          key={item.value}
                                          onClick={() => setService(item.value)}
                                          className={
                                            service === item.value
                                              ? "selected"
                                              : ""
                                          }
                                        >
                                          {item.label}
                                        </li>
                                      ))}
                                    </ul>
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                            </div>
                          </div>

                          <div
                            className="search__section--rate"
                            style={{ width: "100%" }}
                          >
                            <div className="search__section--dropdown">
                              <Accordion
                                sx={{
                                  width: "100%",
                                }}
                              >
                                <AccordionSummary
                                  expandIcon={<MdKeyboardArrowDown />}
                                  aria-controls="panel2a-content"
                                  id="panel2a-header"
                                  sx={{
                                    boxShadow: "none",
                                    borderTop: "none",
                                    borderBottom: "1px solid #cdcdcd",
                                    width: "100%",
                                    // marginBottom: "1rem"
                                  }}
                                >
                                  <Typography>
                                    <div className="dropdown__label">
                                      <CgSortAz size={20} />
                                      Sort by:
                                      <span>{sort}</span>
                                    </div>
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography>
                                    <ul>
                                      {sortsArray.map((item) => (
                                        <li
                                          key={item.value}
                                          onClick={() => setSort(item.value)}
                                          className={
                                            sort === item.value
                                              ? "selected"
                                              : ""
                                          }
                                        >
                                          {item.label}
                                        </li>
                                      ))}
                                    </ul>
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
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

                  <div className="hamburger__container--footer">
                    <button
                      onClick={() => {
                        setService("all");
                        setValue([300, 700]);
                        setTalent(false);
                        setAvailable(false);
                        setSort("");
                      }}
                    >
                      <RxCross2 /> Reset filter
                    </button>
                    <button onClick={() => cycleOpen()}>
                      <AiOutlineCheck /> Apply filter
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>

      {toggleButton === true ? (
        <div>
          {/* filtration for desktop */}
          <div className="search__section">
            <div className="container">
              <div className="search__section--list">
                <div className="search__section--right">
                  <div className="search__section--price">
                    <div className="search__section--dropdown">
                      <label
                        htmlFor="prices"
                        id="basic-button"
                        aria-controls={open1 ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open1 ? "true" : undefined}
                        onClick={handleClick1}
                      >
                        <FaMoneyBillWave /> Price per hr: ${value?.[0]}
                      </label>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl1}
                        open={open1}
                        onClose={handleClose1}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 50,
                            width: "30ch",
                            marginTop: "1ch",
                            marginLeft: "-.7ch",
                          },
                        }}
                      >
                        <div className="search__section--slider">
                          <p>Price</p>
                          <div className="search__section--range">
                            {/* controlled: */}
                            <StyledSlider
                              value={value}
                              onChange={handleChange}
                              getAriaLabel={() => "Temperature range"}
                              getAriaValueText={valuetext}
                              min={0}
                              max={1000}
                            />
                          </div>
                          <div className="search__section--prices flex-between">
                            <span>{value?.[0]}$</span>
                            <span>{value?.[1]}$</span>
                          </div>
                          <div className="search__section--input">
                            <div className="search__section--from">
                              <label htmlFor="from">From</label>
                              <input
                                type="text"
                                disabled
                                placeholder={`${value?.[0]}$`}
                                value={value?.[0]}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="search__section--to">
                              <label htmlFor="from">To</label>
                              <input
                                type="text"
                                disabled
                                placeholder={`${value?.[1]}$`}
                                value={value?.[1]}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="search__section--buttons">
                            <div className="search__section--cancel">
                              <button onClick={handleClose1}>Cancel</button>
                            </div>
                            <div className="search__section--apply">
                              <button onClick={handleFilterPrice}>Apply</button>
                            </div>
                          </div>
                        </div>
                      </Menu>
                    </div>
                  </div>
                  <div className="search__section--services">
                    <div className="search__section--dropdown">
                      <label
                        for="services"
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
                            width: "14ch",
                            marginTop: "1ch",
                            marginLeft: "0ch",
                          },
                        }}
                      >
                        <ul style={{ padding: "10px" }}>
                          {servicesArray.map((item) => (
                            <li
                              key={item.value}
                              onClick={() => {
                                setService(item.value);
                                handleClose2();
                              }}
                              className={
                                service === item.value ? "selected" : ""
                              }
                            >
                              {item.label}
                            </li>
                          ))}
                        </ul>
                      </Menu>
                    </div>
                  </div>
                  <div className="search__section--rate">
                    <div className="search__section--dropdown">
                      <label
                        for="sort"
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
                            width: "16ch",
                            marginTop: "1ch",
                            marginRight: "5ch",
                            right: 0,
                          },
                        }}
                      >
                        <ul style={{ padding: "10px" }}>
                          {sortsArray.map((item) => (
                            <li
                              key={item.value}
                              onClick={() => {
                                setSort(item.value);
                                handleClose3();
                              }}
                              className={sort === item.value ? "selected" : ""}
                            >
                              {item.label}
                            </li>
                          ))}
                        </ul>
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
        </div>
      ) : (
        ""
      )}

      {isActive === 0 ? (
        <GridSection data={data} />
      ) : isActive === 1 ? (
        <ListSection data={data} />
      ) : null}

      <Footer />
    </div>
  );
};
export default Home;

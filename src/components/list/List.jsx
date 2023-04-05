import { Avatar } from "@mui/material";
import React from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const List = ({ item }) => {
  console.log(item);
  return (
    <div className="list__section">
      <div className="list__section--container">
        <div className="list__section--list">
          <ul>
            <li className="list__section--talent flex-between">
              <div className="list__section--avatar">
                Talents
                <span>{item.length}</span>
              </div>
              <div className="list__section--name">
                <a href="">See All</a>
              </div>
            </li>
            {item.map((el) => (
              <li>
                <div className="list__section--user flex-center">
                  <div className="list__section--avatar">
                    <Avatar
                      sx={{ width: "30px", height: "30px" }}
                      src={`/images/${el.personImage}`}
                    />
                  </div>
                  <div className="list__section--name">{el.personName}</div>
                </div>
                <div className="list__section--info">
                  <div className="list__section--rating">
                    <img src={`/images/Shape.png`} />
                    {el.rating}
                  </div>
                  <div className="list__section--comments">
                    <GoComment style={{ margin: "5px 10px -5px 0" }} />
                    {el.comments}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <ul>
            <li className="list__section--talent flex-between">
              <div className="list__section--avatar">
                Services
                <span>{item.length}</span>
              </div>
              <div className="list__section--name">
                <a href="">See All</a>
              </div>
            </li>
            {item.map((el) => (
              <li>
                <div className="list__section--user flex-center">
                  <div className="list__section--avatar">
                    <Avatar
                      sx={{
                        width: "14px",
                        height: "14px",
                        backgroundColor: "#EDF0F3",
                        padding: "7px",
                      }}
                      src={`/images/search.png`}
                    />
                  </div>
                  <div className="list__section--name">{el.personName}</div>
                </div>
                <div
                  className="list__section--people"
                  style={{ width: "79px", textAlign: "end" }}
                >
                  <div className="list__section--comments">
                    <IoPeopleOutline style={{ margin: "5px 10px -3px 0" }} />
                    <span>144</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="list__section--footer">
            <div className="list__section--menus">
              <div className="list__section--box">
                <div className="list__section--icon">
                  <MdKeyboardArrowUp />
                </div>

                <div className="list__section--icon">
                  <MdKeyboardArrowDown />
                </div>
                <span>To Navigate</span>
              </div>
              <div className="list__section--box">
                <div className="list__section--icon">
                  <BsArrowReturnLeft />
                </div>
                <span>To Select</span>
              </div>
              <div className="list__section--box">
                <div className="list__section--icon">
                  <BsArrowReturnLeft />
                </div>
                <span>To Dismiss</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

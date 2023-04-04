import { Avatar } from "@mui/material";
import React from "react";
import { GoComment } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";

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
          <img src="/images/menu.png" alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default List;

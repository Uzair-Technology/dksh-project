import { Grid } from "@mui/material";
import React from "react";
import { GoComment } from "react-icons/go";

const ListCard = ({ item }) => {
  const {
    personName,
    personImage,
    skills,
    projectImages,
    comments,
    rating,
    topRated,
    perHour,
    availability,
    totalHours,
    verified,
    talent,
    description,
  } = item;
  console.log(verified);
  return (
    <div className="list__card">
      <div className="card">
        <Grid container>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <div className="user__info">
              <div className="user__image"></div>
              {verified ? (
                <img
                  src="/public/images/correct.png"
                  alt="icon"
                  className="user__icon"
                />
              ) : (
                ""
              )}
            </div>
          </Grid>

          <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
            <div className="card__body">
              <div className="">
                <h3 className="user__name">{personName}</h3>
              </div>
              <p className="card__body--description">{description}</p>
              <h3 className="hourly__rate">
                ${perHour}
                <span>/hour</span>
              </h3>
              <div className="card__footer">
                <div className="card__footer--left">
                  <a href="">
                    <GoComment />{" "}
                  </a>
                  <a href="">{comments}</a>
                  <a href="" className="comments">
                    comments
                  </a>
                </div>
                <div className="card__footer--right">
                  <div className="rating__number">{rating}/5</div>
                  <div className="rating__text">Rating</div>
                </div>
              </div>
              ​
            </div>
          </Grid>
          <Grid item xs={3.2} sm={3.2} md={3.2} lg={3.2} xl={3.2}>
            <div className="card__body--boxes">
              {skills.map((item, i) => (
                <div className="box cylinder--box--1" key={i}>
                  {item}
                </div>
              ))}
              <div className="box round--box">+3</div>
            </div>
          </Grid>
          <Grid item xs={4.8} sm={4.8} md={4.8} lg={4.8} xl={4.8}>
            <div className="card__header">
              <div className="card__header--images">
                {projectImages.map((item, i) => (
                  <div
                    className="card__header--image card__header--image-1"
                    style={{ backgroundImage: `url(/images/${item})` }}
                  ></div>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ListCard;

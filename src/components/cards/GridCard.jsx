import React from "react";

import { GoComment } from "react-icons/go";

const GridCard = ({ item }) => {
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
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header--images">
          {projectImages.map((item, i) => (
            <div
              className="card__header--image card__header--image-1"
              style={{ backgroundImage: `url(/images/${item})` }}
            ></div>
          ))}
          {/* <div className="card__header--image card__header--image-2"></div>
          <div className="card__header--image card__header--image-3"></div> */}
          <div className="user__info">
            <div className="user__image"></div>
            <h5 className="user__name">{personName}</h5>
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
        </div>
        <div className="price__tag">
          <span>${perHour}</span>/hour
        </div>
      </div>
      <div className="card__body">
        <p className="card__body--description">{description}</p>​
        <div className="card__body--boxes">
          {skills.map((item, i) => (
            <div className="box cylinder--box--1" key={i}>
              {item}
            </div>
          ))}
          <div className="box round--box">+3</div>
        </div>
      </div>
      <div className="card__footer">
        <div className="card__footer--left">
          <a href="">
            <GoComment />
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
    </div>
  );
};

export default GridCard;

import React from "react";

import { GoComment } from "react-icons/go";

const GridCard = () => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header--images">
          <div className="card__header--image card__header--image-1"></div>
          <div className="card__header--image card__header--image-2"></div>
          <div className="card__header--image card__header--image-3"></div>
          <div className="user__info">
            <div className="user__image"></div>
            <h5 className="user__name">Ryan Jackson</h5>
            <img
              src="/public/images/correct.png"
              alt="icon"
              className="user__icon"
            />
          </div>
        </div>
        <div className="price__tag">
          <span>$60</span>/hour
        </div>
      </div>
      <div className="card__body">
        <p className="card__body--description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          placeat aliquam.
        </p>
        ​
        <div className="card__body--boxes">
          <div className="box cylinder--box--1">UI Design</div>
          <div className="box cylinder--box--2">UX Design</div>
          <div className="box round--box">+3</div>
        </div>
      </div>
      <div className="card__footer">
        <div className="card__footer--left">
          <a href="">
            <GoComment />{" "}
          </a>
          <a href="">12</a>
          <a href="" className="comments">
            comments
          </a>
        </div>
        <div className="card__footer--right">
          <div className="rating__number">3.5/2</div>
          <div className="rating__text">Rating</div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;

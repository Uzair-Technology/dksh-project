import { Grid } from "@mui/material";
import React from "react";
import { GoComment } from "react-icons/go";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ListCard = ({ item }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
              <div
                className="user__image"
                style={{ backgroundImage: `url(/images/${personImage})` }}
              ></div>
              {verified ? (
                <img
                  src={`/images/correct.png`}
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
                  <button onClick={handleClickOpen}>
                    <div className="rating__number">{rating}/5</div>
                    <div className="rating__text">Rating</div>
                  </button>
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        // PaperProps={{
        //   sx: {
        //     width: "40ch",
        //     minWidth: "40ch",
        //     marginLeft: "75%",
        //     maxHeight: "90vh",
        //     // marginRight: "10px",
        //     padding: "15px"
        //   },
        // }}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="modal__section modal" id="modal__card">
          <div className="modal__section modal__header">
            <h3 className="modal__section modal__header--text">Reviews</h3>
            <span className="modal__section modal__header--icon">
              <button onClick={handleClose}>
                <img src="images/Icon (Stroke).png" alt="close" />
              </button>
            </span>
          </div>
          <div className="modal__section divider"></div>
          <div className="modal__section user">
            <div className="modal__section user__image">
              <img
                src="images/male-01.png"
                alt="profile-pic"
                className="modal__section user__image--user"
              />

              <img
                src="images/Light mode.png"
                alt="icon"
                className="modal__section user__active--icon"
              />
            </div>
            <h4 className="modal__section user__name">Ryan Jackson</h4>
            <div className="modal__section user__rating">
              <span>4.6</span>/5
            </div>
            <div className="modal__section divider"></div>
            <div className="modal__section comments">
              <p className="modal__section comment__text">Comments</p>
              <p className="modal__section comment__number">32</p>
            </div>
          </div>

          <div className="modal__section cards__wrapper">
            <div className="modal__section card">
              <div className="modal__section card__header">
                <div className="modal__section card__header--left">
                  <div className="modal__section modal__section--card card__header--left--icon">
                    <img src="images/Shape.png" alt="" />
                  </div>
                  <div className="modal__section card__header--left--rating">
                    <span>5.0</span>/5
                  </div>
                </div>
                <div className="modal__section card__header--right">
                  <img src="images/action.png" alt="action-btn" />
                </div>
              </div>

              <div className="modal__section card__body">
                <h4 className="modal__section card__heading">
                  Gift Giving Website
                </h4>
                <div className="modal__section card__description">
                  <p className="modal__section card__description--text">
                    Yevhen produced a wireframe, ui and design style guide for a
                    custom e-commerce site. He did the work on time and with a
                    great design eye. Nice design touch
                  </p>
                </div>
              </div>

              <div className="modal__section card__footer">
                <img
                  src="images/calender.png"
                  alt="calender"
                  className="modal__section card__footer--icon"
                />
                <span className="modal__section date">
                  {" "}
                  april 4, 2023 5:00 PM{" "}
                </span>
              </div>
            </div>

            <div className="modal__section card">
              <div className="modal__section card__header">
                <div className="modal__section card__header--left">
                  <div className="modal__section card__header--left--icon">
                    <img src="images/Shape.png" alt="" />
                  </div>
                  <div className="modal__section card__header--left--rating">
                    <span>5.0</span>/5
                  </div>
                </div>
                <div className="modal__section card__header--right">
                  <img src="images/action.png" alt="action-btn" />
                </div>
              </div>

              <div className="modal__section card__body">
                <h4 className="modal__section card__heading">
                  Design Four Startup Web UX/UI Screens and Logo
                </h4>
                <div className="modal__section card__description">
                  <p className="modal__section card__description--text">
                    evhen, our designer, has done an outstanding job on this
                    project. Not only did he bring his considerable design
                    skills to the table, but he also collaborated effectively
                    with the rest of the team, listening to feedback and
                    incorporating suggestions to create a final product that
                    exceeded our expectations. Yevhen's attention to detail,
                    creativity, and professionalism were invaluable to the
                    success of this project. We are fortunate to have such a
                    talented and dedicated designer on our team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ListCard;

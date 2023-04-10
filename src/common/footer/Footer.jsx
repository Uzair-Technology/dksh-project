import React from "react";
import { BiHomeCircle, BiShoppingBag } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__section">
      <div className="footer__section--container">
        <div className="footer__section--list">
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
        <div className="footer__section--bar">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

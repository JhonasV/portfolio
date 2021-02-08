import React from "react";
import { NavLink } from "react-router-dom";
import SocialIconList from "../SocialIcon/SocialIconList/SocialIconList";
import Avatar from "../../assets/img/avatar.jpg";
const Navbar = () => (
  <div>
    <div className="row mt-2">
      <div
        className="col-sm-12 col-md-12 col-lg-12"
        style={{ textAlign: "center" }}
      >
        <img
          style={{ width: "235px", height: "235px", borderRadius: "50%" }}
          src={Avatar}
          alt="Jhonas Veras"
        />
      </div>
      <div
        className="col-sm-12 col-md-12 col-lg-12 mt-2"
        style={{ textAlign: "center" }}
      >
        <h3>Nelson J. Veras</h3>
      </div>
      <div
        className="col-sm-12 col-md-12 col-lg-12 mt-2"
        style={{ textAlign: "center" }}
      >
        <h4>Software Developer</h4>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col">
        <NavLink
          activeClassName="active"
          to="/"
          className="btn btn-secondary btn-block"
        >
          Projects
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/about"
          className="btn btn-secondary btn-block"
        >
          About
        </NavLink>
      </div>
    </div>
    <div className="row mt-3 ml-1">
      <SocialIconList />
    </div>
  </div>
);

export default Navbar;

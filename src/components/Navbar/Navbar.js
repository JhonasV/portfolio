import React from "react";
import { NavLink } from "react-router-dom";
import SocialIconList from "../SocialIcon/SocialIconList/SocialIconList";

const Navbar = () => (
  <div>
    <div className="row mt-2">
      <div
        className="col-sm-12 col-md-12 col-lg-12"
        style={{ textAlign: "center" }}
      >
        <img
          style={{ width: "150px", height: "150px" }}
          src="https://media.licdn.com/dms/image/C4E03AQEGrYyWaSYXZQ/profile-displayphoto-shrink_200_200/0?e=1577318400&v=beta&t=WFlsu_a0FnhpvaQIcvzCmy9gF6K5TIuTAA1cQqF9wsI"
          alt="Jhonas Veras"
        />
      </div>
      <div
        className="col-sm-12 col-md-12 col-lg-12 mt-2"
        style={{ textAlign: "center" }}
      >
        <h3>Nelson Jhonas Veras</h3>
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
      {/* <a
        className="mr-2"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/nelson-jhonas-veras-amador-b9b896150/"
      >
        <h1 className="text-white">
          <i className="fab fa-linkedin"></i>
        </h1>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/JhonasV/groupcon"
      >
        {" "}
        <h1 className="text-white">
          <i className="fab fa-github"></i>
        </h1>
      </a> */}
      <SocialIconList />
      {/* <div className="col">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/nelson-jhonas-veras-amador-b9b896150/"
        >
          <h1 className="text-white">
            <i className="fab fa-linkedin"></i>
          </h1>
        </a>
      </div> */}
    </div>
  </div>
);

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

import options from "../../assets/data/navoptions.json";

const NavOptions = () => (
  <div>
    {options.map((option) => {
      if (option.show) {
        return (
          <NavLink
            key={option.id}
            to={option.pathname}
            className="btn btn-secondary btn-block"
          >
            {option.name}
          </NavLink>
        );
      }
    })}
  </div>
);

export default NavOptions;

import { Menu } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { buttons } from "../../../data/buttons-navegation-bar";
import "./navigationbar.css";

export default function NavigationBar() {
  const location = useLocation();

  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <div className="navigation-bar">
      <img src="./svg/menu.svg" alt="" />
      <div className="navigation-bar-icons">
        {buttons.map((button) =>
          url === button.rute ? (
            <NavLink to={button.rute} style={{ textDecoration: "none" }}>
              <div className="active-button">
                <img
                  className="active-img"
                  src={button.imgActive}
                  alt={button.button}
                />
                <p className="active-p">{button.button}</p>
              </div>
            </NavLink>
          ) : (
            <NavLink to={button.rute} style={{ textDecoration: "none" }}>
              <div>
                <img src={button.img} alt={button.button} />
                <p>{button.button}</p>
              </div>
            </NavLink>
          )
        )}
      </div>
      <img src="./svg/logout.svg" alt="logout" />
    </div>
  );
}

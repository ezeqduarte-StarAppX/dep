import { Star } from "@mui/icons-material";
import { Rating } from "@mui/material";
import React from "react";
import "./CardCarrouselHome.css";

export default function CardCarrouselHome({ component }) {
  return (
    <div className="cardCarrouselHome">
      <div>
        <img
          className="imgFondoCardCarrousel"
          src={component.fotoGrande}
          alt={component.nombreClub}
        />
        <div className="population">
          <img src="./svg/population.svg" alt="" />
          <img src="./svg/population.svg" alt="" />
          <img src="./svg/population.svg" alt="" />
        </div>
        <img className="smallImage" src={component.fotoEscudo} alt="" />
      </div>
      <p className="name-club">{component.nombreClub}</p>
      <p className="direction-club">{component.direccion}</p>
    </div>
  );
}

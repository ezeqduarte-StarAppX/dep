import React from "react";
import "./cardClub.css";
import { motion } from "framer-motion";

export default function CardClub({ component }) {
  return (
    <motion.div className="cardCarrouselHome">
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
    </motion.div>
  );
}

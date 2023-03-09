import React from "react";
import "./cardEntrenador.css";

export default function CardEntrenador({ component }) {
  return (
    <div className="cardCarrouselEntrenador">
      <div>
        <img
          className="cardCarrouselEntrenador"
          src={component.fotoGrande}
          alt={component.nombreClub}
        />
        <img
          className="small-Image-Entrenador"
          src={component.fotoEscudo}
          alt=""
        />
      </div>
      <div className="info-card-entrenador">
        <p className="name-entrenador">{component.nombreEntrenador}</p>
        <p className="type-entrenador">{component.tipo}</p>
        <div className="ubication-entrenador">
          <img src="./svg/ubication.svg" alt="" />
          <p>{component.direccion}</p>
        </div>
      </div>
    </div>
  );
}

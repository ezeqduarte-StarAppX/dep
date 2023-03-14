import React from "react";
import "./CardCarrouselPopularLeague.css";

export default function CardCarrouselPopularLeague({ liga }) {
  console.log(liga);

  return (
    <div className="card-carrousel-Popular-League">
      <img src={liga?.fotos[0]} alt={liga.nombreLiga} />
      <div className="quantity-league">
        <p>
          {liga.totalDePersonas} / {liga.maximoDePersonas}
        </p>
        <img src="./svg/perfil.svg" alt="" />
      </div>
      <div className="info-card-popular-league">
        <p>{liga.nombreLiga}</p>
        <p>{liga.direccion}</p>
        <p>{liga.Descripcion}</p>
        <div className="times-Popular-League">
          {liga.horarios.map((horario) => (
            <p>{horario}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

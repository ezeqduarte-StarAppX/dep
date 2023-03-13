import React from "react";
import { useSelector } from "react-redux";
import "./cardEntrenador.css";

export default function CardEntrenador({ component }) {
  let { estadoFiltrarEntrenadores } = useSelector(
    (store) => store.navegationReducer
  );

  return (
    <div className="cardCarrouselEntrenador">
      {/* //probando fondo negro */}
      <div className="negroPrueba"></div>
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
        {estadoFiltrarEntrenadores && (
          <div className="price-duration-entrenador">
            <p>
              <span>{component.duracion}</span> desde
            </p>
            <p>${component.precio} ARS</p>
          </div>
        )}
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

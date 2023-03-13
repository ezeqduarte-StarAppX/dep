import React from "react";
import "./cardSelectTurn.css";

export default function CardSelectTurn({ club }) {
  return (
    <div className="card-select-turn">
      <p className="price-select-turn"> $1500 ars</p>
      <div className="name-cancha">
        <img src="./svg/cancha.svg" alt="cancha-X" />
        <p>Cancha 1 - F5</p>
      </div>
      <div className="specifications-cancha">
        <p> Césped sintetico | </p>
        <p> Con iluminacion | </p>
        <p> Descubierta | </p>
        <p> Con camaras .</p>
      </div>
    </div>
  );
}

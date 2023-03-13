import React from "react";
import "./reserva.css";

export default function Reserva({ reserva }) {
  return (
    <div className="card-reserva">
      <div className="date-reserva">
        <div>
          <p>23</p>
          <p>feb</p>
        </div>
      </div>
      <div className="info-card-reserva">
        <p>BOCA JUNIOR CLUB</p>
        <div>
          <p>CANCHA N1 - FUTBOL 5</p>
          <p>20:00 - 21:00 hs</p>
          <p>60 min</p>
        </div>
        <div className="actions-reservas">
          <p>Cancelar reserva</p>
          <p>Posponer reserva</p>
        </div>
        <p id="condiciones-reserva">
          Antes de realizar una cancelacion o posponer la reserva, usted debe
          cumplir con los terminos y condiciones de nuestas politicas.
        </p>
      </div>
    </div>
  );
}

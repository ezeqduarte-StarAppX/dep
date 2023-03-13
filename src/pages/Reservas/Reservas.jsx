import React from "react";
import InfoReserva from "../../componentes/Reservas/Info-Reserva/InfoReserva";
import Reserva from "../../componentes/Reservas/Reserva/Reserva";
import "./reservas.css";

const reservas = [
  {
    club: "Barcelona CLUB",
    cancha: { numero: 1, tipo: "Futbol 5" },
    horarioInicio: "20:00",
    horarioFinalizar: "21:00",
    duracion: "60",
    fecha: "26 Feb",
  },
  {
    club: "Barcelona CLUB",
    cancha: { numero: 1, tipo: "Futbol 5" },
    horarioInicio: "20:00",
    horarioFinalizar: "21:00",
    duracion: "60",
    fecha: "26 Feb",
  },
];

export default function Reservas() {
  return (
    <div className="principal-div">
      <div className="reservas-main">
        <div className="mis-reservas">
          <p>MIS RESERVAS:</p>
          <div className="filter-reservas">
            <p>ACTIVAS</p>
            <p>PASADAS</p>
            <p>CANCELADAS</p>
          </div>
          <div className="all-reservas">
            {reservas.map((reserva) => (
              <Reserva reserva={reserva}></Reserva>
            ))}
          </div>
        </div>
        <InfoReserva></InfoReserva>
      </div>
    </div>
  );
}

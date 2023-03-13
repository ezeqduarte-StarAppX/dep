import React from "react";
import "./infoReserva.css";

export default function InfoReserva() {
  return (
    <div className="info-reserva">
      <div className="principal-info-reserva">
        <img
          src="https://images3.alphacoders.com/990/990040.jpg"
          alt="club-reserva"
        />
        <div>
          <p>CLUB RIVER PLATE - CANCHA N1</p>
          <p>Direccion, Barrio, Provincia</p>
        </div>
      </div>
      <div className="more-info-reserva">
        <div>
          <p>Categoria</p>
          <p>Tenis</p>
        </div>
        <div>
          <p>Estado</p>
          <p>Activa</p>
        </div>
        <div>
          <p>Precio</p>
          <p>$1500</p>
        </div>
      </div>
      <div className="details-info-reserva">
        <div>
          <img src="./svg/private.svg" alt="partido-privado" />
          <p>Partido Privado</p>
        </div>
        <div>
          <img src="./svg/reserved.svg" alt="cancha-reservada" />
          <p>Cancha reservada</p>
        </div>
      </div>

      <div className="extend-info-reserva">
        <h4>Informacion del partido</h4>
        <div>
          <p>Dia: </p> <span>Domingo 29/01/2022</span>
        </div>
        <div>
          <p>Hora:</p> <span>20:00 - 21:00hs</span>
        </div>
        <div>
          <p>Duracion: </p> <span>60min</span>
        </div>
        <div className="code">
          <p>Codigo de reserva:</p> <span> PLTI15</span>
        </div>

        <h4>Informacion del partido</h4>
        <div>
          <p>Resta Pagar: </p> <span>$1500 ARS</span>
        </div>
        <div>
          <p>Seña:</p> <span>$500 ARS</span>
        </div>
        <div>
          <p>PRECIO: </p> <span id="final-price">$1500 ARS</span>
        </div>
      </div>
    </div>
  );
}

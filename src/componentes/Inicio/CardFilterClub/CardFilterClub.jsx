import React from "react";
import "./cardFilterClub.css";

export default function CardFilterClub() {
  return (
    <div className="card-filter-club">
      <img
        src="https://alquilatucancha.com/uploads/clubs/bg/irlandes-gba-norte.jpeg?875941"
        alt="foto-cancha"
      />
      <div className="filter-img-card-filter-club" />
      <div className="price-filter-club">
        <p>1H DESDE</p>
        <div>
          <span>$1500</span>
          <p>ARS</p>
        </div>
      </div>
      <div className="name-filter-club">
        <div>
          <p>Winners Club</p>
          <img src="./svg/verified.svg" alt="verified-club" />
        </div>
        <div>
          <img src="./svg/message.svg" alt="message-club" />
          <img src="./svg/call.svg" alt="call-club" />
        </div>
      </div>
      <p>50km - CABA, Buenos Aires</p>
      <div>
        <img src="./svg/population.svg"></img>
        <img src="./svg/population.svg"></img>
        <img src="./svg/population.svg"></img>
        <img src="./svg/population.svg"></img>
        <img src="./svg/population.svg"></img>
      </div>
      <div className="times-filter-club">
        <p>19:00</p>
        <p>20:00</p>
        <p>21:00</p>
      </div>
    </div>
  );
}

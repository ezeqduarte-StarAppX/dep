import React from "react";
import "./cardPopularClubes.css";

export default function CardPopularClubes({club}) {
  

  return (
    <div className="card-popular-clubes">
      <img src={club.fotoGrande} alt={club.nombreClub} />
      <div className="info-popular-club">
        <div>
          <p className="name-popular-club">{club.nombreClub}</p>
          <p className="direction-popular-club">{club.direccion}</p>
        </div>
        <div className="population-popular-club">
          <img src="./svg/population.svg" />
          <img src="./svg/population.svg" />
          <img src="./svg/population.svg" />
          <img src="./svg/population.svg" />
        </div>
        <div className="servicies">
          {club.servicies.map((service) => (
            <div>
              <img src={service.img} alt={service.name} />
              <p>{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

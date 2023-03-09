import React from "react";
import CardCarrouselClubes from "../../componentes/Inicio/CardCarrouselHome/CardCarrouselHome";
import CarrouselHome from "../../componentes/Inicio/CarrouselHome/CarrouselHome";
import { clubes } from "../../data/arrayPruebaCarrousel";
import "./inicio.css";

export default function Inicio() {
  return (
    <div className="principal-div">
      <div className="inicio-div">
        <div className="carrouselHome">
          <p>CLUBES</p>
          <CarrouselHome components={clubes} card={<CardCarrouselClubes />} />
        </div>
        <div className="carrouselHome">
          <p>ENTRENADORES</p>
          <CarrouselHome components={clubes} />
        </div>
      </div>
    </div>
  );
}

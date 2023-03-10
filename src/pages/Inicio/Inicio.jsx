import React from "react";
import CarrouselHome from "../../componentes/Inicio/CarrouselHome/CarrouselHome";

import { clubes } from "../../data/arrayPruebaCarrousel";
import { entrenadores } from "../../data/arrayPruebaCarrousel2";
import "./inicio.css";

export default function Inicio() {
  return (
    <div className="principal-div">
      <div className="inicio-div">
        <div className="carrouselHome">
          <p>CLUBES</p>
          <CarrouselHome components={clubes.slice(0,15)} />
        </div>
        <div className="carrouselHome">
          <p>ENTRENADORES</p>
          <CarrouselHome components={entrenadores.slice(0,15)} />
        </div>
      </div>
    </div>
  );
}

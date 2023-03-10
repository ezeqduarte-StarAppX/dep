import React, { useRef } from "react";
import CarrouseClubesPopulares from "../../componentes/Inicio/CarrouselClubesPopulares/CarrouseClubesPopulares";
import CarrouselHome from "../../componentes/Inicio/CarrouselHome/CarrouselHome";
import CardPopularClubes from "../../componentes/TypesCards/PopularClubes/CardPopularClubes";

import { clubes } from "../../data/arrayPruebaCarrousel";
import { entrenadores } from "../../data/arrayPruebaCarrousel2";
import "./inicio.css";

export default function Inicio() {
  return (
    <div className="principal-div">
      <div className="inicio-div">
        <div className="carrouselHome">
          <div className="infoCarrouselHome">
            <p>CLUBES POPULARES</p>
            <span className="ver-mas">Ver mas</span>
          </div>
          <CarrouseClubesPopulares
            components={clubes.slice(0, 10)}
          ></CarrouseClubesPopulares>
        </div>

        <div className="carrouselHome">
          <div className="infoCarrouselHome">
            <p>CLUBES</p>
            <span className="ver-mas">Ver mas</span>
          </div>
          <CarrouselHome components={clubes.slice(0, 15)} />
        </div>
        {/* <div className="carrouselHome">
          <div className="infoCarrouselHome">
            <p>ENTRENADORES</p>
            <span className="ver-mas">Ver mas</span>
          </div>
          <CarrouselHome components={entrenadores.slice(0, 15)} />
        </div> */}
      </div>
    </div>
  );
}

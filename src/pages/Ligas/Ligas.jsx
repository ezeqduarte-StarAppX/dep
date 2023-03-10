import React from "react";
import "./ligas.css";
import CarrouseClubesPopulares from "../../componentes/Inicio/CarrouselPopulares/CarrouselPopulares";
import CarrouselPopulares from "../../componentes/Inicio/CarrouselPopulares/CarrouselPopulares";

import { ligas } from "../../data/arrayPruebaLigas";
import ScreenHome from "../../componentes/Inicio/ScreenHome/ScreenHome";
import CardCarrouselPopularLeague from "../../componentes/TypesCards/CardCarrouselPopularLeague/CardCarrouselPopularLeague";

export default function Ligas() {
  return (
    <div className="ligas-div-principal">
      <div>
        <ScreenHome
          text={"Ligas Populares"}
          carrousel={
            <CarrouselPopulares components={ligas}></CarrouselPopulares>
          }
        ></ScreenHome>
        <ScreenHome
          text={"Ligas Abiertas"}
          carrousel={
            <div className="all-leagues">
              {ligas.map((liga) => (
                <CardCarrouselPopularLeague
                  liga={liga}
                ></CardCarrouselPopularLeague>
              ))}
            </div>
          }
        ></ScreenHome>
      </div>
    </div>
  );
}

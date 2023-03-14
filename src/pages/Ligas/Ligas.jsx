import React from "react";
import "./ligas.css";
import CarrouseClubesPopulares from "../../componentes/Inicio/CarrouselPopulares/CarrouselPopulares";
import CarrouselPopulares from "../../componentes/Inicio/CarrouselPopulares/CarrouselPopulares";

import { ligas } from "../../data/arrayPruebaLigas";
import ScreenHome from "../../componentes/Inicio/ScreenHome/ScreenHome";

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
      </div>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import CarrouseClubesPopulares from "../../componentes/Inicio/CarrouselClubesPopulares/CarrouseClubesPopulares";
import CarrouselHome from "../../componentes/Inicio/CarrouselHome/CarrouselHome";
import ScreenFilters from "../../componentes/Inicio/ScreenFilters/ScreenFilters";
import ScreenHome from "../../componentes/Inicio/ScreenHome/ScreenHome";
import { clubes } from "../../data/arrayPruebaCarrousel";
import { entrenadores } from "../../data/arrayPruebaCarrousel2";
import "./inicio.css";

export default function Inicio() {
  let { estadoFiltrarClubes, estadoFiltrarEntrenadores } = useSelector(
    (store) => store.navegationReducer
  );

  return (
    <div className="principal-div">
     {/*   <div className="inicio-div">
        {!estadoFiltrarClubes && !estadoFiltrarEntrenadores && (
          <ScreenHome
            text1={"Clubes"}
            text2={"Entrenadores"}
            carrousel1={<CarrouselHome components={clubes.slice(0, 15)} />}
            carrousel2={
              <CarrouselHome components={entrenadores.slice(0, 15)} />
            }
          ></ScreenHome>
        )}

        {estadoFiltrarClubes && (
          <ScreenHome
            text1={"Clubes Populares"}
            text2={"Clubes"}
            carrousel1={
              <CarrouseClubesPopulares components={clubes.slice(0, 10)} />
            }
            carrousel2={<CarrouselHome components={clubes.slice(0, 15)} />}
          ></ScreenHome>
        )}

        {estadoFiltrarEntrenadores && (
          <ScreenHome
            text1={"Entrenadores"}
            text2={"Entrenadores"}
            carrousel1={
              <CarrouselHome components={entrenadores.slice(0, 15)} />
            }
            carrousel2={
              <CarrouselHome components={entrenadores.slice(0, 15)} />
            }
          ></ScreenHome>
        )}
      </div> */}
      <ScreenFilters></ScreenFilters>
    </div>
  );
}

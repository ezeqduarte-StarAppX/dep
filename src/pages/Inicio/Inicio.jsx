import React from "react";
import { useSelector } from "react-redux";

import CarrouselHome from "../../componentes/Inicio/CarrouselHome/CarrouselHome";
import CarrouselPopulares from "../../componentes/Inicio/CarrouselPopulares/CarrouselPopulares";

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
      <div className="inicio-div">
        {!estadoFiltrarClubes && !estadoFiltrarEntrenadores && (
          <>
            <ScreenHome
              text={"Clubes"}
              text2={"Entrenadores"}
              carrousel={<CarrouselHome components={clubes.slice(0, 15)} />}
              carrousel2={
                <CarrouselHome components={entrenadores.slice(0, 15)} />
              }
            ></ScreenHome>
            <ScreenHome
              text={"Entrenadores"}
              carrousel={
                <CarrouselHome components={entrenadores.slice(0, 15)} />
              }
            ></ScreenHome>
          </>
        )}

        {estadoFiltrarClubes && (
          <>
            <ScreenHome
              text={"Clubes Populares"}
              carrousel={
                <CarrouselPopulares components={clubes.slice(0, 10)} />
              }
            ></ScreenHome>
            <ScreenHome
              text={"Clubes"}
              carrousel={<CarrouselHome components={clubes.slice(0, 15)} />}
            ></ScreenHome>
          </>
        )}

        {estadoFiltrarEntrenadores && (
          <>
            <ScreenHome
              text={"Entrenadores"}
              carrousel={
                <CarrouselHome components={entrenadores.slice(0, 15)} />
              }
            ></ScreenHome>
            <ScreenHome
              text={"Entrenadores"}
              carrousel={
                <CarrouselHome components={entrenadores.slice(0, 15)} />
              }
            ></ScreenHome>
          </>
        )}
      </div>
      {/*  <ScreenFilters></ScreenFilters> */}
    </div>
  );
}

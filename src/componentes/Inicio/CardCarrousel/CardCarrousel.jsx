import React from "react";
import CardClub from "../../TypesCards/Clubes/CardClub";
import CardEntrenador from "../../TypesCards/Entrenador/CardEntrenador";
import "./CardCarrousel.css";

export default function CardCarrouselClubes({ component }) {
  if (component.type.toLowerCase() === "club") {
    return <CardClub component={component} />;
  }

  if (component.type.toLowerCase() === "entrenador") {
    return <CardEntrenador component={component}></CardEntrenador>;
  }
}

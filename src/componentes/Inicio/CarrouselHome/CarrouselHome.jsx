import React from "react";
import CardCarrousel from "../CardCarrousel/CardCarrousel";
import "./carrouselHome.css";

export default function CarrouselHome({ components, card }) {
  return (
    <div className="CardsCarrouselHome">
      {components.map((component) => (
        <CardCarrousel component={component}></CardCarrousel>
      ))}
      <p className="ver-mas">Ver mas</p>
    </div>
  );
}



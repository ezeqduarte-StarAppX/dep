import React from "react";
import CardCarrouselHome from "../CardCarrouselHome/CardCarrouselHome";
import "./carrouselHome.css";

export default function CarrouselHome({ components, card }) {
  return (
    <div className="CardsCarrouselHome">
      {components.map((component) => (
        <CardCarrouselHome component={component}></CardCarrouselHome>
      ))}
    </div>
  );
}

import React from "react";
import CardCarrouselPopularClub from "../CardCarrouselPopularClub/CardCarrouselPopularClub";
import CardCarrouselPopularLeague from "../CardCarrouselPopularLeague/CardCarrouselPopularLeague";
import "./cardCarrouselPopular.css";

export default function CardCarrouselPopular({ club }) {
  if (club.type === "club") {
    return <CardCarrouselPopularClub club={club}></CardCarrouselPopularClub>;
  }

  if (club.type === "liga") {
    return (
      <CardCarrouselPopularLeague liga={club}></CardCarrouselPopularLeague>
    );
  }
}

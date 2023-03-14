import React from "react";

export default function ScreenHome({ text, carrousel }) {
  return (
    <div className="carrouselHome">
      <div className="infoCarrouselHome">
        <p>{text}</p>
        <span className="ver-mas">Ver mas</span>
      </div>
      {carrousel}
    </div>
  );
}

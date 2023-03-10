import React from "react";

export default function ScreenHome({text1, text2, carrousel1, carrousel2}) {
  return (
    <>
      <div className="carrouselHome">
        <div className="infoCarrouselHome">
          <p>{text1}</p>
          <span className="ver-mas">Ver mas</span>
        </div>
        {carrousel1}
      </div>

      <div className="carrouselHome">
        <div className="infoCarrouselHome">
          <p>{text2}</p>
          <span className="ver-mas">Ver mas</span>
        </div>
        {carrousel2}
      </div>
    </>
  );
}

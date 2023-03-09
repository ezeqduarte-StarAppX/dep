import React from "react";
import InputLogin from "../../componentes/Login/InputLogin/InputLogin";
import Reserved from "../../componentes/Login/reserved/Reserved";

import "../Registro/registro.css";

export default function ResPass() {
  return (
    <div className="principal-div">
      <div className="image-login"></div>
      <div className="circle"></div>
      <div className="info-login">
        <h1 className="orange">Depor</h1>
        <div className="spaceForm">
          <h2>Restablecer contraseña:</h2>
          <div className="form-login">
            <InputLogin
              text1={"Contraseña"}
              text2={"Recorde mi contraseña"}
              password={true}
            />
          </div>
        </div>
        <div className="navigate-login">
          <button>Enviar Solicitud</button>
        </div>
        <Reserved />
      </div>
    </div>
  );
}

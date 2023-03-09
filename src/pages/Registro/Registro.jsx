import { Checkbox } from "@mui/material";
import React from "react";
import InputLogin from "../../componentes/Login/InputLogin/InputLogin";
import Reserved from "../../componentes/Login/reserved/Reserved";
import "./registro.css";

export default function Registro() {
  return (
    <div className="principal-div">
      <div className="image-login"></div>
      <div className="circle"></div>
      <div className="info-login">
        <h1 className="orange">Depor</h1>
        <div className="spaceForm">
          <h2>Crear cuenta:</h2>
          <div className="form-login">
            <InputLogin text1={"Email"} />
            <InputLogin text1={"Contraseña"} password={true} />
            <InputLogin text1={"Confirmar contraseña"} password={true} />
            <div className="terms-condition">
              <Checkbox />
              <p>
                Acepto los{" "}
                <span className="orange">Terminos y condiciones</span> y la{" "}
                <span className="orange">Politica de privacidad</span>.
              </p>
            </div>
            <p className="orange terms-condition2">
              Terminos y condiciones; Politica de privacidad.
            </p>
          </div>
        </div>
        <div className="navigate-login">
          <button>Crear cuenta</button>
          <p>
            Ya tienes cuenta? <span className="orange"> Inicia Sesión.</span>
          </p>
        </div>

        <Reserved />
      </div>
    </div>
  );
}

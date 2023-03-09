import React from "react";
import InputLogin from "../../componentes/Login/InputLogin/InputLogin";
import Reserved from "../../componentes/Login/reserved/Reserved";
import "../Registro/registro.css";

export default function Login() {
  return (
    <div className="principal-div">
      <div className="image-login"></div>
      <div className="circle"></div>
      <div className="info-login">
        <h1 className="orange">Depor</h1>
        <div className="spaceForm">
          <h2>Iniciar sesión:</h2>
          <div className="form-login">
            <InputLogin text1={"Email"} />
            <InputLogin
              text1={"Contraseña"}
              text2={"Olvide mi contraseña"}
              password={true}
            />
          </div>
        </div>
        <div className="navigate-login">
          <button>Iniciar sesión</button>
          <p>
            No tienes una cuenta? <span className="orange">Crear cuenta.</span>
          </p>
        </div>
        <Reserved />
      </div>
    </div>
  );
}

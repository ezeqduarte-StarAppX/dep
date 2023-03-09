import React from "react";
import SearchBar from "../../componentes/Inicio/SearchBar/SearchBar";
import "./inicio.css";

const usuario = {
  imagen: "",
  Nombre: "",
  tag: "",
};

const clubes = [{}, {}, {}];

const entrenadores = [{}, {}, {}];

export default function Inicio() {
  return (
    <div className="principal-div">
      <SearchBar></SearchBar>
      <div className="inicio-div"></div>
    </div>
  );
}

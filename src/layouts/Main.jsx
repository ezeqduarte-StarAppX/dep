import React from "react";
import { useHref, useNavigate } from "react-router-dom";
import NavigationBar from "../componentes/Inicio/NavigationBar/NavigationBar";
import SearchBar from "../componentes/Inicio/SearchBar/SearchBar";

export default function Main(props) {
  const href = useHref();
  console.log(href);

  return href === "/registro" ||
    href === "/login" ||
    href === "/nueva-contrasena" ||
    href === "/restablecer-contrasena" ? (
    <>{props.children}</>
  ) : (
    <>
      <SearchBar></SearchBar>
      <div className="mainDiv">
        <NavigationBar></NavigationBar>
        {props.children}
      </div>
    </>
  );
}

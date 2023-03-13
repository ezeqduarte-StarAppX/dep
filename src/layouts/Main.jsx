import React from "react";
import { useHref } from "react-router-dom";
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
      <div className="mainDiv">
        <SearchBar></SearchBar>
        <div className="mainDiv">
          <NavigationBar></NavigationBar>
          {props.children}
        </div>
      </div>
    </>
  );
}

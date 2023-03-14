import { Search } from "@mui/icons-material";
import React from "react";
import "./searchBar.css";
import { useDispatch, useSelector } from "react-redux";
import navegationActions from "../../../redux/actions/navegationActions";
import InputDate from "../input-dates/InputDate";

export default function SearchBar() {
  const dispatch = useDispatch();
  let { estadoFiltrarClubes, estadoFiltrarEntrenadores, filtrosActivos } =
    useSelector((store) => store.navegationReducer);

  const filtrarEntrenadores = () => {
    dispatch(navegationActions.filtrarEntrenadores());
  };

  const filtrarClubes = () => {
    dispatch(navegationActions.filtrarClubes());
  };

  const filtersOnOff = () => {
    dispatch(navegationActions.activarFiltros());
    console.log(filtrosActivos);
  };

  return (
    <div className="search-bar">
      <div>
        <img src="./svg/menu.svg" alt="" />
      </div>
      <div className="center-div-search-bar">
        <div className="filters">
          <div className="input-filter" onClick={filtersOnOff}>
            <Search></Search>
            <input placeholder="Buscar" type="text" />
          </div>
          {estadoFiltrarClubes ? (
            <p className="active-searchBar" onClick={filtrarClubes}>
              CLUBES
            </p>
          ) : (
            <p onClick={filtrarClubes}>CLUBES</p>
          )}

          <p>|</p>

          {estadoFiltrarEntrenadores ? (
            <p className="active-searchBar" onClick={filtrarEntrenadores}>
              ENTRENADORES
            </p>
          ) : (
            <p onClick={filtrarEntrenadores}>ENTRENADORES</p>
          )}
        </div>
        {/* <div className="welcome-search-bar">
          <p>Hola Jorge, Oscar</p>
          <span>Perfil de Liga</span>
        </div> */}
      </div>
      <InputDate />
    </div>
  );
}

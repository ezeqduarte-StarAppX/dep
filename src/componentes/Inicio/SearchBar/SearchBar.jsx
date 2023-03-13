import { Search } from "@mui/icons-material";
import React from "react";
import "./searchBar.css";
import { useDispatch, useSelector } from "react-redux";
import navegationActions from "../../../redux/actions/navegationActions";

export default function SearchBar() {
  const dispatch = useDispatch();
  let { estadoFiltrarClubes, estadoFiltrarEntrenadores } = useSelector(
    (store) => store.navegationReducer
  );

  const filtrarEntrenadores = () => {
    dispatch(navegationActions.filtrarEntrenadores());
  };

  const filtrarClubes = () => {
    dispatch(navegationActions.filtrarClubes());
  };

  return (
    <div className="search-bar">
      <div>
        <img src="./svg/menu.svg" alt="" />
      </div>
      <div className="filters">
        <div className="input-filter">
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
      <div className="dates-user">
        <img
          className="pic-user"
          src="https://images.unsplash.com/photo-1572540688236-4eb938e8c099?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80"
          alt="foto-usuario"
        />
        <div>
          <p className="username">Jorge Oscar</p>
          <p className="tagname">@jorgeoscar</p>
        </div>
        <img src="./svg/NotificationOn.svg" alt="notificacion" />
      </div>
    </div>
  );
}

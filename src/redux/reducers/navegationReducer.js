import { createReducer } from "@reduxjs/toolkit";
import { entrenadores } from "../../data/arrayPruebaCarrousel2";
import navegationActions from "../actions/navegationActions";

const { filtrarEntrenadores , filtrarClubes } = navegationActions;

const initialState = {
  estadoFiltrarEntrenadores: false,
  estadoFiltrarClubes: false,
};

const navegationReducer = createReducer(initialState, (builder) => {
  builder.addCase(filtrarEntrenadores, (state, action) => {
    if (state.estadoFiltrarClubes) {
      return {
        ...state,
        estadoFiltrarEntrenadores: !state.estadoFiltrarEntrenadores,
        estadoFiltrarClubes: false,
      };
    }
    return {
      ...state,
      estadoFiltrarEntrenadores: !state.estadoFiltrarEntrenadores,
    };
  });

  builder.addCase(filtrarClubes, (state, action) => {
    if (state.estadoFiltrarEntrenadores) {
      return {
        ...state,
        estadoFiltrarClubes: !state.estadoFiltrarClubes,
        estadoFiltrarEntrenadores: false,
      };
    }
    return {
      ...state,
      estadoFiltrarClubes: !state.estadoFiltrarClubes,
    };
  });
});

export default navegationReducer;

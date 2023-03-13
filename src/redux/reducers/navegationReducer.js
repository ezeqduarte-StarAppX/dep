import { createReducer } from "@reduxjs/toolkit";
import navegationActions from "../actions/navegationActions";

const { filtrarEntrenadores, filtrarClubes, reservarHorario } =
  navegationActions;

const initialState = {
  estadoFiltrarEntrenadores: false,
  estadoFiltrarClubes: false,
  reservarHorarioPop: false,
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

  builder.addCase(reservarHorario, (state, action) => {
    return {
      ...state,
      reservarHorarioPop: !state.reservarHorarioPop
    };
  });
});

export default navegationReducer;

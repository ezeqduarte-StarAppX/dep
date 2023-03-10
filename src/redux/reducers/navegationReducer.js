import { createReducer } from "@reduxjs/toolkit";
import navegationActions from "../actions/navegationActions";

const { filtrarEntrenadores } = navegationActions;


const initialState = {
  entrenadores: false,
  clubes: false,
};

const navegationReducer = createReducer(initialState, (builder) => {
  builder.addCase(filtrarEntrenadores, (state, action) => {
    return {
      ...state,
      TodosLosproductos: response,
    };
  });
});

export default navegationReducer;

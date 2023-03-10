import { createAction } from "@reduxjs/toolkit";

const filtrarEntrenadores = createAction("filtrarEntrenadores", (aprove) => {
  return {
    payload: "filtrar",
  };
});

const filtrarClubes = createAction("filtrarClubes", (aprove) => {
    return {
      payload: "filtrar",
    };
  });

const navegationActions = { filtrarEntrenadores, filtrarClubes };

export default navegationActions;
